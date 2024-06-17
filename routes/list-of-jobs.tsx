
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-10","updated":"2024-06-17","title":"List of Jobs","description":"My next job is going to be my twentieth job, if we roll all the different routes and papers into one 'job'. I wonder what it'll be.","tags":["timgodin"],"private":"false"}
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

<ul>
<li>Paper Carrier</li>
<li>Arena Concessions Attendant</li>
<li>Spring Roll stand at Farmers Market</li>
<li>Global Donuts at Bayside Mall</li>
<li>Geek Squad Call Center</li>
<li>Pizza Hut</li>
<li>Lowe's Hardware</li>
<li>Retirement Home Server Sarnia</li>
<li>WIZ Counting in Cranbrook</li>
<li>Retirement Home Cook Kelowna</li>
<li>Kelowna Express</li>
<li>Docker Transport</li>
<li>CN Rail Conductor</li>
<li>LM Industrial Appliance Delivery</li>
<li>Foodbox Delivery</li>
<li>Electronics Recycling Association</li>
<li>Amazon Warehouse</li>
<li>Instacart</li>
<li>Good Neighbour</li>
</ul>
<p>My next job is going to be my twentieth job, if we roll all the different routes and papers into one 'job'. I wonder what it'll be.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
