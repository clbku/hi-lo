var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        // loading bar
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);

        // crop numbers.png to small images width same size, in each image is a number, save with index.
        this.game.load.spritesheet("numbers","assets/numbers.png",100,100);
        // load game images
        this.game.load.image("gametitle","assets/gametitle.png");
        this.game.load.image("play","assets/play.png");
		this.game.load.image("higher","assets/higher.png");
		this.game.load.image("lower","assets/lower.png");
		this.game.load.image("gameover","assets/gameover.png");
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}