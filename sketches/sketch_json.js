var url = 'https://api.myjson.com/bins/zsd4b';

function setup() {
   loadJSON(url, gotData, 'json');
   canvas = createCanvas(windowWidth, windowHeight * 0.8);
   canvas.parent('top');
   canvas.position(0, 0);
   canvas.style('z-index', '-1');
   noStroke();
   noLoop();
}

function gotData(data) {
   console.log(data);
   var pelicula = data.results[0].title;
   textSize(20);
   text("La primera película de Star Wars es "+ pelicula +".", width / 2, 150);
   }

function draw() {
   background(237, 34, 93);
   fill(255);
   textAlign(CENTER);
}
