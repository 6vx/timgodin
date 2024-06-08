
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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
<h1>Pierre Poilievre</h1>
<img src="pierre-banner.webp" alt="pierre-banner.webp" />
<h2>what I know about Pierre</h2>
<ul>
<li>He's an out of touch <a target="_blank" href="https://en.wikipedia.org/wiki/pierre_poilievre#background_and_childhood">career politician</a></li>
<li><a href="pierre-youtube-analysis-1">He's monkeying around with Canadian Politics</a></li>
</ul>
<h2>the gist</h2>
<p>Politician his whole life and now is gaming FB/YT et al algorithms with divisiveness to rise (apparently) to power.</p>
<p>Sounds kinda sketch to me.</p>
<h2>understanding pp</h2>
<p>You only have to watch a few of Pierre's videos to get the idea;</p>
<ul>
<li><a href="justin-trudeau">JT</a> bad</li>
<li>CBC bad</li>
<li>world is bad</li>
<li>I, common-sense daddy, will solve all your problems lickety-split</li>
</ul>
<p>It's agonizingly transparent populism... and yet he's approaching half of a million YouTube subscribers... 'Canadians' are eating it up.</p>
<h2>what's really going on?</h2>
<p>Or are they?</p>
<p>How much of his audience is Russian/Chinese bots?</p>
<p>How much rage is coming from authentic Canadians?</p>

        </div>
      </>
    );
  }
