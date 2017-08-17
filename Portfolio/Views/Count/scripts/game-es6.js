// Logic for the Count game

class NumberedBox extends createjs.Container {
	constructor(game, number = 0) {
		super();
		
		this.game = game;
		this.number = number;
		
		var movieclip = new lib.NumberedBox();
		movieclip.numberText.text = number;
		movieclip.numberText.font = "28px Oswald";
		movieclip.numberText.textBaseline = "alphabet";
		movieclip.numberText.x += 2;
		movieclip.numberText.y = 36;
		this.addChild(movieclip);
		
		this.setBounds(0, 0, 50, 50);
		
		// handle click/tap
		this.on('click', this.handleClick.bind(this));
	}
	handleClick() {
		this.game.handleClick(this);
		createjs.Sound.play("Jump");
	}
}

// Controls game data
class GameData {
	constructor() {
		this.amountOfBox = 3;
		this.resetData();
	}	
	resetData() {
		this.currentNumber = 1;
	}
	nextNumber() {
		this.currentNumber += 1
	}
	isRightNumber(number) {
		return( number === this.currentNumber);
	}
	isGameWin() {
		return (this.currentNumber > this.amountOfBox);
	}
}

class Game {
	constructor() {
		console.log(`Welcome to the game. Version ${this.version()}`);
	
		this.loadSound();
	
		this.canvas = document.getElementById("game-canvas");
		this.stage = new createjs.Stage(this.canvas);
		
		this.stage.width = this.canvas.width;		
		this.stage.height = this.canvas.height;
		
		// enable tap on touch device
		createjs.Touch.enable(this.stage);
		
		// Enable subpixel layout
		this.subpixelDetection();
		
		// Set tick to 60 FPS
		createjs.Ticker.setFPS(60);
		
		// game related initialization
		this.gameData = new GameData();
		
		// Redraw the stage on every tick
		createjs.Ticker.on("tick", this.stage); 
		
		
		this.restartGame();
		
	}
	version(){
		return '1.0.0';
	}
	
	loadSound() {
		createjs.Sound.registerSound("soundfx/jump7.aiff", "Jump");
		createjs.Sound.registerSound("soundfx/game-over.aiff", "Game Over");
		createjs.Sound.alternateExtensions = ["ogg", "wav"];
	}
	
	restartGame() {
		this.gameData.resetData();
		this.stage.removeAllChildren();
		//background
		this.stage.addChild(new lib.Background());
		// Testing code
		this.generateMultipleBoxes(this.gameData.amountOfBox);
	}
	
	generateMultipleBoxes(amount = 10) {
		for(var i = amount; i > 0; i--) {
			var movieclip = new NumberedBox(this, i);
			this.stage.addChild(movieclip);
			
			// random position
			movieclip.x = Math.random() * (this.stage.width - 
					movieclip.getBounds().width);
			movieclip.y = Math.random() * (this.stage.height - 
					movieclip.getBounds().height);
		}
	}
	handleClick(numberedBox) {
		if(this.gameData.isRightNumber(numberedBox.number)) {
			this.stage.removeChild(numberedBox);
			this.gameData.nextNumber();
			
			// Is game over?
			if(this.gameData.isGameWin()) {
				var gameOverView = new lib.GameOverView();
				this.stage.addChild(gameOverView);
				createjs.Sound.play("Game Over");
				
				gameOverView.restartButton.on('click', (function() {
					createjs.Sound.play("Jump");
					this.restartGame();
				}).bind(this)); 
			}
		}	
	}
	subpixelDetection() {
		this.stage.width = this.canvas.width;
		this.stage.height = this.canvas.height;
		
		let ratio = window.devicePixelRatio;
		if(ratio === undefined) {
			return;
		}
		
		this.canvas.setAttribute('width', Math.round( this.stage.width * ratio ));
		this.canvas.setAttribute('height', Math.round( this.stage.height * ratio ));
		
		this.stage.scaleX = this.stage.scaleY = ratio;
		
		// Set CSS styleSheets
		this.canvas.style.width = this.stage.width + "px";
		this.canvas.style.height = this.stage.height + "px";
	}
}

var game = new Game();