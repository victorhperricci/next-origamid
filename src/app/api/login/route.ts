import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type");

  if (contentType !== "application/json") {
    return new Response("Content-Type must be application/json", {
      status: 400,
    });
  }

  const json: { username: string; password: string } = await request.json();

  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });

  if (response.status !== 200) {
    return new Response("Invalid username or password", {
      status: 401,
    });
  }

  const data = await response.json();
  const cookie = await cookies();

  cookie.set("token", data.token, {
    httpOnly: true,
  });

  return Response.json({ ...data, ok: response.ok, status: response.status });
}
