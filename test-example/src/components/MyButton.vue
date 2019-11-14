<template>
    <button @click="increment">Click {{buttonValue}} {{innerCount}}</button>
</template>
<script>
export default {
    data() {
       return {
           innerCount: 0
       }
    },
    methods: {
        increment() {
            this.innerCount += 1;
            this.$emit('add', this.innerCount)
        }
    }
}
</script>
<style  lang="less" scoped>

</style>
