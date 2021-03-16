angular.module("contactList").factory("Contato", function($resource) {
    return $resource("/contatos/:id");
});