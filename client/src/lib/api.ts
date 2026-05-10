export async function getApiErrorMessage(
  response: Response,
  fallbackMessage: string
) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const result = await response.json().catch(() => null);
    if (result?.error && typeof result.error === "string") {
      return result.error;
    }
  } else {
    const responseText = await response.text().catch(() => "");
    if (responseText.trim()) {
      return `${fallbackMessage} (${response.status}): ${responseText.slice(0, 120)}`;
    }
  }

  return `${fallbackMessage} (${response.status})`;
}
