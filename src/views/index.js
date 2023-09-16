import {fileURLToPath} from "url";

const thisFile = fileURLToPath(import.meta.url);

export const viewsDir = thisFile.split("/").slice(0, -1).join("/");