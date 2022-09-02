import fs from "fs";
import { spawn } from "child_process";
import { config } from "./config.js?inline";
import { getFileFromStorage } from "./remoteStorage.js?inline";

const { branch, schemaFileName } = config;

const runGQLCodegenScript = () => {
  const npmScript = spawn("npm", ["run", "graphql:codegen"]);

  npmScript.stderr.on("data", function (data) {
    console.log("stderr: " + data.toString());
  });
};

const saveFile = (arrayBuffer) => {
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync("schema.graphql", buffer);
};

const codegen = async () => {
  const storageURL = `schemas/${branch}/${schemaFileName}`;
  const fileBuffer = await getFileFromStorage(storageURL);

  saveFile(fileBuffer);
  runGQLCodegenScript();
};

codegen();
