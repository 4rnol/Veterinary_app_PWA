import API from '../API';

export async function getPublications(urltype) {
    try {
        const response = await API.get('/informations'+urltype);
        return response.data;
    } catch (error) {
        console.warn(error)
    }
}
export async function getPublication(id) {
    try {
        const response = await API.get('/informations/'+id);
        return response.data;
    } catch (error) {
        console.warn(error)
    }
}

export async function postPublication(title,category,description,urlFoto,veterinary) {
    try {
        const response = await API.post('/informations/',
            {
                title,
                category,
                description,
                urlFoto,
                veterinary
            }
        );
        return response;
    } catch (error) {
        console.warn(error)
    }
}
export async function getPendingPublications(){
    try {
        const response = await API.get('/informations/pending');
        return response.data;
    } catch (error) {
        console.warn(error)
    }
}

export async function updatePublicationState(state,id){
    try {
        const response = await API.put('informations/answer/'+id,
        {
            state
        });
        return response.data;
    } catch (error) {
        console.warn(error)
    }
}

export async function getVeterinaryPublications(id){
    try {
        const response = await API.get('informations/vet/'+id);
        return response.data;
    } catch (error) {
        console.warn(error)
    }
}