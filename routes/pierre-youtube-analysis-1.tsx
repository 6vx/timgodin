
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-10","updated":"2024-05-14","title":"Tim Godin - Pierre Youtube Analysis 1","description":"Thirty seven second video showing mostly news footage of food banks being used, followed by nine (5 and 4, sliced together?) out-of-context words clipped from a Justin Trudeau speech.","tags":["timgodin"],"private":"false"}
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

<h1>Pierre Youtube Analysis 1</h1>
<img src="pierre-analysis-1.webp" alt="pierre-analysis-1.webp" />
<p><a target="_blank" href="https://www.youtube.com/watch?v=fxbsfjiamza">Trudeau and Singh ask you to feel bad for them - YouTube</a></p>
<h2>description</h2>
<p>Thirty seven second video showing mostly news footage of food banks being used, followed by nine (5 and 4, sliced together?) out-of-context words clipped from a Justin Trudeau speech.</p>
<h2>analysis</h2>
<p>The title implies a negative motive from Justin Trudeau.</p>
<p>The footage implies that food bank usage is ominous and scary.</p>
<p>The out of context Trudeau comment, juxtaposed against the food bank footage, implies that Trudeau is at fault, uncaring, and out of touch.</p>
<h2>conclusion</h2>
<p>Pierre Poilievre uses out of context quotes to sow divisiveness</p>
<p>In 'the online world' this is called 'clip-chimping'.</p>
<p>From fluentslang.com:</p>
<blockquote>
<p>The term &quot;<strong>clip chimp</strong>&quot; is slang that originated in the Twitch community and refers to a Twitch user who creates and shares out-of-context clips from a streamer’s channel. These clips are often shared on social media platforms like Reddit and Twitter in an attempt to embarrass streamers and gain online popularity.</p>
</blockquote>
<p>In other words; Pierre is monkeying around with <a href="canadian-politics">Canadian Politics</a>.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
