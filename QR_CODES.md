# QR Codes — Festival Gabiroba

O site usa HashRouter para funcionar corretamente no GitHub Pages.
Quando uma espécie é aberta pelo QR Code com `?origem=qrcode`, ela é registrada na página **Minha trilha**.

## Domínio publicado

```text
https://caju-producoes.github.io/festival_gabiroba_site/
```

## Formato das URLs

Exemplo para o Cambuci:

```text
https://caju-producoes.github.io/festival_gabiroba_site/#/especies/cambuci?origem=qrcode
```

## Gerar novamente os 20 QR Codes

```bash
python3 scripts/generate_qrcodes.py https://caju-producoes.github.io/festival_gabiroba_site
```

Os arquivos são criados em `public/qrcodes/`, junto com `qrcodes.json`.

## Antes de imprimir

1. Publique a versão com HashRouter.
2. Abra o endereço principal do site e confirme que funciona.
3. Teste alguns QR Codes pelo celular.
4. Confirme que a espécie abre diretamente e entra em **Minha trilha**.
5. Só depois envie os PNGs finais para impressão.
