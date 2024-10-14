
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"100":false,"meditation":false,"might":false,"prayer":false,"vigor":false,"gore":false,"call":false,"read":false,"write":false,"korean":false,"reality":false,"private":true,"tags":["daily"],"created":"2024-09-29","updated":"2024-09-29","title":"Tim Godin - 20240929","description":"I dreamt I was flying around the map.\nFirst i was re enacting a firefight where my side lost. Cole was in the same world/map interacting with Taylor and others via text chat and I was watching it unfold.\nFirst from a helicopter I watched my tactical.shooter faction get decisively eliminated by coles side, but I bail from a helicopter near the end and begin to fly.\nI fly to save points at the coast of islands, to idols that allow me to change major skills, etc, using an umbrella. When I'm close to landing after a long dive I just open my umbrella and gain tons of lift. If I open it three times in quick succession I fly high into the sky and then can coast to my next stop and find a gem or another item.\nThe other players on the ground notice me, and want to eliminate me, the last of my faction from the huge battle, but I am the only one flying around this way, playing my own game my own way while they do more normal things."}
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

<h1>Private</h1><p>This page has been set to private</p>
        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
