angular.module('app.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.exercises = [
        {
            icon: 'img/pushup.jpg',
            name: 'Pushups',
            count: 20,
            increase: 0,
            decrease: 0
        },
        {
            icon: 'img/squat.jpg',
            name: 'Squats',
            count: 15,
            increase: 0,
            decrease: 0
        },
        {
            icon: 'img/pullup.jpg',
            name: 'Pullups',
            count: 10,
            increase: 0,
            decrease: 0
        },
        {
            icon: 'img/row.jpg',
            name: 'Rows',
            count: 10,
            increase: 0,
            decrease: 0
        },
        {
            icon: 'img/lunge.jpg',
            name: 'Lunges',
            count: 10,
            increase: 0,
            decrease: 0
        },
        {
            icon: 'img/stepup.jpg',
            name: 'Step Ups',
            count: 10,
            increase: 0,
            decrease: 0
        },
        {
            icon: 'img/situp.jpg',
            name: 'Sit Ups',
            count: 15,
            increase: 0,
            decrease: 0
        }
    ];

    $scope.increase = function(index) {
        $scope.exercises[index].count += 1;
    };
    $scope.decrease = function(index) {
        $scope.exercises[index].count -= 1;
    };

    $scope.$watch('exercises', function(newValue, oldValue) {
        $rootScope.newReport = newValue;
    });

    $scope.getReport = function () {

        var arr = [];

        angular.forEach($rootScope.newReport, function(report){

            arr.push(report.name, report.count);

        });

        alert("Definetely you did a great workout! Check it in stat page!!!");

    }

}]);
