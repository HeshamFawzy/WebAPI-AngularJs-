angular.module('apiApp').controller('ExportController', function($scope){ 
    $scope.Export = function(){
            var blob = new Blob([document.getElementById('exportable').innerHTML], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
            });
            saveAs(blob, "Report.xls");
    }
})
