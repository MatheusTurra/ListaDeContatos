angular.module("contactList", ["ngRoute"])
    .config(($routeProvider => {
        $routeProvider.when("/contatos", {
            templateUrl: "../partials//contatos.js",
        });
    }));
