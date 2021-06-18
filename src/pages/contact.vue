<template>
    <div id="contact">
        <div class="contactWrap">
            <div class="container-lg p-lg-0">
                <div class="bannerWrap">
                    <div class="colOne">
                        <div class="formWrap">
                            <form class="contact-form"  @submit.prevent="onSubmit">
                                <div class="fieldWrap">
                                    <h2 class="sectionHeading">{{contactBanner.contactTitle}}<span>.</span></h2>
                                    <div class="formRow">
                                        <div class="formGroup" :class="{ 'form-group--error': $v.firstname.$error }">
                                            <label for="firstName">First Name *</label>
                                            <input id="firstName" type="text" name="firstName" required 
                                            v-model="form.firstname"  v-model.trim="$v.firstname.$model">
                                        </div>
                                        <div class="error" v-if="!$v.firstname.required">Name is required</div>
                                        <div class="error" v-if="!$v.firstname.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
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
                                        <input id="phone" type="tel" name="phone" v-model="form.phone">
                                    </div>
                                    <div class="formGroup">
                                        <label for="message">Brief Us About Your Next Big Project *</label>
                                        <textarea id="message" rows="5" name="message" required v-model="form.message"></textarea>
                                    </div>
                                    <div class="formGroup cstmCheckbox">
                                        <input value="checked" type="checkbox" name="privacy" id="privacy" required v-model="form.checkbox">
                                        <label for="privacy">I understand the information above will be stored only for business purposes.</label>
                                    </div>
                                </div>
                                <input class="ctaBtn" type="submit" value="Submit" :disabled="submitStatus === 'PENDING'">
                                <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
                                <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                                <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
                            </form>
                        </div>
                    </div>
                    <div class="colTwo">
                        <img v-bind:src="contactBanner.contactImage" alt="believintech contact">
                    </div>
                </div>
                <div>{{form}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {apiUrl} from '@/constants.js'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

export default {
    name: 'contact',
    components: {

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
            submitStatus: null
        }
    },
    mixins: [validationMixin],
    validations: {
        firstname: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(10)
        }
    },
    async created(){
        const res = await axios.get(apiUrl + '/contactData');
        try {
            if(res.data.status == 'success'){
                this.contactBanner = res.data.data.contactBanner;
            }
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            console.log(JSON.stringify(this.form));
            // Reset our form values
            this.form.firstname = ''
            this.form.lastname = ''
            this.form.email = ''
            this.form.phone = ''
            this.form.message = ''
            this.form.checkbox = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            });

            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                    this.submitStatus = 'OK'
                }, 500)
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
                    padding: 30px;
                    font-family: $redhat-medium;
                    color: $charcoal;
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


@media screen and (max-width: 767px) {

 .contactWrap{
    .bannerWrap{
        padding: 30px 0;
    flex-direction: column-reverse;
    .colOne
            {
                width:100%;
                 .formWrap{
                .contact-form{
                    max-width: 100%;
                    .fieldWrap{
                    .formRow{
                           flex-direction: column;
                            .formGroup{
                                 max-width: 100%;
                                 width:100%;&:first-child{
                                     padding-bottom: 10px;
                                 }
                            }
                    }
                    }
                }
                 }
            }
            .colTwo
            {
                width:100%;
                margin-bottom: 30px; 
            }
    }
 }   
}
</style>