
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-13","updated":"2024-05-13","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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

<h1>The Pretendian Crisis</h1>
<ul>
<li>Self-identifying appears to be an issue in Canada and US</li>
<li>Potentially more 'fake' natives than real ones in Canada/US</li>
<li>Fake tribe co-opted land and built a casino on it</li>
<li>One man has created 50,000 fraudulent Indians (status card sales 80$ each, everyone who takes a DNA test qualifies)</li>
<li>A person who paid to get Cherokee status in 1880 (to buy land) now has a millionaire descendent running for (US) congress on their heritage</li>
<li>Can we trust the statistics when it comes to indigenous crime if a large percentage of the 'indigenous' people are... fake?</li>
<li><strong>Johnny Depp</strong> is a prominent Pretendian</li>
</ul>

        <br />
        <br />
        <p class="timestamps">Created: {data.created}</p>
        <p class="timestamps">Updated: {data.updated}</p>
        </div>
      </>
    );
  }
