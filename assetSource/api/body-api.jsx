import { BaseApi } from './base-api';

class bodyApi extends BaseApi {
    static getPostList () {
        return this.get('/api/v1/post.json');
    }
    static getPeople () {
        return this.get('http://localhost:8080/character');
    }
}


export { bodyApi };
