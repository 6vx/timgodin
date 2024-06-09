
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-06-08","updated":"2024-06-05","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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

<h1>Web Application Development Packages</h1>
<h2>1. Prototype Development (Starting at $500)</h2>
<ul>
<li>Basic functional layout</li>
<li>Up to 3 pages or sections</li>
<li>Standard UI components</li>
</ul>
<h2>2. Full Web Application Development (Starting at $3,000)</h2>
<ul>
<li>Custom design tailored to your brand</li>
<li>Responsive layout for desktop and mobile</li>
<li>Basic SEO optimization</li>
<li>User testing and feedback integration</li>
</ul>
<h1>Additional Services</h1>
<ol>
<li><strong>Advanced SEO Optimization</strong>: $500
<ul>
<li>Improve search engine visibility and ranking.</li>
</ul>
</li>
<li><strong>E-commerce Integration</strong>: $1,000
<ul>
<li>Seamlessly integrate e-commerce functionality into your web app.</li>
</ul>
</li>
<li><strong>Content Management System (CMS)</strong>: $750
<ul>
<li>Set up a user-friendly CMS for easy content management.</li>
</ul>
</li>
<li><strong>Ongoing Maintenance &amp; Support</strong>: $100/month
<ul>
<li>Ensure your web app runs smoothly and stays up-to-date.</li>
</ul>
</li>
</ol>
<p><strong>Note</strong>: Prices are indicative and may vary based on the complexity and specific requirements of each project. A detailed quote will be provided after an initial consultation.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
