
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-10","updated":"2024-05-12","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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

<h1>Tims Twos</h1>
<h2>Daily Youtube Channel</h2>
<p>This is an experiment.</p>
<p>A time constraint and a frequency constraint.</p>
<p>Daily 2 minute videos.</p>
<p>Essentially a micro-video-blog.</p>
<h3>possible elements</h3>
<ul>
<li>stream of thought</li>
<li>exercise vlog
<ul>
<li>mastering the monkey bars series</li>
<li>the wear pattern on my vibrams</li>
</ul>
</li>
<li>reminiscing about
<ul>
<li><a href="list-of-jobs">List of Jobs</a></li>
<li><a href="list-of-homes">List of Homes</a></li>
<li>etc</li>
</ul>
</li>
<li>calling mom</li>
<li>drawing tarot cards</li>
</ul>

        <br />
        <br />
        <p class="timestamps">Created: {data.created}</p>
        <p class="timestamps">Updated: {data.updated}</p>
        </div>
      </>
    );
  }
