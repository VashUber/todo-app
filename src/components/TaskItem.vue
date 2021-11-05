<template>
    <div class="task">
        <div class="task__header">
            <h2 class="task__text">{{ text }}</h2>
            <button class="task__delete-button" @click="deleteThisTask">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                     role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <g fill="none">
                        <path d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6z"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.345 3.147A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853z"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 6h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M10 11v5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M14 11v5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskItem",
    props: {
        item: Object
    },
    data() {
        return {
            id: this.item.id,
            text: this.item.text,
            date: this.item.date
        }
    },
    methods: {
        deleteThisTask() {
            const type = this.$route.path
            const id = this.id
            this.$store.dispatch('deleteTask', {id, type})
        }
    }
}
</script>

<style lang="scss" scoped>
.task {
  width: 240px;
  height: 350px;
  background: rgba(107, 123, 148, 0.5);
  justify-self: center;
  border-radius: 20px;
  color: #f8f8f8;

  &__text {
    text-align: center;
    grid-column-start: 2;
  }

  &__header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    height: 50px;
  }

  &__delete-button {
    background: none;
    border: none;
    outline: none;
    color: #fff;
  }
}

.show-enter-active {
  animation: show 1s ease-out;
}

@keyframes show {
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

</style>