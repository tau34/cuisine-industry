// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
    "Hello, World! (You will see this line every time server resources reload)"
);

onEvent("recipes", (event) => {
    const CU_LIST = [
        1, 9, 81, 729, 6561, 59049, 531441, 4782969, 43046721, 387420489,
    ];

    function iToE(item, energy) {
        idIToE("farmersdelight:" + item, energy);
        for (var i = 1; i <= 9; i ++) {
            idIToE("kubejs:cpd" + i + "_" + item, energy * CU_LIST[i]);
        }
    }

    function idIToE(item, energy) {
        event.custom({
            type: "mekanism:energy_conversion",
            input: {
                count: 1,
                item: item,
            },
            output: energy * 25000,
        });
    }

    iToE("cabbage", 3);
    iToE("tomato", 2);
    iToE("onion", 3);
    iToE("fried_egg", 7);
    iToE("tomato_sauce", 7);
    iToE("pumpkin_slice", 4);
    iToE("cabbage_leaf", 2);
    iToE("minced_beef", 2);
    iToE("beef_patty", 11);
    iToE("cooked_chicken_cuts", 6);
    iToE("bacon", 2);
    iToE("cooked_bacon", 11);
    iToE("cod_slice", 2);
    iToE("cooked_cod_slice", 6);
    iToE("salmon_slice", 2);
    iToE("cooked_salmon_slice", 8);
    iToE("mutton_chops", 2);
    iToE("cooked_mutton_chops", 8);
    iToE("ham", 8);
    iToE("smoked_ham", 26);
    iToE("pie_crust", 3);
    iToE("cake_slice", 3);
    iToE("apple_pie_slice", 4);
    iToE("sweet_berry_cheesecake_slice", 4);
    iToE("chocolate_pie_slice", 4);
    iToE("sweet_berry_cookie", 3);
    iToE("honey_cookie", 3);
    iToE("melon_popsicle", 4);
    iToE("glow_berry_custard", 16);
    iToE("fruit_salad", 13);
    iToE("mixed_salad", 13);
    iToE("barbecue_stick", 23);
    iToE("egg_sandwich", 21);
    iToE("chicken_sandwich", 26);
    iToE("hamburger", 28);
    iToE("bacon_sandwich", 26);
    iToE("mutton_wrap", 26);
    iToE("dumplings", 21);
    iToE("stuffed_potato", 24);
    iToE("cabbage_rolls", 10);
    iToE("salmon_roll", 16);
    iToE("cod_roll", 16);
    iToE("kelp_roll", 27);
    iToE("kelp_roll_slice", 12);
    iToE("cooked_rice", 11);
    iToE("bone_broth", 19);
    iToE("beef_stew", 31);
    iToE("chicken_soup", 36);
    iToE("vegetable_soup", 31);
    iToE("fish_stew", 31);
    iToE("fried_rice", 36);
    iToE("pumpkin_soup", 36);
    iToE("baked_cod_stew", 36);
    iToE("noodle_soup", 36);
    iToE("bacon_and_eggs", 22);
    iToE("pasta_with_meatballs", 31);
    iToE("pasta_with_mutton_chop", 31);
    iToE("mushroom_rice", 31);
    iToE("roasted_mutton_chops", 36);
    iToE("vegetable_noodles", 36);
    iToE("steak_and_potatoes", 31);
    iToE("ratatouille", 22);
    iToE("squid_ink_pasta", 36);
    iToE("grilled_salmon", 36);
    iToE("roast_chicken", 36);
    iToE("stuffed_pumpkin", 36);
    iToE("honey_glazed_ham", 36);
    iToE("shepherds_pie", 36);
    iToE("dog_food", 5);
});
