const company = {
  name: "Acero Solutions Pvt Ltd",
  shortName: "Acero Solutions",
  tagline: "[Add tagline]",
  email: "Acerosolutions@gmail.com",
  address: "Office No 17/05, Wave Silver, Sector 18, Noida, Uttar Pradesh, India"
};

const trustItems = [
  ["badge-check", "Registered Indian Entity"],
  ["cloud", "Cloud & Security Focused"],
  ["network", "End-to-End Delivery"],
  ["briefcase-business", "Business-First Consulting"],
  ["layers-3", "Cross-Functional Delivery Teams"],
  ["file-check-2", "Documented, Checkpoint-Driven Engagements"],
  ["globe", "India-Based, Remote-Friendly"],
  ["handshake", "Direct Access To Your Delivery Team"]
];

const serviceList = [
  {
    key: "data-analytics",
    title: "Data Analytics",
    icon: "bar-chart-3",
    summary: "Turn raw operational data into dashboards, forecasts, and decisions your leadership team can act on."
  },
  {
    key: "it-services",
    title: "IT Services",
    icon: "server-cog",
    summary: "Keep networks, endpoints, and support desks running so your team never has to think about infrastructure."
  },
  {
    key: "devops",
    title: "DevOps",
    icon: "workflow",
    summary: "Automate builds, releases, and environments so engineering can ship with confidence, not caution."
  },
  {
    key: "cloud-solutions",
    title: "Cloud Solutions",
    icon: "cloud-cog",
    summary: "Plan, migrate, and run cloud environments that scale with the business instead of against it."
  },
  {
    key: "cyber-security",
    title: "Cyber Security",
    icon: "shield-check",
    summary: "Layered protection for users, data, and applications, backed by a plan for when things go wrong."
  },
  {
    key: "it-consulting",
    title: "IT Consulting",
    icon: "compass",
    summary: "Turn a list of technology problems into a sequenced, fundable roadmap."
  }
];

