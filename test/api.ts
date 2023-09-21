import { exit } from "node:process";

import delphi from "../src/index.js";

try {
	const response = await delphi("Testing an API");
	console.log(response);
}
catch (err) {
	console.error(err);
	exit(1);
}
