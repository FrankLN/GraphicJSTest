function Canvas(x, y){
	this.x = x;
	this.y = y;
	this.canvas;
	this.penPos = [0, 0];
	this.penDown = false;
	this.direction = 0;
	this.curColor = "#000000";
	
	this.canvas = document.createElement('canvas');
	this.canvas.width = this.x;
	this.canvas.height = this.y;
	document.body.appendChild(this.canvas);
	this.canvas.style.backgroundColor = 'rgba(158, 167, 184, 0.2)';
	
	this.getX = function(){
		return this.x;
	}
	
	this.getY = function(){
		return this.y;
	}
	
	this.changeColor = function(val) {
		if(val) {
			this.curColor = val;
		}
	}
	
	this.setBgColor = function(r, g, b, a) {
		this.canvas.style.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ' , ' + a + ')';
	}
	
	this.get2d = function(){
		return this.canvas.getContext("2d");
	}
	
	this.moveTo = function(x, y) {
		this.penPos[0] = x;
		this.penPos[1] = y;
	}
	
	this.move = function(n){
		//console.log(this.penDown);
		if(n) {
			if(this.penDown) {
				//console.log("Pen is down");
				var c = this.get2d();
				
				c.beginPath();
				c.moveTo( this.penPos[0], this.penPos[1] );
				c.lineTo( this.penPos[0] + ( n * cos(this.direction) ), this.penPos[1] + ( n * sin(this.direction) ) );
				c.strokeStyle = this.curColor;
				c.stroke();
			}
			this.penPos[0] += ( n * cos(this.direction) );
			this.penPos[1] += ( n * sin(this.direction) );
		} 
		else {
			if(this.penDown) {
				//console.log("Pen is down");
				var c = this.get2d();
				
				c.beginPath();
				c.moveTo( this.penPos[0], this.penPos[1] );
				c.lineTo( this.penPos[0] + cos(this.direction), this.penPos[1] + sin(this.direction) );
				c.stroke();
			}
			this.penPos[0] += cos(this.direction);
			this.penPos[1] += sin(this.direction);
		}
	}
	
	this.clear = function(color) {
		//console.log("clear called");
		var tempColor = this.curColor;
		if(color) {
			this.curColor = color;
		}
		else {
			this.curColor = "#000000";
		}
		this.rectangle(this.x / 2, this.y / 2, this.x, this.y, 1);
		
		this.color = tempColor;
	}
	
	this.moveUp = function(n) {
		if(n) {
			this.direction = -90;
			this.move(n);
		}
		else {
			this.direction = -90;
			this.move();
		}
	}
	
	this.moveDown = function(n) {
		if(n) {
			this.direction = 90;
			this.move(n);
		}
		else {
			this.direction = 90;
			this.move();
		}
	}
	
	this.moveRight = function(n) {
		if(n) {
			this.direction = 0;
			this.move(n);
		}
		else {
			this.direction = 0;
			this.move();
		}
	}
	
	this.moveLeft = function(n) {
		if(n) {
			this.direction = 180;
			this.move(n);
		}
		else {
			this.direction = 180;
			this.move(1);
		}
	}
	
	this.rectangle = function(x, y, dx, dy, f) {
		this.moveTo(x-(dx/2), y-(dy/2))
		this.penDown = true;
		
		this.moveRight(dx);
		this.moveDown(dy);
		this.moveLeft(dx);
		this.moveUp(dy);
		
		if(f && dx > 1 && dy > 1) {
			this.rectangle(x, y, dx-1, dy-1, f);
		}
	}
	
	this.circle = function(x, y, r, f) {
		var c = this.get2d();
		c.beginPath();
		c.arc(x,y,r,0,2*Math.PI);
		c.stroke();
		if(f) {
			c.fillStyle = this.curColor;
			c.fill();
		}
	}
}

function sin(x) {
	return Math.sin(x/360*2*Math.PI);
}

function cos(x) {
	return Math.cos(x/360*2*Math.PI);
}
function rand(begin, end) {
	if (typeof begin !== 'undefined' && typeof end !== 'undefined') {
		return Math.floor(Math.random() * (end - begin + 1 ) ) + begin;
	}
	else if(typeof begin !== 'undefined') {
		return Math.floor(Math.random() * (begin + 1 ) );
	}
	else {
		return Math.floor(Math.random() * 2 );
	}
}

function normDis(mean, std, x) {
	return (1 / (Math.sqrt(std) * Math.sqrt(2 * Math.PI) ) ) * (Math.pow(Math.E, -(Math.pow(x-mean, 2)) / (2 * std)))
}

function randn_bm() {
    var u = 1 - Math.random(); // Subtraction to flip [0, 1) to (0, 1].
    var v = 1 - Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}