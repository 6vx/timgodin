
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"100":true,"meditation":true,"prayer":true,"might":false,"call":true,"vigor":false,"gore":false,"read":false,"write":true,"korean":true,"tags":["daily"],"created":"2024-07-05","updated":"2024-07-05","title":"Tim Godin - 20240705","description":"I woke up to Soap scratching incessantly at the barrier between her and I. It is a habit I wish she could break.","private":"false"}
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

<h1>20240705</h1>
<p><a href="unitroupe">Unitroupe</a> - <a href="kettlebell-routine">Kettlebell Routine</a> - <a href="reading">Reading</a> - <a href="major-system">Major System</a></p>
<p>I woke up to Soap scratching incessantly at the barrier between her and I. It is a habit I wish she could break.</p>
<p>She escaped her pen in the night and was working her way through the blanket I use to supplement the stairwell child gate.</p>
<p>She mightve eventually made it, had I not met her at 0350 to put her back to bed.</p>
<p>How much work children must be. I really can't imagine.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
