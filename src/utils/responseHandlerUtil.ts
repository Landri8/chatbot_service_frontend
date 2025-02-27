import HTTPStatus from "../constants/httpStatusConst";
import ResponseModel from "../models/response.model";

export const httpResponseHandler = (response: ResponseModel) => {
    if (response.statusCode == HTTPStatus.SUCCESS) {
        return response.data;
    }
    else if (response.statusCode == HTTPStatus.FAIL) {
        throw new Error(response.message);
    } else if (response.statusCode == HTTPStatus.UNAUTHENTICATED) {
        throw new Error(response.message);
    } else if (response.statusCode == HTTPStatus.UNAUTHORIZED) {
        throw new Error(response.message);
    } else {
        throw new Error('Something went wrong');
    }
}