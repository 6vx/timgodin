
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"description":"Collection of notes on things I've read, want to read, or am currently going through.","title":"What is Tim Godin Reading?","tags":["books","bookreport","book","reading","readlist","commentary"],"created":"2024-07-04","updated":"2024-07-05","private":"false"}
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

<h1>Reading</h1>
<p>Typically I enter notes under a header of their &quot;percentage&quot; so...</p>
<h2>55</h2>
<p>Indicates that my notes were taken around 55% of the way through the audio or ebook.</p>
<h2>reading now/next</h2>
<ul>
<li><a href="the-subtle-art-of-not-giving-a-fuck">The Subtle Art of Not Giving a Fuck</a> - referral</li>
<li><a href="children-of-time">Children of Time</a> - Hugo Best Series 2023 Winner Children Book 1 by Adrian</li>
</ul>
<h2>book notes</h2>
<ul>
<li><a href="men-who-hate-women">Men Who Hate Women</a></li>
<li><a href="daring-greatly">Daring Greatly</a></li>
<li><a href="12-rules-for-life">12 Rules for Life</a></li>
<li><a href="when-my-name-was-keoko">When My Name Was Keoko</a></li>
<li><a href="big-magic">Big Magic</a></li>
<li><a href="facing-reality">Facing Reality</a></li>
<li><a href="the-ethical-slut">The Ethical Slut</a></li>
<li><a href="caffeine">Caffeine</a></li>
</ul>
<h2>want to read</h2>
<ul>
<li>re-read Red Rising</li>
<li><a href="children-of-memory">Children of Memory</a></li>
<li><a href="children-of-ruin">Children of Ruin</a></li>
<li><a href="city-of-last-chances">City of Last Chances</a> - Adrian +1?</li>
<li><a href="the-expert-systems-brother">The Expert Systems Brother</a> - Adrian +2?</li>
<li><a href="the-expert-systems-champion">The Expert Systems Champion</a> - Adrian +3?</li>
<li><a href="shards-of-earth">Shards of Earth</a> - The Final Architecture 1</li>
<li><a href="eyes-of-the-void">Eyes of the Void</a> - The Final Architecture 2</li>
<li><a href="lords-of-uncreation">Lords of Uncreation</a> - The Final Architecture 3</li>
<li><a href="infinity-gate">Infinity Gate</a> - random pick</li>
</ul>
<h1>stuff I follow</h1>
<ul>
<li>Brandon Sanderson's Stormlight Archive</li>
<li>Lee Child's Jack Reacher series</li>
<li>Jim Butcher's Dresden Files series</li>
<li>Anything by Blake Crouch</li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
