angular.module('apiApp').controller('PopUpController',['$scope','$uibModal', function($scope, $uibModal){

    $scope.open = function(Id) {
        var modalInstance = $uibModal.open({
            templateUrl: 'popup.html',
            controller: 'PopUpController2',
            resolve: {
                Customer_Id: function () {
                    return Id;
                }
            }
        }).result.catch(function(res) {
            console.log(res);
            if (!(res === 'cancel' || res === 'escape key press')) {
              throw res;
            }
        });
    }
}]);
