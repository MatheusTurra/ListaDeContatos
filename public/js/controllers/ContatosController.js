angular.module("contactList").controller("ContatosController",
    function($scope, $resource) {
        
        $scope.contatos = [];
        $scope.filtro = "";

        const Contato = $resource("/contatos/:id");

        function buscaContatos() {
            Contato.query(
                function(contatos) {
                    $scope.contatos = contatos;
                },
                function(erro) {
                    console.log("não foi possivel ober a lista de contatos");
                    console.log(erro)
                }
            );
        }

        buscaContatos();
    }
);