<template>
    <div class="input-wrapper">
        <div class="input">
            <input type="text" class="input__text" v-model="text">
            <input type="date" class="input__date" v-model="date">
        </div>
        <button class="input-wrapper__button" @click="addNewTask">Добавить</button>
    </div>
</template>

<script>


export default {
    name: "Input",
    data() {
        return {
            text: '',
            date: '',
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
  }
}
</style>