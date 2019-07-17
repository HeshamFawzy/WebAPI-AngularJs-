angular.module('apiApp').controller('CustomerController', function($scope, $resource, $stateParams, toastr, $timeout){
    
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
        Customer.Last_Modified_In =   new Date();
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
        Customer.Entry_Date =  new Date();
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

    //Setting Menu For Customer
    $scope.Customer_NameCheck = true;
    $scope.Customer_AddressCheck = true;
    $scope.MobileCheck = true;
    $scope.Phone1Check = true;
    $scope.Phone2Check = true;
    $scope.WhatsappCheck = true;
    $scope.EmailCheck = true;
    $scope.Customer_CodeCheck = true;
    $scope.NationalityCheck = true;
    $scope.Resolved_ResidenceCheck = true;
    $scope.DetailsCheck = true;
    $scope.OccupationCheck = true;
    $scope.Introduced_ByCheck = true;
    $scope.Entry_DateCheck = true;
    $scope.Last_UpdateCheck = true;
    $scope.Last_Modified_InCheck = true;
    $scope.SalesmanCheck = true;
    $scope.Client_SourceCheck = true;
    $scope.Customer_RatingCheck = true;

    //Setting Menu For PhoneCalls
    $scope.PhoneDetailsCheck = true;
    $scope.Call_AddressCheck = true;
    $scope.DateCheck = true;
    $scope.ProjectCheck = true;
    $scope.EmployeeCheck = true;
    $scope.Was_DoneCheck = true;
    $scope.Call_TypeCheck = true;
    $scope.Was_IncomeCheck = true;
    $scope.PhoneIntroduced_ByCheck = true;
    $scope.PhoneEntry_DateCheck = true;
    $scope.PhoneLast_UpdateCheck = true;
    $scope.PhoneLast_Modified_InCheck = true;
});