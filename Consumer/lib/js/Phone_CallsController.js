angular.module('apiApp').controller('Phone_CallsController', function($scope, $http, $resource, $stateParams, toastr){
    
    var PhoneCallsService = $resource("http://localhost:51840/Task/Phone_Calls", {},{
        getById : {method : "GET", isArray: true, params : {id : '@id'}},
        save : {method : "POST"},
    });

    $scope.GetPhoneCallsById = function(){
        if($stateParams.id != undefined){
            $scope.PhoneCalls = PhoneCallsService.getById({id : $stateParams.id}, function(response){
                if(response.$promise.$$state.status == 0){
                    toastr.warning("Warning");
                } else if(response.$promise.$$state.status == 1) {
                    toastr.success("Get Data Successfully");
                } else {
                    toastr.error("Error While Getting Data");
                }
            });
        }
    }

    $scope.SavePhoneCall = function (Phone){
        PhoneCallsService.save(Phone, function(response){
            if(response.$promise.$$state.status == 0){
                toastr.warning("Warning");
            } else if(response.$promise.$$state.status == 1) {
                toastr.success("Get Added Successfully");
            } else {
                toastr.error("Error While Adding Data");
            } 
        });
    }
});