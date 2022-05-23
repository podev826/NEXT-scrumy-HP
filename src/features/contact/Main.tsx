import { Box, FormLabel } from '@chakra-ui/react';
import { PrimaryLink, SecondaryLink } from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { FC } from 'react';

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
  return (
    <ContentWrapper maxW="calc(820px + (96px * 2))" bgType="white">
      <Box as="form" action="">
        <Box as="dl" display={'grid'} gap={{ base: 9, xl: '44px' }}>
          <ContactItem>
            <ContactTerm require={true} htmlFor="contact_type">
              お問い合わせの種類
            </ContactTerm>
            <ContactDescriptionRadio />
          </ContactItem>
          <ContactItem>
            <ContactTerm require={true} htmlFor="company_name">
              御社名
            </ContactTerm>
            <ContactDescriptionInput
              id="company_name"
              type="text"
              name="company_name"
              placeholder="例）株式会社Scrumy"
            />
          </ContactItem>
          <ContactItem>
            <ContactTerm htmlFor="person_name">ご担当者様名</ContactTerm>
            <ContactDescriptionInput
              id="person_name"
              type="text"
              name="person_name"
              placeholder="例）山田 花子"
            />
          </ContactItem>
          <ContactItem>
            <ContactTerm htmlFor="tel">お電話番号</ContactTerm>
            <ContactDescriptionInput
              id="tel"
              type="tel"
              name="tel"
              placeholder="例）0120-000-123"
            />
          </ContactItem>
          <ContactItem>
            <ContactTerm htmlFor="email" require={true}>
              メールアドレス
            </ContactTerm>
            <ContactDescriptionInput
              id="email"
              type="email"
              name="email"
              placeholder="例）info@scrumy.com"
            />
          </ContactItem>
          <ContactItem>
            <ContactTerm htmlFor="content" require={true}>
              お問い合わせ内容
            </ContactTerm>
            <ContactDescriptionTextarea id="content" name="content" />
          </ContactItem>
        </Box>
        <Box mt={{ base: 14, xl: 16 }}>
          <ContactAgree />
        </Box>
        <Box mt={{ base: 14, xl: 16 }}>
          <ContactButton />
        </Box>
      </Box>
    </ContentWrapper>
  );
};
