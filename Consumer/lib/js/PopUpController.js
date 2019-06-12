angular.module('apiApp').controller('PopUpController', function($scope, $uibModal){

        $scope.open = function () {
            console.log('opening pop up');
            var modalInstance = $uibModal.open({
            templateUrl: 'popup.html',
        });
    }
});