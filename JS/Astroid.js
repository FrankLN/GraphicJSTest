function Astroid() {
	this.x = canvas.x / 2 + (randn_bm() * canvas.x / 4);
	this.y = canvas.y / 2 + (randn_bm() * canvas.y / 4);
	
	this.s = 100;
	this.z = rand(this.s - (this.s / 10), this.s);
	
	
	this.update = function() {
		if(this.z == 0 || this.x < 0 || this.x > canvas.x || this.y < 0 || this.y > canvas.y) {
			this.x = canvas.x / 2 + (randn_bm() * canvas.x / 4);
			this.y = canvas.y / 2 + (randn_bm() * canvas.y / 4);
			this.z = this.s;
		}
		else {
			this.z--;
			if(this.x < (canvas.x / 2) ) {
				this.x -= (canvas.x / (2 * this.s) );
			}
			else {
				this.x += (canvas.x / (2 * this.s) );
			}
			if(this.y < (canvas.y / 2) ) {
				this.y -= (canvas.y / (2 * this.s) );
			}
			else {
				this.y += (canvas.y / (2 * this.s) );
			}
		}
	}
	
	this.show = function() {
		canvas.changeColor("#ffffff");
		canvas.circle(this.x, this.y, 1 + ((this.s - this.z) / 10), 1);	// 1, 1.1, 1.2
	}
}