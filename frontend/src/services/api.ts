// frontend/src/services/api.ts
export async function askNCERT(question: string) {
  try {
    const response = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch answer');
    }

    const data: { answers: string[] } = await response.json(); // make TypeScript know the type
    return data; // ✅ return the object containing 'answers'
  } catch (error) {
    console.error(error);
    return { answers: ['Error fetching answer'] }; // fallback so Chat.tsx can always read 'answers'
  }
}
