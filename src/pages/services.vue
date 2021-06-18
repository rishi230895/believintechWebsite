<template>
    <div id="services">
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

.sectionWrap.servicesComp
{
padding: 0px 0;
}


}



</style>

<script>
import ourServices from '@/components/our-services'
import axios from 'axios'
import {apiUrl} from '@/constants.js'

export default {
    name: 'services',
    components:{
        ourServices
    },
    data(){
        return {
            serviceBanner: []
        }
    },
    async created(){
        try {
            const res = await axios.get(apiUrl + '/serviceData');
            if(res.data.status == 'success'){
                this.serviceBanner = res.data.data.serviceBanner;
            }
        } catch (error) {
            console.log(error);
        }
    },
    methods: {

    },

}
</script>