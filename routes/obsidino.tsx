export default function Home() {
    
    return (<div class="main text-left w-max-md mx-auto">
        <h1>Obsidino</h1>
<img src="obsidino.png" alt="obsidino.png" />
<h4>Vault -&gt; URL in one click.</h4>
<h2>why</h2>
<p>Obsidian Publish - 10$ USD / month</p>
<p><a href="obsidino">Obsidino</a> - 10$ USD / <em>year</em></p>
<p><a target="_blank" href="https://www.obsidian.md/publish">Obsidian's offering</a> is too expensive. We're talking about publishing some text.</p>
<p><a href="obsidino">Obsidino</a> is a simple and fast method of deploying a vault to the web.</p>
<h2>examples</h2>
<p><a href="/">This website</a> is built and updated using Obsidino. All pages on this website are generated from an Obsidian Vault.</p>
<p><a href="markdown-syntax">This</a> page shows examples of the elements that Obsidino can currently process.</p>
<h2>expected limitations</h2>
<ul>
<li>1GB maximum size</li>
<li>images, canvases, graphs limited in basic version</li>
<li>extra costs for domains and excessive traffic</li>
</ul>
<h2>progress</h2>
<ul>
<li>20240514 some extended syntax (conflicts)</li>
<li>20240514 basic markdown syntax complete</li>
<li>20240513 external links open in new window</li>
<li>20240510 support internal alias links</li>
<li>20240505 support PNG images</li>
<li>20240502 support internal links</li>
</ul>
<h2>next steps</h2>
<p>in order of priority</p>
<ul>
<li><strong>interpret frontmatter</strong></li>
<li>extended markdown syntax</li>
<li>1:1 Obsidian-style markdown syntax</li>
<li>Canvas view</li>
<li>Graph view</li>
<li>automatic scale images for web</li>
</ul>
<h2>links</h2>
<ul>
<li><a target="_blank" href="https://obsidian.md/">Obsidian - Sharpen your thinking</a></li>
<li><a target="_blank" href="https://deno.com/deploy">Deno Deploy | Deno</a></li>
<li><a target="_blank" href="https://www.markdownguide.org/cheat-sheet/">Markdown Cheat Sheet | Markdown Guide</a></li>
<li><a target="_blank" href="https://fresh.deno.dev/">Fresh - The next-gen web framework.</a></li>
</ul>

</div>);
}