<template>
    <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark navbar-full" style="background-color: #1d428a">
        <div class="container">
            <a class="navbar-brand" href="/"><img src="../assets/nba.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mr-auto">
                    <li class="nav-item">
                    <a class="nav-link"><router-link style="color:white" to="/">Home</router-link></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link"><router-link style="color:white" to="/members">Members</router-link></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link"><router-link style="color:white" to="/news">News</router-link></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link"><router-link style="color:white" to="/events">Events</router-link></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link"><router-link style="color:white" to="/signup">Sign Up</router-link></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link"><router-link style="color:white" to="/login">Log In</router-link></a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style>
.navbar-nav a:active, .navbar-nav a:focus, .navbar-nav a:hover {
    text-decoration: underline;
}
.navbar-nav a {
    outline: 0;
    font-family: Arial, Helvetica, sans-serif;
}
.navbar-brand img{
    height: 60px;
}
</style>