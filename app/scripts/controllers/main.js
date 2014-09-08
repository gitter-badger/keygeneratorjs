'use strict';

angular.module('keysApp')
.controller('MainCtrl', function ($scope) {

	var keys = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	$scope.key = 'Your Key';

	$scope.getKey = function() {
		$scope.key = keys[Math.floor(Math.random() * 62)] + keys[Math.floor(Math.random() * 62)] + keys[Math.floor(Math.random() * 62)] +
		'-' + keys[Math.floor(Math.random() * 62)] + keys[Math.floor(Math.random() * 62)] + keys[Math.floor(Math.random() * 62)] +
		'-' + keys[Math.floor(Math.random() * 62)] + keys[Math.floor(Math.random() * 62)] + keys[Math.floor(Math.random() * 62)] +
		'-' + keys[Math.floor(Math.random() * 62)] + keys[Math.floor(Math.random() * 62)] + keys[Math.floor(Math.random() * 62)];
	};

});
