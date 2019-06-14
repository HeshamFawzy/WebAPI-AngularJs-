angular.module('apiApp').controller('ReloadController', function($scope){
    $scope.Reload = function(type){
        if(type == 'Customers'){
            $scope.GetCustomers();
        } else if (type == 'PhoneCalls'){
            $scope.GetPhoneCallsById();
        }
    }
})