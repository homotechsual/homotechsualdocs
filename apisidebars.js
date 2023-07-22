/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
/* @TS-Check */
const sidebars = {
    ninjaoneapi: [
        {
            type: 'category',
            label: 'NinjaOne API',
            link: {
                type: 'generated-index',
                description: 'OpenAPI documentation for the NinjaOne public API.',
                slug: 'category/ninjaoneapi'
            },
            items: require("./api/ninjaone/sidebar.js")
        },
        {
            type: 'category',
            label: 'Clubman API',
            link: {
                type: 'generated-index',
                description: 'OpenAPI documentation for the clubman API.',
                slug: 'category/clubman'
            },
            items: require("./api/clubman/sidebar.js")
        }
    ],
}

module.exports = sidebars;