import re, pathlib, json
html_path = pathlib.Path(r'..\onkar-raut-portfolio_1.html')
html = html_path.read_text(encoding='utf-8', errors='ignore')
img_matches = re.findall(r'<img[^>]+src="([^"]+)"', html)
video_matches = re.findall(r'<video[^>]+src="([^"]+)"', html)
if not img_matches or len(video_matches) < 4:
    raise SystemExit('Missing original media assets in HTML file')
content = []
content.append('export const ORIGINAL_PROFILE_IMAGE = ' + json.dumps(img_matches[0]) + ';')
for i, src in enumerate(video_matches[:4], 1):
    content.append(f'export const ORIGINAL_VIDEO_{i} = {json.dumps(src)};')
pathlib.Path('lib/original-assets.ts').write_text('\n'.join(content) + '\n', encoding='utf-8')
