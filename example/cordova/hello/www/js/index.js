var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.homePage();
    },

    homePage: function() {
        var content = document.getElementsByClassName("app")[0];
        
        var html = "<h1 class='title'>Hello World</h1>";
        html += "<div class='main'>Hej och välkommen till min första Cordova app.";
        html += "<button class='otherPage'>Nästa sida</button></div>";
        content.innerHTML = html;
        
        button = document.getElementsByClassName("otherPage")[0];
        button.addEventListener("touchend", this.otherPage)
    },
    
    otherPage: function() {
        title = document.getElementsByClassName("title")[0];
        content = document.getElementsByClassName("main")[0];
        console.log("Other page");
        
        title.innerHTML = "Other page";
        
        var html = "Try an alert!<br>";
        html += "<button class='alertButton'>Alert</button>";
        content.innerHTML = html;
        
        button = document.getElementsByClassName("alertButton")[0];
        button.addEventListener("touchend", function() {
            console.log("alert sent");
            alert("Hej");
        });
    }
        
};

app.initialize();