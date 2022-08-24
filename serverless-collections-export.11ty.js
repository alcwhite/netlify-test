exports.data = () => {
  return {
    permalink: {
      build: "./_generated-serverless-collections.json"
    },
		eleventyExcludeFromCollections: true,
    permalinkBypassOutputDir: true,
    layout: false,
  };
};

exports.render = (data) => {
  let entries = [];
  for(let entry of data.collections.pageNav) {
    if(entry.data && entry.data.eleventyNavigation) {
      let o = {
        data: {
          page: {
            url: entry.data.page.url,
          },
          eleventyNavigation: entry.data.eleventyNavigation,
        }
      };
      entries.push(o);
    }
  }

  return JSON.stringify({
    pageNav: entries
  }, null, 2);
};