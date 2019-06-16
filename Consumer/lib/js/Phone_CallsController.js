angular.module('apiApp').controller('Phone_CallsController', function($scope, $resource, $stateParams, toastr){
    
    var PhoneCallsService = $resource("http://localhost:51840/Task/Phone_Calls", {},{
        getById : {method : "GET", isArray: true, params : {id : '@id'}},
        save : {method : "POST"},
        remove : {method : "DELETE", isArray: true }
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

    $scope.SavePhoneCall = function (Customer_ID,Phone){
        Phone.Customer_ID = Customer_ID;
        Phone.Entry_Date =   new Date();
        if(Phone.Customer_ID != null){
            PhoneCallsService.save(Phone, function(response){
                if(response.$promise.$$state.status == 0){
                    toastr.warning("Warning");
                } else if(response.$promise.$$state.status == 1) {
                    toastr.success("Get Added Successfully");
                } else {
                    toastr.error("Error While Adding Data");
                } 
            })
        } else {
            toastr.error("Error While Adding Data");
        }
    }

    $scope.DeletePhoneCalls = function(id){
        PhoneCallsService.remove(id, function(response){
            if(response.$promise.$$state.status == 0){
                toastr.warning("Warning");
            } else if(response.$promise.$$state.status == 1) {
                toastr.success("Get Deleted Successfully");
            } else {
                toastr.error("Error While Deleting Data");
            } 
        });
    }

    $scope.GetPhoneCallsById(); 
});