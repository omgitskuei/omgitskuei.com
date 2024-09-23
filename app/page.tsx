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

export default function Page() {

    return (
        <>
            Home
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
        </>
    );
}
