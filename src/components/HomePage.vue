<template>
<div>
  <el-header>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#002b80" text-color="#fff" active-text-color="#fff" >
      <el-col>
        <el-menu-item @click="dialogTask = true" style="float: right;" index="3" :span="12">
         New Task
        </el-menu-item>
      </el-col>
    </el-menu>
  </el-header>

  <el-main>
    <el-row>
      <back-log >
      </back-log>
      
      <to-do>
      </to-do>
      
      <doing-page>
      </doing-page>
      
      <done-page>
      </done-page>
    </el-row>
  </el-main>
  <el-dialog title="Add New Task" :visible.sync="dialogTask" center width="50">
    <new-task @closeDialog="methodCloseDialog">
    </new-task>
  </el-dialog>
</div>
  
</template>

<script>
import BackLog from './BackLog'
import ToDo from './ToDo'
import DoingPage from './Doing'
import DonePage from './Done'
import NewTask from './NewTask'
export default {
  components: {
    BackLog,
    ToDo,
    DoingPage,
    DonePage,
    NewTask
  },
  data() {
    return {
      activeIndex2: '1',
      state4: '',
      dialogTask: false
    }
  },
  methods:{
    methodCloseDialog(close){
      this.dialogTask = close
      this.$message({
        message: 'Congrats, New Task Added',
        type: 'success'
      })
    }
  }
}
</script>

<style>
  

</style>
