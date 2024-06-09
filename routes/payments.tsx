
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-13","updated":"2024-05-14","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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

<h1>Payments</h1>
<h3>TON</h3>
<p>UQAu8pQHB5b9v_isn7lU6ZWjUAKs2Pr7ilZf-J2p4_AcuSD8</p>
<h3>BTC</h3>
<p>12QoR6H3bXCAVmaEo9Q5jWjksXqpQjLLh9</p>

        <span class="timestamps">Created: {data.created}</span><br/>
        <span class="timestamps">Updated: {data.updated}</span>
        </div>
      </>
    );
  }
