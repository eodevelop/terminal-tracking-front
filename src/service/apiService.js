import axios from "axios";

const BASE_URL = "http://localhost:8080";
const PORTS_URL = `${BASE_URL}/ports`;
const PORT_URL = `${BASE_URL}/port/`;

class apiService {
  static async post(url, params) {
    try {
      const res = await axios.post(url, params);
      return res;
    } catch (error) {
      console.log("Error", error);
      return error;
    }
  }

  static async get(url, params) {
    try {
      const res = await axios.get(url, params);
      return res;
    } catch (error) {
      console.log("Error", error);
      return error;
    }
  }

  static callPortList = async () => await this.get(`${PORTS_URL}`, null);
  static callVesselList = async ({locationId}) =>  
  {
    return await this.get(`${PORT_URL}` + locationId);
  }
}

export default apiService;
