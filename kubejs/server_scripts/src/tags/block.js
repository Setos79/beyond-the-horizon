// priority: 110

/**
 * @file Block Tag Additions for Beyond the Horizon.
 *
 * These tags differ from item tags in that they impact the block form only,
 * and therefore mainly have in-world effects.
 * 
 * The order of entries here should be:
 *   BTH Tags (if needed)
 *   Minecraft Tags
 *   Forge Tags
 *   All other mods, alphabetically.
 *
 */

/**
 * Block Tag Event Handler
 */
ServerEvents.tags('block', event => {

  // Minecraft Tags
  event.add('minecraft:mineable/pickaxe', [
    'createdeco:andesite_bars',
    'createdeco:andesite_bars_overlay',
    'createdeco:brass_bars',
    'createdeco:brass_bars_overlay',
    'createdeco:copper_bars',
    'createdeco:copper_bars_overlay',
    'createdeco:industrial_iron_bars',
    'createdeco:industrial_iron_bars_overlay',
    'createdeco:zinc_bars',
    'createdeco:zinc_bars_overlay',
    'graveyard:dark_iron_bars',
  ]);

  // Forge Tags
  event.add('forge:ores', [
    'alexscaves:coprolith_coal_ore',
    'alexscaves:guanostone_redstone_ore',
    'alexscaves:radrock_uranium_ore',
    'forbidden_arcanus:arcane_crystal_ore',
    'forbidden_arcanus:deepslate_arcane_crystal_ore',
  ]);

  event.add('forge:ores/arcane_crystal', [
    'forbidden_arcanus:arcane_crystal_ore',
    'forbidden_arcanus:deepslate_arcane_crystal_ore',
  ]);

  event.add('forge:ores/coal', [
    'alexscaves:coprolith_coal_ore',
  ]);

  event.add('forge:ores/redstone', [
    'alexscaves:guanostone_redstone_ore',
  ]);

  event.add('forge:ores/uranium', [
    'alexscaves:radrock_uranium_ore',
  ]);

  event.add('forge:storage_blocks/arcane_gold', [
    'forbidden_arcanus:deorum_block',
  ]);

  // Ars Nouveau Tags
  event.add('ars_nouveau:golem/cluster', [
    'alexscaves:sulfur_cluster',
    'galosphere:allurite_cluster',
    'galosphere:glinted_allurite_cluster',
    'galosphere:glinted_amethyst_cluster',
    'galosphere:glinted_lumiere_cluster',
    'galosphere:lumiere_cluster',
    'galosphere:pink_salt_cluster',
    'quark:red_corundum_cluster',
    'quark:orange_corundum_cluster',
    'quark:yellow_corundum_cluster',
    'quark:green_corundum_cluster',
    'quark:blue_corundum_cluster',
    'quark:indigo_corundum_cluster',
    'quark:violet_corundum_cluster',
    'quark:white_corundum_cluster',
    'quark:black_corundum_cluster',
  ]);

  // Create Tags
  event.add('create:fan_processing_catalysts/haunting', [
    'bbb:soul_brazier',
    'graveyard:soul_fire_brazier',
    'valhelsia_structures:soul_brazier',
  ]);

  event.add('create:fan_processing_catalysts/smoking', [
    'bbb:brazier',
    'graveyard:fire_brazier',
    'valhelsia_structures:brazier',
  ]);
  
  event.add('create:wrench_pickup', [
    'createdeco:andesite_bars',
    'createdeco:andesite_bars_overlay',
    'createdeco:brass_bars',
    'createdeco:brass_bars_overlay',
    'createdeco:copper_bars',
    'createdeco:copper_bars_overlay',
    'createdeco:industrial_iron_bars',
    'createdeco:industrial_iron_bars_overlay',
    'createdeco:zinc_bars',
    'createdeco:zinc_bars_overlay',
    'graveyard:dark_iron_bars',
  ]);

  // Tetra Tags
  event.add('tetra:scannable', [
    'aether:gravitite_ore',
    'forbidden_arcanus:stella_arcanum',
    'irons_spellbooks:arcane_debris'
  ]);

});
