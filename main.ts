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

// I also want to log the visit count to a daily tally
// this will use the deno cron api

Deno.cron("Log Visitor Count", "0 0 * * *", async () => {
    // Get the current date
    const date = new Date();
    
    // Get the current visit count
    const entry = await kv.get(["homepageVisits"]);
    const visitCount = entry?.value ?? 0; // If it doesn't exist, start at 0
    
    // add to the dailyCountTally in deno kv, using the date in format Tally-YYYYMMDD as the key
    await kv.set([`Tally-${date.toISOString().slice(0, 10).replace(/-/g, "")}`], visitCount);
    
    }


await start(manifest, config);
