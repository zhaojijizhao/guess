define([],function(){
	function setRequirejs(){
		requirejs.config({
			baseUrl:"../",
			paths:{
				jquery:"lib/jquery",
				underscore:"lib/underscore",
				backbone:"lib/backbone",
				text:"lib/text",
				public:'js/public',
				helper:'js/public/helper'
			},
			shim:{
				'jquery':{
					exports:'$'
				}
			}
		});
	}
	var base = {
		setRequirejs:setRequirejs
	}
	return base;
});
