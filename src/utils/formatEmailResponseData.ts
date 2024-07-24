import { LeadEmails, History, ExportEmail } from "../models/email.model"

export const formatEmailResponseData = (response: LeadEmails):ExportEmail[] => {
    const {history, from, to} = response;
    const formmatedOutput = history.map((message: History) => {
        const {email_body,subject, time, email_seq_number, type} = message;
        return {
            from,
            to,
            subject,
            email_body,
            email_seq_number,
            type,
            time
        }
    });
    return formmatedOutput;
}