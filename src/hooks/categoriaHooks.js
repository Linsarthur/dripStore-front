import { useMutation, useQuery } from "@tanstack/react-query"
import { AXIOS, queryClient } from "../services"

export const useBuscar = () => {
    return useQuery({
        queryKey: ["categorias"],
        queryFn: async () => {
            const request = await AXIOS.get("/categorias");
            return request.data;
        }
    })
}

export const useCriar = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const request = await AXIOS.post("/categorias", dados);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categorias"]
            })
        }
    });
}

export const useEditar = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const request = await AXIOS.put(`/categorias/${dados.categoria_id}`, dados);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categorias"]
            })
        }
    });
}

export const useDeletar = () => {
    return useMutation({
        mutationFn: async (id) => {
            const request = await AXIOS.delete(`/categorias/${id}`);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categorias"]
            })
        }
    });
}