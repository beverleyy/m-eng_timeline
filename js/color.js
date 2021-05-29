var colors = ["#c0ff33","#ffcb05","crimson"];

var grad = document.createElement("div");
grad.style.background = makeGradient(colors);
document.body.appendChild(grad);

var elems = document.querySelectorAll(".timeline-events > li");

for (var j=1; j<elems.length-1; j++){
	var color = randomGradient(j/(elems.length-1),grad);
	var theStyle = elems[j].style;
	theStyle.setProperty('--col','rgb('+color+')');
	cssVars({
	  	variables: {'--col':'rgb('+color+')'}
	});
	var theHeads = elems[j].querySelectorAll("h3");
	for (var k=0; k<theHeads.length; k++){
		var hStyle = theHeads[k].style;
		hStyle.setProperty('--col','rgb('+color+')');
		cssVars({
			variables: {'--col':'rgb('+color+')'}
		});
	}
}

grad.remove();

function makeGradient(colors){
	var string = "linear-gradient(to right,";
	return string.concat(colors.join(),")");
}