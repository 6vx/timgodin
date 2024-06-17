
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-06-17","updated":"2024-06-17","title":"Unitroupe","description":"I visualize a human in space, preparing to jump down into the fight for Mars.","tags":["timgodin"],"private":"false"}
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

<h1>Unitroupe</h1>
<h2>foreword</h2>
<p>This is a version of <a href="paratroopers-prayer">Paratrooper's Prayer</a> that I stripped down for my own uses.</p>
<p>I visualize a human in space, preparing to jump down into the fight for Mars.</p>
<p>Almost certain death awaits them, yet their purpose is noble and their resolve steel.</p>
<h2>Gazing Down Upon Mars</h2>
<p>I ask the storm for what is left.</p>
<p>Give me those things which others never ask for.</p>
<p>I don't ask for rest, or tranquility.</p>
<p>I don't ask for wealth, success, or even health.</p>
<p>Those things are asked for so much,</p>
<p>there can't be any left to give.</p>
<p>Give me instead what is left.</p>
<p>Give me what others don't want.</p>
<p>I want uncertainty and doubt.</p>
<p>I want torment and battle.</p>
<p>And I ask for them now and forever,</p>
<p>so I can be sure to always have them,</p>
<p>because I won't always have the strength to ask again.</p>
<p>Give me also the time, the energy,</p>
<p>and the spirit to face them.</p>
<p>I ask for these things,</p>
<p>because I am the storm</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
