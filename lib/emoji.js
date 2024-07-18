import emojilib from 'emojilib' assert { type: "json" };

const lookup = {};

const emojiData = [
  {
    "alias": [
      "+1",
      "thumbsup"
    ],
    "unicode": "👍",
  },
  {
    "alias": [
      "-1",
      "thumbsdown"
    ],
    "unicode": "👎",
  },
  {
    "alias": "100",
    "unicode": "💯",
  },
  {
    "alias": "1234",
    "unicode": "🔢",
  },
  {
    "alias": "1st_place_medal",
    "unicode": "🥇",
  },
  {
    "alias": "2nd_place_medal",
    "unicode": "🥈",
  },
  {
    "alias": "3rd_place_medal",
    "unicode": "🥉",
  },
  {
    "alias": "8ball",
    "unicode": "🎱",
  },
  {
    "alias": "a",
    "unicode": "🅰️",
  },
  {
    "alias": "ab",
    "unicode": "🆎",
  },
  {
    "alias": "abacus",
    "unicode": "🧮",
  },
  {
    "alias": "abc",
    "unicode": "🔤",
  },
  {
    "alias": "abcd",
    "unicode": "🔡",
  },
  {
    "alias": "accept",
    "unicode": "🉑",
  },
  {
    "alias": "accordion",
    "unicode": "🪗",
  },
  {
    "alias": "adhesive_bandage",
    "unicode": "🩹",
  },
  {
    "alias": "adult",
    "unicode": "🧑",
  },
  {
    "alias": "aerial_tramway",
    "unicode": "🚡",
  },
  {
    "alias": "afghanistan",
    "unicode": "🇦🇫",
  },
  {
    "alias": "airplane",
    "unicode": "✈️",
  },
  {
    "alias": "aland_islands",
    "unicode": "🇦🇽",
  },
  {
    "alias": "alarm_clock",
    "unicode": "⏰",
  },
  {
    "alias": "albania",
    "unicode": "🇦🇱",
  },
  {
    "alias": "alembic",
    "unicode": "⚗️",
  },
  {
    "alias": "algeria",
    "unicode": "🇩🇿",
  },
  {
    "alias": "alien",
    "unicode": "👽",
  },
  {
    "alias": "ambulance",
    "unicode": "🚑",
  },
  {
    "alias": "american_samoa",
    "unicode": "🇦🇸",
  },
  {
    "alias": "amphora",
    "unicode": "🏺",
  },
  {
    "alias": "anatomical_heart",
    "unicode": "🫀",
  },
  {
    "alias": "anchor",
    "unicode": "⚓️",
  },
  {
    "alias": "andorra",
    "unicode": "🇦🇩",
  },
  {
    "alias": "angel",
    "unicode": "👼",
  },
  {
    "alias": "anger",
    "unicode": "💢",
  },
  {
    "alias": "angola",
    "unicode": "🇦🇴",
  },
  {
    "alias": "angry",
    "unicode": "😠",
  },
  {
    "alias": "anguilla",
    "unicode": "🇦🇮",
  },
  {
    "alias": "anguished",
    "unicode": "😧",
  },
  {
    "alias": "ant",
    "unicode": "🐜",
  },
  {
    "alias": "antarctica",
    "unicode": "🇦🇶",
  },
  {
    "alias": "antigua_barbuda",
    "unicode": "🇦🇬",
  },
  {
    "alias": "apple",
    "unicode": "🍎",
  },
  {
    "alias": "aquarius",
    "unicode": "♒️",
  },
  {
    "alias": "argentina",
    "unicode": "🇦🇷",
  },
  {
    "alias": "aries",
    "unicode": "♈️",
  },
  {
    "alias": "armenia",
    "unicode": "🇦🇲",
  },
  {
    "alias": "arrow_backward",
    "unicode": "◀️",
  },
  {
    "alias": "arrow_double_down",
    "unicode": "⏬",
  },
  {
    "alias": "arrow_double_up",
    "unicode": "⏫",
  },
  {
    "alias": "arrow_down",
    "unicode": "⬇️",
  },
  {
    "alias": "arrow_down_small",
    "unicode": "🔽",
  },
  {
    "alias": "arrow_forward",
    "unicode": "▶️",
  },
  {
    "alias": "arrow_heading_down",
    "unicode": "⤵️",
  },
  {
    "alias": "arrow_heading_up",
    "unicode": "⤴️",
  },
  {
    "alias": "arrow_left",
    "unicode": "⬅️",
  },
  {
    "alias": "arrow_lower_left",
    "unicode": "↙️",
  },
  {
    "alias": "arrow_lower_right",
    "unicode": "↘️",
  },
  {
    "alias": "arrow_right",
    "unicode": "➡️",
  },
  {
    "alias": "arrow_right_hook",
    "unicode": "↪️",
  },
  {
    "alias": "arrow_up",
    "unicode": "⬆️",
  },
  {
    "alias": "arrow_up_down",
    "unicode": "↕️",
  },
  {
    "alias": "arrow_up_small",
    "unicode": "🔼",
  },
  {
    "alias": "arrow_upper_left",
    "unicode": "↖️",
  },
  {
    "alias": "arrow_upper_right",
    "unicode": "↗️",
  },
  {
    "alias": "arrows_clockwise",
    "unicode": "🔃",
  },
  {
    "alias": "arrows_counterclockwise",
    "unicode": "🔄",
  },
  {
    "alias": "art",
    "unicode": "🎨",
  },
  {
    "alias": "articulated_lorry",
    "unicode": "🚛",
  },
  {
    "alias": "artificial_satellite",
    "unicode": "🛰",
  },
  {
    "alias": "artist",
    "unicode": "🧑‍🎨",
  },
  {
    "alias": "aruba",
    "unicode": "🇦🇼",
  },
  {
    "alias": "ascension_island",
    "unicode": "🇦🇨",
  },
  {
    "alias": "asterisk",
    "unicode": "*️⃣",
  },
  {
    "alias": "astonished",
    "unicode": "😲",
  },
  {
    "alias": "astronaut",
    "unicode": "🧑‍🚀",
  },
  {
    "alias": "athletic_shoe",
    "unicode": "👟",
  },
  {
    "alias": "atm",
    "unicode": "🏧",
  },
  {
    "alias": "atom",
    "unicode": false,
  },
  {
    "alias": "atom_symbol",
    "unicode": "⚛️",
  },
  {
    "alias": "australia",
    "unicode": "🇦🇺",
  },
  {
    "alias": "austria",
    "unicode": "🇦🇹",
  },
  {
    "alias": "auto_rickshaw",
    "unicode": "🛺",
  },
  {
    "alias": "avocado",
    "unicode": "🥑",
  },
  {
    "alias": "axe",
    "unicode": "🪓",
  },
  {
    "alias": "azerbaijan",
    "unicode": "🇦🇿",
  },
  {
    "alias": "b",
    "unicode": "🅱️",
  },
  {
    "alias": "baby",
    "unicode": "👶",
  },
  {
    "alias": "baby_bottle",
    "unicode": "🍼",
  },
  {
    "alias": "baby_chick",
    "unicode": "🐤",
  },
  {
    "alias": "baby_symbol",
    "unicode": "🚼",
  },
  {
    "alias": "back",
    "unicode": "🔙",
  },
  {
    "alias": "bacon",
    "unicode": "🥓",
  },
  {
    "alias": "badger",
    "unicode": "🦡",
  },
  {
    "alias": "badminton",
    "unicode": "🏸",
  },
  {
    "alias": "bagel",
    "unicode": "🥯",
  },
  {
    "alias": "baggage_claim",
    "unicode": "🛄",
  },
  {
    "alias": "baguette_bread",
    "unicode": "🥖",
  },
  {
    "alias": "bahamas",
    "unicode": "🇧🇸",
  },
  {
    "alias": "bahrain",
    "unicode": "🇧🇭",
  },
  {
    "alias": "balance_scale",
    "unicode": "⚖️",
  },
  {
    "alias": "bald_man",
    "unicode": "👨‍🦲",
  },
  {
    "alias": "bald_woman",
    "unicode": "👩‍🦲",
  },
  {
    "alias": "ballet_shoes",
    "unicode": "🩰",
  },
  {
    "alias": "balloon",
    "unicode": "🎈",
  },
  {
    "alias": "ballot_box",
    "unicode": "🗳",
  },
  {
    "alias": "ballot_box_with_check",
    "unicode": "☑️",
  },
  {
    "alias": "bamboo",
    "unicode": "🎍",
  },
  {
    "alias": "banana",
    "unicode": "🍌",
  },
  {
    "alias": "bangbang",
    "unicode": "‼️",
  },
  {
    "alias": "bangladesh",
    "unicode": "🇧🇩",
  },
  {
    "alias": "banjo",
    "unicode": "🪕",
  },
  {
    "alias": "bank",
    "unicode": "🏦",
  },
  {
    "alias": "bar_chart",
    "unicode": "📊",
  },
  {
    "alias": "barbados",
    "unicode": "🇧🇧",
  },
  {
    "alias": "barber",
    "unicode": "💈",
  },
  {
    "alias": "baseball",
    "unicode": "⚾️",
  },
  {
    "alias": [
      "basecamp",
      "basecampy"
    ],
    "unicode": false,
  },
  {
    "alias": "basket",
    "unicode": "🧺",
  },
  {
    "alias": "basketball",
    "unicode": "🏀",
  },
  {
    "alias": "basketball_man",
    "unicode": "⛹",
  },
  {
    "alias": "basketball_woman",
    "unicode": "⛹️‍♀️",
  },
  {
    "alias": "bat",
    "unicode": "🦇",
  },
  {
    "alias": "bath",
    "unicode": "🛀",
  },
  {
    "alias": "bathtub",
    "unicode": "🛁",
  },
  {
    "alias": "battery",
    "unicode": "🔋",
  },
  {
    "alias": "beach_umbrella",
    "unicode": "🏖",
  },
  {
    "alias": "bear",
    "unicode": "🐻",
  },
  {
    "alias": "bearded_person",
    "unicode": "🧔",
  },
  {
    "alias": "beaver",
    "unicode": "🦫",
  },
  {
    "alias": "bed",
    "unicode": "🛏",
  },
  {
    "alias": [
      "bee",
      "honeybee"
    ],
    "unicode": "🐝",
  },
  {
    "alias": "beer",
    "unicode": "🍺",
  },
  {
    "alias": "beers",
    "unicode": "🍻",
  },
  {
    "alias": "beetle",
    "unicode": "🐞",
  },
  {
    "alias": "beginner",
    "unicode": "🔰",
  },
  {
    "alias": "belarus",
    "unicode": "🇧🇾",
  },
  {
    "alias": "belgium",
    "unicode": "🇧🇪",
  },
  {
    "alias": "belize",
    "unicode": "🇧🇿",
  },
  {
    "alias": "bell",
    "unicode": "🔔",
  },
  {
    "alias": "bell_pepper",
    "unicode": "🫑",
  },
  {
    "alias": "bellhop_bell",
    "unicode": "🛎",
  },
  {
    "alias": "benin",
    "unicode": "🇧🇯",
  },
  {
    "alias": "bento",
    "unicode": "🍱",
  },
  {
    "alias": "bermuda",
    "unicode": "🇧🇲",
  },
  {
    "alias": "beverage_box",
    "unicode": "🧃",
  },
  {
    "alias": "bhutan",
    "unicode": "🇧🇹",
  },
  {
    "alias": "bike",
    "unicode": "🚲",
  },
  {
    "alias": [
      "biking_man",
      "bicyclist"
    ],
    "unicode": "🚴",
  },
  {
    "alias": "biking_woman",
    "unicode": "🚴‍♀",
  },
  {
    "alias": "bikini",
    "unicode": "👙",
  },
  {
    "alias": "billed_cap",
    "unicode": "🧢",
  },
  {
    "alias": "biohazard",
    "unicode": "☣️",
  },
  {
    "alias": "bird",
    "unicode": "🐦",
  },
  {
    "alias": "birthday",
    "unicode": "🎂",
  },
  {
    "alias": "bison",
    "unicode": "🦬",
  },
  {
    "alias": "black_cat",
    "unicode": "🐈‍⬛",
  },
  {
    "alias": "black_circle",
    "unicode": "⚫️",
  },
  {
    "alias": "black_flag",
    "unicode": "🏴",
  },
  {
    "alias": "black_heart",
    "unicode": "🖤",
  },
  {
    "alias": "black_joker",
    "unicode": "🃏",
  },
  {
    "alias": "black_large_square",
    "unicode": "⬛️",
  },
  {
    "alias": "black_medium_small_square",
    "unicode": "◾️",
  },
  {
    "alias": "black_medium_square",
    "unicode": "◼️",
  },
  {
    "alias": "black_nib",
    "unicode": "✒️",
  },
  {
    "alias": "black_small_square",
    "unicode": "▪️",
  },
  {
    "alias": "black_square_button",
    "unicode": "🔲",
  },
  {
    "alias": "blond_haired_man",
    "unicode": "👱‍♂️",
  },
  {
    "alias": "blond_haired_person",
    "unicode": "👱",
  },
  {
    "alias": "blond_haired_woman",
    "unicode": "👱‍♀️",
  },
  {
    "alias": "blonde_woman",
    "unicode": "👱‍♀",
  },
  {
    "alias": "blossom",
    "unicode": "🌼",
  },
  {
    "alias": "blowfish",
    "unicode": "🐡",
  },
  {
    "alias": "blue_book",
    "unicode": "📘",
  },
  {
    "alias": "blue_car",
    "unicode": "🚙",
  },
  {
    "alias": "blue_heart",
    "unicode": "💙",
  },
  {
    "alias": "blue_square",
    "unicode": "🟦",
  },
  {
    "alias": "blueberries",
    "unicode": "🫐",
  },
  {
    "alias": "blush",
    "unicode": "😊",
  },
  {
    "alias": "boar",
    "unicode": "🐗",
  },
  {
    "alias": [
      "boat",
      "sailboat"
    ],
    "unicode": "⛵️",
  },
  {
    "alias": "bolivia",
    "unicode": "🇧🇴",
  },
  {
    "alias": "bomb",
    "unicode": "💣",
  },
  {
    "alias": "bone",
    "unicode": "🦴",
  },
  {
    "alias": [
      "book",
      "open_book"
    ],
    "unicode": "📖",
  },
  {
    "alias": "bookmark",
    "unicode": "🔖",
  },
  {
    "alias": "bookmark_tabs",
    "unicode": "📑",
  },
  {
    "alias": "books",
    "unicode": "📚",
  },
  {
    "alias": [
      "boom",
      "collision"
    ],
    "unicode": "💥",
  },
  {
    "alias": "boomerang",
    "unicode": "🪃",
  },
  {
    "alias": "boot",
    "unicode": "👢",
  },
  {
    "alias": "bosnia_herzegovina",
    "unicode": "🇧🇦",
  },
  {
    "alias": "botswana",
    "unicode": "🇧🇼",
  },
  {
    "alias": "bouncing_ball_man",
    "unicode": "⛹️‍♂️",
  },
  {
    "alias": "bouncing_ball_person",
    "unicode": "⛹️",
  },
  {
    "alias": "bouncing_ball_woman",
    "unicode": "⛹️‍♀️",
  },
  {
    "alias": "bouquet",
    "unicode": "💐",
  },
  {
    "alias": "bouvet_island",
    "unicode": "🇧🇻",
  },
  {
    "alias": "bow_and_arrow",
    "unicode": "🏹",
  },
  {
    "alias": [
      "bowing_man",
      "bow"
    ],
    "unicode": "🙇",
  },
  {
    "alias": "bowing_woman",
    "unicode": "🙇‍♀",
  },
  {
    "alias": "bowl_with_spoon",
    "unicode": "🥣",
  },
  {
    "alias": "bowling",
    "unicode": "🎳",
  },
  {
    "alias": "bowtie",
    "unicode": false,
  },
  {
    "alias": "boxing_glove",
    "unicode": "🥊",
  },
  {
    "alias": "boy",
    "unicode": "👦",
  },
  {
    "alias": "brain",
    "unicode": "🧠",
  },
  {
    "alias": "brazil",
    "unicode": "🇧🇷",
  },
  {
    "alias": "bread",
    "unicode": "🍞",
  },
  {
    "alias": "breast_feeding",
    "unicode": "🤱",
  },
  {
    "alias": "bricks",
    "unicode": "🧱",
  },
  {
    "alias": "bride_with_veil",
    "unicode": "👰",
  },
  {
    "alias": "bridge_at_night",
    "unicode": "🌉",
  },
  {
    "alias": "briefcase",
    "unicode": "💼",
  },
  {
    "alias": "british_indian_ocean_territory",
    "unicode": "🇮🇴",
  },
  {
    "alias": "british_virgin_islands",
    "unicode": "🇻🇬",
  },
  {
    "alias": "broccoli",
    "unicode": "🥦",
  },
  {
    "alias": "broken_heart",
    "unicode": "💔",
  },
  {
    "alias": "broom",
    "unicode": "🧹",
  },
  {
    "alias": "brown_circle",
    "unicode": "🟤",
  },
  {
    "alias": "brown_heart",
    "unicode": "🤎",
  },
  {
    "alias": "brown_square",
    "unicode": "🟫",
  },
  {
    "alias": "brunei",
    "unicode": "🇧🇳",
  },
  {
    "alias": "bubble_tea",
    "unicode": "🧋",
  },
  {
    "alias": "bucket",
    "unicode": "🪣",
  },
  {
    "alias": "bug",
    "unicode": "🐛",
  },
  {
    "alias": "building_construction",
    "unicode": "🏗",
  },
  {
    "alias": "bulb",
    "unicode": "💡",
  },
  {
    "alias": "bulgaria",
    "unicode": "🇧🇬",
  },
  {
    "alias": "bullettrain_front",
    "unicode": "🚅",
  },
  {
    "alias": "bullettrain_side",
    "unicode": "🚄",
  },
  {
    "alias": "burkina_faso",
    "unicode": "🇧🇫",
  },
  {
    "alias": "burrito",
    "unicode": "🌯",
  },
  {
    "alias": "burundi",
    "unicode": "🇧🇮",
  },
  {
    "alias": "bus",
    "unicode": "🚌",
  },
  {
    "alias": "business_suit_levitating",
    "unicode": "🕴",
  },
  {
    "alias": "busstop",
    "unicode": "🚏",
  },
  {
    "alias": "bust_in_silhouette",
    "unicode": "👤",
  },
  {
    "alias": "busts_in_silhouette",
    "unicode": "👥",
  },
  {
    "alias": "butter",
    "unicode": "🧈",
  },
  {
    "alias": "butterfly",
    "unicode": "🦋",
  },
  {
    "alias": "cactus",
    "unicode": "🌵",
  },
  {
    "alias": "cake",
    "unicode": "🍰",
  },
  {
    "alias": "calendar",
    "unicode": "📆",
  },
  {
    "alias": "call_me_hand",
    "unicode": "🤙",
  },
  {
    "alias": "calling",
    "unicode": "📲",
  },
  {
    "alias": "cambodia",
    "unicode": "🇰🇭",
  },
  {
    "alias": "camel",
    "unicode": "🐫",
  },
  {
    "alias": "camera",
    "unicode": "📷",
  },
  {
    "alias": "camera_flash",
    "unicode": "📸",
  },
  {
    "alias": "cameroon",
    "unicode": "🇨🇲",
  },
  {
    "alias": "camping",
    "unicode": "🏕",
  },
  {
    "alias": "canada",
    "unicode": "🇨🇦",
  },
  {
    "alias": "canary_islands",
    "unicode": "🇮🇨",
  },
  {
    "alias": "cancer",
    "unicode": "♋️",
  },
  {
    "alias": "candle",
    "unicode": "🕯",
  },
  {
    "alias": "candy",
    "unicode": "🍬",
  },
  {
    "alias": "canned_food",
    "unicode": "🥫",
  },
  {
    "alias": "canoe",
    "unicode": "🛶",
  },
  {
    "alias": "cape_verde",
    "unicode": "🇨🇻",
  },
  {
    "alias": "capital_abcd",
    "unicode": "🔠",
  },
  {
    "alias": "capricorn",
    "unicode": "♑️",
  },
  {
    "alias": [
      "car",
      "red_car"
    ],
    "unicode": "🚗",
  },
  {
    "alias": "card_file_box",
    "unicode": "🗃",
  },
  {
    "alias": "card_index",
    "unicode": "📇",
  },
  {
    "alias": "card_index_dividers",
    "unicode": "🗂",
  },
  {
    "alias": "caribbean_netherlands",
    "unicode": "🇧🇶",
  },
  {
    "alias": "carousel_horse",
    "unicode": "🎠",
  },
  {
    "alias": "carpentry_saw",
    "unicode": "🪚",
  },
  {
    "alias": "carrot",
    "unicode": "🥕",
  },
  {
    "alias": "cartwheeling",
    "unicode": "🤸",
  },
  {
    "alias": "cat",
    "unicode": "🐱",
  },
  {
    "alias": "cat2",
    "unicode": "🐈",
  },
  {
    "alias": "cayman_islands",
    "unicode": "🇰🇾",
  },
  {
    "alias": "cd",
    "unicode": "💿",
  },
  {
    "alias": "central_african_republic",
    "unicode": "🇨🇫",
  },
  {
    "alias": "ceuta_melilla",
    "unicode": "🇪🇦",
  },
  {
    "alias": "chad",
    "unicode": "🇹🇩",
  },
  {
    "alias": "chains",
    "unicode": "⛓",
  },
  {
    "alias": "chair",
    "unicode": "🪑",
  },
  {
    "alias": "champagne",
    "unicode": "🍾",
  },
  {
    "alias": "chart",
    "unicode": "💹",
  },
  {
    "alias": "chart_with_downwards_trend",
    "unicode": "📉",
  },
  {
    "alias": "chart_with_upwards_trend",
    "unicode": "📈",
  },
  {
    "alias": "checkered_flag",
    "unicode": "🏁",
  },
  {
    "alias": "cheese",
    "unicode": "🧀",
  },
  {
    "alias": "cherries",
    "unicode": "🍒",
  },
  {
    "alias": "cherry_blossom",
    "unicode": "🌸",
  },
  {
    "alias": "chess_pawn",
    "unicode": "♟️",
  },
  {
    "alias": "chestnut",
    "unicode": "🌰",
  },
  {
    "alias": "chicken",
    "unicode": "🐔",
  },
  {
    "alias": "child",
    "unicode": "🧒",
  },
  {
    "alias": "children_crossing",
    "unicode": "🚸",
  },
  {
    "alias": "chile",
    "unicode": "🇨🇱",
  },
  {
    "alias": "chipmunk",
    "unicode": "🐿",
  },
  {
    "alias": "chocolate_bar",
    "unicode": "🍫",
  },
  {
    "alias": "chopsticks",
    "unicode": "🥢",
  },
  {
    "alias": "christmas_island",
    "unicode": "🇨🇽",
  },
  {
    "alias": "christmas_tree",
    "unicode": "🎄",
  },
  {
    "alias": "church",
    "unicode": "⛪️",
  },
  {
    "alias": "cinema",
    "unicode": "🎦",
  },
  {
    "alias": "circus_tent",
    "unicode": "🎪",
  },
  {
    "alias": "city_sunrise",
    "unicode": "🌇",
  },
  {
    "alias": "city_sunset",
    "unicode": "🌆",
  },
  {
    "alias": "cityscape",
    "unicode": "🏙",
  },
  {
    "alias": "cl",
    "unicode": "🆑",
  },
  {
    "alias": "clamp",
    "unicode": "🗜",
  },
  {
    "alias": "clap",
    "unicode": "👏",
  },
  {
    "alias": "clapper",
    "unicode": "🎬",
  },
  {
    "alias": "classical_building",
    "unicode": "🏛",
  },
  {
    "alias": "climbing",
    "unicode": "🧗",
  },
  {
    "alias": "climbing_man",
    "unicode": "🧗‍♂️",
  },
  {
    "alias": "climbing_woman",
    "unicode": "🧗‍♀️",
  },
  {
    "alias": "clinking_glasses",
    "unicode": "🥂",
  },
  {
    "alias": "clipboard",
    "unicode": "📋",
  },
  {
    "alias": "clipperton_island",
    "unicode": "🇨🇵",
  },
  {
    "alias": "clock1",
    "unicode": "🕐",
  },
  {
    "alias": "clock10",
    "unicode": "🕙",
  },
  {
    "alias": "clock1030",
    "unicode": "🕥",
  },
  {
    "alias": "clock11",
    "unicode": "🕚",
  },
  {
    "alias": "clock1130",
    "unicode": "🕦",
  },
  {
    "alias": "clock12",
    "unicode": "🕛",
  },
  {
    "alias": "clock1230",
    "unicode": "🕧",
  },
  {
    "alias": "clock130",
    "unicode": "🕜",
  },
  {
    "alias": "clock2",
    "unicode": "🕑",
  },
  {
    "alias": "clock230",
    "unicode": "🕝",
  },
  {
    "alias": "clock3",
    "unicode": "🕒",
  },
  {
    "alias": "clock330",
    "unicode": "🕞",
  },
  {
    "alias": "clock4",
    "unicode": "🕓",
  },
  {
    "alias": "clock430",
    "unicode": "🕟",
  },
  {
    "alias": "clock5",
    "unicode": "🕔",
  },
  {
    "alias": "clock530",
    "unicode": "🕠",
  },
  {
    "alias": "clock6",
    "unicode": "🕕",
  },
  {
    "alias": "clock630",
    "unicode": "🕡",
  },
  {
    "alias": "clock7",
    "unicode": "🕖",
  },
  {
    "alias": "clock730",
    "unicode": "🕢",
  },
  {
    "alias": "clock8",
    "unicode": "🕗",
  },
  {
    "alias": "clock830",
    "unicode": "🕣",
  },
  {
    "alias": "clock9",
    "unicode": "🕘",
  },
  {
    "alias": "clock930",
    "unicode": "🕤",
  },
  {
    "alias": "closed_book",
    "unicode": "📕",
  },
  {
    "alias": "closed_lock_with_key",
    "unicode": "🔐",
  },
  {
    "alias": "closed_umbrella",
    "unicode": "🌂",
  },
  {
    "alias": "cloud",
    "unicode": "☁️",
  },
  {
    "alias": "cloud_with_lightning",
    "unicode": "🌩",
  },
  {
    "alias": "cloud_with_lightning_and_rain",
    "unicode": "⛈",
  },
  {
    "alias": "cloud_with_rain",
    "unicode": "🌧",
  },
  {
    "alias": "cloud_with_snow",
    "unicode": "🌨",
  },
  {
    "alias": "clown_face",
    "unicode": "🤡",
  },
  {
    "alias": "clubs",
    "unicode": "♣️",
  },
  {
    "alias": "cn",
    "unicode": "🇨🇳",
  },
  {
    "alias": "coat",
    "unicode": "🧥",
  },
  {
    "alias": "cockroach",
    "unicode": "🪳",
  },
  {
    "alias": "cocktail",
    "unicode": "🍸",
  },
  {
    "alias": "coconut",
    "unicode": "🥥",
  },
  {
    "alias": "cocos_islands",
    "unicode": "🇨🇨",
  },
  {
    "alias": "coffee",
    "unicode": "☕️",
  },
  {
    "alias": "coffin",
    "unicode": "⚰️",
  },
  {
    "alias": "coin",
    "unicode": "🪙",
  },
  {
    "alias": "cold_face",
    "unicode": "🥶",
  },
  {
    "alias": "cold_sweat",
    "unicode": "😰",
  },
  {
    "alias": "colombia",
    "unicode": "🇨🇴",
  },
  {
    "alias": "comet",
    "unicode": "☄",
  },
  {
    "alias": "comoros",
    "unicode": "🇰🇲",
  },
  {
    "alias": "compass",
    "unicode": "🧭",
  },
  {
    "alias": "computer",
    "unicode": "💻",
  },
  {
    "alias": "computer_mouse",
    "unicode": "🖱",
  },
  {
    "alias": "confetti_ball",
    "unicode": "🎊",
  },
  {
    "alias": "confounded",
    "unicode": "😖",
  },
  {
    "alias": "confused",
    "unicode": "😕",
  },
  {
    "alias": "congo_brazzaville",
    "unicode": "🇨🇬",
  },
  {
    "alias": "congo_kinshasa",
    "unicode": "🇨🇩",
  },
  {
    "alias": "congratulations",
    "unicode": "㊗️",
  },
  {
    "alias": "construction",
    "unicode": "🚧",
  },
  {
    "alias": [
      "construction_worker_man",
      "construction_worker"
    ],
    "unicode": "👷",
  },
  {
    "alias": "construction_worker_woman",
    "unicode": "👷‍♀",
  },
  {
    "alias": "control_knobs",
    "unicode": "🎛",
  },
  {
    "alias": "convenience_store",
    "unicode": "🏪",
  },
  {
    "alias": "cook",
    "unicode": "🧑‍🍳",
  },
  {
    "alias": "cook_islands",
    "unicode": "🇨🇰",
  },
  {
    "alias": "cookie",
    "unicode": "🍪",
  },
  {
    "alias": "cool",
    "unicode": "🆒",
  },
  {
    "alias": "copyright",
    "unicode": "©️",
  },
  {
    "alias": "corn",
    "unicode": "🌽",
  },
  {
    "alias": "costa_rica",
    "unicode": "🇨🇷",
  },
  {
    "alias": "cote_divoire",
    "unicode": "🇨🇮",
  },
  {
    "alias": "couch_and_lamp",
    "unicode": "🛋",
  },
  {
    "alias": "couple",
    "unicode": "👫",
  },
  {
    "alias": "couple_with_heart_man_man",
    "unicode": "👨‍❤️‍👨",
  },
  {
    "alias": [
      "couple_with_heart_woman_man",
      "couple_with_heart"
    ],
    "unicode": "💑",
  },
  {
    "alias": "couple_with_heart_woman_woman",
    "unicode": "👩‍❤️‍👩",
  },
  {
    "alias": "couplekiss",
    "unicode": "💏",
  },
  {
    "alias": "couplekiss_man_man",
    "unicode": "👨‍❤️‍💋‍👨",
  },
  {
    "alias": "couplekiss_man_woman",
    "unicode": "💏",
  },
  {
    "alias": "couplekiss_woman_woman",
    "unicode": "👩‍❤️‍💋‍👩",
  },
  {
    "alias": "cow",
    "unicode": "🐮",
  },
  {
    "alias": "cow2",
    "unicode": "🐄",
  },
  {
    "alias": "cowboy_hat_face",
    "unicode": "🤠",
  },
  {
    "alias": "crab",
    "unicode": "🦀",
  },
  {
    "alias": "crayon",
    "unicode": "🖍",
  },
  {
    "alias": "credit_card",
    "unicode": "💳",
  },
  {
    "alias": "crescent_moon",
    "unicode": "🌙",
  },
  {
    "alias": "cricket",
    "unicode": "🦗",
  },
  {
    "alias": "cricket_game",
    "unicode": "🏏",
  },
  {
    "alias": "croatia",
    "unicode": "🇭🇷",
  },
  {
    "alias": "crocodile",
    "unicode": "🐊",
  },
  {
    "alias": "croissant",
    "unicode": "🥐",
  },
  {
    "alias": "crossed_fingers",
    "unicode": "🤞",
  },
  {
    "alias": "crossed_flags",
    "unicode": "🎌",
  },
  {
    "alias": "crossed_swords",
    "unicode": "⚔️",
  },
  {
    "alias": "crown",
    "unicode": "👑",
  },
  {
    "alias": "cry",
    "unicode": "😢",
  },
  {
    "alias": "crying_cat_face",
    "unicode": "😿",
  },
  {
    "alias": "crystal_ball",
    "unicode": "🔮",
  },
  {
    "alias": "cuba",
    "unicode": "🇨🇺",
  },
  {
    "alias": "cucumber",
    "unicode": "🥒",
  },
  {
    "alias": "cup_with_straw",
    "unicode": "🥤",
  },
  {
    "alias": "cupcake",
    "unicode": "🧁",
  },
  {
    "alias": "cupid",
    "unicode": "💘",
  },
  {
    "alias": "curacao",
    "unicode": "🇨🇼",
  },
  {
    "alias": "curling_stone",
    "unicode": "🥌",
  },
  {
    "alias": "curly_haired_man",
    "unicode": "👨‍🦱",
  },
  {
    "alias": "curly_haired_woman",
    "unicode": "👩‍🦱",
  },
  {
    "alias": "curly_loop",
    "unicode": "➰",
  },
  {
    "alias": "currency_exchange",
    "unicode": "💱",
  },
  {
    "alias": "curry",
    "unicode": "🍛",
  },
  {
    "alias": "cursing_face",
    "unicode": "🤬",
  },
  {
    "alias": "custard",
    "unicode": "🍮",
  },
  {
    "alias": "customs",
    "unicode": "🛃",
  },
  {
    "alias": "cut_of_meat",
    "unicode": "🥩",
  },
  {
    "alias": "cyclone",
    "unicode": "🌀",
  },
  {
    "alias": "cyprus",
    "unicode": "🇨🇾",
  },
  {
    "alias": "czech_republic",
    "unicode": "🇨🇿",
  },
  {
    "alias": "dagger",
    "unicode": "🗡",
  },
  {
    "alias": "dancer",
    "unicode": "💃",
  },
  {
    "alias": "dancing_men",
    "unicode": "👯‍♂",
  },
  {
    "alias": [
      "dancing_women",
      "dancers"
    ],
    "unicode": "👯",
  },
  {
    "alias": "dango",
    "unicode": "🍡",
  },
  {
    "alias": "dark_sunglasses",
    "unicode": "🕶",
  },
  {
    "alias": "dart",
    "unicode": "🎯",
  },
  {
    "alias": "dash",
    "unicode": "💨",
  },
  {
    "alias": "date",
    "unicode": "📅",
  },
  {
    "alias": "de",
    "unicode": "🇩🇪",
  },
  {
    "alias": "deaf_man",
    "unicode": "🧏‍♂️",
  },
  {
    "alias": "deaf_person",
    "unicode": "🧏",
  },
  {
    "alias": "deaf_woman",
    "unicode": "🧏‍♀️",
  },
  {
    "alias": "deciduous_tree",
    "unicode": "🌳",
  },
  {
    "alias": "deer",
    "unicode": "🦌",
  },
  {
    "alias": "denmark",
    "unicode": "🇩🇰",
  },
  {
    "alias": "department_store",
    "unicode": "🏬",
  },
  {
    "alias": "derelict_house",
    "unicode": "🏚",
  },
  {
    "alias": "desert",
    "unicode": "🏜",
  },
  {
    "alias": "desert_island",
    "unicode": "🏝",
  },
  {
    "alias": "desktop_computer",
    "unicode": "🖥",
  },
  {
    "alias": "diamond_shape_with_a_dot_inside",
    "unicode": "💠",
  },
  {
    "alias": "diamonds",
    "unicode": "♦️",
  },
  {
    "alias": "diego_garcia",
    "unicode": "🇩🇬",
  },
  {
    "alias": "disappointed",
    "unicode": "😞",
  },
  {
    "alias": "disappointed_relieved",
    "unicode": "😥",
  },
  {
    "alias": "disguised_face",
    "unicode": "🥸",
  },
  {
    "alias": "diving_mask",
    "unicode": "🤿",
  },
  {
    "alias": "diya_lamp",
    "unicode": "🪔",
  },
  {
    "alias": "dizzy",
    "unicode": "💫",
  },
  {
    "alias": "dizzy_face",
    "unicode": "😵",
  },
  {
    "alias": "djibouti",
    "unicode": "🇩🇯",
  },
  {
    "alias": "dna",
    "unicode": "🧬",
  },
  {
    "alias": "do_not_litter",
    "unicode": "🚯",
  },
  {
    "alias": "dodo",
    "unicode": "🦤",
  },
  {
    "alias": "dog",
    "unicode": "🐶",
  },
  {
    "alias": "dog2",
    "unicode": "🐕",
  },
  {
    "alias": "dollar",
    "unicode": "💵",
  },
  {
    "alias": "dolls",
    "unicode": "🎎",
  },
  {
    "alias": [
      "dolphin",
      "flipper"
    ],
    "unicode": "🐬",
  },
  {
    "alias": "dominica",
    "unicode": "🇩🇲",
  },
  {
    "alias": "dominican_republic",
    "unicode": "🇩🇴",
  },
  {
    "alias": "door",
    "unicode": "🚪",
  },
  {
    "alias": "doughnut",
    "unicode": "🍩",
  },
  {
    "alias": "dove",
    "unicode": "🕊",
  },
  {
    "alias": "dragon",
    "unicode": "🐉",
  },
  {
    "alias": "dragon_face",
    "unicode": "🐲",
  },
  {
    "alias": "dress",
    "unicode": "👗",
  },
  {
    "alias": "dromedary_camel",
    "unicode": "🐪",
  },
  {
    "alias": "drooling_face",
    "unicode": "🤤",
  },
  {
    "alias": "drop_of_blood",
    "unicode": "🩸",
  },
  {
    "alias": "droplet",
    "unicode": "💧",
  },
  {
    "alias": "drum",
    "unicode": "🥁",
  },
  {
    "alias": "duck",
    "unicode": "🦆",
  },
  {
    "alias": "dumpling",
    "unicode": "🥟",
  },
  {
    "alias": "dvd",
    "unicode": "📀",
  },
  {
    "alias": "e-mail",
    "unicode": "📧",
  },
  {
    "alias": "eagle",
    "unicode": "🦅",
  },
  {
    "alias": "ear",
    "unicode": "👂",
  },
  {
    "alias": "ear_of_rice",
    "unicode": "🌾",
  },
  {
    "alias": "ear_with_hearing_aid",
    "unicode": "🦻",
  },
  {
    "alias": "earth_africa",
    "unicode": "🌍",
  },
  {
    "alias": "earth_americas",
    "unicode": "🌎",
  },
  {
    "alias": "earth_asia",
    "unicode": "🌏",
  },
  {
    "alias": "ecuador",
    "unicode": "🇪🇨",
  },
  {
    "alias": "egg",
    "unicode": "🥚",
  },
  {
    "alias": "eggplant",
    "unicode": "🍆",
  },
  {
    "alias": "egypt",
    "unicode": "🇪🇬",
  },
  {
    "alias": "eight",
    "unicode": "8️⃣",
  },
  {
    "alias": "eight_pointed_black_star",
    "unicode": "✴️",
  },
  {
    "alias": "eight_spoked_asterisk",
    "unicode": "✳️",
  },
  {
    "alias": "eject_button",
    "unicode": "⏏️",
  },
  {
    "alias": "el_salvador",
    "unicode": "🇸🇻",
  },
  {
    "alias": "electric_plug",
    "unicode": "🔌",
  },
  {
    "alias": "electron",
    "unicode": false,
  },
  {
    "alias": "elephant",
    "unicode": "🐘",
  },
  {
    "alias": "elevator",
    "unicode": "🛗",
  },
  {
    "alias": "elf",
    "unicode": "🧝",
  },
  {
    "alias": "elf_man",
    "unicode": "🧝‍♂️",
  },
  {
    "alias": "elf_woman",
    "unicode": "🧝‍♀️",
  },
  {
    "alias": [
      "email",
      "envelope"
    ],
    "unicode": "✉️",
  },
  {
    "alias": "end",
    "unicode": "🔚",
  },
  {
    "alias": "england",
    "unicode": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  },
  {
    "alias": "envelope_with_arrow",
    "unicode": "📩",
  },
  {
    "alias": "equatorial_guinea",
    "unicode": "🇬🇶",
  },
  {
    "alias": "eritrea",
    "unicode": "🇪🇷",
  },
  {
    "alias": "es",
    "unicode": "🇪🇸",
  },
  {
    "alias": "estonia",
    "unicode": "🇪🇪",
  },
  {
    "alias": "ethiopia",
    "unicode": "🇪🇹",
  },
  {
    "alias": [
      "eu",
      "european_union"
    ],
    "unicode": "🇪🇺",
  },
  {
    "alias": "euro",
    "unicode": "💶",
  },
  {
    "alias": "european_castle",
    "unicode": "🏰",
  },
  {
    "alias": "european_post_office",
    "unicode": "🏤",
  },
  {
    "alias": "evergreen_tree",
    "unicode": "🌲",
  },
  {
    "alias": [
      "exclamation",
      "heavy_exclamation_mark"
    ],
    "unicode": "❗️",
  },
  {
    "alias": "exploding_head",
    "unicode": "🤯",
  },
  {
    "alias": "expressionless",
    "unicode": "😑",
  },
  {
    "alias": "eye",
    "unicode": "👁",
  },
  {
    "alias": "eye_speech_bubble",
    "unicode": "👁‍🗨",
  },
  {
    "alias": "eyeglasses",
    "unicode": "👓",
  },
  {
    "alias": "eyes",
    "unicode": "👀",
  },
  {
    "alias": "face_exhaling",
    "unicode": "😮‍💨",
  },
  {
    "alias": "face_in_clouds",
    "unicode": "😶‍🌫️",
  },
  {
    "alias": "face_with_head_bandage",
    "unicode": "🤕",
  },
  {
    "alias": "face_with_spiral_eyes",
    "unicode": "😵‍💫",
  },
  {
    "alias": "face_with_thermometer",
    "unicode": "🤒",
  },
  {
    "alias": "facepalm",
    "unicode": "🤦",
  },
  {
    "alias": "factory",
    "unicode": "🏭",
  },
  {
    "alias": "factory_worker",
    "unicode": "🧑‍🏭",
  },
  {
    "alias": "fairy",
    "unicode": "🧚",
  },
  {
    "alias": "fairy_man",
    "unicode": "🧚‍♂️",
  },
  {
    "alias": "fairy_woman",
    "unicode": "🧚‍♀️",
  },
  {
    "alias": "falafel",
    "unicode": "🧆",
  },
  {
    "alias": "falkland_islands",
    "unicode": "🇫🇰",
  },
  {
    "alias": "fallen_leaf",
    "unicode": "🍂",
  },
  {
    "alias": "family_man_boy",
    "unicode": "👨‍👦",
  },
  {
    "alias": "family_man_boy_boy",
    "unicode": "👨‍👦‍👦",
  },
  {
    "alias": "family_man_girl",
    "unicode": "👨‍👧",
  },
  {
    "alias": "family_man_girl_boy",
    "unicode": "👨‍👧‍👦",
  },
  {
    "alias": "family_man_girl_girl",
    "unicode": "👨‍👧‍👧",
  },
  {
    "alias": "family_man_man_boy",
    "unicode": "👨‍👨‍👦",
  },
  {
    "alias": "family_man_man_boy_boy",
    "unicode": "👨‍👨‍👦‍👦",
  },
  {
    "alias": "family_man_man_girl",
    "unicode": "👨‍👨‍👧",
  },
  {
    "alias": "family_man_man_girl_boy",
    "unicode": "👨‍👨‍👧‍👦",
  },
  {
    "alias": "family_man_man_girl_girl",
    "unicode": "👨‍👨‍👧‍👧",
  },
  {
    "alias": [
      "family_man_woman_boy",
      "family"
    ],
    "unicode": "👪",
  },
  {
    "alias": "family_man_woman_boy_boy",
    "unicode": "👨‍👩‍👦‍👦",
  },
  {
    "alias": "family_man_woman_girl",
    "unicode": "👨‍👩‍👧",
  },
  {
    "alias": "family_man_woman_girl_boy",
    "unicode": "👨‍👩‍👧‍👦",
  },
  {
    "alias": "family_man_woman_girl_girl",
    "unicode": "👨‍👩‍👧‍👧",
  },
  {
    "alias": "family_woman_boy",
    "unicode": "👩‍👦",
  },
  {
    "alias": "family_woman_boy_boy",
    "unicode": "👩‍👦‍👦",
  },
  {
    "alias": "family_woman_girl",
    "unicode": "👩‍👧",
  },
  {
    "alias": "family_woman_girl_boy",
    "unicode": "👩‍👧‍👦",
  },
  {
    "alias": "family_woman_girl_girl",
    "unicode": "👩‍👧‍👧",
  },
  {
    "alias": "family_woman_woman_boy",
    "unicode": "👩‍👩‍👦",
  },
  {
    "alias": "family_woman_woman_boy_boy",
    "unicode": "👩‍👩‍👦‍👦",
  },
  {
    "alias": "family_woman_woman_girl",
    "unicode": "👩‍👩‍👧",
  },
  {
    "alias": "family_woman_woman_girl_boy",
    "unicode": "👩‍👩‍👧‍👦",
  },
  {
    "alias": "family_woman_woman_girl_girl",
    "unicode": "👩‍👩‍👧‍👧",
  },
  {
    "alias": "farmer",
    "unicode": "🧑‍🌾",
  },
  {
    "alias": "faroe_islands",
    "unicode": "🇫🇴",
  },
  {
    "alias": "fast_forward",
    "unicode": "⏩",
  },
  {
    "alias": "fax",
    "unicode": "📠",
  },
  {
    "alias": "fearful",
    "unicode": "😨",
  },
  {
    "alias": "feather",
    "unicode": "🪶",
  },
  {
    "alias": "feelsgood",
    "unicode": false,
  },
  {
    "alias": [
      "feet",
      "paw_prints"
    ],
    "unicode": "🐾",
  },
  {
    "alias": "female_detective",
    "unicode": "🕵️‍♀️",
  },
  {
    "alias": "female_sign",
    "unicode": "♀️",
  },
  {
    "alias": "ferris_wheel",
    "unicode": "🎡",
  },
  {
    "alias": "ferry",
    "unicode": "⛴",
  },
  {
    "alias": "field_hockey",
    "unicode": "🏑",
  },
  {
    "alias": "fiji",
    "unicode": "🇫🇯",
  },
  {
    "alias": "file_cabinet",
    "unicode": "🗄",
  },
  {
    "alias": "file_folder",
    "unicode": "📁",
  },
  {
    "alias": "film_projector",
    "unicode": "📽",
  },
  {
    "alias": "film_strip",
    "unicode": "🎞",
  },
  {
    "alias": "finland",
    "unicode": "🇫🇮",
  },
  {
    "alias": "finnadie",
    "unicode": false,
  },
  {
    "alias": "fire",
    "unicode": "🔥",
  },
  {
    "alias": "fire_engine",
    "unicode": "🚒",
  },
  {
    "alias": "fire_extinguisher",
    "unicode": "🧯",
  },
  {
    "alias": "firecracker",
    "unicode": "🧨",
  },
  {
    "alias": "firefighter",
    "unicode": "🧑‍🚒",
  },
  {
    "alias": "fireworks",
    "unicode": "🎆",
  },
  {
    "alias": "first_quarter_moon",
    "unicode": "🌓",
  },
  {
    "alias": "first_quarter_moon_with_face",
    "unicode": "🌛",
  },
  {
    "alias": "fish",
    "unicode": "🐟",
  },
  {
    "alias": "fish_cake",
    "unicode": "🍥",
  },
  {
    "alias": "fishing_pole_and_fish",
    "unicode": "🎣",
  },
  {
    "alias": "fist_left",
    "unicode": "🤛",
  },
  {
    "alias": [
      "fist_oncoming",
      "facepunch",
      "punch"
    ],
    "unicode": "👊",
  },
  {
    "alias": [
      "fist_raised",
      "fist"
    ],
    "unicode": "✊",
  },
  {
    "alias": "fist_right",
    "unicode": "🤜",
  },
  {
    "alias": "five",
    "unicode": "5️⃣",
  },
  {
    "alias": "flags",
    "unicode": "🎏",
  },
  {
    "alias": "flamingo",
    "unicode": "🦩",
  },
  {
    "alias": "flashlight",
    "unicode": "🔦",
  },
  {
    "alias": "flat_shoe",
    "unicode": "🥿",
  },
  {
    "alias": "flatbread",
    "unicode": "🫓",
  },
  {
    "alias": "fleur_de_lis",
    "unicode": "⚜️",
  },
  {
    "alias": "flight_arrival",
    "unicode": "🛬",
  },
  {
    "alias": "flight_departure",
    "unicode": "🛫",
  },
  {
    "alias": "floppy_disk",
    "unicode": "💾",
  },
  {
    "alias": "flower_playing_cards",
    "unicode": "🎴",
  },
  {
    "alias": "flushed",
    "unicode": "😳",
  },
  {
    "alias": "fly",
    "unicode": "🪰",
  },
  {
    "alias": "flying_disc",
    "unicode": "🥏",
  },
  {
    "alias": "flying_saucer",
    "unicode": "🛸",
  },
  {
    "alias": "fog",
    "unicode": "🌫",
  },
  {
    "alias": "foggy",
    "unicode": "🌁",
  },
  {
    "alias": "fondue",
    "unicode": "🫕",
  },
  {
    "alias": "foot",
    "unicode": "🦶",
  },
  {
    "alias": "football",
    "unicode": "🏈",
  },
  {
    "alias": "footprints",
    "unicode": "👣",
  },
  {
    "alias": "fork_and_knife",
    "unicode": "🍴",
  },
  {
    "alias": "fortune_cookie",
    "unicode": "🥠",
  },
  {
    "alias": "fountain",
    "unicode": "⛲️",
  },
  {
    "alias": "fountain_pen",
    "unicode": "🖋",
  },
  {
    "alias": "four",
    "unicode": "4️⃣",
  },
  {
    "alias": "four_leaf_clover",
    "unicode": "🍀",
  },
  {
    "alias": "fox_face",
    "unicode": "🦊",
  },
  {
    "alias": "fr",
    "unicode": "🇫🇷",
  },
  {
    "alias": "framed_picture",
    "unicode": "🖼",
  },
  {
    "alias": "free",
    "unicode": "🆓",
  },
  {
    "alias": "french_guiana",
    "unicode": "🇬🇫",
  },
  {
    "alias": "french_polynesia",
    "unicode": "🇵🇫",
  },
  {
    "alias": "french_southern_territories",
    "unicode": "🇹🇫",
  },
  {
    "alias": "fried_egg",
    "unicode": "🍳",
  },
  {
    "alias": "fried_shrimp",
    "unicode": "🍤",
  },
  {
    "alias": "fries",
    "unicode": "🍟",
  },
  {
    "alias": "frog",
    "unicode": "🐸",
  },
  {
    "alias": "frowning",
    "unicode": "😦",
  },
  {
    "alias": "frowning_face",
    "unicode": "☹️",
  },
  {
    "alias": "frowning_man",
    "unicode": "🙍‍♂",
  },
  {
    "alias": "frowning_person",
    "unicode": "🙍",
  },
  {
    "alias": "frowning_woman",
    "unicode": "🙍",
  },
  {
    "alias": "fuelpump",
    "unicode": "⛽️",
  },
  {
    "alias": "full_moon",
    "unicode": "🌕",
  },
  {
    "alias": "full_moon_with_face",
    "unicode": "🌝",
  },
  {
    "alias": "funeral_urn",
    "unicode": "⚱️",
  },
  {
    "alias": "gabon",
    "unicode": "🇬🇦",
  },
  {
    "alias": "gambia",
    "unicode": "🇬🇲",
  },
  {
    "alias": "game_die",
    "unicode": "🎲",
  },
  {
    "alias": "garlic",
    "unicode": "🧄",
  },
  {
    "alias": [
      "gb",
      "uk"
    ],
    "unicode": "🇬🇧",
  },
  {
    "alias": "gear",
    "unicode": "⚙️",
  },
  {
    "alias": "gem",
    "unicode": "💎",
  },
  {
    "alias": "gemini",
    "unicode": "♊️",
  },
  {
    "alias": "genie",
    "unicode": "🧞",
  },
  {
    "alias": "genie_man",
    "unicode": "🧞‍♂️",
  },
  {
    "alias": "genie_woman",
    "unicode": "🧞‍♀️",
  },
  {
    "alias": "georgia",
    "unicode": "🇬🇪",
  },
  {
    "alias": "ghana",
    "unicode": "🇬🇭",
  },
  {
    "alias": "ghost",
    "unicode": "👻",
  },
  {
    "alias": "gibraltar",
    "unicode": "🇬🇮",
  },
  {
    "alias": "gift",
    "unicode": "🎁",
  },
  {
    "alias": "gift_heart",
    "unicode": "💝",
  },
  {
    "alias": "giraffe",
    "unicode": "🦒",
  },
  {
    "alias": "girl",
    "unicode": "👧",
  },
  {
    "alias": "globe_with_meridians",
    "unicode": "🌐",
  },
  {
    "alias": "gloves",
    "unicode": "🧤",
  },
  {
    "alias": "goal_net",
    "unicode": "🥅",
  },
  {
    "alias": "goat",
    "unicode": "🐐",
  },
  {
    "alias": "goberserk",
    "unicode": false,
  },
  {
    "alias": "godmode",
    "unicode": false,
  },
  {
    "alias": "goggles",
    "unicode": "🥽",
  },
  {
    "alias": "golf",
    "unicode": "⛳️",
  },
  {
    "alias": "golfing",
    "unicode": "🏌️",
  },
  {
    "alias": "golfing_man",
    "unicode": "🏌",
  },
  {
    "alias": "golfing_woman",
    "unicode": "🏌️‍♀️",
  },
  {
    "alias": "gorilla",
    "unicode": "🦍",
  },
  {
    "alias": "grapes",
    "unicode": "🍇",
  },
  {
    "alias": "greece",
    "unicode": "🇬🇷",
  },
  {
    "alias": "green_apple",
    "unicode": "🍏",
  },
  {
    "alias": "green_book",
    "unicode": "📗",
  },
  {
    "alias": "green_circle",
    "unicode": "🟢",
  },
  {
    "alias": "green_heart",
    "unicode": "💚",
  },
  {
    "alias": "green_salad",
    "unicode": "🥗",
  },
  {
    "alias": "green_square",
    "unicode": "🟩",
  },
  {
    "alias": "greenland",
    "unicode": "🇬🇱",
  },
  {
    "alias": "grenada",
    "unicode": "🇬🇩",
  },
  {
    "alias": "grey_exclamation",
    "unicode": "❕",
  },
  {
    "alias": "grey_question",
    "unicode": "❔",
  },
  {
    "alias": "grimacing",
    "unicode": "😬",
  },
  {
    "alias": "grin",
    "unicode": "😁",
  },
  {
    "alias": "grinning",
    "unicode": "😀",
  },
  {
    "alias": "guadeloupe",
    "unicode": "🇬🇵",
  },
  {
    "alias": "guam",
    "unicode": "🇬🇺",
  },
  {
    "alias": "guard",
    "unicode": "💂",
  },
  {
    "alias": "guardsman",
    "unicode": "💂",
  },
  {
    "alias": "guardswoman",
    "unicode": "💂‍♀",
  },
  {
    "alias": "guatemala",
    "unicode": "🇬🇹",
  },
  {
    "alias": "guernsey",
    "unicode": "🇬🇬",
  },
  {
    "alias": "guide_dog",
    "unicode": "🦮",
  },
  {
    "alias": "guinea",
    "unicode": "🇬🇳",
  },
  {
    "alias": "guinea_bissau",
    "unicode": "🇬🇼",
  },
  {
    "alias": "guitar",
    "unicode": "🎸",
  },
  {
    "alias": "gun",
    "unicode": "🔫",
  },
  {
    "alias": "guyana",
    "unicode": "🇬🇾",
  },
  {
    "alias": "haircut_man",
    "unicode": "💇‍♂",
  },
  {
    "alias": [
      "haircut_woman",
      "haircut"
    ],
    "unicode": "💇",
  },
  {
    "alias": "haiti",
    "unicode": "🇭🇹",
  },
  {
    "alias": "hamburger",
    "unicode": "🍔",
  },
  {
    "alias": "hammer",
    "unicode": "🔨",
  },
  {
    "alias": "hammer_and_pick",
    "unicode": "⚒",
  },
  {
    "alias": "hammer_and_wrench",
    "unicode": "🛠",
  },
  {
    "alias": "hamster",
    "unicode": "🐹",
  },
  {
    "alias": [
      "hand",
      "raised_hand"
    ],
    "unicode": "✋",
  },
  {
    "alias": "hand_over_mouth",
    "unicode": "🤭",
  },
  {
    "alias": "handbag",
    "unicode": "👜",
  },
  {
    "alias": "handball_person",
    "unicode": "🤾",
  },
  {
    "alias": "handshake",
    "unicode": "🤝",
  },
  {
    "alias": [
      "hankey",
      "poop",
      "shit"
    ],
    "unicode": "💩",
  },
  {
    "alias": "hash",
    "unicode": "#️⃣",
  },
  {
    "alias": "hatched_chick",
    "unicode": "🐥",
  },
  {
    "alias": "hatching_chick",
    "unicode": "🐣",
  },
  {
    "alias": "headphones",
    "unicode": "🎧",
  },
  {
    "alias": "headstone",
    "unicode": "🪦",
  },
  {
    "alias": "health_worker",
    "unicode": "🧑‍⚕️",
  },
  {
    "alias": "hear_no_evil",
    "unicode": "🙉",
  },
  {
    "alias": "heard_mcdonald_islands",
    "unicode": "🇭🇲",
  },
  {
    "alias": "heart",
    "unicode": "❤️",
  },
  {
    "alias": "heart_decoration",
    "unicode": "💟",
  },
  {
    "alias": "heart_eyes",
    "unicode": "😍",
  },
  {
    "alias": "heart_eyes_cat",
    "unicode": "😻",
  },
  {
    "alias": "heart_on_fire",
    "unicode": "❤️‍🔥",
  },
  {
    "alias": "heartbeat",
    "unicode": "💓",
  },
  {
    "alias": "heartpulse",
    "unicode": "💗",
  },
  {
    "alias": "hearts",
    "unicode": "♥️",
  },
  {
    "alias": "heavy_check_mark",
    "unicode": "✔️",
  },
  {
    "alias": "heavy_division_sign",
    "unicode": "➗",
  },
  {
    "alias": "heavy_dollar_sign",
    "unicode": "💲",
  },
  {
    "alias": "heavy_heart_exclamation",
    "unicode": "❣️",
  },
  {
    "alias": "heavy_minus_sign",
    "unicode": "➖",
  },
  {
    "alias": "heavy_multiplication_x",
    "unicode": "✖️",
  },
  {
    "alias": "heavy_plus_sign",
    "unicode": "➕",
  },
  {
    "alias": "hedgehog",
    "unicode": "🦔",
  },
  {
    "alias": "helicopter",
    "unicode": "🚁",
  },
  {
    "alias": "herb",
    "unicode": "🌿",
  },
  {
    "alias": "hibiscus",
    "unicode": "🌺",
  },
  {
    "alias": "high_brightness",
    "unicode": "🔆",
  },
  {
    "alias": "high_heel",
    "unicode": "👠",
  },
  {
    "alias": "hiking_boot",
    "unicode": "🥾",
  },
  {
    "alias": "hindu_temple",
    "unicode": "🛕",
  },
  {
    "alias": "hippopotamus",
    "unicode": "🦛",
  },
  {
    "alias": [
      "hocho",
      "knife"
    ],
    "unicode": "🔪",
  },
  {
    "alias": "hole",
    "unicode": "🕳",
  },
  {
    "alias": "honduras",
    "unicode": "🇭🇳",
  },
  {
    "alias": "honey_pot",
    "unicode": "🍯",
  },
  {
    "alias": "hong_kong",
    "unicode": "🇭🇰",
  },
  {
    "alias": "hook",
    "unicode": "🪝",
  },
  {
    "alias": "horse",
    "unicode": "🐴",
  },
  {
    "alias": "horse_racing",
    "unicode": "🏇",
  },
  {
    "alias": "hospital",
    "unicode": "🏥",
  },
  {
    "alias": "hot_face",
    "unicode": "🥵",
  },
  {
    "alias": "hot_pepper",
    "unicode": "🌶",
  },
  {
    "alias": "hotdog",
    "unicode": "🌭",
  },
  {
    "alias": "hotel",
    "unicode": "🏨",
  },
  {
    "alias": "hotsprings",
    "unicode": "♨️",
  },
  {
    "alias": "hourglass",
    "unicode": "⌛️",
  },
  {
    "alias": "hourglass_flowing_sand",
    "unicode": "⏳",
  },
  {
    "alias": "house",
    "unicode": "🏠",
  },
  {
    "alias": "house_with_garden",
    "unicode": "🏡",
  },
  {
    "alias": "houses",
    "unicode": "🏘",
  },
  {
    "alias": "hugs",
    "unicode": "🤗",
  },
  {
    "alias": "hungary",
    "unicode": "🇭🇺",
  },
  {
    "alias": "hurtrealbad",
    "unicode": false,
  },
  {
    "alias": "hushed",
    "unicode": "😯",
  },
  {
    "alias": "hut",
    "unicode": "🛖",
  },
  {
    "alias": "ice_cream",
    "unicode": "🍨",
  },
  {
    "alias": "ice_cube",
    "unicode": "🧊",
  },
  {
    "alias": "ice_hockey",
    "unicode": "🏒",
  },
  {
    "alias": "ice_skate",
    "unicode": "⛸",
  },
  {
    "alias": "icecream",
    "unicode": "🍦",
  },
  {
    "alias": "iceland",
    "unicode": "🇮🇸",
  },
  {
    "alias": "id",
    "unicode": "🆔",
  },
  {
    "alias": "ideograph_advantage",
    "unicode": "🉐",
  },
  {
    "alias": "imp",
    "unicode": "👿",
  },
  {
    "alias": "inbox_tray",
    "unicode": "📥",
  },
  {
    "alias": "incoming_envelope",
    "unicode": "📨",
  },
  {
    "alias": "india",
    "unicode": "🇮🇳",
  },
  {
    "alias": "indonesia",
    "unicode": "🇮🇩",
  },
  {
    "alias": "infinity",
    "unicode": "♾️",
  },
  {
    "alias": "information_source",
    "unicode": "ℹ️",
  },
  {
    "alias": "innocent",
    "unicode": "😇",
  },
  {
    "alias": "interrobang",
    "unicode": "⁉️",
  },
  {
    "alias": "iphone",
    "unicode": "📱",
  },
  {
    "alias": "iran",
    "unicode": "🇮🇷",
  },
  {
    "alias": "iraq",
    "unicode": "🇮🇶",
  },
  {
    "alias": "ireland",
    "unicode": "🇮🇪",
  },
  {
    "alias": "isle_of_man",
    "unicode": "🇮🇲",
  },
  {
    "alias": "israel",
    "unicode": "🇮🇱",
  },
  {
    "alias": "it",
    "unicode": "🇮🇹",
  },
  {
    "alias": "jack_o_lantern",
    "unicode": "🎃",
  },
  {
    "alias": "jamaica",
    "unicode": "🇯🇲",
  },
  {
    "alias": "japan",
    "unicode": "🗾",
  },
  {
    "alias": "japanese_castle",
    "unicode": "🏯",
  },
  {
    "alias": "japanese_goblin",
    "unicode": "👺",
  },
  {
    "alias": "japanese_ogre",
    "unicode": "👹",
  },
  {
    "alias": "jeans",
    "unicode": "👖",
  },
  {
    "alias": "jersey",
    "unicode": "🇯🇪",
  },
  {
    "alias": "jigsaw",
    "unicode": "🧩",
  },
  {
    "alias": "jordan",
    "unicode": "🇯🇴",
  },
  {
    "alias": "joy",
    "unicode": "😂",
  },
  {
    "alias": "joy_cat",
    "unicode": "😹",
  },
  {
    "alias": "joystick",
    "unicode": "🕹",
  },
  {
    "alias": "jp",
    "unicode": "🇯🇵",
  },
  {
    "alias": "judge",
    "unicode": "🧑‍⚖️",
  },
  {
    "alias": "juggling_person",
    "unicode": "🤹",
  },
  {
    "alias": "kaaba",
    "unicode": "🕋",
  },
  {
    "alias": "kangaroo",
    "unicode": "🦘",
  },
  {
    "alias": "kazakhstan",
    "unicode": "🇰🇿",
  },
  {
    "alias": "kenya",
    "unicode": "🇰🇪",
  },
  {
    "alias": "key",
    "unicode": "🔑",
  },
  {
    "alias": "keyboard",
    "unicode": "⌨️",
  },
  {
    "alias": "keycap_ten",
    "unicode": "🔟",
  },
  {
    "alias": "kick_scooter",
    "unicode": "🛴",
  },
  {
    "alias": "kimono",
    "unicode": "👘",
  },
  {
    "alias": "kiribati",
    "unicode": "🇰🇮",
  },
  {
    "alias": "kiss",
    "unicode": "💋",
  },
  {
    "alias": "kissing",
    "unicode": "😗",
  },
  {
    "alias": "kissing_cat",
    "unicode": "😽",
  },
  {
    "alias": "kissing_closed_eyes",
    "unicode": "😚",
  },
  {
    "alias": "kissing_heart",
    "unicode": "😘",
  },
  {
    "alias": "kissing_smiling_eyes",
    "unicode": "😙",
  },
  {
    "alias": "kite",
    "unicode": "🪁",
  },
  {
    "alias": "kiwi_fruit",
    "unicode": "🥝",
  },
  {
    "alias": "kneeling_man",
    "unicode": "🧎‍♂️",
  },
  {
    "alias": "kneeling_person",
    "unicode": "🧎",
  },
  {
    "alias": "kneeling_woman",
    "unicode": "🧎‍♀️",
  },
  {
    "alias": "knot",
    "unicode": "🪢",
  },
  {
    "alias": "koala",
    "unicode": "🐨",
  },
  {
    "alias": "koko",
    "unicode": "🈁",
  },
  {
    "alias": "kosovo",
    "unicode": "🇽🇰",
  },
  {
    "alias": "kr",
    "unicode": "🇰🇷",
  },
  {
    "alias": "kuwait",
    "unicode": "🇰🇼",
  },
  {
    "alias": "kyrgyzstan",
    "unicode": "🇰🇬",
  },
  {
    "alias": "lab_coat",
    "unicode": "🥼",
  },
  {
    "alias": "label",
    "unicode": "🏷",
  },
  {
    "alias": "lacrosse",
    "unicode": "🥍",
  },
  {
    "alias": "ladder",
    "unicode": "🪜",
  },
  {
    "alias": "lady_beetle",
    "unicode": "🐞",
  },
  {
    "alias": [
      "lantern",
      "izakaya_lantern"
    ],
    "unicode": "🏮",
  },
  {
    "alias": "laos",
    "unicode": "🇱🇦",
  },
  {
    "alias": "large_blue_circle",
    "unicode": "🔵",
  },
  {
    "alias": "large_blue_diamond",
    "unicode": "🔷",
  },
  {
    "alias": "large_orange_diamond",
    "unicode": "🔶",
  },
  {
    "alias": "last_quarter_moon",
    "unicode": "🌗",
  },
  {
    "alias": "last_quarter_moon_with_face",
    "unicode": "🌜",
  },
  {
    "alias": "latin_cross",
    "unicode": "✝️",
  },
  {
    "alias": "latvia",
    "unicode": "🇱🇻",
  },
  {
    "alias": [
      "laughing",
      "satisfied"
    ],
    "unicode": "😆",
  },
  {
    "alias": "leafy_green",
    "unicode": "🥬",
  },
  {
    "alias": "leaves",
    "unicode": "🍃",
  },
  {
    "alias": "lebanon",
    "unicode": "🇱🇧",
  },
  {
    "alias": "ledger",
    "unicode": "📒",
  },
  {
    "alias": "left_luggage",
    "unicode": "🛅",
  },
  {
    "alias": "left_right_arrow",
    "unicode": "↔️",
  },
  {
    "alias": "left_speech_bubble",
    "unicode": "🗨️",
  },
  {
    "alias": "leftwards_arrow_with_hook",
    "unicode": "↩️",
  },
  {
    "alias": "leg",
    "unicode": "🦵",
  },
  {
    "alias": "lemon",
    "unicode": "🍋",
  },
  {
    "alias": "leo",
    "unicode": "♌️",
  },
  {
    "alias": "leopard",
    "unicode": "🐆",
  },
  {
    "alias": "lesotho",
    "unicode": "🇱🇸",
  },
  {
    "alias": "level_slider",
    "unicode": "🎚",
  },
  {
    "alias": "liberia",
    "unicode": "🇱🇷",
  },
  {
    "alias": "libra",
    "unicode": "♎️",
  },
  {
    "alias": "libya",
    "unicode": "🇱🇾",
  },
  {
    "alias": "liechtenstein",
    "unicode": "🇱🇮",
  },
  {
    "alias": "light_rail",
    "unicode": "🚈",
  },
  {
    "alias": "link",
    "unicode": "🔗",
  },
  {
    "alias": "lion",
    "unicode": "🦁",
  },
  {
    "alias": "lips",
    "unicode": "👄",
  },
  {
    "alias": "lipstick",
    "unicode": "💄",
  },
  {
    "alias": "lithuania",
    "unicode": "🇱🇹",
  },
  {
    "alias": "lizard",
    "unicode": "🦎",
  },
  {
    "alias": "llama",
    "unicode": "🦙",
  },
  {
    "alias": "lobster",
    "unicode": "🦞",
  },
  {
    "alias": "lock",
    "unicode": "🔒",
  },
  {
    "alias": "lock_with_ink_pen",
    "unicode": "🔏",
  },
  {
    "alias": "lollipop",
    "unicode": "🍭",
  },
  {
    "alias": "long_drum",
    "unicode": "🪘",
  },
  {
    "alias": "loop",
    "unicode": "➿",
  },
  {
    "alias": "lotion_bottle",
    "unicode": "🧴",
  },
  {
    "alias": "lotus_position",
    "unicode": "🧘",
  },
  {
    "alias": "lotus_position_man",
    "unicode": "🧘‍♂️",
  },
  {
    "alias": "lotus_position_woman",
    "unicode": "🧘‍♀️",
  },
  {
    "alias": "loud_sound",
    "unicode": "🔊",
  },
  {
    "alias": "loudspeaker",
    "unicode": "📢",
  },
  {
    "alias": "love_hotel",
    "unicode": "🏩",
  },
  {
    "alias": "love_letter",
    "unicode": "💌",
  },
  {
    "alias": "love_you_gesture",
    "unicode": "🤟",
  },
  {
    "alias": "low_brightness",
    "unicode": "🔅",
  },
  {
    "alias": "luggage",
    "unicode": "🧳",
  },
  {
    "alias": "lungs",
    "unicode": "🫁",
  },
  {
    "alias": "luxembourg",
    "unicode": "🇱🇺",
  },
  {
    "alias": "lying_face",
    "unicode": "🤥",
  },
  {
    "alias": "m",
    "unicode": "Ⓜ️",
  },
  {
    "alias": "macau",
    "unicode": "🇲🇴",
  },
  {
    "alias": "macedonia",
    "unicode": "🇲🇰",
  },
  {
    "alias": "madagascar",
    "unicode": "🇲🇬",
  },
  {
    "alias": "mag",
    "unicode": "🔍",
  },
  {
    "alias": "mag_right",
    "unicode": "🔎",
  },
  {
    "alias": "mage",
    "unicode": "🧙",
  },
  {
    "alias": "mage_man",
    "unicode": "🧙‍♂️",
  },
  {
    "alias": "mage_woman",
    "unicode": "🧙‍♀️",
  },
  {
    "alias": "magic_wand",
    "unicode": "🪄",
  },
  {
    "alias": "magnet",
    "unicode": "🧲",
  },
  {
    "alias": "mahjong",
    "unicode": "🀄️",
  },
  {
    "alias": "mailbox",
    "unicode": "📫",
  },
  {
    "alias": "mailbox_closed",
    "unicode": "📪",
  },
  {
    "alias": "mailbox_with_mail",
    "unicode": "📬",
  },
  {
    "alias": "mailbox_with_no_mail",
    "unicode": "📭",
  },
  {
    "alias": "malawi",
    "unicode": "🇲🇼",
  },
  {
    "alias": "malaysia",
    "unicode": "🇲🇾",
  },
  {
    "alias": "maldives",
    "unicode": "🇲🇻",
  },
  {
    "alias": [
      "male_detective",
      "detective"
    ],
    "unicode": "🕵",
  },
  {
    "alias": "male_sign",
    "unicode": "♂️",
  },
  {
    "alias": "mali",
    "unicode": "🇲🇱",
  },
  {
    "alias": "malta",
    "unicode": "🇲🇹",
  },
  {
    "alias": "mammoth",
    "unicode": "🦣",
  },
  {
    "alias": "man",
    "unicode": "👨",
  },
  {
    "alias": "man_artist",
    "unicode": "👨‍🎨",
  },
  {
    "alias": "man_astronaut",
    "unicode": "👨‍🚀",
  },
  {
    "alias": "man_beard",
    "unicode": "🧔‍♂️",
  },
  {
    "alias": "man_cartwheeling",
    "unicode": "🤸‍♂",
  },
  {
    "alias": "man_cook",
    "unicode": "👨‍🍳",
  },
  {
    "alias": "man_dancing",
    "unicode": "🕺",
  },
  {
    "alias": "man_facepalming",
    "unicode": "🤦‍♂",
  },
  {
    "alias": "man_factory_worker",
    "unicode": "👨‍🏭",
  },
  {
    "alias": "man_farmer",
    "unicode": "👨‍🌾",
  },
  {
    "alias": "man_feeding_baby",
    "unicode": "👨‍🍼",
  },
  {
    "alias": "man_firefighter",
    "unicode": "👨‍🚒",
  },
  {
    "alias": "man_health_worker",
    "unicode": "👨‍⚕",
  },
  {
    "alias": "man_in_manual_wheelchair",
    "unicode": "👨‍🦽",
  },
  {
    "alias": "man_in_motorized_wheelchair",
    "unicode": "👨‍🦼",
  },
  {
    "alias": "man_in_tuxedo",
    "unicode": "🤵",
  },
  {
    "alias": "man_judge",
    "unicode": "👨‍⚖",
  },
  {
    "alias": "man_juggling",
    "unicode": "🤹‍♂",
  },
  {
    "alias": "man_mechanic",
    "unicode": "👨‍🔧",
  },
  {
    "alias": "man_office_worker",
    "unicode": "👨‍💼",
  },
  {
    "alias": "man_pilot",
    "unicode": "👨‍✈",
  },
  {
    "alias": "man_playing_handball",
    "unicode": "🤾‍♂",
  },
  {
    "alias": "man_playing_water_polo",
    "unicode": "🤽‍♂",
  },
  {
    "alias": "man_scientist",
    "unicode": "👨‍🔬",
  },
  {
    "alias": "man_shrugging",
    "unicode": "🤷‍♂",
  },
  {
    "alias": "man_singer",
    "unicode": "👨‍🎤",
  },
  {
    "alias": "man_student",
    "unicode": "👨‍🎓",
  },
  {
    "alias": "man_teacher",
    "unicode": "👨‍🏫",
  },
  {
    "alias": "man_technologist",
    "unicode": "👨‍💻",
  },
  {
    "alias": "man_with_gua_pi_mao",
    "unicode": "👲",
  },
  {
    "alias": "man_with_probing_cane",
    "unicode": "👨‍🦯",
  },
  {
    "alias": "man_with_turban",
    "unicode": "👳",
  },
  {
    "alias": "man_with_veil",
    "unicode": "👰‍♂️",
  },
  {
    "alias": "mango",
    "unicode": "🥭",
  },
  {
    "alias": "mantelpiece_clock",
    "unicode": "🕰",
  },
  {
    "alias": "manual_wheelchair",
    "unicode": "🦽",
  },
  {
    "alias": "maple_leaf",
    "unicode": "🍁",
  },
  {
    "alias": "marshall_islands",
    "unicode": "🇲🇭",
  },
  {
    "alias": "martial_arts_uniform",
    "unicode": "🥋",
  },
  {
    "alias": "martinique",
    "unicode": "🇲🇶",
  },
  {
    "alias": "mask",
    "unicode": "😷",
  },
  {
    "alias": "massage_man",
    "unicode": "💆‍♂",
  },
  {
    "alias": [
      "massage_woman",
      "massage"
    ],
    "unicode": "💆",
  },
  {
    "alias": "mate",
    "unicode": "🧉",
  },
  {
    "alias": "mauritania",
    "unicode": "🇲🇷",
  },
  {
    "alias": "mauritius",
    "unicode": "🇲🇺",
  },
  {
    "alias": "mayotte",
    "unicode": "🇾🇹",
  },
  {
    "alias": "meat_on_bone",
    "unicode": "🍖",
  },
  {
    "alias": "mechanic",
    "unicode": "🧑‍🔧",
  },
  {
    "alias": "mechanical_arm",
    "unicode": "🦾",
  },
  {
    "alias": "mechanical_leg",
    "unicode": "🦿",
  },
  {
    "alias": "medal_military",
    "unicode": "🎖",
  },
  {
    "alias": "medal_sports",
    "unicode": "🏅",
  },
  {
    "alias": "medical_symbol",
    "unicode": "⚕️",
  },
  {
    "alias": "mega",
    "unicode": "📣",
  },
  {
    "alias": "melon",
    "unicode": "🍈",
  },
  {
    "alias": [
      "memo",
      "pencil"
    ],
    "unicode": "📝",
  },
  {
    "alias": "men_wrestling",
    "unicode": "🤼‍♂",
  },
  {
    "alias": "mending_heart",
    "unicode": "❤️‍🩹",
  },
  {
    "alias": "menorah",
    "unicode": "🕎",
  },
  {
    "alias": "mens",
    "unicode": "🚹",
  },
  {
    "alias": "mermaid",
    "unicode": "🧜‍♀️",
  },
  {
    "alias": "merman",
    "unicode": "🧜‍♂️",
  },
  {
    "alias": "merperson",
    "unicode": "🧜",
  },
  {
    "alias": "metal",
    "unicode": "🤘",
  },
  {
    "alias": "metro",
    "unicode": "🚇",
  },
  {
    "alias": "mexico",
    "unicode": "🇲🇽",
  },
  {
    "alias": "microbe",
    "unicode": "🦠",
  },
  {
    "alias": "micronesia",
    "unicode": "🇫🇲",
  },
  {
    "alias": "microphone",
    "unicode": "🎤",
  },
  {
    "alias": "microscope",
    "unicode": "🔬",
  },
  {
    "alias": [
      "middle_finger",
      "fu"
    ],
    "unicode": "🖕",
  },
  {
    "alias": "military_helmet",
    "unicode": "🪖",
  },
  {
    "alias": "milk_glass",
    "unicode": "🥛",
  },
  {
    "alias": "milky_way",
    "unicode": "🌌",
  },
  {
    "alias": "minibus",
    "unicode": "🚐",
  },
  {
    "alias": "minidisc",
    "unicode": "💽",
  },
  {
    "alias": "mirror",
    "unicode": "🪞",
  },
  {
    "alias": "mobile_phone_off",
    "unicode": "📴",
  },
  {
    "alias": "moldova",
    "unicode": "🇲🇩",
  },
  {
    "alias": "monaco",
    "unicode": "🇲🇨",
  },
  {
    "alias": "money_mouth_face",
    "unicode": "🤑",
  },
  {
    "alias": "money_with_wings",
    "unicode": "💸",
  },
  {
    "alias": "moneybag",
    "unicode": "💰",
  },
  {
    "alias": "mongolia",
    "unicode": "🇲🇳",
  },
  {
    "alias": "monkey",
    "unicode": "🐒",
  },
  {
    "alias": "monkey_face",
    "unicode": "🐵",
  },
  {
    "alias": "monocle_face",
    "unicode": "🧐",
  },
  {
    "alias": "monorail",
    "unicode": "🚝",
  },
  {
    "alias": "montenegro",
    "unicode": "🇲🇪",
  },
  {
    "alias": "montserrat",
    "unicode": "🇲🇸",
  },
  {
    "alias": [
      "moon",
      "waxing_gibbous_moon"
    ],
    "unicode": "🌔",
  },
  {
    "alias": "moon_cake",
    "unicode": "🥮",
  },
  {
    "alias": "morocco",
    "unicode": "🇲🇦",
  },
  {
    "alias": "mortar_board",
    "unicode": "🎓",
  },
  {
    "alias": "mosque",
    "unicode": "🕌",
  },
  {
    "alias": "mosquito",
    "unicode": "🦟",
  },
  {
    "alias": "motor_boat",
    "unicode": "🛥",
  },
  {
    "alias": "motor_scooter",
    "unicode": "🛵",
  },
  {
    "alias": "motorcycle",
    "unicode": "🏍",
  },
  {
    "alias": "motorized_wheelchair",
    "unicode": "🦼",
  },
  {
    "alias": "motorway",
    "unicode": "🛣",
  },
  {
    "alias": "mount_fuji",
    "unicode": "🗻",
  },
  {
    "alias": "mountain",
    "unicode": "⛰",
  },
  {
    "alias": [
      "mountain_biking_man",
      "mountain_bicyclist"
    ],
    "unicode": "🚵",
  },
  {
    "alias": "mountain_biking_woman",
    "unicode": "🚵‍♀",
  },
  {
    "alias": "mountain_cableway",
    "unicode": "🚠",
  },
  {
    "alias": "mountain_railway",
    "unicode": "🚞",
  },
  {
    "alias": "mountain_snow",
    "unicode": "🏔",
  },
  {
    "alias": "mouse",
    "unicode": "🐭",
  },
  {
    "alias": "mouse2",
    "unicode": "🐁",
  },
  {
    "alias": "mouse_trap",
    "unicode": "🪤",
  },
  {
    "alias": "movie_camera",
    "unicode": "🎥",
  },
  {
    "alias": "moyai",
    "unicode": "🗿",
  },
  {
    "alias": "mozambique",
    "unicode": "🇲🇿",
  },
  {
    "alias": "mrs_claus",
    "unicode": "🤶",
  },
  {
    "alias": "muscle",
    "unicode": "💪",
  },
  {
    "alias": "mushroom",
    "unicode": "🍄",
  },
  {
    "alias": "musical_keyboard",
    "unicode": "🎹",
  },
  {
    "alias": "musical_note",
    "unicode": "🎵",
  },
  {
    "alias": "musical_score",
    "unicode": "🎼",
  },
  {
    "alias": "mute",
    "unicode": "🔇",
  },
  {
    "alias": "mx_claus",
    "unicode": "🧑‍🎄",
  },
  {
    "alias": "myanmar",
    "unicode": "🇲🇲",
  },
  {
    "alias": "nail_care",
    "unicode": "💅",
  },
  {
    "alias": "name_badge",
    "unicode": "📛",
  },
  {
    "alias": "namibia",
    "unicode": "🇳🇦",
  },
  {
    "alias": "national_park",
    "unicode": "🏞",
  },
  {
    "alias": "nauru",
    "unicode": "🇳🇷",
  },
  {
    "alias": "nauseated_face",
    "unicode": "🤢",
  },
  {
    "alias": "nazar_amulet",
    "unicode": "🧿",
  },
  {
    "alias": "neckbeard",
    "unicode": false,
  },
  {
    "alias": "necktie",
    "unicode": "👔",
  },
  {
    "alias": "negative_squared_cross_mark",
    "unicode": "❎",
  },
  {
    "alias": "nepal",
    "unicode": "🇳🇵",
  },
  {
    "alias": "nerd_face",
    "unicode": "🤓",
  },
  {
    "alias": "nesting_dolls",
    "unicode": "🪆",
  },
  {
    "alias": "netherlands",
    "unicode": "🇳🇱",
  },
  {
    "alias": "neutral_face",
    "unicode": "😐",
  },
  {
    "alias": "new",
    "unicode": "🆕",
  },
  {
    "alias": "new_caledonia",
    "unicode": "🇳🇨",
  },
  {
    "alias": "new_moon",
    "unicode": "🌑",
  },
  {
    "alias": "new_moon_with_face",
    "unicode": "🌚",
  },
  {
    "alias": "new_zealand",
    "unicode": "🇳🇿",
  },
  {
    "alias": "newspaper",
    "unicode": "📰",
  },
  {
    "alias": "newspaper_roll",
    "unicode": "🗞",
  },
  {
    "alias": "next_track_button",
    "unicode": "⏭",
  },
  {
    "alias": "ng",
    "unicode": "🆖",
  },
  {
    "alias": "nicaragua",
    "unicode": "🇳🇮",
  },
  {
    "alias": "niger",
    "unicode": "🇳🇪",
  },
  {
    "alias": "nigeria",
    "unicode": "🇳🇬",
  },
  {
    "alias": "night_with_stars",
    "unicode": "🌃",
  },
  {
    "alias": "nine",
    "unicode": "9️⃣",
  },
  {
    "alias": "ninja",
    "unicode": "🥷",
  },
  {
    "alias": "niue",
    "unicode": "🇳🇺",
  },
  {
    "alias": "no_bell",
    "unicode": "🔕",
  },
  {
    "alias": "no_bicycles",
    "unicode": "🚳",
  },
  {
    "alias": "no_entry",
    "unicode": "⛔️",
  },
  {
    "alias": "no_entry_sign",
    "unicode": "🚫",
  },
  {
    "alias": [
      "no_good_man",
      "ng_man"
    ],
    "unicode": "🙅‍♂",
  },
  {
    "alias": [
      "no_good_woman",
      "ng_woman",
      "no_good"
    ],
    "unicode": "🙅",
  },
  {
    "alias": "no_mobile_phones",
    "unicode": "📵",
  },
  {
    "alias": "no_mouth",
    "unicode": "😶",
  },
  {
    "alias": "no_pedestrians",
    "unicode": "🚷",
  },
  {
    "alias": "no_smoking",
    "unicode": "🚭",
  },
  {
    "alias": "non-potable_water",
    "unicode": "🚱",
  },
  {
    "alias": "norfolk_island",
    "unicode": "🇳🇫",
  },
  {
    "alias": "north_korea",
    "unicode": "🇰🇵",
  },
  {
    "alias": "northern_mariana_islands",
    "unicode": "🇲🇵",
  },
  {
    "alias": "norway",
    "unicode": "🇳🇴",
  },
  {
    "alias": "nose",
    "unicode": "👃",
  },
  {
    "alias": "notebook",
    "unicode": "📓",
  },
  {
    "alias": "notebook_with_decorative_cover",
    "unicode": "📔",
  },
  {
    "alias": "notes",
    "unicode": "🎶",
  },
  {
    "alias": "nut_and_bolt",
    "unicode": "🔩",
  },
  {
    "alias": "o",
    "unicode": "⭕️",
  },
  {
    "alias": "o2",
    "unicode": "🅾️",
  },
  {
    "alias": "ocean",
    "unicode": "🌊",
  },
  {
    "alias": "octocat",
    "unicode": false,
  },
  {
    "alias": "octopus",
    "unicode": "🐙",
  },
  {
    "alias": "oden",
    "unicode": "🍢",
  },
  {
    "alias": "office",
    "unicode": "🏢",
  },
  {
    "alias": "office_worker",
    "unicode": "🧑‍💼",
  },
  {
    "alias": "oil_drum",
    "unicode": "🛢",
  },
  {
    "alias": "ok",
    "unicode": "🆗",
  },
  {
    "alias": "ok_hand",
    "unicode": "👌",
  },
  {
    "alias": "ok_man",
    "unicode": "🙆‍♂",
  },
  {
    "alias": "ok_person",
    "unicode": "🙆",
  },
  {
    "alias": "ok_woman",
    "unicode": "🙆",
  },
  {
    "alias": "old_key",
    "unicode": "🗝",
  },
  {
    "alias": "older_adult",
    "unicode": "🧓",
  },
  {
    "alias": "older_man",
    "unicode": "👴",
  },
  {
    "alias": "older_woman",
    "unicode": "👵",
  },
  {
    "alias": "olive",
    "unicode": "🫒",
  },
  {
    "alias": "om",
    "unicode": "🕉",
  },
  {
    "alias": "oman",
    "unicode": "🇴🇲",
  },
  {
    "alias": "on",
    "unicode": "🔛",
  },
  {
    "alias": "oncoming_automobile",
    "unicode": "🚘",
  },
  {
    "alias": "oncoming_bus",
    "unicode": "🚍",
  },
  {
    "alias": "oncoming_police_car",
    "unicode": "🚔",
  },
  {
    "alias": "oncoming_taxi",
    "unicode": "🚖",
  },
  {
    "alias": "one",
    "unicode": "1️⃣",
  },
  {
    "alias": "one_piece_swimsuit",
    "unicode": "🩱",
  },
  {
    "alias": "onion",
    "unicode": "🧅",
  },
  {
    "alias": "open_file_folder",
    "unicode": "📂",
  },
  {
    "alias": "open_hands",
    "unicode": "👐",
  },
  {
    "alias": "open_mouth",
    "unicode": "😮",
  },
  {
    "alias": "open_umbrella",
    "unicode": "☂️",
  },
  {
    "alias": "ophiuchus",
    "unicode": "⛎",
  },
  {
    "alias": "orange_book",
    "unicode": "📙",
  },
  {
    "alias": "orange_circle",
    "unicode": "🟠",
  },
  {
    "alias": "orange_heart",
    "unicode": "🧡",
  },
  {
    "alias": "orange_square",
    "unicode": "🟧",
  },
  {
    "alias": "orangutan",
    "unicode": "🦧",
  },
  {
    "alias": "orthodox_cross",
    "unicode": "☦️",
  },
  {
    "alias": "otter",
    "unicode": "🦦",
  },
  {
    "alias": "outbox_tray",
    "unicode": "📤",
  },
  {
    "alias": "owl",
    "unicode": "🦉",
  },
  {
    "alias": "ox",
    "unicode": "🐂",
  },
  {
    "alias": "oyster",
    "unicode": "🦪",
  },
  {
    "alias": "package",
    "unicode": "📦",
  },
  {
    "alias": "page_facing_up",
    "unicode": "📄",
  },
  {
    "alias": "page_with_curl",
    "unicode": "📃",
  },
  {
    "alias": "pager",
    "unicode": "📟",
  },
  {
    "alias": "paintbrush",
    "unicode": "🖌",
  },
  {
    "alias": "pakistan",
    "unicode": "🇵🇰",
  },
  {
    "alias": "palau",
    "unicode": "🇵🇼",
  },
  {
    "alias": "palestinian_territories",
    "unicode": "🇵🇸",
  },
  {
    "alias": "palm_tree",
    "unicode": "🌴",
  },
  {
    "alias": "palms_up_together",
    "unicode": "🤲",
  },
  {
    "alias": "panama",
    "unicode": "🇵🇦",
  },
  {
    "alias": "pancakes",
    "unicode": "🥞",
  },
  {
    "alias": "panda_face",
    "unicode": "🐼",
  },
  {
    "alias": "paperclip",
    "unicode": "📎",
  },
  {
    "alias": "paperclips",
    "unicode": "🖇",
  },
  {
    "alias": "papua_new_guinea",
    "unicode": "🇵🇬",
  },
  {
    "alias": "parachute",
    "unicode": "🪂",
  },
  {
    "alias": "paraguay",
    "unicode": "🇵🇾",
  },
  {
    "alias": "parasol_on_ground",
    "unicode": "⛱",
  },
  {
    "alias": "parking",
    "unicode": "🅿️",
  },
  {
    "alias": "parrot",
    "unicode": "🦜",
  },
  {
    "alias": "part_alternation_mark",
    "unicode": "〽️",
  },
  {
    "alias": "partly_sunny",
    "unicode": "⛅️",
  },
  {
    "alias": "partying_face",
    "unicode": "🥳",
  },
  {
    "alias": "passenger_ship",
    "unicode": "🛳",
  },
  {
    "alias": "passport_control",
    "unicode": "🛂",
  },
  {
    "alias": "pause_button",
    "unicode": "⏸",
  },
  {
    "alias": "peace_symbol",
    "unicode": "☮️",
  },
  {
    "alias": "peach",
    "unicode": "🍑",
  },
  {
    "alias": "peacock",
    "unicode": "🦚",
  },
  {
    "alias": "peanuts",
    "unicode": "🥜",
  },
  {
    "alias": "pear",
    "unicode": "🍐",
  },
  {
    "alias": "pen",
    "unicode": "🖊",
  },
  {
    "alias": "pencil2",
    "unicode": "✏️",
  },
  {
    "alias": "penguin",
    "unicode": "🐧",
  },
  {
    "alias": "pensive",
    "unicode": "😔",
  },
  {
    "alias": "people_holding_hands",
    "unicode": "🧑‍🤝‍🧑",
  },
  {
    "alias": "people_hugging",
    "unicode": "🫂",
  },
  {
    "alias": "performing_arts",
    "unicode": "🎭",
  },
  {
    "alias": "persevere",
    "unicode": "😣",
  },
  {
    "alias": "person_bald",
    "unicode": "🧑‍🦲",
  },
  {
    "alias": "person_curly_hair",
    "unicode": "🧑‍🦱",
  },
  {
    "alias": "person_feeding_baby",
    "unicode": "🧑‍🍼",
  },
  {
    "alias": "person_fencing",
    "unicode": "🤺",
  },
  {
    "alias": "person_in_manual_wheelchair",
    "unicode": "🧑‍🦽",
  },
  {
    "alias": "person_in_motorized_wheelchair",
    "unicode": "🧑‍🦼",
  },
  {
    "alias": "person_in_tuxedo",
    "unicode": "🤵🏻",
  },
  {
    "alias": "person_red_hair",
    "unicode": "🧑‍🦰",
  },
  {
    "alias": "person_white_hair",
    "unicode": "🧑‍🦳",
  },
  {
    "alias": "person_with_probing_cane",
    "unicode": "🧑‍🦯",
  },
  {
    "alias": "person_with_turban",
    "unicode": "👳",
  },
  {
    "alias": "person_with_veil",
    "unicode": "👰",
  },
  {
    "alias": "peru",
    "unicode": "🇵🇪",
  },
  {
    "alias": "petri_dish",
    "unicode": "🧫",
  },
  {
    "alias": "philippines",
    "unicode": "🇵🇭",
  },
  {
    "alias": [
      "phone",
      "telephone"
    ],
    "unicode": "☎️",
  },
  {
    "alias": "pick",
    "unicode": "⛏",
  },
  {
    "alias": "pickup_truck",
    "unicode": "🛻",
  },
  {
    "alias": "pie",
    "unicode": "🥧",
  },
  {
    "alias": "pig",
    "unicode": "🐷",
  },
  {
    "alias": "pig2",
    "unicode": "🐖",
  },
  {
    "alias": "pig_nose",
    "unicode": "🐽",
  },
  {
    "alias": "pill",
    "unicode": "💊",
  },
  {
    "alias": "pilot",
    "unicode": "🧑‍✈️",
  },
  {
    "alias": "pinata",
    "unicode": "🪅",
  },
  {
    "alias": "pinched_fingers",
    "unicode": "🤌",
  },
  {
    "alias": "pinching_hand",
    "unicode": "🤏",
  },
  {
    "alias": "pineapple",
    "unicode": "🍍",
  },
  {
    "alias": "ping_pong",
    "unicode": "🏓",
  },
  {
    "alias": "pirate_flag",
    "unicode": "🏴‍☠️",
  },
  {
    "alias": "pisces",
    "unicode": "♓️",
  },
  {
    "alias": "pitcairn_islands",
    "unicode": "🇵🇳",
  },
  {
    "alias": "pizza",
    "unicode": "🍕",
  },
  {
    "alias": "placard",
    "unicode": "🪧",
  },
  {
    "alias": "place_of_worship",
    "unicode": "🛐",
  },
  {
    "alias": "plate_with_cutlery",
    "unicode": "🍽",
  },
  {
    "alias": "play_or_pause_button",
    "unicode": "⏯",
  },
  {
    "alias": "pleading_face",
    "unicode": "🥺",
  },
  {
    "alias": "plunger",
    "unicode": "🪠",
  },
  {
    "alias": "point_down",
    "unicode": "👇",
  },
  {
    "alias": "point_left",
    "unicode": "👈",
  },
  {
    "alias": "point_right",
    "unicode": "👉",
  },
  {
    "alias": "point_up",
    "unicode": "☝️",
  },
  {
    "alias": "point_up_2",
    "unicode": "👆",
  },
  {
    "alias": "poland",
    "unicode": "🇵🇱",
  },
  {
    "alias": "polar_bear",
    "unicode": "🐻‍❄️",
  },
  {
    "alias": "police_car",
    "unicode": "🚓",
  },
  {
    "alias": "police_officer",
    "unicode": "👮",
  },
  {
    "alias": [
      "policeman",
      "cop"
    ],
    "unicode": "👮",
  },
  {
    "alias": "policewoman",
    "unicode": "👮‍♀",
  },
  {
    "alias": "poodle",
    "unicode": "🐩",
  },
  {
    "alias": "popcorn",
    "unicode": "🍿",
  },
  {
    "alias": "portugal",
    "unicode": "🇵🇹",
  },
  {
    "alias": "post_office",
    "unicode": "🏣",
  },
  {
    "alias": "postal_horn",
    "unicode": "📯",
  },
  {
    "alias": "postbox",
    "unicode": "📮",
  },
  {
    "alias": "potable_water",
    "unicode": "🚰",
  },
  {
    "alias": "potato",
    "unicode": "🥔",
  },
  {
    "alias": "potted_plant",
    "unicode": "🪴",
  },
  {
    "alias": "pouch",
    "unicode": "👝",
  },
  {
    "alias": "poultry_leg",
    "unicode": "🍗",
  },
  {
    "alias": "pound",
    "unicode": "💷",
  },
  {
    "alias": "pouting_cat",
    "unicode": "😾",
  },
  {
    "alias": "pouting_face",
    "unicode": "🙎",
  },
  {
    "alias": "pouting_man",
    "unicode": "🙎‍♂",
  },
  {
    "alias": "pouting_woman",
    "unicode": "🙎",
  },
  {
    "alias": "pray",
    "unicode": "🙏",
  },
  {
    "alias": "prayer_beads",
    "unicode": "📿",
  },
  {
    "alias": "pregnant_woman",
    "unicode": "🤰",
  },
  {
    "alias": "pretzel",
    "unicode": "🥨",
  },
  {
    "alias": "previous_track_button",
    "unicode": "⏮",
  },
  {
    "alias": "prince",
    "unicode": "🤴",
  },
  {
    "alias": "princess",
    "unicode": "👸",
  },
  {
    "alias": "printer",
    "unicode": "🖨",
  },
  {
    "alias": "probing_cane",
    "unicode": "🦯",
  },
  {
    "alias": "puerto_rico",
    "unicode": "🇵🇷",
  },
  {
    "alias": "purple_circle",
    "unicode": "🟣",
  },
  {
    "alias": "purple_heart",
    "unicode": "💜",
  },
  {
    "alias": "purple_square",
    "unicode": "🟪",
  },
  {
    "alias": "purse",
    "unicode": "👛",
  },
  {
    "alias": "pushpin",
    "unicode": "📌",
  },
  {
    "alias": "put_litter_in_its_place",
    "unicode": "🚮",
  },
  {
    "alias": "qatar",
    "unicode": "🇶🇦",
  },
  {
    "alias": "question",
    "unicode": "❓",
  },
  {
    "alias": "rabbit",
    "unicode": "🐰",
  },
  {
    "alias": "rabbit2",
    "unicode": "🐇",
  },
  {
    "alias": "raccoon",
    "unicode": "🦝",
  },
  {
    "alias": "racehorse",
    "unicode": "🐎",
  },
  {
    "alias": "racing_car",
    "unicode": "🏎",
  },
  {
    "alias": "radio",
    "unicode": "📻",
  },
  {
    "alias": "radio_button",
    "unicode": "🔘",
  },
  {
    "alias": "radioactive",
    "unicode": "☢️",
  },
  {
    "alias": [
      "rage",
      "pout"
    ],
    "unicode": "😡",
  },
  {
    "alias": "rage1",
    "unicode": false,
  },
  {
    "alias": "rage2",
    "unicode": false,
  },
  {
    "alias": "rage3",
    "unicode": false,
  },
  {
    "alias": "rage4",
    "unicode": false,
  },
  {
    "alias": "railway_car",
    "unicode": "🚃",
  },
  {
    "alias": "railway_track",
    "unicode": "🛤",
  },
  {
    "alias": "rainbow",
    "unicode": "🌈",
  },
  {
    "alias": "rainbow_flag",
    "unicode": "🏳️‍🌈",
  },
  {
    "alias": "raised_back_of_hand",
    "unicode": "🤚",
  },
  {
    "alias": "raised_eyebrow",
    "unicode": "🤨",
  },
  {
    "alias": "raised_hand_with_fingers_splayed",
    "unicode": "🖐",
  },
  {
    "alias": "raised_hands",
    "unicode": "🙌",
  },
  {
    "alias": "raising_hand_man",
    "unicode": "🙋‍♂",
  },
  {
    "alias": [
      "raising_hand_woman",
      "raising_hand"
    ],
    "unicode": "🙋",
  },
  {
    "alias": "ram",
    "unicode": "🐏",
  },
  {
    "alias": "ramen",
    "unicode": "🍜",
  },
  {
    "alias": "rat",
    "unicode": "🐀",
  },
  {
    "alias": "razor",
    "unicode": "🪒",
  },
  {
    "alias": "receipt",
    "unicode": "🧾",
  },
  {
    "alias": "record_button",
    "unicode": "⏺",
  },
  {
    "alias": "recycle",
    "unicode": "♻️",
  },
  {
    "alias": "red_circle",
    "unicode": "🔴",
  },
  {
    "alias": "red_envelope",
    "unicode": "🧧",
  },
  {
    "alias": "red_haired_man",
    "unicode": "👨‍🦰",
  },
  {
    "alias": "red_haired_woman",
    "unicode": "👩‍🦰",
  },
  {
    "alias": "red_square",
    "unicode": "🟥",
  },
  {
    "alias": "registered",
    "unicode": "®️",
  },
  {
    "alias": "relaxed",
    "unicode": "☺️",
  },
  {
    "alias": "relieved",
    "unicode": "😌",
  },
  {
    "alias": "reminder_ribbon",
    "unicode": "🎗",
  },
  {
    "alias": "repeat",
    "unicode": "🔁",
  },
  {
    "alias": "repeat_one",
    "unicode": "🔂",
  },
  {
    "alias": "rescue_worker_helmet",
    "unicode": "⛑",
  },
  {
    "alias": "restroom",
    "unicode": "🚻",
  },
  {
    "alias": "reunion",
    "unicode": "🇷🇪",
  },
  {
    "alias": "revolving_hearts",
    "unicode": "💞",
  },
  {
    "alias": "rewind",
    "unicode": "⏪",
  },
  {
    "alias": "rhinoceros",
    "unicode": "🦏",
  },
  {
    "alias": "ribbon",
    "unicode": "🎀",
  },
  {
    "alias": "rice",
    "unicode": "🍚",
  },
  {
    "alias": "rice_ball",
    "unicode": "🍙",
  },
  {
    "alias": "rice_cracker",
    "unicode": "🍘",
  },
  {
    "alias": "rice_scene",
    "unicode": "🎑",
  },
  {
    "alias": "right_anger_bubble",
    "unicode": "🗯",
  },
  {
    "alias": "ring",
    "unicode": "💍",
  },
  {
    "alias": "ringed_planet",
    "unicode": "🪐",
  },
  {
    "alias": "robot",
    "unicode": "🤖",
  },
  {
    "alias": "rock",
    "unicode": "🪨",
  },
  {
    "alias": "rocket",
    "unicode": "🚀",
  },
  {
    "alias": "rofl",
    "unicode": "🤣",
  },
  {
    "alias": "roll_eyes",
    "unicode": "🙄",
  },
  {
    "alias": "roll_of_paper",
    "unicode": "🧻",
  },
  {
    "alias": "roller_coaster",
    "unicode": "🎢",
  },
  {
    "alias": "roller_skate",
    "unicode": "🛼",
  },
  {
    "alias": "romania",
    "unicode": "🇷🇴",
  },
  {
    "alias": "rooster",
    "unicode": "🐓",
  },
  {
    "alias": "rose",
    "unicode": "🌹",
  },
  {
    "alias": "rosette",
    "unicode": "🏵",
  },
  {
    "alias": "rotating_light",
    "unicode": "🚨",
  },
  {
    "alias": "round_pushpin",
    "unicode": "📍",
  },
  {
    "alias": [
      "rowing_man",
      "rowboat"
    ],
    "unicode": "🚣",
  },
  {
    "alias": "rowing_woman",
    "unicode": "🚣‍♀",
  },
  {
    "alias": "ru",
    "unicode": "🇷🇺",
  },
  {
    "alias": "rugby_football",
    "unicode": "🏉",
  },
  {
    "alias": [
      "running_man",
      "runner",
      "running"
    ],
    "unicode": "🏃",
  },
  {
    "alias": "running_shirt_with_sash",
    "unicode": "🎽",
  },
  {
    "alias": "running_woman",
    "unicode": "🏃‍♀",
  },
  {
    "alias": "rwanda",
    "unicode": "🇷🇼",
  },
  {
    "alias": "sa",
    "unicode": "🈂️",
  },
  {
    "alias": "safety_pin",
    "unicode": "🧷",
  },
  {
    "alias": "safety_vest",
    "unicode": "🦺",
  },
  {
    "alias": "sagittarius",
    "unicode": "♐️",
  },
  {
    "alias": "sake",
    "unicode": "🍶",
  },
  {
    "alias": "salt",
    "unicode": "🧂",
  },
  {
    "alias": "samoa",
    "unicode": "🇼🇸",
  },
  {
    "alias": "san_marino",
    "unicode": "🇸🇲",
  },
  {
    "alias": "sandal",
    "unicode": "👡",
  },
  {
    "alias": "sandwich",
    "unicode": "🥪",
  },
  {
    "alias": "santa",
    "unicode": "🎅",
  },
  {
    "alias": "sao_tome_principe",
    "unicode": "🇸🇹",
  },
  {
    "alias": "sari",
    "unicode": "🥻",
  },
  {
    "alias": "satellite",
    "unicode": "📡",
  },
  {
    "alias": "saudi_arabia",
    "unicode": "🇸🇦",
  },
  {
    "alias": "sauna_man",
    "unicode": "🧖‍♂️",
  },
  {
    "alias": "sauna_person",
    "unicode": "🧖",
  },
  {
    "alias": "sauna_woman",
    "unicode": "🧖‍♀️",
  },
  {
    "alias": "sauropod",
    "unicode": "🦕",
  },
  {
    "alias": "saxophone",
    "unicode": "🎷",
  },
  {
    "alias": "scarf",
    "unicode": "🧣",
  },
  {
    "alias": "school",
    "unicode": "🏫",
  },
  {
    "alias": "school_satchel",
    "unicode": "🎒",
  },
  {
    "alias": "scientist",
    "unicode": "🧑‍🔬",
  },
  {
    "alias": "scissors",
    "unicode": "✂️",
  },
  {
    "alias": "scorpion",
    "unicode": "🦂",
  },
  {
    "alias": "scorpius",
    "unicode": "♏️",
  },
  {
    "alias": "scotland",
    "unicode": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  },
  {
    "alias": "scream",
    "unicode": "😱",
  },
  {
    "alias": "scream_cat",
    "unicode": "🙀",
  },
  {
    "alias": "screwdriver",
    "unicode": "🪛",
  },
  {
    "alias": "scroll",
    "unicode": "📜",
  },
  {
    "alias": "seal",
    "unicode": "🦭",
  },
  {
    "alias": "seat",
    "unicode": "💺",
  },
  {
    "alias": "secret",
    "unicode": "㊙️",
  },
  {
    "alias": "see_no_evil",
    "unicode": "🙈",
  },
  {
    "alias": "seedling",
    "unicode": "🌱",
  },
  {
    "alias": "selfie",
    "unicode": "🤳",
  },
  {
    "alias": "senegal",
    "unicode": "🇸🇳",
  },
  {
    "alias": "serbia",
    "unicode": "🇷🇸",
  },
  {
    "alias": "service_dog",
    "unicode": "🐕‍🦺",
  },
  {
    "alias": "seven",
    "unicode": "7️⃣",
  },
  {
    "alias": "sewing_needle",
    "unicode": "🪡",
  },
  {
    "alias": "seychelles",
    "unicode": "🇸🇨",
  },
  {
    "alias": "shallow_pan_of_food",
    "unicode": "🥘",
  },
  {
    "alias": "shamrock",
    "unicode": "☘️",
  },
  {
    "alias": "shark",
    "unicode": "🦈",
  },
  {
    "alias": "shaved_ice",
    "unicode": "🍧",
  },
  {
    "alias": "sheep",
    "unicode": "🐑",
  },
  {
    "alias": "shell",
    "unicode": "🐚",
  },
  {
    "alias": "shield",
    "unicode": "🛡",
  },
  {
    "alias": "shinto_shrine",
    "unicode": "⛩",
  },
  {
    "alias": "ship",
    "unicode": "🚢",
  },
  {
    "alias": "shipit",
    "unicode": false,
  },
  {
    "alias": [
      "shirt",
      "tshirt"
    ],
    "unicode": "👕",
  },
  {
    "alias": [
      "shoe",
      "mans_shoe"
    ],
    "unicode": "👞",
  },
  {
    "alias": "shopping",
    "unicode": "🛍",
  },
  {
    "alias": "shopping_cart",
    "unicode": "🛒",
  },
  {
    "alias": "shorts",
    "unicode": "🩳",
  },
  {
    "alias": "shower",
    "unicode": "🚿",
  },
  {
    "alias": "shrimp",
    "unicode": "🦐",
  },
  {
    "alias": "shrug",
    "unicode": "🤷",
  },
  {
    "alias": "shushing_face",
    "unicode": "🤫",
  },
  {
    "alias": "sierra_leone",
    "unicode": "🇸🇱",
  },
  {
    "alias": "signal_strength",
    "unicode": "📶",
  },
  {
    "alias": "singapore",
    "unicode": "🇸🇬",
  },
  {
    "alias": "singer",
    "unicode": "🧑‍🎤",
  },
  {
    "alias": "sint_maarten",
    "unicode": "🇸🇽",
  },
  {
    "alias": "six",
    "unicode": "6️⃣",
  },
  {
    "alias": "six_pointed_star",
    "unicode": "🔯",
  },
  {
    "alias": "skateboard",
    "unicode": "🛹",
  },
  {
    "alias": "ski",
    "unicode": "🎿",
  },
  {
    "alias": "skier",
    "unicode": "⛷",
  },
  {
    "alias": "skull",
    "unicode": "💀",
  },
  {
    "alias": "skull_and_crossbones",
    "unicode": "☠️",
  },
  {
    "alias": "skunk",
    "unicode": "🦨",
  },
  {
    "alias": "sled",
    "unicode": "🛷",
  },
  {
    "alias": "sleeping",
    "unicode": "😴",
  },
  {
    "alias": "sleeping_bed",
    "unicode": "🛌",
  },
  {
    "alias": "sleepy",
    "unicode": "😪",
  },
  {
    "alias": "slightly_frowning_face",
    "unicode": "🙁",
  },
  {
    "alias": "slightly_smiling_face",
    "unicode": "🙂",
  },
  {
    "alias": "slot_machine",
    "unicode": "🎰",
  },
  {
    "alias": "sloth",
    "unicode": "🦥",
  },
  {
    "alias": "slovakia",
    "unicode": "🇸🇰",
  },
  {
    "alias": "slovenia",
    "unicode": "🇸🇮",
  },
  {
    "alias": "small_airplane",
    "unicode": "🛩",
  },
  {
    "alias": "small_blue_diamond",
    "unicode": "🔹",
  },
  {
    "alias": "small_orange_diamond",
    "unicode": "🔸",
  },
  {
    "alias": "small_red_triangle",
    "unicode": "🔺",
  },
  {
    "alias": "small_red_triangle_down",
    "unicode": "🔻",
  },
  {
    "alias": "smile",
    "unicode": "😄",
  },
  {
    "alias": "smile_cat",
    "unicode": "😸",
  },
  {
    "alias": "smiley",
    "unicode": "😃",
  },
  {
    "alias": "smiley_cat",
    "unicode": "😺",
  },
  {
    "alias": "smiling_face_with_tear",
    "unicode": "🥲",
  },
  {
    "alias": "smiling_face_with_three_hearts",
    "unicode": "🥰",
  },
  {
    "alias": "smiling_imp",
    "unicode": "😈",
  },
  {
    "alias": "smirk",
    "unicode": "😏",
  },
  {
    "alias": "smirk_cat",
    "unicode": "😼",
  },
  {
    "alias": "smoking",
    "unicode": "🚬",
  },
  {
    "alias": "snail",
    "unicode": "🐌",
  },
  {
    "alias": "snake",
    "unicode": "🐍",
  },
  {
    "alias": "sneezing_face",
    "unicode": "🤧",
  },
  {
    "alias": "snowboarder",
    "unicode": "🏂",
  },
  {
    "alias": "snowflake",
    "unicode": "❄️",
  },
  {
    "alias": "snowman",
    "unicode": "⛄️",
  },
  {
    "alias": "snowman_with_snow",
    "unicode": "☃️",
  },
  {
    "alias": "soap",
    "unicode": "🧼",
  },
  {
    "alias": "sob",
    "unicode": "😭",
  },
  {
    "alias": "soccer",
    "unicode": "⚽️",
  },
  {
    "alias": "socks",
    "unicode": "🧦",
  },
  {
    "alias": "softball",
    "unicode": "🥎",
  },
  {
    "alias": "solomon_islands",
    "unicode": "🇸🇧",
  },
  {
    "alias": "somalia",
    "unicode": "🇸🇴",
  },
  {
    "alias": "soon",
    "unicode": "🔜",
  },
  {
    "alias": "sos",
    "unicode": "🆘",
  },
  {
    "alias": "sound",
    "unicode": "🔉",
  },
  {
    "alias": "south_africa",
    "unicode": "🇿🇦",
  },
  {
    "alias": "south_georgia_south_sandwich_islands",
    "unicode": "🇬🇸",
  },
  {
    "alias": "south_sudan",
    "unicode": "🇸🇸",
  },
  {
    "alias": "space_invader",
    "unicode": "👾",
  },
  {
    "alias": "spades",
    "unicode": "♠️",
  },
  {
    "alias": "spaghetti",
    "unicode": "🍝",
  },
  {
    "alias": "sparkle",
    "unicode": "❇️",
  },
  {
    "alias": "sparkler",
    "unicode": "🎇",
  },
  {
    "alias": "sparkles",
    "unicode": "✨",
  },
  {
    "alias": "sparkling_heart",
    "unicode": "💖",
  },
  {
    "alias": "speak_no_evil",
    "unicode": "🙊",
  },
  {
    "alias": "speaker",
    "unicode": "🔈",
  },
  {
    "alias": "speaking_head",
    "unicode": "🗣",
  },
  {
    "alias": "speech_balloon",
    "unicode": "💬",
  },
  {
    "alias": "speedboat",
    "unicode": "🚤",
  },
  {
    "alias": "spider",
    "unicode": "🕷",
  },
  {
    "alias": "spider_web",
    "unicode": "🕸",
  },
  {
    "alias": "spiral_calendar",
    "unicode": "🗓",
  },
  {
    "alias": "spiral_notepad",
    "unicode": "🗒",
  },
  {
    "alias": "sponge",
    "unicode": "🧽",
  },
  {
    "alias": "spoon",
    "unicode": "🥄",
  },
  {
    "alias": "squid",
    "unicode": "🦑",
  },
  {
    "alias": "sri_lanka",
    "unicode": "🇱🇰",
  },
  {
    "alias": "st_barthelemy",
    "unicode": "🇧🇱",
  },
  {
    "alias": "st_helena",
    "unicode": "🇸🇭",
  },
  {
    "alias": "st_kitts_nevis",
    "unicode": "🇰🇳",
  },
  {
    "alias": "st_lucia",
    "unicode": "🇱🇨",
  },
  {
    "alias": "st_martin",
    "unicode": "🇲🇫",
  },
  {
    "alias": "st_pierre_miquelon",
    "unicode": "🇵🇲",
  },
  {
    "alias": "st_vincent_grenadines",
    "unicode": "🇻🇨",
  },
  {
    "alias": "stadium",
    "unicode": "🏟",
  },
  {
    "alias": "standing_man",
    "unicode": "🧍‍♂️",
  },
  {
    "alias": "standing_person",
    "unicode": "🧍",
  },
  {
    "alias": "standing_woman",
    "unicode": "🧍‍♀️",
  },
  {
    "alias": "star",
    "unicode": "⭐️",
  },
  {
    "alias": "star2",
    "unicode": "🌟",
  },
  {
    "alias": "star_and_crescent",
    "unicode": "☪️",
  },
  {
    "alias": "star_of_david",
    "unicode": "✡️",
  },
  {
    "alias": "star_struck",
    "unicode": "🤩",
  },
  {
    "alias": "stars",
    "unicode": "🌠",
  },
  {
    "alias": "station",
    "unicode": "🚉",
  },
  {
    "alias": "statue_of_liberty",
    "unicode": "🗽",
  },
  {
    "alias": "steam_locomotive",
    "unicode": "🚂",
  },
  {
    "alias": "stethoscope",
    "unicode": "🩺",
  },
  {
    "alias": "stew",
    "unicode": "🍲",
  },
  {
    "alias": "stop_button",
    "unicode": "⏹",
  },
  {
    "alias": "stop_sign",
    "unicode": "🛑",
  },
  {
    "alias": "stopwatch",
    "unicode": "⏱",
  },
  {
    "alias": "straight_ruler",
    "unicode": "📏",
  },
  {
    "alias": "strawberry",
    "unicode": "🍓",
  },
  {
    "alias": "stuck_out_tongue",
    "unicode": "😛",
  },
  {
    "alias": "stuck_out_tongue_closed_eyes",
    "unicode": "😝",
  },
  {
    "alias": "stuck_out_tongue_winking_eye",
    "unicode": "😜",
  },
  {
    "alias": "student",
    "unicode": "🧑‍🎓",
  },
  {
    "alias": "studio_microphone",
    "unicode": "🎙",
  },
  {
    "alias": "stuffed_flatbread",
    "unicode": "🥙",
  },
  {
    "alias": "sudan",
    "unicode": "🇸🇩",
  },
  {
    "alias": "sun_behind_large_cloud",
    "unicode": "🌥",
  },
  {
    "alias": "sun_behind_rain_cloud",
    "unicode": "🌦",
  },
  {
    "alias": "sun_behind_small_cloud",
    "unicode": "🌤",
  },
  {
    "alias": "sun_with_face",
    "unicode": "🌞",
  },
  {
    "alias": "sunflower",
    "unicode": "🌻",
  },
  {
    "alias": "sunglasses",
    "unicode": "😎",
  },
  {
    "alias": "sunny",
    "unicode": "☀️",
  },
  {
    "alias": "sunrise",
    "unicode": "🌅",
  },
  {
    "alias": "sunrise_over_mountains",
    "unicode": "🌄",
  },
  {
    "alias": "superhero",
    "unicode": "🦸",
  },
  {
    "alias": "superhero_man",
    "unicode": "🦸‍♂️",
  },
  {
    "alias": "superhero_woman",
    "unicode": "🦸‍♀️",
  },
  {
    "alias": "supervillain",
    "unicode": "🦹",
  },
  {
    "alias": "supervillain_man",
    "unicode": "🦹‍♂️",
  },
  {
    "alias": "supervillain_woman",
    "unicode": "🦹‍♀️",
  },
  {
    "alias": [
      "surfing_man",
      "surfer"
    ],
    "unicode": "🏄",
  },
  {
    "alias": "surfing_woman",
    "unicode": "🏄‍♀",
  },
  {
    "alias": "suriname",
    "unicode": "🇸🇷",
  },
  {
    "alias": "sushi",
    "unicode": "🍣",
  },
  {
    "alias": "suspect",
    "unicode": false,
  },
  {
    "alias": "suspension_railway",
    "unicode": "🚟",
  },
  {
    "alias": "svalbard_jan_mayen",
    "unicode": "🇸🇯",
  },
  {
    "alias": "swan",
    "unicode": "🦢",
  },
  {
    "alias": "swaziland",
    "unicode": "🇸🇿",
  },
  {
    "alias": "sweat",
    "unicode": "😓",
  },
  {
    "alias": "sweat_drops",
    "unicode": "💦",
  },
  {
    "alias": "sweat_smile",
    "unicode": "😅",
  },
  {
    "alias": "sweden",
    "unicode": "🇸🇪",
  },
  {
    "alias": "sweet_potato",
    "unicode": "🍠",
  },
  {
    "alias": "swim_brief",
    "unicode": "🩲",
  },
  {
    "alias": [
      "swimming_man",
      "swimmer"
    ],
    "unicode": "🏊",
  },
  {
    "alias": "swimming_woman",
    "unicode": "🏊‍♀",
  },
  {
    "alias": "switzerland",
    "unicode": "🇨🇭",
  },
  {
    "alias": "symbols",
    "unicode": "🔣",
  },
  {
    "alias": "synagogue",
    "unicode": "🕍",
  },
  {
    "alias": "syria",
    "unicode": "🇸🇾",
  },
  {
    "alias": "syringe",
    "unicode": "💉",
  },
  {
    "alias": "t-rex",
    "unicode": "🦖",
  },
  {
    "alias": "taco",
    "unicode": "🌮",
  },
  {
    "alias": "tada",
    "unicode": "🎉",
  },
  {
    "alias": "taiwan",
    "unicode": "🇹🇼",
  },
  {
    "alias": "tajikistan",
    "unicode": "🇹🇯",
  },
  {
    "alias": "takeout_box",
    "unicode": "🥡",
  },
  {
    "alias": "tamale",
    "unicode": "🫔",
  },
  {
    "alias": "tanabata_tree",
    "unicode": "🎋",
  },
  {
    "alias": [
      "tangerine",
      "mandarin",
      "orange"
    ],
    "unicode": "🍊",
  },
  {
    "alias": "tanzania",
    "unicode": "🇹🇿",
  },
  {
    "alias": "taurus",
    "unicode": "♉️",
  },
  {
    "alias": "taxi",
    "unicode": "🚕",
  },
  {
    "alias": "tea",
    "unicode": "🍵",
  },
  {
    "alias": "teacher",
    "unicode": "🧑‍🏫",
  },
  {
    "alias": "teapot",
    "unicode": "🫖",
  },
  {
    "alias": "technologist",
    "unicode": "🧑‍💻",
  },
  {
    "alias": "teddy_bear",
    "unicode": "🧸",
  },
  {
    "alias": "telephone_receiver",
    "unicode": "📞",
  },
  {
    "alias": "telescope",
    "unicode": "🔭",
  },
  {
    "alias": "tennis",
    "unicode": "🎾",
  },
  {
    "alias": "tent",
    "unicode": "⛺️",
  },
  {
    "alias": "test_tube",
    "unicode": "🧪",
  },
  {
    "alias": "thailand",
    "unicode": "🇹🇭",
  },
  {
    "alias": "thermometer",
    "unicode": "🌡",
  },
  {
    "alias": "thinking",
    "unicode": "🤔",
  },
  {
    "alias": "thong_sandal",
    "unicode": "🩴",
  },
  {
    "alias": "thought_balloon",
    "unicode": "💭",
  },
  {
    "alias": "thread",
    "unicode": "🧵",
  },
  {
    "alias": "three",
    "unicode": "3️⃣",
  },
  {
    "alias": "ticket",
    "unicode": "🎫",
  },
  {
    "alias": "tickets",
    "unicode": "🎟",
  },
  {
    "alias": "tiger",
    "unicode": "🐯",
  },
  {
    "alias": "tiger2",
    "unicode": "🐅",
  },
  {
    "alias": "timer_clock",
    "unicode": "⏲",
  },
  {
    "alias": "timor_leste",
    "unicode": "🇹🇱",
  },
  {
    "alias": [
      "tipping_hand_man",
      "sassy_man"
    ],
    "unicode": "💁‍♂",
  },
  {
    "alias": "tipping_hand_person",
    "unicode": "💁",
  },
  {
    "alias": [
      "tipping_hand_woman",
      "information_desk_person",
      "sassy_woman"
    ],
    "unicode": "💁",
  },
  {
    "alias": "tired_face",
    "unicode": "😫",
  },
  {
    "alias": "tm",
    "unicode": "™️",
  },
  {
    "alias": "togo",
    "unicode": "🇹🇬",
  },
  {
    "alias": "toilet",
    "unicode": "🚽",
  },
  {
    "alias": "tokelau",
    "unicode": "🇹🇰",
  },
  {
    "alias": "tokyo_tower",
    "unicode": "🗼",
  },
  {
    "alias": "tomato",
    "unicode": "🍅",
  },
  {
    "alias": "tonga",
    "unicode": "🇹🇴",
  },
  {
    "alias": "tongue",
    "unicode": "👅",
  },
  {
    "alias": "toolbox",
    "unicode": "🧰",
  },
  {
    "alias": "tooth",
    "unicode": "🦷",
  },
  {
    "alias": "toothbrush",
    "unicode": "🪥",
  },
  {
    "alias": "top",
    "unicode": "🔝",
  },
  {
    "alias": "tophat",
    "unicode": "🎩",
  },
  {
    "alias": "tornado",
    "unicode": "🌪",
  },
  {
    "alias": "tr",
    "unicode": "🇹🇷",
  },
  {
    "alias": "trackball",
    "unicode": "🖲",
  },
  {
    "alias": "tractor",
    "unicode": "🚜",
  },
  {
    "alias": "traffic_light",
    "unicode": "🚥",
  },
  {
    "alias": "train",
    "unicode": "🚋",
  },
  {
    "alias": "train2",
    "unicode": "🚆",
  },
  {
    "alias": "tram",
    "unicode": "🚊",
  },
  {
    "alias": "transgender_flag",
    "unicode": "🏳️‍⚧️",
  },
  {
    "alias": "transgender_symbol",
    "unicode": "⚧️",
  },
  {
    "alias": "triangular_flag_on_post",
    "unicode": "🚩",
  },
  {
    "alias": "triangular_ruler",
    "unicode": "📐",
  },
  {
    "alias": "trident",
    "unicode": "🔱",
  },
  {
    "alias": "trinidad_tobago",
    "unicode": "🇹🇹",
  },
  {
    "alias": "tristan_da_cunha",
    "unicode": "🇹🇦",
  },
  {
    "alias": "triumph",
    "unicode": "😤",
  },
  {
    "alias": "trolleybus",
    "unicode": "🚎",
  },
  {
    "alias": "trollface",
    "unicode": false,
  },
  {
    "alias": "trophy",
    "unicode": "🏆",
  },
  {
    "alias": "tropical_drink",
    "unicode": "🍹",
  },
  {
    "alias": "tropical_fish",
    "unicode": "🐠",
  },
  {
    "alias": "truck",
    "unicode": "🚚",
  },
  {
    "alias": "trumpet",
    "unicode": "🎺",
  },
  {
    "alias": "tulip",
    "unicode": "🌷",
  },
  {
    "alias": "tumbler_glass",
    "unicode": "🥃",
  },
  {
    "alias": "tunisia",
    "unicode": "🇹🇳",
  },
  {
    "alias": "turkey",
    "unicode": "🦃",
  },
  {
    "alias": "turkmenistan",
    "unicode": "🇹🇲",
  },
  {
    "alias": "turks_caicos_islands",
    "unicode": "🇹🇨",
  },
  {
    "alias": "turtle",
    "unicode": "🐢",
  },
  {
    "alias": "tuvalu",
    "unicode": "🇹🇻",
  },
  {
    "alias": "tv",
    "unicode": "📺",
  },
  {
    "alias": "twisted_rightwards_arrows",
    "unicode": "🔀",
  },
  {
    "alias": "two",
    "unicode": "2️⃣",
  },
  {
    "alias": "two_hearts",
    "unicode": "💕",
  },
  {
    "alias": "two_men_holding_hands",
    "unicode": "👬",
  },
  {
    "alias": "two_women_holding_hands",
    "unicode": "👭",
  },
  {
    "alias": "u5272",
    "unicode": "🈹",
  },
  {
    "alias": "u5408",
    "unicode": "🈴",
  },
  {
    "alias": "u55b6",
    "unicode": "🈺",
  },
  {
    "alias": "u6307",
    "unicode": "🈯️",
  },
  {
    "alias": "u6708",
    "unicode": "🈷️",
  },
  {
    "alias": "u6709",
    "unicode": "🈶",
  },
  {
    "alias": "u6e80",
    "unicode": "🈵",
  },
  {
    "alias": "u7121",
    "unicode": "🈚️",
  },
  {
    "alias": "u7533",
    "unicode": "🈸",
  },
  {
    "alias": "u7981",
    "unicode": "🈲",
  },
  {
    "alias": "u7a7a",
    "unicode": "🈳",
  },
  {
    "alias": "uganda",
    "unicode": "🇺🇬",
  },
  {
    "alias": "ukraine",
    "unicode": "🇺🇦",
  },
  {
    "alias": "umbrella",
    "unicode": "☔️",
  },
  {
    "alias": "unamused",
    "unicode": "😒",
  },
  {
    "alias": "underage",
    "unicode": "🔞",
  },
  {
    "alias": "unicorn",
    "unicode": "🦄",
  },
  {
    "alias": "united_arab_emirates",
    "unicode": "🇦🇪",
  },
  {
    "alias": "united_nations",
    "unicode": "🇺🇳",
  },
  {
    "alias": "unlock",
    "unicode": "🔓",
  },
  {
    "alias": "up",
    "unicode": "🆙",
  },
  {
    "alias": "upside_down_face",
    "unicode": "🙃",
  },
  {
    "alias": "uruguay",
    "unicode": "🇺🇾",
  },
  {
    "alias": "us",
    "unicode": "🇺🇸",
  },
  {
    "alias": "us_outlying_islands",
    "unicode": "🇺🇲",
  },
  {
    "alias": "us_virgin_islands",
    "unicode": "🇻🇮",
  },
  {
    "alias": "uzbekistan",
    "unicode": "🇺🇿",
  },
  {
    "alias": "v",
    "unicode": "✌️",
  },
  {
    "alias": "vampire",
    "unicode": "🧛",
  },
  {
    "alias": "vampire_man",
    "unicode": "🧛‍♂️",
  },
  {
    "alias": "vampire_woman",
    "unicode": "🧛‍♀️",
  },
  {
    "alias": "vanuatu",
    "unicode": "🇻🇺",
  },
  {
    "alias": "vatican_city",
    "unicode": "🇻🇦",
  },
  {
    "alias": "venezuela",
    "unicode": "🇻🇪",
  },
  {
    "alias": "vertical_traffic_light",
    "unicode": "🚦",
  },
  {
    "alias": "vhs",
    "unicode": "📼",
  },
  {
    "alias": "vibration_mode",
    "unicode": "📳",
  },
  {
    "alias": "video_camera",
    "unicode": "📹",
  },
  {
    "alias": "video_game",
    "unicode": "🎮",
  },
  {
    "alias": "vietnam",
    "unicode": "🇻🇳",
  },
  {
    "alias": "violin",
    "unicode": "🎻",
  },
  {
    "alias": "virgo",
    "unicode": "♍️",
  },
  {
    "alias": "volcano",
    "unicode": "🌋",
  },
  {
    "alias": "volleyball",
    "unicode": "🏐",
  },
  {
    "alias": "vomiting_face",
    "unicode": "🤮",
  },
  {
    "alias": "vs",
    "unicode": "🆚",
  },
  {
    "alias": "vulcan_salute",
    "unicode": "🖖",
  },
  {
    "alias": "waffle",
    "unicode": "🧇",
  },
  {
    "alias": "wales",
    "unicode": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
  },
  {
    "alias": [
      "walking_man",
      "walking"
    ],
    "unicode": "🚶",
  },
  {
    "alias": "walking_woman",
    "unicode": "🚶‍♀",
  },
  {
    "alias": "wallis_futuna",
    "unicode": "🇼🇫",
  },
  {
    "alias": "waning_crescent_moon",
    "unicode": "🌘",
  },
  {
    "alias": "waning_gibbous_moon",
    "unicode": "🌖",
  },
  {
    "alias": "warning",
    "unicode": "⚠️",
  },
  {
    "alias": "wastebasket",
    "unicode": "🗑",
  },
  {
    "alias": "watch",
    "unicode": "⌚️",
  },
  {
    "alias": "water_buffalo",
    "unicode": "🐃",
  },
  {
    "alias": "water_polo",
    "unicode": "🤽",
  },
  {
    "alias": "watermelon",
    "unicode": "🍉",
  },
  {
    "alias": "wave",
    "unicode": "👋",
  },
  {
    "alias": "wavy_dash",
    "unicode": "〰️",
  },
  {
    "alias": "waxing_crescent_moon",
    "unicode": "🌒",
  },
  {
    "alias": "wc",
    "unicode": "🚾",
  },
  {
    "alias": "weary",
    "unicode": "😩",
  },
  {
    "alias": "wedding",
    "unicode": "💒",
  },
  {
    "alias": "weight_lifting",
    "unicode": "🏋️",
  },
  {
    "alias": "weight_lifting_man",
    "unicode": "🏋",
  },
  {
    "alias": "weight_lifting_woman",
    "unicode": "🏋️‍♀️",
  },
  {
    "alias": "western_sahara",
    "unicode": "🇪🇭",
  },
  {
    "alias": "whale",
    "unicode": "🐳",
  },
  {
    "alias": "whale2",
    "unicode": "🐋",
  },
  {
    "alias": "wheel_of_dharma",
    "unicode": "☸️",
  },
  {
    "alias": "wheelchair",
    "unicode": "♿️",
  },
  {
    "alias": "white_check_mark",
    "unicode": "✅",
  },
  {
    "alias": "white_circle",
    "unicode": "⚪️",
  },
  {
    "alias": "white_flag",
    "unicode": "🏳️",
  },
  {
    "alias": "white_flower",
    "unicode": "💮",
  },
  {
    "alias": "white_haired_man",
    "unicode": "👨‍🦳",
  },
  {
    "alias": "white_haired_woman",
    "unicode": "👩‍🦳",
  },
  {
    "alias": "white_heart",
    "unicode": "🤍",
  },
  {
    "alias": "white_large_square",
    "unicode": "⬜️",
  },
  {
    "alias": "white_medium_small_square",
    "unicode": "◽️",
  },
  {
    "alias": "white_medium_square",
    "unicode": "◻️",
  },
  {
    "alias": "white_small_square",
    "unicode": "▫️",
  },
  {
    "alias": "white_square_button",
    "unicode": "🔳",
  },
  {
    "alias": "wilted_flower",
    "unicode": "🥀",
  },
  {
    "alias": "wind_chime",
    "unicode": "🎐",
  },
  {
    "alias": "wind_face",
    "unicode": "🌬",
  },
  {
    "alias": "window",
    "unicode": "🪟",
  },
  {
    "alias": "wine_glass",
    "unicode": "🍷",
  },
  {
    "alias": "wink",
    "unicode": "😉",
  },
  {
    "alias": "wolf",
    "unicode": "🐺",
  },
  {
    "alias": "woman",
    "unicode": "👩",
  },
  {
    "alias": "woman_artist",
    "unicode": "👩‍🎨",
  },
  {
    "alias": "woman_astronaut",
    "unicode": "👩‍🚀",
  },
  {
    "alias": "woman_beard",
    "unicode": "🧔‍♀️",
  },
  {
    "alias": "woman_cartwheeling",
    "unicode": "🤸‍♀",
  },
  {
    "alias": "woman_cook",
    "unicode": "👩‍🍳",
  },
  {
    "alias": "woman_dancing",
    "unicode": "💃",
  },
  {
    "alias": "woman_facepalming",
    "unicode": "🤦‍♀",
  },
  {
    "alias": "woman_factory_worker",
    "unicode": "👩‍🏭",
  },
  {
    "alias": "woman_farmer",
    "unicode": "👩‍🌾",
  },
  {
    "alias": "woman_feeding_baby",
    "unicode": "👩‍🍼",
  },
  {
    "alias": "woman_firefighter",
    "unicode": "👩‍🚒",
  },
  {
    "alias": "woman_health_worker",
    "unicode": "👩‍⚕",
  },
  {
    "alias": "woman_in_manual_wheelchair",
    "unicode": "👩‍🦽",
  },
  {
    "alias": "woman_in_motorized_wheelchair",
    "unicode": "👩‍🦼",
  },
  {
    "alias": "woman_in_tuxedo",
    "unicode": "🤵‍♀️",
  },
  {
    "alias": "woman_judge",
    "unicode": "👩‍⚖",
  },
  {
    "alias": "woman_juggling",
    "unicode": "🤹‍♀",
  },
  {
    "alias": "woman_mechanic",
    "unicode": "👩‍🔧",
  },
  {
    "alias": "woman_office_worker",
    "unicode": "👩‍💼",
  },
  {
    "alias": "woman_pilot",
    "unicode": "👩‍✈",
  },
  {
    "alias": "woman_playing_handball",
    "unicode": "🤾‍♀",
  },
  {
    "alias": "woman_playing_water_polo",
    "unicode": "🤽‍♀",
  },
  {
    "alias": "woman_scientist",
    "unicode": "👩‍🔬",
  },
  {
    "alias": "woman_shrugging",
    "unicode": "🤷‍♀",
  },
  {
    "alias": "woman_singer",
    "unicode": "👩‍🎤",
  },
  {
    "alias": "woman_student",
    "unicode": "👩‍🎓",
  },
  {
    "alias": "woman_teacher",
    "unicode": "👩‍🏫",
  },
  {
    "alias": "woman_technologist",
    "unicode": "👩‍💻",
  },
  {
    "alias": "woman_with_headscarf",
    "unicode": "🧕",
  },
  {
    "alias": "woman_with_probing_cane",
    "unicode": "👩‍🦯",
  },
  {
    "alias": "woman_with_turban",
    "unicode": "👳‍♀",
  },
  {
    "alias": "woman_with_veil",
    "unicode": "👰‍♀️",
  },
  {
    "alias": "womans_clothes",
    "unicode": "👚",
  },
  {
    "alias": "womans_hat",
    "unicode": "👒",
  },
  {
    "alias": "women_wrestling",
    "unicode": "🤼‍♀",
  },
  {
    "alias": "womens",
    "unicode": "🚺",
  },
  {
    "alias": "wood",
    "unicode": "🪵",
  },
  {
    "alias": "woozy_face",
    "unicode": "🥴",
  },
  {
    "alias": "world_map",
    "unicode": "🗺",
  },
  {
    "alias": "worm",
    "unicode": "🪱",
  },
  {
    "alias": "worried",
    "unicode": "😟",
  },
  {
    "alias": "wrench",
    "unicode": "🔧",
  },
  {
    "alias": "wrestling",
    "unicode": "🤼",
  },
  {
    "alias": "writing_hand",
    "unicode": "✍️",
  },
  {
    "alias": "x",
    "unicode": "❌",
  },
  {
    "alias": "yarn",
    "unicode": "🧶",
  },
  {
    "alias": "yawning_face",
    "unicode": "🥱",
  },
  {
    "alias": "yellow_circle",
    "unicode": "🟡",
  },
  {
    "alias": "yellow_heart",
    "unicode": "💛",
  },
  {
    "alias": "yellow_square",
    "unicode": "🟨",
  },
  {
    "alias": "yemen",
    "unicode": "🇾🇪",
  },
  {
    "alias": "yen",
    "unicode": "💴",
  },
  {
    "alias": "yin_yang",
    "unicode": "☯️",
  },
  {
    "alias": "yo_yo",
    "unicode": "🪀",
  },
  {
    "alias": "yum",
    "unicode": "😋",
  },
  {
    "alias": "zambia",
    "unicode": "🇿🇲",
  },
  {
    "alias": "zany_face",
    "unicode": "🤪",
  },
  {
    "alias": "zap",
    "unicode": "⚡️",
  },
  {
    "alias": "zebra",
    "unicode": "🦓",
  },
  {
    "alias": "zero",
    "unicode": "0️⃣",
  },
  {
    "alias": "zimbabwe",
    "unicode": "🇿🇼",
  },
  {
    "alias": "zipper_mouth_face",
    "unicode": "🤐",
  },
  {
    "alias": "zombie",
    "unicode": "🧟",
  },
  {
    "alias": "zombie_man",
    "unicode": "🧟‍♂️",
  },
  {
    "alias": "zombie_woman",
    "unicode": "🧟‍♀️",
  },
  {
    "alias": "zzz",
    "unicode": "💤",
  }
];

emojiData.forEach(({ alias, unicode }) => {
  [].concat(alias).forEach((name) => {
    lookup[`:${name}:`] = `<span style="font-family:emoji,serif;">${unicode}</span>`;
  });
});

export const emojify = (input) => input.replace(/:[\w\-+]+:/g, (tag) => lookup[tag] || tag);
