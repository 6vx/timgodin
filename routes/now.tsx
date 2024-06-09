
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"What I'm Up To","tags":["nownownow"],"created":"2024-04-26","updated":"2024-06-08","description":"Tim Godin","private":"false"}
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
      <span class="timestamps">Created: {data.created} - Updated: {data.updated}</span>

<h1>nownownow</h1>
<h4>Updated 20240608 from Alberta</h4>
<p>Working and playing in Canada's America.</p>
<h2>processing</h2>
<ul>
<li>Security Application</li>
<li>Flesh out <a href="obsidino">Obsidino</a></li>
<li><a href="art-project-for-fgm">Art Project for FGM</a></li>
<li>XP Bonus</li>
</ul>

        </div>
      </>
    );
  }
