
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"description":"A collection of writing of different sorts.","tags":["notes","reviews","stories","fiction","non-fiction","commentary","critique","coding","code"],"created":"2024-06-17","updated":"2024-06-17","title":"Writing","private":"false"}
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

<h1>Writing</h1>
<h2>code</h2>
<ul>
<li><a href="obsidino">Obsidino</a></li>
<li><a href="timelapse-calculator">Timelapse Calculator</a></li>
<li><a href="playfab">PlayFab</a></li>
</ul>
<h2>book notes</h2>
<ul>
<li><a href="men-who-hate-women">Men Who Hate Women</a></li>
</ul>
<h2>stories</h2>
<ul>
<li><a href="walking-the-dog">Walking the Dog</a></li>
</ul>
<h2>short fiction</h2>
<ul>
<li><a href="th3">TH3</a></li>
</ul>
<h2>poetry</h2>
<ul>
<li><a href="unitroupe">Unitroupe</a></li>
</ul>
<h2>memories</h2>
<ul>
<li><a href="justin-trudeau">Justin Trudeau</a></li>
<li><a href="list-of-jobs">List of Jobs</a></li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
