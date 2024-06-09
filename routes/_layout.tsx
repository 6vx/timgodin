import { Handlers, PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="layout flex-col">
      
      <Component />

      <br />

      <div class="menuButton">
        {/* <h4><a href="/">home</a></h4> */}
      </div>
      <div class="disclaimer">
        <p class="disclaimerText"><a href="/">Tim Godin</a></p>
        <p class="disclaimerText" >Published with <a href="/obsidino">Obsidino</a> v0.1 © 2024</p>
      </div>

    </div>
  );
}