import React from "react";
import { useLocation } from "react-router-dom";

// Custom hook for get query param.
export const useQuery = () => {
	const { search } = useLocation();

	return React.useMemo(() => new URLSearchParams(search), [search]);
}