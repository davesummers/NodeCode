// public/js/controllers/AdventCtrl.js
angular.module('AdventCtrl', []).controller('AdventController', function ($scope) {

    var vm = this;

    $scope.tagline = 'Nothing beats a pocket protector!';

    vm.responseHistory = "You are at the beginning";
    vm.cmd;
    debugger;

    function doCmd() {
        debugger;
        vm.responseHistory += "\n" + cmd;
    }
});