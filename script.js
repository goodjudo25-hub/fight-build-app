const STORAGE_KEY = "fightbuild-profile-v1";
const LOGS_KEY = "fightbuild-practice-logs-v1";
const SAVED_COMBOS_KEY = "fightbuild-saved-combos-v1";

const PAGE_META = {
  home: { title: "ホーム", subtitle: "今日の練習メニュー" },
  techniques: { title: "技", subtitle: "タップでコンボに追加" },
  combos: { title: "コンボ", subtitle: "保存したビルド一覧" },
  diagnosis: { title: "詳細診断", subtitle: "戦術・練習の深掘り分析" },
  settings: { title: "設定", subtitle: "入力するとすぐおすすめが表示" }
};

const CATEGORY_LABELS = {
  punch: "パンチ",
  kick_low: "ローキック",
  kick_middle: "ミドル",
  kick_high: "ハイ",
  knee: "ニー",
  defense: "防御",
  footwork: "フットワーク",
  feint: "フェイント",
  counter: "カウンター",
  combo: "コンボ技"
};

const CATEGORY_COLORS = {
  punch: "#0a84ff",
  kick_low: "#30d158",
  kick_middle: "#64d2ff",
  kick_high: "#bf5af2",
  knee: "#ff9f0a",
  defense: "#8e8e93",
  footwork: "#ac8e68",
  feint: "#ff6482",
  counter: "#ffd60a",
  combo: "#ff375f"
};

