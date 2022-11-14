import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";

import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Hi - I'm Austin - a software engineer in Texas.</h2>
        <h3>How I can help you -</h3>
        <p>
          I can help you build software solutions to automate your business.
          This type of automation usually includes -
          <ul>
            <li>
              Using off-the-shelf SaaS tools to meet your more general needs.
            </li>
            <li>
              Designing and coding customized apps where the off-the-shelf tools
              aren't quite enough.
            </li>
            <li>
              Building APIs to ensure that your key systems are securely
              available for your customers.
            </li>
          </ul>
        </p>
        <h3>What I'm looking for -</h3>
        <p>
          I don't generally take on consulting or freelance work, but I'm always
          looking to meet interesting people in the Austin, TX area. Presently,
          I'm particularly interested in -
          <ul>
            <li>
              Early stage startups solving hard problems for everyday people.
            </li>
            <li>
              Podcasters, authors, and media creators working to enhance the
              reach of independent thinking.
            </li>
            <li>
              Volunteer and giving opportunities to be a better steward of my
              time and resources.
            </li>
          </ul>
        </p>
        <p>
          The best way to get in touch with me is{" "}
          <Link href={"https://twitter.com/austin_atx_"}>
            via DM on Twitter
          </Link>{" "}
          - I look forward to hearing from you!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>Some of my detailed thoughts - </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
