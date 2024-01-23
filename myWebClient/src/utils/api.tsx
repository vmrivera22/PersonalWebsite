export async function getTrivia() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=5&encode=base64"
  );
  if (!response.ok) {
    throw { message: "Failed to fetch posts.", status: 500 };
  }
  return response;
}
