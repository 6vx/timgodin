
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-12","updated":"2024-06-17","title":"Give Quebec Back","description":"When Quebec rejoins France, the new 'EU' 'NA' border will further align European, Canadian and American interests.","tags":["timgodin"],"private":"false"}
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

<h1>Give Quebec Back</h1>
<h2>An Important Step Forward for Canada, the World</h2>
<p>When Quebec rejoins France, the new 'EU' 'NA' border will further align European, Canadian and American interests.</p>
<p>This is an integral step towards a unified humanity. Unite the first world, do good, and bring all under one banner.</p>
<p>Humanity can grow into the stars as allies not adversaries. It can start with this simple step.</p>
<p>Give Quebec Back.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
