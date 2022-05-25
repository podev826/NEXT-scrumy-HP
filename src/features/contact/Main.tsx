import { Box } from '@chakra-ui/react';
import { ContentWrapper } from 'components/Layouts';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  ContactAgree,
  ContactButton,
  ContactDescriptionInput,
  ContactDescriptionRadio,
  ContactDescriptionTextarea,
  ContactItem,
  ContactTerm,
} from './FormParts';

export const ContactMain: FC = () => {
  const [send, setSend] = useState<null | 'success' | 'failed'>(null);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm();

  const onSubmit = async (values: any) => {
    const sleep = (waitTime: number) =>
      new Promise((resolve) => setTimeout(resolve, waitTime));
    await sleep(3000);
    await setSend('success');
    await reset();
  };

  return (
    <ContentWrapper maxW="calc(820px + (96px * 2))" bgType="white">
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Box as="dl" display={'grid'} gap={{ base: 9, xl: '44px' }}>
          <ContactItem>
            <ContactTerm require={true} htmlFor="contact_type">
              お問い合わせの種類
            </ContactTerm>
            <ContactDescriptionRadio
              options={[
                'スクラム申請について',
                'セキュリティ診断について',
                'セミナーについて',
                '採用について',
                'その他お問い合わせ',
              ]}
              error={errors.contact_type}
              register={register('contact_type', {
                required: 'お問い合わせの種類は必須項目です。',
              })}
            />
          </ContactItem>
          <ContactItem>
            <ContactTerm require={true} htmlFor="company_name">
              貴社名
            </ContactTerm>
            <ContactDescriptionInput
              id="company_name"
              type="text"
              placeholder="例）株式会社Scrumy"
              error={errors.company_name}
              register={register('company_name', {
                required: '貴社名は必須項目です。',
              })}
            />
          </ContactItem>
          <ContactItem>
            <ContactTerm htmlFor="person_name">ご担当者様名</ContactTerm>
            <ContactDescriptionInput
              id="person_name"
              type="text"
              placeholder="例）山田 花子"
              register={register('person_name')}
            />
          </ContactItem>
          <ContactItem>
            <ContactTerm htmlFor="tel">お電話番号</ContactTerm>
            <ContactDescriptionInput
              id="tel"
              type="tel"
              placeholder="例）0120-000-123"
              error={errors.tel}
              register={register('tel', {
                pattern: {
                  value: /^0[-0-9]{9,12}$/,
                  message: 'お電話番号が間違った形式です。',
                },
              })}
            />
          </ContactItem>
          <ContactItem>
            <ContactTerm htmlFor="email" require={true}>
              メールアドレス
            </ContactTerm>
            <ContactDescriptionInput
              id="email"
              type="email"
              placeholder="例）info@scrumy.com"
              error={errors.email}
              register={register('email', {
                required: 'メールアドレスは必須項目です。',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'メールアドレスが間違った形式です。',
                },
              })}
            />
          </ContactItem>
          <ContactItem>
            <ContactTerm htmlFor="content" require={true}>
              お問い合わせ内容
            </ContactTerm>
            <ContactDescriptionTextarea
              id="content"
              error={errors.content}
              register={register('content', {
                required: 'お問い合わせ内容は必須項目です。',
              })}
            />
          </ContactItem>
        </Box>
        <Box mt={{ base: 14, xl: 16 }}>
          <ContactAgree
            error={errors.agree}
            register={register('agree', {
              required: 'プライバシーポリシーは必須項目です。',
            })}
          />
        </Box>
        <Box mt={{ base: 14, xl: 16 }}>
          <ContactButton
            isSubmitting={isSubmitting}
            send={send}
            setSend={setSend}
          />
        </Box>
      </Box>
    </ContentWrapper>
  );
};
