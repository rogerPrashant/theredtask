const dataFunction = async () => {
  try {
    let res = await fetch("https://ctrl-space-api.vercel.app/api/data");
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

dataFunction();


