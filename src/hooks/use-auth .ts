//hasil copas dari coach Fauzi


// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { authApi } from "@/services/auth";
// import { apiClient } from "@/lib/api-client";
// import {
//   LoginRequest,
//   RegisterRequest,
//   UpdateProfileRequest,
// } from "@/types/api";

// export function useRegister() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (data: RegisterRequest) => authApi.register(data),
//     onSuccess: (data) => {
//       apiClient.setToken(data.token);
//       queryClient.setQueryData(["me"], data.user);
//     },
//   });
// }

// export function useLogin() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (data: LoginRequest) => authApi.login(data),
//     onSuccess: (data) => {
//       apiClient.setToken(data.token);
//       queryClient.setQueryData(["me"], data.user);
//     },
//   });
// }

// export function useLogout() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async () => {
//       apiClient.removeToken();
//     },
//     onSuccess: () => {
//       queryClient.clear();
//     },
//   });
// }

// export function useMe() {
//   return useQuery({
//     queryKey: ["me"],
//     queryFn: () => authApi.getMe(),
//     enabled: !!apiClient.getToken(),
//     retry: false,
//   });
// }

// export function useUpdateProfile() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (data: UpdateProfileRequest) => authApi.updateProfile(data),
//     onSuccess: (data) => {
//       queryClient.setQueryData(["me"], data);
//     },
//   });
// }
