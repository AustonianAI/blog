import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Austin Johnson";
export const siteTitle = "Austin Johnson | ATX Software Engineer";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Austin Johnson | Software Engineer in Austin, TX"
          key="desc"
        />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/1554902209854410756/ysM-il1L_400x400.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AustinJohnsonTX" />
        <meta name="twitter:creator" content="@AustinJohnsonTX" />
        <meta name="twitter:title" content={siteTitle} />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1552749412-091909ed9f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <meta name="twitter:image:alt" content="Austin Johnson is handsome" />
        <meta
          name="twitter:description"
          content="Learn about who I am and how I can help you.  Read some of my detailed thoughts on investing, travel, and business."
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile_austin.jpg"
              className={utilStyles.borderCircle}
              height={250}
              width={250}
              alt={name}
            />

            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <div className={utilStyles.socialIcon}>
              <a href="https://twitter.com/AustinJohnsonTX">
                <Image src="/images/twitter.svg" height={30} width={30} />
              </a>

              <a href="https://github.com/AustinJohnsonTX">
                <Image src="/images/github.svg" height={30} width={30} />
              </a>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile_austin.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
