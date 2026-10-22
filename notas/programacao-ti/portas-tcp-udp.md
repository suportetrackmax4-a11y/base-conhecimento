---
titulo: Portas, TCP e UDP
tags: redes, rastreador, servidor
data: 2026-10-22
---

# Portas, TCP e UDP

Um servidor tem **um IP** e **várias portas**. Cada porta é uma "porta de entrada"
para um serviço diferente. Exemplo: rastreadores Suntech 4G chegam numa porta e
os 2G em outra.

| | TCP | UDP |
|---|---|---|
| Conexão | abre e mantém | só manda |
| Garante entrega? | sim, reenvia | não |
| Uso comum | web, rastreadores, FTP | DNS, vídeo ao vivo |

Testar se uma porta está aberta (PowerShell):

```powershell
Test-NetConnection servidor.com -Port 5011
```
