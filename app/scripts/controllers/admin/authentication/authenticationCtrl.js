/**
 * Created by znarf on 1/13/16.
 */
(function () {
    'use strict';

    angular.module('sbAdminApp')
        .controller('authenticationCtrl', ['$scope', '$window','$state','user', '$rootScope', authenticationCtrl]);

    function authenticationCtrl($scope, $window, $state, user, $rootScope) {
        $scope.main={
            email:"",
            password:""
        };

        $scope.disableButton = false;

        $scope.login = function(email,password) {
            console.log("LOGIN METHOD");
            console.log(email);
            console.log(password);
            if(email == "admin" && password == "admin"){
                $state.go("dashboard.home");
            }else{
                $state.go("login");
            }

        };

        function validateEmail(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        }

    }

})();