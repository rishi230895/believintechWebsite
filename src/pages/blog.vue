<template>
    <div id="blogIndex">
        <loader v-if="isLoading" />
        <div class="blogWrap">
            <blogs :items = "latestArticleSection"/>
        </div>
    </div>
</template>

<script>
import blogs from '@/components/blogs'
import loader from '@/components/loader'
import axios from 'axios'
import {apiUrl} from '@/constants.js'

export default {
    name: 'blogIndex',
    components: {
        blogs,
        loader
    },
    metaInfo() {
        return { 
            title: "Believ-In Tech - Blogs",
            meta: [
                { name: 'description', content:  'At BelievInTech, we combine passion with the correct concept and assist you in gaining a competitive edge. We vision towards helping our clients create trust in theminds of their audiences.'},
                { property: 'og:title', content: 'At BelievInTech, we combine passion with the correct concept and assist you in gaining a competitive edge. We vision towards helping our clients create trust in theminds of their audiences.'},
                { property: 'og:site_name', content: 'Believ-in Tech'},
                { property: 'og:type', content: 'website'},    
                { name: 'robots', content: 'index,follow'} 
            ]
        }
    },
    data(){
        return{
            latestArticleSection: [],
            isLoading: true
        }
    },
    async created(){
        const res = await axios.get(apiUrl + '/homeData');
        try {
            if(res.data.status == 'success'){
            console.log(res.data.data.latestArticleSection);
                this.latestArticleSection = res.data.data.latestArticleSection;
                this.isLoading = false;
                document.documentElement.style.overflow = 'visible';
            }
        } catch (error) {
            console.log(error);
        }
    },
    mounted () {
        this.disableScroll();
    },
    methods: {
        disableScroll(){
            if(this.isLoading == true){
                document.documentElement.style.overflow = 'hidden';
            }
        }
    }
}
</script>


<style lang="scss" scoped>

@import "@/styles/_variables.scss";
@import "@/styles/_common.scss";

.blogWrap{
    padding: 25px 0;
}

</style>