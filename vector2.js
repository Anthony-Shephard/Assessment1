// use Prototype to create a function for vector2 to check, 
// then set the variables

var Vector2 = function(startX,startY)
{
	this.x = startX;
	this.y = startY;
}

// arg == argument
Vector2.Prototype.Set = function(arg_x, arg_y)
{
	this.x = arg_x;
	this.y = arg_y;
}

// addition
Vector2.Prototype.add = function(Vector2, arg_other)
{
	this.x = this.x + x;
	this.y = this.y + y;
}

// subtraction
Vector2.Prototype.sub = function(Vector2, arg_other)
{
	this.x = this.x - x;
	this.y = this.y - y;
}

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

// Magnitude
Vector2.Prototype.Magnitude = function()
{
	return Math.sqrt((x*x) + (y*y));

}

// normalise the vector
Vector2.Prototype.Normalized = function()
{
	this.ret = new Vector2()
	ret.x = this.x / this.Magnitude();
	ret.y = this.y / this.Magnitude();
	return ret;
}

vec2 = new Vector2();
vex2.Set(5,4)
	