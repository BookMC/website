import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import useSWR from "swr"
import Card from "../components/Card"
import ExternalLink from "../components/ExternalLink"
import styles from "../styles/Home.module.css"

interface VersionInfo {
    version: string
    url: string
}

function Header() {
    return (
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
                    The lightweight Legacy Minecraft ModLoader, built for fun,
                    with love :)
                </h2>
                <div className={styles.linksContainer}>
                    <ExternalLink href="https://github.com/BookMC">
                        GitHub
                    </ExternalLink>
                </div>
            </div>
        </div>
    )
}

function Main() {
    const { data, error } = useSWR("/api/v1/versions")
    const [latestVersion, setLatestVersion] = useState<VersionInfo | null>(null)

    useEffect(() => {
        if (data) {
            const version = data.latest

            setLatestVersion({
                version: version,
                url: data[version].url
            })
        }
    }, [data])

    return (
        <main className={styles.main}>
            <div className={styles.mainContent}>
                <div>
                    <h4 className="subtitle">What is BookMC?</h4>
                    <p className="text">
                        BookMC is a lightweight mod loader for Minecraft.
                        (insert more text here later)
                    </p>
                </div>

                <div>
                    <h4 className="subtitle">Install BookMC</h4>
                    <Card>
                        <p className="small-text">Installing is easy!</p>
                        <p className="small-text mb-4">
                            Just download the installer below and run it.
                        </p>

                        <ExternalLink
                            href={latestVersion && latestVersion.url}
                            disabled={!latestVersion || error}
                        >
                            Download Installer
                            {latestVersion && ` v${latestVersion.version}`}
                        </ExternalLink>
                    </Card>
                </div>
            </div>
        </main>
    )
}

const Home: NextPage = () => {
    return (
        <div className={styles.pageContainer}>
            <Head>
                <title>BookMC</title>
            </Head>

            <Header />
            <Main />
        </div>
    )
}

export default Home
