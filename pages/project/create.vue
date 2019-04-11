<template>
  <section class="container">
    <!--CREATE PROJECTS-->
    <div class="createContainer" data-aos="fade-up" data-aos-duration="600">
      <h2>Create a new project</h2>
      <!-- COMPONENT STARTS-->
      <div class="component">
        <div class="title">
          <h4>Select your GitHub repository</h4>
          <p>We will pull your code from the selected GitHub repository to build and run your application.</p>
        </div>
        <div class="box">
          <div class="row m-b-25">
            <div class="col-left-sm">
              <img src="/img/layout/github-logo.png"/>
            </div>
            <div>
              <h2>GitHub</h2>
              <p>Select the GitHub repository that contains the projects source code.</p>
            </div>
          </div>
          <div class="row searchRow">
            <div class="col-left-sm">
            </div>
            <div class="col-100">
              <input ref="search" class="search" type="search" placeholder="search..." v-model="searchQuery">
            </div>
          </div>
          <div class="repos">
            <div class="row" v-for="repository in repositoriesSearch">
              <div class="col-left-sm">
                <input type="radio" name="repository" :id="repository.id" :value="repository.id" v-model="selectedRepo">
              </div>
              <div class="col-100">
                <label :for="repository.id">{{repository.fullName}}</label>
              </div>
            </div>
          </div>
          <div class="row" v-if="repositoriesSearch.length == 0">
            <div class="col-left-sm">
            </div>
            <div class="col-100">
              <label><b>There is no repository matching your search</b></label>
            </div>
          </div>
        </div>
      </div>
      <!--COMPONENT ENDS-->

      <!-- COMPONENT STARTS-->
      <div class="component branchComponent" v-if="selectedRepo" data-aos="fade-up" data-aos-duration="600">
        <div class="title">
          <h4>Select GitHub branches</h4>
          <p>Whenever you push changes to your GitHub source branch we will automatically launch your application on a respective target domain.</p>
        </div>
        <div class="box">
          <div class="row m-b-25">
            <div class="col-left-sm">
              <img class="branchIcon" src="/img/layout/branch-icon.png"/>
            </div>
            <div class="col-50">
              <h2>Source branch</h2>
              <p>from your Github repository</p>
            </div>
            <div class="col-50">
              <h2>Target subdomain</h2>
              <p>use it to access your app</p>
            </div>
          </div>
          <div class="row" v-for="branch in orderBranches">
            <div class="col-left-sm">
              <input type="checkbox" :id="branch.name" :value="branch.name" v-model="selectedBranches">
            </div>
            <div class="col-50">
              <label :for="branch.name">{{branch.name}}</label>
            </div>
            <div class="col-50">
              <p class="targetSub"><span @click="copy(branch.subDomain)" @mouseenter="copyHover" v-tooltip="{ content: copyContent.text, trigger: 'hover click', delay: {hide: copyContent.delay}, hideOnTargetClick: false }">{{branch.subDomain}} <span class="copy"></span></span></p>
            </div>
          </div>
        </div>
      </div>
      <!--COMPONENT ENDS-->
      <div class="component saveBtn" :class="{'disabled': selectedBranches.length === 0}">
        <button class="blueBtn" type="submit" value="Submit" @click="createProject">Launch your app</button>
        <p class="txt-center">Your application will be deployed on our servers and we will start listening to changes in your GitHub repository. Whenever you will push changes to your specified branches we will re-deploy using your latest code.</p>
      </div>

    </div>
  </section>
</template>

