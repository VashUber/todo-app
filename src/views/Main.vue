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
            const route = this.$route.path === '/' ? 'important' : 'daily'
            return this.getTasks(route)
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

.show-elements-enter-active, .show-elements-move {
  transition: transform 350ms ease;
}

.show-elements-leave-active {
  position: absolute;
  display: none;
}

.show-elements-enter {
  transform: translate3d(0, 45px, 0);
}
</style>