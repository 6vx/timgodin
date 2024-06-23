
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"type":"book","author":"Jordan Peterson","rating":4,"title":"12 Rules for Life, An Antidote to Chaos","year":"2018","description":"Practical guidance on taking responsibility and finding meaning through psychology philosophy and mythology.","isbn-13":"97819884833976","created":"2024-06-23","updated":"2024-06-23","tags":["timgodin"],"private":"false"}
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

<h1>12 Rules for Life, An Antidote to Chaos</h1>
<h2>by Jordan Peterson</h2>
<h2>thoughts</h2>
<p>I read this specifically because I had a very negative view of Jordan Peterson without having read any of his work.</p>
<p>After reading it I discovered him to be a relatively benign.</p>
<p>Even if I took nothing away from this text besides &quot;he's just some guy&quot; I think that's worth it. It challenges me to think twice before accepting the 'popular' view on someone.</p>
<p>For example; is Ben Shapiro really as much of a dweeb as social media would have me believe? I have a sinking feeling he's not, even if I wouldn't agree with him on most things.</p>
<p>He's probably just some guy.</p>
<h2>notes</h2>
<p>17</p>
<blockquote>
<p>the line dividing good and evil cuts through the heart of every human being</p>
</blockquote>
<blockquote>
<p>Maybe your misery is the weapon you brandish in your hatred for those who rose upward while you waited and sank.</p>
</blockquote>
<p>On nihilism:</p>
<blockquote>
<p>Talking yourself into irrelevance is not a profound critique of Being. It’s a cheap trick of the rational mind.</p>
</blockquote>
<p>26</p>
<blockquote>
<p>Do you ask yourself what you want? Do you negotiate fairly with yourself? Or are you a tyrant, with yourself as slave?</p>
</blockquote>
<blockquote>
<p>When you have something to say, silence is a lie—and tyranny feeds on lies. When should you push back against oppression, despite the danger? When you start nursing secret fantasies of revenge; when your life is being poisoned and your imagination fills with the wish to devour and destroy.</p>
</blockquote>
<p>27</p>
<blockquote>
<p>Perhaps happiness is always to be found in the journey uphill, and not in the fleeting sense of satisfaction awaiting at the next peak.</p>
</blockquote>
<p>30, realistic self improvement</p>
<blockquote>
<p>“What is it that is bothering me?” “Is that something I could fix?” and “Would I actually be willing to fix it?” If you find that the answer is “no,” to any or all of the questions, then look elsewhere. Aim lower.</p>
</blockquote>
<blockquote>
<p>Do this every day, for a while. Then do it for the rest of your life</p>
</blockquote>
<blockquote>
<p>Don’t waste time questioning how you know that what you’re doing is wrong, if you are certain that it is.</p>
</blockquote>
<blockquote>
<p>Say only those things that make you strong. Do only those things that you could speak of with honour.</p>
</blockquote>
<blockquote>
<p>Don’t blame capitalism, the radical left, or the iniquity of your enemies.</p>
</blockquote>
<blockquote>
<p>You will then be left with the inevitable bare tragedies of life, but they will no longer be compounded with bitterness and deceit.</p>
</blockquote>
<p>47</p>
<blockquote>
<p>The fact that automobiles pollute only becomes a problem of sufficient magnitude to attract public attention when the far worse problems that the internal combustion engine solves has vanished from view. People stricken with poverty don’t care about carbon dioxide. It’s not precisely that CO2 levels are irrelevant. It’s that they’re irrelevant when you’re working yourself to death, starving, scraping a bare living from the stony, unyielding, thorn-and-thistle-infested ground. It’s that they’re irrelevant until after the tractor is invented and hundreds of millions stop starving.</p>
</blockquote>
<p>51, putting 'making the world a better place' at the top of your value heirarchy</p>
<blockquote>
<p>It’s payment of the debt you owe for the insane and horrible miracle of your existence.</p>
</blockquote>
<p>53</p>
<blockquote>
<p>This kind of oversimplification and falsification is particularly typical of ideologues. They adopt a single axiom: government is bad, immigration is bad, capitalism is bad, patriarchy is bad. Then they filter and screen their experiences and insist ever more narrowly that everything can be explained by that axiom. They believe, narcissistically, underneath all that bad theory, that the world could be put right, if only they held the controls.</p>
</blockquote>
<blockquote>
<p>If you say no to your boss, or your spouse, or your mother, when it needs to be said, then you transform yourself into someone who can say no when it needs to be said. If you say yes when no needs to be said, however, you transform yourself into someone who can only say yes, even when it is very clearly time to say no</p>
</blockquote>
<blockquote>
<p>If you betray yourself, if you say untrue things, if you act out a lie, you weaken your character.</p>
</blockquote>
<blockquote>
<p>And then you will find yourself doing terrible things.</p>
</blockquote>
<blockquote>
<p>A vision of the future, the desirable future, is necessary.</p>
</blockquote>
<blockquote>
<p>“Did what I want happen? No. Then my aim or my methods were wrong. I still have something to learn.” That is the voice of authenticity.</p>
</blockquote>
<blockquote>
<p>“Did what I want happen? No. Then the world is unfair. People are jealous, and too stupid to understand. It is the fault of something or someone else.” That is the voice of inauthenticity. It is not too far from there to “they should be stopped” or “they must be hurt” or “they must be destroyed.” Whenever you hear about something incomprehensibly brutal, such ideas have manifested themselves.</p>
</blockquote>
<blockquote>
<p>deceitful, inauthentic individual existence is the precursor to social totalitarianism.</p>
</blockquote>
<p>55</p>
<blockquote>
<p>It is deceit that makes people miserable beyond what they can bear. It is deceit that fills human souls with resentment and vengefulness.</p>
</blockquote>
<blockquote>
<p>Thus, you should never sacrifice what you could be for what you are. You should never give up the better that resides within for the security you already have—and certainly not when you have already caught a glimpse, an undeniable glimpse, of something beyond.</p>
</blockquote>
<blockquote>
<p>Some of them are truly alone in the world. There are far more people like that than you think. You don’t meet them, because they are alone.</p>
</blockquote>
<p>62 sex differences</p>
<blockquote>
<p>Men are often accused of wanting to “fix things” too early on in a discussion. This frustrates men, who like to solve problems and to do it efficiently and who are in fact called upon frequently by women for precisely that purpose.</p>
</blockquote>
<blockquote>
<p>Women are often intent on formulating the problem when they are discussing something, and they need to be listened to—even questioned—to help ensure clarity in the formulation. Then, whatever problem is left, if any, can be helpfully solved.</p>
</blockquote>
<p>66 relationships</p>
<blockquote>
<p>instead of saying, in the agreeable, lazy and cowardly way: “It’s OK. It’s not worth fighting about.” There is little, in a marriage, that is so little that it is not worth fighting about.</p>
</blockquote>
<blockquote>
<p>Do you really want the same petty annoyance tormenting you every single day of your marriage, for the decades of its existence?</p>
</blockquote>
<p>69</p>
<blockquote>
<p>Say what you mean, so that you can find out what you mean. Act out what you say, so you can find out what happens. Then pay attention. Note your errors. Articulate them. Strive to correct them. That is how you discover the meaning of your life.</p>
</blockquote>
<p>71 men's issues</p>
<blockquote>
<p>It’s worse, I think, for young men. As privileged beneficiaries of the patriarchy, their accomplishments are considered unearned. As possible adherents of rape culture, they’re sexually suspect. Their ambitions make them plunderers of the planet. They’re not welcome. At the junior high, high school and university level, they’re falling behind educationally</p>
</blockquote>
<blockquote>
<p>Girls can win by winning in their own hierarchy—by being good at what girls value, as girls. They can add to this victory by winning in the boys’ hierarchy. Boys, however, can only win by winning in the male hierarchy.</p>
</blockquote>
<p>72</p>
<blockquote>
<p>Absolute equality would therefore require the sacrifice of value itself—and then there would be nothing worth living for.</p>
</blockquote>
<p>73, alternative to 'the patriarchy'</p>
<blockquote>
<p>Here’s an alternative theory: throughout history, men and women both struggled terribly for freedom from the overwhelming horrors of privation and necessity. Women were often at a disadvantage during that struggle, as they had all the vulnerabilities of men, with the extra reproductive burden, and less physical strength. In addition to the filth, misery, disease, starvation, cruelty and ignorance that characterized the lives of both sexes, back before the twentieth century (when even people in the Western world typically existed on less than a dollar a day in today’s money) women also had to put up with the serious practical inconvenience of menstruation, the high probability of unwanted pregnancy, the chance of death or serious damage during childbirth, and the burden of too many young children.</p>
</blockquote>
<blockquote>
<p>It looks to me like the so-called oppression of the patriarchy was instead an imperfect collective attempt by men and women, stretching over millennia, to free each other from privation, disease and drudgery.</p>
</blockquote>
<blockquote>
<p>Why do we teach our young people that our incredible culture is the result of male oppression?</p>
</blockquote>
<blockquote>
<p>the fact that power plays a role in human motivation does not mean that it plays the only role, or even the primary role.</p>
</blockquote>
<p>75 society / politics</p>
<blockquote>
<p>If radical right-wingers were receiving state funding for political operations disguised as university courses, as the radical left-wingers clearly are, the uproar from progressives across North America would be deafening.</p>
</blockquote>
<blockquote>
<p>There isn’t a shred of hard evidence to support any of their central claims: that Western society is pathologically patriarchal; that the prime lesson of history is that men, rather than nature, were the primary source of the oppression of women (rather than, as in most cases, their partners and supporters); that all hierarchies are based on power and aimed at exclusion.</p>
</blockquote>
<blockquote>
<p>In societies that are well-functioning—not in comparison to a hypothetical utopia, but contrasted with other existing or historical cultures—competence, not power, is a prime determiner of status. Competence. Ability. Skill. Not power. This is obvious both anecdotally and factually. No one with brain cancer is equity-minded enough to refuse the service of the surgeon with the best education, the best reputation and, perhaps, the highest earnings. Furthermore, the most valid personality trait predictors of long-term success in Western countries are intelligence (as measured with cognitive ability or IQ tests) and conscientiousness (a trait characterized by industriousness and orderliness).</p>
</blockquote>
<blockquote>
<p>Since all outcome inequalities must be eliminated (inequality being the heart of all evil), then all gender differences must be regarded as socially constructed. Otherwise the drive for equality would be too radical, and the doctrine too blatantly propagandistic. Thus, the order of logic is reversed, so that the ideology can be camouflaged. The fact that such statements lead immediately to internal inconsistencies within the ideology is never addressed. Gender is constructed, but an individual who desires gender re-assignment surgery is to be unarguably considered a man trapped in a woman’s body (or vice versa). The fact that both of these cannot logically be true, simultaneously, is just ignored (or rationalized away with another appalling post-modern claim: that logic itself—along with the techniques of science—is merely part of the oppressive patriarchal system).</p>
</blockquote>
<blockquote>
<p>group identity can be fractionated right down to the level of the individual. That sentence should be written in capital letters. Every person is unique—and not just in a trivial manner: importantly, significantly, meaningfully unique. Group membership cannot capture that variability. Period.</p>
</blockquote>
<p>80</p>
<blockquote>
<p>if you think tough men are dangerous, wait until you see what weak men are capable of.</p>
</blockquote>
<p>87</p>
<blockquote>
<p>There is no enlightened one. There is only the one who is seeking further enlightenment. Proper Being is process, not a state; a journey, not a destination.</p>
</blockquote>
<blockquote>
<p>What shall I do with the poor man’s plight? Strive through right example to lift his broken heart.</p>
</blockquote>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
