angular.module('apiApp').controller('PopUpController', function($scope, $uibModal){

        $scope.open = function () {
            var modalInstance = $uibModal.open({
            templateUrl: 'popup.html',
        });
    }
});