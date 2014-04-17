$(document).ready(function(){
   $.get('data.csv', function(data){
        var items = handle_csv(data);
        render_sidebar(items);
        
   }) 
});

function handle_csv(raw_csv){
    var objects = [];
    var rows = raw_csv.split('\n');
    rows = rows.splice(1, rows.length-1);
    _.each(rows, function(row){
        var elements = row.split(',');
        console.log(elements);
        if(elements.length > 1){
            var temp_object = {
                name: elements[0],
                period: parseFloat(elements[1])*1000,
                color: elements[2]
            }
            objects.push(temp_object);
        }
    });
    return objects;
}

function render_sidebar(elements){
    console.log(elements);
    console.log("rendering sidebar");
    var template = $("#particle-row-template").html();
    var table_view = $("#particle-table");
    table_view.empty();
    for(var i = 0; i < elements.length; i++){
        var element = elements[i];
        if(i%2 == 0) element.odd = "element-odd";
        else element.odd = ""
        var render = _.template(template, element);
        table_view.append(render);
    }
    
}
