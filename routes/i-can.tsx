
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-10-23","updated":"2024-10-23","title":"Tim Godin - I CAN","description":"Get up early and work out","tags":["timgodin"],"private":"false"}
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

<h1>I can ___</h1>
<p>Get up early and work out</p>
<p>Get a new full time job</p>
<p>Eat enough, simply, and get strong af</p>
<p>Get Sarah back, or live some other life</p>
<p>Run a successful YouTube channel</p>
<p>I can run a small web business and take on more technical projects and even run a team of devs if I want to</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
