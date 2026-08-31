"use strict";

const options = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  },
};

async function getAgent(options) {
  try {
    const res = await fetch("https://api.spacetraders.io/v2/my/agent", options);
    const data = await res.json();

    if (!res.ok) {
      throw new Error("An error occurred in 'getAgent()'. Check your code.\n");
    }

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

const agentDetails = await getAgent(options);

console.log(agentDetails);

