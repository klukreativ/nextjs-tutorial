// _app.js is a top level React component that wraps all pages in the application
// this component allows one to keep state when navigating between pages or to add global styles like in this file
// only place global.css can be imported (to avoid conflict)

import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}