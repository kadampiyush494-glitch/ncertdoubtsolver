const BACKEND_URL = "http://127.0.0.1:8001";

export async function askNCERT(question: string) {
  const response = await fetch(
    `${BACKEND_URL}/ask?question=${encodeURIComponent(question)}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Backend error");
  }

  return await response.json();
}