const kickboxingTechniques = [
  { id: "kb-jab", name: "ジャブ", category: "punch", difficulty: 1, kcalPerMin: 4.2 },
  { id: "kb-cross", name: "ストレート", category: "punch", difficulty: 2, kcalPerMin: 5.1 },
  { id: "kb-lead-hook", name: "左フック", category: "punch", difficulty: 3, kcalPerMin: 5.8 },
  { id: "kb-rear-hook", name: "右フック", category: "punch", difficulty: 3, kcalPerMin: 6.0 },
  { id: "kb-uppercut", name: "アッパーカット", category: "punch", difficulty: 3, kcalPerMin: 5.9 },
  { id: "kb-overhand", name: "オーバーハンド", category: "punch", difficulty: 3, kcalPerMin: 6.2 },
  { id: "kb-body-jab", name: "ボディジャブ", category: "punch", difficulty: 2, kcalPerMin: 4.8 },
  { id: "kb-body-cross", name: "ボディストレート", category: "punch", difficulty: 3, kcalPerMin: 5.5 },
  { id: "kb-double-jab", name: "ダブルジャブ", category: "punch", difficulty: 2, kcalPerMin: 5.0 },
  { id: "kb-switch-punch", name: "スイッチパンチ", category: "punch", difficulty: 4, kcalPerMin: 6.5 },
  { id: "kb-superman", name: "スーパーマンパンチ", category: "punch", difficulty: 4, kcalPerMin: 7.0 },
  { id: "kb-backfist", name: "バックフィスト", category: "punch", difficulty: 4, kcalPerMin: 6.8 },
  { id: "kb-lead-low", name: "前足ローキック", category: "kick_low", difficulty: 2, kcalPerMin: 5.4 },
  { id: "kb-rear-low", name: "後足ローキック", category: "kick_low", difficulty: 2, kcalPerMin: 5.6 },
  { id: "kb-inner-low", name: "インナーロー", category: "kick_low", difficulty: 3, kcalPerMin: 6.0 },
  { id: "kb-outer-low", name: "アウターロー", category: "kick_low", difficulty: 3, kcalPerMin: 6.1 },
  { id: "kb-check-low", name: "チェックロー", category: "kick_low", difficulty: 2, kcalPerMin: 4.5 },
  { id: "kb-switch-low", name: "スイッチロー", category: "kick_low", difficulty: 4, kcalPerMin: 6.8 },
  { id: "kb-lead-mid", name: "前足ミドルキック", category: "kick_middle", difficulty: 3, kcalPerMin: 6.5 },
  { id: "kb-rear-mid", name: "後足ミドルキック", category: "kick_middle", difficulty: 3, kcalPerMin: 6.8 },
  { id: "kb-body-kick", name: "ボディキック", category: "kick_middle", difficulty: 3, kcalPerMin: 6.6 },
  { id: "kb-switch-mid", name: "スイッチミドル", category: "kick_middle", difficulty: 4, kcalPerMin: 7.2 },
  { id: "kb-step-mid", name: "ステップミドル", category: "kick_middle", difficulty: 4, kcalPerMin: 7.0 },
  { id: "kb-teep", name: "前蹴り", category: "kick_middle", difficulty: 2, kcalPerMin: 5.2 },
  { id: "kb-lead-high", name: "前足ハイキック", category: "kick_high", difficulty: 4, kcalPerMin: 7.5 },
  { id: "kb-rear-high", name: "後足ハイキック", category: "kick_high", difficulty: 4, kcalPerMin: 7.8 },
  { id: "kb-round-high", name: "上段回し蹴り", category: "kick_high", difficulty: 5, kcalPerMin: 8.5 },
  { id: "kb-axe-kick", name: "斧蹴り", category: "kick_high", difficulty: 5, kcalPerMin: 8.2 },
  { id: "kb-spin-high", name: "スピンハイ", category: "kick_high", difficulty: 5, kcalPerMin: 9.0 },
  { id: "kb-straight-knee", name: "ストレートニー", category: "knee", difficulty: 3, kcalPerMin: 6.5 },
  { id: "kb-diagonal-knee", name: "斜めニー", category: "knee", difficulty: 3, kcalPerMin: 6.8 },
  { id: "kb-flying-knee", name: "飛び膝", category: "knee", difficulty: 5, kcalPerMin: 9.5 },
  { id: "kb-clinch-knee", name: "クランチニー", category: "knee", difficulty: 4, kcalPerMin: 7.5 },
  { id: "kb-knee-sweep", name: "ニースイープ", category: "knee", difficulty: 4, kcalPerMin: 7.2 },
  { id: "kb-high-guard", name: "ハイガード", category: "defense", difficulty: 1, kcalPerMin: 2.5 },
  { id: "kb-long-guard", name: "ロングガード", category: "defense", difficulty: 2, kcalPerMin: 2.8 },
  { id: "kb-slip", name: "スリップ", category: "defense", difficulty: 2, kcalPerMin: 3.0 },
  { id: "kb-roll", name: "ロール", category: "defense", difficulty: 3, kcalPerMin: 3.5 },
  { id: "kb-parry", name: "パリー", category: "defense", difficulty: 3, kcalPerMin: 3.2 },
  { id: "kb-check", name: "チェック", category: "defense", difficulty: 2, kcalPerMin: 3.0 },
  { id: "kb-step-in", name: "前進ステップ", category: "footwork", difficulty: 1, kcalPerMin: 3.5 },
  { id: "kb-step-back", name: "後退ステップ", category: "footwork", difficulty: 1, kcalPerMin: 3.2 },
  { id: "kb-l-step", name: "Lステップ", category: "footwork", difficulty: 2, kcalPerMin: 4.0 },
  { id: "kb-pivot", name: "ピボット", category: "footwork", difficulty: 2, kcalPerMin: 4.2 },
  { id: "kb-circle", name: "サークル", category: "footwork", difficulty: 3, kcalPerMin: 4.8 },
  { id: "kb-feint-jab", name: "フェイントジャブ", category: "feint", difficulty: 2, kcalPerMin: 3.8 },
  { id: "kb-feint-kick", name: "フェイントキック", category: "feint", difficulty: 3, kcalPerMin: 4.5 },
  { id: "kb-body-feint", name: "ボディフェイント", category: "feint", difficulty: 3, kcalPerMin: 4.2 },
  { id: "kb-level-change", name: "レベルチェンジ", category: "feint", difficulty: 3, kcalPerMin: 4.0 },
  { id: "kb-counter-jab", name: "カウンタージャブ", category: "counter", difficulty: 3, kcalPerMin: 5.5 },
  { id: "kb-counter-cross", name: "カウンターストレート", category: "counter", difficulty: 4, kcalPerMin: 6.5 },
  { id: "kb-counter-hook", name: "カウンターフック", category: "counter", difficulty: 4, kcalPerMin: 6.8 },
  { id: "kb-counter-low", name: "カウンターロー", category: "counter", difficulty: 4, kcalPerMin: 6.6 },
  { id: "kb-check-hook", name: "チェックフック", category: "counter", difficulty: 4, kcalPerMin: 6.4 },
  { id: "kb-one-two", name: "1-2", category: "combo", difficulty: 2, kcalPerMin: 8.5 },
  { id: "kb-one-two-three", name: "1-2-3", category: "combo", difficulty: 3, kcalPerMin: 10.2 },
  { id: "kb-jab-low", name: "ジャブロー", category: "combo", difficulty: 2, kcalPerMin: 9.0 },
  { id: "kb-jab-mid", name: "ジャブミドル", category: "combo", difficulty: 3, kcalPerMin: 9.8 },
  { id: "kb-low-high", name: "ローハイ", category: "combo", difficulty: 4, kcalPerMin: 11.0 },
  { id: "kb-switch-combo", name: "スイッチコンボ", category: "combo", difficulty: 5, kcalPerMin: 12.0 }
];

const techniques = kickboxingTechniques;

const techniqueById = Object.fromEntries(kickboxingTechniques.map((t) => [t.id, t]));

const fighters = [
  {
    name: "武尊型",
    patterns: ["前進圧力", "左フック", "連打"],
    tags: ["pressure", "inside", "close"],
    source: "公開試合映像・一般的なファン分析ベース。公式認定情報は不明。"
  },
  {
    name: "那須川天心型",
    patterns: ["出入りの速さ", "カウンター", "左ストレート"],
    tags: ["counter", "distance", "long"],
    source: "公開試合映像・一般的なファン分析ベース。公式認定情報は不明。"
  },
  {
    name: "野杁正明型",
    patterns: ["ガード固め", "ミドルキック", "接近戦"],
    tags: ["kick", "inside", "mid", "close"],
    source: "公開試合映像・一般的なファン分析ベース。公式認定情報は不明。"
  },
  {
    name: "バランス型（初心者向け）",
    patterns: ["ジャブ中心", "ローで牽制", "無理な前進なし"],
    tags: ["fitness", "fun", "none", "under6"],
    source: "アプリ内の初心者向けテンプレート。"
  }
];

