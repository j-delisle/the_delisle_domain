module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/images')
    eleventyConfig.addPassthroughCopy('src/admin')
    eleventyConfig.addPassthroughCopy('src/static/css')

    return {
        addPassthroughCopy: true,
        templateFormats: ['njk', 'html', 'md'],
        markdownTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: '_site',
            includes: 'includes'
        }
    }
}