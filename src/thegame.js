var theGame = function(game){
	spriteNumber = null;
	number = 0;
	workingButtons = true;
	higher = true;
	score = 0;
}

theGame.prototype = {
	
  	create: function(){
        score = 0;
        // create a random number between 0 and 10  
        number = Math.floor(Math.random()*10);
        
        // load number spritesheet
        spriteNumber = this.game.add.sprite(160,240,"numbers");
        spriteNumber.anchor.setTo(0.5,0.5);
        // choose the image have index compare with number
        spriteNumber.frame = number;	
        
        //                                                       add event click
		var higherButton = this.game.add.button(160,100,"higher",this.clickedHigher,this);
        higherButton.anchor.setTo(0.5,0.5);
         //                                                     add event click
		var lowerButton = this.game.add.button(160,380,"lower",this.clickedLower,this);
        lowerButton.anchor.setTo(0.5,0.5);	
        
        var style = {
            font: '30px Arial',
            fill: '#ffffff'
        };
        this.label_score = this.game.add.text(20,20,"0", style);

	},
	clickedHigher: function(){
		higher=true;
		this.tweenNumber(true);
	},
	clickedLower: function(){
		higher=false;
		this.tweenNumber(false);
	},
	tweenNumber: function(higher){
        if (workingButtons){
            // cannot click button
            workingButtons = false;
            // add exit animation for spriteNumber object
            var exitTween = this.game.add.tween(spriteNumber);
            // setting
            exitTween.to({x:420}, 500);
            exitTween.onComplete.add(this.exitNumber, this);
            // start animation
            exitTween.start();
        }
	},
	exitNumber: function(){
		spriteNumber.x = -180;
        spriteNumber.frame = Math.floor(Math.random()*10);
        // add enter animation for spriteNumber object
	    var enterTween = this.game.add.tween(spriteNumber);
	    enterTween.to({x:160},500);
	    enterTween.onComplete.add(this.enterNumber,this);
	    enterTween.start();
	
	},
	enterNumber: function(){
        workingButtons=true;
        // 
		if((higher && spriteNumber.frame<number)||(!higher && spriteNumber.frame>number)){
			this.game.state.start("GameOver",true,false,score);	
		}
		else{  
			score++;
            number = spriteNumber.frame;
            this.label_score.text = score;
		}	
	}
}