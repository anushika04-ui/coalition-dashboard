import axios from "axios";

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

const username = "coalition";
const password = "skills-test";

const token = btoa(`${username}:${password}`);

export const fetchPatientData = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
  }
};