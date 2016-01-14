/**
 * Created by znarf on 1/13/16.
 */
'user strict'

angular.module('sbAdminApp')
    .factory('user',['$http','$q',function($http,$q){

        var user = {
        };

        user.login = function(username,password){
            /*return $http({
                url: ENV.serverUrl+"loginBO/login",
                method: 'post',
                data: {"userName":username,"password":password}
            });*/
        };

        return user;
    }

    ]);