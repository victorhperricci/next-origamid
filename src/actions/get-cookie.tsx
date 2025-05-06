"use server";

import { cookies } from "next/headers";

export async function getCookie(key: string) {
  const findCookie = (await cookies()).get(key);

  return findCookie || null;
}
