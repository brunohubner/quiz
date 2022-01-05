import type { NextApiRequest, NextApiResponse } from "next"
import QuestaoModel from "../../../models/QuestaoModel"
import questoes from "../../../utils/criarQuestoes"

interface IQuestionData {
    data: QuestaoModel
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IQuestionData>
) {
    const id = +req.query.id
    const questao = questoes
        .filter(q => q.getId() === id)[0]
        .embaralharRespostas()

    if (!questao) {
        res.status(204).end()
        return
    }

    res.send({ data: questao })
}
