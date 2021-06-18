<template>
    <div id="work">
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

export default {
    name: 'work',
    components: {
        tabs
    },
    data(){
        return{
            WorkSection: []
        }
    },
    async created(){
        const res = await axios.get(apiUrl + '/workData');
        try {
            if(res.data.status == 'success'){
                this.WorkSection = res.data.data.WorkSection;
            }
        } catch (error) {
            console.log(error)
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