<script>
import { axiosRequest } from '../../assets/js/httpHelper'
export default {
  layout: 'createProject',
  data () {
    return {
      projectHash: '',
      repositories: [],
      repositoriesSearch: [],
      searchQuery: '',
      selectedRepo: null,
      branches: [],
      selectedBranches: [],
      copyContent: {
        text: 'Copy to clipboard',
        delay: 0
      }
    }
  },
  computed: {
    orderBranches () {
      return _.orderBy(this.branches, ['default', 'name'], ['desc', 'asc'])
    }
  },
  mounted () {
    this.$nextTick(() => this.$refs.search.focus())
    axiosRequest(this.$store, {
      method: 'GET',
      url: '/projects/hash'
    }).then(res => {
      this.projectHash = res.data.hash
    })
    axiosRequest(this.$store, {
      method: 'GET',
      url: '/github/repos'
    }).then(res => {
      this.repositories = res.data.repos
      this.repositoriesSearch = this.repositories
    })
  },
  watch: {
    selectedRepo (val) {
      if (val.length > 0) {
        this.getBranches()
        this.selectedBranches = []
      }
    },
    searchQuery (val) {
      if (val.length > 1) {
        this.repositoriesSearch = []
        this.repositories.forEach((element) => {
          if (element.fullName.includes(val) || element.fullName.toLowerCase().includes(val.toLowerCase())) {
            this.repositoriesSearch.push(element)
          }
        })
        if (this.repositoriesSearch.length === 1) {
          this.selectedRepo = this.repositoriesSearch[0].id
        }
      } else {
        this.repositoriesSearch = this.repositories
      }
    }
  },
  methods: {
    getBranches () {
      let repository = _.find(this.repositories, { id: this.selectedRepo })
      axiosRequest(this.$store, {
        method: 'GET',
        url: '/github/repos/' + repository.fullName + '/branches'
      }).then(res => {
        let branches = res.data.branches
        branches.forEach((element, index) => {
          let repository = _.find(this.repositories, { id: this.selectedRepo })
          if (element.name === repository.defaultBranch) {
            branches[index]['default'] = 1
            this.selectedBranches.push(element.name)
          } else {
            branches[index]['default'] = 0
          }
          branches[index]['subDomain'] = this.friendlyUrl(element.name) + '.' + this.projectHash + '.hostiflix.com'
        })
        this.branches = branches
      })
    },
    createProject () {
      let repository = _.find(this.repositories, { id: this.selectedRepo })
      let branches = []
      this.selectedBranches.forEach((element, index) => {
        let branch = _.find(this.branches, { name: element })
        let pushBranch = []
        pushBranch['name'] = element
        pushBranch['subDomain'] = branch.subDomain
        branches.push(pushBranch)
      })
      console.log(branches)
      axiosRequest(this.$store, {
        method: 'POST',
        url: '/projects',
        data: {
          hash: this.projectHash,
          name: repository.fullName,
          type: 'NODEJS',
          buildCode: 'npm install',
          startCode: 'npm run start',
          repositoryOwner: repository.owner,
          repositoryName: repository.fullName,
          branches
        }
      }).then(res => {

      })
    },
    friendlyUrl (value) {
      return value === undefined ? '' : value.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
    },
    copy (value) {
      this.$copyText(value)
      this.copyContent.text = 'Copied!'
      this.copyContent.delay = 900
      setTimeout(() => {
        this.copyContent.text = 'Copy to clipboard'
        this.copyContent.delay = 0
      }, 1400)
    },
    copyHover () {
      this.copyContent.text = 'Copy to clipboard'
      this.copyContent.delay = 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 90px 0 0 0;
    padding: 0;
  }
  .createContainer {
    background: #fff;
    border: $border-blue-light;
    width: 80%;
    max-width: 850px;
    margin: 50px auto;
    border-radius: 6px;
    padding: 50px;

  }
  .createContainer h2 {
    color: $blue;
    margin-bottom: 65px;
  }
  .title {
    margin-bottom: 25px;
  }
  .title h4 {
    font-size: 20px;
    color: $gray-dark;
    margin-bottom: 5px;
    font-weight: 400;
  }
  .createContainer p {
    font-size: 14px;
    color: $gray-light;
  }
  .component {
    margin-bottom: 45px;
  }
  .component:last-child {
    margin-bottom: 0;
  }
  .box {
    border: $border-blue-light;
    border-radius: 4px;
    padding: 35px;
  }
  .box h2{
    font-size: 16px;
    margin-bottom: 2px;
  }
  .box .repos {
    max-height: 300px;
    overflow: auto;
  }
  .box .row {
    display: flex;
    margin-bottom: 15px;
    align-items: center;
  }
  .box .row.searchRow {
    margin-bottom: 25px;
  }
  .box .row label {
    cursor: pointer;
  }
  .box .col-left-sm {
    width: 20%;
    max-width: 75px;
  }
  .col-100 {
    width: 100%;
  }
  .col-50 {
    width: 50%;
  }
  .box .col-left-sm img {
    max-width: 40px;
  }
  .search {
    border: $border-blue-light;
    border-radius: 4px;
    padding: 10px;
    font-size: 14px;
    width: 100%;
    height: 45px; outline: none;
  }
  .box label {
    font-size: 14px;
  }
  .box input[type="radio"], .box input[type="checkbox"] {
    margin-left: 17px;
  }
  .m-b-25 {
    margin-bottom: 25px!important;
  }
  .saveBtn.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
  .saveBtn p{
    padding: 20px 0 0;
  }
  .txt-center {
    text-align: center;
  }

  .copy{
    cursor: pointer;
    display: inline-block;
    margin-left: 5px;
    margin-top: 1px;
    width: 14px;
    height: 17px;
    background-image: url(~assets/img/layout/copy.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  /*branchComponent*/
  .box .col-left-sm img.branchIcon {
    max-width: 32px;
  }
  .branchComponent p.targetSub {
    color: $blue;
    cursor: pointer;
    position: relative;
  }
  .branchComponent p.targetSub:before {
    content: '';
    position: absolute;
    width: 26px;
    height: 16px;
    background-image: url("/img/layout/arrow-target.png");
    background-size: 26px;
    background-position: center;
    left: -40px;
    background-repeat: no-repeat;
    top: 2px;
  }

  .blueBtn {
    border-radius: 5px;
    background: $blue;
    width: 100%;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    height: 50px;
    border: none;
    font-weight: 900;
    cursor: pointer;
    outline: none;
    box-shadow: 0 10px 20px rgba(71, 105, 255, 0);
    transition: all 0.4s;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .blueBtn:hover{
    margin-top: -1px;
    box-shadow: 0 10px 20px rgba(71, 105, 255, 0.3);
    margin-bottom: 1px;
  }

</style>
