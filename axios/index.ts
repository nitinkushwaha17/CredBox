import { isDevEnv } from "@/utils";
import axios from "axios";
import Constants from "expo-constants";

const isInDevEnv = isDevEnv();

export default axios.create({
  baseURL: isInDevEnv
    ? `http://${Constants.expoConfig?.hostUri
        ?.split(":")
        .shift()
        ?.concat(":3000")}` ?? "http://192.168.0.105:3000"
    : "https://credbox-server.onrender.com",
});
