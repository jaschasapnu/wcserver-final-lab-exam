<template>
<div>
    <img src="../assets/nba-banner.jpg" style="height: auto; width: 100%;">
    <div class="container mb-5">
        <div class="container mb-5">  
            <hr class="bg-dark mt-5 mb-5 w-25">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h4>Latest News</h4>
                    <ul class="timeline">
                        <li>
                            <a href="https://www.nba.com/article/2020/03/19/2-los-angeles-lakers-players-test-positive-covid-19-official-release">2 Los Angeles Lakers players test positive</a>
                            <a href="#" class="float-right">19 March, 2020</a>
                            <p>Following four Brooklyn Nets players testing positive for COVID-19, because Los Angeles Lakers’ players were exposed to them during our game against the Nets on March 10, 
                                our team physicians and public health officials recommended coronavirus testing for the players. </p>
                        </li>
                        <li>
                            <a href="https://www.nba.com/nba-fan-letter-league-pass-free-preview">NBA League Pass Free Preview</a>
                            <a href="#" class="float-right">19 March, 2020</a>
                            <p>Complimentary offering will provide access to full length and condensed replays of all games from the 2019-20 season, as well as an expansive archive of classic games and content.</p>
                        </li>
                        <li>
                            <a href="https://www.nba.com/article/2020/03/18/nba-adam-silver-considering-many-ideas">NBA considering many ideas if play can resume</a>
                            <a href="#" class="float-right">18 March, 2020</a>
                            <p>The NBA is considering an idea where some players would be quarantined or isolated for purposes of being able to compete against one another and provide basketball fans with some sort of diversion from the coronavirus pandemic.</p>
                        </li>
                        <li>
                            <a href="https://www.nba.com/article/2020/03/12/adam-silver-letter-nba-fans">Adam Silver: A letter to NBA fans</a>
                            <a href="#" class="float-right">12 March, 2020</a>
                            <p>As you know, we have temporarily suspended our season in response to the coronavirus pandemic. 
                                We made this decision to safeguard the health and well-being of fans, players, everyone connected to our game and the general public. 
                                This hiatus will last at least 30 days and we intend to resume the season, if and when it becomes safe for all concerned.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="bg-dark mt-5 mb-5 w-25">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <a href="https://www.nba.com/nba-fan-letter-league-pass-free-preview"><img class="card-img-top" src="../assets/news-1.jpg"></a>
                    <div class="card-block p-3">
                        <h4 class="card-title"><a href="https://www.nba.com/nba-fan-letter-league-pass-free-preview">NBA League Pass Free Preview</a></h4>
                        <p class="card-text">Watch full length and condensed replays of all games from the 2019-20 season.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <a href="https://www.nba.com/nba-fan-letter-league-pass-free-preview"><img class="card-img-top" src="../assets/news-2.jpg"></a>
                    <div class="card-block p-3">
                        <h4 class="card-title"><a href="https://www.nba.com/nba-fan-letter-league-pass-free-preview">On League Pass: LeBron vs Luka</a></h4>
                        <p class="card-text">If triple-doubles get you going, watch this stat-stuffing battle with the Free Preview archive.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <a href="https://www.nba.com/video/classicgames?collection=video"><img class="card-img-top" src="../assets/news-3.jpg"></a>
                    <div class="card-block p-3">
                        <h4 class="card-title"><a href="https://www.nba.com/video/classicgames?collection=video">Watch Classic Games</a></h4>
                        <p class="card-text">Relive some of the best games and moments from NBA history on NBA League Pass.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'home',

}
</script>

<style scoped>
ul.timeline {
    list-style-type: none;
    position: relative;
}

ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}

ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}

ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid firebrick;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}

.card-title a {
    color: black;
    font-weight: 700;
}
</style>