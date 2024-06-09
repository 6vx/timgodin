
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"title":"Web Dev for Hire","description":"Experienced Typescript Developer available for short-term projects","tags":["seo","dev","developer","Tim","Godin","webdev"],"created":"2024-05-13","updated":"2024-06-05","private":"false"}
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
<p>Example <a href="web-app-development-services">Web App Development Services</a>.</p>
<p>Feel free to <a href="contact">reach out</a> if you have any questions or need further details.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
