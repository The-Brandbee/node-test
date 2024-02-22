import axios from "axios";

export default async function handler(req, res) {
  try {
    // Replace this URL with the actual endpoint for your page data API
    const apiUrl = "https://cms.csplighthouse.com/api/blogs/";
    const response = await axios.get(apiUrl);
    const pageData = response.data;

    res.status(200).json(pageData);
  } catch (error) {
    console.error("Error fetching page data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
