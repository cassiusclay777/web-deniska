"""
Úprava hero fotky: ořez vlevo, důraz na horní část těla, jemné zesvětlení.
Záloha: foto1-original.webp (při prvním běhu se přejmenuje původní foto1.webp).

Spuštění z kořene projektu: pip install -r scripts/pillow.txt && python scripts/process_hero_photo.py
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "foto1.webp"
BACKUP = ROOT / "foto1-original.webp"
OUT = ROOT / "foto1.webp"

# Ořez (0–1): vlevo prázdné pryč, vertikálně horní část postavy
CROP_LEFT_RATIO = 0.22
CROP_TOP_RATIO = 0.03
CROP_BOTTOM_RATIO = 0.69

MAX_LONG_EDGE = 3200

BRIGHTNESS = 1.055
COLOR_SAT = 1.028

# Poměr výřezu jako u hero rámečku (šířka : výška)
HERO_ASPECT_W = 4
HERO_ASPECT_H = 5


def crop_center_aspect(im: Image.Image, aw: int, ah: int) -> Image.Image:
    """Ořízne na poměr aw:ah (např. 4:5) ze středu."""
    w, h = im.size
    target = aw / ah
    cur = w / h
    if cur > target:
        nw = int(round(h * target))
        x0 = max(0, (w - nw) // 2)
        return im.crop((x0, 0, x0 + nw, h))
    nh = int(round(w / target))
    y0 = max(0, (h - nh) // 2)
    return im.crop((0, y0, w, y0 + nh))


def main() -> None:
    if not BACKUP.exists():
        if not SRC.exists():
            raise SystemExit(f"Chybí {SRC} i záloha {BACKUP}")
        SRC.rename(BACKUP)
        print(f"Vytvořena záloha originálu: {BACKUP.name}")

    img = Image.open(BACKUP).convert("RGB")
    w, h = img.size

    left = int(w * CROP_LEFT_RATIO)
    top = int(h * CROP_TOP_RATIO)
    right = w
    bottom = int(h * CROP_BOTTOM_RATIO)
    cropped = img.crop((left, top, right, bottom))
    cropped = crop_center_aspect(cropped, HERO_ASPECT_W, HERO_ASPECT_H)

    out = ImageEnhance.Brightness(cropped).enhance(BRIGHTNESS)
    out = ImageEnhance.Color(out).enhance(COLOR_SAT)
    out = out.filter(ImageFilter.UnsharpMask(radius=1.0, percent=45, threshold=2))

    lo = max(out.size)
    if lo > MAX_LONG_EDGE:
        s = MAX_LONG_EDGE / lo
        out = out.resize(
            (int(out.width * s), int(out.height * s)),
            Image.Resampling.LANCZOS,
        )

    out.save(OUT, "WEBP", quality=88, method=6)
    print(f"Hotovo: {OUT.name} ({out.size[0]}x{out.size[1]} px)")


if __name__ == "__main__":
    main()
