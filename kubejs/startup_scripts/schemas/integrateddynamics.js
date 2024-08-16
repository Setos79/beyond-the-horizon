// priority: 100

/**
 * @file Recipe Schemas for the Integrated Dynamics mod.
 * 
 * Note: When adding recipes, the convention for the mechanical versions of each 
 */

StartupEvents.recipeSchemaRegistry((event) => {
  const components = event.components;

  if (Platform.isLoaded('integrateddynamics')) {

    // FIXME: This is currently untested and WIP. I suspect that some small tweaks will be needed.
    // Notably, the squeezer output can take both items and a fluid, and seems to be non-standard format.

    // Drying Basin Recipes
    event.register('integrateddynamics:drying_basin', new $RecipeSchema(
      components.get('inputFluid')().key('fluid'),
      components.get('inputItem')().key('item'),
      components.get('outputFluidOrItem')().key('result'),
      components.get('intNumber')().key('duration')
    ));

    // Mechanical Drying Basin Recipes
    event.register('integrateddynamics:mechanical_drying_basin', new $RecipeSchema(
      components.get('inputFluid')().key('fluid'),
      components.get('inputItem')().key('item'),
      components.get('outputFluidOrItem')().key('result'),
      components.get('intNumber')().key('duration')
    ));

    // Squeezer Recipes
    event.register('integrateddynamics:squeezer', new $RecipeSchema(
      components.get('inputItem')().key('item'),
      components.get('outputFluidOrItem')().key('result')
    ));

    // Mechanical Squeezer Recipes
    event.register('integrateddynamics:mechanical_squeezer', new $RecipeSchema(
      components.get('inputItem')().key('item'),
      components.get('outputFluidOrItem')().key('result'),
      components.get('intNumber')().key('duration')
    ));
  }
});