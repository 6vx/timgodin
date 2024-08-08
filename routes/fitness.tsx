
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-08-07","updated":"2024-08-07","title":"Tim Godin - Fitness","description":"Tim Godin - Fitness","tags":["timgodin"],"private":"false"}
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

<h1>Fitness</h1>
<h2>goal</h2>
<ul>
<li>General fitness</li>
<li>Strength</li>
</ul>
<h2>current routines</h2>
<ul>
<li><a href="bridge-and-stairs">Bridge and Stairs</a></li>
<li><a href="simple-and-sinister">Simple and Sinister</a></li>
<li><a href="yoga">Yoga</a></li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
