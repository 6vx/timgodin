
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-07-04","updated":"2024-07-04","title":"Tim Godin - Major System","description":"I use a non-standard major system that was adjusted to make Korean map on a little bit better.","tags":["timgodin"],"private":"false"}
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

<h1>Major System</h1>
<p><a href="major-names-list">Major Names List</a></p>
<p>I use a non-standard major system that was adjusted to make Korean map on a little bit better.</p>
<ul>
<li>0 - ch sh j</li>
<li>1 - r</li>
<li>2 - n</li>
<li>3 - t</li>
<li>4 - m</li>
<li>5 - l</li>
<li>6 - s</li>
<li>7 - k g</li>
<li>8 - f v</li>
<li>9 - b p</li>
</ul>
<p>I initially encountered Derren Brown's version in his book Tricks of the Mind, though the method precedes him.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
