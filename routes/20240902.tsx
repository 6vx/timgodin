
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"100":true,"meditation":true,"might":true,"prayer":true,"vigor":false,"gore":true,"call":true,"read":true,"write":true,"korean":true,"reality":true,"private":true,"tags":["daily"],"created":"2024-09-02","updated":"2024-09-02","title":"Tim Godin - 20240902","description":"Within 6 minutes of snooze I slip back into a dream of pretty lesbians kissing and asking for a man to play with them. Their tits turn me stupid. My alarm goes off again."}
export default function Home({ data }: PageProps) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        {/* Add other SEO-related tags here */}
        {data.tags.map(tag => (
          <meta name="keywords" content={tag} />
        ))}
      </Head>
      <div class="main text-left w-max-md mx-auto">

<h1>Private</h1><p>This page has been set to private</p>
        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }