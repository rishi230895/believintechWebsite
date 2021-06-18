<template>
    <div id="career">
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
            padding: 50px 0;
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

export default {
    name: "career",
    components: {
        tabs,
    },
    data(){
        return{
            careerBanner: [],
            hiringSection: []
        }
    },
    async created(){
        const res = await axios.get(apiUrl + '/careerData');
        try {
            if(res.data.status == 'success'){
                this.careerBanner = res.data.data.careerBanner;
                this.hiringSection = res.data.data.hiringSection;
            }
        } catch (error) {
            console.log(error);
        }
    }
}
</script>