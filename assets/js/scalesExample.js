'use strict';

// Only executed our code once the DOM is ready.
window.onload = function () {

	scales.drawScale({
		scaleSelector:'#scales',
		leftPercent: 0.55,
		rightPercent: 0.45,
		leftColor: 'red',
		rightColor: 'blue',
		legendInfo: {
			legendSelector: '#legend',
			legendTitle: 'Party Breakdown of Congress',
			leftSideLabel: 'Republican',
			rightSideLabel: 'Democrat'
		}
	});

	scales.drawScale({
		scaleSelector:'#scalesTwo',
		leftPercent: 0.12,
		rightPercent: 0.88,
		leftColor: '#17A589',
		rightColor:'#99A3A4',
		legendInfo: {
			legendSelector: '#legendTwo',
			legendTitle: 'Car Ownership in America',
			leftSideLabel: 'Does not own a car',
			rightSideLabel: 'Owns a car'
		}
	});
};