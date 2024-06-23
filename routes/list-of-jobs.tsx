
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-10","updated":"2024-06-23","title":"Tim Godin - List of Jobs","description":"My next job is going to be my twentieth job, if we roll all the different routes and papers into one 'job' and don't count any of the short term projects I've done over the years.","tags":["timgodin"],"private":"false"}
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

<h1>List of Jobs</h1>
<p>My next job is going to be my twentieth job, if we roll all the different routes and papers into one 'job' and don't count any of the short term projects I've done over the years.</p>
<p>I wonder what it'll be.</p>
<ul>
<li>Paper Carrier</li>
<li>Arena Concessions</li>
<li>Farmers Market</li>
<li>Donut Shop</li>
<li>Call Center Rep</li>
<li>Restaurant Manager</li>
<li>Appliance/Cabinets Sales</li>
<li>Retirement Home Server</li>
<li>Travelling Counter</li>
<li>Retirement Home Cook</li>
<li>Materials Delivery</li>
<li>Appliance Delivery/Install</li>
<li>Railroad Conductor</li>
<li>Industrial Appliance Delivery</li>
<li>Foodbox Delivery</li>
<li>Electronics Recycling</li>
<li>Amazon Warehouse Packer</li>
<li>Instacart</li>
<li>Landscaping Crew Lead</li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
