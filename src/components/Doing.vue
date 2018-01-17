<template>
  <el-col :span="6" style="padding-right: 10px;">
    <el-card class="box-card" style="background-color: #80d4ff;">
        <div slot="header" class="clearfix">
        <span>DOING</span>
      </div>
      
      <div class="text item" v-for="(doing, idx) in doingList" :key="idx">
        <el-card>
          <div slot="header">
            <span>{{doing.title}}</span>
          </div>
          <div class="text item" style="text-align: left;">
            <p>Point : {{doing.point}}</p>
            <p>Assigned To: {{doing.assign}}</p>
            <el-button size="mini" type="primary" style="float: right; margin-bottom: 10px;" @click="DetailPage(doing)" >
              Detail
            </el-button>
          </div>
        </el-card>
      </div>
    </el-card>
    <el-dialog title="Detail Login" :visible.sync="dialogDetail" center width="50">
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
      taskDetail: {}
    }
  },
  components: {
    dialogDetail
  },
  computed: {
    ...mapGetters(['doingList'])
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
