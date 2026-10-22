---
titulo: Git básico — o ciclo do dia a dia
tags: git, github, terminal
data: 2026-10-22
---

# Git básico — o ciclo do dia a dia

O Git guarda **fotos** (commits) do seu projeto. O ciclo é sempre o mesmo:

1. Mexe nos arquivos
2. `git add` escolhe o que entra na foto
3. `git commit` tira a foto
4. `git push` manda as fotos pro GitHub

```bash
git status                 # o que mudou?
git add .                  # coloca tudo na próxima foto
git commit -m "mensagem"   # tira a foto
git push                   # envia pro GitHub
git pull                   # baixa o que mudou lá
```

> Dica: rode `git status` antes de tudo. Ele sempre diz o próximo passo.
