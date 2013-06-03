var material="None";
var tag=-1;


function filterMaterial()
{
    //alert("material im MatFilter: "+material);
alert("tag im MatFilter: "+tag);

var w=10,
h=10

//item Filter.1.1
//############################################################
//die naechsten Zeilen sind wichtig fuer die Interaktion     #
//der svg #typ identifiziert die diafacetype Selektion       #
//wenn diese Funktion aufgerufen werden soll, dann muss im   #
//ausfuehrenden Skript die folgende Bedingung gesetzt werden:#
// <div id="filterMaterial"></div>                           #
//############################################################

var svg = d3.select("#filterMaterial").append("svg:svg")
.attr("class", "chart")
.attr("width", w)
.attr("height", h )
.append("svg:g")
.attr("transform", "translate(10,470)");

var filtMat=false;

if(tag == 2) 
    {
	filtMat=true;
	document.getElementById('filterMaterial').innerHTML = filtMat;
	return true;
    };
if(tag!=2)
    {
	filtMat=false;
	document.getElementById('filterMaterial').innerHTML = filtMat;
	return true;
    };
};