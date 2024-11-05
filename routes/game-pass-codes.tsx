
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-10-22","updated":"2024-10-22","title":"Tim Godin - Game Pass Codes","description":"1 month core\nQHVF9-49MF7-C7RGX-PQ9GG-QFYQZ","tags":["timgodin"],"private":"false"}
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

<p>1 month core
QHVF9-49MF7-C7RGX-PQ9GG-QFYQZ</p>
<p>42FYP-TRWC2-DDWCD-J7WKX-93KGZ</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
