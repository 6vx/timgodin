export default function Home() {
    
    return (<div class="main text-left w-max-md mx-auto">
        <h1>Obsidino</h1>
<p>Single executable that sits above an Obsidian Vault and, ideally with little to no config, turns Vault and images into a website via Deno Deploy.</p>
<ul>
<li><a href="https://obsidian.md/">Obsidian - Sharpen your thinking</a></li>
<li><a href="https://deno.com/deploy">Deno Deploy | Deno</a></li>
</ul>
<h2>notes in progress</h2>
<ul>
<li>1GB limit</li>
</ul>
<h2>current progress</h2>
<p>I'm astonned that there aren't any plugins to do obsidian to html directly. Tried reMarked, MarkdownIt, Marked, a couple others, all with sub plugs and options... Makes a guy wanna get Co-Pilot back I've trudged through so much repetitiveness.</p>
<p>The combination of GFM (github flavored markdown) and whatever Obsidian is calling it's internal linking scheme is tricky to deal with.</p>
<p>Shouldn't be long before the kinks're worked out, but since my use case is so limited I feel like I'm missing a lot of weird cases.</p>
<p>Probably best to sprint towards something working: turning 1 flat directory Obsidian Vault with internal links and images into a website in one or two clicks.</p>
<p>Would be a better 'product' if it had support for canvas/graph view though.</p>
<h2>'fresh' in particular</h2>
<p>Might be worth integrating a way to place islands/components with params inside markdown for the transmuter to replace. How might that look? ISLAND=&quot;COUNTER&quot; or COMPONENT=&quot;BUTTON&quot;?</p>

</div>);
}