
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-04-27","updated":"2024-04-29","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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

<h1><a target="_blank" href="https://www.canadaland.com/introducing-canadalabs/">CanadaLabs</a></h1>
<p>Due May 31st. 3 minute audio local news.</p>
<p>the rules:</p>
<ol>
<li>Be 3 minutes in length (give or take 10 seconds)</li>
<li>Be rooted in place. Think local.</li>
<li>Involve at least two of the following elements:</li>
</ol>
<ul>
<li>a reference to local folklore or an urban myth</li>
<li>tape from a local mainstay — e.g., a restaurant, park, city hall, neighbour’s yard</li>
<li>the voice of someone you don’t yet know</li>
<li>the sound of water (outdoor, indoor, whatever)</li>
</ul>
<p>requirements:</p>
<ul>
<li>Your full name and contact information</li>
<li>An mp3 of your finished piece</li>
<li>The piece’s title and the name of the place featured</li>
<li>A short description of the work (100 words or less)</li>
<li>An indication of which elements you incorporated into your piece</li>
<li>An image related to your story</li>
<li>A short bio (100 words or less) and headshot</li>
<li>Links to websites / social handles</li>
<li>An English-language transcript, if the submission is not in English or the audio is unclear</li>
</ul>

        <span class="timestamps">Created: {data.created}</span><br/>
        <span class="timestamps">Updated: {data.updated}</span>
        </div>
      </>
    );
  }
