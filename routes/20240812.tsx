
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"100":false,"meditation":false,"might":false,"prayer":false,"vigor":false,"gore":false,"call":false,"read":false,"write":false,"korean":false,"reality":true,"private":true,"tags":["daily"],"created":"2024-08-12","updated":"2024-08-12","title":"Tim Godin - 20240812","description":"I dreamt I was working in the sopranos restaurant and I was running the buffet on my first day. They didn't hate it but I did because it was so disorganized and I didn't know who to give orders to."}
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
