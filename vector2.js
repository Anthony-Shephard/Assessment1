// use Prototype to create a function for vector2 to check, 
// then set the variables

var Vector2 = function()
{
	this.x = 0;
	this.y = 0;
};

// arg == argument
Vector2.Prototype.Set = function(arg_x, arg_y)
{
	this.x = arg_x;
	this.y = arg_y;
};

// collision checker (obviously)
Vector2.Prototype.CheckCollision = function(Vector2, arg_other)
{
	if(Player.x + Player.width < this.x ||
		Player.y + Player.height < this.y ||
		Player.x > this.x + this.width ||
		Player.y > this.y + this.height)
	{
		return false;
	}
	return true;
}

// normalise the vector
Vector2.Prototype.normalise = function()

vec2 = new Vector2();
vex2.Set(5,4)


this.x = this.x - x;


 
Player.position.CheckCollision(asteroid.position) 	