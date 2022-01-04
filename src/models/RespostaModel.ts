export default class RespostaModel {
    constructor(
        private valor: string,
        private certa: boolean,
        private revelada = false
    ) {}

    static errada(resposta: string) {
        return new RespostaModel(resposta, false)
    }

    static certa(resposta: string) {
        return new RespostaModel(resposta, true)
    }

    getValor() {
        return this.valor
    }

    getCerta() {
        return this.certa
    }

    getRevelada() {
        return this.revelada
    }

    revelar(): RespostaModel {
        return new RespostaModel(this.valor, this.certa, true)
    }
}
