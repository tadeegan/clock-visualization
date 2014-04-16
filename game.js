var center = new Vector2(250, 250);
var particles = [];
var canvas = document.getElementById('flow-canvas');
var context = canvas.getContext('2d');
var running = false;
var FPS = 60;
function addParticle(time_period, radius, color){
    var temp_particle = new Particle(center.x, center.y, radius, time_period, color || '#ff0f0f');
    particles.push(temp_particle);
}
function render(){
    context.clearRect (0,0,canvas.width,canvas.height);
    for(var i = 0; i  < particles.length; i++){
        var particle = particles[i];
        particle.draw(context);
    }
    if(running){
        setTimeout(render, 1000/FPS);
    }else{
        console.log("done..");
    }
}

function begin(){
    console.log("starting...");
    running = true;
    setTimeout(render, 1000/FPS);
}
function stop(){
    running = false;
}

begin();