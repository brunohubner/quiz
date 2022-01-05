import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import QuestaoModel from "../models/QuestaoModel"
import RespostaModel from "../models/RespostaModel"
import questoes from "../utils/criarQuestoes"

const questaoMock = new QuestaoModel(1, "", [
    RespostaModel.errada(""),
    RespostaModel.errada(""),
    RespostaModel.errada(""),
    RespostaModel.certa("")
])

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
const URL = API_URL + "/api"

interface IRespostaResponse {
    valor: string
    certa: boolean
    revelada: false
}

interface IQuestaoResponse {
    id: number
    enunciado: string
    respostas: IRespostaResponse[]
    acertou: boolean
    respondida: boolean
}

interface IDataResponse {
    data: IQuestaoResponse
}

export default function useQuiz() {
    const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
    const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)
    const [acertos, setAcertos] = useState<number>(0)

    const router = useRouter()

    async function getIdsDasQuestoes() {
        const resp = await fetch(`${URL}/quiz`)
        const { data } = await resp.json()
        setIdsDasQuestoes(data)
    }

    async function getQuestao(id: number) {
        const resp = await fetch(`${URL}/questions/${id}`)
        const { data } = (await resp.json()) as IDataResponse

        setQuestao(
            new QuestaoModel(
                data.id,
                data.enunciado,
                data.respostas.map(
                    resposta =>
                        new RespostaModel(
                            resposta.valor,
                            resposta.certa,
                            resposta.revelada
                        )
                ),
                data.acertou,
                data.respondida
            )
        )
    }

    function questaoRespondida(questaoRecebida: QuestaoModel) {
        setQuestao(questaoRecebida)
        setAcertos(acertos + (questaoRecebida.getAcertou() ? 1 : 0))
    }

    function idProximaPergunta(): number | undefined {
        const proximoIndice = idsDasQuestoes.indexOf(questao.getId()) + 1
        return idsDasQuestoes[proximoIndice]
    }

    function irPraProximoPasso() {
        const proximoId = idProximaPergunta()
        proximoId ? irPraProximaQuestao(proximoId) : finalizar()
    }

    function finalizar() {
        router.push({
            pathname: "/resultado",
            query: {
                total: questoes.length,
                acertos
            }
        })
    }

    function irPraProximaQuestao(proximoId: number) {
        getQuestao(proximoId)
    }

    useEffect(() => {
        ;(async () => {
            idsDasQuestoes.length > 0 && getQuestao(idsDasQuestoes[0])
        })()
    }, [idsDasQuestoes])

    useEffect(() => {
        ;(async () => {
            getIdsDasQuestoes()
        })()
    }, [])

    return {
        questao,
        irPraProximoPasso,
        questaoRespondida,
        idProximaPergunta
    }
}
