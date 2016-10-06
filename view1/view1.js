angular.module('app.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    $http.get('data/exercise.json')
        .then(function (success) {
            $scope.exercises = success.data
        });

    $scope.workout = {}

    $scope.increase = function(index) {
        $scope.exercises[index].count += 1;
    };
    $scope.decrease = function(index) {
        $scope.exercises[index].count -= 1;
    };

    $scope.$watch('exercises', function(newValue, oldValue) {
        $rootScope.newReport = newValue;
    });

    $scope.countWorkout = function () {
        console.log($scope.workout)
    }

    $scope.getReport = function () {

        var arr = [];

        angular.forEach($rootScope.newReport, function(report){

            arr.push(report.name, report.count);

        });

        alert("Check your list on the 'Workout Page'");

    }

}]);
