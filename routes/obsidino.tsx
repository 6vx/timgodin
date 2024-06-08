
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"Obsidino - Deploy your Vault for Less","tags":["obsidino","publish","obsidian","markdown","deno","fresh","saas"],"description":"Obsidino is a lower cost alternative to Publish leveraging Deno Deploy and Fresh framework.","private":"false"}
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
<img src="obsidino.webp" alt="obsidino.webp" />
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
<li>Minimal/zero config</li>
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
<h2>expected limitations</h2>
<ul>
<li>1GB maximum size</li>
<li>images, canvases, graphs limited</li>
<li>throttling resources</li>
</ul>
<h2>progress</h2>
<ul>
<li>20240608 added privacy mode - file is never sent to server</li>
<li>20240518 added frontmatter title, description and tags</li>
<li>20240516 added png -&gt; webp automatic conversion</li>
<li>20240514 some extended syntax (conflicts)</li>
<li>20240514 basic markdown syntax complete</li>
<li>20240513 external links open in new window</li>
<li>20240510 support internal alias links</li>
<li>20240505 support PNG images</li>
<li>20240502 support internal links</li>
</ul>
<h2>roadmap</h2>
<p>in order of priority</p>
<ul>
<li>footnote support</li>
<li>automatic created/modified frontmatter injection</li>
<li>generate sitemap/robots.txt</li>
<li>extended markdown syntax</li>
<li>subdirectory support</li>
<li>1:1 Obsidian-style markdown syntax</li>
<li>Canvas view</li>
<li>Graph view</li>
</ul>
<h2>links</h2>
<ul>
<li><a target="_blank" href="https://obsidian.md/">Obsidian - Sharpen your thinking</a></li>
<li><a target="_blank" href="https://deno.com/deploy">Deno Deploy | Deno</a></li>
<li><a target="_blank" href="https://www.markdownguide.org/cheat-sheet/">Markdown Cheat Sheet | Markdown Guide</a></li>
<li><a target="_blank" href="https://fresh.deno.dev/">Fresh - The next-gen web framework.</a></li>
</ul>

        </div>
      </>
    );
  }
