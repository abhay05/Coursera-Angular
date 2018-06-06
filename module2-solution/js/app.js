(function(){
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var list1=this;

	//list1.itemName="";
	//list1.itemQuantity="";
	list1.items=ShoppingListCheckOffService.getItems();
	list1.removeItem=function(index){
		ShoppingListCheckOffService.removeItem(index);
		
	};
}



AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var list2=this;
	//list2.itemName="";
	//list2.itemQuantity="";
	//list2.addItem=function(){
	//	ShoppingListCheckOffService.addItem(list1.itemName,list1.itemQuantity);
	//}; 
	list2.items=ShoppingListCheckOffService.getItems1();
}

function ShoppingListCheckOffService()
{
	var service=this;
	
	var arr=[{ itemName: "Cookies", itemQuantity: 10 },{itemName:'Water',itemQuantity:5},{itemName:'Noddles',itemQuantity:3},{itemName:'Biscuits',itemQuantity:2},{itemName:'Donuts',itemQuantity:4}];
	var arr1=[];
	
	/*service.addItem=function(it,quantity){
		
		arr.push(item);
	};*/
	service.removeItem=function(index){
		var y={
		itemName:arr[index].itemName,
		itemQuantity:arr[index].itemQuantity
		};
		arr.splice(index,1);
		arr1.push(y);
	};
	service.getItems=function(){
		return arr;
	}; 

	service.getItems1=function(){
		return arr1;
	}; 
}

})();
