import axios from "axios";
import React from "react";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization: import.meta.env.VITE_GITHUBKEY,
  },
});
