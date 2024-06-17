import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tim Godin</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/favicon.png" type="image/png"></link>

      </head>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-X4B7FREDZL"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-X4B7FREDZL');
      </script>
     
      <body>
        <Component />
      </body>
    </html>
  );
}
