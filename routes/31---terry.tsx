
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-10-20","updated":"2024-10-20","title":"Tim Godin - 31 - Terry","description":"Practise - Kurast Docks","tags":["timgodin"],"private":"false"}
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

<h1>Terry</h1>
<p>Practise - Kurast Docks</p>
<img src="31.webp" alt="31.webp" />
<table>
<thead>
<tr>
<th>Religion</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Indigenous Animism</strong></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Founding Myth</th>
</tr>
</thead>
<tbody>
<tr>
<td>The belief that spirits inhabit the natural world, with rituals to honor and maintain harmony with these spiritual forces.</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Integral Object</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>The Totem</strong> (an object representing spiritual connection to animals or ancestors)</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Shorn Card</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>The Totem Core</strong>: A hovering, shifting totem composed of nanomaterials, constantly reconfiguring to represent spiritual entities in both physical and digital forms, symbolizing a bridge between worlds.</td>
</tr>
</tbody>
</table>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
