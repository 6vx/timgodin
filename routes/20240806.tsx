
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"100":false,"meditation":true,"might":true,"prayer":false,"vigor":true,"gore":false,"call":false,"read":true,"write":true,"korean":true,"reality":true,"private":true,"tags":["daily"],"created":"2024-08-06","updated":"2024-08-06","title":"Tim Godin - 20240806","description":"I was house sitting and bought a tv and mount to go above the basement bathtub so I could watch stuff and have a bath"}
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