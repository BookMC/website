import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>BookMC</title>
            </Head>

            <p>Hello World</p>
        </div>
    )
}

export default Home
