import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

type sendEmailResponseProps = {
  statusCode: number;
};

const sendEmail = (
  req: NextApiRequest,
  res: NextApiResponse<sendEmailResponseProps>
) => {
  if (req.method === 'POST') {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    const message = {
      to: req.body.email,
      from: process.env.SENDGRID_FROM_EMAIL_ADDRESS,
      subject: 'お問い合わせありがとうございます',
      text: `${req.body.company_name} 様\n\nこの度はお問い合わせいただき、誠にありがとうございます。\n以下の内容でお問い合わせを受付いたしました。\n\nお問い合わせの種類\n${req.body.contact_type}\nお問い合わせ内容\n${req.body.content}\n\nお問い合わせ内容については、後ほど、担当者よりご連絡をさせていただきます。\n今しばらくお待ちくださいますようよろしくお願い申し上げます。`,
    };

    (async () => {
      try {
        await sgMail.send(message);
        res.status(200).end();
      } catch (error) {
        res.status(500).end();
      }
    })();
  }
};

export default sendEmail;
