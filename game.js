var particles = [];
var canvas = document.getElementById('flow-canvas');
var context = canvas.getContext('2d');
var real_time_center = new Vector2(300, canvas.height/2);
var ms_time_center = new Vector2(canvas.width - 200, canvas.height/4);
var hour_time_center = new Vector2(canvas.width - 200, 2*canvas.height/4);
var day_time_center = new Vector2(canvas.width - 200, 3*canvas.height/4);

var running = false;
var FPS = 100;
function addParticle(time_period, radius, color){
    var temp_particle = new Particle(real_time_center.x, real_time_center.y, radius, time_period, color || '#ff0f0f');
    particles.push(temp_particle);
}
function render(){
    context.clearRect (0,0,canvas.width,canvas.height);
    render_paths();
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

function render_paths(){
    var rads = [50,100,150,200,250];
    context.strokeStyle = "#FFFFFF";
    for(var i = 0; i < rads.length; i++){
        context.beginPath();
        context.arc(real_time_center.x,real_time_center.y,rads[i],0,2*Math.PI);
        context.stroke();
    }

    rads = [30, 60, 90];
    context.strokeStyle = "#FFFFFF";
    for(var i = 0; i < rads.length; i++){
        context.beginPath();
        context.arc(ms_time_center.x,ms_time_center.y,rads[i],0,2*Math.PI);
        context.stroke();
    }
    for(var i = 0; i < rads.length; i++){
        context.beginPath();
        context.arc(hour_time_center.x,hour_time_center.y,rads[i],0,2*Math.PI);
        context.stroke();
    }
    for(var i = 0; i < rads.length; i++){
        context.beginPath();
        context.arc(day_time_center.x,day_time_center.y,rads[i],0,2*Math.PI);
        context.stroke();
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