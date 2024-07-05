
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","isbn-13":"978-0062457714","author":"Mark Manson","title":"The Subtle Art of Not Giving a Fuck","description":"In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be \"positive\" all the time so that we can truly become better, happier people.","published":"20160913","created":"2024-07-04","updated":"2024-07-04","tags":["timgodin"],"private":"false"}
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

<h1>The Subtle Art of Not Giving a Fuck</h1>
<p>Referred this book by someone close! Let's see how it is.</p>
<h2>55</h2>
<blockquote>
<p>...not giving a fuck. Well it's more like allocating your fucks. Well I mean you have no choice but to give fucks.</p>
</blockquote>
<p>It reads like bhuddism for (adult) beginners because, as it eventually realizes, it is.</p>
<p>That's fine. We do need more of that.</p>
<p>Not sure I'd recommend it, but it really does depend on the audience. How do they need to be communicated to?</p>
<p>The message certainly resonates, and maybe hearing it again, albeit with more expletives than usual, is useful just as a reminder.</p>
<p>Might finish it sometime while walking the dogs again or similar.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