const FIGHT_STYLE_LABELS = {
  pressure: "前進圧タイプ",
  distance: "距離管理型",
  counter: "カウンター型",
  inside: "インファイト型",
  kick: "キック主導型"
};

const DEFAULT_COMBOS = {
  pressure: ["1-2", "ジャブロー"],
  distance: ["1-2", "ジャブミドル"],
  counter: ["1-2", "カウンターロー"],
  inside: ["ジャブミドル", "ローハイ"],
  kick: ["ジャブロー", "ローハイ"]
};

const STYLE_PRESETS = {
  pressure: {
    techniques: ["ジャブ", "ストレート", "左フック"],
    combos: ["1-2", "ジャブロー"],
    fighter: "武尊型",
    tactics: ["前足で距離を詰める", "ジャブで牽制してワンツー", "ボディ打ちでガードを下げる"],
    reason: "前に出て圧をかけるスタイルは、ジャブで牽制しながらワンツーで崩す流れが作りやすいです。"
  },
  distance: {
    techniques: ["ジャブ", "前蹴り", "ストレート"],
    combos: ["1-2", "ジャブミドル"],
    fighter: "那須川天心型",
    tactics: ["前蹴りで前進を止める", "ジャブで間合いを管理", "相手の出方に合わせてストレート"],
    reason: "距離を保つ戦い方は、前蹴りとジャブで間合いを管理する形が向いています。"
  },
  counter: {
    techniques: ["カウンタージャブ", "カウンターストレート", "前蹴り"],
    combos: ["1-2", "カウンターロー"],
    fighter: "那須川天心型",
    tactics: ["相手の攻撃を待ってから打つ", "フェイントで出方を誘う", "一発打ったら距離を戻す"],
    reason: "カウンター型は相手の出方を待つことが基本です。"
  },
  inside: {
    techniques: ["左フック", "前足ミドルキック", "前足ローキック"],
    combos: ["ジャブミドル", "ローハイ"],
    fighter: "野杁正明型",
    tactics: ["ローで足を止めてからボディ", "クランチ前のニーで主導権", "フックでガードを崩す"],
    reason: "接近戦はボディへのキックとフックが効きます。"
  },
  kick: {
    techniques: ["前足ローキック", "前足ミドルキック", "ジャブ"],
    combos: ["ジャブロー", "ローハイ"],
    fighter: "野杁正明型",
    tactics: ["ローで前足を削る", "ミドルで体を開く", "パンチはセットアップに徹する"],
    reason: "キック主導はローで前足を削り、ミドルで体を開く二段構えが定番です。"
  }
};

const WEAK_TENDENCY_RULES = {
  pressure: "前に出りすぎるとカウンターやローキックを連続で受けやすくなります。",
  distance: "後退しすぎるとコーナーに追い込まれ、攻撃の選択肢が減りやすいです。",
  counter: "待ちすぎると主導権を渡し、相手のリズムに乗せられやすいです。",
  inside: "接近しすぎると膝やクランチで消耗し、距離の取り合いで不利になりやすいです。",
  kick: "キックだけに偏るとパンチのカウンターを食らい、テンポが崩れやすいです。"
};

const DISTANCE_WEAK = {
  long: "近距離のインファイトでは力が発揮しにくく、組みつきで不利になりやすいです。",
  mid: "極端なロングや接近だけに偏ると、中間距離の打ち合いで空間を取られやすいです。",
  close: "外側の距離では足が届きにくく、前蹴りやローで止められやすいです。"
};

const DISTANCE_NOTES = {
  long: "ロング距離を活かすなら、前蹴りとジャブで間合いを保ちつつ、ローキックで前足を止める練習がおすすめです。",
  mid: "ミドル距離なら1-2とジャブローが定番。スパーでは同じコンボを2〜3本に絞ると上達が早いです。",
  close: "近距離が得意なら、左フックとミドルキックをセットで練習しましょう。"
};

const EXPERIENCE_NOTES = {
  none: "未経験〜始めたばかりの方は、ジャブとローキック、1-2の3つに集中するのがおすすめです。",
  under6: "半年未満はコンボを増やしすぎず、得意技1〜2個を毎回のスパー課題にすると続きやすいです。",
  "6to12": "半年〜1年なら、得意距離に合わせてコンボを1本追加するタイミングです。",
  "1to3": "1〜3年なら、苦手技メモを見ながら1ラウンドだけ克服練習を入れると伸びます。",
  over3: "中級者は参考スタイルを1つ決め、スパー課題とセットで再現練習すると戦術がまとまります。"
};

const PURPOSE_NOTES = {
  fitness: "フィットネス目的なら、負荷の少ないジャブ・ロー中心でOK。楽しく続けることが最優先です。",
  fun: "趣味で強くなるなら、好きな戦い方に近いコンボを1本決めて反復するのが近道です。",
  spar: "スパー重視なら、スパー課題を毎回1つだけ決めて振り返る習慣が効きます。",
  match: "試合を見据えるなら、得意技2・苦手技1を明確にし、試合予定から逆算して練習メニューを組みましょう。"
};

