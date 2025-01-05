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
    const TIER_LIST = [
        "basic",
        "advanced",
        "elite",
        "supreme",
        "ultimate",
        "legendary",
        "mythic",
        "cosmic",
        "eternal",
        "infinite",
    ];

    function mProc(item, energy) {
        var id = "minecraft:" + item;
        idIToE(id, energy);
        for (var i = 1; i <= 9; i++) {
            idIToE(`kubejs:cpd${i}_${item}`, energy * CU_LIST[i]);
        }
        cp(id, "kubejs:cpd1_" + item);
        for (var i = 1; i < 9; i++) {
            cp(`kubejs:cpd${i}_${item}`, `kubejs:cpd${i + 1}_${item}`);
        }
        event.recipes.mekanism.crushing(energy + "x kubejs:basic_cuisine_crystal", id);
        for (var i = 1; i <= 9; i ++) {
            event.recipes.mekanism.crushing(`${energy}x kubejs:${TIER_LIST[i]}_cuisine_crystal`, 
                `kubejs:cpd${i}_${item}`);
        }
    }

    function fProc(item, energy) {
        var id = "farmersdelight:" + item;
        idIToE(id, energy);
        for (var i = 1; i <= 9; i++) {
            idIToE(`kubejs:cpd${i}_${item}`, energy * CU_LIST[i]);
        }
        cp(id, "kubejs:cpd1_" + item);
        for (var i = 1; i < 9; i++) {
            cp(`kubejs:cpd${i}_${item}`, `kubejs:cpd${i + 1}_${item}`);
        }
        event.recipes.mekanism.crushing(energy + "x kubejs:basic_cuisine_crystal", id);
        for (var i = 1; i <= 9; i ++) {
            event.recipes.mekanism.crushing(`${energy}x kubejs:${TIER_LIST[i]}_cuisine_crystal`, 
                `kubejs:cpd${i}_${item}`);
        }
    }

    function pNoCU(item, mod) {
        cp(mod + ":" + item, "kubejs:cpd1_" + item);
        for (var i = 1; i < 9; i++) {
            cp(`kubejs:cpd${i}_${item}`, `kubejs:cpd${i + 1}_${item}`);
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

    function cp(bef, cpd) {
        event.shapeless(Item.of(cpd, 1), ["9x " + bef]);
        event.shapeless(Item.of(bef, 9), [cpd]);
    }

    function cook(inp, out) {
        for (var i = 1; i <= 9; i ++) {
            event.smelting(`kubejs:cpd${i}_${out}`, `kubejs:cpd${i}_${inp}`).xp(0.35);
            event.smoking(`kubejs:cpd${i}_${out}`, `kubejs:cpd${i}_${inp}`).xp(0.35);
            event.campfireCooking(`kubejs:cpd${i}_${out}`, `kubejs:cpd${i}_${inp}`, 0.35, 600);
        }
    }

    function pot(ins, out) {
        for (var i = 1; i <= 9; i ++) {
            ins.map(item => ({item: `kubejs:cpd${i}_${item}`}));
            event.custom({
                type: "farmersdelight:cooking",
                recipe_book_tab: "misc",
                ingredients: ins,
                result: {
                    item: `kubejs:cpd${i}_${out}`
                },
                experience: 0.35,
                cookingtime: 100
            });
        }
    }

    function pot(ins, ctr, out) {
        for (var i = 1; i <= 9; i ++) {
            ins.map(item => ({item: `kubejs:cpd${i}_${item}`}));
            event.custom({
                type: "farmersdelight:cooking",
                recipe_book_tab: "misc",
                ingredients: ins,
                result: {
                    item: `kubejs:cpd${i}_${out}`
                },
                container: {
                    item: ctr
                },
                experience: 0.35,
                cookingtime: 100
            });
        }
    }

    for (var i = 0; i < 9; i ++) {
        cp(`kubejs:${TIER_LIST[i]}_cuisine_crystal`, `kubejs:${TIER_LIST[i + 1]}_cuisine_crystal`)
    }

    mProc("golden_carrot", 21);
    event.shaped(
        Item.of("kubejs:cpd1_golden_carrot", 1),
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            A: "minecraft:gold_ingot",
            B: "kubejs:cpd1_carrot"
        }
    );
    event.shaped(
        Item.of("kubejs:cpd2_golden_carrot", 1),
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            A: "minecraft:gold_block",
            B: "kubejs:cpd2_carrot"
        }
    );
    mProc("golden_apple", 13);
    event.shaped(
        Item.of("kubejs:cpd1_golden_apple", 1),
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            A: "minecraft:gold_block",
            B: "kubejs:cpd1_apple"
        }
    );
    mProc("enchanted_golden_apple", 13);
    mProc("cooked_beef", 21);
    cook("beef", "cooked_beef");
    mProc("cooked_porkchop", 21);
    cook("porkchop", "cooked_porkchop");
    mProc("cooked_mutton", 15);
    cook("mutton", "cooked_mutton");
    mProc("cooked_salmon", 15);
    cook("salmon", "cooked_salmon");
    mProc("cooked_chicken", 13);
    cook("chicken", "cooked_chicken");
    mProc("cooked_rabbit", 11);
    cook("rabbit", "cooked_rabbit");
    mProc("rabbit_stew", 22);
    //未実装
    mProc("mushroom_stew", 13);
    //未実装
    mProc("bread", 11);
    for (var i = 1; i <= 9; i ++) {
        event.shaped(
            Item.of(`kubejs:cpd${i}_bread`, 1),
            [
                "AAA"
            ],
            {
                A: `kubejs:cpd${i}_wheat`
            }
        );
    }
    pNoCU("wheat", "minecraft");
    mProc("cooked_cod", 11);
    cook("cod", "cooked_cod");
    mProc("carrot", 6);
    mProc("baked_potato", 11);
    cook("potato", "baked_potato");
    mProc("beetroot", 2);
    mProc("beetroot_soup", 13);
    mProc("dried_kelp", 2);
    cook("kelp", "dried_kelp");
    pNoCU("kelp", "minecraft")
    mProc("pumpkin_pie", 13);
    mProc("apple", 7);
    mProc("beef", 4);
    mProc("porkchop", 4);
    mProc("mutton", 3);
    mProc("rabbit", 4);
    mProc("potato", 2);
    mProc("chorus_fruit", 7);
    mProc("cake", 17);
    //未実装
    mProc("cookie", 3);
    for (var i = 1; i <= 9; i ++) {
        event.shaped(
            Item.of(`kubejs:cpd${i}_cookie`, 1),
            [
                "ABA"
            ],
            {
                A: `kubejs:cpd${i}_wheat`,
                B: `kubejs:cpd${i}_cocoa_beans`
            }
        );
    }
    mProc("honey_bottle", 7);
    mProc("sweet_berries", 3);
    mProc("glow_berries", 3);
    mProc("cod", 3);
    mProc("tropical_fish", 2);
    mProc("salmon", 3);
    fProc("cabbage", 3);
    fProc("tomato", 2);
    fProc("onion", 3);
    fProc("fried_egg", 7);
    cook("egg", "fried_egg");
    pNoCU("egg", "minecraft");
    fProc("tomato_sauce", 7);
    pot(["tomato", "tomato"], "tomato_sauce");
    fProc("pumpkin_slice", 4);
    fProc("cabbage_leaf", 2);
    fProc("minced_beef", 2);
    fProc("beef_patty", 11);
    fProc("cooked_chicken_cuts", 6);
    fProc("bacon", 2);
    fProc("cooked_bacon", 11);
    fProc("cod_slice", 2);
    fProc("cooked_cod_slice", 6);
    fProc("salmon_slice", 2);
    fProc("cooked_salmon_slice", 8);
    fProc("mutton_chops", 2);
    fProc("cooked_mutton_chops", 8);
    fProc("ham", 8);
    fProc("smoked_ham", 26);
    fProc("pie_crust", 3);
    fProc("cake_slice", 3);
    fProc("apple_pie_slice", 4);
    fProc("sweet_berry_cheesecake_slice", 4);
    fProc("chocolate_pie_slice", 4);
    fProc("sweet_berry_cookie", 3);
    fProc("honey_cookie", 3);
    fProc("melon_popsicle", 4);
    fProc("glow_berry_custard", 16);
    fProc("fruit_salad", 13);
    fProc("mixed_salad", 13);
    fProc("barbecue_stick", 23);
    fProc("egg_sandwich", 21);
    fProc("chicken_sandwich", 26);
    fProc("hamburger", 28);
    fProc("bacon_sandwich", 26);
    fProc("mutton_wrap", 26);
    fProc("dumplings", 21);
    fProc("stuffed_potato", 24);
    fProc("cabbage_rolls", 10);
    fProc("salmon_roll", 16);
    fProc("cod_roll", 16);
    fProc("kelp_roll", 27);
    fProc("kelp_roll_slice", 12);
    fProc("cooked_rice", 11);
    fProc("bone_broth", 19);
    fProc("beef_stew", 31);
    fProc("chicken_soup", 36);
    fProc("vegetable_soup", 31);
    fProc("fish_stew", 31);
    fProc("fried_rice", 36);
    fProc("pumpkin_soup", 36);
    fProc("baked_cod_stew", 36);
    fProc("noodle_soup", 36);
    fProc("bacon_and_eggs", 22);
    fProc("pasta_with_meatballs", 31);
    fProc("pasta_with_mutton_chop", 31);
    fProc("mushroom_rice", 31);
    fProc("roasted_mutton_chops", 36);
    fProc("vegetable_noodles", 36);
    fProc("steak_and_potatoes", 31);
    fProc("ratatouille", 22);
    fProc("squid_ink_pasta", 36);
    fProc("grilled_salmon", 36);
    fProc("roast_chicken", 36);
    fProc("stuffed_pumpkin", 36);
    fProc("honey_glazed_ham", 36);
    fProc("shepherds_pie", 36);
    fProc("dog_food", 5);
});
