import re
import html as html_lib

path = r"c:\Users\user\Downloads\アマデウス - 格闘技分析アプリ開発.html"
with open(path, encoding="utf-8") as f:
    s = f.read()

# paragraphs from assistant (markdown prose)
paras = re.findall(r'<p data-start="[^"]*" data-end="[^"]*">([\s\S]*?)</p>', s)
texts = []
for p in paras:
    t = re.sub(r"<[^>]+>", "", p)
    t = html_lib.unescape(t).strip()
    if len(t) > 30 and any(k in t for k in ("コンボ", "ホーム", "Cursor", "FightBuild", "ゲーム", "技", "診断", "localStorage")):
        texts.append(t)

# dedupe while preserving order
seen = set()
unique = []
for t in texts:
    if t not in seen:
        seen.add(t)
        unique.append(t)

with open(r"c:\Users\user\Desktop\fight-build-app\_assistant_extract.txt", "w", encoding="utf-8") as f:
    f.write("\n\n".join(unique[-40:]))

print(len(unique), "paragraphs")
