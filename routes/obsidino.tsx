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
<li><s>text only</s></li>
</ul>
<h2>current progress</h2>
<p>Basic conversion functions
Image tags parsed
file write to tsx</p>
<h2>in progress</h2>
<p>parsing aliases regex
internal non-obsidian links (skip/do not create file?)</p>

</div>);
}