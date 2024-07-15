
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-07-04","updated":"2024-07-15","title":"Tim Godin - Survivor","description":"Survivor seems to be a spirit quest and a game show wrapped up into one. A meditation retreat, a physical challenge, a social test, a journey in so many ways.","tags":["timgodin"],"private":"false"}
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

<h1>Survivor</h1>
<p><a href="survivor-us">Survivor US</a>
<a href="survivor-au">Survivor AU</a></p>
<p>Survivor seems to be a spirit quest and a game show wrapped up into one. A meditation retreat, a physical challenge, a social test, a journey in so many ways.</p>
<p>I wonder if it's too late to be a contestant myself. The experience alone would be worth it, let alone the prize.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
