<template>
    <div class="app" :class="{'dark': getMode}">
        <Sidebar/>
        <div class="app__content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import {mapGetters} from "vuex";

export default {
    data() {
        return {}
    },
    components: {
        Sidebar,
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
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1em;
  min-height: 100vh;
  background: #dedede url("./assets/bg.png") no-repeat fixed;
  background-size: 100%;
  display: grid;
  transition: .3s;
  grid-template-areas:
          "side content";
  &__content {
    margin-left: 220px;
  }
}

.dark {
  transition: .3s;
  background-color: #25272f;
}
</style>
