# Festival Gabiroba — React + Vite

MVP do site do Festival Gabiroba, com identidade visual inspirada no material oficial do evento.

## O que já existe

- Home institucional enxuta
- Manifesto do Festival
- Apresentação dos 3 dias: A Mata, A Cozinha e O Encontro
- Coleção das 14 espécies em `/especies`
- Página individual de espécie em `/especies/:slug`
- Experiência de QR Code por `?origem=qrcode`
- Progresso salvo em `localStorage`
- Página `/minha-trilha`
- Layout mobile-first

## Rodar localmente

```bash
npm install
npm run dev
```

## URLs úteis

- `/`
- `/especies`
- `/minha-trilha`
- `/especies/cambuci`
- `/especies/cambuci?origem=qrcode`

As 14 espécies possuem conteúdo para o MVP. Observações editoriais de validação permanecem guardadas no código, mas não são exibidas aos visitantes.

## Fotos das especies

A V3 ja aceita fotografias locais por especie. Coloque os arquivos em `public/images/especies/` e informe `image`, `imageAlt`, `imageCredit` e `imageSource` em `src/data/species.js`.

Para imagens encontradas na internet, prefira Wikimedia Commons ou acervos institucionais com licenca clara. Nao use apenas uma imagem do Google Imagens sem verificar autoria e permissao de uso.


## V5
- adicionadas imagens provisórias nas espécies restantes para o MVP
- corrigido o layout dos cards para que o nome da planta não fique sobre a foto
- identificações provisórias permanecem registradas internamente para revisão posterior

## V6
- conteúdo completo das 14 espécies
- observações de validação mantidas apenas internamente, sem avisos visíveis no site
- página individual padronizada para todas as espécies


## QR Codes

Veja `QR_CODES.md` para gerar os 22 códigos apontando para o domínio definitivo do site.
