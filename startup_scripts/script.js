// priority: 0

console.info(
    "Hello, World! (You will only see this line once in console, during startup)"
);

onEvent("item.registry", (event) => {
    event
        .create("basic_cuisine_crystal")
        .displayName("基本料理クリスタル")
        .tooltip("CU: 1")
        .texture("kubejs:item/cuisine_crystal");
    event
        .create("advanced_cuisine_crystal")
        .displayName("発展料理クリスタル")
        .tooltip("CU: 9")
        .texture("kubejs:item/cuisine_crystal")
        .color((s) => tint(1));
    event
        .create("elite_cuisine_crystal")
        .displayName("精鋭料理クリスタル")
        .tooltip("CU: 81")
        .texture("kubejs:item/cuisine_crystal")
        .color((s) => tint(2));
    event
        .create("supreme_cuisine_crystal")
        .displayName("至高料理クリスタル")
        .tooltip("CU: 729")
        .texture("kubejs:item/cuisine_crystal")
        .color((s) => tint(3));
    event
        .create("ultimate_cuisine_crystal")
        .displayName("究極料理クリスタル")
        .tooltip("CU: 6561")
        .texture("kubejs:item/cuisine_crystal")
        .color((s) => tint(4));
    event
        .create("legendary_cuisine_crystal")
        .displayName("レジェンダリー料理クリスタル")
        .tooltip("CU: 59049")
        .texture("kubejs:item/cuisine_crystal")
        .color((s) => tint(5));
    event
        .create("mythic_cuisine_crystal")
        .displayName("ミシック料理クリスタル")
        .tooltip("CU: 531441")
        .texture("kubejs:item/cuisine_crystal")
        .color((s) => tint(6));
    event
        .create("cosmic_cuisine_crystal")
        .displayName("コスミック料理クリスタル")
        .tooltip("CU: 4782969")
        .texture("kubejs:item/cuisine_crystal")
        .color((s) => tint(7));
    event
        .create("eternal_cuisine_crystal")
        .displayName("永遠料理クリスタル")
        .tooltip("CU: 43046721")
        .texture("kubejs:item/cuisine_crystal")
        .color((s) => tint(8));
    event
        .create("infinite_cuisine_crystal")
        .displayName("無限料理クリスタル")
        .tooltip("CU: 387420489")
        .texture("kubejs:item/cuisine_crystal")
        .color((s) => tint(9));

    const CU_LIST = [
        1, 9, 81, 729, 6561, 59049, 531441, 4782969, 43046721, 387420489,
    ];

    function hslToRgb(h, s, l) {
        s /= 100;
        l /= 100;
        const k = (n) => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = (n) =>
            l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        return [
            Math.round(f(0) * 255),
            Math.round(f(8) * 255),
            Math.round(f(4) * 255),
        ];
    }

    function rgbToHex(rgb) {
        var r = rgb[0];
        var g = rgb[1];
        var b = rgb[2];
        return (
            "#" +
            rgb
                .map((x) => {
                    const hex = x.toString(16).padStart(2, "0");
                    return hex;
                })
                .join("")
        );
    }

    const TIER_LIST = [
        "基本",
        "発展",
        "精鋭",
        "至高",
        "究極",
        "レジェンダリー",
        "ミシック",
        "コスミック",
        "永遠",
        "無限",
    ];

    function tint(i) {
        var rgb;
        var time = new Date().getTime();
        var result = "#ffffff";
        switch (i) {
            case 1:
                result = "#dddddd";
                break;
            case 2:
                result = "#bbbbbb";
                break;
            case 3:
                result = "#999999";
                break;
            case 4:
                time %= 2000;
                rgb = hslToRgb(0, 0, 100 - 37.5 * Math.abs(time / 1000 - 1));
                result = rgbToHex(rgb);
                break;
            case 5:
                time %= 2000;
                rgb = hslToRgb(0, 0, 100 - 50 * Math.abs(time / 1000 - 1));
                result = rgbToHex(rgb);
                break;
            case 6:
                time %= 500;
                rgb = hslToRgb(0, 0, 100 - 50 * Math.abs(time / 250 - 1));
                result = rgbToHex(rgb);
                break;
            case 7:
                time %= 2000;
                rgb = hslToRgb(
                    (time / 2000) * 360,
                    20,
                    83 - 33 * Math.abs(time / 1000 - 1)
                );
                result = rgbToHex(rgb);
                break;
            case 8:
                time %= 2000;
                rgb = hslToRgb(
                    (time / 2000) * 360,
                    50,
                    67 - 17 * Math.abs(time / 1000 - 1)
                );
                result = rgbToHex(rgb);
                break;
            case 9:
                time %= 2000;
                rgb = hslToRgb((time / 2000) * 360, 100, 50);
                result = rgbToHex(rgb);
                break;
        }
        return result;
    }

    function proc(id, name, vol) {
        var i = 1;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("farmersdelight:item/" + id)
            .color((s) => tint(1));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("farmersdelight:item/" + id)
            .color((s) => tint(2));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("farmersdelight:item/" + id)
            .color((s) => tint(3));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("farmersdelight:item/" + id)
            .color((s) => tint(4));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("farmersdelight:item/" + id)
            .color((s) => tint(5));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("farmersdelight:item/" + id)
            .color((s) => tint(6));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("farmersdelight:item/" + id)
            .color((s) => tint(7));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("farmersdelight:item/" + id)
            .color((s) => tint(8));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("farmersdelight:item/" + id)
            .color((s) => tint(9));
    }

    proc("cabbage", "キャベツ", 3);
    proc("tomato", "トマト", 2);
    proc("onion", "タマネギ", 3);
    proc("fried_egg", "目玉焼き", 7);
    proc("tomato_sauce", "トマトソース", 7);
    proc("pumpkin_slice", "カボチャの薄切り", 4);
    proc("cabbage_leaf", "キャベツの葉", 2);
    proc("minced_beef", "牛ひき肉", 2);
    proc("beef_patty", "ビーフパティ", 11);
    proc("cooked_chicken_cuts", "カットした焼き鳥", 6);
    proc("bacon", "生のベーコン", 2);
    proc("cooked_bacon", "焼きベーコン", 11);
    proc("cod_slice", "鱈の切り身", 2);
    proc("cooked_cod_slice", "焼き鱈の切り身", 6);
    proc("salmon_slice", "鮭の切り身", 2);
    proc("cooked_salmon_slice", "焼き鮭の切り身", 8);
    proc("mutton_chops", "生のラムチョップ", 2);
    proc("cooked_mutton_chops", "焼きラムチョップ", 8);
    proc("ham", "ハム", 8);
    proc("smoked_ham", "ハムの燻製", 26);
    proc("pie_crust", "パイ生地", 3);
    proc("cake_slice", "カットケーキ", 3);
    proc("apple_pie_slice", "切り分けたアップルパイ", 4);
    proc(
        "sweet_berry_cheesecake_slice",
        "切り分けたスイートベリーチーズケーキ",
        4
    );
    proc("chocolate_pie_slice", "切り分けたチョコレートパイ", 4);
    proc("sweet_berry_cookie", "スイートベリークッキー", 3);
    proc("honey_cookie", "ハチミツクッキー", 3);
    proc("melon_popsicle", "スイカバー", 4);
    proc("glow_berry_custard", "グロウベリーカスタード", 16);
    proc("fruit_salad", "フルーツサラダ", 13);
    proc("mixed_salad", "ミックスサラダ", 13);
    proc("barbecue_stick", "串焼き", 23);
    proc("egg_sandwich", "たまごサンド", 21);
    proc("chicken_sandwich", "チキンサンド", 26);
    proc("hamburger", "ハンバーガー", 28);
    proc("bacon_sandwich", "ベーコンサンド", 26);
    proc("mutton_wrap", "マトンラップ", 26);
    proc("dumplings", "ダンプリング", 21);
    proc("stuffed_potato", "スタッフドポテト", 24);
    proc("cabbage_rolls", "ロールキャベツ", 10);
    proc("salmon_roll", "サーモンの握り寿司", 16);
    proc("cod_roll", "タラの握り寿司", 16);
    proc("kelp_roll", "巻き寿司", 27);
    proc("kelp_roll_slice", "切り分けた巻き寿司", 12);
    proc("cooked_rice", "ご飯", 11);
    proc("bone_broth", "骨の煮汁", 19);
    proc("beef_stew", "ビーフシチュー", 31);
    proc("chicken_soup", "チキンスープ", 36);
    proc("vegetable_soup", "野菜スープ", 31);
    proc("fish_stew", "魚のシチュー", 31);
    proc("fried_rice", "チャーハン", 36);
    proc("pumpkin_soup", "カボチャスープ", 36);
    proc("baked_cod_stew", "焼き鱈のシチュー", 36);
    proc("noodle_soup", "ラーメン", 36);
    proc("bacon_and_eggs", "ベーコンエッグ", 22);
    proc("pasta_with_meatballs", "ミートボールパスタ", 31);
    proc("pasta_with_mutton_chop", "マトンパスタ", 31);
    proc("mushroom_rice", "キノコの炊き込みご飯", 31);
    proc("roasted_mutton_chops", "ローストマトンチョップ", 36);
    proc("vegetable_noodles", "ベジタブルヌードル", 36);
    proc("steak_and_potatoes", "ステーキとポテト", 31);
    proc("ratatouille", "ラタトゥイユ", 22);
    proc("squid_ink_pasta", "イカスミパスタ", 36);
    proc("grilled_salmon", "鮭のムニエル", 36);
    proc("roast_chicken", "大皿のローストチキン", 36);
    proc("stuffed_pumpkin", "スタッフドパンプキン入りのボウル", 36);
    proc("honey_glazed_ham", "大皿のハニーグレイズドハム", 36);
    proc("shepherds_pie", "大皿のシェパーズパイ", 36);
    proc("dog_food", "ドッグフード", 5);
});

onEvent("block.registry", (event) => {
    // Register new blocks here
    // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});
