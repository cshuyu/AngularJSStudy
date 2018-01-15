(function(angular){
'use strict';

angular
	.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.update = function() {
		if(!$scope.dishes) {
			$scope.msg = 'Please enter the data first.';
			$scope.bordercolor = 'has-error';
			$scope.msgcolor = 'text-danger';
			return ;
		}
		const raw = $scope.dishes.trim();
		const arr = raw.split(',');
		let cnt = 0;
		for(let i=0; i<arr.length; i++) {
			if(arr[i].trim().length > 0) {
				cnt++;
			}
		}
		console.log(cnt);
		if(cnt <= 3) {
			$scope.msg = 'Enjoy!';
			$scope.msgcolor = 'text-success';
			$scope.bordercolor = 'has-success';
		} else {
			$scope.msg = "Too much!";
			$scope.msgcolor = 'text-danger';
			$scope.bordercolor = 'has-success';
		}
	};

}

})(window.angular);