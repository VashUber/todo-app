<template>
    <div>
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

<style scoped>

</style>