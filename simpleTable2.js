'use strict';

function SundialsListCtrl($scope, $http) {
    $http.get('https://raw.github.com/topoi/Daten/master/sundials.json').success(function(data) {
        $scope.sundials = data;
    });
}
