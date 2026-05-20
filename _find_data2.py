import re

path = r"c:\Users\user\Downloads\アマデウス - 格闘技分析アプリ開発.html"
with open(path, encoding="utf-8") as f:
    s = f.read()

# pasted text attachments often in data-message or textarea
patterns = [
    r'"name"\s*:\s*"[^"]+"',
    r'name:\s*"[^"]+"',
    r'ジャブ',
    r'difficulty:\s*\d',
    r'category:\s*"punch"',
]
for p in patterns:
    ms = re.findall(p, s)
    print(p, len(ms))
    if ms:
        print(" sample:", ms[:3])

# find large JSON-like blocks
for m in re.finditer(r'\{[^{}]{0,200}"name"[^{}]{0,400}\}', s):
    if "kcal" in m.group() or "difficulty" in m.group():
        print("object", m.group()[:300])
        break

# search for 貼り付けられた
idx = s.find("貼り付けられた")
print("paste refs", s.count("貼り付けられた"))

# look for technique id pattern
ids = re.findall(r'kb-[a-z0-9_-]+', s)
print("kb ids", len(ids), ids[:5] if ids else "")
