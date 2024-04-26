import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tim Godin</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/favicon.png" type="image/png"></link>

      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
