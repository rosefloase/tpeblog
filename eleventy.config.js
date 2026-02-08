export const config = {
  dir: {
    input: "sitefiles/"
  }
};


import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { DateTime } from "luxon";

export default function(eleventyConfig) {
//	eleventyConfig.addPassthroughCopy("sitefiles/favicon.ico");
  eleventyConfig.addFilter("toDate", (dateString) => {
    var awesomedate = DateTime.fromJSDate(dateString, { zone: "utc" }).toFormat(
      "LLLL d, yyyy",
    );
    return awesomedate.toLowerCase()
  });

    eleventyConfig.addFilter("toTime", (dateString) => {
    var awesomedate = DateTime.fromJSDate(dateString, { zone: "utc" }).toFormat(
      "LLLL d, yyyy';' t",
    );
    return awesomedate.toLowerCase()
  });

	eleventyConfig.addPassthroughCopy("sitefiles/resc/");

  eleventyConfig.addPlugin(syntaxHighlight);
};