
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-12","updated":"2024-05-14","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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

<blockquote>
<p>One Planet, One People, One Government</p>
</blockquote>
<h2>Unite the World</h2>
<p>Canada should lead the way in uniting earth by joining the United States and Europe.</p>
<h2>Combine North America</h2>
<p>Join the US as the next 12 states (nine provinces and three territories, assuming enactment of the <a href="give-quebec-back">Give Quebec Back</a> plan).</p>
<p>24 new Senators and many congresspeople will disrupt the makeup of Congress; Canadians and Americans can cherry-pick the best of both systems and cultures and then proceed in it's next aim.</p>
<h2>Consolidate Power</h2>
<p>10,000 years of peace will be administered to Earth while humans become an interplanetary species.</p>

        <p class="timestamps">Created: {data.created}</p>
        <p class="timestamps">Updated: {data.updated}</p>
        </div>
      </>
    );
  }
