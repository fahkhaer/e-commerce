import { authApiClient } from "@/lib/api-clients";
import { AuthResponse, User } from "@/types/auth";

export const loginApi = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const res = await fetch(
    "https://e-commerce-api-production-26ab.up.railway.app/api/auth/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
  const auth = await res.json();

  localStorage.setItem("token", auth?.data.token);
  getMyProfile();

  return {
    token: auth?.data.token,
    user: auth?.data.user,
  };
};

export const registerApi = async (formData: FormData): Promise<User> => {
  const res = await fetch(
    "https://e-commerce-api-production-26ab.up.railway.app/api/auth/register",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Register failed");
  }

  return res.json();
};

export const getMyProfile = async () => {
  const { data } = await authApiClient.get(`/me`);
  localStorage.setItem("username", data?.data.name);
  localStorage.setItem("avatar", data.data.avatarUrl);
  return data?.data;
};