#!/usr/bin/env python3
import json
import os
import re
import sys
from pathlib import Path

import qrcode

ROOT = Path(__file__).resolve().parents[1]
SPECIES_FILE = ROOT / 'src' / 'data' / 'species.js'
OUTPUT_DIR = ROOT / 'public' / 'qrcodes'


def load_species():
    text = SPECIES_FILE.read_text(encoding='utf-8')
    pattern = re.compile(
        r"\{\s*id:\s*(\d+),\s*slug:\s*'([^']+)',\s*commonName:\s*'([^']+)'"
    )
    return [
        {'id': int(item_id), 'slug': slug, 'commonName': name}
        for item_id, slug, name in pattern.findall(text)
    ]


def main():
    if len(sys.argv) > 1:
        base_url = sys.argv[1]
    else:
        base_url = os.environ.get('GABIROBA_BASE_URL', '')

    if not base_url:
        print('Uso: python3 scripts/generate_qrcodes.py https://seu-dominio.com')
        print('ou: GABIROBA_BASE_URL=https://seu-dominio.com python3 scripts/generate_qrcodes.py')
        raise SystemExit(1)

    base_url = base_url.rstrip('/')
    species = load_species()
    if len(species) != 20:
        raise RuntimeError(f'Esperadas 20 espécies, encontradas {len(species)}.')

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest = []

    for item in species:
        url = f"{base_url}/#/especies/{item['slug']}?origem=qrcode"
        filename = f"{item['id']:02d}-{item['slug']}.png"
        output_file = OUTPUT_DIR / filename

        qr = qrcode.QRCode(
            version=None,
            error_correction=qrcode.constants.ERROR_CORRECT_H,
            box_size=12,
            border=4,
        )
        qr.add_data(url)
        qr.make(fit=True)
        qr.make_image(fill_color='black', back_color='white').save(output_file)

        manifest.append({
            'id': item['id'],
            'planta': item['commonName'],
            'slug': item['slug'],
            'url': url,
            'arquivo': f"/qrcodes/{filename}",
        })

    (OUTPUT_DIR / 'qrcodes.json').write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + '\n',
        encoding='utf-8',
    )

    print(f'Criados {len(manifest)} QR Codes em {OUTPUT_DIR}')
    for item in manifest:
        print(f"{item['id']:02d}  {item['planta']}: {item['url']}")


if __name__ == '__main__':
    main()
