
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"Create your own Major System","created":"2024-09-01","updated":"2024-09-01","description":"Tim Godin - Major System Creator","tags":["timgodin"],"private":"false"}
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

<h1>Major System Creator</h1>
<h2>links</h2>
<p><a target="_blank" href="https://major-system.info/en/">Major System mnemonic technique database, list and generator (major-system.info)</a></p>
<p><a target="_blank" href="https://en.wikipedia.org/wiki/mnemonic_major_system">Mnemonic major system - Wikipedia</a></p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
