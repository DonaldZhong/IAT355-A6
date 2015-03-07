var pc = d3.parcoords()("#graph")
  .alpha(0.6)

d3.csv('iris.csv', function(error, data) {
	dataset = data;
	var colors = d3.scale.category10();
	var colour = function(d) {
		return colors(d['species']);
	}
 
    pc.data(data)
		.color(colour)
	    .margin({ top: 50, left: 0, bottom: 12, right: 0 })	
	    .render()
	    .createAxes()	
	    .reorderable()
	    .brushMode("1D-axes");

});

