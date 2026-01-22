import { baseApi } from "@/services/baseApi";
import { setCredentials } from "./slice";

type LoginRequest = {
    username: string
    password: string
}

type LoginResponse = {
    accessToken: string
}

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            queryFn: async ({ username, password }, { dispatch }) => {
                //demo auth (replace with real api later)
                if (username === "admin" && password === "admin1") {
                    const fakeToken = "demo-jwt-token"
                    dispatch(setCredentials(fakeToken))
                    return { data: { accessToken: fakeToken } }
                }

                return {
                    error: {
                        status: 401,
                        data: "Invalid credentials"
                    }
                }
            }
        })
    })
})

export const { useLoginMutation } = authApi;
