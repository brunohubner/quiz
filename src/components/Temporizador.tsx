import { CountdownCircleTimer } from "react-countdown-circle-timer"
import styles from "../styles/Temporizador.module.css"

interface IProps {
    key: string
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador({ key, duracao, tempoEsgotado }: IProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                key={key}
                isPlaying
                duration={duracao}
                size={120}
                onComplete={tempoEsgotado}
                colors={[
                    ["#bce596", 0.33],
                    ["#f7b801", 0.33],
                    ["#ed827a", 0.33]
                ]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}
