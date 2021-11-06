<template>
    <transition-group name="show-elements" class="tasks-wrapper">
        <TaskItem v-for="item in tasks" :item="item" :key="item.id"/>
    </transition-group>
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

.show-elements-enter-active, .show-elements-leave-active, .show-elements-move {
  transition: transform .5s ease;
}

.show-elements-leave-active {
  position: absolute;
  left: -300px;
}

.show-elements-enter {
  transform: translate3d(0, 45px, 0);
}
</style>