const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    const slug = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
    createNodeField({ 
        node,
        name: `slug`,
        value: slug,
    })
}

exports.createPages =  async ({ actions, graphql, reporter}) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `query MyQuery {
                  Drupal {
                    nodeRecipes(first: 100) {
                      edges {
                        node {
                          changed
                          id
                          cookingTime
                          created
                          path
                          status
                          title
                          preparationTime
                          numberOfServings
                          recipeInstruction {
                            format
                            processed
                            value
                          }
                          summary {
                            format
                            value
                            processed
                          }
                          mediaImage {
                            mediaImage {
                              url
                            }
                          }
                        }
                      }
                    }
                    nodeArticles(first: 100) {
                      edges {
                        node {
                          id
                          path
                          body {
                            format
                            processed
                            summary
                            value
                          }
                          title
                          mediaImage {
                            mediaImage {
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
                `

            ).then(result => {
                console.log("RESULT");
                //console.log(result);
                if (result.errors) {
                    reject(result.errors)
                }
                console.log("PAGES");
                const pages = result.data.Drupal.nodeRecipes.edges
                const pages2 = result.data.Drupal.nodeArticles.edges

                pages.forEach(({ node} , index) => {
                    console.log("PATH: ");
                    console.log(node.path);
                    const page_path = node.path

                    createPage({
                        path: `${page_path}`,
                        component: path.resolve("src/pages/recipe.js"),
                        context: {
                            nid: node.id,
                            data: node,
                        },
                    })
                })

                pages2.forEach(({ node} , index) => {
                    console.log("PATH: ");
                    console.log(node.path);
                    const page_path = node.path

                    createPage({
                        path: `${page_path}`,
                        component: path.resolve("src/pages/article.js"),
                        context: {
                            nid: node.id,
                            data: node,
                        },
                    })
                })
            })
        )
    });
}