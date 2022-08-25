const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const anchor = require('markdown-it-anchor')
const md = require('markdown-it')
const EleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("_headers");

  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "secure",
    functionsDir: "./netlify/functions/",
    redirects: "netlify-toml",
    copy: ["_generated-serverless-collections.json"]
  });

  eleventyConfig.addCollection("pageNav", (collection) => {
		return collection.getAll().filter(item => item.data.eleventyNavigation);
	});

  
  let markdownLib = md({
    html: true,
    linkify: true
  }).use(anchor, {
    permalink: anchor.permalink.headerLink()
  })
  
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPlugin(EleventyNavigationPlugin);

	return {
    dir: {
			output: "_site",
			data: "_data",
		},
    templateFormats: ["liquid", "md", "11ty.js"],
  }
};