
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-06-23","updated":"2024-06-23","title":"Tim Godin - Windows Phone 8","description":"This is a review from the perspective of someone who bought WP7 the first day he could, and then did the same for WP8.","tags":["timgodin"],"private":"false"}
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

<h1>Windows Phone 7-&gt;8</h1>
<p>This is a review from the perspective of someone who bought WP7 the first day he could, and then did the same for WP8.</p>
<p>I'm writing this to give a quick rundown on the differences that matter to me (aka: no stats or specs), a Windows Phone user of 7 and 8 since Day 1 (in Canada, at least).</p>
<h2><strong>History</strong></h2>
<p>I've been using Microsoft products since before I could remember, but Windows Mobile never lured me in. I used Nokia's for about a decade, my last being a Nokia N95. I bought it for the camera but loved it for the sturdiness and incredible breadth of software (tricking it out with IR universal remote apps and SymNAS automatic backups over WiFi are some of my favourite memories of the device). When Windows Phone 7 was announced, though, I knew I was going to have to switch. As a Windows and Xbox user, the 3 screen philosophy really dragged me in. My N95 was aging, as was my Rogers contract.</p>
<p>It was time.</p>
<h2><strong>Hardware</strong></h2>
<p><em>Gone are the days of the <a target="_blank" href="http://www.gsmarena.com/nokia_6101-pictures-1044.php">Nokia 6101</a>, my second (but not my last) Nokia. I have memories of time spent gripping the phone by either side of it's hinge in my thumb and forefinger and then spinning it into the air with so much force that it would open in the air, and then catching it suavely and taking a call. I could do this stunt with no fear of breaking the phone, it was a veritable tank. It clattered to the concrete floor at work countless times, and never missed a beat. When I heard that Microsoft bought Nokia, and that WP7 devices were coming, I was very excited. I knew it meant quality workmanship, a strong, durable phone. I wanted one, but I was only a few months into my Optimus 7's contract and decided to wait it out.</em></p>
<h3><a target="_blank" href="http://www.gsmarena.com/lg_e900_optimus_7-pictures-3532.php">Optimus 7</a></h3>
<p>You get the durability I'm used to, though. And in the hardware department, the LG Optimus 7 was a hero. As my first experience with Gorilla Glass, I was impressed. Over it's two years of service, the phone has been dropped from 4ft numerous times, into snow, screen down onto gravel, concrete, and is no worse for wear. The metal back bears only one scratch, from when I dropped it, bouncing off a porcelain sink into water. This phone survived being underwater and kept going for about a year after the incident, with only a slight white noise issue when using headphones, and some red stickers to show what it's been through.</p>
<p>The standout features are the hardware Windows key, a metal back, and a perfect size for your hand.</p>
<p>The drawbacks were the USB flap, which feels like it could break off any day, and a less than stellar camera. It was a downgrade coming from the N95's camera.</p>
<h3><a target="_blank" href="http://www.gsmarena.com/nokia_lumia_920-pictures-4967.php">Lumia 920</a></h3>
<p>Where to start. This phone is beautiful. Back to front, side to side, it makes every other phone I've owned look a little silly. The matte black finish is gorgeous and the camera is a lot less gaudy than the one on the Optimus 7. One thing to note as a left-handed user, when putting down my phone while pushing the lock button, after use, my palm sometimes brushes the windows key. Instead of locking, my phone takes a screenshot that I have to go in and delete. It's happened more than 5 times in a week, so it's worth mentioning. This phone is BIG. If you're used to a smaller phone like I was, it is tough to get used to handing a phone that doesn't fit in your palm. I'm scared I'm going to drop this beautiful thing, and it definitely doesn't fit in all the same pockets my Optimus did.</p>
<p>So for positives, this thing is a work of art. It looks like a delicate, fragile piece of hardware, but if <a target="_blank" href="http://www.reddit.com/r/windowsphone/comments/13t8p3/i_fucking_dropped_my_lumia_920_at_the_drug_store/">what I've heard is true</a> , then I don't think I have anything to worry about. I've always trusted Nokia's hardware, and just because it's a lot prettier doesn't mean it's going to break.</p>
<p>The drawbacks are definitely the size. It just doesn't fit in my hand as easily. I also think the touch windows key is inferior to the hardware windows key.</p>
<h2><strong>Display</strong></h2>
<h3>Optimus 7</h3>
<p>Any owner of this phone knows that the display wasn't anything special. I experienced a lot of screen envy when it was beside my friend's Samsung Focus, or any other AMOLED screen for that matter. In daylight I had to squint and shade my phone with my hands just to read text. In short, it was bad.</p>
<h3>Lumia 920</h3>
<p>The screen is beautiful, and gigantic. I love it. Beside that Focus it looks really good. It's also very easy to read even on a bright winter day, which is a huge plus for me. Going from struggling to read texts to having no trouble at all wasn't an expected change, but it's certainly a welcome one.</p>
<h2><strong>Camera</strong></h2>
<p>I'll keep this one short, I think everyone already knows this.</p>
<h3>Optimus 7</h3>
<p>Bad.</p>
<h3>Lumia 920</h3>
<p>Great.</p>
<h2><strong>Software</strong></h2>
<p>For this I'll focus on what I use most, and what's changed. I was very excited when OneNote and the rest of Office was coming to my phone. I'd been using Office for years on my PC and Laptop, and it was part of what drew me to the Windows Phone platform. I'd been bouncing around between Calendar solutions (on Symbian/Google/Outlook) for years and was ready for a change. Windows Phone 7 delivered. The office experience was great, and One Note integration was awesome.</p>
<h3><em>OneNote</em></h3>
<p>Anyone who's been using WP7 since before Mango knows that it brought some pretty huge improvements, most important being able to pin &quot;New note&quot; to your start screen.</p>
<p>It's gone in WP8. But I don't miss it. OneNote is now a standalone app and better than ever. Clicking on the icon now brings you to wherever you had your notebook open to last. Notes are easy to make, edit, and delete, and navigating your notebooks is faster than ever. I love it. Oh, and Office works better than ever, and has some much needed changes (email attachments can be opened from the Office hub!)</p>
<h3><em>Calendar</em></h3>
<p>I liked everything about the WP7 calendar except for entering in a series of appointments. Having to scroll through the hours and minutes when entering a weeks worth of schedule was tedious and took way too many actions.</p>
<p>In WP8, you simply click on where you want the appointment to be and start typing. It's many times faster, and all the extra details are only one click away if you need them. It's a great change that I hope is implemented on WP7's calendar in the 7.8 update.</p>
<h3><em>Music</em></h3>
<p>I liked the WP7 music player, and WP8's is more of the same, with the added feature the iPhone users have been enjoying for years. You now have the option of setting your lock screen to art of the artist that is playing. I like it, but there's not much more to report. The UI is a little cleaner, but everything is what you're used to. There's a Dolby Headphone equalizer, but I've always believed that equalizers are just to compensate for bad headphones, and haven't experimented with it.</p>
<h3><em>Baconit / PC Remote Pro / Wordament</em></h3>
<p>I'm happy to report that all my every-day apps are still here. The increased memory of my Lumia makes switching between apps seem faster, so these apps really are working better than ever.</p>
<h3><em>File Browser</em></h3>
<p>Once upon a time I owned a 120GB Zune, so having to use the Zune software for my Optimus 7 wasn't such a big deal. I was already used to it and it didn't bother me. But being able to ditch it and browse my phone again is an amazing feeling. I didn't realize how much I missed it until I dove into my phone over USB to retrieve some cinemagraph gifs in my Camera Roll. This is a huge and necessary change. It's a shame that WP7 was ever tied to a single piece of software like it was, and one so ill-suited to phones to boot.</p>
<h3><em>Performance &amp; Battery Life</em></h3>
<p>As I said above, the increased specs on the Lumia really show when you compare to the Optimus 7. The increase in speed when using Baconit is immediately noticeable, for example. The call quality has been excellent so far, and the included headset is one of the better ones I've gotten with a phone. I'm really happy with it.</p>
<p>After retiring my N95 I've grown accustomed to charging my smartphone every day, it's just the way it is. My Optimus 7 and Lumia 920 both get enough use in a day to need a charge every night. If either of them didn't make it through an average day I'd be very disappointed. I haven't experienced any battery draining issues with my Lumia.</p>
<h2><strong>Wrap-Up</strong></h2>
<p>To the OLD WP7 user: If you bought your WP7 because you craved a native Office experience on your phone, or any Xbox related reason, you're not going to be disappointed with WP8. It's more of the same, it's faster. It's more streamlined and takes less to do more. You're going to love it. However, there aren't very many WP8 specific apps, and some of the things I fawned over will probably be included in the WP7.8 update. Changing the size of tiles is neat, but doesn't really affect the way I use my phone.</p>
<p>To the NEW WP7 user: If you're looking at a Lumia 920 and wondering if it's worth buying out your current contract, it depends on one decision; hardware or software. If you want it for the hardware, buy it immediately. It's an incredible piece that is faster than my WP7 in just about every way. If you want it for the WP8 software, wait. I just don't feel like there are enough WP8 exclusive apps or experiences to justify the cost, and there's no way to know yet just how much is coming in the 7.8 update. I am not getting rid of my Optimus 7, I feel like it still has a lot of good use left in it as a remote for my Xbox and PC, and with the ability to tether to my Lumia 920 I've already gotten to share the joy of a few rounds of Wordament with friends.</p>
<p>To the NON WP user: If you have no current commitments and are looking for a new smartphone, I wholeheartedly recommend the Lumia 920. It's everything I've come to expect from Nokia and Microsoft after many years of using and loving products from both companies. I couldn't be happier with my purchase and how it has fit into my lifestyle.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
