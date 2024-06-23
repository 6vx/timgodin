
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","title":"The Ethical Slut: A Practical Guide to Polyamory, Open Relationships, and Other Adventures","author":"Dossie Easton","date":20220904,"rating":0,"isbn-13":"9780399579660","year":"1997","created":"2024-06-23","updated":"2024-06-23","description":"18","tags":["timgodin"],"private":"false"}
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

<h1>The Ethical Slut: A Practical Guide to Polyamory, Open Relationships, and Other Adventures</h1>
<h2>by Dossie Easton</h2>
<p>18</p>
<blockquote>
<p>If you pretend that you have no needs, for sex, for affection, for emotional support, you are lying to yourself, and you will wind up trying to get your needs met by indirect methods that won’t work very well.</p>
</blockquote>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
