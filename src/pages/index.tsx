import Head from "next/head"
import Questionario from "../components/Questionario"
import useQuiz from "../hooks/useQuiz"
import styles from "../styles/Home.module.css"

export default function Home() {
    const { questao, idProximaPergunta, irPraProximoPasso, questaoRespondida } =
        useQuiz()

    return (
        <>
            <Head>
                <title>Bruno Hubner - Quiz</title>
                <meta name="description" content="Quiz" />
            </Head>
            <div className={styles.home}>
                {questao ? (
                    <Questionario
                        questao={questao}
                        tempoParaResposta={15}
                        irPraProximoPasso={irPraProximoPasso}
                        questaoRespondida={questaoRespondida}
                        ultima={idProximaPergunta() === undefined}
                    ></Questionario>
                ) : (
                    false
                )}
            </div>
        </>
    )
}
