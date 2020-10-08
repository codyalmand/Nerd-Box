//Objects with all movies and games
var movieGameList = {
    happy: {
        games: ["Stardew Valley", "Animal Crossing: New Horizons", "Fall Guys", "Mario Kart 8", "Legend of Zelda: Breath of the Wild", "Super Mario Odyssey"],
        movies: ["Up", "My Neighbor Totoro", "School of Rock", "Inside Out", "The Incredibles", "Toy Story"],
    },
    sad: {
        games: ["What Remains of Edith Finch", "Night In The Woods", "To the Moon", "Shadow of the Colossus", "The Last of Us", "Ghost of Tsushima"],
        movies: ["Titanic", "Les Miserables", "Eternal Sunshine of the Spotless Mind", "Her", "Armageddon", "Black Hawk Down"],
    },
    action: {
        games: ["Marvel's Spider-Man", "Superhot", "DOOM Eternal", "Gears of War", "Bloodborne", "Final Fantasy VII: Remake"],
        movies: ["Mad Max: Fury Road", "Baby Driver", "John Wick", "300", "Upgrade", "Dredd"],
    },
    funny: {
        games: ["Portal", "Portal 2", "BattleBlock Theater", "Battletoads", "Rocket League", "Among Us"],
        movies: ["Just Friends", "Sorority Boys", "Shaun of the Dead", "Hot Fuzz", "Walk Hard", "Deadpool"],
    },
    scary: {
        games: ["Alien: Isolation", "Dead Space", "Silent Hill", "Resident Evil 7: Biohazard", "Outlast", "Visage"],
        movies: ["Midsommar", "Mother", "It", "The Conjuring", "Evil Dead (2013)", "Hereditary"],
    },
    lonely: {
        games: ["Lovers in a Dangerous Spacetime", "Overcooked! 2", "Apex Legends", "Gang Beast"],
        movies: ["The Notebook", "Casablanca", "The Vow", "Dirty Dancing"],
    },
};

//Event listener for the "How are you feeling" question
$(".feelingButton").on("click", function (e) {
    var feeling = e.target.innerHTML.toLowerCase();
    var movieTitleArr = movieGameList[feeling].movies;
    var gameTitleArr = movieGameList[feeling].games;
    //Variables to game ajax call
    var gameTitle = gameTitleArr[Math.floor(Math.random() * gameTitleArr.length)];
    var queryURL = "https://api.rawg.io/api/games?search=" + gameTitle;
    //With this Ajax call with get all game info
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //Here we set variables to get all the game data needed and then set it on index.html
        var name = response.results[0].name;
        var backgroundImage = response.results[0].background_image;
        var released = response.results[0].released;
        var image = response.results[0].short_screenshots[0].image;
        var platforms = response.results[0].platforms;
        var metacritic = response.results[0].metacritic;
        var id = response.results[0].id;
        var stores = response.results[0].stores;
        $("#vgTitle").text(name);
        $("#vgRelease").text("Release date: " + released);
        $("#vgimage").attr("src", image);
        $("#vgScore").text("Metacritic: " + metacritic);
        for (i = 0; i < platforms.length; i++) {
            var platform = $("<idv>").attr("id", ("vgPlat" + i));
            $("#vgPlat").append(platform);
            $("#vgPlat" + i).text(platforms[i].platform.name + ", ");
        }
        for (i = 0; i < stores.length; i++) {
            var store = $("<idv>").attr("id", ("vgStore" + i));
            $("#vgStore").append(store);
            $("#vgStore" + i).text(stores[i].store.name + ", ");
        }
        //Variables for movie ajax call
        var movieTitle = movieTitleArr[Math.floor(Math.random() * movieTitleArr.length)];;
        var queryMovies = "https://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy";
        //Ajax call to get movie data
        $.ajax({
            url: queryMovies,
            method: "GET"
        }).then(function (response) {
            //Here we set the movie data into variables and then set it on index.html
            var movieTitle = response.Title;
            var movieScore = response.Metascore;
            var movieActors = response.Actors;
            var moviePlot = response.Plot;
            var moviePoster = response.Poster;
            var movieReleased = response.Released;
            $("#movieTitle").text(movieTitle);
            $("#moviePoster").attr("src", moviePoster);
            $("#movieScore").text("Score: " + movieScore);
            $("#actors").text("Actors: " + movieActors + ", ");
            $("#moviePlot").text("Plot: " + moviePlot);
            $("#movieRelease").text("Release date: " + movieReleased);
        });

    });
})