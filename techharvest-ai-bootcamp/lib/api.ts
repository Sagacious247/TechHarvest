const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function registerStudent(data: any) {
  const response = await fetch(
    `${API_URL}/api/students/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return response.json();
}