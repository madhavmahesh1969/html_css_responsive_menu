directiveApp = angular.module('customDirectiveApp',[]);

directiveApp.directive('elementDirective', function() {

	return {
		restrict: 'E',
		transclude: 'true',
		scope:'true',
		scope: {},
		template: '<span ng-transclude></span>',
		link: function(scope, element, attr){
			  element.append("<strong>"+attr.name+"</strong>");
			  console.log(scope.name);
			  scope.name = 'Changed';
			  console.log(scope.name); //Scope data can be overided
			  }
		};
});

directiveApp.controller('customDirectiveCtrl',['$scope',function($scope){
	$scope.name="working123";
	
}]);