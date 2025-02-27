import MessageInfoModel from "../models/messageInfo.model";
import { formatJoinedDate, formatTimestamp } from "./commonUtil";
import html2pdf from "html2pdf.js";


export const PDFFormat = ({message}: {message: MessageInfoModel}) => {
    return `
    <div id="pdf-content" style="padding: 20px; font-family: Arial, sans-serif;">
        <p style="font-weight: 600; color: #71717a; font-size: 12px;">${message.id}</p>
        <h1 style="font-weight: 500; font-size: 20px; margin-bottom: 10px;">
            ${message.jobTitle}
        </h1>

        <p style="white-space: pre-line; margin-bottom: 20px; line-height: 1.5;">
            ${message.jobDetails}
        </p>

        <div>
            <p style="font-size: 13px; color: #4b5563;"><b>Name:</b> ${message.firstName + " " + message.lastName}</p>
            <p style="font-size: 13px; color: #4b5563;"><b>Email:</b> ${message.email}</p>
            <p style="font-size: 13px; color: #4b5563;"><b>Phone:</b> ${message.phone}</p>
            <p style="font-size: 13px; color: #4b5563;"><b>Country:</b> ${message.country}</p>
            <p style="font-size: 13px; color: #4b5563;"><b>Company Name:</b> ${message.companyName}</p>
            <p style="font-size: 13px; color: #4b5563;"><b>Date:</b> ${formatJoinedDate(message.createdAt)}</p>
        </div>

        <div style="text-align: center; margin-top: 30px;">
            <p style="font-size: 12px; color: #4b5563;">
                If you need any help, contact us via 
                <span style="color: #0ea5e9;">info@blownmind.com.mm</span>
            </p>
            <h1 style="font-weight: bold; margin-top: 10px;">BlownMind</h1>
        </div>
    </div>
    `
}


export const exportPDF = async (id: string, message: MessageInfoModel) => {
    const element = PDFFormat({message: message});
    if (element) {
        await html2pdf()
        .set({
            margin: 10,
            filename: `${id}_${formatTimestamp()}.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        })
        .from(element)
        .save();
    }
};