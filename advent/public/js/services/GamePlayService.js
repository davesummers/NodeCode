// public/js/services/GamePlayService.js
angular.module('GamePlayService', []).factory('Nerd', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/gameplay');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/gameplay', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/gameplay/' + id);
        }
    }       

}]);