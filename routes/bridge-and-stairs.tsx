
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-07-31","updated":"2024-08-04","title":"Tim Godin - Bridge and Stairs","description":"Time to do the loop of bridge, down and up stairs and back to base.","tags":["timgodin"],"private":"false"}
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

<p>Time to do the loop of bridge, down and up stairs and back to base.</p>
<p>Need to get an accurate read on it next time. I think it's between 6 and 7 km. Good bit of elevation change.</p>
<p>6.5 km</p>
<p><a href="20240729">20240729</a> - 69 (some jog)
<a href="20240730">20240730</a> - 60 (more jog)
<a href="20240731">20240731</a> - 45 (most jog)
<a href="20240801">20240801</a> - 40 (jog whole way)</p>
<p><a href="20240804">20240804</a> - 80 (walk with soapy)
<a href="20240804">20240804</a> - 45 (most jog)</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
