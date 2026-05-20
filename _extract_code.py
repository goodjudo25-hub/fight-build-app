import re
import html as html_lib

path = r"c:\Users\user\Downloads\アマデウス - 格闘技分析アプリ開発.html"
with open(path, encoding="utf-8") as f:
    s = f.read()

# code inside pre blocks - look for language markers or technique names
blocks = re.findall(
    r'<code[^>]*>([\s\S]*?)</code>',
    s,
)
out = []
for b in blocks:
    t = re.sub(r"<[^>]+>", "\n", b)
    t = html_lib.unescape(t).strip()
    if len(t) > 80 and any(
        k in t
        for k in (
            "techniques",
            "combo",
            "function",
            "const ",
            "class=",
            "renderCombos",
            "combo-builder",
        )
    ):
        out.append(t)

with open(r"c:\Users\user\Desktop\fight-build-app\_code_extract.txt", "w", encoding="utf-8") as f:
    f.write("\n\n===== BLOCK =====\n\n".join(out[:15]))

print("blocks", len(out))
