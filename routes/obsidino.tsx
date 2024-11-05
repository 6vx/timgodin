
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"Obsidino - Deploy your Vault for Less","tags":["obsidino","publish","obsidian","markdown","deno","fresh","saas"],"description":"Obsidino is a lower cost alternative to Publish leveraging Deno Deploy and Fresh framework.","created":"2024-04-26","updated":"2024-11-04","private":"false"}
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

<h1>Obsidino</h1>
<p><a target="_blank" href="https://obsidino.deno.dev/">Obsidino v0.1</a> processes but does not yet store markdown files.</p>
<blockquote>
<p>Vault -&gt; URL in one click.</p>
</blockquote>
<h2>what</h2>
<p>Obsidino is a simple and fast method of deploying a vault to the web.</p>
<p>Obsidino consumes an Obsidian Vault using Deno and deploys as a Fresh project.</p>
<ul>
<li>90+ Lighthouse score</li>
<li>SEO built-in</li>
<li>Automatic image reformatting</li>
<li>Minimal/zero configuration required</li>
</ul>
<h2>why</h2>
<blockquote>
<p>Publish - 10$ USD / month</p>
<p>Obsidino - 10$ USD / <em>year</em></p>
</blockquote>
<p>Obsidian's <a target="_blank" href="https://www.obsidian.md/publish">first party offering</a> is too expensive for a lot of use cases.</p>
<p>For deploying a vault quickly and easily with minimal cosmetic requirements, Obsidino is a reliable alternative.</p>
<h2>examples</h2>
<p><a href="/">This website</a> is built and updated using Obsidino. All pages on this website are generated from an Obsidian Vault.</p>
<p><a href="markdown-syntax">This</a> page shows examples of the elements that Obsidino can currently process.</p>
<h2>limitations</h2>
<ul>
<li>1GB maximum size</li>
<li>no graphs/canvases</li>
<li>throttling resources</li>
</ul>
<h2>roadmap</h2>
<h3>0.2 goals</h3>
<ul>
<li>Overhaul transmute process: convert entire vault to Object and then store in DenoKV</li>
<li>CSS derived from vault file, preferably ./.style.css (<em>align with plugin community standard</em>)</li>
</ul>
<h3>1.0 goals</h3>
<ul>
<li>Select directory -&gt; click GO == url in your clipboard</li>
<li>Subscription options:</li>
<li>Browser based signup OneDrive / Google Drive support</li>
<li>On/Off Obsidino banner</li>
<li>User assigned domain</li>
</ul>
<h3>other in order of priority</h3>
<ul>
<li>footnote support</li>
</ul>
<h3>potentially axing for brevity</h3>
<ul>
<li><s>extended markdown syntax</s></li>
<li><s>subdirectory support</s></li>
<li><s>1:1 Obsidian-style markdown syntax</s></li>
<li><s>Canvas view</s></li>
<li><s>Graph view</s></li>
</ul>
<h2>progress</h2>
<ul>
<li>20241019 fork project <a target="_blank" href="https://obsidino.deno.dev">Obsidino 0.1</a></li>
<li>20240705 roadmap adjust, robots.txt generated</li>
<li>20240617 auto-generate recently-updated page</li>
<li>20240617 add support for jpg and jpeg</li>
<li>20240616 auto-generate a page's title &amp; description when none is provided</li>
<li>20240616 automatically create an .xml sitemap for web crawlers</li>
<li>20240608 inject created/updated data to frontmatter from file metadata</li>
<li>20240608 abstracted build -&gt; deploy into one step with fail-safe and commit message param</li>
<li>20240608 added privacy mode - file/data is replaced and never sent to server</li>
<li>20240518 added frontmatter title, description and tags</li>
<li>20240516 added png -&gt; webp automatic conversion</li>
<li>20240514 some extended syntax (conflicts)</li>
<li>20240514 basic markdown syntax complete</li>
<li>20240513 external links open in new window</li>
<li>20240510 support internal alias links</li>
<li>20240505 support PNG images</li>
<li>20240502 support internal links</li>
</ul>
<h2>links</h2>
<ul>
<li><a target="_blank" href="https://obsidian.md/">Obsidian - Sharpen your thinking</a></li>
<li><a target="_blank" href="https://deno.com/deploy">Deno Deploy | Deno</a></li>
<li><a target="_blank" href="https://www.markdownguide.org/cheat-sheet/">Markdown Cheat Sheet | Markdown Guide</a></li>
<li><a target="_blank" href="https://fresh.deno.dev/">Fresh - The next-gen web framework.</a></li>
<li><a target="_blank" href="https://capacitorjs.com/docs/apis/filesystem">Filesystem Capacitor Plugin API | Capacitor Documentation</a></li>
<li><a target="_blank" href="https://www.vultr.com/products/cloud-compute/">Cloud Compute, Bare Metal, &amp; Storage - Vultr.com</a></li>
<li><a target="_blank" href="https://deno.land/x/deno_kv_oauth@v0.10.0">deno_kv_oauth@v0.10.0 | Deno</a></li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
