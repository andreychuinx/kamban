<template>
  <el-form label-position="left" label-width="0px">
    <el-form-item label="Title">
      <el-input type="text" v-model="task.title" auto-complete="off" placeholder="Title"></el-input>
    </el-form-item>
    <el-form-item label="Description">
      <el-input type="textarea" v-model="task.description" :autosize="{ minRows: 4}"></el-input>
    </el-form-item>
    <el-form-item >
      <label>Point</label><br />
      <el-input-number v-model="task.point" :min="1" :max="100"></el-input-number>
    </el-form-item>
    <el-form-item label="Assign">
      <el-input type="text" v-model="task.assign" auto-complete="off" placeholder="Assign To"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="onSubmit">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        point: '',
        assign: '',
        status: 'backlog'
      },
      taskDialog: true,
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addTask', {
        task: this.task,
      })
      this.taskDialog= false

    },
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
