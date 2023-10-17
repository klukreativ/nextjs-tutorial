import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
            />
            <h1>First Post</h1>
            <p>
                Et elit magna elit labore ad mollit ad est fugiat dolore nostrud officia ipsum sint. Nulla sint esse dolore sit excepteur est nostrud aliqua. Duis tempor exercitation aute ad nisi eu eiusmod mollit sit qui. Esse cupidatat nostrud excepteur consequat anim quis aute sit duis aliqua eu mollit.
            </p>
        </Layout>
    )
}