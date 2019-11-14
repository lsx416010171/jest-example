<template>
    <div>
        <p>{{result}}</p>
        <button @click="sendRequest">发送请求</button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
       return {
           result:''
       }
    },
    methods: {
        sendRequest() {
            const URL = 'www.pokepe.vip/test'
            return axios.get(URL).then(result => {
                this.result = result
            })
        }
    }
}
</script>
<style  lang="less" scoped>

</style>
