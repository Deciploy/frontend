import { useSearchParams } from "react-router-dom";

export const useParamsQuery = () => {
    const [params, _setParams] = useSearchParams();

    const getParams = (key: string) => params.get(key) ?? undefined;

    const setParams = (key: string, value: string) => {
        _setParams((params) => {
            params.set(key, value);
            return params;
        });
    };

    const query = `?${params.toString()}`

    return { setParams, getParams, query }
}