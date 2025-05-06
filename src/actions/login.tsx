"use server";

import { cookies } from "next/headers";

interface LoginParams {
  username: string;
  password: string;
}

interface LoginResponse {
  ok: boolean;
  status?: number;
  token?: string;
}

export async function login({
  password,
  username,
}: LoginParams): Promise<LoginResponse> {
  const res = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await res.json();

  if (!data.token) {
    return {
      ok: false,
      status: res.status,
    };
  }

  const cookie = await cookies();

  cookie.set("token", data.token, {
    httpOnly: true,
    // maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return {
    status: res.status,
    ok: true,
  };
}
