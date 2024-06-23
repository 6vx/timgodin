
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","date":20220716,"author":"Gabriel Wyner","title":"Fluent Forever, How to Learn Any Language Fast and Never Forget It","rating":0,"created":"2024-06-23","updated":"2024-06-23","description":"12 - it seems like I'm about to receive a mnemonics lesson tuned specifically to language. Which sounds great to me. I'm already using Major system with some success so I'm down for more.","tags":["timgodin"],"private":"false"}
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

<h1>Fluent Forever</h1>
<h2>by Gabriel Wyner</h2>
<p>12 - it seems like I'm about to receive a mnemonics lesson tuned specifically to language. Which sounds great to me. I'm already using Major system with some success so I'm down for more.</p>
<p>~20 - focus on frequency dictionary. differentiating between similar sounds early is important to avoid 'broken words'</p>
<p>25 - being able to read IPA is valuable</p>
<p>35 - back chain through the letters of a difficult-to-pronounce word</p>
<p>41 - some resources</p>
<ul>
<li>Forvo.com</li>
<li>Rhinospike</li>
<li>Wikipedia IPA (language)</li>
<li>http://www.fsi-language-courses.org</li>
<li>Italki.com</li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