const MBTI_FLAVOR = {
  I: "内省タイプのあなたには、相手の癖をメモしながらカウンター練習が合いやすいかも（おまけ）。",
  E: "アクティブなタイプには、前に出る圧の練習がモチベーションにつながりやすいかも（おまけ）。",
  N: "イメージ重視なら、参考選手の動きを動画で見てから練習すると伸びやすいかも（おまけ）。",
  S: "感覚派なら、ミットで数をこなして体に覚える方が向いているかも（おまけ）。",
  T: "理詰めが好きなら、コンボの目的を言語化してから打つと定着しやすいかも（おまけ）。",
  F: "雰囲気重視なら、ジム仲間とスパー振り返りを共有すると続けやすいかも（おまけ）。",
  J: "計画型は試合予定とスパー課題をセットで書くと、練習がブレにくいかも（おまけ）。",
  P: "柔軟型はその日の調子で技を1つだけ深掘りする練習が合うかも（おまけ）。"
};

const FIGHTER_ALIASES = {
  武尊: "武尊型",
  天心: "那須川天心型",
  那須川: "那須川天心型",
  那須川天心: "那須川天心型",
  野杁: "野杁正明型",
  野杁正明: "野杁正明型"
};

let currentBuild = [];
let activeCategory = "all";
let searchQuery = "";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function categoryLabel(category) {
  return CATEGORY_LABELS[category] || category;
}

function renderStars(difficulty) {
  const max = 5;
  const n = Math.min(max, Math.max(0, Number(difficulty) || 0));
  let html = '<span class="stars" aria-label="難易度' + n + '">';
  for (let i = 1; i <= max; i++) {
    html += `<span class="stars__item${i <= n ? " stars__item--on" : ""}">★</span>`;
  }
  html += "</span>";
  return html;
}

function getFilteredTechniques() {
  const q = searchQuery.trim().toLowerCase();
  return kickboxingTechniques.filter((t) => {
    if (activeCategory !== "all" && t.category !== activeCategory) return false;
    if (!q) return true;
    const label = categoryLabel(t.category).toLowerCase();
    return (
      t.name.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      label.includes(q) ||
      t.id.toLowerCase().includes(q)
    );
  });
}

