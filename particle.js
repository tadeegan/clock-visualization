var Particle = (function(){
    
    var Particle = function(centerx, centery, radius, time_period, color){
        var _radius = radius;
        var _time_period = time_period;
        var _color = color;
        var _center = new Vector2(centerx, centery);
        var _start_date = new Date();
        this.get_start_date = function(){
            return _start_date;
        }
        this.get_center = function(){
            return _center;
        }
        this.get_color = function(){
            return _color;
        }
        this.get_time_period = function(){
            return _time_period;
        }
        this.get_radius = function(){
            return _radius;
        }
    }
    Particle.prototype.draw = function(context){
        var current_date = new Date();
        var time_since_creation = current_date.getTime() - this.get_start_date().getTime();
        var num_periods_elapsed = time_since_creation / this.get_time_period();
        var angle_elapsed = num_periods_elapsed * 2*Math.PI;
        var xoff = Math.sin(angle_elapsed) * this.get_radius();
        var yoff = Math.cos(angle_elapsed) * this.get_radius();
        var xpos = this.get_center().x + xoff;
        var ypos = this.get_center().y + yoff;


        context.beginPath();
        context.fillStyle = this.get_color();
        context.arc(xpos, ypos, 8, 0, 2 * Math.PI, false);
        context.fill();
    }
    return Particle;

})();