
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"What I'm Up To","tags":["nownownow"],"created":"2024-04-26","updated":"2024-08-03","description":"The record-breaking heat seems to finally be breaking here in Alberta.","private":"false"}
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

<h1>nownownow</h1>
<p>The record-breaking heat seems to finally be breaking here in Alberta.</p>
<p>I'm itching to try out a new tripod I got and make a couple time lapse videos.</p>
<p>I'm looking for work, I need a change. <a href="contact">Contact</a> me if you know of any opportunities nearby or remotely.</p>
<h2>currently processing</h2>
<ul>
<li>Flesh out <a href="obsidino">Obsidino</a></li>
<li>Finish an <a href="art-project-for-fgm">Art Project for FGM</a></li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
