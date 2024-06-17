
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-06-17","updated":"2024-06-17","title":"Paratroopers Prayer","description":"I'm asking You God, to give me what You have left.\nGive me those things which others never ask of You.\nI don't ask You for rest, or tranquility.\nNot that of the spirit, the body, or the mind.\nI don't ask You for wealth, or success, or even health.\nAll those things are asked of You so much Lord,\nthat you can't have any left to give.\nGive me instead Lord what You have left.\nGive me what others don't want.\nI want uncertainty and doubt.\nI want torment and battle.\nAnd I ask that You give them to me now and forever Lord,\nso I can be sure to always have them,\nbecause I won't always have the strength to ask again.\nBut give me also the courage, the energy,\nand the spirit to face them.\nI ask You these things Lord,\nbecause I can't ask them of myself(*).","tags":["timgodin"],"private":"false"}
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

<h1>Paratrooper's Prayer</h1>
<p><strong><a target="_blank" href="https://en.wikipedia.org/wiki/the_paratrooper%27s_prayer">La Prière du Para</a> (The Paratrooper's Prayer)</strong> is a <a target="_blank" href="https://en.wikipedia.org/wiki/french_literature" title="French literature">French</a> <a target="_blank" href="https://en.wikipedia.org/wiki/poetry" title="Poetry">poem</a> found in the possession of the presumed <a target="_blank" href="https://en.wikipedia.org/wiki/author" title="Author">author</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/aspirant" title="Aspirant">Aspirant</a> (<a target="_blank" href="https://en.wikipedia.org/wiki/lieutenant" title="Lieutenant">Brevet-Lieutenant</a>) <a target="_blank" href="https://en.wikipedia.org/wiki/andr%c3%a9_zirnheld" title="André Zirnheld">André Zirnheld</a>, upon his death in <a target="_blank" href="https://en.wikipedia.org/wiki/libya" title="Libya">Libya</a> on July 27, 1942.</p>
<h2>The Prayer of the Paratrooper</h2>
<h3>(Translation by Robert Petersen)</h3>
<p>I'm asking You God, to give me what You have left.
Give me those things which others never ask of You.
I don't ask You for rest, or tranquility.
Not that of the spirit, the body, or the mind.
I don't ask You for wealth, or success, or even health.
All those things are asked of You so much Lord,
that you can't have any left to give.
Give me instead Lord what You have left.
Give me what others don't want.
I want uncertainty and doubt.
I want torment and battle.
And I ask that You give them to me now and forever Lord,
so I can be sure to always have them,
because I won't always have the strength to ask again.
But give me also the courage, the energy,
and the spirit to face them.
I ask You these things Lord,
because I can't ask them of myself(*).</p>
<p>(*) The French text says rather:
For only You can grant
What can come only from myself.</p>
<h2>La Prière du Para</h2>
<p>Je m'adresse à vous, mon Dieu, car vous donnez
Ce qu'on ne peut obtenir que de soi
Donnez-moi, mon Dieu, ce qui vous reste
Donnez-moi ce qu'on ne vous demande jamais.</p>
<p>Je ne vous demande pas le repos
Ni la tranquillité
Ni celle de l'âme, ni celle du corps.
Je ne vous demande pas la richesse
Ni le succès, ni même la santé.</p>
<p>Tout ça, mon Dieu, on vous le demande tellement
Que vous ne devez plus en avoir.
Donnez-moi, mon Dieu, ce qui vous reste
Donnez-moi ce que l'on vous refuse.</p>
<p>Je veux l'insécurité et l'inquiétude.
Je veux la tourmente et la bagarre
Et que vous me les donniez, mon Dieu, définitivement.
Que je sois sûr de les avoir toujours
Car je n'aurai pas toujours le courage
De vous les demander.</p>
<p>Donnez-moi, mon Dieu, ce qui vous reste.
Donnez-moi ce dont les autres ne veulent pas.
Mais donnez-moi aussi le courage
Et la force et la foi.
Car vous seul donnez, mon Dieu,
Ce que l'on ne peut attendre que de soi.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