function loadPracticeLogs() {
  try {
    const raw = localStorage.getItem(LOGS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function addPracticeLog(text) {
  const logs = loadPracticeLogs();
  logs.unshift({ text, at: new Date().toISOString() });
  localStorage.setItem(LOGS_KEY, JSON.stringify(logs.slice(0, 20)));
  renderHome();
}

function formatLogTime(iso) {
  const d = new Date(iso);
  const now = new Date();
  const sameDay =
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate();
  if (sameDay) {
    return d.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });
  }
  return d.toLocaleDateString("ja-JP", { month: "numeric", day: "numeric" });
}

function getTodayTechnique() {
  const dayIndex = new Date().getDay();
  const sorted = [...kickboxingTechniques].sort((a, b) => a.difficulty - b.difficulty);
  return sorted[dayIndex % sorted.length] || kickboxingTechniques[0];
}

function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProfile(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function readProfileForm() {
  const form = document.getElementById("profileForm");
  const data = {};
  new FormData(form).forEach((value, key) => {
    data[key] = typeof value === "string" ? value.trim() : value;
  });
  return data;
}

function fillProfileForm(profile) {
  const form = document.getElementById("profileForm");
  if (!profile) return;
  Object.entries(profile).forEach(([key, value]) => {
    const field = form.elements.namedItem(key);
    if (field && value != null) field.value = value;
  });
}

function showSaveStatus(message) {
  const el = document.getElementById("saveStatus");
  el.textContent = message;
  if (message) {
    window.clearTimeout(showSaveStatus._timer);
    showSaveStatus._timer = window.setTimeout(() => {
      el.textContent = "";
    }, 2800);
  }
}

function matchFighterFromReference(text) {
  if (!text) return null;
  const lower = text.toLowerCase();
  for (const [alias, fighterName] of Object.entries(FIGHTER_ALIASES)) {
    if (text.includes(alias) || lower.includes(alias.toLowerCase())) {
      return fighterName;
    }
  }
  return null;
}

function hasProfileInput(profile) {
  return Boolean(
    profile.fightStyle ||
      profile.experience ||
      profile.purpose ||
      profile.preferredDistance ||
      profile.referenceFighters ||
      profile.weakPoints ||
      profile.sparringGoals
  );
}

function getRecommendedComboNames(profile, preset) {
  const saved = loadSavedCombos();
  if (saved.length) {
    return saved.slice(0, 3).map((c) => c.name);
  }
  return preset.combos || DEFAULT_COMBOS[profile.fightStyle] || ["1-2", "ジャブロー"];
}

function getRecommendedPractice(profile, preset) {
  const items = [];
  if (profile.sparringGoals) {
    items.push(`スパー課題: ${profile.sparringGoals}`);
  }
  if (profile.experience === "none" || profile.experience === "under6") {
    items.push("ミットでジャブ100発 → ロー50発 → 1-2を3分×3セット");
    items.push("スパーは同じコンボ2本だけに絞る");
  } else if (profile.experience === "6to12") {
    items.push("得意技1つを「毎ラウンド1回必ず出す」課題にする");
    items.push("苦手技はシャドー3分だけ毎回入れる");
  } else {
    items.push("参考スタイルの動きを動画で見てからミット練習");
    items.push("スパー前に今日のコンボを1本だけ決めておく");
  }
  if (profile.purpose === "match" && profile.matchSchedule) {
    items.push(`試合予定（${profile.matchSchedule}）から逆算し、週2回は実戦形式のスパー`);
  }
  if (profile.purpose === "fitness") {
    items.push("負荷の低いジャブ・ロー中心で、楽しく続けることを最優先");
  }
  if (profile.strongTechniques) {
    items.push(`得意技（${profile.strongTechniques}）をコンボの最後に置くと成功率が上がります`);
  }
  if (profile.weakTechniques) {
    items.push(`苦手技（${profile.weakTechniques}）はミットで10発×3セットから克服`);
  }
  if (!items.length) {
    items.push(...(preset.tactics || []).map((t) => `・${t}を意識したミット練習`));
  }
  return items.slice(0, 5);
}

function getWeakTendencies(profile) {
  const items = [];
  const style = profile.fightStyle;
  if (style && WEAK_TENDENCY_RULES[style]) items.push(WEAK_TENDENCY_RULES[style]);
  if (profile.preferredDistance && DISTANCE_WEAK[profile.preferredDistance]) {
    items.push(DISTANCE_WEAK[profile.preferredDistance]);
  }
  if (profile.weakPoints) {
    items.push(`自己申告の苦手（${profile.weakPoints}）が試合で繰り返し出やすい傾向`);
  }
  if (profile.fightStyle === "counter" && profile.preferredDistance === "close") {
    items.push("近距離で待ちすぎると相手に主導権を渡しやすいです");
  }
  if (profile.fightStyle === "pressure" && profile.preferredDistance === "long") {
    items.push("ロング得意なのに前進しすぎると、得意距離を活かせません");
  }
  if (!items.length) {
    items.push("戦い方が未設定のため、毎回違う戦術になりやすいです。好きな戦い方を選ぶと改善します。");
  }
  return items;
}

function buildDiagnosis(profile) {
  const style = profile.fightStyle || "";
  const distance = profile.preferredDistance || "";
  const experience = profile.experience || "";
  const purpose = profile.purpose || "";
  const mbti = profile.mbti || "";
  const reference = profile.referenceFighters || "";

  let preset = STYLE_PRESETS[style];

  if (!preset) {
    preset = {
      techniques: ["ジャブ", "前足ローキック", "ストレート"],
      combos: ["1-2", "ジャブロー"],
      fighter: "バランス型（初心者向け）",
      tactics: ["ジャブで距離を測る", "ローで前足を止める", "1-2で崩す"],
      reason: "まだ戦い方が決まっていない段階では、ジャブ・ロー・1-2から始めるのがおすすめです。"
    };
  }

  const refFighter = matchFighterFromReference(reference);
  const recommendedFighter = refFighter || preset.fighter;
  const fighterData = fighters.find((f) => f.name === recommendedFighter) || fighters[3];

  const reasonParts = [preset.reason];
  if (DISTANCE_NOTES[distance]) reasonParts.push(DISTANCE_NOTES[distance]);
  if (EXPERIENCE_NOTES[experience]) reasonParts.push(EXPERIENCE_NOTES[experience]);
  if (PURPOSE_NOTES[purpose]) reasonParts.push(PURPOSE_NOTES[purpose]);
  if (profile.weakPoints) {
    reasonParts.push(`苦手項目（${profile.weakPoints}）は、スパー課題に1つ書き出して毎回意識しましょう。`);
  }
  if (profile.sparringGoals) {
    reasonParts.push(`登録済みのスパー課題「${profile.sparringGoals}」を今週のテーマにすると連動します。`);
  }
  if (profile.matchSchedule) {
    reasonParts.push(`試合予定（${profile.matchSchedule}）があるなら、おすすめコンボを2本に絞って反復しましょう。`);
  }
  if (mbti) {
    const flavors = [...mbti].map((ch) => MBTI_FLAVOR[ch]).filter(Boolean);
    if (flavors.length) reasonParts.push(flavors[0]);
  }

  const combos = getRecommendedComboNames(profile, preset);
  const shortReason = reasonParts.slice(0, 2).join(" ");

  return {
    hasInput: hasProfileInput(profile),
    techniques: preset.techniques,
    combos,
    fighter: recommendedFighter,
    styleName: FIGHT_STYLE_LABELS[style] || "バランス型",
    reason: shortReason,
    detailedReason: reasonParts,
    suitedTactics: preset.tactics || [],
    weakTendencies: getWeakTendencies(profile),
    recommendedPractice: getRecommendedPractice(profile, preset),
    referenceFighter: recommendedFighter,
    fighterPatterns: fighterData.patterns,
    fighterSource: fighterData.source
  };
}

let diagnosisDebounceTimer = null;

function scheduleDiagnosisUpdate() {
  window.clearTimeout(diagnosisDebounceTimer);
  diagnosisDebounceTimer = window.setTimeout(() => {
    updateDiagnosisUI(readProfileForm());
  }, 280);
}

function updateDiagnosisUI(profile) {
  const result = buildDiagnosis(profile);
  renderQuickDiagnosis(result);
  renderDetailedDiagnosis(result);
  return result;
}

function loadSavedCombos() {
  try {
    const raw = localStorage.getItem(SAVED_COMBOS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function saveSavedCombos(list) {
  localStorage.setItem(SAVED_COMBOS_KEY, JSON.stringify(list));
}

function addToBuild(technique) {
  currentBuild.push(technique.id);
  renderBuildArea();
  const area = document.getElementById("comboBuild");
  if (area) area.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function removeFromBuild(index) {
  currentBuild.splice(index, 1);
  renderBuildArea();
}

function resetBuild() {
  currentBuild = [];
  renderBuildArea();
  const nameInput = document.getElementById("comboNameInput");
  if (nameInput) nameInput.value = "";
}

function getBuildTechniques() {
  return currentBuild.map((id) => techniqueById[id]).filter(Boolean);
}

function calcBuildTotals(items) {
  const difficulty = items.reduce((sum, t) => sum + (t.difficulty || 0), 0);
  const kcal = items.reduce((sum, t) => sum + (t.kcalPerMin || 0), 0);
  return { difficulty, kcal: Math.round(kcal * 10) / 10 };
}

function renderBuildArea() {
  const slotsEl = document.getElementById("buildSlots");
  const flowEl = document.getElementById("buildFlow");
  const statsEl = document.getElementById("buildStats");
  if (!slotsEl) return;

  const items = getBuildTechniques();
  const totals = calcBuildTotals(items);

  if (items.length === 0) {
    slotsEl.innerHTML = `<div class="build-slots__empty">技カードをタップしてスロットに追加</div>`;
    flowEl.innerHTML = `<p class="build-flow__empty">まだ技が選ばれていません</p>`;
  } else {
    slotsEl.innerHTML = items
      .map(
        (t, i) => `
      <div class="build-slot" style="--cat-color:${CATEGORY_COLORS[t.category] || "#0a84ff"}">
        <button type="button" class="build-slot__remove" data-remove="${i}" aria-label="${escapeHtml(t.name)}を削除">×</button>
        <span class="build-slot__name">${escapeHtml(t.name)}</span>
        <span class="cat-tag cat-tag--sm" data-cat="${t.category}">${escapeHtml(categoryLabel(t.category))}</span>
      </div>`
      )
      .join("");
    flowEl.innerHTML = `<p class="build-flow__chain">${items.map((t) => escapeHtml(t.name)).join(' <span class="build-flow__arrow">→</span> ')}</p>`;
  }

  statsEl.innerHTML = `
    <div class="build-stat">
      <span class="build-stat__label">合計難易度</span>
      <span class="build-stat__value">${totals.difficulty}</span>
      ${renderStars(Math.min(5, Math.round(totals.difficulty / Math.max(items.length, 1))))}
    </div>
    <div class="build-stat">
      <span class="build-stat__label">推定消費</span>
      <span class="build-stat__value build-stat__value--kcal">${totals.kcal}<small>kcal/分</small></span>
    </div>
    <div class="build-stat">
      <span class="build-stat__label">技数</span>
      <span class="build-stat__value">${items.length}</span>
    </div>`;

  slotsEl.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      removeFromBuild(Number(btn.dataset.remove));
    });
  });
}

function saveCurrentCombo() {
  const items = getBuildTechniques();
  if (items.length === 0) {
    showComboStatus("技を1つ以上追加してください");
    return;
  }
  const nameInput = document.getElementById("comboNameInput");
  const name = nameInput?.value.trim() || `コンボ ${new Date().toLocaleDateString("ja-JP")}`;
  const totals = calcBuildTotals(items);
  const combo = {
    id: "combo-" + Date.now(),
    name,
    techniqueIds: items.map((t) => t.id),
    flow: items.map((t) => t.name),
    totalDifficulty: totals.difficulty,
    totalKcal: totals.kcal,
    savedAt: new Date().toISOString()
  };
  const list = loadSavedCombos();
  list.unshift(combo);
  saveSavedCombos(list);
  addPracticeLog(`コンボ「${name}」を保存`);
  showComboStatus(`「${name}」を保存しました`);
  resetBuild();
  renderSavedCombos();
  updateDiagnosisUI(readProfileForm());
}

function showComboStatus(msg) {
  const el = document.getElementById("comboSaveStatus");
  if (!el) return;
  el.textContent = msg;
  window.clearTimeout(showComboStatus._timer);
  showComboStatus._timer = window.setTimeout(() => {
    el.textContent = "";
  }, 2500);
}

function deleteSavedCombo(id) {
  const list = loadSavedCombos().filter((c) => c.id !== id);
  saveSavedCombos(list);
  renderSavedCombos();
}

function renderSavedCombos() {
  const list = document.getElementById("comboList");
  if (!list) return;
  const combos = loadSavedCombos();

  if (combos.length === 0) {
    list.innerHTML = `<p class="combo-empty">保存したコンボはまだありません。技タブでビルドして保存しましょう。</p>`;
    return;
  }

  list.innerHTML = combos
    .map((combo) => {
      const saved = new Date(combo.savedAt).toLocaleDateString("ja-JP", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
      return `
      <article class="saved-combo">
        <header class="saved-combo__header">
          <h3 class="saved-combo__title">${escapeHtml(combo.name)}</h3>
          <button type="button" class="saved-combo__delete" data-delete="${combo.id}" aria-label="削除">削除</button>
        </header>
        <p class="saved-combo__flow">${combo.flow.map(escapeHtml).join(' <span class="build-flow__arrow">→</span> ')}</p>
        <div class="saved-combo__stats">
          <span>難易度 ${combo.totalDifficulty}</span>
          <span>${combo.totalKcal} kcal/分</span>
          <span>${combo.flow.length}技</span>
        </div>
        <time class="saved-combo__time" datetime="${combo.savedAt}">${saved}</time>
      </article>`;
    })
    .join("");

  list.querySelectorAll("[data-delete]").forEach((btn) => {
    btn.addEventListener("click", () => deleteSavedCombo(btn.dataset.delete));
  });
}

function renderTechniques() {
  const list = document.getElementById("techniqueList");
  if (!list) return;
  const filtered = getFilteredTechniques();

  if (filtered.length === 0) {
    list.innerHTML = `<p class="tech-empty">該当する技がありません</p>`;
    return;
  }

  list.innerHTML = filtered
    .map((t) => {
      const color = CATEGORY_COLORS[t.category] || "#0a84ff";
      return `
      <button type="button" class="skill-card" data-id="${t.id}" style="--skill-accent:${color}">
        <div class="skill-card__top">
          <span class="skill-card__name">${escapeHtml(t.name)}</span>
          ${renderStars(t.difficulty)}
        </div>
        <div class="skill-card__meta">
          <span class="cat-tag" data-cat="${t.category}">${escapeHtml(categoryLabel(t.category))}</span>
          <span class="skill-card__kcal">${t.kcalPerMin} <small>kcal/分</small></span>
        </div>
        <span class="skill-card__hint">タップで追加 +</span>
      </button>`;
    })
    .join("");

  list.querySelectorAll(".skill-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tech = techniqueById[btn.dataset.id];
      if (tech) addToBuild(tech);
    });
  });
}

