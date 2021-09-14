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

export const CONSOLE_TEXT = {
    tr: ["Hoş geldin!", "İstediğin gibi kurcala. Sen işini biliyorsundur zaten."],
    en: ["Hello there!", "Suit yourself. This is our playground."],
};

export const FOOTER_TEXT = {
    tr: `<a href="https://astro.build/" rel="noreferrer" class="underline">astro</a> & <a href="https://tr.reactjs.org/" rel="noreferrer" class="underline">react</a> & <a href="https://tailwindcss.com/" rel="noreferrer" class="underline">tailwindcss</a> ve biraz da ✨ ile hazırlandı.<br/>`,
    en: `made with <a href="https://astro.build/" rel="noreferrer" class="underline">astro</a> & <a href="https://en.reactjs.org/" rel="noreferrer" class="underline">react</a> & <a href="https://tailwindcss.com/" rel="noreferrer" class="underline">tailwindcss</a> and a little bit of ✨.<br/>`,
};

export const NAVBAR = {
    tr: [
        {
            title: "Ana sayfa",
            path: "/tr/",
        },
        {
            title: "Hakkımda",
            path: "/tr/about-me",
        },
        {
            title: "Projelerim",
            path: "/tr/projects",
        },
        {
            title: "Deneyimlerim",
            path: "/tr/experience",
        },
        {
            title: "Blog",
            path: "/tr/blog",
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
            title: "Experience",
            path: "/en/experience",
        },
        {
            title: "Blog",
            path: "/en/blog",
        },
    ],
};
