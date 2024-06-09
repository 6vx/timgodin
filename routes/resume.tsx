
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-26","updated":"2024-05-26","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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
<h3><a target="_blank" href="https://github.com/6vx">GITHUB</a></h3>
<h3><a target="_blank" href="https://www.linkedin.com/in/godini/">LINKEDIN</a></h3>
<h1>Experience</h1>
<h2>Freelance Webdev</h2>
<h3>Calgary AB - 2016-Now</h3>
<ul>
<li>Deploying and maintaining apps on the Web, Alexa and more using popular cloud services including Amazon Web Services and Google Cloud</li>
<li>Creating advertising and sales materials using Adobe Photoshop</li>
<li>Using Typescript/Javascript and popular frontend frameworks like Svelte and Vue</li>
<li>Building continuous integration and deployment workflows using Github and AWS Amplify for fast project iteration</li>
<li>Moderate experience with HTML/CSS/JS/TS Svelte/CICD/AWS/Git/PowerShell/BaaS</li>
<li>Some experience with Azure/Vue/Deno/Express Bash/Android/Windows</li>
</ul>
<h2>Conductor at CN Rail</h2>
<h3>Jasper AB - 2018-2019</h3>
<ul>
<li>Ensuring compliance with all train orders, signals, railroad rules and regulations related to safety and operations</li>
<li>Providing and receiving various forms of oral and printed instructions concerning the movement and placement of rail cars</li>
<li>Assembling/dismantling trains in the rail yard, and picking up/setting off rail cars en-route</li>
<li>Observing, interpreting, and relaying signals to ensure safe train and locomotive movement</li>
<li>Operating track switches to change locomotive and rail car routes</li>
<li>Inspecting the condition of a train and equipment</li>
<li>Making effective decisions when in unfamiliar locations or emergency situations</li>
<li>Communicating effectively with the Rail Traffic Control centre, other train crews and other departments on a regular basis via handheld radio</li>
<li>Working a flexible schedule with regular and predictable attendance, in line with the 24/7 railroading environment (includes night, weekend, holiday work hours, some overtime, and being away from home for extended periods of time)</li>
<li>Pushing, pulling, lifting and carrying up to 90 pounds</li>
<li>Working outdoors in varying weather and environmental conditions</li>
<li>Operating various devices on rail cars and locomotives, such as uncoupling levers and handbrakes</li>
<li>Climbing on and off ladders of moving rail cars</li>
<li>Grasping and holding objects while riding the side of a train</li>
<li>Walking for frequent extended periods</li>
<li>Bending, stooping, squatting, and kneeling frequently</li>
<li>Meeting medical fitness requirements for the position, including those established by the Railway Association of Canada, such as the ability to recognize and distinguish between the colors of signals</li>
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
<h2>Appliance Installer at Docker</h2>
<h3>Kelowna BC - 2017-2018</h3>
<ul>
<li>Safely transporting appliances on 5-ton trucks</li>
<li>Lifting and maneuvering heavy loads up and down tight staircases, confined spaces, construction sites, with various restrictions</li>
<li>Installing and testing appliances quickly and effectively</li>
<li>Keeping detailed notes for cost, liability purposes</li>
</ul>
<h2>Driver at Kelowna Express</h2>
<h3>Kelowna BC - 2016-2017</h3>
<ul>
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
<h2>Inventory Specialist at WIS</h2>
<h3>Cranbrook BC - 2016</h3>
<h2>Inbound Sales at Geek Squad/NCO</h2>
<h3>Sarnia ON - 2007-2009</h3>
<h2>Warehouse Associate at Zellers</h2>
<h3>Sarnia ON - 2005-2006</h3>
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
        <br />
        <p class="timestamps">Created: {data.created}</p>
        <p class="timestamps">Updated: {data.updated}</p>
        </div>
      </>
    );
  }
