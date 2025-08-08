//===== カクテルの原材料 =====
//さすがにAI使いました
const ingredients = [
  { id: 1, name: "ジン", color: "#d4f0f0", colorCategory
: "clear", alcohol: 40, taste: { sweet: 0, sour: 5, bitt
er: 10 }, keywords: { adjective: "霧の", noun: "静寂" }
},
  { id: 2, name: "ウォッカ", color: "#e0e0e0", colorCate
gory: "clear", alcohol: 40, taste: { sweet: 0, sour: 0,
bitter: 5 }, keywords: { adjective: "氷の", noun: "衝撃"
 } },
  { id: 3, name: "オレンジジュース", color: "#ffc400", c
olorCategory: "yellow", alcohol: 0, taste: { sweet: 15,
sour: 10, bitter: 0 }, keywords: { adjective: "太陽の",
noun: "果実" } },
  { id: 4, name: "ブルーキュラソー", color: "#005eff", c
olorCategory: "blue", alcohol: 25, taste: { sweet: 20, s
our: 5, bitter: 0 }, keywords: { adjective: "海の", noun
: "宝石" } },
  { id: 5, name: "ライムジュース", color: "#c2f24d", col
orCategory: "green", alcohol: 0, taste: { sweet: 5, sour
: 20, bitter: 0 }, keywords: { adjective: "新緑の", noun
: "雫" } },
  { id: 6, name: "カシスリキュール", color: "#670a30", c
olorCategory: "red", alcohol: 20, taste: { sweet: 25, so
ur: 5, bitter: 0 }, keywords: { adjective: "深紅の", nou
n: "誘惑" } },
  { id: 7, name: "ラム", color: "#c68f52", colorCategory
: "brown", alcohol: 40, taste: { sweet: 10, sour: 0, bit
ter: 5 }, keywords: { adjective: "海賊の", noun: "秘宝"
} },
  { id: 8, name: "牛乳", color: "#f5f5f5", colorCategory
: "white", alcohol: 0, taste: { sweet: 5, sour: 0, bitte
r: 0 }, keywords: { adjective: "純白の", noun: "優しさ"
} },
  { id: 9, name: "テキーラ", color: "#f0e48c", colorCate
gory: "yellow", alcohol: 40, taste: { sweet: 5, sour: 5,
 bitter: 5 }, keywords: { adjective: "灼熱の", noun: "約
束" } },
  { id: 10, name: "ウイスキー", color: "#d2691e", colorC
ategory: "brown", alcohol: 43, taste: { sweet: 5, sour:
0, bitter: 15 }, keywords: { adjective: "琥珀の", noun:
"時間" } },
  { id: 11, name: "ブランデー", color: "#b87333", colorC
ategory: "brown", alcohol: 40, taste: { sweet: 10, sour:
 0, bitter: 10 }, keywords: { adjective: "王者の", noun:
 "風格" } },
  { id: 12, name: "赤ワイン", color: "#8B0000", colorCat
egory: "red", alcohol: 13, taste: { sweet: 5, sour: 10,
bitter: 10 }, keywords: { adjective: "豊穣の", noun: "大
地" } },
  { id: 13, name: "白ワイン", color: "#f8f8ff", colorCat
egory: "white", alcohol: 12, taste: { sweet: 10, sour: 1
5, bitter: 5 }, keywords: { adjective: "月光の", noun: "
調べ" } },
  { id: 14, name: "日本酒", color: "#fafad2", colorCateg
ory: "clear", alcohol: 15, taste: { sweet: 10, sour: 5,
bitter: 5 }, keywords: { adjective: "雅な", noun: "宴" }
 },
  { id: 15, name: "焼酎", color: "#f5fffa", colorCategor
y: "clear", alcohol: 25, taste: { sweet: 5, sour: 5, bit
ter: 5 }, keywords: { adjective: "孤高の", noun: "魂" }
},
  { id: 16, name: "ベルモット", color: "#fddc5c", colorC
ategory: "yellow", alcohol: 15, taste: { sweet: 15, sour
: 5, bitter: 15 }, keywords: { adjective: "薬草の", noun
: "囁き" } },
  { id: 17, name: "カンパリ", color: "#e52d2d", colorCat
egory: "red", alcohol: 25, taste: { sweet: 10, sour: 0,
bitter: 25 }, keywords: { adjective: "情熱の", noun: "口
づけ" } },
  { id: 18, name: "ピーチリキュール", color: "#ffc0cb",
colorCategory: "pink", alcohol: 15, taste: { sweet: 30,
sour: 5, bitter: 0 }, keywords: { adjective: "妖精の", n
oun: "吐息" } },
  { id: 19, name: "ライチリキュール", color: "#f0f8ff",
colorCategory: "clear", alcohol: 21, taste: { sweet: 28,
 sour: 5, bitter: 0 }, keywords: { adjective: "楊貴妃の"
, noun: "涙" } },
  { id: 20, name: "メロンリキュール", color: "#7fff00",
colorCategory: "green", alcohol: 20, taste: { sweet: 35,
 sour: 0, bitter: 0 }, keywords: { adjective: "翠緑の",
noun: "夢" } },
  { id: 21, name: "ストロベリーリキュール", color: "#ff4
b68", colorCategory: "red", alcohol: 18, taste: { sweet:
 28, sour: 10, bitter: 0 }, keywords: { adjective: "初恋
の", noun: "憧れ" } },
  { id: 22, name: "抹茶リキュール", color: "#364e36", co
lorCategory: "green", alcohol: 20, taste: { sweet: 15, s
our: 0, bitter: 20 }, keywords: { adjective: "侘び寂びの
", noun: "心" } },
  { id: 23, name: "コーヒーリキュール", color: "#4a2c2a"
, colorCategory: "brown", alcohol: 20, taste: { sweet: 2
0, sour: 0, bitter: 25 }, keywords: { adjective: "真夜中
の", noun: "覚醒" } },
  { id: 24, name: "アマレット", color: "#e6b422", colorC
ategory: "brown", alcohol: 28, taste: { sweet: 25, sour:
 0, bitter: 10 }, keywords: { adjective: "杏仁の", noun:
 "記憶" } },
  { id: 25, name: "ココナッツリキュール", color: "#fffff
f", colorCategory: "white", alcohol: 21, taste: { sweet:
 30, sour: 0, bitter: 0 }, keywords: { adjective: "南国
の", noun: "楽園" } },
  { id: 26, name: "バイオレットリキュール", color: "#8a2
be2", colorCategory: "purple", alcohol: 20, taste: { swe
et: 20, sour: 5, bitter: 5 }, keywords: { adjective: "夜
空の", noun: "すみれ" } },
  { id: 27, name: "グレープフルーツジュース", color: "#f
fc87c", colorCategory: "yellow", alcohol: 0, taste: { sw
eet: 10, sour: 15, bitter: 5 }, keywords: { adjective: "
暁の", noun: "希望" } },
  { id: 28, name: "クランベリージュース", color: "#d2143
a", colorCategory: "red", alcohol: 0, taste: { sweet: 5,
 sour: 25, bitter: 0 }, keywords: { adjective: "小悪魔の
", noun: "微笑み" } },
  { id: 29, name: "パイナップルジュース", color: "#fef38
1", colorCategory: "yellow", alcohol: 0, taste: { sweet:
 20, sour: 15, bitter: 0 }, keywords: { adjective: "常夏
の", noun: "陽光" } },
  { id: 30, name: "トマトジュース", color: "#ff6347", co
lorCategory: "red", alcohol: 0, taste: { sweet: 5, sour:
 10, bitter: 0 }, keywords: { adjective: "血潮の", noun:
 "誓い" } },
  { id: 31, name: "ソーダ", color: "#e3f2fd", colorCateg
ory: "clear", alcohol: 0, taste: { sweet: 0, sour: 0, bi
tter: 0 }, keywords: { adjective: "弾ける", noun: "泡" }
 },
  { id: 32, name: "トニックウォーター", color: "#e8f5e9"
, colorCategory: "clear", alcohol: 0, taste: { sweet: 5,
 sour: 5, bitter: 10 }, keywords: { adjective: "賢者の",
 noun: "選択" } },
  { id: 33, name: "ジンジャーエール", color: "#f0e68c",
colorCategory: "yellow", alcohol: 0, taste: { sweet: 15,
 sour: 5, bitter: 5 }, keywords: { adjective: "黄金の",
noun: "稲妻" } },
  { id: 34, name: "コーラ", color: "#3e2723", colorCateg
ory: "brown", alcohol: 0, taste: { sweet: 25, sour: 0, b
itter: 0 }, keywords: { adjective: "漆黒の", noun: "甘美
" } },
  { id: 35, name: "生クリーム", color: "#fffdd0", colorC
ategory: "white", alcohol: 0, taste: { sweet: 10, sour:
0, bitter: 0 }, keywords: { adjective: "天使の", noun: "
羽" } },
  { id: 36, name: "卵黄", color: "#ffd700", colorCategor
y: "yellow", alcohol: 0, taste: { sweet: 5, sour: 0, bit
ter: 0 }, keywords: { adjective: "生命の", noun: "源" }
},
  { id: 37, name: "ミント", color: "#98ff98", colorCateg
ory: "green", alcohol: 0, taste: { sweet: 0, sour: 0, bi
tter: 5 }, keywords: { adjective: "清涼な", noun: "風" }
 },
  { id: 38, name: "レモンジュース", color: "#fffacd", co
lorCategory: "yellow", alcohol: 0, taste: { sweet: 2, so
ur: 30, bitter: 0 }, keywords: { adjective: "閃光の", no
un: "一撃" } },
  { id: 39, name: "グレナデンシロップ", color: "#e03c31"
, colorCategory: "red", alcohol: 0, taste: { sweet: 40,
sour: 5, bitter: 0 }, keywords: { adjective: "ザクロの",
 noun: "心臓" } },
  { id: 40, name: "シュガーシロップ", color: "#f0f0f0",
colorCategory: "clear", alcohol: 0, taste: { sweet: 30,
sour: 0, bitter: 0 }, keywords: { adjective: "純粋な", n
oun: "甘さ" } },
  { id: 41, name: "アブサン", color: "#abff4f", colorCat
egory: "green", alcohol: 70, taste: { sweet: 5, sour: 0,
 bitter: 35 }, keywords: { adjective: "禁断の", noun: "
霊薬" } },
  { id: 42, name: "シャルトリューズ", color: "#b2d235",
colorCategory: "green", alcohol: 55, taste: { sweet: 20,
 sour: 0, bitter: 25 }, keywords: { adjective: "修道院の
", noun: "秘伝" } },
  { id: 43, name: "ヨーグルトリキュール", color: "#f7f7f
7", colorCategory: "white", alcohol: 15, taste: { sweet:
 15, sour: 15, bitter: 0 }, keywords: { adjective: "草原
の", noun: "朝" } },
  { id: 44, name: "マンゴージュース", color: "#ffc300",
colorCategory: "yellow", alcohol: 0, taste: { sweet: 25,
 sour: 10, bitter: 0 }, keywords: { adjective: "楽園の",
 noun: "雫" } },
  { id: 45, name: "エルダーフラワーリキュール", color: "
#f1fbe4", colorCategory: "clear", alcohol: 20, taste: {
sweet: 30, sour: 5, bitter: 0 }, keywords: { adjective:
"長老の", noun: "祝福" } },
  { id: 46, name: "桜リキュール", color: "#ffe4e1", colo
rCategory: "pink", alcohol: 18, taste: { sweet: 20, sour
: 5, bitter: 5 }, keywords: { adjective: "春霞の", noun:
 "幻" } },
  { id: 47, name: "金箔", color: "#f5e653", colorCategor
y: "gold", alcohol: 0, taste: { sweet: 0, sour: 0, bitte
r: 0 }, keywords: { adjective: "黄金の", noun: "輝き" }
},
  { id: 48, name: "岩塩", color: "#fadfad", colorCategor
y: "clear", alcohol: 0, taste: { sweet: 0, sour: 0, bitt
er: 5 }, keywords: { adjective: "太古の", noun: "結晶" }
 },
  { id: 49, name: "梅酒", color: "#e8d3a3", colorCategor
y: "brown", alcohol: 12, taste: { sweet: 25, sour: 15, b
itter: 0 }, keywords: { adjective: "懐かしい", noun: "思
い出" } },
  { id: 50, name: "泡盛", color: "#f0ffff", colorCategor
y: "clear", alcohol: 30, taste: { sweet: 5, sour: 5, bit
ter: 10 }, keywords: { adjective: "琉球の", noun: "誇り"
 } },
  { id: 51, name: "アップルジュース", color: "#f8e4b3",
colorCategory: "yellow", alcohol: 0, taste: { sweet: 20,
 sour: 10, bitter: 0 }, keywords: { adjective: "禁断の",
 noun: "果実" } },
  { id: 52, name: "シャンパン", color: "#f7e7ce", colorC
ategory: "yellow", alcohol: 12, taste: { sweet: 10, sour
: 15, bitter: 5 }, keywords: { adjective: "祝福の", noun
: "泡" } },
  { id: 53, name: "キウイジュース", color: "#d2fba4", co
lorCategory: "green", alcohol: 0, taste: { sweet: 15, so
ur: 20, bitter: 0 }, keywords: { adjective: "大地の", no
un: "エメラルド" } },
  { id: 54, name: "ドクターペッパー", color: "#5e0b15",
colorCategory: "brown", alcohol: 0, taste: { sweet: 22,
sour: 5, bitter: 8 }, keywords: { adjective: "選ばれし者
の", noun: "知的な飲み物" } },
  { id: 55, name: "紅茶", color: "#c87533", colorCategor
y: "brown", alcohol: 0, taste: { sweet: 0, sour: 0, bitt
er: 10 }, keywords: { adjective: "午後の", noun: "安らぎ
" } },
  { id: 56, name: "緑茶", color: "#7ca982", colorCategor
y: "green", alcohol: 0, taste: { sweet: 0, sour: 0, bitt
er: 15 }, keywords: { adjective: "静寂の", noun: "一服"
} },
  { id: 57, name: "豆乳", color: "#fdf5e6", colorCategor
y: "white", alcohol: 0, taste: { sweet: 8, sour: 0, bitt
er: 2 }, keywords: { adjective: "畑の", noun: "優しさ" }
 },
  { id: 58, name: "アーモンドミルク", color: "#efebe9",
colorCategory: "white", alcohol: 0, taste: { sweet: 10,
sour: 0, bitter: 3 }, keywords: { adjective: "香ばしい",
 noun: "誘惑" } },
  { id: 59, name: "エナジードリンク", color: "#f9e076",
colorCategory: "yellow", alcohol: 0, taste: { sweet: 35,
 sour: 15, bitter: 5 }, keywords: { adjective: "翼を授け
る", noun: "秘薬" } },
  { id: 60, name: "蜂蜜", color: "#ffb300", colorCategor
y: "yellow", alcohol: 0, taste: { sweet: 45, sour: 0, bi
tter: 0 }, keywords: { adjective: "森の", noun: "甘露" }
 },
  { id: 61, name: "メープルシロップ", color: "#b95c00",
colorCategory: "brown", alcohol: 0, taste: { sweet: 40,
sour: 0, bitter: 0 }, keywords: { adjective: "北国の", n
oun: "贈り物" } },
  { id: 62, name: "チョコレートリキュール", color: "#5d4
037", colorCategory: "brown", alcohol: 17, taste: { swee
t: 30, sour: 0, bitter: 10 }, keywords: { adjective: "禁
断の", noun: "甘さ" } },
  { id: 63, name: "マスカットリキュール", color: "#eaf5a
3", colorCategory: "green", alcohol: 16, taste: { sweet:
 28, sour: 8, bitter: 0 }, keywords: { adjective: "女王
の", noun: "微笑み" } },
  { id: 64, name: "あんずリキュール", color: "#ffb74d",
colorCategory: "yellow", alcohol: 15, taste: { sweet: 25
, sour: 12, bitter: 0 }, keywords: { adjective: "郷愁の"
, noun: "香り" } },
  { id: 65, name: "ハーブティー", color: "#e8f5e9", colo
rCategory: "green", alcohol: 0, taste: { sweet: 2, sour:
 2, bitter: 8 }, keywords: { adjective: "癒やしの", noun
: "時間" } },
  { id: 66, name: "タバスコ", color: "#ff0000", colorCat
egory: "red", alcohol: 0, taste: { sweet: 0, sour: 10, b
itter: 40 }, keywords: { adjective: "灼熱の", noun: "一
滴" } },
  { id: 67, name: "わさび", color: "#a8d8b9", colorCateg
ory: "green", alcohol: 0, taste: { sweet: 0, sour: 5, bi
tter: 30 }, keywords: { adjective: "涙の", noun: "刺激"
} },
  { id: 68, name: "醤油", color: "#5c3c10", colorCategor
y: "brown", alcohol: 0, taste: { sweet: 2, sour: 2, bitt
er: 15 }, keywords: { adjective: "和の", noun: "極み" }
},
  { id: 69, name: "オリーブオイル", color: "#e6e66e", co
lorCategory: "yellow", alcohol: 0, taste: { sweet: 0, so
ur: 0, bitter: 5 }, keywords: { adjective: "地中海の", n
oun: "恵み" } },
  { id: 70, name: "バルサミコ酢", color: "#42121c", colo
rCategory: "brown", alcohol: 0, taste: { sweet: 10, sour
: 25, bitter: 5 }, keywords: { adjective: "熟成の", noun
: "酸味" } },
  { id: 71, name: "スパークリングワイン", color: "#f7e7c
e", colorCategory: "yellow", alcohol: 11, taste: { sweet
: 8, sour: 12, bitter: 4 }, keywords: { adjective: "星屑
の", noun: "煌めき" } },
  { id: 72, name: "ポートワイン", color: "#7c0a02", colo
rCategory: "red", alcohol: 20, taste: { sweet: 25, sour:
 5, bitter: 8 }, keywords: { adjective: "貴婦人の", noun
: "秘密" } },
  { id: 73, name: "シェリー", color: "#f3e5ab", colorCat
egory: "yellow", alcohol: 17, taste: { sweet: 15, sour:
5, bitter: 10 }, keywords: { adjective: "黄昏の", noun:
"追憶" } },
  { id: 74, name: "マッコリ", color: "#f5f5dc", colorCat
egory: "white", alcohol: 6, taste: { sweet: 12, sour: 10
, bitter: 2 }, keywords: { adjective: "微睡みの", noun:
"白" } },
  { id: 75, name: "アイリッシュクリーム", color: "#ebd8c
1", colorCategory: "brown", alcohol: 17, taste: { sweet:
 28, sour: 0, bitter: 8 }, keywords: { adjective: "緑の
島の", noun: "囁き" } },
  { id: 76, name: "ドランブイ", color: "#f5deb3", colorC
ategory: "yellow", alcohol: 40, taste: { sweet: 35, sour
: 0, bitter: 10 }, keywords: { adjective: "王家の", noun
: "秘酒" } },
  { id: 77, name: "チナール", color: "#543d2b", colorCat
egory: "brown", alcohol: 16, taste: { sweet: 10, sour: 0
, bitter: 30 }, keywords: { adjective: "大地の", noun: "
苦味" } },
  { id: 78, name: "スーズ", color: "#f9dd51", colorCateg
ory: "yellow", alcohol: 20, taste: { sweet: 15, sour: 5,
 bitter: 28 }, keywords: { adjective: "野生の", noun: "
根" } },
  { id: 79, name: "イエーガーマイスター", color: "#1e2a2
2", colorCategory: "brown", alcohol: 35, taste: { sweet:
 25, sour: 0, bitter: 20 }, keywords: { adjective: "狩人
の", noun: "魂" } },
  { id: 80, name: "サンブーカ", color: "#f8f8ff", colorC
ategory: "clear", alcohol: 42, taste: { sweet: 30, sour:
 0, bitter: 10 }, keywords: { adjective: "星降る夜の", n
oun: "アニス" } },
  { id: 81, name: "アクアビット", color: "#fefde2", colo
rCategory: "clear", alcohol: 40, taste: { sweet: 5, sour
: 5, bitter: 15 }, keywords: { adjective: "極北の", noun
: "生命水" } },
  { id: 82, name: "カルヴァドス", color: "#fabd69", colo
rCategory: "yellow", alcohol: 40, taste: { sweet: 15, so
ur: 5, bitter: 10 }, keywords: { adjective: "林檎の", no
un: "魂" } },
  { id: 83, name: "キルシュヴァッサー", color: "#fdfdfd"
, colorCategory: "clear", alcohol: 40, taste: { sweet: 1
0, sour: 5, bitter: 5 }, keywords: { adjective: "桜桃の"
, noun: "吐息" } },
  { id: 84, name: "スロー・ジン", color: "#c54245", colo
rCategory: "red", alcohol: 25, taste: { sweet: 20, sour:
 15, bitter: 5 }, keywords: { adjective: "森の", noun: "
ルビー" } },
  { id: 85, name: "ピムス", color: "#b9452b", colorCateg
ory: "brown", alcohol: 25, taste: { sweet: 15, sour: 10,
 bitter: 15 }, keywords: { adjective: "英国紳士の", noun
: "午後" } },
  { id: 86, name: "ウーゾ", color: "#f0f8ff", colorCateg
ory: "clear", alcohol: 40, taste: { sweet: 10, sour: 0,
bitter: 15 }, keywords: { adjective: "エーゲ海の", noun:
 "陽光" } },
  { id: 87, name: "パスティス", color: "#f3e28d", colorC
ategory: "yellow", alcohol: 45, taste: { sweet: 15, sour
: 0, bitter: 20 }, keywords: { adjective: "南仏の", noun
: "蜃気楼" } },
  { id: 88, name: "電気ブラン", color: "#ce7e00", colorC
ategory: "brown", alcohol: 40, taste: { sweet: 20, sour:
 5, bitter: 15 }, keywords: { adjective: "夢の", noun: "
カクテル" } },
  { id: 89, name: "アドヴォカート", color: "#fddc5c", co
lorCategory: "yellow", alcohol: 17, taste: { sweet: 30,
sour: 0, bitter: 5 }, keywords: { adjective: "弁護士の",
 noun: "活力" } },
  { id: 90, name: "ガリアーノ", color: "#ffc107", colorC
ategory: "yellow", alcohol: 30, taste: { sweet: 28, sour
m2313196@a11:~/PE_JS/lec5$
m2313196@a11:~/PE_JS/lec5$
m2313196@a11:~/PE_JS/lec5$
m2313196@a11:~/PE_JS/lec5$
m2313196@a11:~/PE_JS/lec5$ git add main.js
fatal: not a git repository (or any parent up to mount point /home1/y2023)
Stopping at filesystem boundary (GIT_DISCOVERY_ACROSS_FILESYSTEM not set).
m2313196@a11:~/PE_JS/lec5$ vi main.js
m2313196@a11:~/PE_JS/lec5$ vi main.js


m2313196@a11:~/PE_JS/lec5$ more main.js
//===== カクテルの原材料 =====
//さすがにAI使いました
const ingredients = [
  { id: 1, name: "ジン", color: "#d4f0f0", colorCategory: "clear", alcohol: 40, taste: { sweet: 0, sour: 5, bitter: 1
0 }, keywords: { adjective: "霧の", noun: "静寂" } },
  { id: 2, name: "ウォッカ", color: "#e0e0e0", colorCategory: "clear", alcohol: 40, taste: { sweet: 0, sour: 0, bitte
r: 5 }, keywords: { adjective: "氷の", noun: "衝撃" } },
  { id: 3, name: "オレンジジュース", color: "#ffc400", colorCategory: "yellow", alcohol: 0, taste: { sweet: 15, sour:
 10, bitter: 0 }, keywords: { adjective: "太陽の", noun: "果実" } },
  { id: 4, name: "ブルーキュラソー", color: "#005eff", colorCategory: "blue", alcohol: 25, taste: { sweet: 20, sour:
5, bitter: 0 }, keywords: { adjective: "海の", noun: "宝石" } },
  { id: 5, name: "ライムジュース", color: "#c2f24d", colorCategory: "green", alcohol: 0, taste: { sweet: 5, sour: 20,
 bitter: 0 }, keywords: { adjective: "新緑の", noun: "雫" } },
  { id: 6, name: "カシスリキュール", color: "#670a30", colorCategory: "red", alcohol: 20, taste: { sweet: 25, sour: 5
, bitter: 0 }, keywords: { adjective: "深紅の", noun: "誘惑" } },
  { id: 7, name: "ラム", color: "#c68f52", colorCategory: "brown", alcohol: 40, taste: { sweet: 10, sour: 0, bitter:
5 }, keywords: { adjective: "海賊の", noun: "秘宝" } },
  { id: 8, name: "牛乳", color: "#f5f5f5", colorCategory: "white", alcohol: 0, taste: { sweet: 5, sour: 0, bitter: 0
}, keywords: { adjective: "純白の", noun: "優しさ" } },
  { id: 9, name: "テキーラ", color: "#f0e48c", colorCategory: "yellow", alcohol: 40, taste: { sweet: 5, sour: 5, bitt
er: 5 }, keywords: { adjective: "灼熱の", noun: "約束" } },
  { id: 10, name: "ウイスキー", color: "#d2691e", colorCategory: "brown", alcohol: 43, taste: { sweet: 5, sour: 0, bi
tter: 15 }, keywords: { adjective: "琥珀の", noun: "時間" } },
  { id: 11, name: "ブランデー", color: "#b87333", colorCategory: "brown", alcohol: 40, taste: { sweet: 10, sour: 0, b
itter: 10 }, keywords: { adjective: "王者の", noun: "風格" } },
  { id: 12, name: "赤ワイン", color: "#8B0000", colorCategory: "red", alcohol: 13, taste: { sweet: 5, sour: 10, bitte
r: 10 }, keywords: { adjective: "豊穣の", noun: "大地" } },
m2313196@a11:~/PE_JS/lec5$ more -9main.js
more: 不明なオプション -main.js です
詳しくは `more --help' をお読みください。
m2313196@a11:~/PE_JS/lec5$ more -14  main.js
//===== カクテルの原材料 =====
//さすがにAI使いました
const ingredients = [
  { id: 1, name: "ジン", color: "#d4f0f0", colorCategory: "clear", alcohol: 40, taste: { sweet: 0, sour: 5, bitter: 1
0 }, keywords: { adjective: "霧の", noun: "静寂" } },
  { id: 2, name: "ウォッカ", color: "#e0e0e0", colorCategory: "clear", alcohol: 40, taste: { sweet: 0, sour: 0, bitte
r: 5 }, keywords: { adjective: "氷の", noun: "衝撃" } },
  { id: 3, name: "オレンジジュース", color: "#ffc400", colorCategory: "yellow", alcohol: 0, taste: { sweet: 15, sour:
 10, bitter: 0 }, keywords: { adjective: "太陽の", noun: "果実" } },
  { id: 4, name: "ブルーキュラソー", color: "#005eff", colorCategory: "blue", alcohol: 25, taste: { sweet: 20, sour:
5, bitter: 0 }, keywords: { adjective: "海の", noun: "宝石" } },
  { id: 5, name: "ライムジュース", color: "#c2f24d", colorCategory: "green", alcohol: 0, taste: { sweet: 5, sour: 20,
 bitter: 0 }, keywords: { adjective: "新緑の", noun: "雫" } },
  { id: 6, name: "カシスリキュール", color: "#670a30", colorCategory: "red", alcohol: 20, taste: { sweet: 25, sour: 5
, bitter: 0 }, keywords: { adjective: "深紅の", noun: "誘惑" } },
  { id: 7, name: "ラム", color: "#c68f52", colorCategory: "brown", alcohol: 40, taste: { sweet: 10, sour: 0, bitter:
5 }, keywords: { adjective: "海賊の", noun: "秘宝" } },
  { id: 8, name: "牛乳", color: "#f5f5f5", colorCategory: "white", alcohol: 0, taste: { sweet: 5, sour: 0, bitter: 0
}, keywords: { adjective: "純白の", noun: "優しさ" } },
  { id: 9, name: "テキーラ", color: "#f0e48c", colorCategory: "yellow", alcohol: 40, taste: { sweet: 5, sour: 5, bitt
er: 5 }, keywords: { adjective: "灼熱の", noun: "約束" } },
  { id: 10, name: "ウイスキー", color: "#d2691e", colorCategory: "brown", alcohol: 43, taste: { sweet: 5, sour: 0, bi
tter: 15 }, keywords: { adjective: "琥珀の", noun: "時間" } },
  { id: 11, name: "ブランデー", color: "#b87333", colorCategory: "brown", alcohol: 40, taste: { sweet: 10, sour: 0, b
itter: 10 }, keywords: { adjective: "王者の", noun: "風格" } },
  { id: 12, name: "赤ワイン", color: "#8B0000", colorCategory: "red", alcohol: 13, taste: { sweet: 5, sour: 10, bitte
r: 10 }, keywords: { adjective: "豊穣の", noun: "大地" } },
  { id: 13, name: "白ワイン", color: "#f8f8ff", colorCategory: "white", alcohol: 12, taste: { sweet: 10, sour: 15, bi
tter: 5 }, keywords: { adjective: "月光の", noun: "調べ" } },
  { id: 14, name: "日本酒", color: "#fafad2", colorCategory: "clear", alcohol: 15, taste: { sweet: 10, sour: 5, bitte
r: 5 }, keywords: { adjective: "雅な", noun: "宴" } },
  { id: 15, name: "焼酎", color: "#f5fffa", colorCategory: "clear", alcohol: 25, taste: { sweet: 5, sour: 5, bitter:
5 }, keywords: { adjective: "孤高の", noun: "魂" } },
  { id: 16, name: "ベルモット", color: "#fddc5c", colorCategory: "yellow", alcohol: 15, taste: { sweet: 15, sour: 5,
bitter: 15 }, keywords: { adjective: "薬草の", noun: "囁き" } },
  { id: 17, name: "カンパリ", color: "#e52d2d", colorCategory: "red", alcohol: 25, taste: { sweet: 10, sour: 0, bitte
r: 25 }, keywords: { adjective: "情熱の", noun: "口づけ" } },
  { id: 18, name: "ピーチリキュール", color: "#ffc0cb", colorCategory: "pink", alcohol: 15, taste: { sweet: 30, sour:
 5, bitter: 0 }, keywords: { adjective: "妖精の", noun: "吐息" } },
  { id: 19, name: "ライチリキュール", color: "#f0f8ff", colorCategory: "clear", alcohol: 21, taste: { sweet: 28, sour
: 5, bitter: 0 }, keywords: { adjective: "楊貴妃の", noun: "涙" } },
  { id: 20, name: "メロンリキュール", color: "#7fff00", colorCategory: "green", alcohol: 20, taste: { sweet: 35, sour
: 0, bitter: 0 }, keywords: { adjective: "翠緑の", noun: "夢" } },
  { id: 21, name: "ストロベリーリキュール", color: "#ff4b68", colorCategory: "red", alcohol: 18, taste: { sweet: 28,
sour: 10, bitter: 0 }, keywords: { adjective: "初恋の", noun: "憧れ" } },
  { id: 22, name: "抹茶リキュール", color: "#364e36", colorCategory: "green", alcohol: 20, taste: { sweet: 15, sour:
0, bitter: 20 }, keywords: { adjective: "侘び寂びの", noun: "心" } },
  { id: 23, name: "コーヒーリキュール", color: "#4a2c2a", colorCategory: "brown", alcohol: 20, taste: { sweet: 20, so
ur: 0, bitter: 25 }, keywords: { adjective: "真夜中の", noun: "覚醒" } },
  { id: 24, name: "アマレット", color: "#e6b422", colorCategory: "brown", alcohol: 28, taste: { sweet: 25, sour: 0, b
itter: 10 }, keywords: { adjective: "杏仁の", noun: "記憶" } },
  { id: 25, name: "ココナッツリキュール", color: "#ffffff", colorCategory: "white", alcohol: 21, taste: { sweet: 30,
sour: 0, bitter: 0 }, keywords: { adjective: "南国の", noun: "楽園" } },
  { id: 26, name: "バイオレットリキュール", color: "#8a2be2", colorCategory: "purple", alcohol: 20, taste: { sweet: 2
0, sour: 5, bitter: 5 }, keywords: { adjective: "夜空の", noun: "すみれ" } },
  { id: 27, name: "グレープフルーツジュース", color: "#ffc87c", colorCategory: "yellow", alcohol: 0, taste: { sweet:
10, sour: 15, bitter: 5 }, keywords: { adjective: "暁の", noun: "希望" } },
  { id: 28, name: "クランベリージュース", color: "#d2143a", colorCategory: "red", alcohol: 0, taste: { sweet: 5, sour
: 25, bitter: 0 }, keywords: { adjective: "小悪魔の", noun: "微笑み" } },
  { id: 29, name: "パイナップルジュース", color: "#fef381", colorCategory: "yellow", alcohol: 0, taste: { sweet: 20,
sour: 15, bitter: 0 }, keywords: { adjective: "常夏の", noun: "陽光" } },
  { id: 30, name: "トマトジュース", color: "#ff6347", colorCategory: "red", alcohol: 0, taste: { sweet: 5, sour: 10,
bitter: 0 }, keywords: { adjective: "血潮の", noun: "誓い" } },
  { id: 31, name: "ソーダ", color: "#e3f2fd", colorCategory: "clear", alcohol: 0, taste: { sweet: 0, sour: 0, bitter:
 0 }, keywords: { adjective: "弾ける", noun: "泡" } },
  { id: 32, name: "トニックウォーター", color: "#e8f5e9", colorCategory: "clear", alcohol: 0, taste: { sweet: 5, sour
: 5, bitter: 10 }, keywords: { adjective: "賢者の", noun: "選択" } },
  { id: 33, name: "ジンジャーエール", color: "#f0e68c", colorCategory: "yellow", alcohol: 0, taste: { sweet: 15, sour
: 5, bitter: 5 }, keywords: { adjective: "黄金の", noun: "稲妻" } },
  { id: 34, name: "コーラ", color: "#3e2723", colorCategory: "brown", alcohol: 0, taste: { sweet: 25, sour: 0, bitter
: 0 }, keywords: { adjective: "漆黒の", noun: "甘美" } },
  { id: 35, name: "生クリーム", color: "#fffdd0", colorCategory: "white", alcohol: 0, taste: { sweet: 10, sour: 0, bi
tter: 0 }, keywords: { adjective: "天使の", noun: "羽" } },
  { id: 36, name: "卵黄", color: "#ffd700", colorCategory: "yellow", alcohol: 0, taste: { sweet: 5, sour: 0, bitter:
0 }, keywords: { adjective: "生命の", noun: "源" } },
  { id: 37, name: "ミント", color: "#98ff98", colorCategory: "green", alcohol: 0, taste: { sweet: 0, sour: 0, bitter:
 5 }, keywords: { adjective: "清涼な", noun: "風" } },
  { id: 38, name: "レモンジュース", color: "#fffacd", colorCategory: "yellow", alcohol: 0, taste: { sweet: 2, sour: 3
0, bitter: 0 }, keywords: { adjective: "閃光の", noun: "一撃" } },
  { id: 39, name: "グレナデンシロップ", color: "#e03c31", colorCategory: "red", alcohol: 0, taste: { sweet: 40, sour:
 5, bitter: 0 }, keywords: { adjective: "ザクロの", noun: "心臓" } },
  { id: 40, name: "シュガーシロップ", color: "#f0f0f0", colorCategory: "clear", alcohol: 0, taste: { sweet: 30, sour:
 0, bitter: 0 }, keywords: { adjective: "純粋な", noun: "甘さ" } },
  { id: 41, name: "アブサン", color: "#abff4f", colorCategory: "green", alcohol: 70, taste: { sweet: 5, sour: 0, bitt
er: 35 }, keywords: { adjective: "禁断の", noun: "霊薬" } },
  { id: 42, name: "シャルトリューズ", color: "#b2d235", colorCategory: "green", alcohol: 55, taste: { sweet: 20, sour
: 0, bitter: 25 }, keywords: { adjective: "修道院の", noun: "秘伝" } },
  { id: 43, name: "ヨーグルトリキュール", color: "#f7f7f7", colorCategory: "white", alcohol: 15, taste: { sweet: 15,
sour: 15, bitter: 0 }, keywords: { adjective: "草原の", noun: "朝" } },
  { id: 44, name: "マンゴージュース", color: "#ffc300", colorCategory: "yellow", alcohol: 0, taste: { sweet: 25, sour
: 10, bitter: 0 }, keywords: { adjective: "楽園の", noun: "雫" } },
  { id: 45, name: "エルダーフラワーリキュール", color: "#f1fbe4", colorCategory: "clear", alcohol: 20, taste: { sweet
: 30, sour: 5, bitter: 0 }, keywords: { adjective: "長老の", noun: "祝福" } },
  { id: 46, name: "桜リキュール", color: "#ffe4e1", colorCategory: "pink", alcohol: 18, taste: { sweet: 20, sour: 5,
bitter: 5 }, keywords: { adjective: "春霞の", noun: "幻" } },
  { id: 47, name: "金箔", color: "#f5e653", colorCategory: "gold", alcohol: 0, taste: { sweet: 0, sour: 0, bitter: 0
}, keywords: { adjective: "黄金の", noun: "輝き" } },
  { id: 48, name: "岩塩", color: "#fadfad", colorCategory: "clear", alcohol: 0, taste: { sweet: 0, sour: 0, bitter: 5
 }, keywords: { adjective: "太古の", noun: "結晶" } },
  { id: 49, name: "梅酒", color: "#e8d3a3", colorCategory: "brown", alcohol: 12, taste: { sweet: 25, sour: 15, bitter
: 0 }, keywords: { adjective: "懐かしい", noun: "思い出" } },
  { id: 50, name: "泡盛", color: "#f0ffff", colorCategory: "clear", alcohol: 30, taste: { sweet: 5, sour: 5, bitter:
10 }, keywords: { adjective: "琉球の", noun: "誇り" } },
  { id: 51, name: "アップルジュース", color: "#f8e4b3", colorCategory: "yellow", alcohol: 0, taste: { sweet: 20, sour
: 10, bitter: 0 }, keywords: { adjective: "禁断の", noun: "果実" } },
  { id: 52, name: "シャンパン", color: "#f7e7ce", colorCategory: "yellow", alcohol: 12, taste: { sweet: 10, sour: 15,
 bitter: 5 }, keywords: { adjective: "祝福の", noun: "泡" } },
  { id: 53, name: "キウイジュース", color: "#d2fba4", colorCategory: "green", alcohol: 0, taste: { sweet: 15, sour: 2
0, bitter: 0 }, keywords: { adjective: "大地の", noun: "エメラルド" } },
  { id: 54, name: "ドクターペッパー", color: "#5e0b15", colorCategory: "brown", alcohol: 0, taste: { sweet: 22, sour:
 5, bitter: 8 }, keywords: { adjective: "選ばれし者の", noun: "知的な飲み物" } },
  { id: 55, name: "紅茶", color: "#c87533", colorCategory: "brown", alcohol: 0, taste: { sweet: 0, sour: 0, bitter: 1
0 }, keywords: { adjective: "午後の", noun: "安らぎ" } },
  { id: 56, name: "緑茶", color: "#7ca982", colorCategory: "green", alcohol: 0, taste: { sweet: 0, sour: 0, bitter: 1
5 }, keywords: { adjective: "静寂の", noun: "一服" } },
  { id: 57, name: "豆乳", color: "#fdf5e6", colorCategory: "white", alcohol: 0, taste: { sweet: 8, sour: 0, bitter: 2
 }, keywords: { adjective: "畑の", noun: "優しさ" } },
  { id: 58, name: "アーモンドミルク", color: "#efebe9", colorCategory: "white", alcohol: 0, taste: { sweet: 10, sour:
 0, bitter: 3 }, keywords: { adjective: "香ばしい", noun: "誘惑" } },
  { id: 59, name: "エナジードリンク", color: "#f9e076", colorCategory: "yellow", alcohol: 0, taste: { sweet: 35, sour
: 15, bitter: 5 }, keywords: { adjective: "翼を授ける", noun: "秘薬" } },
  { id: 60, name: "蜂蜜", color: "#ffb300", colorCategory: "yellow", alcohol: 0, taste: { sweet: 45, sour: 0, bitter:
 0 }, keywords: { adjective: "森の", noun: "甘露" } },
  { id: 61, name: "メープルシロップ", color: "#b95c00", colorCategory: "brown", alcohol: 0, taste: { sweet: 40, sour:
 0, bitter: 0 }, keywords: { adjective: "北国の", noun: "贈り物" } },
  { id: 62, name: "チョコレートリキュール", color: "#5d4037", colorCategory: "brown", alcohol: 17, taste: { sweet: 30
, sour: 0, bitter: 10 }, keywords: { adjective: "禁断の", noun: "甘さ" } },
  { id: 63, name: "マスカットリキュール", color: "#eaf5a3", colorCategory: "green", alcohol: 16, taste: { sweet: 28,
sour: 8, bitter: 0 }, keywords: { adjective: "女王の", noun: "微笑み" } },
  { id: 64, name: "あんずリキュール", color: "#ffb74d", colorCategory: "yellow", alcohol: 15, taste: { sweet: 25, sou
r: 12, bitter: 0 }, keywords: { adjective: "郷愁の", noun: "香り" } },
  { id: 65, name: "ハーブティー", color: "#e8f5e9", colorCategory: "green", alcohol: 0, taste: { sweet: 2, sour: 2, b
itter: 8 }, keywords: { adjective: "癒やしの", noun: "時間" } },
  { id: 66, name: "タバスコ", color: "#ff0000", colorCategory: "red", alcohol: 0, taste: { sweet: 0, sour: 10, bitter
: 40 }, keywords: { adjective: "灼熱の", noun: "一滴" } },
  { id: 67, name: "わさび", color: "#a8d8b9", colorCategory: "green", alcohol: 0, taste: { sweet: 0, sour: 5, bitter:
 30 }, keywords: { adjective: "涙の", noun: "刺激" } },
  { id: 68, name: "醤油", color: "#5c3c10", colorCategory: "brown", alcohol: 0, taste: { sweet: 2, sour: 2, bitter: 1
5 }, keywords: { adjective: "和の", noun: "極み" } },
  { id: 69, name: "オリーブオイル", color: "#e6e66e", colorCategory: "yellow", alcohol: 0, taste: { sweet: 0, sour: 0
, bitter: 5 }, keywords: { adjective: "地中海の", noun: "恵み" } },
  { id: 70, name: "バルサミコ酢", color: "#42121c", colorCategory: "brown", alcohol: 0, taste: { sweet: 10, sour: 25,
 bitter: 5 }, keywords: { adjective: "熟成の", noun: "酸味" } },
  { id: 71, name: "スパークリングワイン", color: "#f7e7ce", colorCategory: "yellow", alcohol: 11, taste: { sweet: 8,
sour: 12, bitter: 4 }, keywords: { adjective: "星屑の", noun: "煌めき" } },
  { id: 72, name: "ポートワイン", color: "#7c0a02", colorCategory: "red", alcohol: 20, taste: { sweet: 25, sour: 5, b
itter: 8 }, keywords: { adjective: "貴婦人の", noun: "秘密" } },
  { id: 73, name: "シェリー", color: "#f3e5ab", colorCategory: "yellow", alcohol: 17, taste: { sweet: 15, sour: 5, bi
tter: 10 }, keywords: { adjective: "黄昏の", noun: "追憶" } },
  { id: 74, name: "マッコリ", color: "#f5f5dc", colorCategory: "white", alcohol: 6, taste: { sweet: 12, sour: 10, bit
ter: 2 }, keywords: { adjective: "微睡みの", noun: "白" } },
  { id: 75, name: "アイリッシュクリーム", color: "#ebd8c1", colorCategory: "brown", alcohol: 17, taste: { sweet: 28,
sour: 0, bitter: 8 }, keywords: { adjective: "緑の島の", noun: "囁き" } },
  { id: 76, name: "ドランブイ", color: "#f5deb3", colorCategory: "yellow", alcohol: 40, taste: { sweet: 35, sour: 0,
bitter: 10 }, keywords: { adjective: "王家の", noun: "秘酒" } },
  { id: 77, name: "チナール", color: "#543d2b", colorCategory: "brown", alcohol: 16, taste: { sweet: 10, sour: 0, bit
ter: 30 }, keywords: { adjective: "大地の", noun: "苦味" } },
  { id: 78, name: "スーズ", color: "#f9dd51", colorCategory: "yellow", alcohol: 20, taste: { sweet: 15, sour: 5, bitt
er: 28 }, keywords: { adjective: "野生の", noun: "根" } },
  { id: 79, name: "イエーガーマイスター", color: "#1e2a22", colorCategory: "brown", alcohol: 35, taste: { sweet: 25,
sour: 0, bitter: 20 }, keywords: { adjective: "狩人の", noun: "魂" } },
  { id: 80, name: "サンブーカ", color: "#f8f8ff", colorCategory: "clear", alcohol: 42, taste: { sweet: 30, sour: 0, b
itter: 10 }, keywords: { adjective: "星降る夜の", noun: "アニス" } },
  { id: 81, name: "アクアビット", color: "#fefde2", colorCategory: "clear", alcohol: 40, taste: { sweet: 5, sour: 5,
bitter: 15 }, keywords: { adjective: "極北の", noun: "生命水" } },
  { id: 82, name: "カルヴァドス", color: "#fabd69", colorCategory: "yellow", alcohol: 40, taste: { sweet: 15, sour: 5
, bitter: 10 }, keywords: { adjective: "林檎の", noun: "魂" } },
  { id: 83, name: "キルシュヴァッサー", color: "#fdfdfd", colorCategory: "clear", alcohol: 40, taste: { sweet: 10, so
ur: 5, bitter: 5 }, keywords: { adjective: "桜桃の", noun: "吐息" } },
  { id: 84, name: "スロー・ジン", color: "#c54245", colorCategory: "red", alcohol: 25, taste: { sweet: 20, sour: 15,
bitter: 5 }, keywords: { adjective: "森の", noun: "ルビー" } },
  { id: 85, name: "ピムス", color: "#b9452b", colorCategory: "brown", alcohol: 25, taste: { sweet: 15, sour: 10, bitt
er: 15 }, keywords: { adjective: "英国紳士の", noun: "午後" } },
  { id: 86, name: "ウーゾ", color: "#f0f8ff", colorCategory: "clear", alcohol: 40, taste: { sweet: 10, sour: 0, bitte
r: 15 }, keywords: { adjective: "エーゲ海の", noun: "陽光" } },
  { id: 87, name: "パスティス", color: "#f3e28d", colorCategory: "yellow", alcohol: 45, taste: { sweet: 15, sour: 0,
bitter: 20 }, keywords: { adjective: "南仏の", noun: "蜃気楼" } },
  { id: 88, name: "電気ブラン", color: "#ce7e00", colorCategory: "brown", alcohol: 40, taste: { sweet: 20, sour: 5, b
itter: 15 }, keywords: { adjective: "夢の", noun: "カクテル" } },
  { id: 89, name: "アドヴォカート", color: "#fddc5c", colorCategory: "yellow", alcohol: 17, taste: { sweet: 30, sour:
 0, bitter: 5 }, keywords: { adjective: "弁護士の", noun: "活力" } },
  { id: 90, name: "ガリアーノ", color: "#ffc107", colorCategory: "yellow", alcohol: 30, taste: { sweet: 28, sour: 0,
bitter: 12 }, keywords: { adjective: "黄金の", noun: "伝説" } },
  { id: 91, name: "アマロ", color: "#542f1b", colorCategory: "brown", alcohol: 30, taste: { sweet: 15, sour: 0, bitte
r: 35 }, keywords: { adjective: "食後の", noun: "賢者" } },
  { id: 92, name: "ベルガモットリキュール", color: "#fcf8a1", colorCategory: "yellow", alcohol: 20, taste: { sweet: 2
2, sour: 10, bitter: 8 }, keywords: { adjective: "貴族の", noun: "香り" } },
  { id: 93, name: "ザクロジュース", color: "#9a2a2a", colorCategory: "red", alcohol: 0, taste: { sweet: 18, sour: 18,
 bitter: 5 }, keywords: { adjective: "冥界の", noun: "果実" } },
  { id: 94, name: "アセロラジュース", color: "#ff4d4d", colorCategory: "red", alcohol: 0, taste: { sweet: 10, sour: 3
5, bitter: 0 }, keywords: { adjective: "太陽の", noun: "ビタミン" } },
  { id: 95, name: "ガラナ飲料", color: "#c66b27", colorCategory: "brown", alcohol: 0, taste: { sweet: 25, sour: 5, bi
tter: 10 }, keywords: { adjective: "アマゾンの", noun: "活力" } },
  { id: 96, name: "杏仁豆腐", color: "#fdf5e6", colorCategory: "white", alcohol: 0, taste: { sweet: 20, sour: 0, bitt
er: 2 }, keywords: { adjective: "絹のような", noun: "デザート" } },
  { id: 97, "name": "タピオカ", "color": "#424242", "colorCategory": "black", "alcohol": 0, "taste": { "sweet": 15, "
sour": 0, "bitter": 0 }, "keywords": { "adjective": "もちもちの", "noun": "宝石" } },
  { id: 98, name: "ホイップクリーム", color: "#f6f6f6", colorCategory: "white", alcohol: 0, taste: { sweet: 18, sour:
 0, bitter: 0 }, keywords: { adjective: "雲の上の", noun: "軽さ" } },
  { id: 99, name: "ローズシロップ", color: "#f55c7a", colorCategory: "pink", alcohol: 0, taste: { sweet: 38, sour: 2,
 bitter: 5 }, keywords: { adjective: "薔薇色の", noun: "人生" } },
  { id: 100, name: "ラベンダーシロップ", color: "#e6e6fa", colorCategory: "purple", alcohol: 0, taste: { sweet: 35, s
our: 0, bitter: 8 }, keywords: { adjective: "安らぎの", noun: "香り" } },
  { id: 101, name: "黒蜜", color: "#3d2117", colorCategory: "brown", alcohol: 0, taste: { sweet: 48, sour: 0, bitter:
 5 }, keywords: { adjective: "黒糖の", noun: "深み" } }
];

//===== レシピの定義 =====
const specialRecipes = [
  { name: "ギムレット", materials: [1, 5], description: "「ギムレットには早すぎる」という名台詞で知られる、辛口カクテ
ルの代表格。" },
  { name: "カシスオレンジ", materials: [6, 3], description: "甘口で飲みやすい、世界中で愛される定番カクテル。" },
  { name: "スクリュードライバー", materials: [2, 3], description: "「ねじ回し」の名を持つ、飲みやすいが度数の高いカク
テル。" },
  { name: "モスコミュール", materials: [2, 5, 33], description: "銅製のマグカップで飲むのが特徴。ライムと生姜の風味が
爽やか。" },
  { name: "ブラッディ・メアリー", materials: [2, 30], description: "「血まみれのメアリー」という名は、イングランド女
王メアリー1世に由来するとも。" },
  { name: "シー・ブリーズ", materials: [2, 28, 27], description: "「潮風」の名にふさわしい、クランベリーとグレープフ
ルーツの爽やかな一杯。" },
  { name: "ソルティ・ドッグ", materials: [2, 27, 48], description: "グラスの縁の塩が特徴。ウォッカベースのさっぱりと
した味わい。" },
  { name: "キューバ・リブレ", materials: [7, 34, 5], description: "「自由なキューバ」を意味する、ラムとコーラのシンプ
ルなカクテル。" },
  { name: "モヒート", materials: [7, 31, 5, 37], description: "ミントの葉をふんだんに使った、カリブ海生まれの爽快なカ
クテル。" },
  { name: "ダイキリ", materials: [7, 5, 40], description: "ラムベースのショートカクテルの代表格。シンプルながら奥深い
。" },
  { name: "マルガリータ", materials: [9, 5, 4], description: "テキーラベースの最も有名なカクテル。陽気な気分にさせて
くれる。" },
  { name: "マタドール", materials: [9, 29, 5], description: "「闘牛士」の名を持つ、パイナップルの甘酸っぱさが特徴のカ
クテル。" },
  { name: "マンハッタン", materials: [10, 16, 17], description: "「カクテルの女王」と称される、ウイスキーベースのクラ
シックカクテル。" },
  { name: "ゴッドファーザー", materials: [10, 24], description: "ウイスキーとアマレットを1対1で混ぜるだけ。映画の名を
冠した力強い一杯。" },
  { name: "キール", materials: [13, 6], description: "白ワインとカシスリキュールで作る、食前酒の定番。" },
  { name: "キール・ロワイヤル", materials: [52, 6], description: "キールの白ワインをシャンパンに変えた、より華やかな
一杯。" },
  { name: "ベリーニ", materials: [52, 18], description: "ピーチの甘い香りが広がる、ヴェネツィア生まれのエレガントなカ
クテル。" },
  { name: "ブラック・ルシアン", materials: [2, 23], description: "ウォッカとコーヒーリキュールのみ。シンプルでビター
な大人の味。" },
  { name: "ホワイト・ルシアン", materials: [2, 23, 35], description: "ブラック・ルシアンに生クリームを加えた、まろや
かな口当たりのカクテル。" },
  { name: "ファジーネーブル", materials: [18, 3], description: "ピーチとオレンジの組み合わせ。非常に飲みやすく、初心
者におすすめ。" },
  { name: "チャイナ・ブルー", materials: [19, 27, 4], description: "ライチの独特な風味と美しい青色が特徴の、さっぱり
としたカクテル。" },
  { name: "スプモーニ", materials: [17, 27, 32], description: "カンパリの苦味とグレープフルーツの酸味が絶妙にマッチし
た、爽快な一杯。" },
  { name: "カルーア・ミルク", materials: [23, 8], description: "コーヒーリキュールを牛乳で割っただけの、甘くて飲みや
すい定番カクテル。" },
  { name: "ベイリーズ・ミルク", materials: [75, 8], description: "アイリッシュクリームの豊かな風味を牛乳が優しく包み
込む、デザートのような一杯。" },
  { name: "照葉樹林", materials: [22, 56], description: "抹茶リキュールと緑茶で作る、日本の美を感じさせる落ち着いた味
わい。" },
  { name: "ピニャ・コラーダ", materials: [7, 25, 29], description: "「裏ごししたパイナップル」という意味。ココナッツ
の甘い香りが南国気分を誘う。" },
  { name: "ブルー・ハワイ", materials: [7, 4, 29], description: "その名の通り、ハワイの青い海を思わせるトロピカルカク
テルの代表格。" },
  { name: "シンガポール・スリング", materials: [1, 83, 38, 39], description: "シンガポールのラッフルズホテルで生まれ
た、複雑で奥深い味わいのカクテル。" },
  { name: "テキーラ・サンライズ", materials: [9, 3, 39], description: "グレナデンシロップが静かに沈んでいく様子が「日
の出」のように見える美しいカクテル。" },
  { name: "コスモポリタン", materials: [2, 4, 28, 5], description: "クランベリージュースの赤が鮮やかな、洗練された都
会的な味わい。" },
  { name: "セックス・オン・ザ・ビーチ", materials: [2, 18, 28, 3], description: "挑発的な名前とは裏腹に、フルーティー
で非常に飲みやすい人気のカクテル。" },
  { name: "ロングアイランド・アイスティー", materials: [1, 2, 7, 9], description: "紅茶を一切使わずに紅茶の色と味に似
ていることから命名。非常に度数が高い。" },
  { name: "XYZ", materials: [7, 4, 38], description: "アルファベットの最後であることから「これ以上のものはない究極の
カクテル」という意味を持つ。" },
  { name: "サイドカー", materials: [11, 4, 38], description: "ブランデーベースの代表的なカクテル。キリッとした酸味が
特徴。" },
  { name: "フレンチ・コネクション", materials: [11, 24], description: "ブランデーとアマレットを混ぜるだけ。ゴッドファ
ーザーのベースをブランデーに変えたもの。" },
  { name: "ネグローニ", materials: [1, 16, 17], description: "ジン、ベルモット、カンパリを同量ずつ。苦味と甘味のバラ
ンスが絶妙な大人の味。" },
  { name: "アメリカン・レモネード", materials: [12, 38, 40], description: "レモネードの上に赤ワインを浮かべた、美しい
二層のコントラストが特徴。" },
  { name: "ラスティ・ネイル", materials: [10, 76], description: "「錆びた釘」という名の通り、色合いは地味だが味わいは
甘く深い。" },
  { name: "アビエーション", materials: [1, 26, 38], description: "「飛行」の名を持つ、すみれのリキュールが織りなす薄
紫色が美しいカクテル。" },
  { name: "ブラック・ベルベット", materials: [52, 55], description: "シャンパンと黒ビールを半々に注いだ、ビロードのよ
うな口当たりが特徴。" },
  { name: "ボッチ・ボール", materials: [24, 3, 31], description: "アマレットの杏仁風味とオレンジが意外にもマッチする
、爽やかな一杯。" },
  { name: "カミカゼ", materials: [2, 4, 5], description: "その名とは裏腹に、ライムの風味が効いた非常にさっぱりとした
味わい。" },
  { name: "グラスホッパー", materials: [20, 62, 35], description: "「バッタ」の名の通り、鮮やかな緑色をしたミントチョ
コレート風味の甘いカクテル。" },
  { name: "エンジェル・フェイス", materials: [1, 82, 64], description: "ジンと二種類のアプリコットリキュールで作る、
天使の名にふさわしい甘く優しい味わい。" },
  { name: "ダーティ・マザー", materials: [11, 23], description: "ブランデーとコーヒーリキュール。フレンチコネクション
とゴッドファーザーの親戚筋にあたる。" },
  { name: "ミドリ・サワー", materials: [20, 38, 40], description: "メロンリキュールの甘さをレモンの酸味が引き締める、
鮮やかな緑のカクテル。" },
  { name: "シャンディ・ガフ", materials: [33, 55], description: "ビールとジンジャーエールを半々に割った、イギリスで人
気のビア・カクテル。" },
  { name: "レッド・アイ", materials: [30, 55], description: "トマトジュースとビールを合わせた、二日酔いの朝に良いとさ
れるカクテル。" },
  { name: "ボイラー・メーカー", materials: [10, 55], description: "ビールにウイスキーのショットグラスを沈めて飲む、荒
々しい飲み方のカクテル。" },
  { name: "ウーウー", materials: [2, 18, 28], description: "パーティーで盛り上がる歓声が名前の由来とされる、フルーテ
ィーなカクテル。" },
  { name: "雪国", materials: [2, 13, 37], description: "日本のバーテンダーが創作した、グラスの縁の砂糖を雪に見立てた
美しいカクテル。" },
  { name: "アドニス", materials: [73, 16, 3], description: "シェリーとベルモットで作る、ギリシャ神話の美少年の名を冠
した辛口カクテル。" },
  { name: "バンブー", materials: [73, 16], description: "シェリーとベルモットのみ。横浜のホテルで生まれた、日本発祥の
クラシックカクテル。" },
  { name: "ハーベイ・ウォールバンガー", materials: [2, 90, 3], description: "スクリュードライバーにガリアーノを浮かべ
たもの。壁を叩いて悔しがった人物の名から。" },
  { name: "ゴールデン・キャデラック", materials: [90, 62, 35], description: "ガリアーノとカカオリキュール、生クリーム
で作る、デザートのような豪華な一杯。" },
  { name: "アースクエイク", materials: [1, 10, 41], description: "「地震」の名にふさわしい、3種の強い酒を合わせた非常
に危険なカクテル。" },
  { name: "B-52", materials: [23, 75, 4], description: "コーヒー、クリーム、オレンジの3層に分かれた美しい見た目のショ
ットカクテル。" },
  { name: "オールド・ファッションド", materials: [10, 32, 40], description: "ウイスキー、砂糖、ビターズ、水のみで作る
、カクテルの原型ともいえる古典的な一杯。" },
  { name: "ミント・ジュレップ", materials: [10, 37, 40], description: "ケンタッキーダービーの公式ドリンクとして知られ
る、ミントが爽やかなウイスキーカクテル。" },
  { name: "サゼラック", materials: [10, 41, 40], description: "アブサンでグラスをリンスするのが特徴。ニューオーリンズ
発祥の歴史あるカクテル。" },
  { name: "ヴェスパー", materials: [1, 2, 73], description: "映画「007」でジェームズ・ボンドが注文したことで有名な、
ジンとウォッカをベースにしたカクテル。" },
  { name: "フレンチ75", materials: [1, 52, 38], description: "第一次世界大戦中のフランス軍の75mm砲にちなんで名付けら
れた、シャンパンベースの爽やかな一杯。" },
  { name: "ブラッド・アンド・サンド", materials: [10, 12, 83], description: "「血と砂」という名の通り、スコッチウイス
キーとチェリー、オレンジが織りなす独特の味わい。" },
  { name: "アイリッシュ・コーヒー", materials: [10, 23, 98], description: "ウイスキー入りの温かいコーヒーにホイップク
リームを浮かべた、心も体も温まる一杯。" },
  { name: "梅酒ソーダ", materials: [49, 31], description: "梅酒の甘酸っぱさをソーダが引き立てる、日本の家庭でもおなじ
みの爽やかな味わい。" },
  { name: "サクラ・マティーニ", materials: [1, 46, 14], description: "桜リキュールと日本酒を使った、春の訪れを感じさ
せる和風マティーニ。" },
  { name: "アステカ・ボム", materials: [9, 79], description: "テキーラのショットをイエーガーボムに加えた、さらにエネ
ルギッシュな一杯。" },
  { name: "抹茶カルーアミルク", materials: [22, 23, 8], description: "カルーアミルクに抹茶のほろ苦さが加わった、和洋
折衷のデザートカクテル。" },
  { name: "サムライ・ロック", materials: [14, 5], description: "日本酒を氷で冷やし、ライムを搾るだけのシンプルな飲み
方。日本酒の新たな魅力を発見できる。" },
  { name: "チャイナ・キッス", materials: [19, 49, 31], description: "ライチと梅酒の意外な組み合わせが生み出す、甘くエ
キゾチックな味わい。" },
  { name: "ゴッドマザー", materials: [2, 24], description: "ゴッドファーザーのウイスキーをウォッカに変えたバージョン
。よりクリアな味わい。" },
  { name: "フレンチ・マティーニ", materials: [2, 18, 29], description: "通常のマティーニとは異なり、パイナップルジュ
ースを使った甘くフルーティーなカクテル。" },
  { name: "マリブ・サーフ", materials: [25, 4, 29], description: "ココナッツリキュール「マリブ」を使った、サーファー
に愛されるトロピカルな一杯。" },
  { name: "ルンビニ", materials: [22, 96, 8], description: "仏陀生誕の地から名付けられた、抹茶と杏仁が織りなすオリエ
ンタルなデザートカクテル。" },
  { name: "楊貴妃", materials: [19, 92, 27], description: "ライチとベルガモット、グレープフルーツが香る、世界三大美女
の名にふさわしい優雅な一杯。" },
  { name: "スノーボール", materials: [89, 5, 31], description: "アドヴォカートを使った、卵の風味と炭酸がユニークな、
オランダ発祥のカクテル。" },
  { name: "ピムス・カップ", materials: [85, 33, 37], description: "リキュール「ピムス」をジンジャーエールで割り、フル
ーツやミントを飾る、イギリスの夏の風物詩。" },
  { name: "ゴールデン・ドリーム", materials: [90, 4, 3, 35], description: "ガリアーノのバニラ風味とオレンジがマッチし
た、黄金色のデザートカクテル。" },
  { name: "スロー・コンフォータブル・スクリュー", materials: [84, 18, 3], description: "非常に長い名前の通り、様々な
リキュールとジュースが複雑に絡み合う一杯。" },
  { name: "アメリカーノ", materials: [17, 16, 31], description: "ネグローニのジンをソーダに変えた、より軽やかで飲みや
すいバージョン。" },
  { name: "ティント・デ・ベラーノ", materials: [12, 31], description: "「夏の赤ワイン」という意味。赤ワインを炭酸で割
るだけのシンプルなスペインの飲み物。" },
  { name: "イタズラな妖精", materials: [41, 20, 38], description: "アブサンの禁断の香りとメロンの甘さが混じり合う、不
思議で魅惑的な味わい。" },
  { name: "忘れな草", materials: [1, 26, 73], description: "ジンとバイオレットリキュール、シェリーが織りなす、切なく
も美しい一杯。" },
  { name: "東京タワー", materials: [10, 46, 76], description: "ウイスキーと桜、蜂蜜のリキュールが作る、日本の首都を象
徴するような華やかなカクテル。" },
  { name: "オーロラ", materials: [2, 100, 52], description: "ラベンダーの香りとシャンパンの泡が、夜空に揺らめくオーロ
ラを思わせる。" },
  { name: "砂漠の薔薇", materials: [9, 99, 48], description: "テキーラの力強さ、ローズの香り、そして塩のアクセントが
砂漠に咲く一輪の薔薇を表現。" },
  { name: "賢者の石", materials: [42, 90, 11], description: "錬金術を思わせるシャルトリューズとガリアーノ、ブランデー
を合わせた、賢者のみが味わえる秘薬。" },
  { name: "黒猫のタンゴ", materials: [91, 34, 3], description: "薬草系リキュール「アマロ」とコーラ、オレンジが織りな
す、ほろ苦くもリズミカルな味わい。" },
  { name: "白鯨", materials: [50, 43, 8], description: "泡盛とヨーグルト、牛乳が作り出す、雄大でクリーミーな海の王者
のカクテル。" },
  { name: "時間旅行", materials: [88, 72, 16], description: "電気ブランのレトロな味わいとポートワインの熟成感が、過去
と未来を行き来させるような一杯。" },
  { name: "最後の晩餐", materials: [12, 69, 48], description: "赤ワインとオリーブオイル、そして一振りの塩。シンプルな
がら聖なる夜を思わせる。" },
  { name: "銀河鉄道の夜", materials: [80, 47, 4], description: "星屑のような金箔が舞う、サンブーカの甘い香りに乗って
宇宙を旅するカクテル。" },
  { name: "ラ・ラ・ランド", materials: [82, 59, 52], description: "夢追い人たちの街をイメージした、林檎の風味とエナジ
ードリンク、シャンパンが弾ける一杯。" },
  { name: "もののけ姫", materials: [14, 22, 65], description: "日本酒と抹茶、そして森の香りのハーブティーが、太古の自
然を呼び覚ます。" },
  { name: "千と千尋の神隠し", materials: [49, 95, 101], description: "梅酒とガラナ、黒蜜が作り出す、どこか懐かしくも
不思議な異世界の味わい。" },
  { name: "君の名は。", materials: [99, 100, 31], description: "ローズとラベンダー、二つの異なる香りがソーダの中で出
会い、一つの物語を紡ぎ出す。" },
  { name: "天気の子", materials: [4, 74, 98], description: "晴れ渡る青空のようなブルーキュラソーと、雨雲のようなマッ
コリ、そして雲のようなホイップクリーム。" }
];

// ===== DOM要素の取得 =====
const ingredientsArea = document.getElementById('ingredients-area');
const selectedList = document.getElementById('selected-list');
const resultGlass = document.getElementById('result-glass');
const resultName = document.getElementById('result-name');
const resultParams = document.getElementById('result-params');
const shakeButton = document.getElementById('shake-button');
const resetButton = document.getElementById('reset-button');
const resultCocktailArea = document.getElementById('result-cocktail-area');
const tutorialModal = document.getElementById('tutorial-modal');
const tutorialCloseBtn = document.getElementById('tutorial-close-btn');
// ===== 変数・定数の定義 =====
let selectedIngredients = []; // 選択中の材料IDを格納する配列
const MAX_SELECT = 4; // 最大選択数

// ===== 関数定義 =====

/**
 * 画面の初期化処理
 */
function initialize() {
  if (!localStorage.getItem('tutorial_shown')) {
    tutorialModal.style.display = 'flex';
  }

  // チュートリアルの閉じるボタンの処理
  tutorialCloseBtn.addEventListener('click', () => {
    tutorialModal.style.display = 'none';
    localStorage.setItem('tutorial_shown', 'true'); // 見たことを記録
  });
  // 材料データを元に、選択ボタンを動的に生成
  ingredients.forEach(item => {
    const button = document.createElement('button');
    button.textContent = item.name;
    button.dataset.id = item.id; // data属性にIDを持たせる
    button.addEventListener('click', () => selectIngredient(item.id));
    button.style.backgroundColor = item.color;

    // 2. 背景色に合わせた文字色を設定
    button.style.color = getTextColorForBg(item.color);

    // 3. 白っぽいボタンでも輪郭がわかるように境界線を設定
    button.style.border = '2px solid #eee';
    ingredientsArea.appendChild(button);
  });

  shakeButton.addEventListener('click', shakeCocktail);
  resetButton.addEventListener('click', resetAll);

  displayHistory();

  analyzeTaste();
}

/**
 * 材料選択の処理
 * @param {number} id - 選択された材料のID
 */
function selectIngredient(id) {
  if (selectedIngredients.length >= MAX_SELECT) {
    alert(`材料は${MAX_SELECT}種類までです。`);
    return;
  }
  if (!selectedIngredients.includes(id)) {
    selectedIngredients.push(id);
    updateSelectedView();
  }
}

/**
 * シェイク（カクテル生成）処理
 */
function shakeCocktail() {
    if (selectedIngredients.length === 0) {
        alert('材料を1つ以上選んでください。');
        return;
    }

    resultCocktailArea.classList.add('shake');


    let specialCocktail = null;
    for(const recipe of specialRecipes){
        if(recipe.materials.length === selectedIngredients.length && recipe.materials.every(id => selectedIngredients
.includes(id))){
            specialCocktail = recipe;
            break;
        }
    }


    // パラメータを初期化
    let finalDescription;
    let finalTaste = { sweet: 0, sour: 0, bitter: 0 };
    let totalAlcohol = 0;
    let mixedColor = [0, 0, 0]; // RGBの合計値
    let nameKeywords = [];
    let finalColor;
    let finalAlcohol = 0;
    const count = selectedIngredients.length;
    let finalName;


    // 選択された材料のデータを合算
    selectedIngredients.forEach(id => {
        const item = ingredients.find(ing => ing.id === id);
        finalTaste.sweet += item.taste.sweet;
        finalTaste.sour += item.taste.sour;
        finalTaste.bitter += item.taste.bitter;
        totalAlcohol += item.alcohol;
        nameKeywords.push(item.keywords);

        // 色の計算
        const rgb = hexToRgb(item.color);
        mixedColor[0] += rgb.r;
        mixedColor[1] += rgb.g;
        mixedColor[2] += rgb.b;

        finalAlcohol = totalAlcohol / count;
        finalDescription = "あなただけのオリジナルカクテルが完成しました！"; // デフォルトの説明文
        const categories = selectedIngredients.map(id => ingredients.find(ing => ing.id === id).colorCategory);
        if (categories.includes('yellow') && categories.includes('blue')) {
            finalColor = '#2E8B57'; // 綺麗なシーグリーンを指定
        }
        else {
        // これまでの通常計算
            const r = Math.round(mixedColor[0] / count);
            const g = Math.round(mixedColor[1] / count);
            const b = Math.round(mixedColor[2] / count);
            finalColor = `rgb(${r}, ${g}, ${b})`;
            console.log(mixedColor[0], finalColor);
        }
    });

    finalName = generateName(nameKeywords);
    //特殊レシピがあれば上書き

    if(specialCocktail){
        finalName = specialCocktail.name;
        finalDescription = specialCocktail.description;
    }

    setTimeout( () => {
        // 結果を表示に反映
        updateResultView(finalName, finalColor, finalAlcohol, finalTaste, finalDescription);
        resultCocktailArea.classList.remove('shake');
        const cocktails = JSON.parse(localStorage.getItem('my_cocktails')) || [];

        const newCocktail = {
            name : finalName,
            color : finalColor,
            alcohol : finalAlcohol,
            taste : finalTaste,
            //後々の機能拡張のため。いろいろ使える
            materials : selectedIngredients.map(id => ingredients.find(ing => ing.id === id).name)
    };

    cocktails.unshift(newCocktail);

    localStorage.setItem('my_cocktails', JSON.stringify(cocktails));

    displayHistory();

    analyzeTaste();
  }, 500);

}

/**
 * 全てをリセットする処理
 */
function resetAll() {
    selectedIngredients = [];
    updateSelectedView();
    // 結果表示も初期状態に戻す
    resultName.textContent = "どんなカクテルができるかな？";
    resultGlass.style.backgroundColor = "#ffffff";
    resultParams.innerHTML = "";
}


// ===== 表示更新・ヘルパー関数など（一部抜粋） =====

/**
 * 選択中リストの表示を更新する
 */
function updateSelectedView() {
    selectedList.innerHTML = ""; // いったん空にする
    selectedIngredients.forEach(id => {
        const item = ingredients.find(ing => ing.id === id);
        const li = document.createElement('li');
        li.textContent = item.name;
        selectedList.appendChild(li);
    });
}

/**
 * 結果表示エリアを更新する
 */
function updateResultView(name, color, alcohol, taste, description) {
    resultName.textContent = name;
    resultGlass.style.backgroundColor = color;
    resultParams.innerHTML = `
        <li>アルコール度数: ${alcohol.toFixed(1)} %</li>
        <li>甘味: ${taste.sweet}</li>
        <li>酸味: ${taste.sour}</li>
        <li>苦味: ${taste.bitter}</li>
        <li>説明: ${description}</li>
    `;
}

/**
 * 名前をランダムに生成する
 * @param {object[]} keywordsList - 名前の元になるキーワードオブジェクトの配列
 * @returns {string} 生成されたカクテル名
 */
function generateName(keywordsList) {
    // 1. 形容詞だけのリストと、名詞だけのリストを作る
    const adjectives = [];
    const nouns = [];

    keywordsList.forEach(kw => {
      adjectives.push(kw.adjective);
      nouns.push(kw.noun);
    });

    // 2. それぞれのリストからランダムに1つ選ぶ
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    // 3. 組み合わせて返す
    return `${randomAdjective}${randomNoun}`;
  }

/**
 * 16進数カラーコードをRGBオブジェクトに変換する
 */
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function displayHistory(){
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; //一旦空にする

    //localStorageから履歴データを取得する.なければ空配列
    const cocktails = JSON.parse(localStorage.getItem('my_cocktails')) || [];

    cocktails.forEach( cocktail =>{
            //履歴1つごとのHTML要素のli作成
            const li = document.createElement('li');
            li.style,display = 'flex';
            li.style.alignItems = 'center';
            li.style.marginBottom = '10px';

            //色見本
            const colorBox = document.createElement('div');
            colorBox.style.width = '20px';
            colorBox.style.height = '20px';
            colorBox.style.backgroundColor = cocktail.color;
            colorBox.style.marginRight = '10px';
            colorBox.style.border = '1px solid #ccc';

            //カクテル情報
            const info = document.createElement('span');
            info.textContent = `『${cocktail.name}』 (度数: ${cocktail.alcohol.toFixed(1)}%)`;

            li.appendChild(colorBox);
            li.appendChild(info);
            historyList.appendChild(li);
        }
    );
}

function analyzeTaste() {
    const resultElement = document.getElementById('analysis-result');
    const cocktails = JSON.parse(localStorage.getItem('my_cocktails')) || [];

    // 分析に必要なデータが溜まっていない場合は、メッセージを表示して終了
    if (cocktails.length < 3) {
      resultElement.textContent = 'カクテルを3つ以上作ると、あなたの好みが分析されます。';
      return;
    }

    // 1. 全カクテルの味の合計値を計算
    const tasteTotals = { sweet: 0, sour: 0, bitter: 0 };
    cocktails.forEach(cocktail => {
      tasteTotals.sweet += cocktail.taste.sweet;
      tasteTotals.sour += cocktail.taste.sour;
      tasteTotals.bitter += cocktail.taste.bitter;
    });

    // 2. 平均値を計算
    const avgSweet = tasteTotals.sweet / cocktails.length;
    const avgSour = tasteTotals.sour / cocktails.length;
    const avgBitter = tasteTotals.bitter / cocktails.length;

    // 3. 最も高い平均値に基づいてタイプを判定
    let analysisText = '';
    if (avgSweet > avgSour && avgSweet > avgBitter) {
      analysisText = 'あなたは【スイートテイスト】です！フルーティーで甘口な味わいを好む傾向がありますね。';
    } else if (avgBitter > avgSweet && avgBitter > avgSour) {
      analysisText = 'あなたは【ビターテイスト】です！キレのある大人な味わいがお好みのようです。';
    } else if (avgSour > avgSweet && avgSour > avgBitter) {
      analysisText = 'あなたは【サワーテイスト】です！爽やかでスッキリした味わいを求めることが多いですね。';
    } else {
      analysisText = 'あなたは【バランスタイプ】です！様々な味の調和を楽しむ、通な味覚の持ち主です。';
    }

    // 4. 結果を画面に表示
    resultElement.textContent = analysisText;
  }

/**
 * 背景色（16進数）を受け取り、それに対して見やすい文字色（黒か白）を返す
 * @param {string} hexColor - #から始まる16進数カラーコード
 * @returns {string} '#000000' または '#FFFFFF'
 */
function getTextColorForBg(hexColor) {
  const rgb = hexToRgb(hexColor); // 既存のhexToRgb関数を再利用
  if (!rgb) return '#000000'; // エラー時は黒を返す

  // YIQ式に基づいて輝度を計算
  const yiq = ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;

  // 輝度のしきい値(128)より高ければ黒、低ければ白を返す
  return (yiq >= 128) ? '#000000' : '#FFFFFF';
}
// ===== 実行 =====
initialize();
