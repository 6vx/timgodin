
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"100":false,"pray":false,"might":false,"call":false,"vigor":false,"gore":false,"read":false,"tags":["daily"],"created":"2024-07-04","updated":"2024-07-04","title":"Tim Godin - 20240704","description":"Setting up a template for the daily note.","private":"false"}
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
<p>Setting up a template for the daily note.</p>
<p>Curious to see if subdirectory is going to get picked up with no work.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
