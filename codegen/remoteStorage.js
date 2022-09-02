import { initializeApp } from "firebase/app";
import { getStorage, getDownloadURL, ref } from "firebase/storage";

import fetch from "node-fetch";

import { firebaseConfig } from "./config.js?inline";

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const getFileFromStorage = (url) =>
  getDownloadURL(ref(storage, url))
    .then((url) => fetch(url))
    .then((res) => res.blob())
    .then((blob) => blob.arrayBuffer());
