// Lê as notas em notas/<area>/*.md e gera notas.js, que o index.html carrega.
// Uso: node build.js
const fs = require('fs');
const path = require('path');

const RAIZ = __dirname;
const PASTA_NOTAS = path.join(RAIZ, 'notas');
const SAIDA = path.join(RAIZ, 'notas.js');

// Front matter simples: linhas "chave: valor" entre dois "---"
function lerFrontMatter(texto) {
  const m = texto.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { meta: {}, corpo: texto };
  const meta = {};
  for (const linha of m[1].split(/\r?\n/)) {
    const i = linha.indexOf(':');
    if (i > 0) meta[linha.slice(0, i).trim().toLowerCase()] = linha.slice(i + 1).trim();
  }
  return { meta, corpo: texto.slice(m[0].length) };
}

function nomeBonito(id) {
  return id.replace(/[-_]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

const areas = JSON.parse(fs.readFileSync(path.join(RAIZ, 'areas.json'), 'utf8'));

// Pasta nova dentro de notas/ que não está no areas.json vira área automaticamente
for (const pasta of fs.readdirSync(PASTA_NOTAS, { withFileTypes: true })) {
  if (pasta.isDirectory() && !areas.some(a => a.id === pasta.name)) {
    areas.push({ id: pasta.name, nome: nomeBonito(pasta.name), icone: '🧠', cor: '#9b7bff', descricao: '' });
  }
}

const notas = [];
for (const area of areas) {
  const dir = path.join(PASTA_NOTAS, area.id);
  if (!fs.existsSync(dir)) continue;
  for (const arq of fs.readdirSync(dir)) {
    if (!arq.endsWith('.md') || arq.startsWith('_')) continue;
    const texto = fs.readFileSync(path.join(dir, arq), 'utf8');
    const { meta, corpo } = lerFrontMatter(texto);
    const h1 = corpo.match(/^#\s+(.+)$/m);
    notas.push({
      area: area.id,
      slug: arq.replace(/\.md$/, ''),
      titulo: meta.titulo || (h1 ? h1[1].trim() : nomeBonito(arq.replace(/\.md$/, ''))),
      tags: (meta.tags || '').split(',').map(t => t.trim()).filter(Boolean),
      data: meta.data || '',
      conteudo: corpo.trim(),
    });
  }
}

notas.sort((a, b) => (b.data || '').localeCompare(a.data || '') || a.titulo.localeCompare(b.titulo));

const base = { geradoEm: new Date().toISOString(), areas, notas };
fs.writeFileSync(SAIDA, '// Gerado por build.js — não editar à mão\nwindow.BASE = ' + JSON.stringify(base) + ';\n');
console.log(`${notas.length} notas em ${areas.length} áreas -> notas.js`);
