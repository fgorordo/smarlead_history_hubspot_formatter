import chalk from "chalk";
import { CampaignAnalytics } from "../models/analytics.model";

export const showTopLevelAnalytics = (analytics: CampaignAnalytics) => {
    const { name, status, id, sent_count, open_count, click_count, total_count, reply_count,campaign_lead_stats} = analytics;
    console.log(`
        ${chalk.bold(chalk.green('Information'))}
        ${chalk.bold('Campaign ID:')} ${chalk.yellow(id)}
        ${chalk.bold('Campaign name:')} ${chalk.yellow(name)}
        ${chalk.bold('Campaign status:')} ${chalk.yellow(status)}

        ${chalk.bold(chalk.green('Emails'))}
        ${chalk.bold('Total emails:')} ${chalk.yellow((+reply_count) + (+sent_count))}
        ${chalk.bold('Total emails sent:')} ${chalk.yellow(sent_count)}
        ${chalk.bold('Total emails opened:')} ${chalk.yellow(open_count)}
        ${chalk.bold('Total emails clickeds:')} ${chalk.yellow(click_count)}
        ${chalk.bold('Total replies:')} ${chalk.yellow(reply_count)}

        ${chalk.bold(chalk.green('Leads'))}
        ${chalk.bold('Total leads reached:')} ${chalk.yellow(campaign_lead_stats.total)}
        ${chalk.bold('Total leads conversation completed:')} ${chalk.yellow(campaign_lead_stats.completed)}
        ${chalk.bold('Total leads conversation in progress:')} ${chalk.yellow(campaign_lead_stats.inprogress)}
        ${chalk.bold('Total leads conversation pending to contact:')} ${chalk.yellow(campaign_lead_stats.notStarted)}
    `);
}