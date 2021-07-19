<template>
    <div>
        <div class="register-section">
            <div class="row justify-content-center">
            <div class="col-md-3"></div>
            <div class="col-md-6">
            
            <div class="card">
                <div class="card-header" style="text-align: center;">
                    <h4>Register</h4>
                </div>

                <div class="card-body">
                    <form @submit="signUp">
                    <div class="form-group row">
                        <label class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                        <div class="col-md-6">
                            <input type="text" id="email_address" class="form-control" v-model="emailId" required autoFocus />  
                        </div>    
                    </div>

                    <div class="form-group row">
                        <label class="col-md-4 col-form-label text-md-right">User Name</label>
                        <div class="col-md-6">
                            <input type="text" class="form-control" v-model="userName" required autoFocus />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-4 col-form-label text-md-right">Password</label>
                        <div class="col-md-6">
                            <input type="password" id="password" class="form-control" v-model="password" required />
                        </div>
                    </div>

                    <span class="col-md-6 offset-md-4">
                        <button type="submit" class="sign-up">
                            Sign Up
                        </button>
                        <span style="padding-left: 15px;">Existing user? <router-link to="/login">Log In</router-link></span>
                    </span>

                    </form>
                </div>
            
            </div>

            </div>
            <div class="col-md-3"></div>
            </div>
        </div>
    </div>
</template>

<script>
import AuthService from '../services/AuthService';

export default {
    name: "SignUp",
    data() {
        return {
            emailId: '',
            userName: '',
            password:'',
        }
    },
    methods: {
        signUp(e) {
            e.preventDefault();
            let signUpInfo = {
                email: this.emailId,
                username: this.userName,
                password: this.password
            }

            console.log("inputs : " + JSON.stringify(signUpInfo));

            AuthService.signUp(signUpInfo).then(res => {
                console.log(res.data);
                alert("SignUp Successfully!");
                this.$router.push('/login');
            })
        }
    }
    
}
</script>

<style scoped>
.register-section{
    margin: 100px;
}

.sign-up {
    background-color: #0079D3;
    border-color: #0079D3;
    color: aliceblue;
    fill: #0079D3;
    border: 1px solid;
    border-radius: 4px;
    text-align: center;
    letter-spacing: 1px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 24px;
    text-transform: uppercase;
    padding: 3px 16px;
    opacity: 1;
  }
</style>