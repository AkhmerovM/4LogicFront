import { BaseApi } from './base-api';

class bodyApi extends BaseApi {
    static sendCode (file) {
        console.log(file);
        const formData  = new FormData();
        formData.append('source', file);
        return this.post('http://127.0.0.1:8000/compare/compare', {
            body: formData
        });
    }
    static checkData(id) {
        return this.get(`http://127.0.0.1:8000/compare/result?id=${id}`);
    }
}


export { bodyApi };
