
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"100":true,"meditation":false,"might":true,"prayer":true,"vigor":true,"gore":true,"call":false,"read":false,"write":false,"korean":false,"reality":true,"private":true,"tags":["daily"],"created":"2024-07-30","updated":"2024-07-30","title":"Tim Godin - 20240730","description":"I dreamt that Elon Musk was a mad scientist bad guy and I was a secret agent infiltrating his futuristic laboratory. Very mission impossible at first but then I was also turning into a blob and flinging myself great distances before reconfiguring into myself."}
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

<h1>Private</h1><p>This page has been set to private</p>
        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
