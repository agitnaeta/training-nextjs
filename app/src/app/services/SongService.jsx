import axios from 'axios'
export async function search(text = ''){

    if(text===''){
        return {};
    }

    const options = {
        method: 'GET',
        url: `https://${process.env.NEXT_PUBLIC_API_HOST}/search/`,
        params: {
            q: text,
            type: 'tracks',
            offset: '0',
            limit: '10',
            numberOfTopResults: '5'
        },
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error(error);
    }
}


export async function play(songId){
    const options = {
        method: 'GET',
        url: `https://${process.env.NEXT_PUBLIC_API_HOST}/tracks/`,
        params: {
        ids: songId
    },
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
    }
    };

    try {
    const response = await axios.request(options);
    return response;
    } catch (error) {
    console.error(error);
    }
}