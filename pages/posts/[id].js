import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingX1}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
    // contains array of known paths returnbed by func which incl params
    const paths = getAllPostIds();
    // fallback:false means any paths not returned by this func will return 404 page
    return { paths, fallback: false, }
}

// post page now using getPostData func to get post data and return as props
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id); // since we are now awaiting getStaticProps b/c remark
    return {
        props: { postData, }
    }
}