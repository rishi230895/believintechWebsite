<template>
    <div id="career">
        <loader v-if="isLoading" />
        <div class="careerBanner">
            <div class="container-lg p-lg-0">
                <div class="bannerWrap">
                    <div class="colOne">
                        <h1 class="bannerTitle">{{careerBanner.careerTitle}}</h1>
                        <p class="bannerDesc">{{careerBanner.careerDesc}}</p>
                            <a href="mailTo:'hrd@believintech.com'" class="ctaBtn">{{careerBanner.careerCtaButton}}
                                <font-awesome-icon :icon="['fas', 'arrow-right']" />
                            </a>
                        <!-- <router-link class="ctaBtn" to="contact">Send Us Your CV
                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                        </router-link> -->
                    </div>
                    <div class="colTwo">
                        <img v-bind:src="careerBanner.careerImage" alt="believintech services">
                    </div>
                </div>
            </div>
        </div>
        <tabs :items = "hiringSection"/>
    </div>
</template>

<style lang="scss" scoped>

@import "@/styles/_variables.scss";
@import "@/styles/_common.scss";

    .careerBanner{
        .bannerWrap{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            // padding: 50px 0;
            .colOne{
                width: 45%;
            }
            .colTwo{
                width: 55%;
                img{
                    width: 100%;
                }
            }
        }
    }

@media screen and (max-width: 767px) {
  .careerBanner{
        .bannerWrap{
            padding: 30px 0;
            flex-direction: column-reverse;
            .colOne
            {
                width:100%;

            }
            .colTwo
            {
               width: 100%;
               margin-bottom: 30px; 
            }
        }
  }  
    
}



</style>

<script>

import tabs from '@/components/tabs'
import axios from 'axios'
import {apiUrl} from '@/constants.js'
import loader from '@/components/loader'

export default {
    name: "career",
    components: {
        tabs,
        loader
    },
    data(){
        return{
            careerBanner: [],
            hiringSection: [],
            isLoading: true
        }
    },
    metaInfo() {
        return { 
            title: "Believ-In Tech - Career",
            meta: [
                { name: 'description', content:  'At BelievInTech, we combine passion with the correct concept and assist you in gaining a competitive edge. We vision towards helping our clients create trust in theminds of their audiences.'},
                { property: 'og:title', content: 'At BelievInTech, we combine passion with the correct concept and assist you in gaining a competitive edge. We vision towards helping our clients create trust in theminds of their audiences.'},
                { property: 'og:site_name', content: 'Believ-in Tech'},
                { property: 'og:type', content: 'website'},    
                { name: 'robots', content: 'index,follow'} 
            ]
        }
    },
    async created(){
        const res = await axios.get(apiUrl + '/careerData');
        try {
            if(res.data.status == 'success'){
                this.careerBanner = res.data.data.careerBanner;
                this.hiringSection = res.data.data.hiringSection;
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