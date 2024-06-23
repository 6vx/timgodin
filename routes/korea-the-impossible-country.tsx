
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","date":20220817,"title":"Korea the Impossible Country","author":"Daniel Tudor","rating":0,"created":"2024-06-23","updated":"2022-08-31","description":"15 - Found the shamanism history/description pretty interesting. Reminiscent of what I'd heard about Japanese spirituality. Shamans would worship their own selection of spirits. Rocks and trees and etc all contain a spirit, so there are plenty to go around, and listing known gods quickly results in ten thousand entries or so.","tags":["timgodin"],"private":"false"}
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

<p>Great primer on Korea. I knew the country was an outlier in so many ways, but... <em>damn.</em></p>
<p>15 - Found the shamanism history/description pretty interesting. Reminiscent of what I'd heard about Japanese spirituality. Shamans would worship their own selection of spirits. Rocks and trees and etc all contain a spirit, so there are plenty to go around, and listing known gods quickly results in ten thousand entries or so.</p>
<p>25 - Brief history of the rise was interesting. Samsung et al received huge advantages locally while they reformed to become competitive internationally. This came in the form of huge low interest government loans (the government remained in control of the banks) and embargos/super-high-tariffs on anything that was being produced locally.</p>
<p>Koreans would eventually get access to international firms' products, for example the American iPhone did pretty well in 2010. However, by then, the Galaxy S series was already an impressive device in it's own right and very competitive.</p>
<p>45 - corruption is intertwined with the culture. It is common to treat fellow Koreans irrationally because there is a level at which everyone is part of the same family. Everyone is striving together to avoid the (very recent and remembered) past repeating itself.</p>
<p>Because there are few natural resources, Korea is relying entirely on exports. To be successful in school and then business is the only way to succeed.</p>
<p>The pressure is extreme, and so suicide rates are extremely high.</p>
<p>55 - The politics chapter is truly striking.</p>
<p>Korea was on a fast track from zero to hyper democratic capitalist society. In fifty years it was competitive with the likes of Canada and behind only much larger countries only because of population and size.</p>
<p>So it makes sense that it would zoom past the USA on the timeline.</p>
<p>Trump in 2016 seems like an inevitability considering the patterns in the late 2000's Korea.</p>
<p>They'd had a disgruntled '20-40' population ready to shake things up before we did. They had political podcasts coming online and taking swaths of Mindshare while we were still getting used to 'Stuff you should know' and other popcorn casts.</p>
<p>Murder stories hadn't even showed up in the Americas yet and already the podcasts were shaping Korean culture all the way to the top.</p>
<p>And this book is from 2011.</p>
<p>When I visited Seoul in 2019 and saw the unrest, the demonstrations, I wasn't looking at an echo of america, I was looking at the progenitor.</p>
<p>Remarkable. What else can we see about our future by watching this uniquely accelerated experiment?</p>
<p>65 - I noticed couples dressing in &quot;couples style&quot; while I was in Korea and thought it was adorable and dorky.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
