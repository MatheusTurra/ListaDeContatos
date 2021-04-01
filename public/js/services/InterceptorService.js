angular.module("contactList")
    .factory("Interceptor",
    function($location, $q) {
        const interceptor = {
            responseError: function(resposta) {
                if (resposta.status == 401) {
                    $location.path("/auth");
                }
                return $q.reject(resposta);
            }
        }
        
        return interceptor;
    });