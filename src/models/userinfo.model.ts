export interface UserModel {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
};

interface AuthInfoModel {
    accessToken: string;
    refreshToken: string;
    user: UserModel;
}

export default AuthInfoModel