import { error, log } from "node:console";
import { exit } from "node:process";

import delphi from "../src/index.js";

try {
	const response = await delphi("Testing an API");
	log(response);
}
catch (err) {
	error(err);
	exit(1);
}
