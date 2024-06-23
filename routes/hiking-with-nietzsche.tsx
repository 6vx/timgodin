
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","title":"Hiking With Nietzsche","rating":3,"author":"John Kaag","date":20180101,"created":"2024-06-23","updated":"2022-07-16","description":"I found this to be an adequate primer/summary on Nietzsche, which is all I was looking for.","tags":["timgodin"],"private":"false"}
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

<p>I found this to be an adequate primer/summary on Nietzsche, which is all I was looking for.</p>
<p>Don't know that I'd recommend as the author's story takes up a good portion. However, if you haven't bothered to read the wikipedia entry yet and still want to know more... Maybe something like this is the route for you too.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
