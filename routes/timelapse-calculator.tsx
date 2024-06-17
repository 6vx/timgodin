
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: any) {
    return ctx.render( data );
  },
};
const data = 
{"created":"2024-06-17","updated":"2022-07-07","title":"Timelapse Calculator","description":"I generally grab the default svelte template, set up a github repo for it and connect that to an AWS Amplify project.","tags":["timgodin"],"private":"false"}
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

<h1>basic app</h1>
<h2>Standard Setup</h2>
<p>I generally grab the default svelte template, set up a github repo for it and connect that to an AWS Amplify project.</p>
<p>This setup means that every commit will be registered by Amplify and trigger a build and deploy automatically.</p>
<p>Something special this time, though, will be a script on dev machine that grabs the most recent versions of appropriate static assets and copies them into the project folder <strong>before pushing to github.</strong></p>
<blockquote>
<h3>Why push the static files to github</h3>
<p>I want to try this pattern instead of fetching during build because I don't want to have to manage a remote store of files.
  &gt;  
I've done that before by keeping an rclone script running on an hourly cron job on an ec2 micro instance, keeping the files in sync with my devices and available to the build server. While technically this is a cool and probably better way for a larger or more complex project, it's hardly minimalist. Also, it's hardly in the spirit of &quot;serverless.&quot;</p>
</blockquote>
<h2>Time-lapse Logic</h2>
<p>There are a few main settings to account for, and I've already written out the math I need to keep track of.</p>
<ol>
<li>
<p>Frame Recording Rate</p>
</li>
<li>
<p>Frame Capture Interval</p>
</li>
<li>
<p>Capture Duration</p>
</li>
<li>
<p>Timelapse Duration</p>
</li>
</ol>
<p>So, if you capture for five minutes with a camera that is capturing 1 frame every 2 seconds, and is recording that as a framerate of 30 frames per second, you get a timelapse duration of 5 seconds.</p>
<p>(60s<em>5m) / ((2 seconds per frame)</em>(30 frames per second))</p>
<p>300 / 60 = 5</p>
<h2>App UI</h2>
<p>I want a bit of a &quot;classic calculator&quot; look to this, since that is what it is.</p>
<p>Instead of having all sorts of numbers and buttons, though, I want my input to consist of selectors.</p>
<p>There should be an obvious row of selections for FPS, and when you select one it remains highlighted.</p>
<p>When changes have been made but not recalculated, the &quot;ENTER&quot; button or something should light up, to make it clear that you need to enter your selections and get a new result.</p>
<p>I'd like basic tweening and fading to make changing between options a more tactile, responsive experience.</p>
<h2>Deployment and Use</h2>
<p>I want this to all be contained in a single component for easy use, backup, etc.</p>
<p>I'll deploy as a standalone app example, and also as a clickable object within my portfolio. Since I expect the file to be exceedingly small, I'll likely back it up in a components folder alongside my other static assets I keep synced to my phone/tablet/PC.</p>
<h2>Thoughts</h2>
<p>I think that something simple like this is more a piece of evidence that I can make UI, than that I can make an app. This isn't terribly complex.</p>
<p>Therefore the UI must shine. If that's all this represents, make sure that it is representative of YOUR work. It should espouse YOUR sensibilities, not the google material UI spec, not some CSS library spec, none of that. This is me on a page.</p>
<h2>Building</h2>
<p>Just placed all the info I wanted onto the page first thing. It's one component.</p>
<p>I set some basic CSS fonts (I love monospace) and colours. Removed some old comments and tightened up the algorithm I was using.</p>
<p>Tested to make sure it's working with some console.log() action, now going to do first commit.</p>
<p>Commit was fine, connected repo to amplify and changed the build script to contain the correct build directory (public). Deployed first try, checked to make sure was looking fine on mobile. Does.</p>

        <br />
        <p class="timestamps">Created: {data.created} - Updated: {data.updated}</p>
        </div>
      </>
    );
  }