function setupTechniqueFilters() {
  const search = document.getElementById("techniqueSearch");
  if (search) {
    search.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderTechniques();
    });
  }

  document.querySelectorAll("[data-category]").forEach((chip) => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.category;
      document.querySelectorAll("[data-category]").forEach((c) => {
        c.classList.toggle("filter-chip--active", c.dataset.category === activeCategory);
      });
      renderTechniques();
    });
  });
}

function setupComboBuilder() {
  document.getElementById("resetBuild")?.addEventListener("click", resetBuild);
  document.getElementById("saveCombo")?.addEventListener("click", saveCurrentCombo);
}

function renderHome() {
  const container = document.getElementById("homeContent");
  if (!container) return;

  const today = getTodayTechnique();
  const savedProfile = loadProfile();
  const rec = buildDiagnosis({ ...savedProfile, ...readProfileForm() });
  const saved = loadSavedCombos();
  const featuredCombo = saved[0];
  const fighterData = fighters.find((f) => f.name === rec.fighter) || fighters[3];
  const logs = loadPracticeLogs().slice(0, 3);

  const logsHtml =
    logs.length > 0
      ? `<ul class="home-logs">${logs
          .map(
            (log) => `
        <li class="home-logs__item">
          <span class="home-logs__dot" aria-hidden="true"></span>
          <span class="home-logs__text">${escapeHtml(log.text)}</span>
          <time class="home-logs__time" datetime="${log.at}">${formatLogTime(log.at)}</time>
        </li>`
          )
          .join("")}</ul>`
      : `<p class="home-logs__empty">まだログがありません。コンボを保存すると記録されます。</p>`;

  const comboHtml = featuredCombo
    ? `<h3 class="home-card__title">${escapeHtml(featuredCombo.name)}</h3>
       <p class="home-card__body">${featuredCombo.flow.join(" → ")}</p>`
    : `<h3 class="home-card__title">コンボを作ろう</h3>
       <p class="home-card__body">技タブでスキルビルドして保存</p>`;

  container.innerHTML = `
    <p class="home-greeting">FightBuild — キックボクシングのスキルビルド</p>
    <article class="home-card home-card--accent">
      <p class="home-card__label">今日のおすすめ技</p>
      <h2 class="home-card__title">${escapeHtml(today.name)}</h2>
      <div class="home-card__meta">
        <span class="cat-tag" data-cat="${today.category}">${escapeHtml(categoryLabel(today.category))}</span>
        ${renderStars(today.difficulty)}
        <span class="pill">${today.kcalPerMin} kcal/分</span>
      </div>
    </article>
    <article class="home-card">
      <p class="home-card__label">最近のログ</p>
      ${logsHtml}
    </article>
    <div class="home-row">
      <article class="home-card home-card--compact">${comboHtml}</article>
      <article class="home-card home-card--compact">
        <p class="home-card__label">おすすめタイプ</p>
        <h3 class="home-card__title">${escapeHtml(rec.fighter)}</h3>
        <p class="home-card__body">${fighterData.patterns.slice(0, 2).join(" · ")}</p>
      </article>
    </div>
    <div class="home-quick">
      <button type="button" class="home-quick__btn" data-goto="settings">おすすめを見る</button>
      <button type="button" class="home-quick__btn" data-goto="techniques">技を選ぶ</button>
    </div>`;

  container.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(`.tab-bar__item[data-panel="${btn.dataset.goto}"]`)?.click();
    });
  });
}

