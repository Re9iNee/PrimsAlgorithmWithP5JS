var vertecies = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
    fill (255);
    var v =createVector(mouseX, mouseY);
    vertecies.push(v);
    calcDist();
}

function draw(){
    background(1);
    for (let i = 0; i < vertecies.length; i++){
        //draw
        fill(255);
        stroke(255);
        ellipse(vertecies[i].x, vertecies[i].y, 16, 16);
    }
    for(let j =0; j < reached.length; j++){
        fill(255);
        stroke(255);
        line(x1, y1, x2, y2)
    }
}
function calcDist(){
    var randomVertex = floor(random(0, vertecies.length));
    var reached = [];
    var tempVector;
    reached.push(vertecies[randomVertex]);
    // vertecies.splice(randomVertex, 1);
    for (let i =0 ; i < vertecies.length; i++){
        if (i == random){
            continue;
        }
        var minDistance = Infinity;
        for(let j =0; j < reached.length; j++){
            var tempD = dist(vertecies[i].x, vertecies[i].y, reached[j].x, reached[j].y);
            if (tempD == 0){
                console.log(i);
                console.log(j);
                continue;
            }
            if (tempD < minDistance){
                tempVector = createVector(reached[j].x, reached[j].y);
                minDistance = tempD;
            }
        }
        //we have to store that best route for this [i] vertex to // or maybe we draw a line here //and push i to the reached ones
        fill(255);
        stroke(255);
        line(vertecies[i].x, vertecies[i].y, tempVector.x, tempVector.y);
        reached.push(vertecies[i]);
        //delete this index from vertecies
    }
}