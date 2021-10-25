module.exports = {
  resolver: {
    Query: {
      recette: {
        resolverOf: "application::recettes.recettes.find",
        resolver: async (obj, options, { context }) => {
          const recette = await strapi.api.recettes.services.recettes.findOne({
            id: context.params.id,
          });
          recette.Liste_Ingredients = recette.Liste_Ingredients.filter(
            (item) => item && item.ingredient && item.ingredient.nom
          );
          return recette;
        },
      },
    },
  },
};
