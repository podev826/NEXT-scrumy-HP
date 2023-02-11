import cheerio from 'cheerio';

export const renderToc = (body: string) => {
  const $ = cheerio.load(body);
  const headings = $('h1, h2, h3').toArray();

  const toc = headings.map((data) => ({
    name: data.name,
    text: data.children[0].data,
    id: data.attribs.id,
    name: data.name,
  }));

  return toc;
};
