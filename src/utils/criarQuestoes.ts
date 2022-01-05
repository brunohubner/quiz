import QuestaoModel from "../models/QuestaoModel"
import bancoDeQuestoes from "../db/bancoDeQuestoes.json"
import RespostaModel from "../models/RespostaModel"

const questoes: QuestaoModel[] = bancoDeQuestoes.map(questao => {
    return new QuestaoModel(questao.id, questao.enunciado, [
        RespostaModel.errada(questao.errada1),
        RespostaModel.errada(questao.errada2),
        RespostaModel.errada(questao.errada3),
        RespostaModel.certa(questao.certa)
    ])
})

export default questoes