const serviceDetails = {
  "data-analytics": {
    eyebrow: "Data analytics",
    title: "Make decisions from evidence, not gut feel.",
    intro: "Acero Solutions helps you collect, clean, and connect the data already sitting inside your business, then puts it in front of the people who need it — without a six-month build.",
    proof: ["Executive dashboards", "Pipeline automation", "Forecast models", "KPI design"],
    problems: [
      "Numbers live in five different spreadsheets and nobody fully trusts them.",
      "Reports take days to assemble and are outdated the moment they're sent.",
      "Nobody can say which metric actually moves the business.",
      "Forecasting is a guess dressed up as a plan."
    ],
    subcategories: ["Business intelligence dashboards", "Data warehousing", "ETL and ELT pipelines", "Predictive analytics", "Automated reporting", "KPI framework design"],
    process: ["Audit existing data sources", "Design a data model that fits the business", "Automate the pipelines", "Ship the first dashboards", "Refine metrics as priorities shift"],
    useCases: ["Executive KPI dashboards", "Revenue and demand forecasting", "Operations reporting", "Customer behaviour analysis"],
    value: "Fewer hours spent assembling reports, and leadership decisions backed by numbers everyone actually trusts."
  },
  "it-services": {
    eyebrow: "IT services",
    title: "Infrastructure that stops being a distraction.",
    intro: "We manage the networks, devices, and day-to-day support work that keep a business running, so your team can focus on the business instead of the printer.",
    proof: ["Managed support", "Network operations", "Endpoint management", "Preventive maintenance"],
    problems: [
      "The same technical issues keep coming back with no permanent fix.",
      "Systems get patched reactively, after something has already broken.",
      "Every new hire's laptop is set up a little differently.",
      "Support requests disappear into a group chat with no owner."
    ],
    subcategories: ["Managed IT support", "Infrastructure management", "Network setup and monitoring", "Endpoint support", "Software provisioning", "Helpdesk services", "Preventive maintenance"],
    process: ["Map the current environment", "Stabilise recurring issues", "Standardise support workflows", "Monitor systems continuously", "Review performance monthly"],
    useCases: ["Office network setup", "Remote and hybrid workforce support", "Uptime and reliability improvement", "IT maintenance planning"],
    value: "Less downtime, a clear support process, and technology that runs quietly in the background where it belongs."
  },
  devops: {
    eyebrow: "DevOps",
    title: "Ship faster without shipping fragile.",
    intro: "We build the automation, environments, and monitoring that let engineering teams release often and sleep at night.",
    proof: ["CI/CD pipelines", "Infrastructure as code", "Container platforms", "Release monitoring"],
    problems: [
      "Deployments are still a manual, nerve-wracking process.",
      "Staging never quite matches production.",
      "Nobody has visibility into a release until users complain.",
      "Infrastructure changes are undocumented and hard to reverse."
    ],
    subcategories: ["CI/CD pipelines", "Infrastructure as code", "Containerisation", "Kubernetes operations", "Monitoring and alerting", "Release automation", "Environment management"],
    process: ["Review the current release workflow", "Standardise environments", "Automate build and deploy", "Add observability", "Tune the delivery cadence"],
    useCases: ["Automated deployment pipelines", "Container platform migration", "Production monitoring rollout", "Infrastructure provisioning"],
    value: "Fewer deployment surprises, shorter release cycles, and an engineering team with a repeatable way of working."
  },
  "cloud-solutions": {
    eyebrow: "Cloud solutions",
    title: "Cloud infrastructure sized to the workload, not the sales pitch.",
    intro: "We plan, migrate, and manage cloud environments that match what the business actually needs — not a generic reference architecture.",
    proof: ["Migration planning", "Architecture design", "Hybrid cloud", "Cost optimisation"],
    problems: [
      "The cloud bill keeps climbing and nobody owns it.",
      "A migration has been \"in planning\" for a year.",
      "Architecture decisions were made once and never revisited.",
      "Backup and recovery plans exist mostly on paper."
    ],
    subcategories: ["Cloud migration", "Cloud architecture", "Hybrid cloud", "Backup and disaster recovery", "Cost optimisation", "Managed cloud operations"],
    process: ["Assess current workloads", "Design the target architecture", "Plan migration in phases", "Harden security controls", "Optimise cost and performance"],
    useCases: ["Application migration to the cloud", "Backup and recovery design", "Hybrid infrastructure planning", "Cloud cost review"],
    value: "A cloud environment that's easier to run, easier to secure, and easier to scale when the business needs it to."
  },
  "cyber-security": {
    eyebrow: "Cyber security",
    title: "Security that's built in, not bolted on afterward.",
    intro: "We help you find the gaps before someone else does, then put layered, practical protection around your users, data, and systems.",
    proof: ["Risk assessment", "Endpoint protection", "Access control", "Incident response planning"],
    problems: [
      "Nobody knows where the real security gaps are.",
      "User access has grown organically with no real governance.",
      "Endpoints and networks have inconsistent protection.",
      "There's no documented plan for what happens during an incident."
    ],
    subcategories: ["Security assessment", "Vulnerability management", "Endpoint security", "Network security", "Identity and access management", "Incident response planning", "Security awareness training"],
    process: ["Assess current exposure", "Prioritise the real risks", "Implement layered controls", "Prepare an incident response plan", "Review and improve regularly"],
    useCases: ["Security posture review", "Endpoint protection rollout", "Access policy clean-up", "Incident readiness planning"],
    value: "Fewer blind spots, clear ownership of security decisions, and a foundation that supports audits instead of dreading them."
  },
  "it-consulting": {
    eyebrow: "IT consulting",
    title: "A roadmap you can actually fund and finish.",
    intro: "We work with leadership to turn a backlog of technology problems into a sequenced plan — with priorities, budgets, and a realistic delivery path.",
    proof: ["IT strategy", "Roadmapping", "System audits", "Vendor evaluation"],
    problems: [
      "Technology spending happens in reaction to whatever broke last.",
      "Everyone agrees systems need work, but not what to do first.",
      "Vendor proposals are hard to compare on anything but price.",
      "Business goals and technical execution live in separate conversations."
    ],
    subcategories: ["IT strategy", "Digital transformation roadmaps", "Vendor evaluation", "System audits", "Technology budgeting", "Process improvement", "Architecture advisory"],
    process: ["Clarify the business goals", "Audit the current state", "Prioritise the opportunities", "Build a phased roadmap", "Support the rollout"],
    useCases: ["Digital transformation planning", "Technology investment review", "Vendor selection", "System modernisation strategy"],
    value: "A decision-ready plan that tells leadership what to invest in first, and why."
  }
};

const root = document.getElementById("app");
const page = root?.dataset.page || "home";
const serviceKey = root?.dataset.service || "";
const inServiceDir = window.location.pathname.includes("/services/");
const base = inServiceDir ? "../" : "";

function serviceHref(item) {
  return `${base}services/${item.key}.html`;
}

function homeHref(path = "") {
  return `${base}${path}`;
}

function icon(name, size = 20) {
  return `<i data-lucide="${name}" style="width:${size}px;height:${size}px"></i>`;
}

function renderShell(content) {
  document.body.insertAdjacentHTML("afterbegin", header());
  root.innerHTML = content;
  document.body.insertAdjacentHTML("beforeend", footer());
  wireInteractions();
}

