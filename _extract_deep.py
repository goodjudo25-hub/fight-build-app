import re
import json

path = r"c:\Users\user\Downloads\アマデウス - 格闘技分析アプリ開発.html"
with open(path, encoding="utf-8") as f:
    s = f.read()

# Find code blocks in chat
for needle in ["export const", "const kickboxing", "kickboxingTechniques", "kcalPerMin:", "kcalPerMin :"]:
    positions = [m.start() for m in re.finditer(re.escape(needle), s)]
    print(needle, len(positions))
    for pos in positions[:3]:
        chunk = s[pos : pos + 1500]
        # strip html tags roughly
        text = re.sub(r"<[^>]+>", "", chunk)
        text = text.replace("&quot;", '"').replace("&lt;", "<").replace("&gt;", ">")
        print("---", text[:500])
        print()

# Search for array starting with id field
for m in re.finditer(r"id:\s*['\"]kb-", s):
    pos = m.start()
    print("found id at", pos)
    chunk = s[max(0, pos - 100) : pos + 800]
    text = re.sub(r"<[^>]+>", "", chunk)
    print(text[:600])
    break

# Search in pre/code blocks
pres = re.findall(r"<pre[^>]*>(.*?)</pre>", s, re.DOTALL)
print("pre blocks", len(pres))
for i, pre in enumerate(pres):
    if "kcal" in pre or "punch" in pre or "kick_" in pre:
        text = re.sub(r"<[^>]+>", "", pre)
        print(f"pre {i} len", len(text))
        with open(
            rf"c:\Users\user\Desktop\fight-build-app\_pre_{i}.txt",
            "w",
            encoding="utf-8",
        ) as out:
            out.write(text[:50000])
