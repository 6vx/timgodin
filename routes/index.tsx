
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"Tim Godin - Widget Artificer","tags":["homepage","timgodin","Tim","Godin","timgod","typescript","youtube","developer","journalist","markdown","obsidino"],"description":"Homepage of Tim Godin, widget artificer, Xolo caretaker and jumping enthusiast.","created":"2024-04-26","updated":"2024-06-17","private":"false"}
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
<p>I love to <a href="writing">write</a>. Computer code, fiction, people's stories, critique and commentary. All of it.</p>
<p><a href="contact">Reach out</a> with inquiries/offers. I enjoy taking on short term web and media projects.</p>
<p>Check out what I'm up to right <a href="now">now</a>, or check what's been <a href="recently-updated">updated recently</a>.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
