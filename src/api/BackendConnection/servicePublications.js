import API from '../API';

export async function getPublications(urltype) {
    try {
        const response = await API.get('/informations'+urltype);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
