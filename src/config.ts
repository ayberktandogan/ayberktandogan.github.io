export const SITE = {
    title: "Your Documentation Website",
    description: "Your website description.",
    defaultLanguage: "tr_TR",
};

export const KNOWN_LANGUAGES = {
    Turkish: "tr",
    English: "en",
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/snowpackjs/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const FOOTER_TEXT = {
    tr: `<a href="https://astro.build/" class="underline">astro</a> & <a href="https://tr.reactjs.org/" class="underline">react</a> & <a href="https://tailwindcss.com/" class="underline">tailwindcss</a> ve biraz da ✨ ile hazırlandı.<br/>`,
    en: `made with <a href="https://astro.build/" class="underline">astro</a> & <a href="https://tr.reactjs.org/" class="underline">react</a> & <a href="https://tailwindcss.com/" class="underline">tailwindcss</a> and little bit of ✨.<br/>`,
};

export const NAVBAR = {
    tr: [
        {
            title: "Ana sayfa",
            path: "/tr/",
        },
        {
            title: "Hakkımda",
            path: "/tr/hakkimda",
        },
        {
            title: "Projelerim",
            path: "/tr/projelerim",
        },
        {
            title: "Deneyimlerim",
            path: "/tr/gecmis-deneyimlerim",
        },
    ],
    en: [
        {
            title: "Home page",
            path: "/en/",
        },
        {
            title: "About me",
            path: "/en/about-me",
        },
        {
            title: "Projects",
            path: "/en/projects",
        },
        {
            title: "Work History",
            path: "/en/past-experiences",
        },
    ],
};
