
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"100":true,"pray":true,"meditate":true,"might":true,"call":true,"vigor":true,"gore":true,"read":true,"write":true,"tags":["daily"],"water":true,"created":"2024-07-04","updated":"2024-07-05","title":"Tim Godin - 20240704","description":"Setting up a template for the daily note.","private":"false"}
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

<h1>20240704</h1>
<p><a href="unitroupe">Unitroupe</a> - <a href="kettlebell-routine">Kettlebell Routine</a> - <a href="reading">Reading</a> - <a href="major-system">Major System</a></p>
<p>Setting up a template for the daily note.</p>
<p>Curious to see if subdirectory is going to get picked up with no work.</p>
<p>Called mom. She's pruned the lilac bush finally.</p>
<p>Added <a href="major-system">Major System</a>.</p>
<p>Listened to 55% of <a href="the-subtle-art-of-not-giving-a-fuck">The Subtle Art of Not Giving a Fuck</a> while walking the dogs.</p>
<p>Very nice 8-10km walk, cloudy, little sun as it cooled down from 1900-2100.</p>
<p>The thunderstorm came late, and everyone's too tired to be too bothered by it.</p>
<p>Molly's a touch spooked but even she's only borked a couple times.</p>
<p><a href="notes">Notes</a> needs to be edited.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
