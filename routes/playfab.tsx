
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-06-17","updated":"2024-06-17","title":"Tim Godin - PlayFab","description":"I started a separate repository for what I think will be the first of many &quot;boiler-plate-y&quot; components I need to break apart for my svelte project.","tags":["timgodin"],"private":"false"}
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

<h1>PlayFab</h1>
<h2>Playfab + Svelte</h2>
<p>I started a separate repository for what I think will be the first of many &quot;boiler-plate-y&quot; components I need to break apart for my svelte project.</p>
<p>I don't know why but PlayFab doesn't seem popular. Perhaps it's because it's purpose is not so glamourous. Even though it's pretty sick. Svelte does seem popular, maybe in part due to being a front end framework and right in everyone's face.</p>
<p>I don't think I'll be the only one who wants to see examples of how to do all these things.</p>
<p>When I was initially converting the JavaScript example into something usable and figuring out how to cache the session tokens between page loads, I ended up with a bit of a monolithic layout script and I didn't like it.</p>
<p>So separate bits, I'll try to keep my own styling out of it and just have a functional X Y and Z for all the major methods. If somebody wants to see an example of something they can just look at/copy the repo.</p>
<h2>Looking Ahead</h2>
<p>I want to look at these:</p>
<ul>
<li><a target="_blank" href="https://docs.microsoft.com/en-gb/gaming/playfab/features/automation/actions-rules/quickstart">PlayFab Action Rules</a></li>
<li><a target="_blank" href="https://developer.paypal.com/docs/checkout/">Paypal Docs</a></li>
<li><a target="_blank" href="https://docs.microsoft.com/en-us/gaming/playfab/features/commerce/economy/non-receipt-payment-processing">Payment Processing</a></li>
</ul>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
