import styles from "../styles/Estatistica.module.css"

interface IProps {
    valor: any
    texto: string
    corFundo?: string
    corFonte?: string
}

export default function Estatistica({
    texto,
    valor,
    corFonte,
    corFundo
}: IProps) {
    return (
        <div className={styles.estatistica}>
            <div
                className={styles.valor}
                style={{
                    backgroundColor: corFundo || "#fdd60f",
                    color: corFonte || "#333"
                }}
            >
                {valor}
            </div>
            <div className={styles.texto}>{texto}</div>
        </div>
    )
}
