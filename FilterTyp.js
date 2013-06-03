function filterTyp(typ)
{
alert("typ im Filter: "+typ);
var w=10,
h=10

//item Filter.1.1
//############################################################
//die naechsten Zeilen sind wichtig fuer die Interaktion     #
//der svg #typ identifiziert die diafacetype Selektion       #
//wenn diese Funktion aufgerufen werden soll, dann muss im   #
//ausfuehrenden Skript die folgende Bedingung gesetzt werden:#
// <div id="filterTyp"></div>                                #
//############################################################

var svg = d3.select("#filterTyp").append("svg:svg")
.attr("class", "chart")
.attr("width", w)
.attr("height", h )
.append("svg:g")
.attr("transform", "translate(10,470)");


//dieser Parameter wird vom Histogramfilter uebergeben
var filtTyp = false;

if(tag == 1) 
    {
	filtTyp=true;
	document.getElementById('filterTyp').innerHTML = filtTyp;
	return true;
    };
if(tag != 1) 
    {
	filtTyp=false;
	document.getElementById('filterTyp').innerHTML = filtTyp;
	return true;
    };


return false;
};