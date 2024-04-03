import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://halfsweet.cn",

  author: {
    name: "HalfSweet",
    url: "https://github.com/HalfSweet",
  },

  //iconAssets: "https://halfsweet.cn/img/LOGO.png",

  logo: "/img/Headshot.jpg",

  repo: "HalfSweet/Blog",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "今天咕咕被欺负了吗",

  displayFooter: true,

  blog: {
    description: "Try to create some value",
    intro: "/Catalogue/02.about.html",
    medias: {
      Email: "mailto:HalfSweet@HalfSweet.cn",
      GitHub: "https://github.com/HalfSweet",
      Twitter: "https://twitter.com/_HalfSweet",
    },
  },

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,

    comment: {
      provider: "Giscus",
      repo: "HalfSweet/Blog",
      repoId: "R_kgDOIWC9qQ",
      category: "comment",
      categoryId: "DIC_kwDOIWC9qc4CYtVz",
      mapping: "pathname",
      lazyLoading: false,
    },

    components: {
      // 你想使用的组件
      components: [
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        "VidStack",
        "XiGua",
      ],
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      components: true,
      
    },

    

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },

  navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"],
    },
});
