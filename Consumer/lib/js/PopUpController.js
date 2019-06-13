angular.module('apiApp').controller('PopUpController',['$scope','$uibModal', function($scope, $uibModal){

    $scope.open = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'popup.html',
            controller: 'PopUpController2',
        }).result.catch(function(res) {
            console.log(res);
            if (!(res === 'cancel' || res === 'escape key press')) {
              throw res;
            }
        });
    }
}]);
