
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-12","updated":"2024-05-12","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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

<h1>MAID Expansion</h1>
<h2>EXPAND MAID NOW</h2>
<h3>Expanded Eligibility</h3>
<p>Eligibility requirements will be dropped and all consenting or unconscious participants registered and processed at the most expedient rate possible.</p>
<h3>Separate From Healthcare</h3>
<p>MAID will be made available outside of the healthcare system, which will no longer be serving people over the age of 65.</p>
<h3>Automatic Enrollment</h3>
<p>Repeat violent offenders, people over 65 and people who talk in theaters will be automatically enrolled in MAID.</p>
<h3>Expanded Availability</h3>
<p>Underground Railroad 2.0: International applications are approved without stipulation with immediate disposal available at</p>
<ul>
<li>YYZ</li>
<li>YYC</li>
<li>YVR</li>
</ul>

        <span class="timestamps">Created: {data.created}</span><br>
        <span class="timestamps">Updated: {data.updated}</span>
        </div>
      </>
    );
  }
