export const fetchComplaints = async () => {
    try {
        const response = await fetch("URL_API_FETCH_COMPLAINTS");
        if (!response.ok) throw new Error("Error al cargar las quejas");
        const data = await response.json();
        return data; // Retorna la lista de quejas
    } catch (error) {
        console.error("Error al obtener las quejas:", error);
        throw error;
    }
};
