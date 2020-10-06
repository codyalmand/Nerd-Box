
var gameTitle = "Death Stranding";
var queryURL = "https://api.rawg.io/api/games?search=" + gameTitle;


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    //console.log(response);
    var name = response.results[0].name;
    var backgroundImage = response.results[0].background_image;
    var clip = response.results[0].clip.clip;
    var platforms = response.results[0].platforms;
    var released = response.results[0].released;
    for (i = 0; i < platforms.length; i++) {
        //console.log(platforms[i].platform.name);
    }
    var metacritic = response.results[0].metacritic;
    var id = response.results[0].id;
    var stores = response.results[0].stores;
    for (i = 0; i < stores.length; i++) {
        //console.log(stores[i].store.name);
    }
    //console.log(released);
});


var movieTitle = "space+jam";
var queryMovies = "https://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy";

$.ajax({
    url: queryMovies,
    method: "GET"
}).then(function (response) {
    console.log(response);
    var movieTitle = response.Title;
    var movieScore = response.Metascore;
    var movieActors = response.Actors;
    var moviePlot = response.Plot;
    var moviePoster = response.Poster;
    var movieRated = response.Rated;
    var movieReleased = response.Released;
    console.log(movieReleased);
});

