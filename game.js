var particles = [];
var canvas = document.getElementById('flow-canvas');
var context = canvas.getContext('2d');
var real_time_center = new Vector2(300, canvas.height/2);
var ms_time_center = new Vector2(canvas.width - 200, canvas.height/3 - canvas.height/6);
var hour_time_center = new Vector2(canvas.width - 200, 2*canvas.height/3- canvas.height/6);
var day_time_center = new Vector2(canvas.width - 200, 3*canvas.height/3- canvas.height/6);

var running = false;
var FPS = 100;
var ms_per_hour = 1000*60*60;
var ms_per_day = ms_per_hour * 24;

function addParticle(time_period, radius, color){

    var center = real_time_center;
    radius = Math.random()*200 + 50;

    if(time_period < 600){
        //slowmotion
        center = ms_time_center;
        time_period = time_period * 10;
        radius = Math.random()*80 + 20;

    }
    else if(time_period > ms_per_hour / 4){
        //sped up hours = seconds
        center = hour_time_center;
        time_period = time_period / ms_per_hour;
        radius = Math.random()*80 + 20;

    }
    else if(time_period > ms_per_day / 4){
        //sped up hours = seconds
        center = day_time_center;
        time_period = time_period / ms_per_day;
        radius = Math.random()*80 + 20;

    }
    console.log(time_period);
    var temp_particle = new Particle(center.x, center.y, radius, time_period, color || '#ff0f0f');
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
    context.fillStyle = "#FFFFFF";
    context.font="20px Helvetica";
    for(var i = 0; i < rads.length; i++){
        context.beginPath();
        context.arc(real_time_center.x,real_time_center.y,rads[i],0,2*Math.PI);
        context.stroke();
    }
    context.fillText("Real Time (1 spin / second)",real_time_center.x - 100,real_time_center.y + 290);


    rads = [30, 60, 90];
    context.strokeStyle = "#FFFFFF";
    for(var i = 0; i < rads.length; i++){
        context.beginPath();
        context.arc(ms_time_center.x,ms_time_center.y,rads[i],0,2*Math.PI);
        context.stroke();
    }
    context.fillText("(10 spin / 1 second)",ms_time_center.x - 90,ms_time_center.y + 120);

    for(var i = 0; i < rads.length; i++){
        context.beginPath();
        context.arc(hour_time_center.x,hour_time_center.y,rads[i],0,2*Math.PI);
        context.stroke();

    }
    context.fillText("(1 spin / hour)",hour_time_center.x - 65,hour_time_center.y + 120);
    for(var i = 0; i < rads.length; i++){
        context.beginPath();
        context.arc(day_time_center.x,day_time_center.y,rads[i],0,2*Math.PI);
        context.stroke();
    }
    context.fillText("(1 spin / day)",day_time_center.x - 60,day_time_center.y + 110);


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