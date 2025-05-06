import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const cookie = request.cookies;

  console.log("========================");
  console.log("cookie", cookie.get("token")?.value);
  console.log("cookie", cookie.getAll());

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.get("token")?.value}`,
    },
  });

  const data = await response.json();

  return Response.json(data);
}
