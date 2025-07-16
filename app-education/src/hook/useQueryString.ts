import { useSearchParams } from "react-router";
const useQueryString = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const spo = Object.fromEntries([...searchParams]);
    const setQueryString = (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
        setSearchParams(params.toString());
    };
    const removeQueryString = (name:string) => {
        const param = searchParams.get(name);
    
        if (param) {
          searchParams.delete(name);
          setSearchParams(searchParams);
        }
      };
    return { queryString: spo, setQueryString ,removeQueryString};
};

export default useQueryString;
