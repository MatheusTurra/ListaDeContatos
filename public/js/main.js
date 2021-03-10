angular.module("contactList", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider.when("/contatos", {
        templateUrl: "partials/contatos.html",
        controller: "ContatosController"
    });
  });