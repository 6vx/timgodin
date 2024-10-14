
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-10-10","updated":"2024-10-10","title":"Tim Godin - Protein Comparison","description":"ppp - protein per package\nppd - protein per dollar","tags":["timgodin"],"private":"false"}
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

<p>ppp - protein per package
ppd - protein per dollar</p>
<p><a target="_blank" href="https://docs.google.com/spreadsheets/d/1_nalknshjwrk-68zc_u8l22emcq3djgj0z3kmomktyo/edit?pli=1&amp;gid=0#gid=0">Protein cost - Google Sheets</a></p>
<p><a target="_blank" href="https://imgur.com/ive-been-trying-to-afford-to-eat-enough-protein-so-i-made-excel-spreadsheet-comparing-most-common-protein-sources-by-cost-per-gram-of-protein-grams-of-protein-per-100-calories-i-figured-id-share-case-might-be-useful-to-people-here-t-e0andd4">I've been trying to afford to eat enough protein, so I made an excel spreadsheet comparing the most common protein sources by cost per gram of protein and grams of protein per 100 calories. I figured I'd share it in case it might be useful to people here t - Imgur</a></p>
<p>t&amp;t classic tofu 700g 2.74 88g serving with 6g protein
ppp 47.7
ppd 17.4</p>
<p>wm sunrise extra firm 350g 3.47 85g serving with 14g protein
ppp 57.64
ppd 16.61</p>
<p>wm chicken breast 800g 10 100g serving with 22g protein
ppp 176
ppd 17.6</p>
<p>wm protein powder 914g 30 47g serving with 30g protein
ppp 583.4
ppd 19.4</p>
<p>wm potato 10lb/4536g bag is 6$ 100g serving has 2.6g protein
ppp 117.936
ppd 15.6</p>
<p>wm white rice 2000g is 5$ 45g serving has 3g protein</p>
<p>wm red bean is 3$ for 900g 35g serving 8g protein
ppp 205
ppd 68.5</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
