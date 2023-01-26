import path from "path";

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMdx(limit: 1000) {
          nodes {
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const pageTemplate = path.resolve(`src/layout/Layout.tsx`);
  result.data.allMdx.nodes.forEach((node) => {
    const path = node.frontmatter.slug;
    createPage({
      path,
      component: `${pageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        pagePath: path,
      },
    });
  });
};
