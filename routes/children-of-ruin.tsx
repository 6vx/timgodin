
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","author":"Adrian Tchaikovsky","description":"Book 2 of Adrian's Children trilogy.","title":"Children of Ruin","isbn-13":"978-0316452533","published":"2019","created":"2024-07-15","updated":"2024-07-15","tags":["timgodin"],"private":"false"}
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

<p><a target="_blank" href="https://www.amazon.com/children-ruin-time-adrian-tchaikovsky/dp/031645253x">Amazon</a></p>
<h1>Children of Ruin</h1>
<h2>by Adrian Tchaikovsky</h2>
<h2>notes</h2>
<h3>50</h3>
<p>So far so good. A bit less awe inspiring now that I'm already introduced to the writer's style and pacing and world. But I'm still invested and will finish it for sure.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
