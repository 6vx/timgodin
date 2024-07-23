
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","isbn-13":"978-1447273288","author":"Adrian Tchaikovsky","title":"Children of Time","description":"Adrian Tchaikovksy's critically acclaimed stand-alone novel Children of Time is the epic story of humanity's battle for survival on a terraformed planet.","published":"20160101","created":"2024-07-04","updated":"2024-07-15","tags":["timgodin"],"private":"false"}
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

<h1>Children of Time</h1>
<h2>by Adrian Tchaikovsky</h2>
<p><a target="_blank" href="https://www.amazon.com/gp/product/1447273281?ref_=dbs_m_mng_rwt_calw_thcv_0&amp;storetype=ebooks&amp;qid=1720129374&amp;sr=1-1">Amazon</a></p>
<p>This series won the Hugo for Best Series in 2023, that is how I found it.</p>
<h2>notes</h2>
<h3>5</h3>
<p>earth has failed. classic.</p>
<h3>46</h3>
<p>Loving this book. At first I thought it was a bit too wackadoodle for me. Like a Neal Stephenson without the ... 'it' factor.</p>
<p>But I gave it a little more time, and am glad I did. The author may be a good fit for me.</p>
<p>I was NOT ready to accept spiderworld, but I was drawn in by Porschia on her second gen, and further entrapped by Bianca. I got stuck in the web of a well crafted narrative, what can I say.</p>
<p>The AI/human hybrid storyline is working for me with Kern. I'm excited to find out where that goes.</p>
<p>Actually I can't think of one narrative I'm not interested in the resolution to. All the characters have been great.</p>
<p>I'm glad I didn't give up on it too soon. I usually cut books pretty early.</p>
<h3>100</h3>
<p>Highly recommend. Never thought I'd be crying over a spider. But here I am.</p>
<p>Very interested in checking out more of this author's work.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
