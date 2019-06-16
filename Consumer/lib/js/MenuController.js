angular.module('apiApp').controller('MenuController',['$scope','$uibModal', function($scope, $uibModal){

    $scope.open = function(Customer_NameCheck) {
        var modalInstance = $uibModal.open({
            templateUrl: 'menu.html',
        }).result.catch(function(res) {
            if (!(res === 'cancel' || res === 'escape key press')) {
              throw res;
            }
        });
    }
}]);
