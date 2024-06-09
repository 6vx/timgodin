
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-16","updated":"2024-05-16","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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

<h1>Sarah</h1>
<h2>무당</h2>
<img src="61.webp" alt="61.webp" />
<blockquote>
<p>focused creativity, turning visions into reality, inspired action</p>
</blockquote>
<p>She is a conduit between the material and spiritual realms, a bridge from mundane to mystical.</p>

        <span class="timestamps">Created: {data.created}</span><br>
        <span class="timestamps">Updated: {data.updated}</span>
        </div>
      </>
    );
  }
