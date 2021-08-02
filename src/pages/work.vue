<template>
    <div id="work">
        <loader v-if="isLoading" />
        <div class="workWrap">
            <div class="container-lg p-lg-0">
                <h1 class="sectionHeading">{{WorkSection.workTitle}}<span>.</span></h1>
                <tabs :items = "WorkSection" />
            </div>
        </div>
    </div>
</template>

<script>
import tabs from '@/components/tabs'
import axios from 'axios'
import {apiUrl} from '@/constants.js'
import loader from '@/components/loader'

export default {
    name: 'work',
    components: {
        tabs,
        loader
    },
    metaInfo() {
        return { 
            title: "Believ-In Tech - Work",
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
            WorkSection: [],
            isLoading: true
        }
    },
    async created(){
        const res = await axios.get(apiUrl + '/workData');
        try {
            if(res.data.status == 'success'){
                this.WorkSection = res.data.data.WorkSection;
                this.isLoading = false;
                document.documentElement.style.overflow = 'visible';
            }
        } catch (error) {
            console.log(error)
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

<style lang="scss" scoped>

@import "@/styles/_variables.scss";
@import "@/styles/_common.scss";

.workWrap{
    padding: 50px 0;
}
@media screen and (max-width: 767px) {
    
    .workWrap{
    padding: 30px 0;
     

}



     .workWrap .container-lg .tabs .container-lg{
             margin-left: 0px;
             margin-right: 0px;
         }

}
</style>