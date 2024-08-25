
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"What I'm Up To","tags":["nownownow"],"created":"2024-04-26","updated":"2024-08-24","description":"Consolidate all the %'s I've scattered about. It's time to apply 100 of them, all for myself, all exactly the way that I want.","private":"false"}
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
<p>Consolidate all the %'s I've scattered about. It's time to apply 100 of them, all for myself, all exactly the way that I want.</p>
<h2>currently processing</h2>
<ul>
<li>Focused on <a href="fitness">Fitness</a></li>
<li>Flesh out <a href="obsidino">Obsidino</a></li>
<li>Finish an <a href="art-project-for-fgm">Art Project for FGM</a></li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
