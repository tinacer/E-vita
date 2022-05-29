module.exports = function(eleventyConfig) {


	eleventyConfig.addPassthroughCopy("Images");
	eleventyConfig.addPassthroughCopy("Icons");


	eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPassthroughCopy("admin");

  return {
    
    templateFormats: ["njk", "html", "md", "liquid"],

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};
