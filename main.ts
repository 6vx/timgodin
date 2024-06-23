/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

// add my google analytics with the deno ga plugin
// import { createReporter } from "https://deno.land/x/g_a/mod.ts";
// const ga = createReporter({id: "G-X4B7FREDZL"});

await start(manifest, config);
