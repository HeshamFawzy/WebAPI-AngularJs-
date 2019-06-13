angular.module('apiApp').controller('PrintController', function($scope){
    
    $scope.Print = function(divName) {
        var printContents = document.getElementById('exportable').innerHTML;
        var popupWin = window.open('', '_blank', 'width=300,height=300');
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" /><link rel="stylesheet" type="text/css" href="/lib/Css/main.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
        popupWin.document.close();
    } 
});