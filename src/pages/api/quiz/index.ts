import type { NextApiRequest, NextApiResponse } from "next"
import QuestaoModel from "../../../models/QuestaoModel"
import questoes from "../../../utils/criarQuestoes"
import embaralhar from "../../../utils/embaralhar"

type Data = {
    ids?: number[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const ids = embaralhar(questoes.map(questao => questao.getId()))
    res.send({ ids })
}
