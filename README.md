# 🧠 Base de Conhecimento

Minhas anotações de tudo, separadas por área. Quanto mais notas, maior fica a cabeça do personagem na página inicial.

## Como adicionar uma nota

**Pelo site:** entre na área e clique em **+ Nova nota nesta área**. O GitHub abre já com o modelo; troque o nome do arquivo, escreva e clique em *Commit changes*. Em ~1 minuto o site atualiza sozinho.

**Pelo computador:** crie um `.md` em `notas/<área>/` (use `notas/_modelo.md` como base) e faça `git add . && git commit -m "nova nota" && git push`.

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