function renderQuickDiagnosisEmpty() {
  return `
    <div class="diag-empty">
      <p>プロフィールを入力すると、ここにおすすめが表示されます。</p>
      <p class="diag-empty__hint">好きな戦い方・格闘技歴を選ぶだけでもOKです。</p>
    </div>`;
}

function renderQuickDiagnosis(result) {
  const box = document.getElementById("quickDiagnosis");
  if (!box) return;

  if (!result.hasInput) {
    box.innerHTML = renderQuickDiagnosisEmpty();
    return;
  }

  const comboHtml =
    result.combos.length > 0
      ? result.combos.map((c) => `<span class="tag tag--combo">${escapeHtml(c)}</span>`).join("")
      : `<span class="diag-muted">技タブでコンボを保存すると表示されます</span>`;

  box.innerHTML = `
    <article class="diag-summary">
      <p class="diag-summary__badge">自動更新</p>
      <div class="diag-summary__row">
        <h3 class="diag-summary__label">おすすめ技</h3>
        <div class="tags">${result.techniques.map((t) => `<span class="tag tag--accent">${escapeHtml(t)}</span>`).join("")}</div>
      </div>
      <div class="diag-summary__row">
        <h3 class="diag-summary__label">おすすめコンボ</h3>
        <div class="tags">${comboHtml}</div>
      </div>
      <div class="diag-summary__row">
        <h3 class="diag-summary__label">参考スタイル</h3>
        <p class="diag-summary__highlight">${escapeHtml(result.styleName)} · ${escapeHtml(result.fighter)}</p>
      </div>
      <div class="diag-summary__row diag-summary__row--reason">
        <h3 class="diag-summary__label">理由</h3>
        <p class="diag-summary__text">${escapeHtml(result.reason)}</p>
      </div>
      <button type="button" class="diag-summary__link" data-goto="diagnosis">詳細診断を見る →</button>
    </article>`;

  box.querySelector("[data-goto]")?.addEventListener("click", () => {
    document.querySelector('.tab-bar__item[data-panel="diagnosis"]')?.click();
  });
}

