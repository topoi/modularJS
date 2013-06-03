function filterDatum(datum)
{
alert("datum im Filter: "+datum);
var w=10,
h=10

//item FilterDatum.1.1
//############################################################
//die naechsten Zeilen sind wichtig fuer die Interaktion     #
//der svg #typ identifiziert die diafacetype Selektion       #
//wenn diese Funktion aufgerufen werden soll, dann muss im   #
//ausfuehrenden Skript die folgende Bedingung gesetzt werden:#
// <div id="filterDatum"></div>                              #
//############################################################

var svg = d3.select("#filterDatum").append("svg:svg")
.attr("class", "chart")
.attr("width", w)
.attr("height", h )
.append("svg:g")
.attr("transform", "translate(10,470)");

var data = [
  {id: 1, tags:[ "1","sphere","stone","79"]},
  {id: 2, tags:[ "2","sphere","marble","79"]},
  {id: 3, tags:[ "3","unknown","stone","79" ]},
  {id: 4, tags:[ "4","sphere","marble","79" ]}
];

var xf = crossfilter(data);
var tags = xf.dimension(function(d) { return d.tags });
var tag = datum;

tags.filter(function(d) {
  if(d.indexOf(tag) == 3) 
      {
	  filtDat=true;
	  document.getElementById('filterDatum').innerHTML = filtDat;
	  return true;
      };
  return false;
    })
    };