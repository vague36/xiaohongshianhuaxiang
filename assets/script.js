const cards = window.CARDS || [];
const grid = document.querySelector("#grid");
const count = document.querySelector("#count");
const q = document.querySelector("#q");
const group = document.querySelector("#group");
const level = document.querySelector("#level");
const dim = document.querySelector("#dim");

function optionize(select, values, label){
  select.innerHTML = `<option value="">${label}</option>` + values.map(v=>`<option value="${v}">${v}</option>`).join("");
}
optionize(group, [...new Set(cards.map(c=>c.group))], "全部人群");
optionize(level, [...new Set(cards.map(c=>c.level))], "全部分档");
optionize(dim, [...new Set(cards.map(c=>c.dim))], "全部短板");

function render(){
  const kw = q.value.trim().toLowerCase();
  const list = cards.filter(c=>{
    const hay = [c.group,c.level,c.dim,c.title,c.subtitle,c.description,c.code].join(" ").toLowerCase();
    return (!kw || hay.includes(kw)) &&
      (!group.value || c.group===group.value) &&
      (!level.value || c.level===level.value) &&
      (!dim.value || c.dim===dim.value);
  });
  count.textContent = `当前显示 ${list.length} / ${cards.length} 张画像卡`;
  grid.innerHTML = list.map(c=>`
    <a class="tile" href="${c.page}" style="--accent:${c.group_color}">
      <div class="badges">
        <span class="badge"><span class="group-dot"></span>${c.group}</span>
        <span class="badge">${c.level}</span>
        <span class="badge">${c.dim}</span>
      </div>
      <h2>${c.title}</h2>
      <p class="sub">${c.subtitle}</p>
      <p class="desc">${c.description}</p>
      <div class="code">${c.code} · ${c.id}</div>
    </a>
  `).join("");
}
[q,group,level,dim].forEach(el=>el.addEventListener("input",render));
render();