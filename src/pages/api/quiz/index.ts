import type { NextApiRequest, NextApiResponse } from "next"
import questoes from "../../../utils/criarQuestoes"
import embaralhar from "../../../utils/embaralhar"

interface IQuestionsIdsData {
    data: number[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IQuestionsIdsData>
) {
    const ids = embaralhar(questoes.map(questao => questao.getId()))
    res.send({ data: ids })
}
