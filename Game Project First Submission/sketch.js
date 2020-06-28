/*
Game Project Submission Midterm
*/

/*
game character positions
*/
var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;

/*
game character direction
*/
var isLeft;
var isRight;

/*
game objects
*/
var clouds;
var mountains;
var trees;

var canyons;
var collectibles;

/*
variables used throughout
the game consistently 
*/
var mountain_y;
var canyons_y;

var treePos_y;
var canyons_width;
var collectibles_y;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	/*
    Variable to control the background scrolling.
    */
	scrollPos = 0;

	/*
    Boolean variables to control the 
	movement of the game character 
	*/
	isLeft = false;
	isRight = false;
    
	/*initialise params that
    are used throughout the game 
    */
	mountain_y = 435;
	canyons_y = 430;
	canyons_width = 100;
	collectibles_y = 430;
	treePos_y = 200;

	/*
	clouds array
	*/
    clouds = [
        {
		  x_pos: 250, 
		  y_pos: 150,
            width: 80, 
            height: 50
        },
        {
            x_pos: 300,
            y_pos: 150, 
            width: 100, 
            height: 75
        }, 
        {
            x_pos: 350, 
            y_pos: 150, 
            width: 100, 
            height: 75
        }, 
        {
            x_pos: 400, 
            y_pos: 150, 
            width: 100, 
            height: 50
        },
        {
            x_pos: 700, 
            y_pos: 50, 
            width: 80, 
            height: 50
        },
        {
            x_pos: 800, 
            y_pos: 50, 
            width: 100, 
            height: 75
        },
        {
            x_pos: 850, 
            y_pos: 50, 
            width: 100, 
            height: 75
        },
        {
            x_pos: 900, 
            y_pos: 50, 
            width: 100, 
            height: 50
        },
        {
            x_pos: -500, 
            y_pos: 150, 
            width: 80, 
            height: 50
        },
        {
            x_pos: -450, 
            y_pos: 150, 
            width: 100, 
            height: 75
        },
        {
            x_pos: 250, 
            y_pos: 150, 
            width: 80, 
            height: 50
        },
        {
            x_pos: 1500, 
            y_pos: 50, 
            width: 100, 
            height: 50
        }, 
        {
            x_pos: 1550, 
            y_pos: 50, 
            width: 100, 
            height: 75
        }, 
        {
            x_pos: 1600, 
            y_pos: 50, 
            width: 100, 
            height: 50
        },
        {
            x_pos: 2200, 
            y_pos: 50, 
            width: 100, 
            height: 50
        },
        {
            x_pos: 2250, 
            y_pos: 50, 
            width: 100, 
            height: 75
        },
        {
            x_pos: 2300, 
            y_pos: 50, 
            width: 100, 
            height: 50
        },
        {
            x_pos: 3600, 
            y_pos: 150, 
            width: 100, 
            height: 80
        },
        {
            x_pos: 3650, 
            y_pos: 150, 
            width: 120, 
            height: 100
        },
        {
            x_pos: 3700, 
            y_pos: 150, 
            width: 100, 
            height: 80
        },
    ];
    
    /*
    mountains array
    */
    mountains = [
        {
            x_pos: 500, 
            y_pos: mountain_y
        },
        {
            x_pos: 100, 
            y_pos: mountain_y
        },
        {
            x_pos: 600,
            y_pos: mountain_y
        },
        {
            x_pos: 850, 
            y_pos: mountain_y
        },
        {
            x_pos: 1000, 
            y_pos: mountain_y
        },
        {
            x_pos: -800, 
            y_pos: mountain_y
        },
        {
            x_pos: 2500, 
            y_pos: mountain_y
        },
        {
            x_pos: 2200, 
            y_pos: mountain_y
        },
        {
            x_pos: 1400, 
            y_pos: mountain_y
        },
        {
            x_pos: 2800,
            y_pos: mountain_y
        },
        {
            x_pos: 3900,
            y_pos: mountain_y
        }
    ];
    
    /*
    trees array
    */
    trees = [
        {
            treePos_x: 45
        }, 
        {
            treePos_x: -193
        },
        {
            treePos_x: 750
        },
        {
            treePos_x: 1747
        },
        {
            treePos_x: 2072
        },
        {
            treePos_x: - 745
        },
        {
            treePos_x: 2800
        },
        {
            treePos_x: 3300
        }
    ];
    
    /*
    canyons array
    */
    canyons = [
        {
            x_pos: 550, 
            y_pos: canyons_y, 
            width: canyons_width
        },
        {
            x_pos: 320, 
            y_pos: canyons_y,
            width: canyons_width
        },
        {
            x_pos: 1400,
            y_pos: canyons_y,
            width: canyons_width
        },
        {
            x_pos: 1900,
            y_pos: canyons_y,
            width: canyons_width
        },  
        {
            x_pos: -550, 
            y_pos: canyons_y, 
            width: canyons_width
        },
        {
            x_pos: 3500,
            y_pos: canyons_y,
            width: canyons_width
        }
    ];
    
    /*
    collectibles array
    */
    collectibles = [
        
        {
            x_pos: 450, 
            y_pos: collectibles_y, 
            size: 5, 
            isFound: false
        },
        {
            x_pos: 750, 
            y_pos: 430, 
            size: 6, 
            isFound: false
        },
        {
            x_pos: 950, 
            y_pos: collectibles_y, 
            size: 4, 
            isFound: false
        },
        {
            x_pos: 1800, 
            y_pos: collectibles_y, 
            size: 3, 
            isFound: false
        },
        {
            x_pos: 1200, 
            y_pos: collectibles_y, 
            size: 4, 
            isFound: false
        },
        {
            x_pos: 2200, 
            y_pos: collectibles_y, 
            size: 4, 
            isFound: false
        },
        {
            x_pos: -650, 
            y_pos: collectibles_y, 
            size: 3, 
            isFound: false
        },
        {
            x_pos: 2950, 
            y_pos: collectibles_y, 
            size: 2, 
            isFound: false
        }
    ];
}

