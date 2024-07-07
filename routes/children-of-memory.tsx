
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"author":"Adrian Tchaikovsky","title":"Tim Godin - Children of Memory","isbn-13":"978-0316466400","created":"2024-07-06","updated":"2024-07-06","description":"Third of trilogy.","tags":["timgodin"],"private":"false"}
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

<h1>Children of Memory</h1>
<h2>by Adrian Tchaikovsky</h2>
<p><a target="_blank" href="https://www.amazon.ca/children-memory-adrian-tchaikovsky/dp/0316466409">Amazon</a></p>
<p>Third of trilogy.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
