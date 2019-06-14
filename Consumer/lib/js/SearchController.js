angular.module('apiApp').controller('SearchController', function($scope){
    var Count = 0;
    $scope.Search = function(){
        Count++;
        var Search = document.getElementsByClassName("Search");
        if(Count%2==1){
            for(i=0 ; i<Search.length ; i++){
                Search[i].style.display = "inline";
            }
        } else {
            for(i=0 ; i<Search.length ; i++){
                Search[i].style.display = "none";
            }
        }
    }
})