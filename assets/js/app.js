(() => {
  "use strict";

  const paths = {
    beginner: {
      label: "LEVEL 01 / FOUNDATIONS",
      title: "Start with the essentials.",
      description: "Get comfortable with the building blocks of cybersecurity before moving to more complex problems.",
      challenges: [
        { id:"net-basics", icon:"⌘", title:"Networking fundamentals", time:"6 MIN", tag:"NETWORKING", description:"Meet IP addresses, ports, DNS, and the basic journey a packet takes.", prompt:"A friend types example.com into a browser. Which service most commonly translates that domain name into an IP address?", options:["DHCP","DNS","SSH","FTP"], answer:1, explanation:"DNS (Domain Name System) resolves domain names to IP addresses so devices can find the correct server. DHCP commonly assigns network configuration, while SSH and FTP are protocols for remote access and file transfer." },
        { id:"linux-commands", icon:"⌨", title:"Linux command line", time:"7 MIN", tag:"LINUX", description:"Learn what common terminal commands do and choose the right tool for the job.", prompt:"You are in a Linux terminal and want to display the files in the current directory. Which command is the usual choice?", options:["pwd","ls","mkdir","whoami"], answer:1, explanation:"`ls` lists directory contents. `pwd` prints the current directory path, `mkdir` creates a directory, and `whoami` prints the current username." },
        { id:"password-security", icon:"🔐", title:"Password security", time:"5 MIN", tag:"ACCOUNT SAFETY", description:"Understand passphrases, unique passwords, password managers, and MFA.", prompt:"Which approach gives an online account the strongest everyday protection?", options:["Reuse one memorable password everywhere","Use a unique long password stored in a password manager and enable MFA","Change one character in the same password for every site","Share the password with a trusted friend"], answer:1, explanation:"A unique, long password prevents one breached service from exposing other accounts. A reputable password manager helps you create and store them, while multi-factor authentication adds another layer." },
        { id:"encryption-basics", icon:"▧", title:"Encryption basics", time:"6 MIN", tag:"CRYPTOGRAPHY", description:"Discover how encryption protects information from people who should not read it.", prompt:"What is the main purpose of encryption?", options:["Make a file smaller","Convert readable data into a protected form that requires the right key to read","Remove every virus from a computer","Prove that a website is honest"], answer:1, explanation:"Encryption transforms readable information into ciphertext using a cryptographic method and key. It can help protect confidentiality, but it does not automatically prove that content is trustworthy or malware-free." },
        { id:"scam-spotter", icon:"⌁", title:"Spot the online scam", time:"5 MIN", tag:"PHISHING AWARENESS", description:"Practise spotting pressure tactics and suspicious requests in a message.", prompt:"You receive an unexpected message: “Your account will be deleted in 10 minutes. Open this unfamiliar link and enter your password to keep it.” What is the safest next step?", options:["Click quickly so you do not lose the account","Reply with your password to verify your identity","Do not use the link; open the service's official app or type its known address yourself","Forward it to everyone to ask whether it is real"], answer:2, explanation:"Urgency and requests for passwords are common phishing warning signs. Avoid the link and verify the alert through the service's official app or a known address. Never share passwords or one-time codes." }
      ]
    },
    intermediate: {
      label: "LEVEL 02 / WEB SECURITY",
      title: "Understand how systems fail.",
      description: "Explore common web risks, authentication mistakes, and how defenders spot suspicious activity.",
      challenges: [
        { id:"web-basics", icon:"⌘", title:"Web security fundamentals", time:"7 MIN", tag:"WEB SECURITY", description:"Learn the purpose of HTTPS, cookies, headers, and secure defaults.", prompt:"What does HTTPS primarily help protect while data travels between a browser and a website?", options:["It guarantees the website owner is honest","It encrypts the connection and helps authenticate the server","It prevents every kind of phishing","It makes the website immune to bugs"], answer:1, explanation:"HTTPS uses TLS to protect data in transit and authenticate the server according to its certificate. It does not guarantee that a site is legitimate or free of vulnerabilities." },
        { id:"sql-injection", icon:"⌁", title:"SQL injection concepts", time:"8 MIN", tag:"SECURE CODING", description:"Identify unsafe query construction and learn how parameterised queries help.", prompt:"A developer builds a database query by joining raw user input directly into the SQL string. What is the best primary fix?", options:["Hide the login page","Use parameterised queries or prepared statements","Block all punctuation in every field","Store the database password in frontend JavaScript"], answer:1, explanation:"Parameterised queries keep data separate from SQL instructions, which is the core defence against SQL injection. Validation and least-privilege database permissions are useful additional protections." },
        { id:"xss-demo", icon:"◇", title:"Cross-site scripting (XSS)", time:"8 MIN", tag:"BROWSER SECURITY", description:"Understand why untrusted content must be safely handled before display.", prompt:"A comment feature displays user-supplied text as executable HTML. What is the safer general approach for ordinary text comments?", options:["Render the text using safe text APIs and context-appropriate output encoding","Trust it if the user is logged in","Disable HTTPS","Store the comment in a longer database field"], answer:0, explanation:"Treat user input as untrusted. For ordinary text, use safe text-rendering APIs such as `textContent`; where HTML is genuinely required, use a carefully configured sanitiser and context-appropriate encoding." },
        { id:"auth-vulns", icon:"▣", title:"Authentication weaknesses", time:"7 MIN", tag:"IDENTITY", description:"Review MFA, session handling, brute-force resistance, and account recovery.", prompt:"Which design choice best reduces the risk of attackers guessing account passwords at scale?", options:["Allow unlimited login attempts","Use rate limiting, monitoring, and MFA options","Tell users to choose short passwords","Reveal whether each username exists in detailed error messages"], answer:1, explanation:"Rate limiting and monitoring make repeated guessing harder to perform unnoticed. MFA adds protection if a password is compromised. Login responses should avoid leaking unnecessary account information." },
        { id:"log-analysis", icon:"▤", title:"Basic log analysis", time:"8 MIN", tag:"BLUE TEAM", description:"Look for patterns in fictional authentication logs and decide what to investigate.", prompt:"A fictional server log shows 80 failed sign-ins for one account from many unfamiliar IP addresses, followed by a successful sign-in. What should an analyst do first?", options:["Delete the logs immediately","Treat it as a possible account attack, preserve evidence, and investigate the successful sign-in","Assume it is harmless because a login worked","Publish the account details online"], answer:1, explanation:"The pattern may indicate password spraying or credential abuse. Preserve relevant logs, follow the incident process, verify the successful session, and take proportionate containment steps." }
      ]
    },
    advanced: {
      label: "LEVEL 03 / DEFENCE & RESPONSE",
      title: "Think like a security analyst.",
      description: "Practise evidence handling, incident decisions, threat hunting, and CTF-style reasoning with fictional scenarios.",
      challenges: [
        { id:"digital-forensics", icon:"▤", title:"Digital forensics", time:"9 MIN", tag:"FORENSICS", description:"Choose safe evidence-handling steps when examining a potentially compromised device.", prompt:"You are assigned a fictional laptop suspected of compromise. What is the best first principle when handling potential evidence?", options:["Browse files casually and edit anything suspicious","Document actions, preserve evidence, and follow an authorised evidence-handling process","Reinstall the operating system immediately in every case","Upload all user files to a public forum"], answer:1, explanation:"Evidence should be handled with authorisation, documentation, preservation, and appropriate chain-of-custody procedures. The exact response depends on the incident and organisational policy." },
        { id:"incident-response", icon:"↯", title:"Incident response scenario", time:"9 MIN", tag:"RESPONSE", description:"Prioritise safe actions after a fictional endpoint reports suspicious behaviour.", prompt:"An organisation confirms that one workstation is actively communicating with a known malicious command-and-control address. Under its incident plan, what is a sensible immediate action?", options:["Ignore it until the next monthly review","Coordinate containment according to the incident-response plan while preserving relevant evidence","Delete every log on the network","Post internal indicators and user data publicly"], answer:1, explanation:"Follow the authorised incident-response plan. Appropriate containment can limit harm, while coordination and evidence preservation support investigation. The right technical step depends on the environment and incident." },
        { id:"threat-hunting", icon:"◎", title:"Threat hunting", time:"10 MIN", tag:"DETECTION", description:"Correlate fictional endpoint and authentication events to form a testable hypothesis.", prompt:"Several endpoints show the same unusual script launching shortly after a suspicious email was opened. What is the strongest next analytical step?", options:["Assume the entire network is safe because only a few devices are involved","Form a hypothesis, correlate relevant telemetry, and scope affected endpoints","Delete the email gateway logs","Run the script on a production server to see what happens"], answer:1, explanation:"Threat hunting uses hypotheses and correlated evidence to determine scope and identify related activity. Avoid executing suspicious code on production systems; use approved isolated analysis environments." },
        { id:"ctf-logic", icon:"⚑", title:"CTF: decode the clue", time:"6 MIN", tag:"CTF / LOGIC", description:"Use a simple encoding clue to recover a harmless training token.", prompt:"A training challenge gives you the Base64 string `Q1lCRVJfVEVDSEg=`. Base64 is an encoding, not encryption. What text does it decode to?", options:["CYBER_TECH","SECURE_LOGIN","HACK_THE_NET","HELLO_WORLD"], answer:0, explanation:"The string decodes to `CYBER_TECH`. Base64 changes how bytes are represented; it does not keep information secret and should not be used as encryption." },
        { id:"hunt-auth", icon:"⌕", title:"Hunt suspicious logins", time:"9 MIN", tag:"LOG INVESTIGATION", description:"Use a fictional timeline to decide whether an authentication sequence needs escalation.", prompt:"A fictional user signs in from their usual region, then two minutes later a successful session appears from a distant region with an unfamiliar device. What is the best interpretation?", options:["It proves an attack with absolute certainty","It is an anomaly worth validating with the user and related telemetry before drawing a conclusion","It should be ignored because the password was correct","Immediately publish the user's location"], answer:1, explanation:"The sequence is suspicious but not conclusive on its own. Validate through approved channels and correlate device, session, MFA, VPN, and other available evidence while following policy." }
      ]
    }
  };

  const STORAGE_KEY = "cyberTechProgressV1";
  let currentLevel = "beginner";
  let currentChallenge = null;
  let toastTimer = null;
  let progress = loadProgress();

  const grid = document.getElementById("challengeGrid");
  const modal = document.getElementById("challengeModal");
  const modalContent = document.getElementById("modalContent");
  const modalKicker = document.getElementById("modalKicker");
  const toast = document.getElementById("toast");

  function loadProgress() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (_) { return {}; }
  }
  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
    catch (_) { showToast("Progress could not be saved in this browser."); }
  }
  function isComplete(id) { return progress[id] === true; }
  function renderPath(level) {
    currentLevel = level;
    const data = paths[level];
    document.querySelectorAll(".level-tab").forEach(tab => {
      const active = tab.dataset.level === level;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    document.getElementById("pathIntro").querySelector(".level-label").textContent = data.label;
    document.getElementById("pathIntro").querySelector("h3").textContent = data.title;
    document.getElementById("pathIntro").querySelector("p").textContent = data.description;
    const completeCount = data.challenges.filter(c => isComplete(c.id)).length;
    document.getElementById("progressText").textContent = `${completeCount} / ${data.challenges.length} complete`;
    document.getElementById("progressBar").style.width = `${(completeCount / data.challenges.length) * 100}%`;
    grid.innerHTML = data.challenges.map((c, i) => `
      <article class="challenge-card neumorphic-soft">
        <div class="challenge-top"><span class="challenge-icon" aria-hidden="true">${c.icon}</span>
          <span class="challenge-state ${isComplete(c.id) ? "complete" : ""}">${isComplete(c.id) ? "✓ Completed" : `0${i + 1} / CHALLENGE`}</span></div>
        <h4>${escapeHTML(c.title)}</h4><p>${escapeHTML(c.description)}</p>
        <div class="challenge-meta"><span>${escapeHTML(c.tag)} · ${escapeHTML(c.time)}</span>
          <button type="button" data-challenge="${escapeHTML(c.id)}">${isComplete(c.id) ? "Practise again ↗" : "Start challenge ↗"}</button></div>
      </article>`).join("");
    grid.querySelectorAll("[data-challenge]").forEach(btn => btn.addEventListener("click", () => openChallenge(btn.dataset.challenge)));
  }
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]));
  }
  function findChallenge(id) {
    for (const [level, data] of Object.entries(paths)) {
      const found = data.challenges.find(c => c.id === id);
      if (found) return { ...found, level };
    }
    return null;
  }
  function openChallenge(id) {
    currentChallenge = findChallenge(id);
    if (!currentChallenge) return;
    const c = currentChallenge;
    modalKicker.textContent = `${c.level.toUpperCase()} / ${c.tag}`;
    modalContent.innerHTML = `
      <span class="level-label">${escapeHTML(c.time)} · INTERACTIVE CHALLENGE</span>
      <h2 id="modalTitle">${escapeHTML(c.title)}</h2>
      <p>${escapeHTML(c.description)}</p>
      <div class="scenario-box"><strong>YOUR TASK</strong><p>${escapeHTML(c.prompt)}</p></div>
      <form id="answerForm">
        <div class="answer-options">${c.options.map((option, i) => `<label class="answer-option"><input type="radio" name="answer" value="${i}"><span>${escapeHTML(option)}</span></label>`).join("")}</div>
        <div id="answerFeedback" aria-live="polite"></div>
        <div class="modal-actions"><button class="button button-primary" type="submit">Check answer →</button><button class="button button-soft" type="button" id="showHint">Show a hint</button></div>
      </form>`;
    document.getElementById("answerForm").addEventListener("submit", checkAnswer);
    document.getElementById("showHint").addEventListener("click", showHint);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("closeModal").focus();
  }
  function checkAnswer(event) {
    event.preventDefault();
    const chosen = modalContent.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById("answerFeedback");
    if (!chosen) {
      feedback.innerHTML = `<div class="answer-feedback incorrect"><strong>Choose an answer first.</strong><p>Take a moment to review the options, then try again.</p></div>`;
      return;
    }
    const correct = Number(chosen.value) === currentChallenge.answer;
    if (correct) {
      progress[currentChallenge.id] = true;
      saveProgress();
      feedback.innerHTML = `<div class="answer-feedback"><strong>✓ That's right!</strong><p>${escapeHTML(currentChallenge.explanation)}</p></div>`;
      showToast("Challenge completed — nice work!");
      renderPath(currentLevel);
      // Keep the modal and feedback open; the challenge remains reviewable.
      document.querySelectorAll(".answer-option").forEach(el => el.style.pointerEvents = "none");
    } else {
      feedback.innerHTML = `<div class="answer-feedback incorrect"><strong>Not quite — give it another try.</strong><p>Look for the option that best follows safe security practice. You can try again or use the hint.</p></div>`;
    }
  }
  function showHint() {
    const c = currentChallenge;
    const feedback = document.getElementById("answerFeedback");
    const hints = {
      "net-basics":"Hint: It is the internet's domain-name lookup system.",
      "linux-commands":"Hint: The command name is short and commonly used to list directory contents.",
      "password-security":"Hint: Think about what happens if one service gets breached.",
      "encryption-basics":"Hint: Think confidentiality — who can read the original information?",
      "scam-spotter":"Hint: Avoid the message's link and verify through a channel you already trust.",
      "web-basics":"Hint: It protects the connection in transit, not the honesty of the website.",
      "sql-injection":"Hint: Keep user-provided data separate from the SQL instruction.",
      "xss-demo":"Hint: For plain text, use a browser API that treats content as text rather than HTML.",
      "auth-vulns":"Hint: Combine controls that slow repeated attempts with a second factor.",
      "log-analysis":"Hint: Preserve evidence and investigate the unexpected successful sign-in.",
      "digital-forensics":"Hint: Documentation and preservation matter from the beginning.",
      "incident-response":"Hint: Follow the incident plan, limit harm, and preserve evidence.",
      "threat-hunting":"Hint: Correlate signals and scope the activity without running suspicious code on production.",
      "ctf-logic":"Hint: Decode the Base64 representation; it is not encryption.",
      "hunt-auth":"Hint: An anomaly is a reason to investigate, not proof by itself."
    };
    feedback.innerHTML = `<div class="answer-feedback"><strong>Hint</strong><p>${escapeHTML(hints[c.id] || "Review the scenario and choose the safest evidence-based option.")}</p></div>`;
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentChallenge = null;
  }
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  document.querySelectorAll(".level-tab").forEach(tab => tab.addEventListener("click", () => renderPath(tab.dataset.level)));
  document.getElementById("featuredChallengeButton").addEventListener("click", () => openChallenge("scam-spotter"));
  document.getElementById("closeModal").addEventListener("click", closeModal);
  modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && modal.classList.contains("open")) closeModal(); });
  const menuButton = document.getElementById("mobileMenuButton");
  const nav = document.querySelector(".desktop-nav");
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuButton.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); menuButton.textContent = "☰";
  }));


  const syllabus = [
    {level:"beginner",title:"Linux Fundamentals",duration:"6 MODULES",summary:"Build confidence using the Linux terminal and understand how a system is organised.",topics:["Terminal, shell and filesystem basics","Navigating directories and managing files","Users, groups and file permissions","Processes, memory and disk usage","Pipes, redirection, grep and basic shell scripts","Network troubleshooting from Linux"],objective:"Outcome: navigate a Linux system and explain common commands safely."},
    {level:"beginner",title:"Networking Fundamentals",duration:"6 MODULES",summary:"Understand how devices communicate across local networks and the internet.",topics:["LAN, WAN, routers, switches and firewalls","IPv4, IPv6, MAC addresses and private ranges","TCP, UDP, ports and common services","DNS, HTTP, HTTPS and TLS","Subnet masks and CIDR fundamentals","Connectivity troubleshooting and packet analysis"],objective:"Outcome: explain basic network flows and troubleshoot common connectivity issues."},
    {level:"beginner",title:"Cybersecurity Essentials",duration:"6 MODULES",summary:"Learn the core ideas behind protecting information, accounts and systems.",topics:["Confidentiality, integrity and availability","Threats, vulnerabilities, risk and security controls","Password managers, MFA and account protection","Encryption, hashing and digital signatures","Phishing, scams and social engineering","Updates, backups and system hardening"],objective:"Outcome: recognise common risks and choose sensible protective controls."},
    {level:"intermediate",title:"Ethical Hacking Foundations",duration:"6 MODULES",summary:"Learn the professional assessment process and common web security weaknesses in authorised labs.",topics:["Scope, permission, rules of engagement and reporting","Reconnaissance and asset inventory concepts","Service discovery and vulnerability assessment concepts","HTTP requests, cookies, sessions and access control","SQL injection concepts and parameterised query defence","XSS concepts, safe output handling and remediation"],objective:"Outcome: explain findings, evidence and remediation without testing unauthorised systems."},
    {level:"intermediate",title:"Defensive Security & Log Analysis",duration:"5 MODULES",summary:"Practise investigating suspicious activity using fictional logs and system events.",topics:["Linux authentication and system logs","Web access logs and common status codes","Failed logins and suspicious patterns","Firewall concepts and secure configuration","Detection, triage and escalation"],objective:"Outcome: identify suspicious patterns and describe a defensible next step."},
    {level:"advanced",title:"Digital Forensics & Incident Response",duration:"5 MODULES",summary:"Learn evidence preservation and structured response to simulated incidents.",topics:["Incident response lifecycle","Evidence integrity and chain of custody","File hashes, metadata and timelines","Containment, eradication and recovery decisions","Post-incident reporting and lessons learned"],objective:"Outcome: follow a documented, evidence-aware response process."},
    {level:"advanced",title:"Threat Hunting & CTF Practice",duration:"5 MODULES",summary:"Combine networking, Linux and analytical thinking to investigate safe training scenarios.",topics:["Indicators of compromise and hypotheses","Correlating endpoint, network and identity events","Interpreting supplied packet captures","CTF problem-solving and flag validation","Writing findings and explaining mitigations"],objective:"Outcome: investigate a fictional scenario and clearly justify your conclusions."}
  ];
  const commandData = [
    {type:"linux",cmd:"pwd",desc:"Print the current working directory.",example:"pwd"},
    {type:"linux",cmd:"ls -la",desc:"List files, including hidden files, with details.",example:"ls -la"},
    {type:"linux",cmd:"cd Documents",desc:"Change to a directory named Documents.",example:"cd Documents"},
    {type:"linux",cmd:"whoami",desc:"Show the effective current username.",example:"whoami"},
    {type:"linux",cmd:"mkdir cyber-lab",desc:"Create a directory for your practice work.",example:"mkdir cyber-lab"},
    {type:"linux",cmd:"cp notes.txt notes-copy.txt",desc:"Copy a file to a new filename.",example:"cp notes.txt notes-copy.txt"},
    {type:"linux",cmd:'grep -i "error" app.log',desc:"Search a log for the word error, ignoring case.",example:'grep -i "error" app.log'},
    {type:"linux",cmd:'find . -name "*.log"',desc:"Find log files under the current directory.",example:'find . -name "*.log"'},
    {type:"linux",cmd:"chmod 600 private.txt",desc:"Allow the file owner to read and write the file; remove permissions for group and others.",example:"chmod 600 private.txt",warning:"Check the file path and intended permissions before changing access."},
    {type:"linux",cmd:"ps aux",desc:"Display a snapshot of running processes.",example:"ps aux"},
    {type:"linux",cmd:"df -h",desc:"Show filesystem disk usage in readable units.",example:"df -h"},
    {type:"linux",cmd:"man ls",desc:"Open the manual page for a command.",example:"man ls"},
    {type:"network",cmd:"ip addr",desc:"Inspect network interfaces and assigned IP addresses.",example:"ip addr"},
    {type:"network",cmd:"ip route",desc:"Display the system routing table.",example:"ip route"},
    {type:"network",cmd:"ping -c 4 127.0.0.1",desc:"Test the local IPv4 loopback stack with four echo requests.",example:"ping -c 4 127.0.0.1"},
    {type:"network",cmd:"ss -tuln",desc:"List listening TCP and UDP sockets without resolving names.",example:"ss -tuln"},
    {type:"network",cmd:"getent hosts example.com",desc:"Ask the system name-service configuration to resolve a hostname.",example:"getent hosts example.com"},
    {type:"network",cmd:"curl -I https://example.com",desc:"Request response headers from a public example website.",example:"curl -I https://example.com"},
    {type:"network",cmd:"dig example.com",desc:"Query DNS records using dig, if installed.",example:"dig example.com"},
    {type:"network",cmd:"traceroute example.com",desc:"Show a possible network path toward a host, if installed and permitted.",example:"traceroute example.com",warning:"Routers may not reply; output does not prove a host is unsafe or unavailable."}
  ];
  const syllabusGrid = document.getElementById("syllabusGrid");
  if (syllabusGrid) {
    function renderSyllabus(filter="all") {
      syllabusGrid.innerHTML = syllabus.map((item, index) => `<article class="syllabus-card" ${filter !== "all" && item.level !== filter ? "hidden" : ""}><div class="syllabus-card-top"><span class="syllabus-level">${item.level.toUpperCase()}</span><span class="syllabus-duration">${item.duration}</span></div><h3>${item.title}</h3><p>${item.summary}</p><details><summary>View modules and topics</summary><ul>${item.topics.map(topic => `<li>${topic}</li>`).join("")}</ul><p class="lesson-objective">${item.objective}</p></details></article>`).join("");
    }
    renderSyllabus();
    document.querySelectorAll("[data-syllabus-filter]").forEach(button => button.addEventListener("click", () => {
      document.querySelectorAll("[data-syllabus-filter]").forEach(b => b.classList.toggle("active", b === button));
      renderSyllabus(button.dataset.syllabusFilter);
    }));
  }
  const commandList = document.getElementById("commandList");
  if (commandList) {
    let commandFilter = "all";
    const search = document.getElementById("commandSearch");
    function renderCommands() {
      const query = search.value.trim().toLowerCase();
      const items = commandData.filter(item => (commandFilter === "all" || item.type === commandFilter) && `${item.cmd} ${item.desc} ${item.example} ${item.type}`.toLowerCase().includes(query));
      commandList.innerHTML = items.length ? items.map((item, i) => `<article class="command-item"><div class="command-item-head"><code>${escapeHTML(item.cmd)}</code><span class="command-category">${item.type.toUpperCase()}</span></div><p>${escapeHTML(item.desc)}</p><div class="command-example"><code>${escapeHTML(item.example)}</code><button class="copy-command" type="button" data-copy-command="${i}">Copy</button></div>${item.warning ? `<p class="command-warning">${escapeHTML(item.warning)}</p>` : ""}</article>`).join("") : `<p class="command-empty">No commands match that search. Try a different keyword.</p>`;
      commandList.querySelectorAll("[data-copy-command]").forEach((button, i) => button.addEventListener("click", async () => {
        const command = items[i].example;
        try { await navigator.clipboard.writeText(command); button.textContent = "Copied"; }
        catch { button.textContent = "Select to copy"; const range = document.createRange(); const code = button.previousElementSibling; range.selectNodeContents(code); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); }
        window.setTimeout(() => { if (button.isConnected) button.textContent = "Copy"; }, 1400);
      }));
    }
    search.addEventListener("input", renderCommands);
    document.querySelectorAll("[data-command-filter]").forEach(button => button.addEventListener("click", () => {
      commandFilter = button.dataset.commandFilter;
      document.querySelectorAll("[data-command-filter]").forEach(b => b.classList.toggle("active", b === button));
      renderCommands();
    }));
    renderCommands();
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  renderPath("beginner");
})();