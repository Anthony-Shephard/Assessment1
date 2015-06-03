







//player draw function
this.sprite.draw(context, this.position.x, this.position.y);
		context.save();
		context.translate(this.x, this.y);
		context.restore();



		var worldOffsetX = 0;

function drawMap()	
{
	var startX = -1;
	//tiles that fit onscreen
	var maxTiles = Math.floor(SCREEN_WIDTH / TILE) +2;

	//tile the player is on
	var tileX = pixelToTile(player.position.x);

	//offset of the player from the origin of the tile it’s on
	var offsetX = TILE + Math.floor(player.position.x%TILE);

	//Now we can calculate the starting tile on the x-axis to draw from. This will be the xcoordinate
	//(in tiles) for the left-most column of tiles. I’m dividing by 2 here because
	//the player is in the centre of the screen.
	startX = tileX - Math.floor(maxTiles / 2);
	if(startX < -1)
		{
			startX = 0;
			offsetX = 0;
		}
	if(startX > MAP.tw - maxTiles)
		{
			startX = MAP.tw - maxTiles + 1;
			offsetX = TILE;
		}

	//From here we calculate a world x-axis offset. This is the amount (in pixels) that the
	//world has been scrolled
	worldOffsetX = startX * TILE + offsetX;

	 for(var layerIdx=0; layerIdx<LAYER_COUNT; layerIdx++)
	 {
		 var idx = 0;
		 for( var y = 0; y < level1.layers[layerIdx].height; y++ )
		 {
		 	var idx = y * level1.layers[layerIdx].width + startX;
		 	for( var x = startX; x < startX + maxTiles; x++ )
			 {
			 	if( level1.layers[layerIdx].data[idx] != 0 )
			 {
				 // the tiles in the Tiled map are base 1 (meaning a value of 0 means no tile), so subtract one from the tileset id to get the
				 // correct tile
				 var tileIndex = level1.layers[layerIdx].data[idx] - 1;
				 var sx = TILESET_PADDING + (tileIndex % TILESET_COUNT_X) * (TILESET_TILE + TILESET_SPACING);
				 var sy = TILESET_PADDING + (Math.floor(tileIndex / TILESET_COUNT_Y)) * (TILESET_TILE + TILESET_SPACING);
				 context.drawImage(tileset, sx, sy, TILESET_TILE, TILESET_TILE, (x - startX)*TILE - offsetX, (y-1)*TILE, TILESET_TILE, TILESET_TILE);
 				}
				 idx++;
			 }
 		}
	 }
}

//collision highlighter
function DrawTileLayer(layer)
{
        for( var y = 0; y < level1.layers[layer].height;  y++ )
        {
                for( var x = 0; x < level1.layers[layer].width;  x++ )
                {
                        if(cells[layer][y][x] == 1)
                        {
                                context.fillStyle = "#c0c";            
                                context.fillRect(35*x, 35*y, 35, 35);                  
                        }
                }
        }
}



context.drawImage(babby, 10 + ((babby.width+2)*i), 20);

this.sprite.buildAnimation(2, 1, 88, 94, 0.3, [0,1]);
	this.sprite.setAnimationOffset(0, -35, -40);



// check if things are loading
context.fillText("Enemies : " + enemies.length, 5, 100, 100);
	context.fillText("Bullets : " + bullets.length, 5, 130, 100);




	Player.prototype.gameStateClimb = function(deltaTime)
	{
		if(this.falling == false && this.right == false && this.left == false)
		{
			if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
			{
				climb = true;
				{
					if(this.sprite.currentAnimation != ANIM_CLIMB)
						this.sprite.setAnimation(ANIM_CLIMB);
					{
						this.velocity.y = 0;
					}
				}
			}
		}
	}


			if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true) 
		{
		 	gameState = STATE_GAME
		}