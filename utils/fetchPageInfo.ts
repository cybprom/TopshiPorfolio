import { pageInfo } from "./../typings";

export const fetchPageInfo = async () => {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL ||
        "https://temitopedavidsite.vercel.app"
      }/api/getPageInfo`
    );

    if (!res.ok) {
      throw new Error(`API request failed with status: ${res.status}`);
    }

    const data = await res.json();
    const pageInfo: pageInfo = data.pageInfo;

    return pageInfo;
    console.log(data);
  } catch (error) {
    console.error("Error fetching page info:", error);
    // You can also throw the error here to let the caller handle it
    throw error;
  }
};

fetchPageInfo();
