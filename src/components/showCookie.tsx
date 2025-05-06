"use client";

import { getCookie } from "@/actions/get-cookie";
import { useState } from "react";

export function ShowCookie() {
  const [token, setToken] = useState<string | undefined>(undefined);

  async function handleClick() {
    if (token) {
      setToken(undefined);
      return;
    }

    const cookie = await getCookie("token");
    setToken(cookie?.value);
  }

  return (
    <>
      <button onClick={handleClick}>Mostrar cookie</button>
      {token && <p>Token: {token}</p>}
    </>
  );
}
