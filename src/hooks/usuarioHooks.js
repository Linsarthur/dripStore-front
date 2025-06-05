import { useMutation, useQuery } from "@tanstack/react-query";
import { AXIOS, queryClient } from "../services";

export const useBuscar = () => {
    return useQuery({
        queryKey: ["usuarios"],
        queryFn: async () => {
            const request = await AXIOS.get("/usuarios");
            return request.data;
        }
    })
}

export const useCriar = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const request = await AXIOS.post("/usuarios", dados);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["usuarios"]
            })
        }
    });
}

export const useEditar = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const request = await AXIOS.put(`/usuarios/${dados.usuario_id}`, dados);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["usuarios"]
            })
        }
    });
}

export const useDeletar = () => {
    return useMutation({
        mutationFn: async (id) => {
            const request = await AXIOS.delete(`/usuarios/${id}`);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["usuarios"]
            })
        }
    });
}