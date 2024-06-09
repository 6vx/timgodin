
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-10","updated":"2024-05-14","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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

<h1>Politics</h1>
<h2>My Policies</h2>
<p>I have a few controversial opinions of my own that I hope will, in the future, comprise a stalwart platform that gives rise to a '<a href="unity-party">Unity Party</a>' like no other.</p>
<ul>
<li><a href="graveyard-farms">Graveyard Farms</a></li>
<li><a href="maid-expansion">MAID Expansion</a></li>
<li><a href="give-quebec-back">Give Quebec Back</a></li>
</ul>
<h2>Canadian Politics</h2>
<p>At this point I'm looking at an extremely <a href="pierre-poilievre">unserious person</a> using social media divisiveness to try and take power in my country.</p>
<p>This bothers me somewhat.</p>
<p>But it's also kinda the norm around the world right now.</p>
<p>It's also sort've... ironic? How the so-called &quot;Social Media Prime Minister&quot; <a href="justin-trudeau">Justin Trudeau</a> is about to be defeated by a walking oxymoron.</p>
<p><a href="pierre-poilievre">Pierre's</a> behaviour appears simply robotic to me, and that was <em>before</em> I found out he was <em>the definition</em> of a <strong>career politician</strong>.</p>
<p>Can't we find someone... else? Can we skip both of these guys? Please?</p>

        <span class="timestamps">Created: {data.created}</span><br/>
        <span class="timestamps">Updated: {data.updated}</span>
        </div>
      </>
    );
  }
