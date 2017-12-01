var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
        // add title image with width=160, height=160, image_name = gametitle
		var gameTitle = this.game.add.sprite(160,160,"gametitle");
        gameTitle.anchor.setTo(0.5,0.5);
        // add start button with width=160, height=320, image_name = play, event playTheGame
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
        playButton.anchor.setTo(0.5,0.5);
        
        
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}