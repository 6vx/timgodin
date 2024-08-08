
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-08-05","updated":"2024-08-05","title":"Tim Godin - CP Resume","description":"Tim Godin - CP Resume","tags":["timgodin"],"private":"false"}
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

<h1>Tim Godin</h1>
<h2>Calgary, AB</h2>
<h2>825-747-5778</h2>
<h1>Experience</h1>
<h2>Freelance Web Developer</h2>
<h3>Calgary AB - 2016-Now</h3>
<ul>
<li>Deploying and maintaining apps on the Web, Alexa and more using popular cloud services including Amazon Web Services and Google Cloud</li>
<li>Creating advertising and sales materials using Adobe Photoshop</li>
<li>Using Typescript/Javascript and popular frontend frameworks like Svelte and Vue</li>
<li>Building continuous integration and deployment workflows using Github and AWS Amplify for fast project iteration</li>
<li>Moderate experience with HTML/CSS/JS/TS Svelte/CICD/AWS/Git/PowerShell/BaaS</li>
<li>Some experience with Azure/Vue/Deno/Express Bash/Android/Windows</li>
</ul>
<h2>General Manager at FMI Business Group</h2>
<h3>Sarnia ON - 2008-2016</h3>
<ul>
<li>Ensuring prompt, friendly service according to company guidelines.</li>
<li>Directing overall activities and performance of hourly staff.</li>
<li>Handling verbal guest complaints immediately</li>
<li>Monitoring and maintaining adequate food and beverage inventories.</li>
<li>Teaching and enforcing alcohol awareness. Building a positive relationship with local authorities by seeking their assistance in alcohol related issues.</li>
<li>Assuring the compliance with the local, provincial and federal laws, regulations and guidelines.</li>
<li>Ensuring timely product preparation and presentation meets company standards. Ensures product preparation meets sales volume by use of daily line checks.</li>
<li>Ensuring maintenance of restaurant cleanliness and sanitation according to company guidelines and government standards.</li>
<li>Completing daily reports and documents on a timely basis.</li>
<li>Scheduling staff in an effective manner ensuring sales volume and service levels.</li>
<li>Ensuring the adherence of all cash handling procedures.</li>
<li>Directing hiring, assignment, training, motivation, evaluation, promotions, discipline, and termination of restaurant personnel.</li>
<li>Maintaining effective safety and security programs according to company policy and government.</li>
<li>Communicating effectively with other management staff.</li>
<li>Keeping abreast with all relative computer application, forms and spreadsheets.</li>
<li>Completing all other assigned duties and responsibilities.</li>
</ul>
<h2>Truck Driver &amp; Appliance Installer at Docker</h2>
<h3>Kelowna BC - 2017-2022</h3>
<ul>
<li>Safely transporting appliances on 5-ton trucks</li>
<li>Lifting and maneuvering heavy loads up and down tight staircases, confined spaces, construction sites, with various restrictions</li>
<li>Installing and testing appliances quickly and effectively</li>
<li>Keeping detailed notes for cost, liability purposes</li>
<li>Carrying out detailed daily vehicle inspections</li>
<li>Making efforts to build relationships with customers and represent a new local brand</li>
</ul>
<h2>Customer Service at Lowe's</h2>
<h3>Sarnia ON - 2011-2012</h3>
<ul>
<li>Participated in new store setup and grand opening</li>
<li>Sales experience, designing custom cabinetry installations and assembling quotes for customers</li>
<li>Accountable for transactions, sales, inventory maintenance</li>
<li>Operating forklifts, balers, compactors and pump trucks</li>
</ul>
<h1>Education</h1>
<h2>Lambton College</h2>
<h3>Sarnia ON - 2006-2008</h3>
<ul>
<li>1 year Control Process Engineering Technology</li>
<li>1 year Instrumentation Control Engineering Technology</li>
</ul>
<h2>Sarnia Collegiate</h2>
<h3>Sarnia ON - 2001-2005</h3>
<ul>
<li>High School Diploma (OSSD)</li>
</ul>
<h1>Certifications</h1>
<ul>
<li>ProServe (AB)</li>
<li>SmartServe (ON)</li>
<li>National Food Handler's Safety Training Program</li>
<li>Forklift Certification</li>
<li>WHMIS Training</li>
<li>AODA Training</li>
<li>First Aid Training</li>
</ul>
<h1>Skills</h1>
<ul>
<li>Office/Computer Application</li>
<li>Programming</li>
<li>Communication</li>
<li>Sales</li>
</ul>
<h1>Community Involvement</h1>
<ul>
<li>Kidsfest volunteer</li>
<li>Member of Bayer/Lanxess community advisory panel</li>
<li>Poll clerk at municipal elections</li>
</ul>
<h3>References available upon request</h3>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
