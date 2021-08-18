import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import ExternalLink from "../components/ExternalLink"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>BookMC</title>
            </Head>

            <div className={styles.header}>
                <div>
                    <Image
                        src="/logo.png"
                        alt="BookMC"
                        width="65px"
                        height="65px"
                    />
                </div>
                <div>
                    <h1 className="title">BookMC</h1>
                    <h2 className="subtitle">
                        The lightweight Legacy Minecraft ModLoader, built for
                        fun, with love :)
                    </h2>
                    <div className={styles.linksContainer}>
                        <ExternalLink href="https://github.com/BookMC">
                            GitHub
                        </ExternalLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
