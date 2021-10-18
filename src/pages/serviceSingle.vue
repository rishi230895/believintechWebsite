<template>
    <div class="servSngl" id="service-single">
        <loader v-if="isLoading"/>
        <!-- banner -->
        <div class="servBnrWrp" v-if="bnrData">
            <div class="container-lg p-lg-0">
                <div class="servBnr">
                    <div class="servBnrColOne">
                        <h1 class="bannerTitle">{{sgSerBanner.sgSerTitle}}</h1>
                        <p class="bannerDesc">{{sgSerBanner.sgSerDesc}}</p>
                        <div class="ctaSec">
                            <router-link class="ctaBtn servCtaOne" to="/work">{{sgSerBanner.sgSerPort}}</router-link>
                            <router-link class="ctaBtn servCtaTwo" to="/contact">{{sgSerBanner.sgSerContact}}</router-link>
                        </div>
                    </div>
                    <div class="servBnrColTwo">
                        <img class="servBnrImg" :src="sgSerBanner.sgSerImg" alt="">
                    </div>
                </div>
            </div>
            <div class="bnrTilt">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        <!-- about section -->
        <section class="abtServSec sectionWrap" v-if="aboutData">
            <div class="container-lg p-lg-0">
                <div class="abtServRow">
                    <div class="abtColOne">
                        <h2 class="sectionHeading">{{sgSerAbout.abSerHeading}}<span>.</span></h2>
                        <p class="contentCopy">{{sgSerAbout.abSerDesc}}</p>
                        <router-link class="ctaBtn" to="/work">{{sgSerAbout.abSerBtn}}</router-link>
                    </div>
                    <div class="abtColTwo">
                        <img :src="sgSerAbout.abSerImg" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!-- services section-->
        <section class="servSec sectionWrap" v-if="servData">
            <div class="servSecWaves">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="container-lg p-lg-0">
                <h2 class="sectionHeading">{{sgPgServices.sgPgHeading}}<span>.</span></h2>
                <p class="contentCopy">{{sgPgServices.sgPgDesc}}</p>
                <div class="servSecRow" v-if="sgPgServices.details && sgPgServices.details.length > 0">
                    <div class="servCard" v-for="servCrd in sgPgServices.details" :key="servCrd.index">
                        <div class="rowOne">
                            <img class="servIcon" :src="servCrd.sgSerImg" alt="">
                            <h4 class="servTtl">{{servCrd.sgSerName}}</h4>
                        </div>
                        <div class="rowTwo">
                            <p class="servDesc contentCopy">{{servCrd.sgSerDesc}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="servSecWaves">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
        <!-- client slider -->
        <section class="cltServSec sectionWrap" v-if="clntData">
            <div class="cltServRow">
                <div class="headWrap">
                    <h2 class="sectionHeading">{{sgSerSlider.clientHeading}}</h2>
                </div>
                <clientSlider :slider="sgSerSlider" class="snglClntSlider"/>
            </div>
        </section>
        <!-- process section -->
        <section class="procServSec sectionWrap" v-if="procData">
            <div class="procServTilt">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="container-lg p-lg-0">
                <div class="procServRow">
                    <ul class="procList deskProcList" v-if="sgProDetails.details && sgProDetails.details.length > 0">
                        <li class="procItem" v-for="procItm in sgProDetails.details" :key="procItm.index">
                            <span>{{procItm.sgProName}}</span>
                            <img :src="procItm.sgProImg" alt="">
                            <p class="contentCopy">{{procItm.sgProDesc}}</p>
                        </li>
                    </ul>
                    <ul class="procList mobProcList" v-if="sgProDetails.details && sgProDetails.details.length > 0">
                        <li class="procItem" v-for="procItm in sgProDetails.details" :key="procItm.index">
                            <img :src="procItm.sgProImg" alt="">
                            <div class="mobProcDtl">
                                <span>{{procItm.sgProName}}</span>
                                <p class="contentCopy">{{procItm.sgProDesc}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="procServTilt">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
        <!-- work section -->
        <section class="wrkServSec sectionWrap" v-if="wrkData">
            <div class="container-lg p-lg-0">
                <h2 class="sectionHeading">{{sgWkSlider.sgWkHeading}}<span>.</span></h2>
                <carousel 
                    class="workSldr" 
                    :autoplay="false" 
                    :autoplayTimeout="8000" 
                    :autoplayHoverPause="true" 
                    :autoplaySpeed="500" 
                    :items="1" 
                    :dots="false" 
                    :margin="50"
                    v-if="sgWkSlider.details && sgWkSlider.details.length > 0"
                    :responsive="{
                        0:{
                            dots: true,
                            nav: false
                        },
                        992:{
                            dots: false,
                            nav: false
                        }
                    }"
                >
                    <template>
                        <img slot="prev" class="sldrIcn prevIcn" src="../assets/previous.png" alt="">
                        <img slot="next" class="sldrIcn nxtIcn" src="../assets/next.png" alt="">
                    </template>
                    <div class="wrkSldrWrp" v-for="wrkSldr in sgWkSlider.details" :key="wrkSldr.index">
                        <div class="sldrCol">
                            <img class="wrkImg" src="../assets/patient-handling.png" alt="">
                        </div>
                        <div class="sldrCol wrkdtl">
                            <h4 class="sldrTtl">{{wrkSldr.sdSerHeading}}</h4>
                            <p class="contentCopy">{{wrkSldr.sdSerDesc}}</p>
                            <div class="dtlBtnRow">
                                <router-link class="ctaBtn" to="/work">{{wrkSldr.sdPortText}}</router-link>
                                <router-link class="ctaBtn" to="/contact">{{wrkSldr.sdConText}}</router-link>
                            </div>
                        </div>
                    </div>
                </carousel>
            </div>
            <div class="wrkServWaves">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
        <!-- ensure section -->
        <section class="ensrServSec sectionWrap" v-if="testiData">
            <div class="container-lg p-lg-0">
                <h2 class="sectionHeading">{{serEnDetails.enHeading}}<span>.</span></h2>
                <div class="ensrSecRow" v-if="serEnDetails.details && serEnDetails.details.length > 0">
                    <div class="ensrCard" v-for="ensrCrd in serEnDetails.details" :key="ensrCrd.index">
                        <div class="rowOne">
                            <img class="ensrIcon" :src="ensrCrd.serEnImg" alt="">
                            <h4 class="ensrTtl">{{ensrCrd.serEnHeading}}</h4>
                        </div>
                        <div class="rowTwo">
                            <p class="ensrDesc contentCopy">{{ensrCrd.serEnDesc}}</p>
                        </div>
                    </div>
                </div>
                <a href="" class="ctaBtn">{{serEnDetails.enBtnTxt}}</a>
            </div>
        </section>
        <!-- testimonials -->
        <testimonials :items="testSlider"/>
    </div>
</template>

<style lang="scss" scoped>
    @import "@/styles/_variables.scss";
    @import "@/styles/_common.scss";

    .servSngl{
        // banner
        .servBnrWrp{
            background-color: $primary-blue;
            position: relative;
            padding: 25px 0;
            .bnrTilt {
                position: absolute;
                bottom: -115px;
                left: 0;
                width: 100%;
                overflow: hidden;
                line-height: 0;
                svg{
                    position: relative;
                    display: block;
                    width: calc(100% + 1.3px);
                    height: 115px;
                }
                .shape-fill {
                    fill: $primary-blue;
                }
            }
            .servBnr{
                display: flex;
                flex-direction: row;
                align-items: center;
                .servBnrColOne{
                    width: 70%;
                    .bannerTitle{
                        color: $white;
                        text-shadow: 0 5px 5px rgb(0 0 0 / 20%);
                    }
                    .bannerDesc{
                        color: $white;
                    }
                    .ctaSec{
                        display: flex;
                        flex-direction: row;
                        .ctaBtn{
                            max-width: 220px;
                            width: 100%;
                            margin-right: 20px;
                        }
                        .servCtaOne{
                            background: linear-gradient(to left, $logo-secondary-blue 50%, $white 50%);
                            background-size: 201% 100%;
                            background-position: right bottom;
                            &:hover {
                                background-position: left bottom;
                                color: $primary-blue;
                            }
                        }   
                        .servCtaTwo{
                            background: linear-gradient(to left, $white 50%, $logo-secondary-blue 50%);
                            background-size: 201% 100%;
                            background-position: right bottom;
                            color: $primary-blue;
                            &:hover {
                                background-position: left bottom;
                                color: $white;
                            }
                        }
                    }
                }
                .servBnrColTwo{
                    width: 30%;
                    .servBnrImg{
                        width: 100%;
                        max-width: 350px;
                    }
                }
            }
        }
        // about service
        .abtServSec{
            .abtServRow{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-top: 150px;
                .abtColOne{
                    width: 50%;
                    .sectionHeading{
                        margin: 0 0 30px;
                    }
                    .contentCopy{
                        text-align: left;
                    }
                }
                .abtColTwo{
                    width: 45%;
                    img{
                        width: 100%;
                        box-shadow: 0px 8px 18px rgb(0 0 0 / 12%);
                        border-radius: 10px;
                    }
                }
            }
        }
        // services section
        .servSec{
            background-color: $lightGrey;
            padding: 160px 0;
            .servSecWaves {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                overflow: hidden;
                line-height: 0;
                svg {
                    position: relative;
                    display: block;
                    width: calc(100% + 1.3px);
                    height: 150px;
                }
                .shape-fill {
                    fill: $white;
                }
                &:last-child{
                    bottom: 0;
                    top: auto;
                    transform: rotate(180deg);
                }
            }
            .sectionHeading{
                margin: 0 auto 25px;
            }
            .contentCopy{
                text-transform: capitalize;
            }
            .servSecRow{
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                flex-wrap: wrap;
                align-items: stretch;
                margin-top: 50px;
                .servCard{
                    background-color: $white;
                    width: 45%;
                    border-radius: 20px;
                    padding: 20px;
                    margin-bottom: 30px;
                    box-shadow: 0 3px 6px rgb(0 0 0 / 12%);
                    .rowOne{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-bottom: 20px;
                        .servIcon{
                            width: 50px;
                        }
                        .servTtl{
                            font-family: $poppins-bold;
                            font-size: 22px;
                            margin: 0 0 0 25px;
                            text-transform: capitalize;
                        }
                    }
                    .rowTwo{
                        .servDesc{
                            text-align: left;
                        }
                    }
                }
            }
        }
        // clients section
        .cltServSec{
            padding: 0;
            .cltServRow{
                position: relative;
                padding: 115px 0;
                .headWrap{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        padding: 35px;
                        background-color: $logo-secondary-blue;
                        box-shadow: 0 8px 18px rgb(0 0 0 / 12%);
                        border-radius: 0 5px 5px 0;
                        width: 115px;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%); 
                        z-index: 1;
                    .sectionHeading{
                        margin: 0;
                        writing-mode: vertical-lr;
                        transform: rotate(-180deg);
                        color: $white;
                        text-transform: uppercase;
                    }
                }
                .snglClntSlider{
                    padding: 0;
                    ::v-deep .clientWrap{
                        padding: 0;
                    }
                    ::v-deep .clientSlider {
                        padding-top: 0;
                    }
                    ::v-deep .slick-track{
                        padding-top: 0;
                    }
                }
            }
        }
        // process section
        .procServSec{
            background-color: $primary-blue;
            padding: 160px 0;
            .procServTilt {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                overflow: hidden;
                line-height: 0;
                svg {
                    position: relative;
                    display: block;
                    width: calc(100% + 1.3px);
                    height: 150px;
                    transform: rotateY(180deg);
                }
                .shape-fill {
                    fill: $white;
                }
                &:last-child{
                    top: auto;
                    bottom: 0;
                    transform: rotateX(180deg);
                    .shape-fill{
                        fill: $lightGrey;
                    }
                }
            }
            .procServRow{
                .procList{
                    display: flex;
                    flex-direction: column;
                    counter-reset: number;
                    padding: 0;
                    margin: 0;
                    .procItem{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        list-style: none;
                        margin-bottom: 50px;
                        position: relative;
                        &::after{
                            content: '';
                            position: absolute;
                            background: url('../assets/process-arrow.png') no-repeat;
                            background-position: center;
                            background-size: cover;
                            width: 125px;
                            height: 125px;
                        }
                        &::before{
                            counter-increment: number;
                            content: '0' counter(number);
                            font-size: 100px;
                            color: $logo-secondary-blue;
                            font-family: $poppins-bold;
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            z-index: 1;
                            width: 125px;
                            // text-align: right;
                        }
                        &:nth-child(odd)::after{
                            left: 60%;
                            bottom: -80px;
                        }
                        &:nth-child(even)::after{
                            bottom: -80px;
                            right: 60%;
                            transform: rotateY(180deg);
                        }
                        &:last-child::after{
                            display: none;
                        }
                        &:nth-child(odd)::before{
                            left: -15px;
                        }
                        &:nth-child(even)::before{
                            right: -15px;
                        }
                        span{
                            position: relative;
                            width: 30%;
                            color: $white;
                            font-family: $poppins-bold;
                            font-size: 50px;
                            z-index: 1;
                        }
                        img{
                            width: 30%;
                            max-width: 300px;
                            border-radius: 50%;
                            border: 10px solid $logo-secondary-blue;
                        }
                        p{
                            width: 30%;
                            color: $white;
                        }
                        &:nth-child(odd){
                            span{
                                order: 1;
                                text-align: right;
                            }
                            img{
                                order: 2;
                            }
                            p{
                                order: 3;
                                text-align: left;
                            }
                        }
                        &:nth-child(even){
                            span{
                                order: 3;
                                text-align: left;
                            }
                            img{
                                order: 2;
                            }
                            p{
                                order: 1;
                                text-align: right;
                            }
                        }
                    }
                }
            }
        }
        // works section
        .wrkServSec{
            background-color: $lightGrey;
            padding-bottom: 160px;
            .wrkServWaves {
                position: absolute;
                left: 0;
                bottom: 0;
                top: auto;
                transform: rotate(180deg);
                width: 100%;
                overflow: hidden;
                line-height: 0;
                svg {
                    position: relative;
                    display: block;
                    width: calc(100% + 1.3px);
                    height: 150px;
                }
                .shape-fill {
                    fill: $white;
                }
                &:last-child{
                    bottom: 0;
                    top: auto;
                    transform: rotate(180deg);
                }
            }
            .workSldr{
                position: relative;
                .sldrIcn{
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    bottom: 15px;
                    z-index: 2;
                    top: 45%;
                    transform: translateY(-50%);
                }
                .prevIcn{
                    left: -40px;
                }
                .nxtIcn{
                    right: -40px;
                }
                .wrkSldrWrp{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 40px 50px;
                    .sldrCol{
                        width: 48%;
                        .wrkImg{
                            box-shadow: 0 8px 18px rgb(0 0 0 / 12%);
                            border-radius: 15px;
                            max-width: 500px;
                        }
                    }
                    .wrkdtl{
                        .sldrTtl{
                            font-family: $poppins-bold;
                            font-size: 22px;
                            text-align: left;
                        }
                        .contentCopy{
                            text-align: left;
                        }
                        .dtlBtnRow{
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            .ctaBtn{
                                margin-right: 25px;
                                &:first-child{
                                    background: linear-gradient(to left, $primary-blue 50%, $white 50%);
                                    background-size: 201% 100%;
                                    background-position: right bottom;
                                    &:hover{
                                        background-position: left bottom;
                                        color: $primary-blue;
                                    }
                                }
                                &:last-child{
                                    margin-right: 0;
                                    background: linear-gradient(to left, $white 50%, $primary-blue 50%);
                                    background-size: 201% 100%;
                                    background-position: right bottom;
                                    color: $primary-blue;
                                    &:hover{
                                        background-position: left bottom;
                                        color: $white;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
        }
        // ensure section
        .ensrServSec{
            .sectionHeading{
                margin: 0 auto 25px;
            }
            .contentCopy{
                text-transform: capitalize;
            }
            .ensrSecRow{
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                flex-wrap: wrap;
                align-items: stretch;
                margin-top: 50px;
                .ensrCard{
                    background-color: $white;
                    border: 3px solid $logo-secondary-blue;
                    width: 45%;
                    border-radius: 20px;
                    padding: 20px;
                    margin-bottom: 30px;
                    .rowOne{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-bottom: 20px;
                        .ensrTtl{
                            font-family: $poppins-bold;
                            font-size: 22px;
                            margin: 0 0 0 25px;
                            text-transform: capitalize;
                        }
                    }
                    .rowTwo{
                        .ensrDesc{
                            text-align: left;
                        }
                    }
                }
            }
            .ctaBtn{
                margin: 0 auto;
                text-transform: uppercase;
            }
        }
    }

    // MEDIA QUERIES
    @media screen and (min-width: 992px) {
        .servSngl{
            .procServSec{
                .procServRow{
                    .mobProcList{
                        display: none;
                    }
                }
            }
        } 
    }
    @media screen and (max-width: 1199px) {
        .servSngl {
            .servBnrWrp{
                .bnrTilt{
                    bottom: -114px;
                }
            } 
        }
    }
    @media screen and (max-width: 1024px) {
        .servSngl {
            .wrkServSec{
                .workSldr{
                    .nxtIcn{
                        right: 0;
                    }
                    .prevIcn{
                        left: 0;
                    }
                } 
            }
        }
    }
    @media screen and (max-width: 991px) {
        .sectionWrap{
            padding: 50px 0;
        }
        .servSngl {
            .servBnrWrp{
                padding: 50px 0;
                .servBnr{
                    flex-direction: column;
                    align-items: flex-start;
                    .servBnrColOne{
                        order: 2;
                        width: 100%;
                    }
                    .servBnrColTwo{
                        order: 1;
                        width: 15%;
                        padding-bottom: 20px;
                    }
                }
                .bnrTilt{
                    display: none;
                }
            } 
            .abtServSec {
                .abtServRow{
                    flex-direction: column;
                    margin-top: 0;
                    .abtColOne{
                        width: 100%;
                        .sectionHeading{
                            margin: 0 auto 30px;
                        }
                        .contentCopy{
                            text-align: center;
                        }
                        .ctaBtn{
                            margin: 20px auto 0;
                        }
                    }
                    .abtColTwo{
                        display: none;
                    }
                }
            }
            .servSec{
                padding: 50px 0;
                .servSecWaves{
                    display: none;
                }
            }
            .cltServSec{
                .cltServRow{
                    padding: 50px 0;
                    .headWrap{
                        padding: 20px;
                        width: 50px;
                        .sectionHeading{
                            font-size: 24px;
                        }
                    }
                }
            }
            .procServSec {
                padding: 50px 0;
                .procServTilt{
                    display: none;
                }
                .procServRow{
                    .deskProcList{
                        display: none;
                    }
                    .mobProcList{
                        position: relative;
                        z-index: 1;
                        &::before{
                            content: '';
                            width: 10px;
                            height: 100%;
                            left: 33px;
                            position: absolute;
                            top: 0;
                            background-color: $logo-secondary-blue;
                            transform: translateY(0);
                            z-index: -1;
                            border-radius: 20px;
                            box-shadow: 0 8px 8px rgb(0 0 0 / 16%);
                        }
                        .procItem{
                            flex-direction: row;
                            align-items: center;
                            position: relative;
                            z-index: 1;
                            margin-bottom: 0;
                            padding-bottom: 50px;
                            &::before,
                            &::after{
                                display: none;
                            }
                            &:nth-child(odd)::before{
                                left: 68px;
                            }
                            &:nth-child(even) span{
                                order: 1;
                            }
                            &:nth-child(even) img{
                                order: 1;
                            }
                            &:nth-child(even) p{
                                text-align: left;
                            }
                            &:last-child{
                                padding-bottom: 0;
                            }
                            span{
                                text-align: left;
                                width: fit-content;
                                font-size: 40px;
                            }
                            img{
                                min-width: 75px;
                                max-width: 75px;
                                width: 100%;
                                border-width: 5px;
                                border: none;
                                box-shadow: 0 8px 8px rgb(0 0 0 / 16%);
                            }
                            .mobProcDtl{
                                order: 2;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                margin-top: 10px;
                                margin-left: 25px;
                                p{
                                    width: fit-content;
                                }
                            }
                        }
                    }
                } 
            }
            .wrkServSec{
                padding: 50px 0;
                .wrkServWaves{
                    display: none;
                }
                .workSldr{
                    .wrkSldrWrp{
                        padding: 0;
                        flex-direction: column;
                        .sldrCol{
                            width: 70%;
                            img{
                                margin: 0 auto;
                                width: 90%;
                            }
                        }
                        .wrkdtl{
                            margin-top: 25px;
                            .contentCopy,
                            .sldrTtl{
                                text-align: center;
                            }
                            .dtlBtnRow{
                                justify-content: center;
                                .ctaBtn{
                                    margin-bottom: 20px;
                                }
                            }
                        }
                    }
                    .sldrIcn{
                        display: none;
                    }
                    .nxtIcn{
                        right: 0;
                    }
                    .prevIcn{
                        left: 0;
                    }
                } 
            }
        }
    }
    @media screen and (max-width: 768px) {
        
    }
    @media screen and (max-width: 600px) {
        .servSngl{
            .servSec{
                .servSecRow{
                    flex-direction: column;
                    .servCard{
                        width: 100%;
                    }
                } 
            }
            .wrkServSec{
                .workSldr{
                    .wrkSldrWrp{
                        .sldrCol{
                            width: 100%;
                        }
                    }
                } 
            }
            .ensrServSec{
                .ensrSecRow{
                    flex-direction: column;
                    .ensrCard{
                        width: 100%;
                    }
                }
            }
        }  
    }
</style>

<script>
import clientSlider from '@/components/clientSlider'
import testimonials from '@/components/testimonials'
import axios from 'axios'
import {apiUrl} from '@/constants.js'
import carousel from 'vue-owl-carousel'
import loader from '@/components/loader'

export default {
    name: 'serviceSingle',
    props:['slug'],
    components:{
        clientSlider,
        carousel,
        loader,
        testimonials,
    },
    data(){
        return{
            sgSerBanner:[],
            sgSerAbout:[],
            sgPgServices:[],
            sgSerSlider:[],
            sgProDetails:[],
            sgWkSlider:[],
            serEnDetails:[],
            testSlider:[],
            isLoading: true,
        }
    },
    async created(){
        try {
            const res = await axios.get(apiUrl + '/newserviceSingle/' + this.slug);
            if(res.data.status == 'success'){
                var bnrData = res.data.data.sgSerBanner;
                var aboutData = res.data.data.sgSerAbout;
                var servData = res.data.data.sgPgServices;
                var clntData = res.data.data.sgSerSlider;
                var procData = res.data.data.sgProDetails;
                var wrkData = res.data.data.sgWkSlider;
                var ensrData = res.data.data.serEnDetails;
                var testiData = res.data.data.testSlider;
                
                this.bnrData = bnrData.error ? '' : bnrData;
                this.aboutData = aboutData.error ? '' : aboutData;
                this.servData = servData.error ? '' : servData;
                this.clntData = clntData.error ? '' : clntData;
                this.procData = procData.error ? '' : procData;
                this.wrkData = wrkData.error ? '' : wrkData;
                this.ensrData = ensrData.error ? '' : ensrData;
                this.testiData = testiData.error ? '' : testiData;
               
                this.sgSerBanner = res.data.data.sgSerBanner;
                this.sgSerAbout = res.data.data.sgSerAbout;
                this.sgPgServices = res.data.data.sgPgServices;
                this.sgSerSlider = res.data.data.sgSerSlider;
                this.sgProDetails = res.data.data.sgProDetails;
                this.sgWkSlider = res.data.data.sgWkSlider;
                this.serEnDetails = res.data.data.serEnDetails;
                this.testSlider = res.data.data.testSlider;

                this.isLoading = false;
                document.documentElement.style.overflow = 'visible';
            }
        } catch(error){
            console.error(error);
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