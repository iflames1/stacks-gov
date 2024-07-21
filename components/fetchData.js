export const fetchData = async () => {
  try {
    const response = await fetch("/dao.json");
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
