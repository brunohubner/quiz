import RespostaModel from "../models/RespostaModel"
import styles from "../styles/Resposta.module.css"

interface IProps {
    resposta: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}

export default function Resposta({
    resposta,
    indice,
    letra,
    corFundoLetra,
    respostaFornecida
}: IProps) {
    const respostaRevelada = resposta.getRevelada()
        ? styles.respostaRevelada
        : ""
    return (
        <div
            className={styles.resposta}
            onClick={() => respostaFornecida(indice)}
        >
            <div className={`${styles.conteudoResposta} ${respostaRevelada}`}>
                <div className={styles.frente}>
                    <div
                        className={styles.letra}
                        style={{ backgroundColor: corFundoLetra }}
                    >
                        {letra}
                    </div>
                    <div className={styles.valor}>{resposta.getValor()}</div>
                </div>
                <div className={styles.verso}>
                    {resposta.getCerta() ? (
                        <div className={styles.certa}>
                            <div>A resposta certa é...</div>
                            <div className={styles.valor}>
                                {resposta.getValor()}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.errada}>
                            <div>A sua resposta está errada : (</div>
                            <div className={styles.valor}>
                                {resposta.getValor()}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
