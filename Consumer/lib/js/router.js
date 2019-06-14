angular.module('apiApp').config(function ($stateProvider){
    $stateProvider.state("home", {
        url : '/',
        templateUrl : 'index.html',
        controller : 'CustomerController'
    }).state("CustomersList", {
        url : '/Customer-List',
        views : {
            'subview' : {
                templateUrl : "CustomersList.html",
                controller : 'CustomerController'
            }
        }
    }).state("NewCustomer", {
        url : '/New-Customer',
        views : {
            'subview' : {
                templateUrl : "NewCustomer.html",
            }
        }
    }).state("EditCustomer", {
        url : '/New-Customer/{id}',
        views : {
            'subview' : {
                templateUrl : "NewCustomer.html",
                controller : 'CustomerController'
            }
        }
    });
});