import axios from "axios";
import { URL } from "./Base";

class Analytics {
  headers = {
    Authorization: `Bearer ca33ca5d-0be0-40c7-872d-1045b5625a4a`,
  };

  async getAnalyticsData(setanalyticsData) {
    try {
      let { data } = await axios.get(
        `${URL}/analytics?start=2024-02-01T00:00:00`,
        {
          headers: this.headers,
        }
      );

      console.log(data["analytics"]);
      setanalyticsData(data["analytics"]);
    } catch (err) {
      console.log(err.response);
    }
  }
}

const analytics = new Analytics();
export { analytics };
