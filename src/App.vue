<template>
    <div class="app" :class="{'dark': getMode}">
        <Sidebar/>
        <div class="app__content">
            <Input/>
            <transition name="show" appear>
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import {mapGetters} from "vuex";
import Input from "@/components/Input";

export default {
    mounted() {
        this.$store.dispatch('setTasks')
    },
    components: {
        Sidebar,
        Input
    },
    computed: {
        ...mapGetters(['getMode'])
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
  padding: 0;
  margin: 0;
}

.app {
  overflow-x: hidden;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1em;
  min-height: 100vh;
  background: #dedede url("./assets/bg.png") no-repeat fixed;
  background-size: 100%;
  display: grid;
  transition: .3s;
  grid-template-areas:
          "side content";
  grid-template-columns: 210px 1fr;

  &__content {
    grid-area: content;
    padding: 30px;
  }
}

.dark {
  transition: .3s;
  background-color: #25272f;
}

.show-enter-active {
  animation: show 1s cubic-bezier(0.58, 0.59, 0.45, 0.95);
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
