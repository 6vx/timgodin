
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"private":true,"created":"2024-07-08","updated":"2024-07-07","title":"Tim Godin - New Relationship","description":"I agree and apologize because you are absolutely right that my actions have not adequately matched my words. I am deeply troubled that you feel I've been breadcrumbing and manipulating you and I want you to know it is not intentional or with malice. I am, as I always do, going to assume the same about you. I don't think you're intentionally manipulating me, or doing it with ill intent.","tags":["timgodin"]}
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

<h1>Private</h1><p>This page has been set to private</p>
        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