function renderDetailedDiagnosis(result) {
  const box = document.getElementById("detailedDiagnosis");
  if (!box) return;

  if (!result.hasInput) {
    box.innerHTML = `
      <div class="diag-empty">
        <p>設定タブでプロフィールを入力すると、詳細な分析が表示されます。</p>
      </div>`;
    return;
  }

  box.innerHTML = `
    <article class="diagnosis-card diagnosis-card--reason">
      <h3>詳細理由</h3>
      ${result.detailedReason.map((p) => `<p class="diagnosis-para">${escapeHtml(p)}</p>`).join("")}
    </article>
    <article class="diagnosis-card">
      <h3>向いている戦術</h3>
      <ul class="diagnosis-bullets">${result.suitedTactics.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
    </article>
    <article class="diagnosis-card diagnosis-card--warn">
      <h3>苦手になりやすい戦い方</h3>
      <ul class="diagnosis-bullets">${result.weakTendencies.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
    </article>
    <article class="diagnosis-card">
      <h3>おすすめ練習</h3>
      <ul class="diagnosis-bullets">${result.recommendedPractice.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
    </article>
    <article class="diagnosis-card">
      <h3>参考格闘家</h3>
      <p class="diagnosis-highlight">${escapeHtml(result.referenceFighter)}</p>
      <p class="diagnosis-sub">${escapeHtml(result.fighterPatterns.join(" · "))}</p>
      <p class="diagnosis-note">${escapeHtml(result.fighterSource)}</p>
    </article>`;
}

function setupProfileForm() {
  const form = document.getElementById("profileForm");
  fillProfileForm(loadProfile());
  updateDiagnosisUI(readProfileForm());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = readProfileForm();
    saveProfile(data);
    updateDiagnosisUI(data);
    renderHome();
    showSaveStatus("保存しました · おすすめを更新済み");
    addPracticeLog("プロフィールを保存");
  });

  form.addEventListener("input", scheduleDiagnosisUpdate);
  form.addEventListener("change", scheduleDiagnosisUpdate);
}

function updatePageHeader(panelKey) {
  const meta = PAGE_META[panelKey] || PAGE_META.home;
  document.getElementById("pageTitle").textContent = meta.title;
  document.getElementById("pageSubtitle").textContent = meta.subtitle;
}

function setupTabs() {
  const tabs = document.querySelectorAll(".tab-bar__item");
  const panels = {
    home: document.getElementById("panel-home"),
    techniques: document.getElementById("panel-techniques"),
    combos: document.getElementById("panel-combos"),
    diagnosis: document.getElementById("panel-diagnosis"),
    settings: document.getElementById("panel-settings")
  };

  function activate(panelKey) {
    Object.entries(panels).forEach(([key, el]) => {
      const active = key === panelKey;
      el.hidden = !active;
      el.classList.toggle("panel--active", active);
    });
    tabs.forEach((tab) => {
      const selected = tab.dataset.panel === panelKey;
      tab.classList.toggle("tab-bar__item--active", selected);
      tab.setAttribute("aria-selected", selected ? "true" : "false");
    });
    updatePageHeader(panelKey);
    if (panelKey === "home") renderHome();
    if (panelKey === "combos") renderSavedCombos();
    if (panelKey === "settings" || panelKey === "diagnosis") {
      updateDiagnosisUI(readProfileForm());
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab.dataset.panel));
  });
}

renderBuildArea();
renderTechniques();
renderSavedCombos();
renderHome();
setupTechniqueFilters();
setupComboBuilder();
setupProfileForm();
setupTabs();
