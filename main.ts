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
    
    await kv.set([`Tally-${date.toISOString().slice(0, 10).replace(/-/g, "")}`], visitCount);

    }
);

// Deno KV Example: Storing a String

// Function to store a string in Deno KV
export async function storeStringInKV(value: string) {
  // Ensure the Deno KV is available
  if (kv) {
    try {
      // Put the string into KV under the key "current_string"
      await kv.put("current_string", value);
      console.log(`Stored string: "${value}" under key "current_string"`);
    } catch (error) {
      console.error("Failed to store the string in Deno KV:", error);
    }
  } else {
    console.error("Deno KV is not available.");
  }
}

// Usage example
const stringToStore = "Hello, Deno KV!"; // Replace with your desired string
await storeStringInKV(stringToStore);


// Function to retrieve a string from Deno KV
export async function getStringFromKV() {
  try {
    const result = await kv.get("current_string");
    if (result) {
      console.log(`Retrieved string: "${result}" from key "current_string"`);
    } else {
      console.log("No value found for key 'current_string'");
    }
  } catch (error) {
    console.error("Failed to retrieve the string from Deno KV:", error);
  }
}

// Retrieve the stored string
await getStringFromKV();



await start(manifest, config);