function header() {
  return `
    <header class="site-header">
      <div class="nav-shell">
        <a class="brand" href="${homeHref("index.html")}" aria-label="Acero Solutions Pvt Ltd home">
          <span class="brand-mark">Acero Solutions<span class="brand-suffix">Pvt Ltd</span></span>
        </a>
        <nav class="nav-links" aria-label="Primary navigation">
          <a class="nav-link" href="${homeHref("index.html")}">Home</a>
          <div class="dropdown">
            <button class="dropdown-trigger" type="button">Services ${icon("chevron-down", 16)}</button>
            <div class="dropdown-menu">
              <a href="${homeHref("services.html")}">
                <span class="icon-box">${icon("layout-grid", 16)}</span>
                <span>All Services</span>
              </a>
              ${serviceList.map(item => `
                <a href="${serviceHref(item)}">
                  <span class="icon-box">${icon(item.icon, 16)}</span>
                  <span>${item.title}</span>
                </a>
              `).join("")}
            </div>
          </div>
          <a class="nav-link" href="${homeHref("about.html")}">About Us</a>
          <a class="nav-link" href="${homeHref("why-us.html")}">Why Us?</a>
          <a class="nav-link" href="${homeHref("contact.html")}">Contact Us</a>
          <a class="button nav-mobile-cta" href="${homeHref("contact.html")}">${icon("calendar-check", 18)} Get Consultation</a>
        </nav>
        <div class="header-actions">
          <a class="button" href="${homeHref("contact.html")}">${icon("calendar-check", 18)} Get Consultation</a>
          <button class="menu-toggle" type="button" aria-label="Open menu">${icon("menu", 22)}</button>
        </div>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-col">
          <div class="footer-brand-lockup">
            <span class="footer-brand">Acero Solutions Pvt Ltd</span>
          </div>
          <p class="footer-tagline">${company.tagline}</p>
          <p>Data, cloud, DevOps, security, and IT consulting for growing businesses — delivered by one accountable team out of Noida, India.</p>
        </div>
        <div class="footer-col">
          <h3>Company</h3>
          <a href="${homeHref("index.html")}">Home</a>
          <a href="${homeHref("about.html")}">About Us</a>
          <a href="${homeHref("why-us.html")}">Why Us?</a>
          <a href="${homeHref("contact.html")}">Contact Us</a>
        </div>
        <div class="footer-col">
          <h3>Services</h3>
          ${serviceList.map(item => `<a href="${serviceHref(item)}">${item.title}</a>`).join("")}
        </div>
        <div class="footer-col">
          <h3>Contact</h3>
          <a href="mailto:${company.email}">${company.email}</a>
          <p>${company.address}</p>
        </div>
      </div>
      <div class="footer-inner footer-bottom">
        <span>&copy; 2026 Acero Solutions Pvt Ltd. All rights reserved.</span>
        <span>Designed for accountable, secure technology delivery.</span>
      </div>
    </footer>
  `;
}

