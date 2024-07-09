
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"What I'm Up To","tags":["nownownow"],"created":"2024-04-26","updated":"2024-07-09","description":"I'm working and playing in Canada's America (Alberta💖). It's Stampede season, so like any good transplant... I'm probably gonna turn off my cell phone and go camping in Banff this weekend.","private":"false"}
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
<p>I'm working and playing in Canada's America (Alberta💖). It's Stampede season, so like any good transplant... I'm probably gonna turn off my cell phone and go camping in Banff this weekend.</p>
<h2>currently processing</h2>
<ul>
<li>Flesh out <a href="obsidino">Obsidino</a></li>
<li><a href="art-project-for-fgm">Art Project for FGM</a></li>
<li>Renewed fitness goals</li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
