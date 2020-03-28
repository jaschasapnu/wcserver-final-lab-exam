<template>
<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <img src="../assets/nba.png" style="height: 60px">
                <p class="text-justify">The National Basketball Association (NBA) is a men's professional basketball league in North America, composed of 30 teams (29 in the United States and 1 in Canada). 
                    It is one of the four major professional sports leagues in the United States and Canada, and is widely considered to be the premier men's professional basketball league in the world.</p>
            </div>

            <div class="col-xs-6 col-md-2 ml-auto">
                <h6>NBA.com</h6>
                <ul class="footer-links">
                    <li><a href="https://www.nba.com/scores">Scores</a></li>
                    <li><a href="https://stats.nba.com/schedule/">Schedule</a></li>
                    <li><a href="https://stats.nba.com/">Stats</a></li>
                    <li><a href="https://www.nba.com/standings">Standings</a></li>
                    <li><a href="https://www.nba.com/players">Players</a></li>
                    <li><a href="https://www.nba.com/teams">Teams</a></li>
                </ul>
            </div>

            <div class="col-xs-6 col-md-2 ml-auto">
                <h6>Navigate</h6>
                <ul class="footer-links">
                    <li><a><router-link style="color:white" to="/">Home</router-link></a></li>
                    <li><a><router-link style="color:white" to="/members">Members</router-link></a></li>
                    <li><a><router-link style="color:white" to="/news">News</router-link></a></li>
                    <li><a><router-link style="color:white" to="/events">Events</router-link></a></li>
                    <li><a><router-link style="color:white" to="/signup">Sign Up</router-link></a></li>
                    <li><a><router-link style="color:white" to="/login">Log In</router-link></a></li>
                </ul>
            </div>
        </div>
    </div>
    <hr>
    <div class="container">
            <div class="copyright text-center">
                <img class="mb-3" src="../assets/nba-logo.png" style="height: 80px;">
                <p class="copyright-text">Copyright &copy; 2020 NBA Media Ventures, LLC. All Rights Reserved.</p>
                <p class="copyright-text"><a href="#">NBA.com</a> part of Turner Sports Digital, part of the Turner Sports & Entertainment Digital Network.</p>
            </div>
    </div>
</footer>
</template>

<style>
.site-footer {
  background-color:#1d428a;
  padding: 45px 0 20px;
  font-size:15px;
  font-family: Arial, Helvetica, sans-serif;
  line-height:24px;
  color: white;
}

.site-footer hr {
  border-top-color:#bbb;
  opacity:0.5;
}

.site-footer hr.small {
  margin:20px 0;
}

.site-footer h6 {
  color:#fff;
  font-size:20px;
  font-weight:700;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px;
}

.site-footer a {
  outline: 0;
  color: white;
}

.site-footer a:hover {
  color: white;
  text-decoration: underline;
}

.footer-links {
  padding-left:0;
  list-style:none;
}

.footer-links li {
  display:block;
}

.footer-links a {
  color: white;
}

.footer-links a:active,.footer-links a:focus,.footer-links a:hover {
  color: white;
  text-decoration: underline;
}

.footer-links.inline li {
  display:inline-block
}

.site-footer .social-icons {
  text-align:right;
}

.site-footer .social-icons a {
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d;
}

.copyright-text {
  margin:0;
}

@media (max-width:991px) {
  .site-footer [class^=col-] {
    margin-bottom:30px;
  }
}

@media (max-width:767px) {
  .site-footer {
    padding-bottom:0;
  }

  .site-footer .copyright-text,.site-footer .social-icons {
    text-align:center;
  }
}
</style>