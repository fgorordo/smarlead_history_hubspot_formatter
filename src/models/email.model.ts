export interface LeadEmails {
  history: History[];
  from: string;
  to: string;
}

export interface History {
  stats_id: string;
  type: string;
  message_id: string;
  time: string;
  email_body: string;
  subject: string;
  email_seq_number: string;
  open_count: number;
  click_count: number;
  click_details: ClickDetails;
}

export interface ClickDetails {}

export interface ExportEmail {
  from: string;
  to: string;
  subject: string;
  email_body: string;
  email_seq_number: string;
  type: string;
  time: string;
}
