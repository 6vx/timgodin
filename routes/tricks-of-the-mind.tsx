
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","date":20220803,"title":"Tricks of the Mind","author":"Derren Brown","rating":4,"created":"2024-06-23","updated":"2022-08-03","description":"Pretty dense book I actually read years ago. It's jam packed with practical knowledge - if these sorts of things can be called practical.","tags":["timgodin"],"private":"false"}
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

<p>Pretty dense book I actually read years ago. It's jam packed with practical knowledge - if these sorts of things can be called practical.</p>
<p>Would I recommend it? For sure. But I recognize it's not for everyone and can be quite dry. Enthusiasts only.</p>
<p>Adding it because I've yet again jumped into it to reference Derren's particular implementation of the major system. It can be found at 29.1%.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
