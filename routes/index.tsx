
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"Tim Godin - Jumping Enthusiast","tags":["homepage","timgodin","Tim","Godin","timgod","typescript","youtube","developer","journalist","markdown","obsidino"],"description":"Homepage of Tim Godin, widget artificer and jumping enthusiast."}
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
<h1>Tim Godin</h1>
<img src="timface.webp" alt="timface.webp" />
<p><a href="dev">Widget artificer</a>.</p>
<p>Some satire, some serious. Depends how you got here.</p>
<p><a href="contact">Reach out</a> with inquiries/offers.</p>
<p>What I'm up to right <a href="now">now</a>.</p>

        </div>
      </>
    );
  }
