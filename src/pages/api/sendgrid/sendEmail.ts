import sgMail from '@sendgrid/mail';
import { IncomingWebhook } from '@slack/webhook';
import { NextApiRequest, NextApiResponse } from 'next';

type sendEmailResponseProps = {
  statusCode: number;
};

const sendEmail = (
  req: NextApiRequest,
  res: NextApiResponse<sendEmailResponseProps>
) => {
  /* eslint no-console: 0 */
  console.log(process.env.SENDGRID_API_KEY as string);

  if (req.method === 'POST') {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    const contact_type = req.body.contact_type || '未回答';
    const company_name = req.body.company_name || '未回答';
    const person_name = req.body.person_name || '未回答';
    const tel = req.body.tel || '未回答';
    const content = req.body.content || '未回答';

    const data = {
      from: {
        name: '株式会社Scrumy',
        email: process.env.SENDGRID_FROM_EMAIL_ADDRESS,
      },
      personalizations: [
        {
          to: [
            {
              email: req.body.email,
            },
          ],
          dynamic_template_data: {
            contact_type: contact_type,
            company_name: company_name,
            person_name: person_name,
            tel: tel,
            content: content,
          },
        },
      ],
      templateId: process.env.SENDGRID_TEMPLATE_ID,
    };

    const sendSlack = async () => {
      const url = process.env.SLACK_WEBHOOK_URL;
      const webhook = new IncomingWebhook(url);
      await webhook.send(
        `【Scrumy-HPからお問い合わせがありました。】\n\n*お問い合わせの種類*\n${contact_type}\n*貴社名*\n${company_name}\n*ご担当者様名*\n${person_name}\n*お電話番号*\n${tel}\n*メールアドレス*\n${req.body.email}\n*お問い合わせ内容*\n${content}`
      );
    };

    (async () => {
      try {
        await sgMail.send(data);
        await sendSlack();
        res.status(200).end();
      } catch (error) {
        res.status(500).end();
      }
    })();
  }
};

export default sendEmail;
