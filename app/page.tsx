import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import { Roboto, Nabla, Inter } from 'next/font/google'

const inter = Inter({
    weight: "400",
    subsets: ["latin"]
});
const nabla = Nabla({
    weight: "400",
    subsets: ["latin"]
});
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function Home() {

    return (
        <main className={styles.page} style={{
            marginTop: "70px",
        }}>
            <div className={styles.center}>
                <Image
                    src="/imgs/1517413966915.jpeg"
                    alt="Kuei-Feng Tung"
                    style={{
                        borderRadius: "50%",
                        border: "1px lime solid"
                    }}
                    width={250}
                    height={250}
                    priority
                />
            </div>
            {/* <div className={inter.className}>
                <div style={{
                    marginBottom: "30px"
                }} className={styles.grid}>
                    <div style={{
                        border: "1px solid white"
                    }}>
                        Grid item
                    </div>
                    <div style={{
                        border: "1px solid white"
                    }}>
                        Grid item
                    </div>
                    <div style={{
                        border: "1px solid white"
                    }}>
                        Grid item
                    </div>
                    <div style={{
                        border: "1px solid white"
                    }}>
                        Grid item
                    </div>
                </div>
            </div> */}
        </main>
    );
}
