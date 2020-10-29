const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/static");

  eleventyConfig.addPlugin(pluginRss)

  eleventyConfig.addCollection("recentPosts", function (collection) {
    return collection.getFilteredByGlob("src/blogs/*.md").reverse();
  });

  return {
    addPassthroughCopy: true,
    templateFormats: ["njk", "html", "md"],
    markdownTemplateEngine: false,
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
    },
  };
};