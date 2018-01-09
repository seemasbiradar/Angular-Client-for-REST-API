/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('vehicleApp.controllers',[]).controller('VehicleListController',function($scope,$state,popupService,$window,Vehicle){

    $scope.vehicles=Vehicle.query();

    $scope.deleteVehicle=function(vehicle){
        if(popupService.showPopup('Really delete this?')){
            vehicle.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('VehicleViewController',function($scope,$stateParams,Vehicle){

    $scope.vehicle=Vehicle.get({id:$stateParams.id});

}).controller('VehicleCreateController',function($scope,$state,$stateParams,Vehicle){

    $scope.vehicle=new Vehicle();

    $scope.addVehicle=function(){
        $scope.vehicle.$save(function(){
            $state.go('vehicles');
        });
    }

}).controller('VehicleEditController',function($scope,$state,$stateParams,Vehicle){

    $scope.updateVehicle=function(){
        $scope.vehicle.$update(function(){
            $state.go('vehicles');
        });
    };

    $scope.loadVehicle=function(){
        $scope.vehicle=Vehicle.get({id:$stateParams.id});
    };

    $scope.loadVehicle();
});