import React from "react"
import styles from "../styles/ExternalLink.module.css"

interface Props {
    children?: React.ReactNode
    href: string
}

export default function ExternalLink(props: Props) {
    return (
        <a className={styles.linkContainer} href={props.href}>
            {props.children}
        </a>
    )
}
