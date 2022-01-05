import QuestaoModel from "../models/QuestaoModel"
import styles from "../styles/Questao.module.css"
import Enunciado from "./Enunciado"
import Resposta from "./Resposta"
import Temporizador from "./Temporizador"

interface IProps {
    questao: QuestaoModel
    tempoParaResposta?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

const letras = [
    { valor: "A", cor: "#f2c866" },
    { valor: "B", cor: "#f266ba" },
    { valor: "C", cor: "#85d4f2" },
    { valor: "D", cor: "#bce596" }
]

export default function Questao({
    questao,
    tempoParaResposta,
    respostaFornecida,
    tempoEsgotado
}: IProps) {
    function renderizarResposta() {
        return questao
            .getRespostas()
            .map((resposta, i) => (
                <Resposta
                    key={`${questao.getId()}_${i}`}
                    resposta={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    respostaFornecida={respostaFornecida}
                ></Resposta>
            ))
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.getEnunciado()}></Enunciado>
            <Temporizador
                key={`${questao.getId()}`}
                duracao={tempoParaResposta || 10}
                tempoEsgotado={tempoEsgotado}
            ></Temporizador>
            {renderizarResposta()}
        </div>
    )
}
