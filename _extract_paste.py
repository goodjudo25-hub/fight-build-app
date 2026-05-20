import re

path = r"c:\Users\user\Downloads\アマデウス - 格闘技分析アプリ開発.html"
with open(path, encoding="utf-8") as f:
    s = f.read()

# Find the pasted text block near "貼り付けられたテキスト"
idx = s.find("貼り付けられたテキスト")
print("paste ref at", idx)

# Find pre block with data-end around 1086 after paste mention
m = re.search(
    r'貼り付けられたテキスト.*?<pre[^>]*data-start="(\d+)" data-end="(\d+)"',
    s,
    re.DOTALL,
)
if m:
    start, end = int(m.group(1)), int(m.group(2))
    print("pre data-start/end", start, end)

# Extract all text between data-start=175 and nearby
for m in re.finditer(r'data-start="175" data-end="1086"', s):
    pos = m.start()
    chunk = s[pos : pos + 15000]
    # get code content
    code = re.search(r'<code[^>]*>(.*?)</code>', chunk, re.DOTALL)
    if code:
        text = re.sub(r"<[^>]+>", "\n", code.group(1))
        text = re.sub(r"\n+", "\n", text).strip()
        with open(
            r"c:\Users\user\Desktop\fight-build-app\_pasted_techniques.txt",
            "w",
            encoding="utf-8",
        ) as out:
            out.write(text)
        print("wrote", len(text), "chars")
        print(text[:2000])

# Alternative: find cm-content or textarea with technique data
for pat in [r"data-end=\"1086\"", r"kb-jab", r'"category":\s*"punch"']:
    for m in re.finditer(pat, s):
        pos = m.start()
        chunk = s[max(0, pos - 500) : pos + 3000]
        text = re.sub(r"<[^>]+>", "", chunk)
        if "punch" in text or "ジャブ" in text or "kcal" in text:
            print("--- match", pat, pos)
            print(text[:1500])
            break
