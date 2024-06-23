
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","author":"Michael Pollan","rating":2,"title":"Caffeine: How Coffee and Tea Created the Modern World","date":20220803,"description":"Exploring the history science and cultural impact of caffeine.","isbn-13":"9781713566090","created":"2024-06-23","updated":"2024-06-23","tags":["timgodin"],"private":"false"}
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

<h1>Caffeine: How Coffee and Tea Created the Modern World</h1>
<h2>by Michael Pollan</h2>
<p>This guy sounds like he's never done actual drugs, but I know he has. I imagine he'd have an incredibly difficult time quitting tobacco or something.</p>
<p>Didn't learn much. Cute story and quick read I guess, but wouldn't recommend.</p>
<p>13% - nasa spent our money getting spiders high. Odd.</p>
<p>19% - caffeine/coffee is mostly from 1650. Tea longer but not as common</p>
<p>42% - hypothesis : Caffeine promotes spotlight consciousness and diminishes lantern/creative</p>
<p>58% - caffeine doesn't so much wind you up as it interrupts the winding down. Dopamine too obviously.</p>
<p>70% - in order for the English mind to be sharpened by caffeine the Chinese mind had to be clouded by opium</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
