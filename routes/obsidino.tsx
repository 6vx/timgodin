export default function Home() {
    
    return (<div class="main text-left w-max-md mx-auto">
        <h1>Obsidino</h1>
<img src="obsidino.png" alt="obsidino.png" />
<h4>Vault -&gt; URL in one click.</h4>
<h2>why</h2>
<p>Obsidian Publish - 10$ USD / month</p>
<p>Obsidino - 10$ USD / <em>year</em></p>
<p><a target="_blank" href="https://www.obsidian.md/publish">Obsidian's offering</a> is too expensive. We're talking about publishing some text.</p>
<h2>expected limitations</h2>
<ul>
<li>1GB maximum size</li>
<li>images are downsized</li>
<li>extra costs for domains and excessive traffic</li>
</ul>
<h2>progress</h2>
<ul>
<li>20240510 internal alias links working</li>
<li>20240505 PNG files working</li>
<li>20240502 internal links working</li>
</ul>
<h2>next steps</h2>
<ul>
<li>check non-internal alias links</li>
<li>automatic downsize images for web (optional)</li>
<li><em><strong>interpret frontmatter</strong></em></li>
</ul>
<h2>links</h2>
<ul>
<li><a target="_blank" href="https://obsidian.md/">Obsidian - Sharpen your thinking</a></li>
<li><a target="_blank" href="https://deno.com/deploy">Deno Deploy | Deno</a></li>
</ul>

</div>);
}