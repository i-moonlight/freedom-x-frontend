import axios from "axios";
import { URL } from "./Base";

class Analytics {
  headers = {
    Authorization: `Bearer e4629009-0c5b-4b55-a76b-aad90fbb85c2`,
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
