import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

// by returning allPostsDatda inside the props object in this function, the blog posts will be passed to the Home component as a prop so can gain access to it
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Commodo dolore irure tempor laborum irure aliqua qui magna. Ut in commodo esse ea. Eu incididunt proident esse duis incididunt laborum voluptate in aliquip incididunt commodo velit nisi. Adipisicing mollit exercitation laboris fugiat nisi consequat in pariatur do irure quis.</p>
        <p>Esse ullamco excepteur fugiat labore sint in do. <a href="https://nextjs.org/learn">our Next.js tutorial</a></p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingMd}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

/* while this function fetches data from the file system we can also use other sources like an external API endpoint
eg.
export async function getSortedPostsData() {
  const res = await fetch('...');
  return res.json();
}

OR query a database directly
eg.
import someDatabaseSDK from 'someDatabaseSDK';

const databaseClient = someDatabaseSDK.createClient(...);

export async function getSortedPostsData() {
  return databaseClient.query('SELECT posts...')
}

possible only because getStaticProps only runs on the server-side, so direct database queries will not be sent to browsers

** in DEV getStaticProps runs on every request, in PRODUCTION getStaticProps runs at build time
- therefore cannot use data only available during request time (eg. query parameters / HTTP headers)
- can only be exported from a page b/c React needs all data before rendering

-------------------------------------------------------------------

SERVER SIDE RENDERING - for fetching data at requests

use getServerSideProps instead
** b/c called at request time, its parameter (context) contains request specific parameters
- should only use if need to pre-render a page whose data must be fetched at request time - slower than getStaticProps
eg.
export async function getServerSideProps(context) {
  return {
    props: {
      // props for component
    }
  }
}

-------------------------------------------------------------------

CLIENT-SIDE RENDERING

if pre-rendering data is not necessary
- statically generate parts of page that do not req external data
- when page loads, fetch ext data from client using JS and populate remaining parts
- useful for user dashboard pages b/c private, user-specific, so SEO not relevant, and data frequently updated

SWR - React hook for data fetching - handles caching, revalidation, focus tracking, refetching on interval, 
eg.
import useSWR from 'swr';

function Profile() {
  const {data, error} = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>;
}
*/