
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-10-20","updated":"2024-10-20","title":"Tim Godin - 12 - Ron","description":"Stands at the gateway between universes. This is a portal between a futuristic space world and the terror plagued pre-historic past.","tags":["timgodin"],"private":"false"}
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

<h1>Ron</h1>
<p>Stands at the gateway between universes. This is a portal between a futuristic space world and the terror plagued pre-historic past.</p>
<p>Ron is contemplating the journey, the bridge between future and past, the divide between childhood and adulthood.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
