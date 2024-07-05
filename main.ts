/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

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

await start(manifest, config);
