import React from "react"
import styles from "../styles/Card.module.css"

interface Props {
    children: React.ReactNode
}

export default function Card(props: Props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>{props.children}</div>
        </div>
    )
}
