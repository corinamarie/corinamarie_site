
var angularBootstrapUi = angular.module('angularBootstrapUi', ['ui.bootstrap']);

//primary controller functionality
corinApp.controller('PrimaryController', ['$scope', function($scope){
    console.log("primary controller up");
}]);

//secondary controller functionality
corinApp.controller('SecondaryController', ['$scope', function($scope){
    console.log("secondary controller up");
}]);

//art.html/accordion controller with angular bootstrap ui
corinApp.controller('AccordionDemoCtrl', ['$scope', function($scope) {
    console.log("accordion controller up");
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        },
        {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
}]);