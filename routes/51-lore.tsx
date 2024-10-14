
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-10-13","updated":"2024-10-13","title":"Tim Godin - 51 Lore","description":"She reminds me of how I want to be.","tags":["timgodin"],"private":"false"}
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

<p>She reminds me of how I want to be.</p>
<p>Someone who sees something wrong and just fixes it there and then. Like patching her code.</p>
<p>How should I patch my code, Lore?</p>
<p>I have a few bug reports coming in.</p>
<p>I could write fixes and catches and such for the bugs without necessarily finding their root cause. You can catch a problem and patch it without knowing the nitty gritty.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
