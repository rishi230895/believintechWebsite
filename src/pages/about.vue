<template>
    <div id="about">
        <loader v-if="isLoading"/>
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
        </div>
        <section class="vision sectionWrap">
            <div class="container-lg p-lg-0">
                <div class="visionRow">
                    <div class="colOne">
                        <img :src="visionSection.visionImg" alt="">
                    </div>
                    <div class="colTwo">
                        <h2 class="sectionHeading" v-html="visionSection.visionTitle"><span>.</span></h2>
                        <p class="contentCopy">{{visionSection.visionDesc}}</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- cta banner -->
        <ctaBannerThree />

        <!-- our team -->
        <our-team :items = "teamSection"/>
        
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
    }
    .vision{
        background-color: $primary-blue;
        padding: 50px 0;
        .visionRow{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            .colOne{
                width: 40%;
                img{
                    width: 100%;
                }
            }
            .colTwo{
                width: 55%;
                .sectionHeading{
                    color: $white;
                    margin: 0 0 50px;
                }
                p{
                    color: $white;
                    // width: 100%;
                    margin: 0 auto;
                    text-align: left;
                }
            }
        }
    }
    
    
    @media screen and (max-width: 767px) {
    .aboutBanner{
        .bannerWrap{
            padding: 30px 0;
            flex-direction: column-reverse;
            .colOne{
                width:100%;
            }
            .colTwo{
                width:100%;
                margin-bottom: 30px; 
            }
        }
    }
    .vision { 
        padding: 30px 0;
        .visionRow{
            .colOne{
                display: none;
            }
            .colTwo{
                width: 100%;
                .sectionHeading{
                    margin: 0 0 30px;
                }
            }
        }
    } 
}
</style>

<script>
import ourTeam from '@/components/our-team'
import loader from '@/components/loader'
import ctaBannerThree from '@/components/ctaBannerThree'
import axios from 'axios'
import {apiUrl} from '@/constants.js'

export default {
    name: 'about',
    components: {
        ourTeam,
        loader,
        ctaBannerThree
    },
    metaInfo() {
        return { 
            title: "Believ-In Tech - About Us",
            meta: [
                { name: 'description', content: 'BelievIn Tech provides robust software solutions which help enhance their client businesses. Best Software company.'},
                { name: 'keywords', content: 'WordPress, website designing, website development, web application development'},
                { property: 'og:title', content: 'Top rated team of experts with great commitment.'},
                { property: 'og:site_name', content: 'Believ-in Tech'},
                { property: 'og:type', content: 'website'},    
                { name: 'robots', content: 'index,follow'} 
            ]
        }
    },
    data(){
        return{
            aboutBanner: [],
            visionSection: [],
            teamSection: [],
            isLoading: true,
        }
    },
    async created(){
        const res = await axios.get(apiUrl + '/aboutData');
        try {
            if(res.data.status == 'success'){
                this.aboutBanner = res.data.data.aboutBanner;
                this.visionSection = res.data.data.visionSection;
                this.teamSection = res.data.data.teamsSection;
                this.isLoading = false;
                document.documentElement.style.overflow = 'visible';
            }
        } catch (error) {
            console.log(error);
        }
    },
    mounted() {
        this.disableScroll();
        // this.scrollTop();
    },
    methods:{
        disableScroll(){
            if(this.isLoading == true){
                document.documentElement.style.overflow = 'hidden';
            }
        },
        // scrollTop(){
        //     window.onbeforeunload = function(){
        //         window.scrollTo(0, 0);
        //         console.log('scrolled to top');
        //     }
        // }
    }
}
</script>