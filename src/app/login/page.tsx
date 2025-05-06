"use client";

import { login } from "@/actions/login";
import { useState } from "react";

export default function Login() {
  const [loginStatus, setLoginStatus] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const username = form.username.value as string;
    const password = form.password.value as string;

    const data = await login({
      password,
      username,
    });

    console.log(data);

    if (data.status !== 200) {
      setLoginStatus("Invalid username or password");
      return;
    }

    if (data.ok) {
      setLoginStatus("Login successful!");
    } else {
      setLoginStatus("Login failed. Please try again.");
    }

    window.location.href = "/"; // Redirect to the profile page after login
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>

      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
}
