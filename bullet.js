var Bullet = function(x, y, moveRight)
{
	this.sprite = new Sprite("lazer.png");
	this.sprite.buildAnimation(1, 1, 40, 30, 1, [0, 1]);
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

Bullet.prototype.update = function(deltaTime)
{
	this.sprite.update(deltaTime);
	this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
}

Bullet.prototype.draw = function()
{
	var screenX = this.position.x - worldOffsetX;
	this.sprite.draw(context, screenX, this.position.y);
}
