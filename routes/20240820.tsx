
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"100":true,"meditation":false,"might":false,"prayer":true,"vigor":false,"gore":false,"call":true,"read":false,"write":true,"korean":true,"reality":true,"private":true,"tags":["daily"],"created":"2024-08-20","updated":"2024-08-20","title":"Tim Godin - 20240820","description":"Dreamt I was visiting Katie in Kelowna\nWe went out for dinner\nBut it was raining and instead we went back to her place and had tofu scramble"}
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
