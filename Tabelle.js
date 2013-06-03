function simpleTable()
{
    

$('#tablee').bind(function() {

alert("datalength: "+filterdata.length);
var thead;
var c;
var columns;
var mark;
var w = 360,
h = 250
 
var svg = d3.select("#simpleTable").append("svg:svg");

div = d3.select("body").append("div");
table = div.append("simptab").attr("id","table"),
thead = table.append("thead").attr("id","header"),
tbody = table.append("tbody").attr("id","body");
c = d3.scale.ordinal();
// declare the data variable
columns;
mark = 0;

columns = Object.keys(data[0]);
columns = ["ID", "dating","dialface_shape","material","site","location"];
// append the header row
thead.append("tr")
.selectAll("th")
.data(columns)
.enter()
.append("th")
.text(function(column) { return column; })
.attr("onselectstart","return false;");

// create a row for each object in the data
var rows = tbody.selectAll("tr")
.data(filterdata)
.enter()
.append("tr");

// create a cell in each row for each column
var cells = rows.selectAll("td")
.data(function(row) {
return columns.map(function(column) {
return {column: column, value: row[column]};
});
})
.enter()
.append("td")
.text(function(d) { return d.value; });
    });


// $('#metadata').load('http://www.ancient-astronomy.org/webapplications/sundials/objects.php?objectid=1', function() {});

 
};
