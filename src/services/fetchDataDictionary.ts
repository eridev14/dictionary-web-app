import { Dictionary } from "../types";

export async function fetchDataDictionary({
  search,
}: {
  search: string;
}): Promise<Dictionary> {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Word in not found");
    }

    const dataFetch: Dictionary[] = await response.json();

    return dataFetch[0];
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
}
