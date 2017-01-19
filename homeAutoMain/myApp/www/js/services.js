'use strict';

angular.module('eMeMate.services', ['ngResource'])
		.constant("baseURL", "http://localhost:3000/db")
		 .factory('dbFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
    		// var room = ['bathroom_icon.png', 'guest_bedroom_icon.png', 'hall_icon.png', 'kid_bedroom_icon', 'kitchen_icon.png', 'lounge_icon.png', 'master_bedroom_icon.png', 'pool_icon.png', 'sauna_icon.png', 'study_icon.png', 'whole_house_icon.png'];
    		
            return $resource(baseURL);
    
        }])

