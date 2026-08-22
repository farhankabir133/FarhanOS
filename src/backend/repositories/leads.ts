import { query } from "../db/pool.js";

export interface LeadRecord {
  name: string;
  email: string;
  subject: string;
  message: string;
  urgency?: string;
  inquiryType?: string;
  emailSent: boolean;
}

export async function saveContactMessage(lead: LeadRecord): Promise<void> {
  await query(
    `INSERT INTO contact_messages (name, email, subject, message, urgency, inquiry_type, email_sent)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      lead.name || null,
      lead.email,
      lead.subject || null,
      lead.message,
      lead.urgency ?? null,
      lead.inquiryType ?? null,
      lead.emailSent,
    ]
  );
}

export interface BriefRecord {
  projectType: string;
  budget?: string;
  timeline?: string;
  goals: string;
  comments?: string;
  email?: string;
  aiSummary?: string;
}

export async function saveBriefRequest(brief: BriefRecord): Promise<void> {
  await query(
    `INSERT INTO brief_requests (project_type, budget, timeline, goals, comments, email, ai_summary)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      brief.projectType || null,
      brief.budget || null,
      brief.timeline || null,
      brief.goals,
      brief.comments || null,
      brief.email || null,
      brief.aiSummary || null,
    ]
  );
}
