angular.module('apiApp').controller('PopUpController2',['$scope', '$uibModalInstance', 'Customer_Id', function ($scope, $uibModalInstance, Customer_Id) {
        $scope.Customer_ID = Customer_Id;
        $scope.close = function () {
            $uibModalInstance.dismiss('cancel');
            console.log(Customer_Id);
        };
}]);