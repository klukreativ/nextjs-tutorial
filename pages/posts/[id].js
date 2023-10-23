import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
}

export async function getStaticPaths() {
    // contains array of known paths returnbed by func which incl params
    const paths = getAllPostIds();

    return { paths, fallback: false, }
}

// post page now using getPostData func to get post data and return as props
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id); // since we are now awaiting getStaticProps b/c remark
    return {
        props: { postData, }
    }
}