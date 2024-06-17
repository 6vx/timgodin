/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

import { serve } from 'https://deno.land/std/http/server.ts';
import { createReporter } from 'https://deno.land/x/g_a/mod.ts';

const ga = createReporter({ id: "G-X4B7FREDZL" }); // Replace with your actual tracking ID

serve((req, connInfo) => {
  let err;
  let res;
  const start = performance.now();
  try {
    // Your response handling logic here
    res = new Response("Hello World");
  } catch (e) {
    err = e;
  } finally {
    ga(req, connInfo, res, start, err);
  }
  return res;
});


await start(manifest, config);
