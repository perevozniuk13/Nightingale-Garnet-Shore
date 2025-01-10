import { Application } from "../types/applicationTypes"

export const fetchApplications = async (requestedPage : number, requestedLimit : number) : Promise<Application[]> => {
    try {
        const response = await fetch(`http://localhost:3001/api/applications?_page=${requestedPage}&_limit=${requestedLimit}`);
        console.log(response);
        return response.json()
    } catch (e) {
        console.log('Error getting applications')
    }
}