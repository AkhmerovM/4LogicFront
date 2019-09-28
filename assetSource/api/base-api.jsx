function getOptions (options, method) {
    const result = { ...options };
    if (!result.headers) {
        result.headers = {};
    }

    return {
        ...result,
        credentials: 'include',
        headers: {
            ...result.headers
            //'X-HTTP-METHOD-OVERRIDE': method
        },
        method: 'POST'
    };
}

class BaseApi {
    static get (url) {
        return fetch(url).then(response => response.json());
    }
    static post (url, options) {
        return fetch(url, getOptions(options, 'POST')).then(response => response.json());
    }
}
export { BaseApi };
