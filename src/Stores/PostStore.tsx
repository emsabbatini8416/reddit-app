import { observable, runInAction, decorate } from 'mobx';
import PostService from '../Services/PostService'

class PostStore {
    postData = {
        posts: []
    };
    status: string = 'initial';
    postService: PostService;
    constructor() {
        this.postService = new PostService();
    }
   
    getPostsAsync = async () => {
        try {
            var params = {
                limit: '50',
            };
            const urlParams = new URLSearchParams(Object.entries(params));
            const data = await this.postService.get(urlParams)
            runInAction(() => {
                this.postData.posts = data.data.children;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };
}

decorate(PostStore, {
    postData: observable
});

export default new PostStore();