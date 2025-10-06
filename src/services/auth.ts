
// import {
//   LoginRequest,
//   LoginResponse,
//   RegisterRequest,
//   MeResponse,
//   UpdateProfileRequest,
// } from "@/types/api";

import { AuthResponse } from "@/types/auth";

// import { apiClient } from "@/lib/api-clients";

// export const authApi = {
//   // POST /api/auth/register
//   register: async (data: RegisterRequest): Promise<LoginResponse> => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("email", data.email);
//     formData.append("password", data.password);

//     if (data.avatar) {
//       formData.append("avatar", data.avatar);
//     }

//     if (data.avatarUrl) {
//       formData.append("avatarUrl", data.avatarUrl);
//     }

//     return apiClient.postFormData<LoginResponse>("/api/auth/register", formData);
//   },

//   // POST /api/auth/login
//   login: async (data: LoginRequest): Promise<LoginResponse> => {
//     return apiClient.post<LoginResponse>("/api/auth/login", data);
//   },

//   // GET /api/me
//   getMe: async (): Promise<MeResponse> => {
//     return apiClient.get<MeResponse>("/api/me");
//   },

//   // PATCH /api/me
//   updateProfile: async (data: UpdateProfileRequest): Promise<MeResponse> => {
//     return apiClient.patch<MeResponse>("/api/me", data);
//   },
// };

export const loginApi = async (email: string, password: string): Promise<AuthResponse> => {    
  const res = await fetch("https://e-commerce-api-production-26ab.up.railway.app/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email,
    password,
  }),
});
const auth = await res.json()
  // const { data } = await apiClient.post("/auth/login", { email: email, password: password });

  localStorage.setItem("token", auth?.data.token);

  return {
    token: auth?.data.token,
    user: auth?.data.user,
  };
};
