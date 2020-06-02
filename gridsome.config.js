// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Digital Innovation",
  siteUrl: `https://rkc.orca.blog`,
  host: "0.0.0.0",
  titleTemplate: "%s",
  siteDescription: "Master's",
  plugins: [
 {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            ['gridsome-plugin-remark-youtube', {width: '400px'}]
          ],
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }/*,
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'ProjectPost', // Required
        baseDir: './src/projects/', // Where .md files are located
      }
    }*/
    
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs", "remark-grid-tables"]
    }
  }
};
