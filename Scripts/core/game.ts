// IIFE - Immediately Invoked Function Expression
(function(){

    //Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel: createjs.Text;

    function Init():void {
        console.log("Initialization Started...");

        Start();
    }

    function Start():void {
        console.log("Starting Application...");

        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        Main();

    }

    function Update():void {
        helloLabel.rotation -= 5;       
        stage.update(); // redraws the stage


    }

    function Main():void {
        console.log("Game Started...");

        helloLabel = new createjs.Text("Hello, World!", "40px Consolas", "#000000");
        helloLabel.regY = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regX = helloLabel.getMeasuredHeight() * 0.5;
        

        helloLabel.x = 320;
        helloLabel.y = 240;

        stage.addChild(helloLabel);
    }

    window.onload = Init;


})();