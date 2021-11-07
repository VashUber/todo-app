<template>
    <div class="input-wrapper">
        <div class="input">
            <input type="text" placeholder="Введите задачу" class="input__text" v-model="text">
            <input type="date" class="input__date" v-model="date">
        </div>
        <button class="input-wrapper__button"
                :class="{'input-wrapper__button--error': isValid, 'input-wrapper__button--shaking-animation': shaking}"
                @click="validate">
            Добавить
        </button>
    </div>
</template>

<script>
export default {
    name: "Input",
    data() {
        return {
            text: '',
            date: '',
            isValid: false,
            shaking: false
        }
    },
    methods: {
        addNewTask() {
            const text = this.text
            const date = this.date
            const type = this.$route.path
            this.$store.dispatch('addNewTask', {text, date, type})
            this.text = ''
            this.date = ''
            this.isValid = false
        },
        validate() {
            if (this.text === '' || this.date === '') {
                this.isValid = true
                this.shaking = true
            } else this.addNewTask()
            setTimeout(this.stopShaking, 1000)
        },
        stopShaking() {
            this.shaking = false
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
  transition: .3s;
  display: flex;
  background: #fafafa;
  width: 450px;
  border-radius: 6px;
  justify-content: space-between;
  box-shadow: 0 0 2px 1px rgba(34, 60, 80, 0.2);

  &__text, &__date {
    transition: .3s;
    border: none;
    outline: none;
    font-size: 1.1em;
    height: 35px;
    border-radius: 6px;
    background: #fafafa;
    padding: 0 8px;
  }
}

.input-wrapper {
  display: flex;

  &__button {
    transition: .3s;
    border: none;
    outline: none;
    padding: 5px 8px;
    background: #fafafa;
    font-size: 1em;
    box-sizing: border-box;
    margin-left: 20px;
    border-radius: 5px;
    box-shadow: 0 0 2px 1px rgba(34, 60, 80, 0.2);

    &:hover:not(&--error) {
      transition: .3s;
      background: #ececec;
    }

    &--error {
      transition: .3s;
      color: #fff;
      background: #fa7373;

      &:hover {
        transition: .3s;
        background: #f36060;
      }
    }

    &--shaking-animation {
      animation: shaking 1s;
    }
  }
}

.dark .input {
  transition: .3s;
  background: #d5d5d5;

  &__text, &__date {
    transition: .3s;
    background: #d5d5d5;
  }
}

.dark {
  .input-wrapper__button {
    transition: .3s;
    background: #d5d5d5;

    &--error {
      transition: .3s;
      color: #fff;
      background: #fa7373;

      &:hover {
        transition: .3s;
        background: #f36060;
      }
    }
  }
}

@keyframes shaking {
  10%,
  90% {
    transform: translate3d(-4px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(4px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-5px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(5px, 0, 0);
  }
}
</style>