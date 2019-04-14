<template>
  <a class="projectCard">
    <div class="table">
      <div class="row titleTable">
        <div class="col-1">Branch</div>
        <div class="col-2">Updated</div>
        <div class="col-3">Domain</div>
      </div>
      <div class="row" v-for="job in orderdJobs" :key="job.id">
        <div class="col-1">{{job.branch}}</div>
        <div class="col-2"><timeago :datetime="job.finishedAt" :auto-update="1"></timeago></div>
        <div class="col-3"><a :href="job.subDomain" target="_blank">{{removeHTTP(job.subDomain)}}</a></div>
      </div>
      <div class="row" v-if="jobs.length === 0">
        <div class="col-1">There are no jobs yet.</div>
        <div class="col-2"></div>
        <div class="col-3"></div>
      </div>
    </div>
    <nuxt-link class="txt" :to="'/project/' + project.id">
      <div class="txtContent">
        <div class="projectTypeImg"></div>
        <div>
          <h3 class="mainBlue">{{project.name}}</h3>
          <span><timeago :datetime="project.createdAt" :auto-update="1"></timeago></span>
        </div>
      </div>
    </nuxt-link>
  </a>
</template>

<script>
export default {
  name: 'projectCard',
  components: {
  },
  props: {
    project: Object
  },
  computed: {
    orderdJobs () {
      return _.orderBy(this.jobs, ['finishedAt'], ['desc'])
    }
  },
  data () {
    return {
      jobs: []
    }
  },
  mounted () {
    if (this.project.branches) {
      this.project.branches.forEach((element, index) => {
        if (element.jobs) {
          element.jobs.forEach((job, index) => {
            this.jobs.push(job)
          })
        }
      })
    }
  },
  methods: {
    removeHTTP (url) {
      return url.replace('https://', '')
    }
  }
}
</script>

<style lang="scss" scoped>
  .projectCard {
    background: #F6F8FF;
    border: 1px solid #D6DDFF;
    box-sizing: border-box;
    border-radius: 6px;

  }

  .table {
    font-size: 14px;
    height: 70%;
    background: #fff;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom: 1px solid #D6DDFF;
    overflow-y: auto;
  }

  .table .titleTable {
    font-weight: 800;
    position: absolute;
    z-index: 2;
    width: 100%;
    background: #fff;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .table .row:nth-child(2) {
    margin-top: 48px;
  }

  .table .row {
    display: flex;
    border-bottom: 1px solid #D6DDFF;
    padding: 15px 30px;
    color: $gray-light;
  }

  .table .row:last-child {
    border-bottom: 0;
  }

  .table .row .col-1 {
    width: 25%;
  }

  .table .row .col-2 {
    width: 25%;
  }

  .table .row .col-3 {
    width: 50%;
  }
  .table a {
    color: $gray-light;
  }

  .projectCard .txt {
    height: 33%;
    display: flex;
    align-items: center;
    padding: 0 30px;
    color: $gray-light;
  }

  .projectCard .txt h3 {
    font-size: 18px;
    color: $blue;
  }

  .projectCard .txt span {
    font-size: 14px;
  }

  .projectCard .txt .projectTypeImg {
    background-size: contain;
    width: 40px;
    height: 40px;
    background-image: url("/img/layout/github-logo.png");
    margin-right: 15px;
  }

  .projectCard .txt .txtContent {
    display: flex;
  }

  .table::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  .table::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  .table::-webkit-scrollbar-thumb {
    background-color: #d7d7d7;
    opacity: .1;
  }

</style>
