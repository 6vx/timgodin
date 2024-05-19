
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"Web Dev for Hire","description":"Experienced Typescript Developer available for short-term projects","tags":["seo","dev","developer","Tim","Godin","webdev"]}
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
<h1>Web App Development Services</h1>
<h2>Open to Work</h2>
<p>Currently accepting short-term projects.</p>
<h2>Pricing</h2>
<p>$50/hour</p>
<p><a href="contact">Contact</a> me to discuss your project specifics.</p>
<h1>Experience</h1>
<p>As a TypeScript-focused developer, I have additional experience in the following areas:</p>
<ol>
<li><strong>Front-End Development:</strong>
<ul>
<li><strong>HTML, CSS, JS</strong>: Proficient in building responsive and interactive web interfaces.</li>
<li><strong>Svelte, Vue, Fresh</strong>: Familiar with modern front-end frameworks.</li>
<li><strong>Standard UI Components</strong>: Creating consistent and user-friendly UI elements.</li>
</ul>
</li>
<li><strong>Cloud Platforms:</strong>
<ul>
<li><strong>AWS, Google Cloud, Azure</strong>: Experienced in deploying and managing applications on cloud platforms.</li>
</ul>
</li>
<li><strong>Voice Assistants and Mobile Apps:</strong>
<ul>
<li><strong>Alexa, Android</strong>: Developed voice-based applications and mobile apps.</li>
</ul>
</li>
<li><strong>DevOps and Version Control:</strong>
<ul>
<li><strong>CICD, Git, Powershell, Bash</strong>: Skilled in continuous integration, deployment, and version control.</li>
</ul>
</li>
</ol>
<h1>Creative Design and Multimedia</h1>
<p>In addition to development, I’m also proficient in creating sales and professional materials:</p>
<ol>
<li><strong>Graphic Design:</strong>
<ul>
<li><strong>Photoshop</strong>: Skilled in creating visually appealing graphics and designs.</li>
<li><strong>DaVinci Resolve, Cap-cut</strong>: Video editing and post-production.</li>
</ul>
</li>
<li><strong>AI-Generated Art:</strong>
<ul>
<li><strong>Dall-E</strong>: Familiar with using AI-generated art for creative projects.</li>
</ul>
</li>
</ol>
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
<p>Feel free to <a href="contact">reach out</a> if you have any questions or need further details.</p>

        </div>
      </>
    );
  }
