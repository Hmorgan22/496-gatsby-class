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

exports.createPages = ({ actions, graphql}) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const pageTemplate = path.resolve(`src/pages/recipe.js`)
        resolve(
            graphql(
                `
                query MyQuery {
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
                //console.log(result.data.Drupal.nodeRecipes);
                const pages = result.data.Drupal.nodeRecipes.edges

                pages.forEach(({ node} , index) => {
                    console.log("PATH: ");
                    console.log(node.path);
                    const page_path = node.path
                    console.log(node.path);

                    createPage({
                        path: `${page_path}`,
                        component: pageTemplate,
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