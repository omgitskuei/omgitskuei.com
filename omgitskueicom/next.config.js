/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')();

const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    basePath: '',
    compress: true,
    devIndicators: {
        buildActivityPosition: 'bottom-right',
    },
    // env: {
    //     customKey: 'some-custom-env-key',
    //     // in a page, return <h1>customKey: {process.env.customKey}</h1>
    // },
    // logging: {
    //     fetches: {
    //         fullUrl: true,
    //     },
    // },
    pageExtensions: ['ts', 'tsx', 'mdx'],
    experimental: {
        mdxRs: true,
        serverActions: {
            serverActions: true,
            bodySizeLimit: '2mb',
        },
    },

    i18n: {
        locales: ['en-US', 'zh-HANT', ],
        defaultLocale: 'en-US',
    },
    // async headers() {
    //     return [
    //         {
    //             source: '/with-locale', // automatically handles all locales
    //             headers: [
    //                 {
    //                     key: 'x-hello',
    //                     value: 'world',
    //                 },
    //             ],
    //         },
    //         {
    //             // this matches '/' since `en` is the defaultLocale
    //             source: '/en',
    //             locale: false,
    //             headers: [
    //                 {
    //                     key: 'x-hello',
    //                     value: 'world',
    //                 },
    //             ],
    //         },
    //         {
    //             // this gets converted to /(en|zh-CN)/(.*) so will not match top-level
    //             // `/` or `/zh-CN` routes like /:path* would
    //             source: '/(.*)',
    //             headers: [
    //                 {
    //                     key: 'x-hello',
    //                     value: 'world',
    //                 },
    //             ],
    //         },
    //     ]
    // },
}

module.exports = withMDX(nextConfig)
