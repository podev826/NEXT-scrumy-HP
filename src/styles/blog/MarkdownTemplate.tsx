import {
  Box,
  BoxProps,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { IdWrapper } from 'components/Layouts';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';

type MarkdownTemplateProps = {
  source: string;
} & BoxProps;

const h2 = {
  props: {
    mb: '10px',
    p: '15px',
    fontSize: '2xl',
    backgroundColor: '#38B5A6',
    color: 'white',
  },
};
const h3 = {
  props: {
    mt: '10px',
    mb: '16px',
    p: '10px',
    fontSize: 'xl',
    borderLeftWidth: '10px',
    borderTopWidth: '2px',
    borderRightWidth: '2px',
    borderBottomWidth: '2px',
    borderColor: '#38B5A6',
  },
};

const p = {
  props: {
    lineHeight: '1.7',
    fontSize: 'xl',
    mb: '10',
  },
};

const ul = {
  props: {
    my: '1',
    lineHeight: '2',
    pl: '1em',
  },
};

const li = {
  props: {
    fontSize: 'xl',
  },
};

// 追加
const blockquote = {
  props: {
    color: 'gray.500',
    my: '1em',
    pl: '2em',
    borderLeft: '2px',
    borderColor: 'gray.500',
    fontSize: '18px',
    lineHeight: '1.8',
  },
};

const a = {
  props: {
    isExternal: true,
    textDecoration: 'none',
    color: '#3182CE',
    _hover: {
      textDecoration: 'none',
      color: '#4593e6',
    },
  },
};

const img = {
  props: {
    mx: 'auto',
    // width: { base:'70vw',md: '50vw', xl: '550px' },
    h: '30vh',
  },
};

const options: HTMLReactParserOptions = {
  replace: (domNode: any) => {
    if (domNode.type === 'tag') {
      // if (domNode.name === 'h1') {
      //   return (
      //     <IdWrapper id={domNode.children[0].data}>
      //       <Heading as="h1" {...h1.props}>
      //         {domToReact(domNode.children, options)}
      //       </Heading>
      //     </IdWrapper>
      //   );
      // }

      if (domNode.name === 'h2') {
        return (
          <IdWrapper id={domNode.children[0].data}>
            <Heading as="h2" {...h2.props}>
              {domToReact(domNode.children, options)}
            </Heading>
          </IdWrapper>
        );
      }
      if (domNode.name === 'h3') {
        return (
          <IdWrapper id={domNode.children[0].data}>
            <Text as="h3" {...h3.props}>
              {domToReact(domNode.children, options)}
            </Text>
          </IdWrapper>
        );
      }
      if (domNode.name === 'ul') {
        return (
          <UnorderedList {...ul.props}>
            {domToReact(domNode.children, options)}
          </UnorderedList>
        );
      }
      if (domNode.name === 'li') {
        return (
          <ListItem {...li.props}>
            {domToReact(domNode.children, options)}
          </ListItem>
        );
      }
      if (domNode.name === 'p') {
        return (
          <Text {...p.props}>{domToReact(domNode.children, options)}</Text>
        );
      }
      // 追加
      if (domNode.name === 'blockquote') {
        return (
          <Box as="blockquote" {...blockquote.props}>
            {domToReact(domNode.children, options)}
          </Box>
        );
      }
      if (domNode.name === 'a') {
        return (
          <Link {...a.props} href={domNode.attribs.href}>
            {domToReact(domNode.children, options)}
          </Link>
        );
      }
      if (domNode.name === 'img') {
        return <Image {...img.props} src={domNode.attribs.src} alt="" />;
      }
    }
  },
};

export const MarkdownTemplate = (props: MarkdownTemplateProps) => {
  return <Box {...props}>{parse(props.source, options)}</Box>;
};
