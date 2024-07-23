export const fetchData = async (URL = "/data.json") => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
