<template>
    <div class="app" :class="{'dark': getMode}">
        <Modal v-if="getModalStatus.isActive" :id="getModalStatus.id"/>
        <div class="app__main">
            <Sidebar/>
            <div class="app__content">
                <Input/>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import {mapGetters} from "vuex";
import Input from "@/components/Input";
import Modal from "@/components/Modal";

export default {
    mounted() {
        this.$store.dispatch('setTasks')
    },
    components: {
        Sidebar,
        Input,
        Modal
    },
    computed: {
        ...mapGetters(['getMode', 'getModalStatus'])
    },

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
  transition: .3s;


  &__content {
    grid-area: content;
    padding: 30px;
  }

  &__main {
    display: grid;
    grid-template-areas:
          "side content";
    grid-template-columns: 210px 1fr;
  }

}

.dark {
  transition: .3s;
  background-color: #25272f;
}
</style>
