
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-11-16","updated":"2024-11-16","title":"Tim Godin - The New Internet","description":"We are living in a world where Demosthenes and Locke can be generated and loosed upon the discourse a thousand times a thousand ways on a thousand topics, and the hurdle to doing this is &quot;being able to describe what you're trying to do&quot; to an AI assistant.","tags":["timgodin"],"private":"false"}
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

<h1>The New Internet</h1>
<h2>How To Interact</h2>
<h3>A Quandry?</h3>
<p>We are living in a world where Demosthenes and Locke can be generated and loosed upon the discourse a thousand times a thousand ways on a thousand topics, and the hurdle to doing this is &quot;being able to describe what you're trying to do&quot; to an AI assistant.</p>
<p>Where does one human voice fit into this picture? How do you differentiate your signal from noise?</p>
<h3>Ride the Current</h3>
<p>I should be reaching out specifically to people who share interests with me. I shouldn't be fighting against an infinitely wide and powerful current, but scooping up the energy of those already flowing in the same direction.</p>
<p>How can I demonstrate my interests in a way such that it attracts the attention of those like me?</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
