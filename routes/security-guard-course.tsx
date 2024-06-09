
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-05-13","updated":"2024-05-16","title":"Tim Godin","description":"Tim Godin","tags":["timgodin"],"private":"false"}
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

<h1>Sec Notes</h1>
<h1>Unit 1</h1>
<h2>Outline</h2>
<ol>
<li>Describe the various roles and responsibilities of security professionals</li>
<li>Identify the circumstances and explain how security professionals protect persons</li>
<li>Identify circumstances and explain how security professionals protect property</li>
<li>Define the process through which security professionals are licensed in the province of Alberta</li>
<li>State the main provisions of the Security Services and Investigators Act</li>
<li>Describe the main provisions of the Security Services and Investigators Regulation</li>
<li>State the responsibilities and restrictions of a security professional under the Act</li>
<li>Describe the Complaints process as identified under the Security Services and Investigator Act</li>
<li>Define and demonstrate professional conduct for security professionals</li>
<li>Define and demonstrate professional appearance and deportment for security professionals</li>
</ol>
<h1>Unit 2</h1>
<h2>Outline</h2>
<ol>
<li>Describe how the Criminal Code of Canada and the Canadian Charter of Rights and Freedoms relate to the work of a security professional</li>
<li>Identify the legal authorities, rights, and limitations of an on-duty security professional</li>
<li>Discuss and provide examples of a citizen's power of arrest under the Criminal Code</li>
<li>Identify the types of offenses in the Criminal Code of Canada and provide examples of each</li>
<li>Discuss and provide examples of the following:
<ol>
<li>Use of force in the line of duty</li>
<li>Provisions for search and seizure in the performance of duties</li>
<li>Legal powers of security professionals in situations of trespassing or vandalism</li>
</ol>
</li>
<li>Describe the consequences when a security professional exceeds their authority</li>
<li>Identify and explain additional legislation with respect to security professionals, including:
<ol>
<li>Gaming and Liquor Act and Regulation</li>
<li>Trespass to Premises Act</li>
<li>Petty Trespass Act</li>
<li>Employment Standards Code and Regulation</li>
</ol>
</li>
</ol>
<p>Section 8 contains search and seizure
Section 9 contains detained/imprisonment</p>
<p>Section 494 says that you have to see the offense yourself to make an arrest.</p>
<p>Arrest without a warrant requires...
Identify yourself
tell them why you're arresting
make sure they understand
go to a private area, optionally advise rights,
allow to make a phone call
advise they are not obliged to talk
call the police</p>
<p>Search with consent most cases
Power to search only if you saw them take something or they have a weapon</p>
<h3>Petty Trespass Act</h3>
<p>Section 2(1) Petty Trespass Act</p>
<ul>
<li>prohibition</li>
<li>without permission</li>
<li>doesn't leave immediately</li>
<li>is guilty of an offense
Section 2.1, Petty Trespass Act</li>
<li>notice</li>
<li>orally, writing, signage (no trespassing)</li>
<li>no tearing down signs</li>
</ul>
<p>trespassing is only enacted after they have been requested to leave</p>
<p>354 cc - posession of property obtained by crime</p>
<p>430 mischief can be destroying, carelessness, interrupts, obstructs, interferes</p>
<p>430(2) mischief that endangers someones life is big bad</p>
<p>breaking car window = mischief</p>
<p>public mischief is a hybrid dual offence</p>
<p>tamper computer data may be mischief</p>
<p>section 25 cc use of force</p>
<p>avoid using force</p>
<p>25-2 executing a sentence</p>
<p>25-3 when not protected</p>
<p>25-4 protected</p>
<p>26 excessive use of force</p>
<p>cops
criminally liable
operational policies
provincial acts and regs
social acceptability</p>
<p>27 cc use of force to prevent commision of offence</p>
<p>ProServe 25$ and ProTect Free to be in Gaming Liquor Venues</p>
<h1>Unit 3</h1>
<h2>Basic Security Procedures</h2>
<ol>
<li>Explain and demonstrate the observation skills utilized by a security professional</li>
<li>Explain and demonstrate the various techniques used to:
<ul>
<li>control access to sites or venues, and areas within</li>
<li>carry out surveillance</li>
<li>control crowds</li>
<li>describe the signs and behaviours associated with substance absue</li>
<li>identify drug paraphernalia</li>
<li>control traffic in emergency and non-emergency situations</li>
</ul>
</li>
<li>Describe shift-related responsibilities, such as:
<ul>
<li>interpreting shift posting orders</li>
<li>starting a new shift</li>
<li>transferring responsibility at the end of a shift</li>
</ul>
</li>
<li>Explain best practices when working with a partner</li>
<li>Explain and provide examples of an appropriate use of force response for a security professional</li>
</ol>
<p>Observation Activity</p>
<p>batteries
glasses
chocolate
cell phone
keyfob
keys
screwdriver
gum
coins
business cards
headphones
ketchup
coupon
paper clips
rings</p>
<p>15/24</p>
<p>CYMBLS</p>
<p>Color
Year
Make
Body
License
Special</p>
<p>Recalling</p>
<p>Concentrate Associate Repeat</p>
<p>Excited Delirium occurs when restricted</p>
<p>Positional Asphyxia - try to avoid face down, try to avoid chest pressure</p>
<p>left side is preferred, seated more so</p>
<h1>Unit 4</h1>
<h2>Communication for Security Professionals</h2>
<ol>
<li>Describe effective verbal and non-verbal communication strategies for security professionals</li>
<li>Identify and demonstrate methods of communication which are free from bias discrimination or harassment</li>
<li>Identify strategies for effective verbal and non-verbal communication in situations where communication barriers exist</li>
<li>Explain and demonstrate verbal and non-verbal communication skills when interacting with individuals who show signs of being:
<ul>
<li>uncooperative</li>
<li>violent</li>
<li>impaired</li>
</ul>
</li>
<li>Identify and develop strategies to control your personal triggers in situations of conflict or anxiety</li>
<li>Conduct an effective interview</li>
</ol>
<p>Cycle of Conflict
break the cycle</p>

        <span class="timestamps">Created: {data.created}</span><br />
        <span class="timestamps">Updated: {data.updated}</span>
        </div>
      </>
    );
  }
