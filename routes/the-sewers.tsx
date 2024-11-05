
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-11-02","updated":"2024-11-02","title":"Tim Godin - The Sewers","description":"channels along which detritus from prior civilizations flow down and into as they tumble towards the final big crunch singularity.","tags":["timgodin"],"private":"false"}
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

<p>channels along which detritus from prior civilizations flow down and into as they tumble towards the final big crunch singularity.</p>
<p>as more and more sludge of the decaying, cold and used up universe gathers, civilizations closer to the singularity take preventative action to reduce impacts and pollution as the crunch speed increases</p>
<p>these channels, called the sewers, are places where relics and artifacts and undead and more all coalesce into a chaotic and incredibly dangerous anti space zone few dare approach.</p>
<p><a href="23---ned">23 - Ned</a> is the chief steward of this channeling endeavour and finds novel and deep meaning in bringing light and order to the sewers even as they are bombarded with evermore darkness and chaos.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
