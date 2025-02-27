export interface MessageModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    companyName: string;
    country: string;
    createdAt: string;
    read: boolean;
};

interface MessageInfoModel extends MessageModel {
    jobTitle: string;
    jobDetails: string;
}

export default MessageInfoModel