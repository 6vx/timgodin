
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-10-31","updated":"2024-10-31","title":"Tim Godin - 19 - Reap","description":"Reap in jail","tags":["timgodin"],"private":"false"}
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

<p>Reap in jail</p>
<p>he works here now. after stanley goodspeed and john patrick mason joined him and together they killed the rock // jailer.</p>
<p>work - 일하다</p>
<p>chained up under the table like a trophy</p>
<p>jail alcatraz</p>
<p>alcatraz - stanley goodspeed and john patrick mason</p>
<p>the rock is the jailer</p>
<p>reap joins the party</p>
<p>He's got a wolf pack.</p>
<p>Reap is a druid</p>
<p>Wow I didn't know that. That's awesome.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
