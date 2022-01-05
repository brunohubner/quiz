import embaralhar from "../utils/embaralhar"
import RespostaModel from "./RespostaModel"

export default class QuestaoModel {
    constructor(
        private id: number,
        private enunciado: string,
        private respostas: RespostaModel[],
        private acertou = false,
        private respondida = false
    ) {}

    getId() {
        return this.id
    }

    getEnunciado() {
        return this.enunciado
    }

    getRespostas() {
        return this.respostas
    }

    getAcertou() {
        return this.acertou
    }

    naoRespondida() {
        return !this.respondida
    }

    embaralharRespostas(): QuestaoModel {
        const respostasEmbaralhadas = embaralhar(this.respostas)
        return new QuestaoModel(
            this.id,
            this.enunciado,
            respostasEmbaralhadas,
            this.acertou
        )
    }

    responderCom(indice: number): QuestaoModel {
        const acertou = this.respostas[indice]?.getCerta()
        const respostas = this.respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.getCerta()
            return deveRevelar ? resposta.revelar() : resposta
        })
        return new QuestaoModel(
            this.id,
            this.enunciado,
            respostas,
            acertou,
            true
        )
    }
}
