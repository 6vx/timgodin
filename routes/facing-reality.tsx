
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","title":"Facing Reality: Two Truths About Race In America","author":"Charles Murray","date":20220720,"rating":3,"description":"Ignoring racial differences is hindering progress on racial equality.","isbn-13":"9781641771979","created":"2024-06-23","updated":"2024-06-23","tags":["timgodin"],"private":"false"}
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

<h1>Facing Reality: Two Truths About Race In America</h1>
<h2>by Charles Murray</h2>
<p>Wanted to get a primer on the topic without reading back to the early nineties, this summary served fine.</p>
<p>None of the science or anything is particularly controversial to me. I became aware of the guy through the question of speech and university campuses becoming increasingly inhospitable to free thought.</p>
<p>My go-along-get-along gut would've said that the worst that could happen wouldn't be <em>too</em> bad. The author seems to have a more dire outlook.</p>
<p>The book is light and tight and meant to pursuade a reader who hasn't thought about it too much; what the issues have looked like over the last fifty years, and what increasing polarization might give rise to.</p>
<p>Nothing incendiary. Nothing irrational. Even handed... maybe an actual plea for help, in the end.</p>
<p>I think the message is simply &quot;don't stand by and let people go unchallenged when saying things you know aren't true.&quot; Sounds easy at first, until you understand the breadth of the problem.</p>
<h2>5</h2>
<blockquote>
<p>a philosophical wedge had been driven between those who wanted strict adherence to the ideal of treating people as individuals, equal before the law, and those who advocated group-based policies as a way to achieve social justice. The Civil Rights Act of 1964 had added a caveat to the creed.</p>
</blockquote>
<p>Understood to be necessary at the time, it's hard to argue that this hasn't overstayed its welcome. The ideal should stand on its own.</p>
<p>Something that was obviously good fifty years ago has morphed into something obviously bad.</p>
<blockquote>
<p>The twenty-first century saw the growth of a new ideology that repudiated the American creed altogether. It began in academia as intersectionality and critical race theory conjoined with a bastardized vision of socialism. By 2016, it exerted significant influence within the left wing of the Democratic Party. As I write, the new ideology still goes by several names. “Woke” originated within the African American community. “Critical race theory” and “anti-racism” are the most widely used terms. But there’s one label that covers it all: identity politics.</p>
</blockquote>
<blockquote>
<p>The core premise of identity politics is that individuals are inescapably defined by the groups into which they were born – principally (but not exclusively) by race and sex – and that this understanding must shape our politics.</p>
</blockquote>
<blockquote>
<p>I had underestimated the intolerance of dissent that went with the movement, and how effectively that intolerance could stifle opposition from moderate liberals.</p>
</blockquote>
<p>I think we all did.</p>
<blockquote>
<p>It is appropriate for the government to play racial favorites, to dispense favors and penalties according to the group to which individuals belong. My view is that this position has proved to be toxic. It is based on the premise that all groups are equal in the ways that shape economic, social, and political outcomes for groups and that therefore all differences in group outcomes are artificial and indefensible. That premise is factually wrong. Hence this book about race differences in cognitive ability and criminal behavior.</p>
</blockquote>
<p>Obviously it's a shame that it's come to this point where a guy who's already been crucified for telling the truth for twenty something years still has to do this.</p>
<blockquote>
<p>The more intractable the group differences, the more imperative the moral obligation.</p>
</blockquote>
<h2>27</h2>
<blockquote>
<p>The information about race differences in mean cognitive ability is useful only as background information for thinking about issues at a societal level.</p>
</blockquote>
<p>As he's gone out of his way to point out in every outing the guy just wants to help. I'm sure this part will be missed.</p>
<blockquote>
<p>To dismiss the differences in mean test scores that I have described as a problem that we know how to fix if we try hard enough is a triumph of hope over a very great deal of experience.</p>
</blockquote>
<p>If we don't look at problems with clarity and truth it's going to be harder to solve them.</p>
<blockquote>
<p>If it weren’t true, you would have heard about it long ago.</p>
</blockquote>
<blockquote>
<p>In their minds, they don’t need evidence of bias; the existence of lower mean scores for Africans and Latins is in itself irrefutable evidence of bias because everyone knows there are no race differences in intelligence. This is argued with all the passion and conviction that true believers bring to their evangelism. It does not reflect reality.</p>
</blockquote>
<h2>58</h2>
<blockquote>
<p>The American job market systemically discriminates in favor of racial minorities other than Asians.</p>
</blockquote>
<p>The unfortunate result nobody wants to admit.</p>
<h2>64</h2>
<blockquote>
<p>What about the most outrageous and the most viral of all the videos, the ones that show police killing defenseless suspects? Those police are guilty of criminal acts that deserve the severest punishment. But to conflate them with errors in decisions that had to be made in seconds in the face of lethal threats is a libel on police. They deserve better of the people they serve.</p>
</blockquote>
<blockquote>
<p>In any random encounter between two individuals of different races, whatever those races may be, the chance of any sort of violence is so small that any race differences in the probabilities of violence can be ignored.
The differences in the group rates of violence are real and large, and it is human nature, not racism, to take precautions accordingly.</p>
</blockquote>
<blockquote>
<p>The new ideologues of the far left are akin to the Red Guards of Mao’s Great Proletarian Cultural Revolution of the 1960s, and they are coming for all of us.</p>
</blockquote>
<blockquote>
<p>But in the eyes of the new Red Guards, such research is bound to be pernicious. After all, everyone knows that race is a social construct. Gender is a social construct. Socioeconomic class is a function of privilege. Research that says otherwise is pseudoscience.</p>
</blockquote>
<blockquote>
<p>They have strident passions but brittle convictions.</p>
</blockquote>
<blockquote>
<p>Those problems are exacerbated by individual racism. The racism is not systemic.</p>
</blockquote>
<h2>72</h2>
<blockquote>
<p>The combination of acquisitiveness and loyalty to the interests of one’s own group (be it defined by ethnicity or class) shaped human governments for the subsequent ten thousand years. The natural form of government was hierarchical, run by a dominant group that arranged affairs to its benefit and oppressed outsiders to a lesser or greater degree, usually greater. The rare attempts to try any other form of government were unstable and short-lived. The American founders’ idealism lay in their belief that an alternative was possible. Their genius was to design a system with multiple safeguards against the forces that had made previous attempts self-destruct.</p>
</blockquote>
<blockquote>
<p>The introduction of identity politics into that carefully crafted constitutional system does not simply distract us from warding off the jungle. It is the jungle, the primitive sense of “us against them” pressing in upon the garden. It not only permits but insists that the power of the state be used to reward favored groups at the expense of everyone else. That view of power is the defining characteristic of the natural form of government that humankind endured until the miracle at Philadelphia in 1787.</p>
</blockquote>
<blockquote>
<p>Why resist generalizing? After all, even if you’re technically “making a mistake” with your generalization, it’s on the side of generosity and optimism. How could that be bad? The answer is that if it’s okay for you to do it, it’s okay for everyone else to do it. That way lies unrestrained racism.</p>
</blockquote>
<blockquote>
<p>Advocating double standards for people on top and everyone else is a bad idea.</p>
</blockquote>
<blockquote>
<p>Once the state is granted the power to engineer equal outcomes by dispensing opportunities preferentially and freedoms selectively, it will be one group versus another, “us” against “them.” The garden will give way to jungle.</p>
</blockquote>
<h2>75</h2>
<blockquote>
<p>Ordinarily, you can’t insult people into agreeing with you, but White guilt is a real thing. In the summer of 2020, many White college students and young adults agreed that they had sinned, even though they hadn’t realized it until now, and joined in Black Lives Matter marches. The New York Times, the Washington Post, NPR, PBS, CBS, NBC, ABC, CNN, and MSNBC gave sympathetic coverage to the protests and, to varying degrees, downplayed the riots and looting.
Meanwhile, many middle-class and working-class Whites have not been insulted into agreement. They’re just insulted, and to their minds unfairly insulted. I’m not talking about White nationalists and White supremacists their numbers are relatively small. My concern is the extremely large majority of middle-class and working-class Whites who don’t think of themselves as racists and have not behaved as racists.</p>
</blockquote>
<blockquote>
<p>Still other tens of millions live in large cities where racial problems have been real, but they see themselves as having treated Black and Latino neighbors and coworkers with friendship and respect. They believe that everyone has a God-given right to be treated equally. Now all of them are being told that they are privileged and racist, and they are asking on what grounds. They are living ordinary lives, with average incomes, working hard to make ends meet. They can’t see what “White privilege” they have ever enjoyed. Some are fed up and ready to push back.</p>
</blockquote>
<blockquote>
<p>How widespread might the backlash be? It is one of those topics that the elite media has been unable to investigate more than superficially. But it seems beyond dispute that a growing number of Whites are disposed to adopt identity politics – to become a racial interest group in the same way that Blacks and Latinos are racial interest groups.
The question asks itself: If a minority consisting of 13 percent of the population can generate as much political energy and solidarity as America’s Blacks have, what happens when a large proportion of the 60 percent of the population that is White begins to use the same playbook?</p>
</blockquote>
<h2>78</h2>
<p>After all the doom and gloom comes a solution:</p>
<blockquote>
<p>Eliminate all forms of government-sponsored preferential treatment by race</p>
</blockquote>
<blockquote>
<p>Limit antidiscrimination law and its enforcement to behaviors that would be unacceptable regardless of race</p>
</blockquote>
<blockquote>
<p>Some laws and regulations will still need to be expressed differentially because of sex or physical disabilities. But when it comes to race, all Americans are to be treated impartially under the government’s administrative rules and to have equal standing before the law.</p>
</blockquote>
<p>And a question about why we are on the current path.</p>
<blockquote>
<p>why are we allowing the voices that say we should treat people as groups to drown out everyone else? Why are we allowing the few who sneer at the melting pot and the goal of colorblindness to shout down the many who still believe in these ideals? Why are so many of us afraid to say that treating people as individuals who are equal under the law is intrinsic to a free society?</p>
</blockquote>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
