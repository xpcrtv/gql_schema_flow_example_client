import * as dotenv from "dotenv";

dotenv.config();

const { REMOTE_STORAGE_MS_ID, REMOTE_STORAGE_API_KEY, REMOTE_STORAGE_APP_ID } =
  process.env;

export const firebaseConfig = {
  apiKey: REMOTE_STORAGE_API_KEY,
  authDomain: "gqlstore.firebaseapp.com",
  projectId: "gqlstore",
  storageBucket: "gqlstore.appspot.com",
  messagingSenderId: REMOTE_STORAGE_MS_ID,
  appId: REMOTE_STORAGE_APP_ID,
};

export const config = {
  branch: process.env.BRANCH || "master",
  schemaFileName: "schema.graphql",
};
