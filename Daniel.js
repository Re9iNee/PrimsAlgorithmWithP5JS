var vertecies = [];
function setup(){
    createCanvas(windowWidth, windowHeight);
    for (var i =0 ; i < 10; i++){
    var newVertex = createVector(random(0, windowWidth), random(0, windowHeight));
    vertecies.push(newVertex);
    }
}
function mousePressed(){
    var newVertex = createVector(mouseX, mouseY);
    vertecies.push(newVertex);
}
function draw(){
    background(1);

    var reached = [];
    var unreached = [];
    
    // for (let i =0; i < vertecies.length; i++){
    //     unreached.push(vertecies[i]);
    // }
    unreached = [...vertecies];

    // var randomVertex = floor(random(0, unReached.length));
    
    reached.push(unreached[0]);
    unreached.splice(0, 1);

    while(unreached.length > 0){
        var record = Infinity;
        var  rIndex;
        var  uIndex;
    for (var i =0; i < reached.length; i++){
        for (var j =0; j < unreached.length; j++){

            var v1 = reached[i];
            var v2 = unreached[j];

            var d = dist(v1.x, v1.y, v2.x, v2.y);

            if (d < record ){
                record = d;
                rIndex = i;
                uIndex = j;
            }
        }
    }
    fill(255);
    strokeWeight(2);
    line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);

    reached.push(unreached[uIndex]);
    unreached.splice(uIndex, 1);
    }
    for (var i =0; i < vertecies.length; i++){
        fill(255);
        stroke(255);
        ellipse(vertecies[i].x, vertecies[i].y, 16, 16);
    }
}