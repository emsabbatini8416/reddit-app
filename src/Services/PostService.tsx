class CountryService {
    
    get = async (urlParams: any) => {
        const options = {
            method: "GET",
        }
     const request = new Request("https://www.reddit.com/r/all/top.json?" + urlParams, options);
     const response = await fetch(request);
     return response.json();
    }

}

export default CountryService;