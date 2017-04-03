var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope, $http, $timeout, $interval, $log){
	$scope.isVisible = false;
	$scope.templateData = [{"templateName":"Leader Page 1","templatePath":"alert"},{"templateName":"Leader Page 2","templatePath":"Button"},{"templateName":"Leader Page 3","templatePath":"Code Block"},{"templateName":"Leader Page 4","templatePath":"Content Box"},{"templateName":"Leader Page 5","templatePath":"Slider"},{"templateName":"Leader Page 6","templatePath":"Google Map"}	];

	$scope.arrayObjs = [];

	$scope.addT = function(t){
		$scope.arrayObjs.push(t);
		console.log($scope.arrayObjs);
		$('.parented').hide();
	}
}); 

app.directive('prevent', function() {
	return {
		restrict: 'A',
		scope: {
			visible: '=',
			objectData: '='
		},
		link: function($scope, $ele) {
			$ele.on('contextmenu', '*', function(e) {
				e.preventDefault();
				e.stopPropagation();
				$scope.$apply(function () {
					$scope.visible = true;
					$('.parented').css({left:e.pageX, top:e.pageY, position: 'absolute'}).show();
					var ele = e.target;
					console.log(e)

					function getSelectionText() {
						if (window.getSelection) {
							return window.getSelection().toString();
						} 
						else{
							return '1231'
						}
					}

					function getEleType(){
						switch (ele.nodeName) {
							case 'IMG':
							return 'Image'
							break;

							case 'P':
							case 'H1':
							case 'H2':
							case 'H3':
							case 'H4':
							case 'H5':
							case 'H6':
							return 'text'
							break;

							case 'TABLE':
							case 'TR':
							case 'TD':
							return 'table'
							break;
							
							default: 
							return ele.nodeName;
						}
					}

					$scope.objectData = {
						elementType: getEleType(),
						content: ele.innerText,
						id: ele.id,
						class: ele.className,
						selectedText: getSelectionText(),
						nodeName: ele.nodeName
					}
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

}
};
}
)