function draw()
{
    background(224,255,255);
    
	noStroke();
	fill(32,178,170);
    
    /*
    ground 
    */
	rect
    (
        0, 
        floorPos_y, 
        width, 
        height - floorPos_y
    ); 
    
    push();
    translate(scrollPos, 0);

	/*
    Draw clouds.
    */
    for (var i = 0; i < clouds.length; i++) 
    {
        fill(248,248,255);
        noStroke();
        
        ellipse
        (
            clouds[i].x_pos, 
            clouds[i].y_pos, 
            clouds[i].width, 
            clouds[i].height
        );   
    }

	/*
    Draw mountains.
    */
     for (var i = 0; i < mountains.length; i++) 
    {
        noStroke();
        fill(245,245,245);
        
        triangle
        (
            mountains[i].x_pos, 
            mountains[i].y_pos, 
            mountains[i].x_pos + 150, 
            mountains[i].y_pos - 415,
            mountains[i].x_pos + 350, mountains[i].y_pos
        );
    }   

	/*
    Draw trees.
    */
    for (var i = 0; i < trees.length; i++)
    {
        fill(238,232,170);
        
        rect
        (
            trees[i].treePos_x, 
            treePos_y, 
            50,
            235
        );
        
        fill(152,251,152);
        
        ellipse
        (
            trees[i].treePos_x + 20, 
            treePos_y, treePos_y, 
            treePos_y - 50
        );
    };

	/*
    Draw canyons.
    */
    for (var i = 0; i < canyons.length; i++)
    {
        fill(255,248,220);
        
        rect
        (
            canyons[i].x_pos, 
            canyons[i].y_pos, 
            canyons[i].width, 
            canyons[i].width + 100
        );
    }

	/*Draw collectable items.*/
    for (var i = 0; i < collectibles.length; i++)
    {
        stroke(0,128,128);
        strokeWeight(collectibles[i].size + 15);
    
        point
        (
            collectibles[i].x_pos, 
            collectibles[i].y_pos
        );
    
        stroke(102,0,204);
        strokeWeight(collectibles[i].size);
        
        point
        (
            collectibles[i].x_pos,
            collectibles[i].y_pos
        );
        
        stroke(255, 0, 0);
        strokeWeight(collectibles[i].size + 10);
        
        point
        (
            collectibles[i].x_pos - 10,
            collectibles[i].y_pos
        );
        
        strokeWeight(5);
        noStroke();
        fill(135,206,235);
    }  
    
    pop();

	/*
    Draw game character.
    */
        
    /*
    head 
    */
    fill(176,224,230);
    
    ellipse
    (
        gameChar_x, 
        gameChar_y - 62,
        25, 
        25
    );
        
    /*eyes*/
    stroke(0,204, 204);
    strokeWeight(5);
    
    point
    (
        gameChar_x - 3, 
        gameChar_y - 65
    );
    
    point
    (
        gameChar_x + 3, 
        gameChar_y - 65
    );
    
    stroke(0, 0, 255);
    strokeWeight(5);
    
    point
    (
        gameChar_x, 
        gameChar_y - 55
    );
        
    /*
    body
    */
    strokeWeight(4);
    fill(135,206,235);
    
    rect
    (
        gameChar_x - 12, 
        gameChar_y - 47,
        25, 
        30
    );
        
    /*
    legs
    */
    beginShape(LINES);
    
    vertex
    (
        gameChar_x - 12, 
        gameChar_y - 20
    );
    
    vertex
    (
        gameChar_x - 12, 
        gameChar_y
    );
    
    endShape();
        
    beginShape(LINES);
    
    vertex
    (
        gameChar_x + 12, 
        gameChar_y - 20
    );
    
    vertex
    (
        gameChar_x + 12, 
        gameChar_y
    );
    
    endShape();
        
    /*
    hands
    */
    beginShape(LINES);
    
    vertex
    (
        gameChar_x - 12, 
        gameChar_y - 45
    );
    
    vertex
    (
        gameChar_x - 25, 
        gameChar_y - 35
    );
    
    endShape();
        
    beginShape(LINES);
    
    vertex
    (
        gameChar_x + 12,
        gameChar_y - 45
    );
    
    vertex
    (
        gameChar_x + 25, 
        gameChar_y - 35
    );
    
    endShape();

	//////// Game character logic ///////
	
    /*
    Logic to move
    */

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

// ---------------------
// Key control functions
// ---------------------

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}