import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import {
  AngleDownIcon,
  AngleUpIcon,
  FormAgree,
  FormButton,
  FormDescriptionInput,
  FormDescriptionTextarea,
  FormItem,
  FormTerm,
} from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormProps = {
  company_name: string;
  person_name: string;
  email: string;
  content: string;
  agree: boolean;
};

export const BlogContact: FC = () => {
  const [send, setSend] = useState<null | 'success' | 'failed'>(null);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<FormProps>();

  const onSubmit = async (data: FormProps) => {
    await axios
      .post('/api/sendgrid/sendEmail', data)
      .then(() => {
        setSend('success');
      })
      .catch(() => {
        setSend('failed');
      })
      .finally(() => {
        reset();
      });
  };

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <ContentWrapper
      maxW="calc(820px + (96px * 2))"
      mx={{ base: 'auto', xl: '0' }}
    >
      <Box
        as="button"
        maxW={{ base: 'full', xl: 'full' }}
        onClick={() => setIsFormOpen(!isFormOpen)}
        px={{ base: 10, xl: 8 }}
        py={{ base: 3, xl: 4 }}
        fontSize={{ base: 'md', xl: 'xl' }}
        fontWeight="bold"
        minH={{ base: 12, lg: 14, xl: 18 }}
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="full"
        boxShadow="primary"
        textAlign="center"
        w="full"
        color="base.100"
        bg="accent.200"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          bgGradient: 'linear(to-r,accent.200,accent.100,accent.300)',
          transitionProperty: 'common',
          transitionTimingFunction: 'linear',
          transitionDuration: 'fast',
        }}
      >
        <Flex
          as="span"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Box as="span" mr={4}>
            コメントはこちらから
          </Box>
          {isFormOpen ? <AngleUpIcon /> : <AngleDownIcon />}
        </Flex>
      </Box>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        display={isFormOpen ? 'block' : 'none'}
        mt="16"
      >
        <Box display={'grid'} gap={{ base: 9, xl: '44px' }}>
          <FormItem>
            <FormTerm htmlFor="content" require={true}>
              コメント
            </FormTerm>
            <FormDescriptionTextarea
              id="content"
              error={errors.content}
              register={register('content', {
                required: 'コメントは必須項目です。',
              })}
            />
          </FormItem>
          <FormItem>
            <FormTerm require={true} htmlFor="person_name">
              お名前
            </FormTerm>
            <FormDescriptionInput
              id="person_name"
              type="text"
              placeholder="例）山田 花子"
              register={register('person_name', {
                required: 'お名前は必須項目です。',
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
            <FormTerm htmlFor="company_name">御社名</FormTerm>
            <FormDescriptionInput
              id="company_name"
              type="text"
              placeholder="例）株式会社Scrumy"
              error={errors.company_name}
              register={register('company_name')}
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
        <Box mt={{ base: 14, xl: 16 }}>
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
