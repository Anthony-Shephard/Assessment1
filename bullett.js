var Bullett = function(x, y, moveRight)
{
	this.sprite = new Sprite("bullett.png");
	this.sprite.buildAnimation(1, 1, 33, 23, 1, [0, 1]);
	this.sprite.setAnimationOffset(0, 0, 0);
	this.sprite.setLoop(0, false);

	this.position = new Vector2();
	this.position.Set(x, y);

	this.velocity = new Vector2();
	this.moveRight = moveRight;

	if(this.moveRight == true)
		this.velocity.Set(-MAXDX *2, 0);
	else
		this.velocity.Set(MAXDX *2, 0);
}

Bullett.prototype.update = function(dt)
{
	this.sprite.update(dt);
	this.position.x = Math.floor(this.position.x + (dt * this.velocity.x));
}

Bullett.prototype.draw = function()
{
	var screenX = this.position.x - worldOffsetX;
	this.sprite.draw(context, screenX, this.position.y);
}