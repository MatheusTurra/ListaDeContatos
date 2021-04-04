describe("ContatoController", () => {
    it("Deve criar um Contato vazio quando nenhum parâmetro de rota for passado", () => {
        expect($scope.contato._id).toBeUndefined();
    });
});