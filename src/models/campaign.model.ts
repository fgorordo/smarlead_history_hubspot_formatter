export type Campaigns = Campaign[]

export interface Campaign {
  id: number
  user_id: number
  created_at: string
  updated_at: string
  status: string
  name: string
  track_settings: any[]
  scheduler_cron_value?: SchedulerCronValue
  min_time_btwn_emails: number
  max_leads_per_day: number
  stop_lead_settings: string
  enable_ai_esp_matching: boolean
  send_as_plain_text: boolean
  follow_up_percentage: number
  unsubscribe_text?: string
  parent_campaign_id: any
  client_id: any
}

export interface SchedulerCronValue {
  tz: string
  days: number[]
  endHour: string
  startHour: string
}
