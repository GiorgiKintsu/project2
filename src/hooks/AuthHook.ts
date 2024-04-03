import axios, { AxiosResponse } from "axios"

export const AuthHook = async (URL: string, body: unknown): Promise<void> => {
    return axios.post(URL, body)
    .then((response: AxiosResponse) => {
        localStorage.setItem("token", JSON.stringify(response))
    })
}