/**
 * Created by znarf on 1/13/16.
 */
(function () {
    'use strict';

    angular.module('sbAdminApp')
        .controller('authenticationCtrl', ['$scope', '$window', '$location','user','$uibModal', '$rootScope', authenticationCtrl]);

    function authenticationCtrl($scope, $window, $location, user, $uibModal, logger, $timeout, sessionStorage, $rootScope) {
        $scope.main={
            password:"",
            email:""
        };

        $scope.disableButton = false;

        $scope.login = function(username,password) {

            var userSize,passSize;
            userSize = username.length;
            passSize = password.length;

            $scope.disableButton = true;


        };

        function validateEmail(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        }

    }

})();