const apiUrl = "https://httpbin.org/post";

export async function postData(data: any) {
  const response = await fetch(apiUrl, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  });
  return response.json();
}
