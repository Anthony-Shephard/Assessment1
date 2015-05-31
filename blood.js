var Blood = function(x, y)
{
	this.sprite = new Sprite("blood.png");
	
	this.sprite.buildAnimation(6, 1, 50, 8.1, 0.2,		
			[0, 1, 2, 3, 4, 5,]);

	this.sprite.setAnimationOffset(0, 0, 5);

	this.position = new Vector2();
	this.position.Set(x, y);
	
	this.pause = 0;
}