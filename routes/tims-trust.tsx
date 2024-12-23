
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-11-16","updated":"2024-11-16","title":"Tim Godin - Tims Trust","description":"Being on this list does not indicate that I implicitly agree with every single thing said or done by these people.","tags":["timgodin"],"private":"false"}
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

<h1>Tim's Trust</h1>
<p>Being on this list does not indicate that I implicitly agree with every single thing said or done by these people.</p>
<p>It is a collection of personalities and sources I've been drawn to over the years I would recommend to others in different situations.</p>
<p>I'm hoping to read a lot and expand this list a great deal in 2025.</p>
<h2>Some Trusted Folk 💭</h2>
<h3><a target="_blank" href="https://samharris.org">Sam Harris</a></h3>
<p>Has been telling it like it is for longer than anyone, and withstood pressures from every direction that might have led him down treacherous routes a la JR/JBP.</p>
<p>I'd be hard pressed to find an example of Sam's thinking that isn't in line with my own until we reach more web-media-technical topics.</p>
<p>Sam seemed eager to jump on 'NFTs' for example, something that was obviously silly to me from the get-go.</p>
<h3><a target="_blank" href="https://tim.blog">Tim Ferriss</a></h3>
<p>Tim trailblazed a lot of the media landscape we see today. I've watched his personality and lifestyle develop over the years and been able to map a lot of his experiences onto my own.</p>
<h3><a target="_blank" href="https://destiny.gg">Steven Bonell II</a></h3>
<p>Hard not to relate to Destiny as a North American-gamer-millennial who played a lot of StarCraft.</p>
<p>Steven represents a lot of my values, just... more vociferously than I might.</p>
<h3><a target="_blank" href="https://sive.rs">Derek Sivers</a></h3>
<p>Inspirational output into the world. I don't even remember how I first encountered the delicious minimalism of Derek's site. The only thing better than how Derek presents himself is his output.</p>
<p>Derek reads a lot and shares all of his notes and reviews on his site. Whatever I initially ended up on his site for; the book notes brought me back.</p>
<h3><a target="_blank" href="https://derrenbrown.co.uk">Derren Brown</a></h3>
<p>I don't have a lot of insight into this guy personally, unless you are willing to count reading his book Happy as peeking behind the curtain. Perhaps the photography book as well might give some insight.</p>
<p>I add this name to the list not for how much I relate to Derren, but for how much I appreciate the form and function of his work. What better advertisement for skepticism could there be than this devil walking around convincing people up is down?</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
