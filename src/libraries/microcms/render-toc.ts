import cheerio from 'cheerio';

export const renderToc = (body: string) => {
  const $ = cheerio.load(body);
  const headings = $('h1, h2, h3').toArray();

  let h2 = 0;
  let h3 = 0;

  const toc = headings.map((data) => ({
    name: data.name,
    text: data.children[0].data,
    id: data.attribs.id,
  }));

  toc.forEach(function (toc) {
    if (toc.name == 'h2') {
      h2 = h2 + 1;
      h3 = 0;
      toc.text = h2 + '.' + toc.text;
    }
    if (toc.name == 'h3') {
      h3 = h3 + 1;
      toc.text = h3 + '.' + toc.text;
    }
  });

  return toc;
};
