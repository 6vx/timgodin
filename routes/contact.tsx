
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"color":"red","description":"Reach out to me about your project!","title":"Contact Information","tags":["email","linkedIn"],"created":"2024-04-26","updated":"2024-08-03","private":"false"}
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

<h1>Contact</h1>
<h2>email</h2>
<p><a href="mailto:tim_godin@msn.com">tim_godin@msn.com</a></p>
<h2>linkedin</h2>
<p><a target="_blank" href="https://www.linkedin.com/in/godini/">Tim Godin | LinkedIn</a></p>
<h2>github</h2>
<p><a target="_blank" href="https://github.com/6vx">Tim Godin | GitHub</a></p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
