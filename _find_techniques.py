import re

path = r"c:\Users\user\Downloads\アマデウス - 格闘技分析アプリ開発.html"
with open(path, encoding="utf-8") as f:
    s = f.read()

for needle in ["kickboxingTechniques", "kcalPerMin", "kick_low", "kb-jab"]:
    idx = s.find(needle)
    print(needle, idx)
    if idx != -1:
        snippet = s[max(0, idx - 200) : idx + 800]
        with open(
            rf"c:\Users\user\Desktop\fight-build-app\_snippet_{needle.replace('/', '_')}.txt",
            "w",
            encoding="utf-8",
        ) as out:
            out.write(snippet)

# try JSON array pattern
m = re.search(r"\[\s*\{[^\]]*kcalPerMin", s)
print("json array match", bool(m))
