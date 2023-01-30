import { Box, Text } from '@chakra-ui/react';
import {
  CustomBlogsHits,
  CustomBlogsMenu,
  CustomPagination,
  CustomSearchBox,
  FadeInAnimation,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { searchClient } from 'libraries/algolia';
import { FC } from 'react';
import { Configure, InstantSearch } from 'react-instantsearch-hooks-web';
import { BLOG_PER_PAGE } from 'types';

// export const BlogMain: FC<BlogsProps> = ({ contents }) => {
//   return (
//     <IdWrapper id="blog">
//       <ContentWrapper bg="white">
//         <FadeInAnimation>
//           <Box mt={{ base: 12, xl: 16 }} px={{ xl: 14 }}>
//             <Accordion
//               allowToggle
//               allowMultiple
//               display={'grid'}
//               gap={{ base: 5, xl: 8 }}
//               mt={8}
//             >
//               {contents.map((item) => (
//                 <AccordionItem
//                   key={item.id}
//                   boxShadow={'secondary'}
//                   borderRadius="32px"
//                   overflow="hidden"
//                   border="none"
//                   p={0}
//                 >
//                   {({ isExpanded }) => (
//                     <>
//                       <BaseAccordionButton isExpanded={isExpanded}>
//                         <Box
//                           display={{ xl: 'flex' }}
//                           alignItems={{ xl: 'center' }}
//                         >
//                           <Box
//                             fontSize={{ base: 'sm', xl: 'md' }}
//                             display={'flex'}
//                             alignItems={'center'}
//                             mr={{ xl: 16 }}
//                           >
//                             <Text
//                               mr={{ base: 5, xl: 10 }}
//                               lang="en"
//                               suppressHydrationWarning
//                             >
//                               {dayjs(item.publishedAt).format('YYYY.MM.DD')}
//                             </Text>
//                             <Text
//                               minW={{ base: 20, xl: '140px' }}
//                               display="inline-block"
//                               bg="main.100"
//                               color="sub.100"
//                               px={2}
//                               textAlign={'center'}
//                             >
//                               {item.category.name}
//                             </Text>
//                           </Box>
//                           <Text pr={{ base: 3, xl: 6 }} mt={{ base: 3, xl: 0 }}>
//                             {item.title}
//                           </Text>
//                         </Box>
//                       </BaseAccordionButton>
//                       <BaseAccordionPanel>{item.content}</BaseAccordionPanel>
//                     </>
//                   )}
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </Box>
//         </FadeInAnimation>
//       </ContentWrapper>
//     </IdWrapper>
//   );
// };

export const BlogMain: FC = () => {
  return (
    <IdWrapper id="blog">
      <ContentWrapper as="section" maxW={'calc(1080px + (96px * 2))'}>
        <InstantSearch searchClient={searchClient} indexName="blog">
          <FadeInAnimation>
            <Configure hitsPerPage={BLOG_PER_PAGE} />
            <Box
              pr={{ xl: 16 }}
              pb={{ base: 16, xl: 24 }}
              position="relative"
              display={'grid'}
              gap={{ base: 8, xl: 12 }}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                display: 'block',
                width: '100%',
                height: '1px',
                backgroundColor: 'sub.100',
                opacity: 0.24,
              }}
            >
              <Box display={{ xl: 'flex' }} alignItems="center">
                <Text
                  fontSize={{ base: 'xl', xl: '2xl' }}
                  fontWeight="bold"
                  flexBasis={{ xl: '264px' }}
                  pr={{ xl: 6 }}
                >
                  キーワードから探す
                </Text>
                <Box
                  flexBasis={{ xl: 'calc(100% - 264px)' }}
                  mt={{ base: 4, xl: 0 }}
                >
                  <CustomSearchBox />
                </Box>
              </Box>
              <Box display={{ xl: 'flex' }} alignItems="center">
                <Text
                  fontSize={{ base: 'xl', xl: '2xl' }}
                  fontWeight="bold"
                  flexBasis={{ xl: '264px' }}
                  pr={{ xl: 6 }}
                >
                  カテゴリから探す
                </Text>
                <CustomBlogsMenu attribute="category" />
              </Box>
            </Box>
          </FadeInAnimation>
          <FadeInAnimation>
            <Box pt={{ base: 6, xl: 16 }}>
              <CustomBlogsHits />
              <Box mt={{ base: 16, xl: 24 }}>
                <CustomPagination />
              </Box>
            </Box>
          </FadeInAnimation>
        </InstantSearch>
      </ContentWrapper>
    </IdWrapper>
  );
};
