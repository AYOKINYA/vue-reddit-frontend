<template>
    <div>
        <div class="login-section">
            <div class="row justify-content-center">
            <div class="col-md-3"></div>
            <div class="col-md-6">
            
            <div class="card">
                <div class="card-header" style="text-align: center;">
                    <h4>Login</h4>
                </div>
                <div v-if="loginSuccess">
                    Login Sucessful
                </div>
                <div class="card-body">
                    <form @submit="onSubmit">
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
                        <button type="submit" class="login">
                            Login
                        </button>
                        <span style="padding-left: 15px;"> New To SpringReddit? <router-link to="/signup">Sign Up</router-link></span>
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
import { mapActions } from 'vuex'
export default {
    name: 'Login',
    data() {
        return {
        loginSuccess: false,
        userName: '',
        password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        onSubmit(e) {
            e.preventDefault();
            this.login(this.userName, this.password);
        }
    }
}
</script>

<style scoped>

.login-section{
    margin: 100px;
}

.login-failed{
    text-align: center;
    margin: auto;
    margin-top: 10px;
    border: 2px solid black;
    width: 65%;    
    background-color: red;
}

.login-failed-text{
    text-align: center;
    margin-top: 5px;
    font-weight: bold;    
    color: aliceblue;
}

.login {
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