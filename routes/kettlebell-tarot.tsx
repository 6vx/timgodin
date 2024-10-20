
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"private":true,"created":"2024-10-05","updated":"2024-10-20","title":"Tim Godin - Kettlebell Tarot","description":"46 - Cups 1\nMessy, Crystalline Passage, open\nnew baby or relationship, proposal, marriage\na frozen corpse, yeolda, y'ol da',\nI was just proposed, baby on the way, when I had this messy death\nmuch later, the child grows up and they found 'y'ol da' and opened the ice\nREVERSED: to realize that instead of finding a being of love and future and possibility\nthey've instead found rot, emptiness, they've wasted their emotions and blocked their creativity\nby wasting so much time at the crystalline passage.\n47 - Cups 2\nMac/Mika, Halls of Pain, close\nromantic love, partnership, proposal, marriage\n48 - Cups 3\nMav, Glacial Trail, arrive\nfriendship, celebrations, a circle of support\n49 - Cups 4\nMab, Frozen Tundra, depart\napathy, feeling unfulfilled, surprise gifts\n50 - Cups 5\nLashiel, The Ancient's Way, enter\nloss, regret, grief, feeling abandoned or unloved\n51 - Cups 6\nLore, Worldstone Keep, exit\nnostalgia, gifts, innocence, reunions\n52 - Cups 7\nLanny, Hatchery, wait, gidalida\ngeeky darling leaping dachshund\ntoo many choices, commitment issues","tags":["timgodin"]}
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

<h1>Private</h1><p>This page has been set to private</p>
        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
