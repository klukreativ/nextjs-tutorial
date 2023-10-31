export default function handler(req, res) {
    res.status(200).json({ text: 'Hello, this is an API request' })
}

/* 
- should NOT fetch API Route from getStaticProps / getStaticPaths
- Write server code DIRECTLY in getStaticProps / getStaticPaths (or helper func)
  BECAUSE getStaticProps / getSTaticPaths run only on server-side and NOT client-side (can write direct db queries w/o sending to browsers)
- good use case is handling form input (eg. form input sending POST req to API Route - then write directly to DB (safe b/c NOT part of client bundle))

- STATIC GENERATION is useful when fetching from headless CMS but NOT for instances like writing draft and wanting to preview (want Next.js to render at req time and not build time), which are better suited for PREVIEW mode.
*/