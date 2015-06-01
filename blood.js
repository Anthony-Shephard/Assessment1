var Blood = function(x, y)

{
	var ANIM_pop = 0;
	var ANIM_MAX = 1;

	this.sprite = new Sprite("blood.png");
	
	this.sprite.buildAnimation(6, 1, 50, 8.1, 0.2,	//pop	
			[0, 1, 2, 3, 4, 5,]);

	this.sprite.setAnimationOffset(0, 0, 5);
}