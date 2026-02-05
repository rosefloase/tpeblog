export const config = {
  dir: {
    input: "sitefiles/"
  }
};

export default function (eleventyConfig) {
//	eleventyConfig.addPassthroughCopy("sitefiles/favicon.ico");
	eleventyConfig.addPassthroughCopy("sitefiles/resc/");
	
};