function trustMarquee() {
  const track = [...trustItems, ...trustItems];
  return `
    <section class="trust-strip-outer">
      <div class="marquee" aria-label="Why businesses work with us">
        <div class="marquee-track">
          ${track.map(([ic, text], i) => `
            <div class="trust-item"${i >= trustItems.length ? ' aria-hidden="true"' : ""}>${icon(ic, 20)}<span>${text}</span></div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function serviceIndexPanel() {
  return `
    <div class="service-index">
      <div class="service-index-head">Service Index</div>
      ${serviceList.map(item => `
        <a class="service-index-row" href="${serviceHref(item)}">
          <span class="icon-box">${icon(item.icon, 18)}</span>
          <div><h3>${item.title}</h3><p>${item.summary}</p></div>
        </a>
      `).join("")}
    </div>
  `;
}

function architecturePanel(items) {
  return `
    <div class="architecture">
      ${items.map((item, index) => `<div class="arch-node"><span>${item}</span><small>0${index + 1}</small></div>`).join("")}
    </div>
  `;
}

function heroPhoto(url, alt) {
  return `
    <div class="hero-photo">
      <img src="${url}" alt="${alt}" loading="lazy">
    </div>
  `;
}

function infoPanel({ quote = "", facts = [], tags = [] }) {
  return `
    <div class="info-panel reveal">
      ${quote ? `<p class="quote">${quote}</p>` : ""}
      ${facts.length ? `<div class="info-panel-facts">${facts.map(([k, v]) => `<div><span>${k}</span><span>${v}</span></div>`).join("")}</div>` : ""}
      ${tags.length ? `<div class="info-panel-tags">${tags.map(t => `<span class="pill">${icon("circle-dot", 14)} ${t}</span>`).join("")}</div>` : ""}
    </div>
  `;
}

function hero(opts) {
  const {
    eyebrow, title, lead, points = [], visual = "", short = false,
    ctaPrimary = { label: "Explore Services", href: homeHref("services.html"), icon: "layers-3" },
    ctaSecondary = { label: "Book a Consultation", href: homeHref("contact.html"), icon: "message-square" }
  } = opts;
  const hasVisual = Boolean(visual);
  return `
    <section class="hero ${short ? "short" : ""}">
      <div class="section-inner hero-inner ${hasVisual ? "" : "single"}">
        <div class="hero-copy">
          <div class="eyebrow">${eyebrow}</div>
          <h1>${title}</h1>
          <p class="lead">${lead}</p>
          ${points.length ? `<ul class="hero-points">${points.map(p => `<li>${p}</li>`).join("")}</ul>` : ""}
          <div class="hero-actions">
            <a class="button" href="${ctaPrimary.href}">${icon(ctaPrimary.icon, 18)} ${ctaPrimary.label}</a>
            <a class="button ghost" href="${ctaSecondary.href}">${icon(ctaSecondary.icon, 18)} ${ctaSecondary.label}</a>
          </div>
        </div>
        ${hasVisual ? `<div class="reveal">${visual}</div>` : ""}
      </div>
    </section>
  `;
}

function serviceCards() {
  return serviceList.map(item => `
    <a class="card reveal" href="${serviceHref(item)}">
      <span class="icon-box">${icon(item.icon, 22)}</span>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="service-card-footer" aria-hidden="true">
        <span class="service-chip">Strategy</span>
        <span class="service-chip">Delivery</span>
        <span class="service-chip">Support</span>
      </div>
      <span class="card-link">Learn more ${icon("arrow-right", 17)}</span>
    </a>
  `).join("");
}

function stepper(items, cardClass = "capability-item") {
  return items.map(([title, text], i) => `
    <div class="${cardClass} stepper-item reveal" style="--stagger:${i * 100}ms">
      <span class="step-number">0${i + 1}</span>
      ${cardClass === "capability-item" ? `<span class="icon-box">${icon("radar", 19)}</span><div><h3>${title}</h3><p>${text}</p></div>` : `<h3>${title}</h3><p>${text}</p>`}
    </div>
  `).join("");
}

function renderHome() {
  renderShell(`
    ${hero({
      eyebrow: "Full-stack IT partner",
      title: "One Accountable Partner For Your Entire Technology Stack",
      lead: "Acero Solutions designs, builds, and runs the data, cloud, DevOps, security, and support systems that keep a growing business moving — without hand-offs between five different vendors.",
      points: [
        "Strategy, delivery, and day-to-day operations under one team, not a chain of subcontractors.",
        "Built for companies that need dependable systems, clear reporting, and security that holds up under pressure.",
        "Engagements run on defined scopes, checkpoints, and documentation — not open-ended retainers."
      ],
      visual: serviceIndexPanel()
    })}
    ${trustMarquee()}
    <section class="section">
      <div class="section-inner feature-band">
        <div class="feature-panel reveal">
          <div class="eyebrow">What we build</div>
          <h2>From a list of problems to a system that works.</h2>
          <p>Most companies don't lack technology — they lack a sequence. Acero Solutions helps decide what to fix first: stabilise the basics, modernise the architecture, automate the repetitive work, close the security gaps, and make the data usable.</p>
          <p>Every recommendation ties back to something measurable: less downtime, faster reporting, quicker releases, tighter security, or lower cloud spend.</p>
        </div>
        <div class="capability-map">
          ${stepper([
            ["Assess", "Review infrastructure, applications, data, cloud, and support workflows as they actually run today."],
            ["Modernize", "Redesign architecture, migrate workloads, and automate delivery so teams stop fighting old bottlenecks."],
            ["Protect", "Strengthen access controls, endpoint security, backups, and incident response readiness."],
            ["Optimize", "Track performance, control cloud spend, and refine reporting on an ongoing basis."]
          ], "capability-item")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-inner">
        <div class="section-heading reveal">
          <h2>Six capabilities. One coordinated team.</h2>
          <p>Each service stands on its own, but the strongest results come from designing infrastructure, delivery, data, and security together.</p>
        </div>
        <div class="grid three">${serviceCards()}</div>
      </div>
    </section>
    <section class="section dark">
      <div class="section-inner">
        <div class="section-heading reveal">
          <h2>Built for leaders who need technology explained in plain terms.</h2>
          <p>We keep technical decisions tied to budgets, risk, and business impact — not just tools.</p>
        </div>
        <div class="insight-row reveal">
          <div><strong>Clear ownership</strong><p>Every workstream has a named owner, a scope, and a next step.</p></div>
          <div><strong>Security by design</strong><p>Security is part of the architecture from day one, not a patch applied later.</p></div>
          <div><strong>Measurable progress</strong><p>Regular checkpoints show whether systems are actually improving.</p></div>
        </div>
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="section-heading reveal">
          <h2>How we work.</h2>
          <p>A repeatable delivery model that keeps every decision tied to a business outcome.</p>
        </div>
        <div class="grid four process">
          ${stepper([
            ["Assess the current state", "Review systems, risks, data, and support needs against business priorities."],
            ["Design the target model", "Plan infrastructure, workflows, and security controls before writing a line of code."],
            ["Implement in phases", "Execute with clear ownership, documentation, and checkpoints along the way."],
            ["Optimize continuously", "Measure outcomes and keep tuning after go-live, not just before it."]
          ], "card")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-inner split">
        <div class="reveal">
          <div class="eyebrow">Industries served</div>
          <h2>Practical IT support for teams that need clarity, speed, and resilience.</h2>
          <p class="muted">We work with organisations where technology has to stay dependable — finance, retail, logistics, healthcare, startups, and enterprise operations.</p>
          <div class="industry-list">
            ${["Finance", "Retail", "Logistics", "Healthcare", "Startups", "Enterprise Operations"].map(item => `<span class="pill">${icon("circle-dot", 15)} ${item}</span>`).join("")}
          </div>
        </div>
        ${infoPanel({
          quote: "“Good technology is the kind nobody notices — until it isn't there.”",
          facts: [["Delivery model", "Assess, design, implement, optimize"], ["Engagement style", "Fixed scope or ongoing partnership"], ["Based in", "Noida, Uttar Pradesh"]]
        })}
      </div>
    </section>
    <section class="cta-section">
      <div class="section-inner">
        <div class="cta-band reveal">
          <div>
            <div class="eyebrow">Start the conversation</div>
            <h2>Tell us what's not working.</h2>
            <p>Start with a focused conversation about the systems, data, or security gaps slowing you down. We'll help map the right starting point before recommending any tool.</p>
          </div>
          <div class="cta-actions">
            <a class="button" href="${homeHref("contact.html")}">${icon("send", 18)} Contact Acero Solutions</a>
          </div>
        </div>
      </div>
    </section>
  `);
}

function renderServices() {
  renderShell(`
    ${hero({
      eyebrow: "Services",
      title: "IT Solutions Built Around Business Outcomes",
      lead: "Start with one capability or combine several into a phased roadmap. Every engagement includes discovery, delivery, and follow-through — not just a hand-off.",
      points: [
        "Begin with a single service area or plan a multi-phase roadmap from day one.",
        "Each engagement includes discovery, structured delivery, and documentation.",
        "Built for teams that want execution, not another slide deck of possibilities."
      ],
      visual: serviceIndexPanel(),
      short: true
    })}
    <section class="section">
      <div class="section-inner">
        <div class="section-heading reveal">
          <h2>Explore the core service portfolio.</h2>
          <p>Each service page covers sub-categories, use cases, delivery steps, and the problems it solves.</p>
        </div>
        <div class="grid three">${serviceCards()}</div>
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="section-heading reveal">
          <h2>Fragmented vendors slow you down.</h2>
          <p>Separate tools and vendors create hand-off gaps. Acero Solutions connects strategy, delivery, and operations under one team.</p>
        </div>
        <div class="comparison reveal">
          <div class="comparison-row"><div><strong>Fragmented vendors</strong><p>Separate tools, hand-offs, and unclear accountability.</p></div><div><strong>Acero Solutions</strong><p>One team covering assessment, architecture, delivery, and optimisation.</p></div></div>
          <div class="comparison-row"><div><strong>Reactive support</strong><p>Issues get fixed only after they affect users.</p></div><div><strong>Structured operations</strong><p>Monitoring, documentation, and maintenance are planned upfront.</p></div></div>
          <div class="comparison-row"><div><strong>Security added late</strong><p>Controls get patched in after launch.</p></div><div><strong>Security-aware delivery</strong><p>Protection is considered from the first design conversation.</p></div></div>
        </div>
      </div>
    </section>
  `);
}

function renderServiceDetail() {
  const detail = serviceDetails[serviceKey] || serviceDetails["data-analytics"];
  const item = serviceList.find(s => s.key === serviceKey);
  renderShell(`
    ${hero({
      eyebrow: detail.eyebrow,
      title: detail.title,
      lead: detail.intro,
      points: [detail.problems[0], detail.value, "Every engagement includes discovery, delivery, documentation, and a defined review point."],
      visual: architecturePanel(detail.proof),
      short: true,
      ctaPrimary: { label: "Discuss This Service", href: homeHref("contact.html"), icon: "message-circle" },
      ctaSecondary: { label: "All Services", href: homeHref("services.html"), icon: "layout-grid" }
    })}
    <section class="section">
      <div class="section-inner grid two">
        <div class="reveal">
          <div class="section-heading" style="margin-bottom:18px"><h2>Business problems this solves.</h2></div>
          <ul class="check-list">${detail.problems.map(p => `<li>${icon("check-circle-2", 20)}<span>${p}</span></li>`).join("")}</ul>
        </div>
        <div class="card reveal">
          <span class="icon-box">${icon(item?.icon || "settings", 22)}</span>
          <h3>Service focus</h3>
          <p>${detail.value}</p>
        </div>
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="section-heading reveal">
          <h2>What's included.</h2>
          <p>Engagements can stay narrow and targeted, or expand into a broader roadmap.</p>
        </div>
        <div class="grid three">
          ${detail.subcategories.map(s => `<div class="card reveal"><span class="icon-box">${icon("component", 20)}</span><h3>${s}</h3><p>Scoped, delivered, and documented with a clear owner at every step.</p></div>`).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-inner split">
        <div class="reveal">
          <div class="section-heading" style="display:block;margin-bottom:20px"><h2>Delivery process.</h2><p>Structured phases keep the work understandable for stakeholders and useful for technical teams.</p></div>
          <div class="timeline">
            ${detail.process.map((step, index) => `<div class="timeline-item reveal"><strong>Step ${index + 1}</strong><div><strong>${step}</strong><p>Define the expected result, do the work, then review before moving to the next phase.</p></div></div>`).join("")}
          </div>
        </div>
        ${infoPanel({ quote: "Where this typically helps", tags: detail.useCases })}
      </div>
    </section>
    <section class="cta-section">
      <div class="section-inner">
        <div class="cta-band reveal">
          <div>
            <div class="eyebrow">Focused consultation</div>
            <h2>Talk to us about ${detail.eyebrow.toLowerCase()}.</h2>
            <p>Share where things stand today and we'll help map the most practical next step.</p>
          </div>
          <div class="cta-actions">
            <a class="button" href="${homeHref("contact.html")}">${icon("message-circle", 18)} Discuss This Service</a>
          </div>
        </div>
      </div>
    </section>
  `);
}

function renderAbout() {
  renderShell(`
    ${hero({
      eyebrow: "About Acero Solutions",
      title: "A Technology Partner Built Around Follow-Through.",
      lead: "Acero Solutions Pvt Ltd is an IT solutions company based in Noida, India, focused on practical, secure, and well-documented technology delivery.",
      points: [
        "We help businesses fix the technology foundations that daily operations depend on.",
        "Our work connects leadership priorities with hands-on engineering, cloud, data, and security execution.",
        "Acero Solutions is built to support both regional and distributed teams."
      ],
      visual: heroPhoto("https://picsum.photos/id/180/1200/900", "Workspace with a laptop, notebook, and camera in progress"),
      short: true
    })}
    <section class="section">
      <div class="section-inner split">
        <div class="reveal">
          <div class="eyebrow">Company story</div>
          <h2>Technology should make a business clearer, not more complicated.</h2>
          <p>Acero Solutions works with organisations that need dependable IT foundations and straightforward guidance across analytics, infrastructure, cloud, DevOps, and security.</p>
          <p>Our approach stays simple: understand the business first, assess what's actually running, design a roadmap worth funding, and execute with documentation at every step.</p>
        </div>
        ${infoPanel({
          quote: "“We'd rather under-promise on a roadmap than over-promise in a pitch deck.”",
          facts: [["Headquarters", "Noida, Uttar Pradesh, India"], ["Company", "Acero Solutions Pvt Ltd"], ["Focus", "Data, cloud, DevOps, security, consulting"]]
        })}
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="grid two">
          <div class="card reveal"><span class="icon-box">${icon("target", 22)}</span><h3>Mission</h3><p>Help organisations use technology to improve operations, decision-making, security, and growth — without the jargon.</p></div>
          <div class="card reveal"><span class="icon-box">${icon("telescope", 22)}</span><h3>Vision</h3><p>Become the technology partner businesses trust with the systems that actually run their operations.</p></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-inner">
        <div class="section-heading reveal"><h2>Values that guide the work.</h2><p>Strong delivery is built on clarity, not noise.</p></div>
        <div class="grid three">
          ${[
            ["Clarity", "Every engagement should leave systems, responsibilities, and next steps easier to understand."],
            ["Reliability", "Systems should keep working quietly, without daily intervention."],
            ["Security", "Protection is planned in from the start, not patched on afterward."],
            ["Accountability", "Every workstream has a named owner and a defined outcome."],
            ["Craft", "Work that's documented properly is work that can actually be maintained."]
          ].map(([title, text]) => `<div class="card reveal"><span class="icon-box">${icon("sparkles", 20)}</span><h3>${title}</h3><p>${text}</p></div>`).join("")}
        </div>
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner">
        <div class="section-heading reveal"><h2>The people behind the delivery.</h2><p>Small, focused teams built around each engagement.</p></div>
        <!-- TODO: replace the role cards below with real team photography and names once available -->
        <div class="grid three">
          ${["Technology Consultants", "Cloud Engineers", "Security Specialists", "Data Analysts", "DevOps Engineers", "Support Specialists"].map(role => `<div class="card team-card reveal"><div class="avatar">${icon("user-round", 24)}</div><h3>${role}</h3><p>Focused on discovery, implementation, documentation, and continuous improvement.</p></div>`).join("")}
        </div>
      </div>
    </section>
  `);
}

function renderWhyUs() {
  renderShell(`
    ${hero({
      eyebrow: "Why Acero Solutions",
      title: "Why Businesses Choose To Work With Us.",
      lead: "We connect strategy, delivery, operations, and security so technology decisions turn into measurable outcomes.",
      points: [
        "One partner can assess, design, implement, secure, and optimise the environment.",
        "Recommendations stay grounded in operational impact, budget, and long-term maintainability.",
        "Communication stays clear for technical teams and business leadership alike."
      ],
      visual: infoPanel({
        quote: "“One accountable team, from first assessment to ongoing optimisation.”",
        facts: [["Approach", "Assess, design, implement, optimize"], ["Engagement", "Fixed scope or ongoing partnership"], ["Coverage", "Data, cloud, DevOps, security, consulting"]]
      }),
      short: true,
      ctaPrimary: { label: "Get a Consultation", href: homeHref("contact.html"), icon: "calendar-check" },
      ctaSecondary: { label: "See Our Services", href: homeHref("services.html"), icon: "layers-3" }
    })}
    <section class="section">
      <div class="section-inner">
        <div class="section-heading reveal">
          <h2>Advantages that matter after the first meeting.</h2>
          <p>Useful technology work isn't only about tools — it's about decisions, delivery, and long-term operating quality.</p>
        </div>
        <div class="grid three">
          ${[
            ["End-to-end capability", "Infrastructure, cloud, security, analytics, and DevOps under one coordinated team."],
            ["Business-first recommendations", "Every recommendation starts with your operational goals, not a vendor's roadmap."],
            ["Scalable delivery", "Engagements are sized for startups, SMEs, and growing enterprise teams alike."],
            ["Security-aware execution", "Security is part of planning and delivery, not an afterthought."],
            ["Structured communication", "Clear scopes, checkpoints, ownership, and documentation throughout."],
            ["Practical optimisation", "Ongoing attention to cost, performance, and reliability after go-live."]
          ].map(([title, text]) => `<div class="card reveal"><span class="icon-box">${icon("badge-check", 20)}</span><h3>${title}</h3><p>${text}</p></div>`).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-inner">
        <div class="section-heading reveal"><h2>A balanced view.</h2><p>Good consulting makes both the advantages and the required effort visible.</p></div>
        <div class="comparison reveal">
          <div class="comparison-row"><div><strong>Pros</strong><p>Broad capability, one accountable team, scalable engagements, and security-aware delivery.</p></div><div><strong>Considerations</strong><p>Larger transformations benefit from a discovery workshop and a phased rollout.</p></div></div>
          <div class="comparison-row"><div><strong>Best fit</strong><p>Businesses that want a clear roadmap and reliable execution support.</p></div><div><strong>Less ideal</strong><p>Projects where the solution is already fixed and no discovery is welcome.</p></div></div>
        </div>
      </div>
    </section>
    <section class="cta-section">
      <div class="section-inner">
        <div class="cta-band reveal">
          <div>
            <div class="eyebrow">Next step</div>
            <h2>Move from uncertainty to a plan.</h2>
            <p>Bring the problem as it is today. We'll help frame the options and the most practical starting point.</p>
          </div>
          <div class="cta-actions">
            <a class="button" href="${homeHref("contact.html")}">${icon("calendar-check", 18)} Get a Consultation</a>
          </div>
        </div>
      </div>
    </section>
  `);
}

function selectField({ id, label, options, placeholder = null, required = true }) {
  const allOptions = placeholder ? [{ value: "", label: placeholder }, ...options] : options;
  return `
    <div class="field">
      <label for="${id}">${label}</label>
      <div class="custom-select" data-select>
        <button type="button" class="custom-select-trigger" aria-haspopup="listbox" aria-expanded="false">
          <span class="custom-select-value${placeholder ? " is-placeholder" : ""}">${allOptions[0].label}</span>
          ${icon("chevron-down", 16)}
        </button>
        <ul class="custom-select-list" role="listbox">
          ${allOptions.map(o => `<li role="option" tabindex="-1" data-value="${o.value}">${o.label}</li>`).join("")}
        </ul>
        <select id="${id}" name="${id}" class="custom-select-native" tabindex="-1" ${required ? "required" : ""}>
          ${allOptions.map(o => `<option value="${o.value}">${o.label}</option>`).join("")}
        </select>
      </div>
    </div>
  `;
}

function renderContact() {
  renderShell(`
    ${hero({
      eyebrow: "Contact",
      title: "Let's Talk About Your Technology Roadmap.",
      lead: "Tell us about the project, the support gap, or the system that needs fixing. We'll review it and get back to you.",
      points: [
        "Use the form for project scope, service interest, and budget range.",
        "Prefer a direct line? Reach out by email instead.",
        "You'll get an on-screen confirmation the moment your message is submitted."
      ],
      visual: infoPanel({
        quote: "“Here's what happens after you reach out.”",
        facts: [["Step 1", "Share your project or challenge"], ["Step 2", "We review your message"], ["Step 3", "We follow up with next steps"]]
      }),
      short: true,
      ctaPrimary: { label: "Email Us", href: `mailto:${company.email}`, icon: "mail" },
      ctaSecondary: { label: "Fill The Form", href: "#contactForm", icon: "send" }
    })}
    <section class="section soft">
      <div class="section-inner contact-layout">
        <form class="form-panel reveal" id="contactForm">
          <div class="form-panel-head">
            <h2>Send Us A Message</h2>
            <p>Fill in the details below and we'll get back to you shortly.</p>
          </div>
          <div class="form-grid">
            <div class="field"><label for="name">Full name</label><input id="name" name="name" autocomplete="name" required></div>
            <div class="field"><label for="company">Company name</label><input id="company" name="company" autocomplete="organization" required></div>
            <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>
            <div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" required></div>
            ${selectField({
              id: "interest",
              label: "Service interest",
              placeholder: "Select a service",
              options: [...serviceList.map(s => ({ value: s.title, label: s.title })), { value: "General Inquiry", label: "General Inquiry" }]
            })}
            ${selectField({
              id: "budget",
              label: "Project budget range",
              placeholder: "Select a range",
              options: [
                { value: "Under ₹2,00,000", label: "Under ₹2,00,000" },
                { value: "₹2,00,000 – ₹8,00,000", label: "₹2,00,000 – ₹8,00,000" },
                { value: "₹8,00,000 – ₹25,00,000", label: "₹8,00,000 – ₹25,00,000" },
                { value: "₹25,00,000+", label: "₹25,00,000+" },
                { value: "Not sure yet", label: "Not sure yet" }
              ]
            })}
            ${selectField({
              id: "method",
              label: "Preferred contact method",
              options: [
                { value: "Email", label: "Email" },
                { value: "Phone", label: "Phone" },
                { value: "WhatsApp", label: "WhatsApp" }
              ]
            })}
            <div class="field full"><label for="message">Message</label><textarea id="message" name="message" required placeholder="Tell us what you want to improve, secure, build, migrate, or support."></textarea></div>
          </div>
          <div class="hero-actions"><button class="button" type="submit">${icon("send", 18)} Submit Inquiry</button></div>
          <div class="success-message" id="successMessage">Thank you for contacting. We will contact you soon.</div>
        </form>
        <aside class="contact-panel reveal">
          <h2>Direct Contact</h2>
          <p>Use the form for project context, or reach out directly through the channels below.</p>
          <div class="contact-detail">${icon("mail", 22)}<div><strong>Email</strong><br><a href="mailto:${company.email}">${company.email}</a></div></div>
          <div class="contact-detail">${icon("map-pin", 22)}<div><strong>Address</strong><br>${company.address}</div></div>
        </aside>
      </div>
    </section>
  `);
}

function wireInteractions() {
  const toggle = document.querySelector(".menu-toggle");
  toggle?.addEventListener("click", () => document.body.classList.toggle("nav-open"));

  document.querySelectorAll(".dropdown-trigger").forEach(btn => {
    btn.addEventListener("click", event => {
      if (window.matchMedia("(max-width: 980px)").matches) {
        event.preventDefault();
        btn.closest(".dropdown")?.classList.toggle("open");
      }
    });
  });

  document.querySelectorAll(".nav-link, .dropdown-menu a").forEach(link => {
    link.addEventListener("click", () => document.body.classList.remove("nav-open"));
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  document.querySelectorAll("[data-select]").forEach(wrapper => {
    const trigger = wrapper.querySelector(".custom-select-trigger");
    const valueEl = wrapper.querySelector(".custom-select-value");
    const list = wrapper.querySelector(".custom-select-list");
    const native = wrapper.querySelector(".custom-select-native");
    const options = Array.from(list.querySelectorAll("li"));

    function closeSelect() {
      wrapper.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    }

    function chooseOption(li) {
      native.value = li.dataset.value;
      valueEl.textContent = li.textContent;
      valueEl.classList.toggle("is-placeholder", li.dataset.value === "");
      options.forEach(o => o.classList.toggle("active", o === li));
      closeSelect();
      trigger.focus();
    }

    trigger.addEventListener("click", () => {
      const willOpen = !wrapper.classList.contains("open");
      document.querySelectorAll("[data-select].open").forEach(w => {
        w.classList.remove("open");
        w.querySelector(".custom-select-trigger")?.setAttribute("aria-expanded", "false");
      });
      if (willOpen) {
        wrapper.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
        options.find(o => o.dataset.value === native.value)?.focus();
      }
    });

    trigger.addEventListener("keydown", event => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        if (!wrapper.classList.contains("open")) {
          wrapper.classList.add("open");
          trigger.setAttribute("aria-expanded", "true");
        }
        options[0]?.focus();
      }
    });

    options.forEach((li, idx) => {
      li.addEventListener("click", () => chooseOption(li));
      li.addEventListener("keydown", event => {
        if (event.key === "ArrowDown") { event.preventDefault(); options[Math.min(idx + 1, options.length - 1)].focus(); }
        if (event.key === "ArrowUp") { event.preventDefault(); options[Math.max(idx - 1, 0)].focus(); }
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); chooseOption(li); }
        if (event.key === "Escape") { closeSelect(); trigger.focus(); }
        if (event.key === "Tab") { closeSelect(); }
      });
    });
  });

  document.addEventListener("click", event => {
    document.querySelectorAll("[data-select].open").forEach(wrapper => {
      if (!wrapper.contains(event.target)) {
        wrapper.classList.remove("open");
        wrapper.querySelector(".custom-select-trigger")?.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      document.querySelectorAll("[data-select].open").forEach(wrapper => {
        wrapper.classList.remove("open");
        wrapper.querySelector(".custom-select-trigger")?.setAttribute("aria-expanded", "false");
      });
    }
  });

  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById("successMessage")?.classList.add("visible");
    form.reset();
    form.querySelectorAll("[data-select]").forEach(wrapper => {
      const valueEl = wrapper.querySelector(".custom-select-value");
      const firstOption = wrapper.querySelector(".custom-select-list li");
      if (valueEl && firstOption) {
        valueEl.textContent = firstOption.textContent;
        valueEl.classList.toggle("is-placeholder", firstOption.dataset.value === "");
      }
    });
  });

  window.lucide?.createIcons();
}

if (page === "home") renderHome();
if (page === "services") renderServices();
if (page === "service-detail") renderServiceDetail();
if (page === "about") renderAbout();
if (page === "why-us") renderWhyUs();
if (page === "contact") renderContact();
