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

    function proc(id, mod, name, vol) {
        var i = 1;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(1));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(2));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(3));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(4));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(5));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(6));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(7));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(8));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`CU: ${CU_LIST[i] * vol}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(9));
    }

    function fProc(id, name, vol) {
        proc(id, "farmersdelight", name, vol);
    }

    function mProc(id, name, vol) {
        proc(id, "minecraft", name, vol);
    }

    function pNoCU(id, mod, name) {
        var i = 1;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(1));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(2));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(3));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(4));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(5));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(6));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(7));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(8));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture(mod + ":item/" + id)
            .color((s) => tint(9));
    }

    function mr(id, name) {
        var i = 1;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("minecraft:block/" + id)
            .color((s) => tint(1));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("minecraft:block/" + id)
            .color((s) => tint(2));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("minecraft:block/" + id)
            .color((s) => tint(3));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("minecraft:block/" + id)
            .color((s) => tint(4));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("minecraft:block/" + id)
            .color((s) => tint(5));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("minecraft:block/" + id)
            .color((s) => tint(6));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("minecraft:block/" + id)
            .color((s) => tint(7));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("minecraft:block/" + id)
            .color((s) => tint(8));
        i++;
        event
            .create(`cpd${i}_${id}`)
            .displayName(`${CU_LIST[i]}倍圧縮${name}`)
            .tooltip(`Tier: ${i} (${TIER_LIST[i]})`)
            .texture("minecraft:block/" + id)
            .color((s) => tint(9));
    }

    pNoCU("bowl", "minecraft", "ボウル");
    mProc("golden_carrot", "金のニンジン", 21);
    mProc("golden_apple", "金のリンゴ", 13);
    mProc("enchanted_golden_apple", "エンチャントされた金のリンゴ", 13);
    mProc("cooked_beef", "ステーキ", 21);
    mProc("cooked_porkchop", "焼き豚", 21);
    mProc("cooked_mutton", "焼き羊肉", 15);
    mProc("cooked_salmon", "焼き鮭", 15);
    mProc("cooked_chicken", "焼き鳥", 13);
    mProc("cooked_rabbit", "焼き兎肉", 11);
    mProc("rabbit_stew", "ウサギシチュー", 22);
    mr("brown_mushroom", "minecraft", "茶色のキノコ");
    mr("red_mushroom", "minecraft", "赤色のキノコ");
    mProc("mushroom_stew", "キノコシチュー", 13);
    mProc("bread", "パン", 11);
    pNoCU("wheat", "minecraft", "小麦");
    mProc("cooked_cod", "焼き鱈", 11);
    mProc("carrot", "ニンジン", 6);
    mProc("baked_potato", "ベイクドポテト", 11);
    mProc("beetroot", "ビートルート", 2);
    mProc("beetroot_soup", "ビートルートスープ", 13);
    mProc("dried_kelp", "乾燥した昆布", 2);
    pNoCU("kelp", "minecraft", "昆布");
    mProc("pumpkin_pie", "パンプキンパイ", 13);
    pNoCU("sugar", "minecraft", "砂糖");
    mProc("apple", "リンゴ", 7);
    mProc("beef", "生の牛肉", 4);
    mProc("porkchop", "生の豚肉", 4);
    mProc("mutton", "生の羊肉", 3);
    mProc("chicken", "生の鳥肉", 3);
    mProc("rabbit", "生の兎肉", 4);
    mProc("potato", "ジャガイモ", 2);
    mProc("chorus_fruit", "コーラスフルーツ", 7);
    mProc("cookie", "クッキー", 3);
    pNoCU("cocoa_beans", "minecraft", "カカオ豆")
    mProc("honey_bottle", "ハチミツ入りビン", 7);
    mProc("sweet_berries", "スイートベリー", 3);
    mProc("glow_berries", "グロウベリー", 3);
    mProc("cod", "生鱈", 3);
    mProc("tropical_fish", "熱帯魚", 2);
    mProc("salmon", "生鮭", 3);
    fProc("cabbage", "キャベツ", 3);
    fProc("tomato", "トマト", 2);
    fProc("onion", "タマネギ", 3);
    fProc("fried_egg", "目玉焼き", 7);
    pNoCU("egg", "minecraft", "卵");
    fProc("tomato_sauce", "トマトソース", 7);
    fProc("pumpkin_slice", "カボチャの薄切り", 4);
    fProc("cabbage_leaf", "キャベツの葉", 2);
    fProc("minced_beef", "牛ひき肉", 2);
    fProc("beef_patty", "ビーフパティ", 11);
    fProc("cooked_chicken_cuts", "カットした焼き鳥", 6);
    fProc("bacon", "生のベーコン", 2);
    fProc("cooked_bacon", "焼きベーコン", 11);
    fProc("cod_slice", "鱈の切り身", 2);
    fProc("cooked_cod_slice", "焼き鱈の切り身", 6);
    fProc("salmon_slice", "鮭の切り身", 2);
    fProc("cooked_salmon_slice", "焼き鮭の切り身", 8);
    fProc("mutton_chops", "生のラムチョップ", 2);
    fProc("cooked_mutton_chops", "焼きラムチョップ", 8);
    fProc("ham", "ハム", 8);
    fProc("smoked_ham", "ハムの燻製", 26);
    fProc("pie_crust", "パイ生地", 3);
    fProc("cake_slice", "カットケーキ", 3);
    fProc("apple_pie_slice", "切り分けたアップルパイ", 4);
    fProc(
        "sweet_berry_cheesecake_slice",
        "切り分けたスイートベリーチーズケーキ",
        4
    );
    fProc("chocolate_pie_slice", "切り分けたチョコレートパイ", 4);
    fProc("sweet_berry_cookie", "スイートベリークッキー", 3);
    fProc("honey_cookie", "ハチミツクッキー", 3);
    fProc("melon_popsicle", "スイカバー", 4);
    fProc("glow_berry_custard", "グロウベリーカスタード", 16);
    fProc("fruit_salad", "フルーツサラダ", 13);
    fProc("mixed_salad", "ミックスサラダ", 13);
    fProc("barbecue_stick", "串焼き", 23);
    fProc("egg_sandwich", "たまごサンド", 21);
    fProc("chicken_sandwich", "チキンサンド", 26);
    fProc("hamburger", "ハンバーガー", 28);
    fProc("bacon_sandwich", "ベーコンサンド", 26);
    fProc("mutton_wrap", "マトンラップ", 26);
    fProc("dumplings", "ダンプリング", 21);
    fProc("stuffed_potato", "スタッフドポテト", 24);
    fProc("cabbage_rolls", "ロールキャベツ", 10);
    fProc("salmon_roll", "サーモンの握り寿司", 16);
    fProc("cod_roll", "タラの握り寿司", 16);
    fProc("kelp_roll", "巻き寿司", 27);
    fProc("kelp_roll_slice", "切り分けた巻き寿司", 12);
    fProc("cooked_rice", "ご飯", 11);
    fProc("bone_broth", "骨の煮汁", 19);
    fProc("beef_stew", "ビーフシチュー", 31);
    fProc("chicken_soup", "チキンスープ", 36);
    fProc("vegetable_soup", "野菜スープ", 31);
    fProc("fish_stew", "魚のシチュー", 31);
    fProc("fried_rice", "チャーハン", 36);
    fProc("pumpkin_soup", "カボチャスープ", 36);
    fProc("baked_cod_stew", "焼き鱈のシチュー", 36);
    fProc("noodle_soup", "ラーメン", 36);
    fProc("bacon_and_eggs", "ベーコンエッグ", 22);
    fProc("pasta_with_meatballs", "ミートボールパスタ", 31);
    fProc("pasta_with_mutton_chop", "マトンパスタ", 31);
    fProc("mushroom_rice", "キノコの炊き込みご飯", 31);
    fProc("roasted_mutton_chops", "ローストマトンチョップ", 36);
    fProc("vegetable_noodles", "ベジタブルヌードル", 36);
    fProc("steak_and_potatoes", "ステーキとポテト", 31);
    fProc("ratatouille", "ラタトゥイユ", 22);
    fProc("squid_ink_pasta", "イカスミパスタ", 36);
    fProc("grilled_salmon", "鮭のムニエル", 36);
    fProc("roast_chicken", "大皿のローストチキン", 36);
    fProc("stuffed_pumpkin", "スタッフドパンプキン入りのボウル", 36);
    fProc("honey_glazed_ham", "大皿のハニーグレイズドハム", 36);
    fProc("shepherds_pie", "大皿のシェパーズパイ", 36);
    fProc("dog_food", "ドッグフード", 5);
});
