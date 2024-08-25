
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"100":true,"meditation":false,"might":true,"prayer":true,"vigor":false,"gore":true,"call":true,"read":false,"write":true,"korean":true,"reality":true,"private":true,"tags":["daily"],"created":"2024-08-19","updated":"2024-08-19","title":"Tim Godin - 20240819","description":"crushing the hand strengthener leads to great power. I will be able to crush peoples hands, hold onto things for longer, pull harder, press faster, everything. I intend to use this power to take on anyone anytime! As I crush things in my hand so too are things crushed in the world. The power flows through my vice grip and into the materials I am looking at."}
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
