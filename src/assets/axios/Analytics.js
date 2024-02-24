import axios from "axios";
import { URL } from "./Base";

class Analytics {
  headers = {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };

  async getAnalyticsData(setanalyticsData, setloading) {
    try {
      let { data } = await axios.get(
        `${URL}/analytics?start=2024-02-01T00:00:00`,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );

      setloading(false);
      setanalyticsData(data["analytics"]);
    } catch (err) {
      setloading(false);
    }
  }
}

const analytics = new Analytics();
export { analytics };
