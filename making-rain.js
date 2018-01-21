// array of x pos for rain drops at start
var xPositions = [50, 100, 150, 200, 250, 300, 350];

// array of y Pos for rain drops at start
var yPositions = [0, 25, 15, 5, 18, 9, 23];

// draw the drops
draw = function() {
    
    background(202, 244, 252);

    // conditions to meet for raining
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        
    // rains random color each time
    fill (random(0,255),random (0,255),random(0,255));
        
    // rain drops
    ellipse(xPositions[i], yPositions[i], 10, 10);

    // other images
    var seeds = getImage("space/star");
    image(seeds, mouseX, mouseY, 20, 20);
    
    // fall/descent rate
    yPositions[i] += 3;
    
    // rain over and over again if rain drops yPos > 385
        if (yPositions [i] > 385) {
            
        yPositions[i] = 0;
        yPositions[i] += 3;
    
        }

    }

};

// PUSH Draw a extra raindrops at xPos & yPos of mouseClicked
    var mouseClicked = function () {
        
        xPositions.push(mouseX);
        yPositions.push(mouseY);
        draw ();
        };
