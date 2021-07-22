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
    props: ['slug'],
    components: {
        singlePage
    },
    data(){
        return{
            blogSection:[],
            blogThumbnail: [],
        }
    },
    async created(){
        console.log(apiUrl);
        try {
            const res = await axios.get(apiUrl + '/postSingle/' + this.slug);
            if(res.data.status == 'success'){
                console.log(res.data.data);
                this.blogSection = res.data.data.blogSection;
            }
        } catch (error) {
            console.log(error);
        }
    }
}
</script>