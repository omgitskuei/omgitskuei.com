import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>

        <Link href="/about" className={styles.card}>
          <h2>
            Social <span>-&gt;</span>
          </h2>
          <p>
            Connect on social media, messaging apps, etc
          </p>
        </Link>

        <Link href="/about" className={styles.card}>
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>
            Find my values, story, and mission here
          </p>
        </Link>

        <Link href="/contact" className={styles.card}>
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>
            Reach out to discuss collaborations, contracting, job opportunities
          </p>
        </Link>

        <Link href="/portfolio" className={styles.card}>
          <h2>
            Portfolio <span>-&gt;</span>
          </h2>
          <p>
            Puruse code I've written using different languages
          </p>
        </Link>

        <Link href="/resume" className={styles.card}>
          <h2>
            Resume <span>-&gt;</span>
          </h2>
          <p>
            Explore my skills, experience, and employment record
          </p>
        </Link>
      </div>
    </main>
  );
}
