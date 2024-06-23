
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","date":20190101,"rating":5,"author":"Brene Brown","title":"Daring Greatly","year":"2012","description":"Embracing vulnerability and courage to live a wholehearted life.","isbn-13":"978-1592408412","created":"2024-06-23","updated":"2024-06-23","tags":["timgodin"],"private":"false"}
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

<h1>Daring Greatly</h1>
<h2>by Brene Brown</h2>
<p>8% - author describing what she's about. Narcissism is permeating culture. We are moving from a we/us culture to an I/me culture.</p>
<p>10 - never enough. scarcity mindset pervades culture. Never enough sleep. Never skinny enough. Never successful enough.</p>
<p>11 -  we feel contempt when others are less capable or willing to mask feelings, suck it up, and soldier on... Rather than respecting and appreciated the courage and daring behind vulnerability, we let our fear and discomfort become judgement and criticism... To love without knowing if it will end is vulnerability... To put ideas out in writing is to be vulnerable.. it is to invite disaster. ...</p>
<p>The danger is that... We start to think of feeling as weakness.</p>
<p>12 - vulnerability sounds like truth and feels like courage</p>
<p>14 - I want to experience your vulnerability but I don't want to be vulnerable.</p>
<p>Vulnerability is courage in you and inadequacy in me.</p>
<p>I'm drawn to your vulnerability but repelled by mine.</p>
<p>Give me the courage to show up and let myself be seen.</p>
<p>What's worth doing even if I fail?</p>
<p>Ask someone who knows you:</p>
<p>What do I do when I'm emotionally exposed?</p>
<p>How do I behave when I'm feeling very uncomfortable and uncertain?</p>
<p>How willing am I to take emotional risks?</p>
<p>If you choose not to decide, you still have made a choice.</p>
<p>15 - Chicken or the egg: we need to feel trust to be vulnerable and we need to be vulnerable in order to trust.</p>
<p>17 - most experiences of betrayal happen slowly one marble at a time. Disengagement takes marbles out of the jar. I didn't make enough effort on US even if I was always there for HER. My marbles stayed at the same level.</p>
<p>18 - until we can receive with an open heart, we are never really giving with an open heart. When we attach judgement to receiving help, we knowingly or unknowingly attach judgement to giving help.</p>
<p>We all need help.</p>
<p>Vulnerability begets vulnerability; courage is contagious</p>
<p>1112 - my wife and daughters-the ones you signed all those books for-theyd rather see me die on top of my white horse than watch me fall off. You say you want us to be vulnerable and real, but c'mon. You can't stand it. It makes you sick to see us like that.&quot;</p>
<p>Woman: &quot;Holy shit. I am the patriarchy.&quot;</p>
<p>26 I am not what happened to me, I am what I choose to become</p>
<p>31 - fml men shame is killing me. Location 1257.</p>
<p>33 - 1315 - screaming child. We have a choice in that moment. Roll your eyes and confirm that you are better than her. OR. Give her your best &quot;I've been there, sister&quot; smile. You risk getting a &quot;mind your own business&quot; but it's worth it.</p>
<p>1335 - am I good enough?</p>
<p>1343 - when you want to be with us in that way it makes us feel more worthy</p>
<p>1352 - re: porn --- for five bucks and five minutes, you think you're getting what you need, and you don't have to risk rejection.</p>
<p>1360 - there is no intimacy without vulnerability.</p>
<p>1391 - we can only love others as much as we love ourselves</p>
<p>1438 - the expectations and messages that fuel shame keep us from fully realizing who we are as people</p>
<p>1458 - once you become real you can't be ugly except to people who don't understand</p>
<p>1625 - when we turn every opportunity to feel joy into a test drive for despair, we actually diminish our resilience... Every time we allow ourselves to lean into joy and give into those moments, we build resilience and we cultivate hope.</p>
<p>From my life: &quot;I can't help but feel... entitled&quot;</p>
<p>&quot;dude,we know, we all pulled the golden ticket.&quot;</p>
<p>1640 - &quot;I'm fine, mama, I was just taking a picture memory.&quot;</p>
<p>&quot;what's that mean?&quot;</p>
<p>&quot;oh, a picture memory is a picture I take in my mind when I'm really happy. I close my eyes and I take a picture, so when I'm feeling sad or scared or lonely, I can look at my picture memories.&quot;</p>
<p>1673 - perfectionism is not the key to success-it hampers achievement- correlated with depression, anxiety, addiction and life paralysis or missed opportunities. The fear of failing, making mistakes, not meeting expectations, and being criticized keeps us outside the arena where healthy competition and striving unfolds</p>
<p>1723 - don't let the perfect be the enemy of the good. The Twenty minute walk that I do is better than the four Mile run that I don't do.</p>
<p>(reminds me of big magic: done is better than good)</p>
<p>1803 - feeling disconnected is normal, but when coupled with the shame of believing that we're disconnected because we're not worthy, it creates pain</p>
<p>1819 - I wasn't raised with the skills and emotional practise needed to &quot;lean into discomfort&quot; so over time I basically became a take-the-edge-off-aholic. But they don't have meetings for that.</p>
<p>1832 - really feel your feelings. Stay mindful of your numbing behaviours. Learn how to lean into the discomfort of your hard emotions.</p>
<p>1894 - where is the line between pleasure or comfort and numbing?</p>
<p>Numbing devices are Shadow comforts.</p>
<p>When we are anxious, disconnected, vulnerable, alone and feeling helpless, the booze and food and work and endless hours online feel like comfort, but in reality they're only casting their long shadows over our lives.</p>
<p>You can eat a piece of chocolate as a holy water of sweetness - a real comfort - or you can cram an entire chocolate bar into your mouth without even tasting it in a frantic attempt to soothe yourself - a shadow comfort.</p>
<p>You can talk on message board for half an hour and be energized by community and ready to go back to work, or you can chat on message boards because you're avoiding talking to your partner about how angry he or she made you feel last night.</p>
<p>It's not what you do, it's why you do it.</p>
<p>There are no checklists or norms to identify your Shadow comforts or other destructive numbing behaviour. This requires self examination and reflection... Listen with great care if the people you love say they are concerned about you engaging in these behaviours.</p>
<p>Sitting down to watch one of my favourite shows is pleasure. Flipping through channels for an hour is numbing.</p>
<p>1944 - nail salon girl, working on woman who uses her cell phone the whole time &quot;they don't see us as people.&quot;</p>
<p>drive thru girl &quot;thank you. Sometimes they don't even see us. It's humiliating.&quot;</p>
<p>When we treat people as objects, we dehumanize them. We do something really terrible to their souls and to our own.</p>
<p>Stop dehumanizing people and start looking them in the eye when we speak to them. If we don't have the energy to do that, we should stay at home.</p>
<p>2098 - sharing with strangers to teach is healthy/effective. Sharing just to work through something is unethical and inappropriate.</p>
<p>2163 - we don't need to avoid vulnerability, we just need to be present, pay attention and move forward</p>
<p>2194 - when we stop caring what people think we lose our capacity for connection. When we become defined by what people thing, we lose our willingness to be vulnerable. It's a tightrope walk.</p>
<p>2299 - who we are matters immeasurably more than what we know or who we want to be</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
