export interface FAQModel {
    id: string
    question: string
    createdAt: string
}

interface FAQInfoModel extends FAQModel {
    answer: string
}

export default FAQInfoModel