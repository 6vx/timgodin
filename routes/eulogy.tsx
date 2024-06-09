
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-15","updated":"2024-05-15","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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

<h1>Eulogy</h1>
<h2>How does $%@# remember me?</h2>
<p>A steadfast person in a chaotic world, with grace and patience for whoever joined him in the eye of the storm.</p>
<p>Tim was reliable, patient, kind, loving, witty and forgiving.</p>
<p>He will be remembered through me.</p>

        <span class="timestamps">Created: {data.created}</span>
        <span class="timestamps">Updated: {data.updated}</span>
        </div>
      </>
    );
  }
