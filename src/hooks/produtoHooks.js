import { useMutation, useQuery } from "@tanstack/react-query";
import { AXIOS, queryClient } from "../services";

export const useBuscar = () => {
    return useQuery({
        queryKey: ["produtos"],
        queryFn: async () => {
            const request = await AXIOS.get("/produtos");
            return request.data;
        }
    })
}

export const useCriar = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const request = await AXIOS.post("/produtos", dados, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["produtos"]
            })
        }
    });
}

export const useEditar = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const request = await AXIOS.put(`/produtos/${dados.produto_id}`, dados);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["produtos"]
            })
        }
    });
}

export const useDeletar = () => {
    return useMutation({
        mutationFn: async (id) => {
            const request = await AXIOS.delete(`/produtos/${id}`);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["produtos"]
            })
        }
    });
}