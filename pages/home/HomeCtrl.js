/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function($scope) {
	$scope.formVals ={
		myVal: ''
	};

	$scope.vals =[
		'yes',
		'no',
		'maybe',
		'so'
	];
	
	$scope.changeIt =function() {
		console.log('new val: '+$scope.formVals.myVal);
	};
}]);