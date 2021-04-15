describe("Cadastro de contatos", function() {

    beforeEach(function(){
        browser.get("http://localhost:3000/#/contato");
    });

    it("Deve cadastrar um contato", () => {
        const aleatorio = Math.floor((Math.random() *  100000) + 1);
        const nome = "teste" + aleatorio;
        const email = "teste@email" + aleatorio;
        element(by.model("contato.nome")).sendKeys(nome);
        element(by.model("contato.email")).sendKeys(email);
        element(by.css('option[value="0"]')).click();
        element(by.css('.btn-primay')).click();
        expect(element(by.binding("mensagem.texto"))
            .getText())
            .toContain("sucesso");
    });
});