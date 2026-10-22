# 🧠 Base de Conhecimento

Minhas anotações de tudo, separadas por área. Quanto mais notas, maior fica a cabeça do personagem na página inicial.

## Como adicionar uma nota

**Pelo site:** clique em **+ Nova nota**, escreva e **Salvar**. Na primeira vez em cada navegador, o site pede para conectar ao GitHub (botão ⚙️) — é só seguir os passos que aparecem.

**Pelo computador:** rode `git pull` antes (o GitHub atualiza o `notas.js` sozinho), crie um `.md` em `notas/<área>/` (use `notas/_modelo.md` como base) e faça `git add . && git commit -m "nova nota" && git push`.

Cabeçalho de cada nota:

```
---
titulo: Título da nota
tags: git, redes
data: 2026-10-22
---
```

## Como criar uma área nova

Crie uma pasta nova dentro de `notas/` e ela já aparece no site. Para escolher nome, ícone e cor, adicione a área em `areas.json`.

## Ver no computador antes de subir

```
node build.js
```

Depois abra o `index.html` no navegador.
