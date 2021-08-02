<template>
    <div id="services">
        <loader v-if="isLoading" />
        <div class="servicesBanner">
            <div class="container-lg p-lg-0">
                <div class="bannerWrap">
                    <div class="colOne">
                        <h1 class="bannerTitle">{{serviceBanner.bannerTitle}}</h1>
                        <p class="bannerDesc">{{serviceBanner.bannerDesc}}</p>
                        <router-link class="ctaBtn" to="contact">{{serviceBanner.bannerCta}}
                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                        </router-link>
                    </div>
                    <div class="colTwo">
                        <img v-bind:src="serviceBanner.bannerImg" alt="believintech services">
                    </div>
                </div>
            </div>
        </div>
        <section class="sectionWrap servicesComp">
            <our-services />
        </section>
    </div>
</template>

<style lang="scss" scoped>

@import "@/styles/_variables.scss";
@import "@/styles/_common.scss";

.servicesBanner{
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
    .servicesBanner{
        .bannerWrap{
            padding: 30px 0;
            flex-direction: column-reverse;
            .colOne {
                width: 100%;
            }
            .colTwo {
                width: 100%;
                margin-bottom: 30px;
            }
        }
    }

    .sectionWrap.servicesComp{
        padding: 0px 0;
    }
}



</style>

<script>
import ourServices from '@/components/our-services'
import axios from 'axios'
import {apiUrl} from '@/constants.js'
import loader from '@/components/loader'

export default {
    name: 'services',
    components:{
        ourServices,
        loader
    },
    metaInfo() {
        return { 
            title: "Believ-In Tech - Services",
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
        return {
            serviceBanner: [],
            isLoading: true
        }
    },
    async created(){
        try {
            const res = await axios.get(apiUrl + '/serviceData');
            if(res.data.status == 'success'){
                this.serviceBanner = res.data.data.serviceBanner;
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
    methods: {
        disableScroll(){
            if(this.isLoading == true){
                document.documentElement.style.overflow = 'hidden';
            }
        }
    },

}
</script>