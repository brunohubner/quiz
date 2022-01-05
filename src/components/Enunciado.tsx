import styles from "../styles/Enunciado.module.css"

interface IProps {
    texto: string
}

export default function Enunciado({ texto }: IProps) {
    return (
        <div className={styles.enunciado}>
            <span className={styles.texto}>{texto}</span>
        </div>
    )
}
