<template>
    <div id="about">
        <div class="aboutBanner">
            <div class="container-lg p-lg-0">
                <div class="bannerWrap">
                    <div class="colOne">
                        <h1 class="bannerTitle">{{aboutBanner.aboutBannerTitle}}</h1>
                        <p class="bannerDesc">{{aboutBanner.aboutDesc}}</p>
                        <router-link class="ctaBtn" to="contact">{{aboutBanner.aboutCtaButton}}
                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                        </router-link>
                    </div>
                    <div class="colTwo">
                        <img v-bind:src="aboutBanner.aboutImage" alt="believintech about us">
                    </div>
                </div>
            </div>
            <section class="vision sectionWrap">
                <div class="container-lg p-lg-0">
                    <h2 class="sectionHeading">{{visionSection.visionTitle}}<span>.</span></h2>
                    <p class="contentCopy">{{visionSection.visionDesc}}</p>
                </div>
            </section>
            <section class="sectionWrap">
                <cta-banner-three />
            </section>
            <our-team :items = "teamSection"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import "@/styles/_variables.scss";
@import "@/styles/_common.scss";

    .aboutBanner{
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
        .vision{
            background-color: $primary-blue;
            padding: 50px 0;
            .sectionHeading{
                color: $white;
            }
            p{
                color: $white;
                width: 85%;
                margin: 0 auto;
            }
        }
    }
    
    @media screen and (max-width: 767px) {
    .aboutBanner{
        .bannerWrap{

            padding: 30px 0;
            flex-direction: column-reverse;
            .colOne
            {
                width:100%;
            }
            .colTwo
            {
                width:100%;
                margin-bottom: 30px; 
            }
        }

         .vision { 
            
            padding: 30px 0;
            p{
                width: 100%;
            }
            
            }
    }

   
}



</style>

<script>
import ourTeam from '@/components/our-team'
import ctaBannerThree from '@/components/ctaBannerThree'
import axios from 'axios'
import {apiUrl} from '@/constants.js'

export default {
    name: 'about',
    components: {
        ourTeam,
        ctaBannerThree
    },
    data(){
        return{
            aboutBanner: [],
            visionSection: [],
            teamSection: []
        }
    },
    async created(){
        const res = await axios.get(apiUrl + '/aboutData');
        try {
            if(res.data.status == 'success'){
                this.aboutBanner = res.data.data.aboutBanner;
                this.visionSection = res.data.data.visionSection;
                this.teamSection = res.data.data.teamSection;
            }
        } catch (error) {
            console.log(error);
        }
    }
}
</script>