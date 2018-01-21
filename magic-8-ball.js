fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 6));
if (answer===1) {
    text("NOT YET", 176, 200);
}
else if (answer===2){
    text("ASK AGAIN", 159, 229); 
}
else if  (answer===3){
    text("DEFINTELY", 159, 229); 
}
else if  (answer===4){
    text("UNCLEAR", 159, 229); 
}
if (answer ===5){
    text("FOR SURE", 159, 229); 
}
