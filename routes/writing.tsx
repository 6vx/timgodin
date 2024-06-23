
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"description":"A collection of writing of different sorts.","tags":["notes","reviews","stories","fiction","non-fiction","commentary","critique","coding","code"],"created":"2024-06-17","updated":"2024-06-23","title":"Tim Godin - Writing","private":"false"}
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
<h2>reviews</h2>
<ul>
<li><a href="windows-phone-8">Windows Phone 8</a></li>
</ul>
<h2>book notes</h2>
<ul>
<li><a href="men-who-hate-women">Men Who Hate Women</a></li>
<li><a href="daring-greatly">Daring Greatly</a></li>
<li><a href="12-rules-for-life">12 Rules for Life</a></li>
<li><a href="when-my-name-was-keoko">When My Name Was Keoko</a></li>
<li><a href="big-magic">Big Magic</a></li>
<li><a href="facing-reality">Facing Reality</a></li>
<li><a href="the-ethical-slut">The Ethical Slut</a></li>
<li><a href="caffeine">Caffeine</a></li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
