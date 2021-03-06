var Enemy = function(x, y)
{
	var ANIM_WALK_LEFT = 0;
	var ANIM_WALK_RIGHT = 1;
	var ANIM_MAX = 2;
	
	this.sprite = new Sprite("baby.png");
	
	this.sprite.buildAnimation(12, 8, 32, 32, 0.2,		//walk left
			[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

	this.sprite.buildAnimation(12, 8, 32, 32, 0.2,		//walk right
			[25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);

	this.sprite.setAnimationOffset(0, 0, 5);

	this.position = new Vector2();
	this.position.Set(x, y);
	
	this.velocity = new Vector2();
	
	this.moveRight = true;
	this.pause = 0;

	this.isDead = false;
}

Enemy.prototype.update = function(dt)
{
	this.sprite.update(dt);

	if(this.pause > 0)
	{
		this.pause -= dt;
	}

	else
	{
		var ddx = 0; // acceleration
		var tx = pixelToTile(this.position.x);
		var ty = pixelToTile(this.position.y);
		var nx = (this.position.x)%TILE; // true if enemy overlaps right
		var ny = (this.position.y)%TILE; // true if enemy overlaps below
		var cell = cellAtTileCoord(LAYER_PLATFORMS, tx, ty);
		var cellright = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty);
		var celldown = cellAtTileCoord(LAYER_PLATFORMS, tx, ty + 1);
		var celldiag = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty + 1);
		
		if(this.moveRight)
		{
			if(celldiag && !cellright) {
				ddx = ddx + ENEMY_ACCEL; // enemy wants to go right
			}

			else 
			{
				this.velocity.x = 0;
				this.moveRight = false;
				this.pause = 0.5;
			}
		}

		if(!this.moveRight)
		{
			if(celldown && !cell) {
				ddx = ddx - ENEMY_ACCEL; // enemy wants to go left
			}

			else 
			{
				this.velocity.x = 0;
				this.moveRight = true;
				this.pause = 0.5;
			}

		}

		this.position.x = Math.floor(this.position.x + (dt * this.velocity.x));
		this.velocity.x = bound(this.velocity.x + (dt * ddx),
		-ENEMY_MAXDX, ENEMY_MAXDX);
	}

	Enemy.prototype.draw = function()
	{
		this.sprite.draw(context, this.position.x - worldOffsetX, this.position.y);
		context.save();
		context.translate(this.x, this.y);
		context.restore();
	}
}

