'use strict';

function SundialsListCtrl($scope, $http) {
    $http.get('https://dl.dropboxusercontent.com/u/103327358/sundials.json').success(function(data) {
        $scope.sundials = data;
    });
}
