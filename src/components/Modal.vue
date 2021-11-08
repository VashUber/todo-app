<template>
    <transition name="modal" appear>
        <div class="modal">
            <div class="modal__item">
                <button class="modal__button-close" @click="close">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                         role="img" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                        <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                              fill="currentColor"/>
                        <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                              fill="currentColor"/>
                    </svg>
                </button>
                <div class="modal__form">
                    <input type="text" v-model="text" class="modal__text-input">
                    <input type="date" v-model="date" class="modal__date-input">
                    <button @click="changeTask" class="modal__button">Изменить</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "Modal",
    props: {
        id: String
    },
    mounted() {
        this.text = this.task.text
        this.date = this.task.date
    },
    data() {
        return {
            text: '',
            date: ''
        }
    },
    methods: {
        close() {
            this.$store.dispatch('changeModalStatus', '')
        },
        changeTask() {
            const id = this.id
            const text = this.text
            const date = this.date
            const route = this.$route.path
            this.$store.dispatch('changeTask', {id, text, date, route})
            this.close()
        }
    },
    computed: {
        ...mapGetters(['getTaskById']),
        task() {
            return this.getTaskById(this.id, this.$route.path)
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1488;
  background: rgba(0, 0, 0, 0.5);

  &__item {
    background: #f1f1f1;
    width: 450px;
    height: 300px;
    border-radius: 20px;
    padding: 10px;
    box-sizing: border-box;
  }

  &__text-input, &__date-input {
    border: none;
    outline: none;
    border-radius: 10px;
    font-size: 1em;
    padding: 5px 10px;
  }

  &__date-input {
    margin-top: 20px;
  }

  &__button {
    margin-top: 20px;
    outline: none;
    border: none;
    background: #8096ff;
    font-size: 1em;
    width: 100px;
    padding: 5px;
    border-radius: 10px;
    margin-left: auto;
    color: #fff;
    box-shadow: 0 0 4px 0 rgba(34, 60, 80, 0.2);
  }

  &__button-close {
    transition: transform .3s;
    outline: none;
    border: none;
    color: #fa7373;
    display: block;
    margin-left: auto;
    background: none;

    &:hover {
      transition: transform .2s;
      transform: scale(1.15);
    }
  }

  &__form {
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    height: 230px;
  }
}

.modal-enter-active, .modal-leave-active {
  transition: .35s;
}

.modal-leave-to, .modal-enter {
  opacity: 0;
  transform: scale(1.15);
}
</style>