
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"100":false,"meditation":false,"might":false,"prayer":false,"vigor":false,"gore":false,"call":false,"read":false,"write":false,"korean":false,"reality":false,"private":true,"tags":["daily"],"created":"2024-08-02","updated":"2024-08-02","title":"Tim Godin - 20240802","description":"I dreamt Cole and I were in a lobby for some FPS but his avatar was seven or eight feet tall and some kid from Canmore kept trying to recruit him into his clan while we were trying to strategize for the upcoming map."}
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
