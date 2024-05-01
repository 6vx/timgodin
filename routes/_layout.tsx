import { Handlers, PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="layout flex-col text-center w-full items-center justify-center">
      {/* <div class="flex space-x-2"> */}
      {/* <p class="text-xs"> &rarr; <a class="text-center text-xs" href="/">home</a> */}
      {/* </p> */}
      {/* <a class="text-xs">{Component}</a> */}
      
      {/* </div> */}
      <Component />
    </div>
  );
}