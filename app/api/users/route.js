export async function GET(request) {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];

  return new Response(JSON.stringify(users), {
    headers: {
      "content-type": "application/json",
    },
  });
}
