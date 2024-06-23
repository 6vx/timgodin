
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","author":"Douglas Murray","rating":4,"date":20220625,"title":"The Strange Death of Europe","created":"2024-06-23","updated":"2022-07-12","description":"11% - not sure who this is for. Author seems intent to show a growing 'problem' but hasn't made me conscious of what the repercussions actually are yet.","tags":["timgodin"],"private":"false"}
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

<p>11% - not sure who this is for. Author seems intent to show a growing 'problem' but hasn't made me conscious of what the repercussions actually are yet.</p>
<p>13% - immigration doesn't necessarily increase GDP per head, even if it increases GDP. Seems the main thrust is dispelling misinformation surrounding migration. Popculture paints a rosy picture but like anything there are at least two sides worth looking at.</p>
<p>14% - Re: aging workforce vs bringing in immigrants - Perhaps some people will see working longer in a society they know preferable to dying in one in which they feel like a stranger.</p>
<p>23% - It almost seems as though one world government is the only way forward. Is our society the one to grasp this ideal? How powerful must a group be to do such a thing? Until we see humanity as one, friction is inevitable. The high moral ground I am lucky to be born on is so gut wrenchingly worth defending but also wrought of the same taking that I am hearing criticized in The Other. How can I blame another for wanting to take? Is that the only path to the moral highground; to take and take until standing there? Is there not a way to share, invite, deliver; instead of watching this ground erode into a lower, but wider, way of being? Surely the only purpose of this book is to answer this question.</p>
<p>27% - seems sort of funny to think that there are arguments here about female genital mutilation and child rape in northern England and that's sort of a dig at eastern values, meanwhile in the west the priests are... well, you know.</p>
<p>30% - identity politics and the real contemplation of the problem appears to be starting here</p>
<p>33% - the 'great replacement' is not of worker but of culture</p>
<p>41% - I'm still left without a strong sense of thesis which is frustrating. Tards be tardin' is all I've seen so far, and I knew that already and it is true of all populations.</p>
<p>43% - first thing I didn't know finally, stats about Muslim on jew crime rates. Sad. Still waiting for a purpose to this book but now that I have been delivered new and important information I guess it has at least had utility.</p>
<p>50% Canada has arrived. Good to hear Aussies got the shame spiral too.</p>
<p>52% - this is the crux. And cuts both ways. &quot;what is focused on tells you as much as the thing itself&quot;</p>
<p>82% - given up hope on a positive note to this book. It's just stuff I kinda already knew.</p>
<p>100 - Not bad. Kinda sad. Good to be aware of the facts instead of just letting divisive rhetoric from either 'side' rule the day.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
