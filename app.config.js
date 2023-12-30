import { createApp } from "vinxi";
import { serverFunctions } from "@vinxi/server-functions/plugin";

export default createApp({
	routers: [
		{
			name: "public",
			mode: "static",
			dir: "./public",
		},
		{
			name: "client",
			mode: "spa",
			handler: "./index.html",
      plugins: () => [serverFunctions.client()],
		},
    serverFunctions.router(),
	],
});