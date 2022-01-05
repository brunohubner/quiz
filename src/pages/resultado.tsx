import Head from "next/head"
import { useRouter } from "next/router"
import Botao from "../components/Botao"
import Estatistica from "../components/Estatistica"
import styles from "../styles/Resultado.module.css"

export default function Resultado() {
    const router = useRouter()
    const total = router.query.total || 0
    const acertos = router.query.acertos || 0
    const percentual = Math.round((+acertos / +total) * 100)

    return (
        <>
            <Head>
                <title>Bruno Hubner - Quiz</title>
                <meta name="description" content="Quiz" />
            </Head>
            <div className={styles.resultado}>
                <h1>Resultado Final</h1>
                <div className={styles.estatisticas}>
                    <Estatistica texto="Perguntas" valor={total}></Estatistica>
                    <Estatistica
                        texto="Acertos"
                        valor={acertos}
                        corFundo="#9cd2a4"
                    ></Estatistica>
                    <Estatistica
                        texto="Percentual"
                        valor={`${percentual}%`}
                        corFundo="#de6a33"
                    ></Estatistica>
                </div>
                <Botao texto="Tentar novamente" href="/"></Botao>
            </div>
        </>
    )
}
