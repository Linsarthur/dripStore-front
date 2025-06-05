import { useQuery } from "@tanstack/react-query"
import { AXIOS } from "../services"

export const useBuscarProdutos = () => {
    return useQuery({
        queryKey: ["produtos"],
        queryFn: async () => {
            const request = await AXIOS.get("/produtos");
            return request.data;
        }
    })
}