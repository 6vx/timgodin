
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"Tim Godin - Youtube","description":"My YouTube adventures summarized.","tags":["youtube","videos","timgodin"],"created":"2024-07-01","updated":"2024-07-01","private":"false"}
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

<h1>YouTube</h1>
<p>I've been fussing with this for at least a decade now. At first just a random place to post videos, eventually a repository of dog videos, and soon maybe something else.</p>
<h2>Channels</h2>
<h3><a href="youtube.com/@soapandchis">Soapy Xolo</a></h3>
<ul>
<li>Dog videos</li>
<li>750k+ views</li>
<li>1.3k+ subscribers</li>
</ul>
<h3><a href="youtube.com/@timgodin">Tim Godin</a></h3>
<ul>
<li>Random Short Cuts</li>
<li>50k+ views</li>
<li>100+ subscribers</li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
