import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.png"
          width="256"
          height="256"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Tim Godin</h1>
        <div class="flex space-x-4">
          {/* <a href="/hire">hire</a>
          <a href="/blog">blog</a>
          <a href="/deals">deals</a>
          <a href="/about">about</a> */}
        </div>
      </div>
    </div>
  );
}
