
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"100":false,"meditation":false,"might":true,"prayer":false,"vigor":false,"gore":false,"call":true,"read":true,"write":true,"korean":true,"private":true,"tags":["daily"],"created":"2024-07-13","updated":"2024-07-13","title":"Tim Godin - 20240713","description":"I think I've been watching too much John Deloney content. Last night I was startled awake by a dream I had where I was waiting in a dentist chair for oral surgery. In walked Dr John, chipper as ever."}
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
