

angular.module('vehicleApp',['ui.router','ngResource','vehicleApp.controllers','vehicleApp.services']);

angular.module('vehicleApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('vehicles',{
        url:'/vehicles',
        templateUrl:'partials/vehicles.html',
        controller:'VehicleListController'
    }).state('viewVehicle',{
       url:'/vehicles/:id/view',
       templateUrl:'partials/vehicle-view.html',
       controller:'VehicleViewController'
    }).state('newVehicle',{
        url:'/vehicles/new',
        templateUrl:'partials/vehicle-add.html',
        controller:'VehicleCreateController'
    }).state('editVehicle',{
        url:'/vehicles/:id/edit',
        templateUrl:'partials/vehicle-edit.html',
        controller:'VehicleEditController'
    });
}).run(function($state){
   $state.go('vehicles');
});