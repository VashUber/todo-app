<template>
    <div class="task">
        <div class="task__header">
            <div class="task__buttons-wrapper">
                <button class="task__delete-button" @click="deleteThisTask">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                         role="img" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <g fill="none">
                            <path d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6z"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M7.345 3.147A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853z"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M2 6h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M10 11v5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M14 11v5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </g>
                    </svg>
                </button>
                <button class="task__edit-button" @click="showModal">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true" role="img" width="35" height="35" preserveAspectRatio="xMidYMid meet"
                         viewBox="0 0 576 512">
                        <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                              fill="currentColor"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="task__main">
            <h2 class="task__text">{{ item.text }}</h2>
        </div>
        <div class="task__footer">
            {{ formattedDate }}
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskItem",
    props: {
        item: Object
    },
    methods: {
        deleteThisTask() {
            const type = this.$route.path
            const id = this.item.id
            this.$store.dispatch('deleteTask', {id, type})
        },
        showModal() {
            this.$store.dispatch('changeModalStatus', this.item.id)
        }
    },
    computed: {
        formattedDate() {
            return this.item.date.split('-').reverse().join('.')
        }
    }
}
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 285px;
  height: 360px;
  background: rgba(107, 123, 148, 0.5);
  justify-self: center;
  border-radius: 20px;
  color: #f8f8f8;

  &__text {
    text-align: center;
    word-wrap: break-word;
    width: 200px;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
  }

  &__main {
    display: flex;
    justify-content: center;
  }

  &__buttons-wrapper {
    align-self: flex-start;
    justify-self: flex-end;
    padding: 0 5px;

    button:not(:first-child) {
      margin-left: 10px;
    }
  }

  &__delete-button, &__edit-button {
    background: none;
    align-self: flex-start;
    border: none;
    outline: none;
    color: #eaeaea;
    transition: 0.5s;

    &:hover {
      transition: .5s;
      transform: scale(1.25);
    }
  }

  &__footer {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
}
</style>