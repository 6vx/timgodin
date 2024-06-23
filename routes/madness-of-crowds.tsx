
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","date":20220701,"author":"Douglas Murray","rating":5,"title":"The Madness of Crowds","created":"2024-06-23","updated":"2022-07-16","description":"A lot of positions I assumed were grounded in facts are far from it, and I'm glad I have a better understanding of some of the divisive topics people keep screaming at each other about.","tags":["timgodin"],"private":"false"}
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

<p>A lot of positions I assumed were grounded in facts are far from it, and I'm glad I have a better understanding of some of the divisive topics people keep screaming at each other about.</p>
<blockquote>
<p>The one overwhelming problem with this attitude is that it sacrifices truth in the pursuit of a political goal.</p>
</blockquote>
<p>This is kinda the crux for me. We aren't having nuanced discussions about truths for most of these topics.</p>
<blockquote>
<p>There seems to be a deliberate effort – on specific occasions – to push images of couples who are none of the things that have been asked for.</p>
</blockquote>
<p>The google images example is pretty chilling and difficult to argue with.</p>
<blockquote>
<p>An Indian may become distinctly British but a white British man could not become an Indian</p>
</blockquote>
<p>Another interesting difference. Or as Daniel Tosh might note: how diverse do you think the Chinese Olympic diving team is?</p>
<blockquote>
<p>speech itself has become unimportant. What matters above everything is the racial and other identity of the speaker. Their identity can either condemn them or get them off.</p>
</blockquote>
<p>Identity politics are pretty gross.</p>
<blockquote>
<p>The question becomes about whether what one person or even a lot of people believe to be true about themselves has to be accepted as true by other people or not.</p>
</blockquote>
<p>Very central to why this is so incendiary.</p>
<blockquote>
<p>If the whole universe was a coincidence, ‘Why do so much so drastically for the sake of changing myself?’</p>
</blockquote>
<p>I've kind've always felt this way. My 'identity' is meaningless and arbitrary to me.</p>
<blockquote>
<p>We see oppression where it doesn’t exist and have no idea how to respond to it.</p>
</blockquote>
<blockquote>
<p>Feminist ideology has never dealt honestly with the role of the mother in human life. Its portrayal of history as male oppression and female victimage is a gross distortion of the facts</p>
</blockquote>
<blockquote>
<p>Rather than demonstrating an excess of oppression in our societies, the abundance of such claims may in fact be revealing a great shortage of it. If people were so oppressed would they have the time or inclination to listen to every person who felt the need to publicize that a talk by a novelist at a literary festival had upset them, or that it was intolerable to be sold a burrito by someone of the wrong ethnicity?</p>
</blockquote>
<blockquote>
<p>Victimhood rather than stoicism or heroism has become something eagerly publicized, even sought after, in our culture. To be a victim is in some way to have won, or at least to have got a head start in the great oppression race of life.
At the root of this curious development is one of the most important and mistaken judgements of the social justice movements: that oppressed people (or people who can claim to be oppressed) are in some way better than others, that there is some decency, purity or goodness which comes from being part of such a group.
In fact, suffering in and of itself does not make someone a better person. A gay, female, black or trans person may be as dishonest, deceitful and rude as anybody else.</p>
</blockquote>
<blockquote>
<p>Let us be dissatisfied until that day when nobody will shout, “White Power!”, when nobody will shout, “Black Power!”, but everybody will talk about God’s power and human power</p>
</blockquote>
<p>MLK preaching color blindness, seemingly more prescient now than ever.</p>
<blockquote>
<p>minimizing difference is not the same as pretending difference does not exist. To assume that sex, sexuality and skin colour mean nothing would be ridiculous. But to assume that they mean everything will be fatal.</p>
</blockquote>
<p>A compelling thesis. One I already shared and held deeply. Again, though, it's nice to have the issues more fleshed out and backed by evidence, history and deep thought.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
