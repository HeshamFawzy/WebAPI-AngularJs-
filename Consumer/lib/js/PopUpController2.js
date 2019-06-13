angular.module('apiApp').controller('PopUpController2',['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
        $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);