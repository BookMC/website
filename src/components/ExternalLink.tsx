import React from "react"
import styles from "../styles/ExternalLink.module.css"

interface Props {
    children?: React.ReactNode
    href?: string | null
    disabled?: boolean
}

export default function ExternalLink(props: Props) {
    return (
        <a
            className={`${styles.linkContainer} ${
                props.disabled ? styles.disabled : ""
            }`}
            href={props.href ?? ""}
        >
            {props.children}
        </a>
    )
}
