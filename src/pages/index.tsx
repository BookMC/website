import React from "react"
import Head from "next/head"
import Image from "next/image"
import useSWR from "swr"
import Card from "../components/Card"
import ExternalLink from "../components/ExternalLink"
import styles from "../styles/Home.module.css"
import { InstallerVersions } from "../lib/InstallerVersions.interface"
import { GetStaticPropsContext } from "next"

interface InitialProps {
    versions?: InstallerVersions | undefined
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

function Main(props: InitialProps) {
    const { data, error } = useSWR<InstallerVersions | null>(
        "https://metadata.bookmc.org/v1/install/versions",
        { initialData: props.versions }
    )

    return (
        <main className={styles.main}>
            <div className={styles.mainContent}>
                <div>
                    <h4 className="subtitle">What is Book?</h4>
                    <p className="text">
                        Book is a lightweight mod loader for Minecraft. It aims
                        to support most versions of Minecraft, from your
                        favourite legacy versions, to the latest versions of the
                        game. Book is the only mod loader that you need!
                    </p>
                </div>

                <div>
                    <h4 className="subtitle">Why should you choose Book?</h4>
                    <p className="text">
                        Book has been designed from the ground-up to be modular,
                        fast, and lightweight. Providing you with the best
                        user-experience possible.
                    </p>
                </div>

                <div>
                    <h4 className="subtitle">Install Book</h4>
                    <Card>
                        <p className="small-text">Installing is easy!</p>
                        <p className="small-text mb-4">
                            Just download the installer below and run it.
                        </p>

                        {error ? (
                            <p className="text-sm font-bold text-red-500">
                                Failed to fetch installer versions, please try
                                again later.
                            </p>
                        ) : (
                            <ExternalLink
                                href={data && data.latest.url}
                                disabled={!data || !data.success}
                            >
                                Download Installer
                                {data &&
                                    data.success &&
                                    ` v${data.latest.version}`}
                            </ExternalLink>
                        )}
                    </Card>
                </div>
            </div>
        </main>
    )
}

export default function Home(props: InitialProps) {
    return (
        <div className={styles.pageContainer}>
            <Head>
                <title>BookMC</title>
            </Head>

            <Header />
            <Main versions={props.versions} />
        </div>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        const res = await fetch(
            `https://metadata.bookmc.org/v1/install/versions`
        )
        const data = await res.json()

        if (!res.ok || !data) {
            return {
                notFound: true
            }
        }

        return {
            props: { versions: data },
            revalidate: 300
        }
    } catch {
        return { props: { versions: null } }
    }
}
