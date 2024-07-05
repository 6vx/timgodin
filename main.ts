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

// i'm going to increment the deno kv view count 
// and console log the current count here

const kv = await Deno.openKv();

// Function to increment the homepage visit count
async function incrementVisitCount() {
    // Get the current visit count
    const entry = await kv.get(["homepageVisits"]);
    let visitCount = entry?.value ?? 0; // If it doesn't exist, start at 0
  
    // Increment the visit count
    visitCount++;
  
    // Set the updated visit count back to the database
    await kv.set(["homepageVisits"], visitCount);
  
    // Log the new visit count
    console.log(`Homepage visits: ${visitCount}`);
  }
  
  // Call this function whenever the homepage is visited
  incrementVisitCount();