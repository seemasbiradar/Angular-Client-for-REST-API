/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('vehicleApp.services',[]).factory('Vehicle',function($resource){
    return $resource('http://192.168.0.4:8080/RESTfulCRUD/rest/vehicles:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});