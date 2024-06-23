
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","date":20210101,"author":"Ron Dreher","title":"Live not by Lies","rating":0,"created":"2024-06-23","updated":"2022-07-12","description":"Heard the title multiple times in succession, wanted to know context.","tags":["timgodin"],"private":"false"}
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

<h1>DNF</h1>
<h2>Why</h2>
<p>Heard the title multiple times in succession, wanted to know context.</p>
<h2>10</h2>
<p>Reading this immediately frustrated me. It reminds me that I don't know much about Mao / Cultural Revolution. It's like a gnawing hole of information that I run into time and time again.</p>
<p>DNF - Might come back, didn't seem like it was for me.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
