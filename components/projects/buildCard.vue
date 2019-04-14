<template>
  <div class="projectCard">
    <div class="table">
      <div class="row titleTable">
        <div class="col-0">Status</div>
        <div class="col-1">Branch</div>
        <div class="col-2">Updated</div>
        <div class="col-3 ">Domain</div>
      </div>
      <div class="row" v-for="job in orderdJobs" :v-key="job.id">
        <div class="col-0" v-if="job.status === 'BUILD_SCHEDULED'"><div class="loading"></div> Building Instance</div>
        <div class="col-0" v-if="job.status === 'BUILD_CANCELLED'">Build cancelled</div>
        <div class="col-0" v-if="job.status === 'DEPLOYMENT_PENDING'"><div class="loading"></div> Deploying Instance</div>
        <div class="col-0" v-if="job.status === 'DEPLOYMENT_SUCCESSFUL'"><span class="green"></span>Launched</div>
        <div class="col-0" v-if="job.status === 'DEPLOYMENT_FAILED'"><span class="red"></span>Deployment failed</div>
        <div class="col-1">{{job.branch}}</div>
        <div class="col-2"><timeago :datetime="job.finishedAt" :auto-update="1"></timeago></div>
        <div class="col-3"><a :href="'https://' + job.subDomain" target="_blank">{{removeHTTP(job.subDomain)}}</a></div>
      </div>
      <div class="row" v-if="!builds">
        <div class="col-0">There are no jobs yet.</div>
        <div class="col-1"></div>
        <div class="col-2"></div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buildCard',
  props: {
    builds: Array
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
    if (this.builds) {
      this.builds.forEach((element, index) => {
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
  .loading {
    float: left;
    position: relative;
    border: 2px solid #e8e7e7;
    border-top: 2px solid #4769ff;
    border-radius: 50%;
    width: 17px;
    height: 17px;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 0.7s linear infinite;
    margin-right: 11px;
    margin-left: -3px;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .projectCard {
    width: 100%;
    background: #F6F8FF;
    border: 1px solid #D6DDFF;
    box-sizing: border-box;
    border-radius: 6px;
  }

  .table {
    font-size: 14px;
    height: 100%;
    background: #fff;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom: 1px solid #D6DDFF;
    overflow-y: auto;
  }
  .table a {
    color: $gray-light;
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

  .table .row .col-0 {
    width: 14%;
  }
  .green {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #5FD574;
    margin-right: 16px;
  }
  .red {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: red;
    margin-right: 16px;
  }

  .table .row .col-1 {
    width: 18%;
  }

  .table .row .col-2 {
    width: 18%;
  }

  .table .row .col-3 {
    width: 50%;
    text-align: right;
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
