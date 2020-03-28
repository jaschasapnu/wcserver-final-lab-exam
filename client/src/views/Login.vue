<template>
<div class="login" @submit.prevent = 'register'>
    <div class="container">
        <div class="row h-100 justify-content-center">
            <div class="text-box ml-auto mr-auto text-center" style="width: 600px; margin: 60px;" >
                <div class="col-12 text-center pt-3" style="border-radius: 5px;">
                    <img class="mb-3" src="../assets/nba-logo.png" style="height: 100px;">
                    <h1>Account Details</h1>
                    <p>Log In To Your NBA Account<p>
                    <hr class="bg-dark mt-5 mb-5 w-50">
                </div>
                    <form class="ml-auto mr-auto" style="width: 500px;">
                        <div class="form-group text-center">
                            <label for="email_address">Email Address</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Email Address" v-model="email"/>
                        </div>
                        <div class="form-group text-center ">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" name="password" id="password" placeholder="Password" v-model="password" required autocomplete="off"><br>
                            <input type="checkbox">
                            <label class="text-secondary" style="font-size: 14px;">Remember me</label><br>
                            <label class="text-secondary" style="font-size: 14px;">Not a member?</label>&nbsp;
                            <a href="/signup">Create an account</a>.<br><br>
                            <button class="btn btn-lg m-3" style="color: white; background-color: #1d428a; font-size: 15px;" type="submit">Log In</button>
                            <button class="btn btn-lg btn-danger m-3" style="font-size: 15px;" type="button">Cancel</button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.login, .row {
    background-color: white;
}

.text-box{
    background: #eceff4;
    margin: 70px 0 70px;
    padding: 50px;
}

input[type="radio"], input[type="checkbox"]{
  margin: 0 10px 0 10px;
}
</style>