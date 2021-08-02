<template>
    <div>
        <loader v-if="isLoading" />
        <singlePage :items = "blogSection" :banner = "blogThumbnail"/>
    </div>
</template>

<style lang="scss" scoped>


</style>

<script>
import axios from 'axios'
import {apiUrl} from '@/constants.js'
import singlePage from '@/components/singlePage'
import loader from '@/components/loader'

export default {
    name: 'singlePg',
    props: ['slug'],
    components: {
        singlePage,
        loader
    },
    data(){
        return{
            blogSection:[],
            blogThumbnail: [],
            isLoading: true
        }
    },
    async created(){
        console.log(apiUrl);
        try {
            const res = await axios.get(apiUrl + '/postSingle/' + this.slug);
            if(res.data.status == 'success'){
                console.log(res.data.data);
                this.blogSection = res.data.data.blogSection;
                this.isLoading = false;
                document.documentElement.style.overflow = 'visible';
            }
        } catch (error) {
            console.log(error);
        }
    },
    mounted(){
        this.disableScroll();
    },
    methods:{
        disableScroll(){
            if(this.isLoading == true){
                document.documentElement.style.overflow = 'hidden';
            }
        }
    }
}
</script>