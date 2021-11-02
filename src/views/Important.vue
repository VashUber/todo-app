<template>
    <div>
        {{ tasks }}
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Important",
    computed: {
        ...mapGetters(['getTasks']),
        tasks() {
            return this.getTasks('important')
        }
    }
}
</script>

<style scoped>

</style>