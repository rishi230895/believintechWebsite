<template>
    <singlePage :items = "blogSection" :banner = "blogThumbnail"/>
</template>

<style lang="scss" scoped>


</style>

<script>
import axios from 'axios'
import {apiUrl} from '@/constants.js'
import singlePage from '@/components/singlePage'

export default {
    name: 'singlePg',
    components: {
        singlePage
    },
    data(){
        return{
            blogThumbnail: [],
            blogSection:[]
        }
    },
    async created(){
        try {
            const res = await axios.get(apiUrl + '/singleblog');
            if(res.data.status == 'success'){
                this.blogThumbnail = res.data.data.blogThumbnail;
                this.blogSection = res.data.data.blogSection;
            }
        } catch (error) {
            console.log(error);
        }
    }
}
</script>