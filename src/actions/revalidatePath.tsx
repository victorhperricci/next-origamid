"use server";

import { revalidatePath, revalidateTag } from "next/cache";

interface IRevalidatePathAction {
  type: "revalidate-path" | "revalidate-tag";
  key: string;
}

export async function revalidatePathAction({
  key,
  type,
}: IRevalidatePathAction) {
  try {
    const pathActionsMap: Record<
      IRevalidatePathAction["type"],
      () => Promise<void>
    > = {
      "revalidate-path": async () => {
        revalidatePath(key);
      },
      "revalidate-tag": async () => {
        revalidateTag(key);
      },
    };

    await pathActionsMap[type]();

    return Promise.resolve();
  } catch (error) {
    console.error("Error revalidating path:", error);
    return Promise.reject(error);
  }
}
