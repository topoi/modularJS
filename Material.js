function materialSelection(material)
{

alert("tags in Material" +tags);

$('#filterMaterial').show();
var w = 360,
h = 250
 
//item Material.1.1
//############################################################
//die naechsten Zeilen sind wichtig fuer die Interaktion     #
//der svg #typ identifiziert die diafacetype Selektion       #
//wenn diese Funktion aufgerufen werden soll, dann muss im   #
//ausfuehrenden Skript die folgende Bedingung gesetzt werden:#
// <div id="material"></div>                                 #
//############################################################

var svg = d3.select("#material").append("svg:svg")
.attr("class", "chart")
.attr("width", w)
.attr("height", h )
.append("svg:g")
.attr("transform", "translate(10,170)");
 
x = d3.scale.ordinal().rangeRoundBands([0, w-20])
y = d3.scale.linear().range([0, h-20])
z = d3.scale.ordinal().range(["red"])

//Zwei Spalten (id, Anzahl der Sonnenuhren)

var matrix = [
[ 1, 2],
[ 2, 12],
[ 3, 89],
[ 4, 122]
];

var remapped =["c1"].map(function(dat,i){
return matrix.map(function(d,ii){
return {x: ii, y: d[i+1] };
})
});
var stacked = d3.layout.stack()(remapped)
x.domain(stacked[0].map(function(d) { return d.x; }));
y.domain([0, d3.max(stacked[stacked.length - 1], function(d) { return d.y0 + d.y; })]);
 

var valgroup = svg.selectAll("g.valgroup")
.data(stacked)
.enter().append("svg:g")
.attr("class", "valgroup")
.style("fill", function(d, i) { return z(i); })
.style("stroke", function(d, i) { return d3.rgb(z(i)).darker(); });
 
var list=["ivory", "limestone", "marble",  "stone"];

var label = svg.selectAll("text")
      .data(x.domain())
      .enter().append("svg:text")
      .attr("x", function(d) { return x(d) + x.rangeBand() / 2; })
      .attr("y", 6)
      .attr("text-anchor", "middle")
      .attr("dy", ".71em")
      .text(function(d) {return list[d]});

var material="None";
var crossdata = [{id: 1,tags:[" 1","sphere","marble","1st cent. CE"]}, {id: 2,tags:[" 2","sphere","marble","3rd cent. BCE"]}, {id: 3,tags:[" 3","sphere","tufa-like",""]}, {id: 4,tags:[" 4","sphere","marble",""]}, {id: 5,tags:[" 5","sphere","stone or marble",""]}, {id: 6,tags:[" 6","sphere","limestone",""]}, {id: 7,tags:[" 7","sphere","pietra dolce de Siracusa",""]}, {id: 8,tags:[" 8","sphere","stone","1st cent. CE"]}, {id: 9,tags:[" 9","sphere","limestone","1st cent. CE"]}, {id: 10,tags:[" 10","sphere","marble",""]}, {id: 11,tags:[" 11","sphere","marble",""]}, {id: 12,tags:[" 12","sphere","marble",""]}, {id: 13,tags:[" 13","sphere","travertine",""]}, {id: 14,tags:[" 14","sphere","travertine",""]}, {id: 15,tags:[" 15","sphere","Null",""]}, {id: 16,tags:[" 16","sphere","Null",""]}, {id: 17,tags:["17","sphere","marble",""]}, {id: 18,tags:[" 18","sphere","limestone",""]}, {id: 19,tags:[" 19","sphere","marble",""]}]
var xf = crossfilter(crossdata);

var tags = xf.dimension(function(d) {
	return d.tags});

// Add a rect for each date.
var rect = valgroup.selectAll("rect")
.data(function(d){return d;})
.enter().append("svg:rect")
.on("click", function  (d)  {
			    alert("du hast "+list[d.x]+" geklickt"); 
                            material=list[d.x]; 
                            ;
                            },
                            tags.filter(function(d){
                            	tag=d.indexOf(material);
                            	
                            }
                            
                          
                
                
		/*//filtMat=true;
		document.getElementById('material').innerHTML = true;
	        //return true;
                };
    
                             if(tag!=2)
                {
	        //filtMat=false;
	        document.getElementById('material').innerHTML = false;
	        //return tue;
                };*/
)
.attr("x", function(d) { return x(d.x); })
.attr("y", function(d) { return -y(d.y0) - y(d.y); })
.attr("height", function(d) { return y(d.y); })
.attr("width", x.rangeBand());

if(tag==2) {alert("true")};

return material;
};

