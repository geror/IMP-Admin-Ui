/**
 * Created by znarf on 1/13/16.
 */
'user strict'

angular.module('app.authentication')
    .factory('user',['$http','$q','ENV','sessionStorage',function($http,$q,ENV,sessionStorage){

        var user = {
        };

        user.login = function(username,password){
            return $http({
                url: ENV.serverUrl+"loginBO/login",
                method: 'post',
                data: {"userName":username,"password":password}
            });
        };

        user.forgotPass = function(username,email){
            return $http({
                url: ENV+"loginMobile/login",
                method: 'post',
                data: {"userName":username,"email":email}
            });
        };

        user.getProfile = function(){
            var user = sessionStorage.jsonRead("user");
            var userInfo = {
                "token": user.token
            };

            return $http({
                url: ENV.serverUrl+"customerBO/getProfiletByIdUser/id/"+user.idUser,
                method: 'get',
                headers: userInfo
            });
        };

        user.isLoggedIn = function(){
            var tempUser = sessionStorage.read('user');
            //console.log(tempUser);
            return tempUser;
        };

        user.logOut = function(){
            var user = sessionStorage.jsonRead("user");
            /*sessionStorage.remove("user");
             sessionStorage.remove("modules");*/
            sessionStorage.removeAll();
            /*return $http({
             url: ENV+"loginBO/logout",
             method: 'post',
             data: {"idUser": user.idUser}
             });*/
        };

        return user;
    }

    ]);