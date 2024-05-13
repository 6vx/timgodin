import { Handlers, PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="layout flex-col">
      
      <Component />

      <div className="menuButton">
        <h4><a href="/">home</a></h4>
      </div>
    </div>
  );
}