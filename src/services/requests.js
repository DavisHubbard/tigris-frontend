import axios from "axios";

const requests = {
  fetchItems: () => {
    return axios
      .get("http://localhost:8000/items/", {
        auth: { username: "admin", password: "abc123" },
      })
      .then((response) => {
        return response.data.results;
      });
  },
};

export default requests;
