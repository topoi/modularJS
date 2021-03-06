function dateSelection(datum)
{
var w = 360,
h = 250
 
//item Datum.1.1
//############################################################
//die naechsten Zeilen sind wichtig fuer die Interaktion     #
//der svg #typ identifiziert die diafacetype Selektion       #
//wenn diese Funktion aufgerufen werden soll, dann muss im   #
//ausfuehrenden Skript die folgende Bedingung gesetzt werden:#
// <div id="datum"></div>                                    #
//############################################################

var svg = d3.select("#datum").append("svg:svg")
.attr("class", "chart")
.attr("width", w)
.attr("height", h )
.append("svg:g")
.attr("transform", "translate(10,170)");
 
x = d3.scale.ordinal().rangeRoundBands([0, w-50])
y = d3.scale.linear().range([0, h-50])
z = d3.scale.ordinal().range(["lightblue"])

// 4 columns: ID,c1

var matrix = [
[ 1, 182],
[ 2, 2],
[ 3, 11],
[ 4, 99]
];

var remapped =["c1"].map(function(dat,i){
return matrix.map(function(d,ii){
return {x: ii, y: d[i+1] };
})
});

var stacked = d3.layout.stack()(remapped)
x.domain(stacked[0].map(function(d) { return d.x; }));
y.domain([0, d3.max(stacked[stacked.length - 1], function(d) { return d.y0 + d.y; })]);
 
// Add a group for each column.
var valgroup = svg.selectAll("g.valgroup")
.data(stacked)
.enter().append("svg:g")
.attr("class", "valgroup")
.style("fill", function(d, i) { return z(i); })
.style("stroke", function(d, i) { return d3.rgb(z(i)).darker(); });
 
var list=["1st cent. BCE", "1st cent. CE", "2nd cent. BCE", "before 79 CE"];

var label = svg.selectAll("text")
      .data(x.domain())
      .enter().append("svg:text")
      .attr("x", function(d) { return x(d) + x.rangeBand() / 2; })
      .attr("y", 6)
      .attr("text-anchor", "middle")
      .attr("dy", ".71em")
      .text(function(d) {return list[d]});
var datum="None";

// Add a rect for each date.
var rect = valgroup.selectAll("rect")
.data(function(d){return d;})
.enter().append("svg:rect")
.on("click", function  (d)  {
			    alert("du hast "+list[d.x]+" geklickt"); 
                            datum=list[d.x];
                            callDatum(datum); 
			})
.attr("x", function(d) { return x(d.x); })
.attr("y", function(d) { return -y(d.y0) - y(d.y); })
.attr("height", function(d) { return y(d.y); })
.attr("width", x.rangeBand());
}

