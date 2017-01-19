angular.module('eMeMate.controllers', [])
// .controller('MainController', ['$scope', function($scope) {

//             $scope.room1 = "Hey from main controller";
                        
//         }])


.controller('LoginCtrl', ['$scope', function($scope) {

            $scope.room1 = "Hey from main controller";
                        
        }])

.controller('CategoryCtrl', ['$scope','$filter', 'dbFactory', function($scope, $filter,dbFactory) {

			$scope.room1 = dbFactory.get("rooms");

			var test = [];
			var room2 = dbFactory.get();
			var wrapped = angular.fromJson(room2)
			// console.log(wrapped);
			
			 angular.forEach(wrapped.rooms, function(item, idx) {
                        test.push(item);
                    });
			
			// console.log(test);
			// console.log(room1);
			// room1 = $filter('filter')(dbFactory.get("rooms"), function (d) {return d.names});

			// console.log(room1);

            // $scope.room1 = "Hey from room controller";
                        
        }])

.controller('RoomsCtrl',['$scope', '$http', '$state', '$rootScope',function($scope, $http, $state, $rootScope) {


            // $scope.room1 = "Hey from Category controller";
            $http({method: 'GET', url: 'http://localhost:3000/db'}).success(function(data) {
    $scope.room1 = [];
    var countRoom = 0;
    var countRoomArray = [];
    var countRoomStatus = 0;
    var countRoomStatusArray = [];
    var roomsDevices = [];
    var roomsDevicesArray = [];
    var categoryDevices = [];
    var categoryDevicesArray = [];
    var roomsDevicesforCategory = [];
    var roomsDevicesforCategoryArray = [];
    // console.log(data.rooms.length);
    // console.log(data.devices[0].room);

    for(i=0; i<data.rooms.length; i++){
    	for (j=0; j<data.devices.length; j++){
    		if(data.rooms[i].id == data.devices[j].room){

    			countRoom = countRoom + 1;
    			if(data.devices[j].status == 1){
    				countRoomStatus = countRoomStatus + 1;

    			}
    			roomsDevices.push(data.devices[j].name);
    			roomsDevicesforCategory.push(data.devices[j]);
    			categoryDevices.push(data.devices[j].category);

    		}

    	}
    	roomsDevicesforCategoryArray.push(roomsDevicesforCategory);
    	categoryDevicesArray.push(categoryDevices);	
    	roomsDevicesArray.push(roomsDevices);
    	countRoomStatusArray.push(countRoomStatus);
    	countRoomArray.push(countRoom);
    	countRoom=0;
    	countRoomStatus = 0;
    	roomsDevices = [];
    	categoryDevices = [];
    	roomsDevicesforCategory = []

    }

    var onOff = {"on/off Switch": []};
    var dimmableSwitch = {"Dimmable Switch": []};
    var sensor ={"sensor": []};
    var thermostat = {"thermostat": []};
   	

    console.log(roomsDevicesforCategoryArray);
    // console.log(categoryDevicesArray);
    // console.log(roomsDevicesArray);
    $scope.countRoomArray = countRoomArray;
    $scope.countRoomStatusArray = countRoomStatusArray;
    $scope.roomsDevicesArray = roomsDevicesArray;
    // console.log(countRoomArray);
    // console.log(data.rooms[0].id);
    

    // for(i=0; i<data.categories.length;i++){
    // 	for(j=0;j<roomsDevicesArray[i].length;j++){
    // 		if(data.categories[i].id == data.devices)
    // 	}

    // }
    var mainArray = [];
    var mainMainArray = [];
    var category2 = [];
    var category3 = [];
    var category4 = [];
    var category5 = [];
   
    for(i=0; i<roomsDevicesforCategoryArray.length; i++){
    		console.log("length",roomsDevicesforCategoryArray[i].length);
    	for(j=0; j<roomsDevicesforCategoryArray[i].length; j++){

	    	if (roomsDevicesforCategoryArray[i][j].category== "3"){
	    			category3.push(roomsDevicesforCategoryArray[i][j].name);
	    			onOff = {"on/off Switch": category3};
	    		}
	    	if(roomsDevicesforCategoryArray[i][j].category == "2"){
	    			console.log("aaya");
	    			category2.push(roomsDevicesforCategoryArray[i][j].name);
	    			dimmableSwitch = {"Dimmable Switch": category2};
	    	}
	    	if (roomsDevicesforCategoryArray[i][j].category == "4"){
	    			category4.push(roomsDevicesforCategoryArray[i][j].name);
	    			sensor ={"sensor": category4};
	    	}
	    	if (roomsDevicesforCategoryArray[i][j].category == "5"){
	    			category5.push(roomsDevicesforCategoryArray[i][j].name);
	    			thermostat = {"thermostat": category5};
    		}

    }
    if(category3.length > 0){
    	mainArray.push(onOff);
    }
    if(category2.length > 0){
    	mainArray.push(dimmableSwitch);
    }
    if(category4.length > 0){
    	mainArray.push(sensor);
    }
    if(category5.length > 0){
    	mainArray.push(thermostat);
    }

    mainMainArray.push(mainArray);
    // console.log("andar", mainMainArray);
 	category2 = [];
 	category3 = [];
 	category4 = [];
 	category5 = [];
 	mainArray = [];
}
    console.log("main Array",mainMainArray);

  //   $scope.getDevices = function(index) {
  //   	console.log(index);
  //   	console.log(roomsDevicesArray[index]);
  //   	a = roomsDevicesArray[index];
  //   	$rootScope.devicesinRoomArray = roomsDevicesArray[index];
  //   	$state.go('roomDevices');

    	
  // };
  $scope.getDevices = function(index) {
    	$rootScope.devicesinRoomArray = mainMainArray[index];
    	console.log("root",$rootScope.devicesinRoomArray);
    	$state.go('roomDevices');

    	
  };
  	
  	console.log($scope.devicesinRoomArray);
    angular.forEach(data.rooms, function(value, key) {
        $scope.room1.push(value.name);

    });
    console.log($scope.room1);
});
                        
        }])
