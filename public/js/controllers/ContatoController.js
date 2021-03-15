angular.module("contactList").controller("ContatoController", 
    function($scope, $routeParams, $resource) {
        const Contato = $resource("/contatos/:id");

        if ($routeParams.contatoId) {
            Contato.get({id: $routeParams.contatoId},
                function(contato) {
                    $scope.contato = contato;
                },
                function(erro) {
                    $scope.mensgem = {
                        texto: "Não foi possível obter o contato"
                    }
    
                    console.log(erro);
                }    
            );
        } else {
            $scope.contato = {};
        }
    }
);