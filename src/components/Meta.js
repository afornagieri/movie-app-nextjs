import Head from "next/head";

const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/favicon.png" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "MovieApp",
  keywords: "movie app, free movies, popular movies",
  description: "discover movies, tv shows"
}

export default Meta;