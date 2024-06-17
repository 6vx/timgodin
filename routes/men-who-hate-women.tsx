
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"description":"A collection of my notes from reading Men Who Hate Women.","title":"Men Who Hate Women - From Incels to Pickup Artists","tags":["book"],"isbn-13":"978-1728236247","year":"2020","author":"Laura Bates","created":"2024-06-17","updated":"2024-06-17","private":"false"}
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

<h1>Men Who Hate Women</h1>
<img src="menwhohatewomen.webp" alt="menwhohatewomen.webp" />
<h2>review</h2>
<p>Helps to understand the breadth of some of the circles online that center on misogyny.</p>
<p>The author appears to be credible and unfortunately locked in a cycle of becoming more prominent and thereby receiving more and more online hate.</p>
<p>She reads this hate into the record in her audiobook. She reads them in bed at night. She has tried taking threats to the police. It is an unending noise in the background of her life.</p>
<p>So she's apparently a badass. Though I think that comes with a risk of self-radicalizing: she admits in a post-audiobook-interview that the title is intentionally inflammatory. Is she touching the dark side?</p>
<p>Laura recommends increased mental health support, men talking to men to spread awareness in a positive way, and an overhaul to the way social media and journalism interact with these sorts of issues.</p>
<p>I thought the book was informative and shed light on facets of the 'man-o-sphere' that I hadn't gleaned from being a casual observer of these goings-ons.</p>
<p>A lot of the characters are deplorable witting or unwitting donuts that I already despised naturally, but a fuller picture of the tangled web of misogyny was a worthwhile upload.</p>
<h2>notes</h2>
<ul>
<li>2020, estimate of the number of incels in America in the 'tens of thousands'</li>
<li>reporting on incel violence doesn't adequately highlight it's misogynistic roots</li>
<li>2020, pick up artist (PUA) communities revolve around people with huge followings (400k+) on major social media platforms</li>
<li>PUAs would sell out courses with high price tags in many countries</li>
<li>&quot;it's easy to see how some young guy looking for tips for flirting and with little education might wander into one of these communities&quot;</li>
<li>Men Go Their Own Way (MGTOW) communities boast large numbers with less obviously caustic ideas, but deep rooted misogyny found in its message boards/members</li>
<li>Men's Rights Activists (MRAs) cast as needlessly inflammatory contrarians with hate as their motivator</li>
<li>MRAs cite fake or disproven statistics without shame as long as it furthers their emotional agenda</li>
<li>Anonymous trolls shitpost feminists relentlessly</li>
<li>gamergate was lame</li>
<li>Milo something rose to power harnessing troll armies</li>
<li>Daily Mail changed headlines on female authors work and reveled in the 'feedback' (hate from trolls/engagement) they were getting</li>
<li>social media is identified as a root cause of this problem</li>
<li>social media companies lack incentives to change the status quo</li>
<li>1/3 of women have suffered harassment (seems low...?)</li>
<li>domestic violence is terrorism</li>
<li>terrorism is domestic violence at larger scale</li>
<li>there is correlation between a domestic violence abuser and a mass murderer (pulse nightclub shooting)</li>
<li>not calling domestic violence terrorism normalizes it</li>
<li>figureheads in mainstream are using dog whistles to forward ideas into 'manosphere'</li>
<li>Trump enables these groups by promoting their talking points and interacting with intermediaries like Bannon</li>
<li>a line can be drawn from President Trump down through Bannon and pundits to extremists in these communities</li>
<li>the whitewashed message is consumed easily, leaving a niggling worry in regular men that can later be poked towards radicalization</li>
<li>people are online way too much, especially kids</li>
<li>What do White Supremacy and Islamism have in common? Hating women.</li>
<li>the infrastructure of the manosphere and etc needs to be countered by a positive message</li>
<li>men are more at risk of violence from other men than women are (toxic masculinity hurts everyone)</li>
<li>journalists and media need to take more responsibility for these issues</li>
<li>definition of toxic masculinity</li>
</ul>
<blockquote>
<p>showing strength and hiding weakness</p>
<p>dominating/controlling all relationships
never admit vulnerability or emotion</p>
<p>stoically bottling up fear or distress</p>
<p>avoiding support or communication at all costs</p>
<p>assuming household role of head provider/protector</p>
<p>treating family as vulnerable extensions of self instead of support</p>
<p>prioritizing strength and sexual triumph over intellect, emotional intelligence and friendship</p>
<p>secretive self flagellation and self-medication over admission of failure</p>
<p>career over parenting</p>
<p>society over self</p>
</blockquote>
<ul>
<li>when people say 'toxic masculinity' what people hear is 'toxic men'</li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
