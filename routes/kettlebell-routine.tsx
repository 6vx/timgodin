
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-07-04","updated":"2024-07-04","title":"Tim Godin - Kettlebell Routine","description":"Tim Godin - Kettlebell Routine","tags":["timgodin"],"private":"false"}
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

<h1>Kettlebell Routine</h1>
<h2>day 1 UPPER BODY</h2>
<ul>
<li>[ ] PUSHUPS</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] GORILLA ROWS</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] DOUBLE CLEANS</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] PUSH PRESS</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] CURLS</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] TRICEPS EXTENSIONS</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
</ul>
<h2>day 2 LOWER BODY</h2>
<ul>
<li>[ ] SQUATS</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] LUNGES</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] SINGLE LEG DEADLIFT</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] SWINGS</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
</ul>
<h2>day 4 FULL BODY</h2>
<ul>
<li>[ ] TURKISH GET UP</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] CLEAN AND PRESS</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] SNATCH</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] THRUSTERS</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
</ul>
<h2>day 5 CORE STABILITY</h2>
<ul>
<li>[ ] WINDMILLS</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] RUSSIAN TWISTS</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] PLANK PULL THROUGH</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
<li>[ ] HALO</li>
<li>[ ] 2</li>
<li>[ ] 3</li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
