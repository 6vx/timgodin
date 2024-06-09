
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"tags":["frontmatter","seo","tags","tagging"],"published":"20240514","title":"FrontMatter","description":"A page for testing frontmatter.","public":true,"created":"2024-05-14","updated":"2024-05-14","private":"false"}
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

<h1>Frontmatter</h1>
<p>How does this look on your end, My Dearest Deno?</p>
<h2>integrate frontmatter</h2>
<p>I'd like to use Fresh component to consume props generated by frontmatter.</p>
<p>How can I accomplish that?</p>

        <br />
        <br />
        <p class="timestamps">Created: {data.created}</p>
        <p class="timestamps">Updated: {data.updated}</p>
        </div>
      </>
    );
  }
