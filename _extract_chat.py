import re
import html as html_lib

path = r"c:\Users\user\Downloads\アマデウス - 格闘技分析アプリ開発.html"
with open(path, encoding="utf-8") as f:
    s = f.read()

msgs = re.findall(
    r'data-testid="collapsible-user-message-content"[\s\S]*?whitespace-pre-wrap">([\s\S]*?)</div></div><label',
    s,
)
out = []
out.append(f"user messages: {len(msgs)}")
for i, m in enumerate(msgs, 1):
    t = re.sub(r"<[^>]+>", "", m)
    t = html_lib.unescape(t).strip()
    out.append(f"\n--- USER {i} ---\n{t}")

heads = re.findall(r"<h[12][^>]*>([^<]+)</h[12]>", s)
out.append("\n\n--- HEADINGS ---")
out.extend(heads[:80])

with open(r"c:\Users\user\Desktop\fight-build-app\_chat_extract.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(out))
print("wrote _chat_extract.txt")
