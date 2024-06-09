
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

<h1>Justin Trudeau</h1>
<img src="justintrudeau.webp" alt="justintrudeau.webp" />
<p>I was living in downtown Kelowna and hiking Knox had become a regular occurrence.</p>
<p>A jog down the beach and you were there, and the views of the lake and city were incentive on their own.</p>
<p>The radio mentioned that the PM would be in town and was scheduled to hike Knox.</p>
<p>My then-partner wanted to get a photo with him and so we figured we'd meet him at the peak.</p>
<p>I found myself more fascinated and preoccupied with the armed, plainclothes officers we encountered on our otherwise regular hike.</p>
<p>I'd met a few politicians before, but none with secret, armed pre-eminent escorts.</p>
<p>When the PM arrived he shook hands with us and another couple that had been waiting for the meeting. Someone took a photo for us.</p>
<p>Afterwards, while conversing with my then-partner, she remarked that</p>
<p>&quot;I looked into his eyes and it was like there was nobody there&quot;</p>
<p>and I had no rebuttal.</p>
<p>My personal opinion was that he was a kind've a plain guy, unremarkable really if not for his excessive company.</p>
<p>I appreciated that he was participating in a hobby I enjoyed; jogging down a mountain path.</p>
<p>Beyond that... what do I really even know about him? Not much.</p>

        <p class="timestamps">Created: {data.created}</p>
        <p class="timestamps">Updated: {data.updated}</p>
        </div>
      </>
    );
  }
