module.exports = function(eleventyConfig) {
  //We use just the app.js name when in dev mode but a hashed name for cache-busting in prod
  eleventyConfig.addGlobalData("isDev", process.env.ELEVENTY_RUN_MODE === "serve");
  
  eleventyConfig.addPassthroughCopy({"assets/*.*": "./"});
  eleventyConfig.addPassthroughCopy("img");

	eleventyConfig.setServerOptions({
		liveReload: true,
    watch: ["./dist/**/*"]
  });
};

module.exports.config = {
  templateFormats: [
		"md",
		"njk",
		"html",
		"11ty.js",
	],

	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",

  dir: {
    input: "src/html",
    includes: "_includes",
    data: "_data",
    output: "dist"
  }
};