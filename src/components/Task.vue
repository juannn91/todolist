<template>
  <div class="task" 
      :class="{ 'is-done': task.done }"
   >
   
    <label @blur="changeState"></label>
    <b-alert :variant="isInputVisible ? 'danger' : 'success'" show class="content-editable" @click="onClickTask" >

      <input
        type="checkbox"
        v-model="task.done"
        aria-label="Checkbox for following text input"
      />
      <div  >
        <div v-if="!isInputVisible" >
          {{ task.name }} 
        </div>
        <div v-else>
          <input type="text" v-model="task.name" @blur="isInputVisible=true" ref="task">
        </div>
      </div>
    </b-alert>
 
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
  data(){
    return{
      isInputVisible : false
    }
  },
  methods:{
    async onClickTask(){
      this.isInputVisible=true;
      await this.$nextTick(); 
      this.$refs.task.focus();
      this.changeState();
    },
  computed:{
    changeState(){
      return this.isInputVisible=!this.isInputVisible;
    }
  }
  }
};
</script>

<style lang="scss">
  .task{
    display: flex;  
    align-items: center; 
    height: 60px;
    border: 1px solid black;
    min-width: 300px;
    input{
      flex: 1;
    }

    .content-editable{
      flex: 1;
      position: relative;
      height: 50px;
      >div{
        position: absolute;
        top: 11px;
        left: 40px;
      }
      >input{
        position: absolute;
        top: 18px;
        left: 20px;
      }
    }
  }
</style>
