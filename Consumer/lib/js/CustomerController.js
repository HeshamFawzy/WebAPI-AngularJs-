angular.module('apiApp').controller('CustomerController', function($scope, $http, $resource, $stateParams, toastr){
    
    var CustomersService = $resource("http://localhost:51840/Task/Customers", {},{
        get : {method : "GET"},
        getById : {method : "GET", params : {id : '@id'}},
        update : {method : "PUT"},
        save : {method : "POST"},
        remove : {method : "DELETE"},
    });

    $scope.GetCustomers = function (data){
        $scope.Customers = CustomersService.query();
    }

    $scope.GetCustomerById = function(){
        if($stateParams.id != undefined){
            $scope.Customer = CustomersService.getById({id : $stateParams.id});
        }
    }

    $scope.UpdateCustomer = function (Customer){
        CustomersService.update({id : $stateParams.id},Customer);
    }

    $scope.SaveCustomer = function (Customer){
        CustomersService.save(Customer);
    }

    $scope.DeleteCustomer = function(id){
        CustomersService.remove(id);
    }

});