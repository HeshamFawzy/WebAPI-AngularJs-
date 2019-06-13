angular.module('apiApp').controller('CustomerController', function($scope, $resource, $stateParams, toastr){
    
    var CustomersService = $resource("http://localhost:51840/Task/Customers", {},{
        get : {method : "GET"},
        getById : {method : "GET", params : {id : '@id'}},
        update : {method : "PUT"},
        save : {method : "POST"},
        remove : {method : "DELETE"},
    });

    $scope.GetCustomers = function (data){
        $scope.Customers = CustomersService.query(function(response) {
            if(response.$promise.$$state.status == 0){
                toastr.warning("Warning");
            } else if(response.$promise.$$state.status == 1) {
                toastr.success("Get Data Successfully");
            } else {
                toastr.error("Error While Getting Data");
            } 
        });
    }

    $scope.GetCustomerById = function(){
        if($stateParams.id != undefined){
            $scope.Customer = CustomersService.getById({id : $stateParams.id}, function(response){
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

    $scope.UpdateCustomer = function (Customer){
        CustomersService.update({id : $stateParams.id},Customer, function(response){
            if(response.$promise.$$state.status == 0){
                toastr.warning("Warning");
            } else if(response.$promise.$$state.status == 1) {
                toastr.success("Get Updated Successfully");
            } else {
                toastr.error("Error While Updating Data");
            } 
        });
    }

    $scope.SaveCustomer = function (Customer){
        CustomersService.save(Customer, function(response){
            if(response.$promise.$$state.status == 0){
                toastr.warning("Warning");
            } else if(response.$promise.$$state.status == 1) {
                toastr.success("Get Added Successfully");
            } else {
                toastr.error("Error While Adding Data");
            } 
        });
    }

    $scope.DeleteCustomer = function(id){
        CustomersService.remove(id, function(response){
            if(response.$promise.$$state.status == 0){
                toastr.warning("Warning");
            } else if(response.$promise.$$state.status == 1) {
                toastr.success("Get Deleted Successfully");
            } else {
                toastr.error("Error While Deleting Data");
            } 
        });
    }

});