document.addEventListener("deviceready", start, false);
document.addEventListener("pause", onPause, false);
document.addEventListener("resume", onResume, false);

//window.onload = start;

function start(){ 
	var gameRatio = window.innerWidth / window.innerHeight;
	
    WIDTH = Math.ceil(640*gameRatio); 
    HEIGHT = 640; 

	var config = {
	    type: Phaser.WEBGL,
	    parent: 'game',
	    width: WIDTH,
	    height: HEIGHT,
	    backgroundColor: '#2d2d2d',
	    scene: {
	        preload: preload,
	        create: create
	    },
	    scale: {
		    parent: 'game',
		    mode: Phaser.Scale.FIT,
		    width: WIDTH,
		    height: HEIGHT, 
		    orientation: Phaser.Scale.Orientation.LANDSCAPE
		},
	    input :{
			activePointers:3
		}
	};

	game = new Phaser.Game(config);
}

function onPause(){
    game.paused = true;
}

function onResume(){
    game.paused = false;
    setTimeout(function(){
        try{
            StatusBar.hide();
        }catch(e){}   
    }, 1000);
}