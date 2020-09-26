import Head from 'next/head'

export const HomePage = (): JSX.Element => (
  <div className="container">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Curo</title>
      <meta
        name="description"
        content="Curo is the management dashboard for the Suus headless content management system"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#46494a" />
      <meta name="apple-mobile-web-app-title" content="Curo" />
      <meta name="application-name" content="Curo" />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    <main>
      <h1>Hello, World!</h1>
    </main>
  </div>
)

export default HomePage
