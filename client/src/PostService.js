import axios from 'axios';

//const url = 'http://localhost:5001/api/posts/';
const url = 'api/posts/';

class PostService {
    //Get posts
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    //Create post
    static insertPost(name) {
        return axios.post(url, {
            name
        });
    }

    //Delete post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }

}

export default PostService; 