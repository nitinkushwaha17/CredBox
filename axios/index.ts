import axios from "axios";
import Constants from "expo-constants";

export default axios.create({
  baseURL:
    `http://${Constants.expoConfig?.hostUri
      ?.split(":")
      .shift()
      ?.concat(":3000")}` ?? "http://192.168.0.105:3000",
});
