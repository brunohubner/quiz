import QuestaoModel from "../models/QuestaoModel"
import styles from "../styles/Questionario.module.css"
import Botao from "./Botao"
import Questao from "./Questao"

interface IProps {
    questao: QuestaoModel
    ultima: boolean
    tempoParaResposta?: number
    questaoRespondida: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}

export default function Questionario({
    ultima,
    questao,
    tempoParaResposta,
    irPraProximoPasso,
    questaoRespondida
}: IProps) {
    function respostaFornecida(indice: number) {
        if (questao.naoRespondida()) {
            questaoRespondida(questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {questao ? (
                <Questao
                    tempoParaResposta={tempoParaResposta}
                    questao={questao}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={irPraProximoPasso}
                ></Questao>
            ) : (
                false
            )}
            <Botao
                onClick={irPraProximoPasso}
                texto={ultima ? "Finalizar" : "Próxima"}
            ></Botao>
        </div>
    )
}
