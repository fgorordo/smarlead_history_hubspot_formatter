export interface CampaignAnalytics {
  id: number;
  user_id: number;
  created_at: string;
  status: string;
  name: string;
  sent_count: string;
  open_count: string;
  click_count: string;
  reply_count: string;
  block_count: string;
  total_count: string;
  sequence_count: string;
  drafted_count: string;
  tags: any;
  unique_sent_count: string;
  unique_open_count: string;
  unique_click_count: string;
  client_id: any;
  bounce_count: string;
  parent_campaign_id: any;
  unsubscribed_count: string;
  campaign_lead_stats: CampaignLeadStats;
  team_member_id: any;
  send_as_plain_text: boolean;
  client_name: any;
  client_email: any;
  client_company_name: any;
}

export interface CampaignLeadStats {
  total: number;
  paused: number;
  blocked: number;
  revenue: number;
  stopped: number;
  completed: number;
  inprogress: number;
  interested: number;
  notStarted: number;
}
