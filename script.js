var gameTitle = "Death Stranding";
var queryURL = "https://api.rawg.io/api/games?search=" + gameTitle;

var movieGameList = {
    happy: {
        games: ["Stardew Valley", "Animal Crossing: New Horizons", "Fall Guys", "Mario Kart 8"],
        movies: ["Up", "My Neighbor Totoro", "School of Rock", "Inside Out"],
    },
    sad: {
        games: ["What Remains of Edith Finch", "Night In The Woods", "To the Moon", "The Legend of Zelda: Link's Awakening"],
        movies: ["Titanic", "Les Miserables", "Eternal Sunshine for the Spotless Mind", " Her"],
    },
    energetic: {
        games: ["Marvel's Spider-Man", "Superhot", "DOOM Eternal", "Gears of War"],
        movies: ["Mad Max: Fury Road", "Baby Driver", "John Wick", "300"],
    },
    funny: {
        games: ["Portal", "Portal 2", "BattleBlock Theater", "Battletoads"],
        movies: ["Just Friends", "Sorority Boys", "Shaun of the Dead", "Hot Fuzz"],
    },
    scared: {
        games: ["Alien: Isolation", "Dead Space", "Silent Hill", "Resident Evil 7: Biohazard"],
        movies: ["Midsommar", "Mother", "It", "The Conjuring"],
    },
    lonely: {
        games: ["Lovers in a Dangerous Spacetime", "Overcooked 2", "Apex Legends", "Gang Beast"],
        movies: ["The Notebook", "Casablanca", "The Vow", "Dirty Dancing"],
    },
};


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
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
}).then(function(response) {
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