import sgMail from '@sendgrid/mail';
import { SEND_GRID } from 'configs';
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

    const contact_type = req.body.contact_type || '未回答';
    const company_name = req.body.company_name || '未回答';
    const person_name = req.body.person_name || '未回答';
    const tel = req.body.tel || '未回答';
    const content = req.body.content || '未回答';

    const data = {
      from: {
        name: '株式会社Scrumy',
        email: SEND_GRID.fromEmailAddress,
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
      templateId: 'd-c1ac08115803404885cb28eaa9052d5e',
    };

    (async () => {
      try {
        await sgMail.send(data);
        res.status(200).end();
      } catch (error) {
        res.status(500).end();
      }
    })();
  }
};

export default sendEmail;
