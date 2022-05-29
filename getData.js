import { createClient } from "dc-council-lims";
const client = createClient();
const votes = client.getVotes();
console.log(votes);
