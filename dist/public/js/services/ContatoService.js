angular.module("contactList").factory("Contato", ["$resource", function($resource) {
    return $resource("/contatos/:id");
}]);