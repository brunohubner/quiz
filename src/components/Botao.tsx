import Link from "next/link"
import { MouseEvent } from "react"
import styles from "../styles/Botao.module.css"

interface IProps {
    texto: string
    href?: string
    onClick?: (event: MouseEvent) => void
}

export default function Botao({ texto, href, onClick }: IProps) {
    function renderizarBotao() {
        return (
            <button className={styles.botao} onClick={onClick}>
                {texto}
            </button>
        )
    }

    return href ? (
        <Link href={href} passHref>
            {renderizarBotao()}
        </Link>
    ) : (
        renderizarBotao()
    )
}
