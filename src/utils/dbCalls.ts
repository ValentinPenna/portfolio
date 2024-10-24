const apiUrl = import.meta.env.PUBLIC_API_URL;
export const getProjects = async () => {
    try {
        const response = await fetch(`${apiUrl}/projects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // cache: 'no-cache',
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
}
export const getProjectById = async (id: string) => {
    try {
        const response = await fetch(`${apiUrl}/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // cache: 'no-cache',
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
}
export const postProject = async (project: any) => {
    try {
        const response = await fetch(`${apiUrl}/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
            // cache: 'no-cache',
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
}
export const putProject = async (id:string, project: any) => {
    try {
        const response = await fetch(`${apiUrl}/projects/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
            // cache: 'no-cache',
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
}
export const deleteProject = async (id: string) => {
    try {
        const response = await fetch(`${apiUrl}/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            // cache: 'no-cache',
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
}