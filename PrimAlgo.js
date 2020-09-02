var vertecies = [];
function setup(){
    createCanvas(windowWidth, windowHeight);

    for(var i=0; i <25; i++){
        vertecies.push(createVector(random(0, windowWidth), random(0, windowHeight)));
    }
}
function mousePressed(){
    vertecies.push(createVector(mouseX, mouseY));
}
function draw(){
    background(252,254,156);
    var unReached = [], reached = [];
    
    unReached = [...vertecies];

    reached.push(unReached[0]);
    unReached.splice(0, 1);

    while(unReached.length > 0){
        var record = 10000;
        var jIndex, iIndex;
        for (var i=0; i < reached.length; i++){
            for (var j=0; j < unReached.length; j++){
                var d = dist(reached[i].x, reached[i].y, unReached[j].x, unReached[j].y);
                if (d < record){
                    record = d;
                    iIndex = i;
                    jIndex = j;
                }
            }
        }
        fill(255);
        strokeWeight(2);
        line(reached[iIndex].x, reached[iIndex].y, unReached[jIndex].x, unReached[jIndex].y);

        reached.push(unReached[jIndex]);
        unReached.splice(jIndex, 1);
    }

    for(var i=0; i <vertecies.length; i++){
        fill(255);
        ellipse(vertecies[i].x, vertecies[i].y, 16, 16);
    }
}