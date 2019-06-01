var App = angular.module("myApp", []);

        App.controller("CustomersCtrl", function($scope, $http){
            GetAll();
            function GetAll(){
                $http.get('http://localhost:51840/api/Customers').then(function (response){
                    $scope.Customer = response.data;
                    alert(response.data);
                },
                function(){alert("Failed")}
                )
            }
        })