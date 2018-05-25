(function(){
	'use strict'; //

	angular.module('LunchCheck',[]).controller('dd',LunchCheckController);

	LunchCheckController.$inject=['$scope'];
	function LunchCheckController($scope){

		$scope.name="";

		$scope.check=function(){

			
			$scope.name=$scope.name.trim();
			if($scope.name===""){
				$scope.message="Please enter data first";
			}
			else{
				var x=$scope.name.split(',');
			console.log(x);
			console.log(x.length);
			if(x.length>3){

				$scope.message="Too much!!";
			}
			else if(x.length<=3){

				$scope.message="Enjoy!!";

			}
		}
			

		};

	}
})();