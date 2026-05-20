import re
import json

path = r"c:\Users\user\Downloads\アマデウス - 格闘技分析アプリ開発.html"
with open(path, encoding="utf-8") as f:
    s = f.read()

idx = s.find("kcalPerMin")
print("first kcalPerMin at", idx)
print(s[idx - 400 : idx + 600])

ids = re.findall(r'"id"\s*:\s*"(kb-[^"]+)"', s)
print("kb ids count", len(ids))
if ids:
    print("sample ids", ids[:5])

names = re.findall(r'"nameJa"\s*:\s*"([^"]+)"', s)
print("nameJa count", len(names))

# Try to find JSON objects with kcalPerMin
objs = re.findall(
    r'\{[^{}]*"kcalPerMin"\s*:\s*[\d.]+[^{}]*\}',
    s,
)
print("simple obj matches", len(objs))

# Look for const kickboxingTechniques
for pat in ["kickboxingTechniques", "const techniques", "techniques ="]:
    i = s.find(pat)
    print(pat, i)
    if i != -1:
        print(s[i : i + 200])
