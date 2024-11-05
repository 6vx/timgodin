
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-10-23","updated":"2024-10-23","title":"Tim Godin - 15 - Riley","description":"Raises Lore","tags":["timgodin"],"private":"false"}
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

<h1>Riley</h1>
<p>Raises Lore</p>
<p>The cairn stones stand around her as totems to the legendary portal. To a place halfway between here and hell. She guards it. Her will binds the world together in this place.</p>
<p>Coursing with an energy so powerful that it fries your brain if you dare attempt to cross her.</p>
<p>the stony field is a stronghold of rileys power. she guards a portal to a cursed plane.</p>
<p>What does she want from me? How can she guide me? What aid in my quest does she offer?</p>
<p>Will she let me pass to cleanse the hellish plane? Or keep me here to destroy my brain?</p>
<p><a href="i-can">I CAN</a> Riley reminded me that I can. I can. I can.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
