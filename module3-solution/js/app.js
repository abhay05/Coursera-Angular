(function(){
'use strict';
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItems);

function FoundItems()
{
	var ddo={
		templateUrl:'Menu.html',
		scope:{
			items:'<',
			remove:'&'
		},
		controller: FoundItemsDirectiveController,
        controllerAs: 'list',
		bindToController: true
	};
	return ddo;
}


  function FoundItemsDirectiveController() {
    var list = this;

    list.isEmpty = function() {
      return list.found != undefined && list.found.length === 0;
    }
}

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService)
{
	var narrow=this;
	narrow.searchTerm="";
	
	narrow.narr =function(){
		if(narrow.searchTerm==="")
			{
				narrow.found=[];
      				return;
			}
		
		var promise=MenuSearchService.getMatchedMenuItems(narrow.searchTerm);

		promise.then(function(response){
				narrow.found=response;
				console.log(narrow.found);
			}
			).catch(function(error){
				console.log("Something wrong "+error);
			}

			);

		
		
		
	};

/*	narrow.removeItem=function($index){
		MenuSearchService.remove($index);
	}*/

	narrow.removeItem=function(index){

		narrow.found.splice(index,1);
		if(narrow.found.length==0){console.log("Nothing Found");}

	};
}


MenuSearchService.$inject=['$http'];
function MenuSearchService($http)
{
	var service =this;
	service.getMatchedMenuItems=function(searchTerm){
		return $http({
			method:"GET",
			url:'https://davids-restaurant.herokuapp.com/menu_items.json'
		}).then(function(response){
			var foundItems=[];
			console.log(response.data.menu_items);
			for(var i=0;i<response.data.menu_items.length;i++){
				if(response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1){foundItems.push(response.data.menu_items[i]);}
			}

			return foundItems;
		});
	};

	console.log(1);
}




})();
