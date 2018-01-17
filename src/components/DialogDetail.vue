<template>
  <div>
    <el-row>
      <el-col>
        <h3>Task Description</h3>
        <p>{{data.title}}</p>
        <h3>Point</h3>
        <p>{{data.point}}</p>
        <h3>Status</h3>
        <p>{{data.status}}</p>
        <h3>Assigned To</h3>
        <p>{{data.assign}}</p>
      </el-col>
    </el-row>
    <el-row style="padding-top: 10px;">
      <el-col :span="8" style="text-align: center;" >
        <el-button v-if="data.status !== 'backlog'" type="success" @click="changeTaskBefore(data.status)">
          {{beforeAfter(data.status).beforeTask}}
        </el-button>
        <p v-else></p>
      </el-col>
      <el-col :span="8" style="text-align: center;">
        <el-button type="danger" @click="deleteTask">
          DELETE
        </el-button>
      </el-col>
      <el-col :span="8" style="text-align: center;">
        <el-button v-if="data.status!== 'done'" type="warning" @click="changeTaskAfter(data.status)">
          {{beforeAfter(data.status).afterTask}}
        </el-button>
        <p v-else></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['data'],
  data(){
    return{
      taskDialog: true,
    }
  },
  methods: {
    beforeAfter(status){
      if(status == 'backlog'){
        return {
          afterTask : 'TODO',
          beforeTask : ''
        }
      }else if(status == 'todo'){
        return {
          afterTask : 'DOING',
          beforeTask : 'BACKLOG'
        }
      }else if(status == 'doing'){
        return {
          afterTask: 'DONE',
          beforeTask: 'TODO'
        }
      }else if(status == 'done'){
        return {
          afterTask: '',
          beforeTask: 'DOING'
        }
      }
    },
    changeTaskBefore(status){
      let newStatus = ''
      if(status == 'todo'){
        newStatus = 'backlog'
      }else if(status == 'doing'){
        newStatus = 'todo'
      }else if(status == 'done'){
        newStatus = 'doing'
      }
      console.log(newStatus)
      this.$store.dispatch('changeTaskStatus', {
        key: this.data['.key'],
        status: newStatus
      })
      this.taskDialog = false
    },
    changeTaskAfter(status){
      
      let newStatus = ''
      if(status == 'backlog'){
        newStatus = 'todo'
      }else if(status == 'todo'){
        newStatus = 'doing'
      }else if(status == 'doing'){
        newStatus = 'done'
      }
      console.log(newStatus)
      this.$store.dispatch('changeTaskStatus', {
        key: this.data['.key'],
        status: newStatus
      })
      this.taskDialog = false
     
    },
    deleteTask(){
      this.$store.dispatch('deleteTask', {
        key: this.data['.key']
      })
      this.taskDialog = false
    }
  },
  watch:{
    taskDialog(){
      this.$emit('closeDialog', this.taskDialog)
    }
  }
}
</script>

<style>

</style>
