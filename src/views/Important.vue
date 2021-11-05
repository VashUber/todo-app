<template>
    <div class="tasks-wrapper">
        <TaskItem v-for="item in tasks" :item="item" :key="item.id"/>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import TaskItem from "@/components/TaskItem";

export default {
    name: "Important",
    components: {
        TaskItem
    },
    computed: {
        ...mapGetters(['getTasks']),
        tasks() {
            return this.getTasks('important')
        }
    }
}
</script>

<style lang="scss" scoped>
.tasks-wrapper {
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}
</style>