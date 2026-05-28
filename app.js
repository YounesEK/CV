/* ============================================================
   RENDER - reads CV_DATA and builds the page.
   Do not edit content here; edit data.js instead.
   i18n note: when adding languages, route strings through a
   t() helper that reads the active language before render().
   ============================================================ */

const $ = (sel) => document.querySelector(sel);

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

function renderHome(d) {
  const p = d.profile;
  $("#brand").textContent = p.name;
  $("#navDownload").href = p.cvFile;

  const meta = [
    p.location ? `<span>${esc(p.location)}</span>` : "",
    `<a href="mailto:${esc(p.email)}">${esc(p.email)}</a>`,
    ...p.links.map((l) => `<a href="${esc(l.url)}">${esc(l.label)}</a>`),
  ]
    .filter(Boolean)
    .join("");

  $("#home").innerHTML = `
    <div class="hero-grid">
      <div>
        <h1 class="hero-name">${esc(p.name).replace(/ (\S+)$/, " <span>$1</span>")}</h1>
        <p class="hero-title">${esc(p.title)}</p>
        <p class="hero-tagline">${esc(p.tagline)}</p>
        <div class="hero-meta">${meta}</div>
        <div class="hero-actions">
          <a class="btn-primary" href="${esc(p.cvFile)}" download>Descargar CV</a>
          <a class="btn-ghost" href="#experience">Ver experiencia</a>
        </div>
      </div>
      <img class="photo" src="${esc(p.photo)}" alt="${esc(p.name)}"
           onerror="this.removeAttribute('src')" />
    </div>
    <p class="summary-block">${esc(d.summary)}</p>
  `;
}

function renderExperience(list) {
  const items = list
    .map(
      (e) => `
    <article class="exp-item reveal">
      <div class="exp-when">
        <span class="period">${esc(e.period)}</span>
        <span class="duration">${esc(e.duration)}</span>
        ${e.location ? `<span class="loc">${esc(e.location)}</span>` : ""}
      </div>
      <div>
        <h3 class="exp-role">${esc(e.role)}</h3>
        <p class="exp-company">${esc(e.company)}</p>
        <ul class="exp-highlights">
          ${e.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}
        </ul>
      </div>
    </article>`
    )
    .join("");

  $("#experience").innerHTML = `
    <p class="eyebrow">Trayectoria</p>
    <h2 class="section-title">Experiencia profesional</h2>
    ${items}
  `;
}

function renderEducation(list) {
  const items = list
    .map(
      (e) => `
    <div class="edu-item reveal">
      <div>
        <p class="edu-degree">${esc(e.degree)}</p>
        <p class="edu-school">${esc(e.school)}</p>
      </div>
      <div class="edu-when">${esc(e.period)}<br>${esc(e.duration)}</div>
    </div>`
    )
    .join("");

  $("#education").innerHTML = `
    <p class="eyebrow">Academico</p>
    <h2 class="section-title">Formacion</h2>
    ${items}
  `;
}

function renderCerts(list) {
  const cards = list
    .map(
      (c) => `
    <div class="cert-card reveal">
      <p class="cert-name">${esc(c.name)}</p>
      ${c.issuer ? `<p class="cert-issuer">${esc(c.issuer)}</p>` : ""}
    </div>`
    )
    .join("");

  $("#certs").innerHTML = `
    <p class="eyebrow">Acreditaciones</p>
    <h2 class="section-title">Certificaciones</h2>
    <div class="cert-grid">${cards}</div>
  `;
}

function renderSkills(s) {
  const core = s.core.map((x) => `<span class="tag core">${esc(x)}</span>`).join("");
  const tools = s.tools.map((x) => `<span class="tag">${esc(x)}</span>`).join("");
  const langs = s.languages
    .map(
      (l) => `
    <div class="lang-row">
      <span class="lang-name">${esc(l.name)}</span>
      <span class="lang-level">${esc(l.level)}</span>
    </div>`
    )
    .join("");

  $("#skills").innerHTML = `
    <p class="eyebrow">Capacidades</p>
    <h2 class="section-title">Habilidades</h2>
    <div class="skills-grid">
      <div>
        <div class="skill-group">
          <h3>Competencias clave</h3>
          <div class="tags">${core}</div>
        </div>
        <div class="skill-group">
          <h3>Herramientas</h3>
          <div class="tags">${tools}</div>
        </div>
      </div>
      <div class="skill-group">
        <h3>Idiomas</h3>
        ${langs}
      </div>
    </div>
  `;
}

function renderFooter(d) {
  $("#footer").innerHTML = `
    <span>${esc(d.profile.name)}</span>
    <a href="mailto:${esc(d.profile.email)}">${esc(d.profile.email)}</a>
  `;
}

function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

function render() {
  renderHome(CV_DATA);
  renderExperience(CV_DATA.experience);
  renderEducation(CV_DATA.education);
  renderCerts(CV_DATA.certifications);
  renderSkills(CV_DATA.skills);
  renderFooter(CV_DATA);
  initReveal();
}

document.addEventListener("DOMContentLoaded", render);
