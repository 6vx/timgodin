
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-08-05","updated":"2024-08-05","title":"Tim Godin - CP Cover Letter","description":"Tim Godin\nCalgary, AB\ntim_godin@msn.com\n825-747-5778\nAugust 5th 2024","tags":["timgodin"],"private":"false"}
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

<p>Tim Godin
Calgary, AB
tim_godin@msn.com
825-747-5778
August 5th 2024</p>
<p>Dear CPKC Hiring Manager,</p>
<p>I am writing to express my interest in the Conductor position at CPKC. With a strong background in management and logistics, I am confident in my ability to meet the physical and operational demands of this role.</p>
<p>During my time as a General Manager at FMI Business Group, I honed my skills in leadership, communication, and compliance with safety regulations. My experience in directing staff, handling customer complaints, and ensuring adherence to company and government standards has equipped me with the ability to manage high-pressure situations effectively.</p>
<p>As a Truck Driver and Appliance Installer at Docker, I developed a keen ability to handle physically demanding tasks, such as lifting and maneuvering heavy loads, and working in various challenging environments. My commitment to safety, attention to detail, and ability to perform under tight schedules align well with the requirements of the Conductor position.</p>
<p>I am particularly drawn to this role because of my passion for working in dynamic and challenging environments. I am confident that my strong work ethic, ability to multitask, and excellent communication skills will make me a valuable addition to your team.</p>
<p>Thank you for considering my application. I look forward to the opportunity to discuss how my background, skills, and certifications align with the needs of CPKC.</p>
<p>Sincerely,</p>
<p>Tim Godin</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
