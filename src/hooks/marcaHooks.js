import { useMutation, useQuery } from "@tanstack/react-query"
import { AXIOS, queryClient } from "../services"

export const useBuscar = () => {
    return useQuery({
        queryKey: ["marcas"],
        queryFn: async () => {
            const request = await AXIOS.get("/marcas");
            return request.data;
        }
    })
}

export const useCriar = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const request = await AXIOS.post("/marcas", dados);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["marcas"]
            })
        }
    });
}

export const useEditar = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const request = await AXIOS.put(`/marcas/${dados.marca_id}`, dados);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["marcas"]
            })
        }
    });
}

export const useDeletar = () => {
    return useMutation({
        mutationFn: async (id) => {
            const request = await AXIOS.delete(`/marcas/${id}`);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["marcas"]
            })
        }
    });
}