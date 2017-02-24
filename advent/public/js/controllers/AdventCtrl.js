// public/js/controllers/AdventCtrl.js
angular.module('AdventCtrl', []).controller('AdventController', function ($scope, $timeout, $GamePlayService) {

    var vm = $scope;

    $scope.tagline = 'A flash from the past!';

    vm.loadGameMap();

    vm.responseHistory = "You are at the beginning";
    vm.commandHistory = '';
    vm.cmd = 'Enter Command';
    
    vm.doCmd = function () {
       // debugger;
        vm.commandHistory += "\n" + vm.cmd;
        $timeout(function() {
            var scroller = document.getElementById("commandHistory");
            scroller.scrollTop = scroller.scrollHeight;
            }, 0, false);
        vm.cmd = '';

        //Get command results
        vm.responseHistory = "We are in a tunnel, all twisted tunnels" + "\n" + vm.responseHistory;
    };

    vm.loadGameMap= function(){
        debugger;
        var map = $gamePlayService(get());
    };

});