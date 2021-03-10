angular.module("contactList").controller("ContatosController",
    function($scope) {
        $scope.total = 1000;
        $scope.incrementa = function() {
            $scope.total ++;
        }
    }
);