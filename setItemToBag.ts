const kv = await Deno.openKv();


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