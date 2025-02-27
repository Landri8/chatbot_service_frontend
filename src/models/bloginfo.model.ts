export interface BlogModel {
    id: string;
    title: string;
    date: string;
    coverImage: string;
};

interface BlogInfoModel extends BlogModel {
    content: string
}

export default BlogInfoModel