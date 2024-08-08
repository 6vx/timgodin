
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-07-31","updated":"2024-08-07","title":"Tim Godin - Bridge and Stairs","description":"Favourite run right now, it's 6.5 km total out and back.","tags":["timgodin"],"private":"false"}
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

<h1>Bridge &amp; Stairs Run</h1>
<p>Favourite run right now, it's 6.5 km total out and back.</p>
<p>Run to the pedestrian bridge, take the path to the stairs, go down them, that's half way 3.25km. Return.</p>
<h2>dates &amp; times</h2>
<ul>
<li><a href="20240729">20240729</a> - 69 (some jog)</li>
<li><a href="20240730">20240730</a> - 60 (more jog)</li>
<li><a href="20240731">20240731</a> - 45 (most jog)</li>
<li><a href="20240801">20240801</a> - 40 (jog whole way)</li>
<li><a href="20240804">20240804</a> - 80 (walk with soapy)</li>
<li><a href="20240804">20240804</a> - 45 (most jog)</li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
