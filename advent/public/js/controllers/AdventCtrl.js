// public/js/controllers/AdventCtrl.js
angular.module('AdventCtrl', []).controller('AdventController', function ($scope) {

    var vm = $scope;

    $scope.tagline = 'A flash from the past!';

    vm.responseHistory = "You are at the beginning";
    vm.cmd = 'Enter Command';
    
    vm.doCmd = function () {
        debugger;
        vm.responseHistory += "\n" + vm.cmd;
        vm.cmd = '';
    };
});