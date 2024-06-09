
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-14","updated":"2024-05-14","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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

<h1>Basic Syntax</h1>
<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<h4>Header 4</h4>
<p><strong>bold text</strong></p>
<p><em>italic text</em></p>
<blockquote>
<p>blockquote</p>
</blockquote>
<ol>
<li>first ordered</li>
<li>second ordered</li>
<li>third ordered</li>
</ol>
<ul>
<li>first unordered</li>
<li>second unordered</li>
<li>third unordered</li>
</ul>
<p><code>code blocks look like this</code></p>
<hr />
<h1>Extended Syntax (WIP)</h1>
<p><s>Strikethrough</s></p>
<p><span class="highlight">Highlight words</span> in sentences.</p>
<h2>wip</h2>
<p>H~2~O Subscript</p>
<p>X^2^ Superscript</p>

        <span class="timestamps">Created: {data.created}</span><br />
        <span class="timestamps">Updated: {data.updated}</span>
        </div>
      </>
    );
  }
