
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","title":"When My Name Was Keoko","author":"Linda Sue Park","date":20220804,"rating":4,"created":"2024-06-23","updated":"2024-06-23","description":"Trying to complement the language learning journey with some culture and history. Here goes nothin'.","tags":["timgodin"],"private":"false"}
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

<h1>When My Name Was Keoko</h1>
<h2>by Linda Sue Park</h2>
<p>Trying to complement the language learning journey with some culture and history. Here goes nothin'.</p>
<p>1 - appears to be based on a true story told through two first person accounts brother and sister about the occupation of Korea by Japan in 1940</p>
<p>21 - this perspective is fascinating because I undoubtedly met many of these people while I was in Korea without realizing it.</p>
<p>The perspective of these children in 1940... These are the elders still walking around today. These are the 80-100 year olds playing Go in the game room or smoking in front of the shop their heir now runs.</p>
<p>I wish I'd read this before going.</p>
<p>More than once &quot;the war in europe&quot; has been mentioned, and even Hitler by name. However the Japanese occupation and all that entails is so much more imminent to these people that even something so momentous is kind of slipping by as a footnote.</p>
<p>26 - spoke too soon. Pearl harbor is apparently quite an event. And the Japanese are feeding anti American propaganda to the school children, its some of their first contacts with film projectors/movies.</p>
<p>46 - alright so now this is specifically about WWII, the Korean point of view. The children aren't just being fed self hating racism and anti West propaganda now; they're being used as slave labor and fashioning makeshift defenses. Boys are building air strip, girls are making spears and being taught that &quot;3 children bayonetting one American invader will be honoured greatly by the emperor&quot;</p>
<p>Well written so far, as I approach half way. Moving at a good clip, characters are all unique and rounded and easily distinguished despite most having two names; one Japanese and one Korean, as the Japanese forced them to do.</p>
<p>No wonder there is anti Japanese sentiment still visible today. The children of that era aren't dead yet.</p>
<p>73 - the cultural implications were pretty rough, essentially forced illiteracy for a generation, starvation</p>
<p>100 - happy ending. Nice touch. And why not, if the important details have been communicated and it's sorta fictional. I'm happy with it. Makes me interested in finding out more about Korean history.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
