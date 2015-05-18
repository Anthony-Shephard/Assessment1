
// from enemy.js
Enemy.prototype.update = function(deltaTime)
	{
		if( typeof(this.rotation) == "undefined" )
		this.rotation = 0; // hang on, where did this variable come from!

	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		this.rotation += deltaTime;
	}
	else
	{
		this.rotation -= deltaTime;
	}
}

player/enemy
this.position = Vector2();

this.offset = new Vector2 ();
		this.offset.set(-55,-87);

				this.velocityX = 0;
		this.velocityXY = 0;
		this.angularVelocity = 0;
		this.rotation = 0;


DrawCellCollision();

function DrawCellCollision() {    
    for(var layerIdx = 0; layerIdx < LAYER_COUNT; layerIdx++)
        {
                // initialize the collision map
        for(var y = 0; y < level1.layers[layerIdx].height; y++) {        
            for(var x = 0; x < level1.layers[layerIdx].width; x++) {
 
                                if(cells[layerIdx][y][x] > 0)
                                {
                                        context.fillStyle = "#c0c";            
                                        context.fillRect(35*x, 35*y, 35, 35);
                                }
            }
        }  
    }
}
