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
        $scope.Customer = CustomersService.getById({id : $stateParams.CustomerId});
    }

    $scope.UpdateCustomer = function (Customer){
        CustomersService.update(Customer);
    }

    $scope.SaveCustomer = function (data){
        CustomersService.save(data);
    }

    $scope.DeleteCustomer = function(CustomerId){
        CustomersService.remove(CustomerId);
    }
});