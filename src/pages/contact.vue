<template>
    <div id="contact">
        <loader v-if="isLoading" />
        <div class="contactWrap">
            <div class="container-lg p-lg-0">
                <div class="bannerWrap">
                    <div class="colOne">
                        <div class="formWrap">
                            <form class="contact-form"  v-on:submit.prevent="submitForm">
                                <div class="fieldWrap">
                                    <h2 class="sectionHeading">{{contactBanner.contactTitle}}<span>.</span></h2>
                                    <div class="formRow">
                                        <div class="formGroup">
                                            <label for="firstName">First Name *</label>
                                            <input id="firstName" type="text" name="firstName" required v-model="form.firstname">
                                        </div>
                                        <div class="formGroup">
                                            <label for="lastName">Last Name *</label>
                                            <input id="lastName" type="text" name="lastName" required v-model="form.lastname">
                                        </div>
                                    </div>
                                    <div class="formGroup">
                                        <label for="email">Email *</label>
                                        <input id="email" type="email" name="email" required v-model="form.email">
                                    </div>
                                    <div class="formGroup">
                                        <label for="phone">Phone</label>
                                        <input id="phone" type="tel" name="phone" required v-model="form.phone">
                                    </div>
                                    <div class="formGroup">
                                        <label for="message">Brief Us About Your Next Big Project *</label>
                                        <textarea id="message" rows="5" name="message" required v-model="form.message"></textarea>
                                    </div>
                                    <div class="formGroup cstmCheckbox">
                                        <input value="checked" type="checkbox" name="privacy" id="privacy" v-model="form.checkbox">
                                        <label for="privacy">I understand the information above will be stored only for business purposes.</label>
                                    </div>
                                </div>
                                <input class="ctaBtn" type="submit" value="Submit">
                                <p v-if="this.show" class="successMsg">Thanks, We'll Contact You Shortly!</p>
                            </form>
                        </div>
                    </div>
                    <div class="colTwo">
                        <img v-bind:src="contactBanner.contactImage" alt="believintech contact">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {apiUrl} from '@/constants.js';
import loader from '@/components/loader';

export default {
    name: 'contact',
    components: {
        loader
    },
    metaInfo() {
        return { 
            title: "Believ-In Tech - Contact Us",
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
            contactBanner: [],
            form: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                message: '',
                checkbox: []
            },
            name: '',
            show: false,
            submitStatus: null,
            isLoading: true,
        }
    },
    async created(){
        const res = await axios.get(apiUrl + '/contactData');
        try {
            if(res.data.status == 'success'){
                this.contactBanner = res.data.data.contactBanner;
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
        submitForm(){
            axios.post(apiUrl + '/contactform', this.form)
                .then((response) => {
                    //Perform Success Action
                    if(response.data.Message.mailshoot == 'sent'){
                        this.show= true;
                        console.log(this.show);
                    }
                    
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    // error.response.status Check status code
                }).finally(() => {
                    // Reset our form values
                    this.form.firstname = ''
                    this.form.lastname = ''
                    this.form.email = ''
                    this.form.phone = ''
                    this.form.message = ''
                    this.form.checkbox = []
                    this.hidemsg()
                    //Perform action in always
                });
        },
        hidemsg(){
            setTimeout(() => {
                this.show= false;
            }, 1500);
        },
        disableScroll(){
            if(this.isLoading == true){
                document.documentElement.style.overflow = 'hidden';
            }
        },
    }
}
</script>

<style lang="scss" scoped>

@import "@/styles/_variables.scss";
@import "@/styles/_common.scss";

.contactWrap{
    .bannerWrap{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        padding: 50px 0;
        .colOne{
            width: 50%;
            .formWrap{
                .contact-form{
                    max-width: 550px;
                    margin: 0;
                    box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 12%);
                    border-radius: 5px;
                    padding: 40px 30px;
                    font-family: $redhat-medium;
                    color: $charcoal;
                    position: relative;
                    .fieldWrap{
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        .sectionHeading{
                            font-size: 30px;
                            margin: 0 0 30px;
                        }
                        .formRow{
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            text-align: left;
                            width: 100%;
                            padding-bottom: 10px;
                            .formGroup{
                                width: 48%;
                                padding-bottom: 0;
                            }
                        }
                        .formGroup{
                            display: flex;
                            flex-direction: column;
                            flex-wrap: wrap;
                            align-items: baseline;
                            width: 100%;
                            padding-bottom: 10px;
                            input{
                                width: 100%;
                                padding: 5px;
                                border: 1px solid $logo-secondary-blue;
                                &:focus{
                                    outline-color: $logo-secondary-blue;
                                }
                            }
                            textarea{
                                width: 100%;
                                padding: 5px;
                                border: 1px solid $logo-secondary-blue;
                                &:focus{
                                    outline-color: $logo-secondary-blue;
                                }
                            }
                        }
                        .cstmCheckbox{
                                flex-direction: row;
                                align-items: center;
                                flex-wrap: nowrap;
                                padding-bottom: 0;
                            input{
                                width: 15px;
                                height: 15px;
                            }
                            label{
                                text-align: left;
                                padding-left: 10px;
                                font-size: 13px;
                                margin: 0;
                            }
                        }
                    }
                    .ctaBtn{
                        border: none;
                        width: 30%;
                        padding: 8px;
                    }
                    .successMsg{
                        margin: 0;
                        color: #00e676;
                        transition: all 0.3s ease;
                        text-align: left;
                        position: absolute;
                        bottom: 5px;
                    }
                }
            }
        }
        .colTwo{
            width: 50%;
            img{
                width: 100%;
            }
        }
    }
}

// Media Queries

@media screen and (max-width: 992px) {
    .contactWrap{
        .bannerWrap{
            .colOne{ 
                width:100%;
                .formWrap{
                    .contact-form{
                        max-width: 650px;
                        margin:auto;
                    }
                }
            }
            .colTwo{
                display:none;
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .contactWrap{
        .bannerWrap{
            padding: 30px 0;
            flex-direction: column-reverse;
            .colOne{
                width:100%;
                .formWrap{
                    .contact-form{
                        max-width: 100%;
                        .fieldWrap{
                            .formRow{
                                flex-direction: column;
                                .formGroup{
                                    max-width: 100%;
                                    width:100%;
                                    &:first-child{
                                        padding-bottom: 10px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .colTwo{
                width:100%;
                margin-bottom: 30px; 
            }
        }
    }   
}

@media screen and (max-width: 480px) {
    .contactWrap{
        .bannerWrap{
            .colOne{
                .formWrap{
                    .contact-form{
                        .fieldWrap{
                            .cstmCheckbox{
                                input{
                                    width: 25px;
                                    height: 25px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }       
}

</style>