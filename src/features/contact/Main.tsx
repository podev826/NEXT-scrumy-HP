import { Box } from '@chakra-ui/react';
import {
  FormAgree,
  FormButton,
  FormDescriptionInput,
  FormDescriptionRadio,
  FormDescriptionTextarea,
  FormItem,
  FormTerm,
} from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

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
          <FormItem>
            <FormTerm require={true} htmlFor="contact_type">
              お問い合わせの種類
            </FormTerm>
            <FormDescriptionRadio
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
          </FormItem>
          <FormItem>
            <FormTerm require={true} htmlFor="company_name">
              貴社名
            </FormTerm>
            <FormDescriptionInput
              id="company_name"
              type="text"
              placeholder="例）株式会社Scrumy"
              error={errors.company_name}
              register={register('company_name', {
                required: '貴社名は必須項目です。',
              })}
            />
          </FormItem>
          <FormItem>
            <FormTerm htmlFor="person_name">ご担当者様名</FormTerm>
            <FormDescriptionInput
              id="person_name"
              type="text"
              placeholder="例）山田 花子"
              register={register('person_name')}
            />
          </FormItem>
          <FormItem>
            <FormTerm htmlFor="tel">お電話番号</FormTerm>
            <FormDescriptionInput
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
          </FormItem>
          <FormItem>
            <FormTerm htmlFor="email" require={true}>
              メールアドレス
            </FormTerm>
            <FormDescriptionInput
              id="email"
              type="email"
              placeholder="例）info@scrumy.co.jp"
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
          </FormItem>
          <FormItem>
            <FormTerm htmlFor="content" require={true}>
              お問い合わせ内容
            </FormTerm>
            <FormDescriptionTextarea
              id="content"
              error={errors.content}
              register={register('content', {
                required: 'お問い合わせ内容は必須項目です。',
              })}
            />
          </FormItem>
        </Box>
        <Box mt={{ base: 14, xl: 16 }}>
          <FormAgree
            error={errors.agree}
            register={register('agree', {
              required: 'プライバシーポリシーは必須項目です。',
            })}
          />
        </Box>
        <Box
          mt={{ base: 14, xl: 16 }}
          maxW={{ base: '324px', xl: '368px' }}
          mx="auto"
        >
          <FormButton
            isSubmitting={isSubmitting}
            send={send}
            setSend={setSend}
          />
        </Box>
      </Box>
    </ContentWrapper>
  );
};
