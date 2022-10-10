<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in list" :key="item.id">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" :id="item.id" v-model="item.done" />
          <label class="form-check-label" :for="item.id" :class="item.done ? 'delete' : ''"> {{ item.task }} </label>
        </div>
        <span class="badge badge-success badge-pill" v-if="item.done">完成</span>
        <span class="badge badge-warning badge-pill" v-else>未完成</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      sta: true
    }
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style scoped>
.list-group {
  width: 400px;
}
.delete {
  text-decoration: line-through;
  color: gray;
  font-style: italic;
}
</style>
