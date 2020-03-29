<template>
<div class="sign-up">
    <div class="container">
        <div class="row h-100 justify-content-center">
            <div class="text-box ml-auto mr-auto text-center" style="width: 600px; margin: 60px;" >
                <div class="col-12 text-center pt-3" style="border-radius: 5px;">
                    <img class="mb-3" src="../assets/nba-logo.png" style="height: 100px;">
                    <h1>Account Details</h1>
                    <p>Create an NBA Account<p>
                    <hr class="bg-dark mt-5 mb-5 w-50">
                </div>
                <form name="signup-form">
                    <div class="form-group text-center">
                        <label for="first_name">First Name</label>
                        <input type="text" class="form-control" name="fname" id="fname" placeholder="First Name" v-model="fname"/>
                    </div>
                    <div class="form-group text-center ">
                        <label for="middle_name">Middle Initial</label>
                        <input type="text" class="form-control" name="mname" id="mname" placeholder="Middle Initial" v-model="mname"/>
                    </div>
                    <div class="form-group text-center">
                        <label for="last_name">Last Name</label>
                        <input type="text" class="form-control" name="lname" id="lname" placeholder="Last Name" v-model="lname"/>
                    </div>
                    <div class="form-group text-center">
                        <label for="last_name">Mobile No.</label>
                        <input type="tel" pattern="[0-9]{11}" class="form-control" name="mobilenum" id="mobilenum" placeholder="Mobile No." v-model="mobilenum"/>
                    </div>
                    <div class="form-group text-center ">
                        <label for="birthdate">Birthdate</label>
                        <input type="date" class="form-control" name="bdate" id="bdate" placeholder="Birthdate" v-model="bdate"/>
                    </div>
                    <div class="form-group text-center">
                        <label for="address">Address</label>
                        <textarea type="text" class="form-control" name="address" id="address" placeholder="Address" v-model="address"/>
                    </div>
                    <div class="form-group text-center">
                        <label for="email_address">Email Address</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email Address" v-model="email"/>
                    </div>
                    <div class="form-group text-center ">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" v-model="password"/>
                    </div>
                    <div class="form-group text-center">
                        <label for="confirm_password">Confirm Password</label>
                        <input type="password" class="form-control" name="cpass" id="cpass" placeholder="Confirm Password" v-model="cpass"/>
                    </div>
                    <div class="form-group text-center">
                        <input type="checkbox">
                        <label class="text-secondary" style="font-size: 14px;">By checking this box, I agree to the<a href="https://secure.nba.com/news/privacy_policy.html"> Privacy Policy</a> and 
                        <a href="https://secure.nba.com/news/termsofuse/">Terms of Service</a>.</label><br>
                        <label class="text-secondary" style="font-size: 14px;">Already have an account?</label>&nbsp;
                        <a href="/login" style="font-size: 14px;">Log In.</a><br><br>
                        <button class="btn btn-lg m-3 mb-5" id="sign-in" type="submit" onsubmit="return signupform()">Sign In & Continue</button>
                        <button class="btn btn-lg btn-danger m-3 mb-5" style="font-size: 15px;" type="button">Cancel</button>
                        <p class="text-justify text-secondary mb-5" style="font-size: 12px;">By signing to any of the above terms, you are agreeing that your personal information will be collected, stored and processed in the United States on behalf of the NBA. We provide appropriate security to your personal information. You can opt out of receiving communications at any time, all pursuant to the Privacy Policy. 
                            You can request the modification or deletion of your personal information and browsing data from the NBA’s records at any time. You can request a copy of your personal information and browsing data held by the NBA at any time. Should you have any complaints about our use and storage of your personal information and browsing data, you can direct them to your country’s data protection authority. 
                            If you have any questions, please contact us by postal mail at NBA, 645 Fifth Avenue, New York, NY 10022 USA or by email. More details about our privacy practices are available in the Terms and Conditions and Privacy Policy.</p>
                        <a style="color: #3c8dd0"><h6>Do Not Sell My Personal Information</h6></a>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
    import axios from 'axios'
    import router from '../router'
    export default {
        data () {
            return {
                fname:'',
                mname:'',
                lname:'',
                mobilenum:'',
                address:'',
                bdate:'',
                email:'',
                password:'',
                cpass:''
            }
        },
        methods: {
            register () {
                axios.post('app/signup', {
                    first_name: this.fname,
                    middle_initial: this.mname,
                    last_name: this.lname,
                    mobile_no: this.mobilenum,
                    address: this.address,
                    birthdate: this.bdate,
                    email_address: this.email,
                    username: this.username,
                    password: this.password,
                }).then(res => {
                    if (!res.data){
                        alert('You have successfully registered...')
                        router.push({name: 'Home'})
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }

</script>

<style scoped>
.sign-up, .row {
    background-color: white;
}

.container {
    background-color: #eceff4; 
    width: 700px;
}

#sign-in {
    color: white; 
    background-color:#2656B4; 
    font-size: 15px;
}

.text-box{
    background: #eceff4;
    margin: 70px 0 70px;
    padding: 50px;
}

#sign-in:hover {
    color: white;
    background: #1d428a;
}

input[type="radio"], input[type="checkbox"]{
  margin: 0 10px 0 10px;
}
</style>