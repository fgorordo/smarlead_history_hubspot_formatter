export interface CampaingLeadInformation {
    total_leads: string
    data: Daum[]
    offset: number
    limit: number
  }
  
  export interface Daum {
    campaign_lead_map_id: string
    lead_category_id?: number
    status: string
    created_at: string
    lead: Lead
  }
  
  export interface Lead {
    id: number
    first_name: string
    last_name: string
    email: string
    phone_number: any
    company_name: string
    website: any
    location: string
    custom_fields: CustomFields
    linkedin_profile: any
    company_url: any
    is_unsubscribed: boolean
    unsubscribed_client_id_map: UnsubscribedClientIdMap
  }
  
  export interface CustomFields {
    ID: string
    Industry: string
  }
  
  export interface UnsubscribedClientIdMap {}
  