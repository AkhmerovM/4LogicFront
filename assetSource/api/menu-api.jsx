import { BaseApi } from './base-api';

class menuApi extends BaseApi {
    static getMenu () {
        return BaseApi.get('/api/v1/post.json');
    }
}
export { menuApi };
