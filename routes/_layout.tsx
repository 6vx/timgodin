import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="layout flex-col max-w-2xl text-center">
      <div class="flex space-x-2">
      <p class="text-xs"> &rarr; </p>
      <a class="text-center text-xs" href="/">home</a>
      <a class="text-xs">{Component}</a>
      
      </div>
      <Component />
    </div>
  );
}