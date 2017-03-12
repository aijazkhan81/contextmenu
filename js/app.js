var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope, $http, $timeout, $interval, $log){
	$scope.isVisible = false;
	$scope.$watch('isVisible', function(){
		$log.log($scope.isVisible)
	})
	$scope.templateData = [{"templateName":"Leader Page 1","templatePath":"alert"},{"templateName":"Leader Page 2","templatePath":"Button"},{"templateName":"Leader Page 3","templatePath":"Code Block"},{"templateName":"Leader Page 4","templatePath":"Content Box"},{"templateName":"Leader Page 5","templatePath":"Slider"},{"templateName":"Leader Page 6","templatePath":"Google Map"}	];

	$scope.testVar = {};
	$scope.addT = function(t){
		console.log(t)
	}

	$scope.someData = {message: 'hello'};

	$scope.raj = function(){
		console.log('raj')
	}

	$scope.sound = function(souls){
		console.log(souls)
	}
}); 

app.directive('prevent', function() {
	return {
		restrict: 'A',
		scope: {
			visible: '=',
			isolatedBindingFoo:'=bindingFoo',
			someData: '=ravi',
			raj: '&', 
			souls: '='
		},
		link: function($scope, $ele) {
			$ele.on('contextmenu', '*', function(e) {
				e.preventDefault();
				e.stopPropagation();
				$scope.$apply(function () {
					$scope.visible = true;
					$('.parented').css({left:e.pageX, top:e.pageY, position: 'absolute'}).show();
					var ele = e.target;
					$scope.souls = {
						elementType: ele.nodeName,
						content: ele.innerText,
						id: ele.id,
						class: ele.className
					}
					console.log($scope.souls)
				})
			});

			$(document).on('click', '*', function (e) {
				if ($(e.target).parents('.parented').length  > 0) {
				}
				else{
					$('.parented').hide()
					$ele.off('contextmenu', '*', function(){
						console.log('Context menu off')
					})
				}
			})

			$scope.souls = {message: 'hello'};
		}
	};
})
