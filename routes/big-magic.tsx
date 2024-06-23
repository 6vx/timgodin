
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","rating":5,"author":"Elizabeth Gilbert","date":20180601,"title":"Big Magic, Creative Living Beyond Fear","isbn-13":"978-1594634710","description":"Embrace creativity and overcome fear to lead a fulfilling life.","created":"2024-06-23","updated":"2024-06-23","tags":["timgodin"],"private":"false"}
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

<h1>Big Magic, Creative Living Beyond Fear</h1>
<h2>by Elizabeth Gilbert</h2>
<p>Big fan of this one. For the artsy types who need a little kick in the pants.</p>
<p>The way she talks about ideas really lines up with the way I think about them.</p>
<p>You don't own an idea, just like you don't own the cells of your body. You just have possession of them for a while.</p>
<p>I loved the example of how different maths were discovered at the same time independently in different parts of the world.</p>
<p>Who knows what confluence of events and factors can lead to that light bulb going off in your head? And how long will you get to possess that light before you or it is gone?</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
