<template>
  <el-col :span="6" style="padding-right: 10px;">
    <el-card class="box-card" style="background-color: #ff4d4d;">
        <div slot="header" class="clearfix">
        <span>Back Log</span>
      </div>
      
      <div class="text item" v-for="(backlog, idx) in backlogList" :key="idx">
        <el-card>
          <div slot="header">
            <span>{{backlog.title}}</span>
          </div>
          <div class="text item" style="text-align: left;">
            <p>Point : {{backlog.point}}</p>
            <p>Assigned To: {{backlog.assign}}</p>
            <el-button @click="DetailPage(backlog)" size="mini" type="primary" style="float: right; margin-bottom: 10px;">
              Detail
            </el-button>
          </div>
        </el-card>
      </div>
    </el-card>
    <el-dialog :title="taskDetail.title" :visible.sync="dialogDetail" center width="50">
      <dialog-detail :data="taskDetail" @closeDialog="methodCloseDialog">
      </dialog-detail>
    </el-dialog>
    
  </el-col>
</template>

<script>
import dialogDetail from './DialogDetail'
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      dialogDetail: false,
      taskDetail : {}
    }
  },
  components: {
    dialogDetail
  },
  computed: {
    ...mapGetters(['backlogList'])
  },
  methods: {
    DetailPage(backlog){
      this.dialogDetail = true
      this.taskDetail = backlog
    },
    methodCloseDialog(close){
      this.dialogDetail = close
      this.$message({
        message: 'Congrats, New Task Added',
        type: 'success'
      })
    }
  },
  mounted(){
    this.$store.watch(...mapGetters(['backlogList']), n => {
      console.log('watched: ', n)
    })
  }
}
</script>

<style>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    border:2px solid #c2c2a3;
    
  }
  .el-card__header{
    border-bottom: 2px solid #c2c2a3;
    background-color: aliceblue;
  }
</style>
