export const PERSONAL = {
  name: "Gaurav Garg",
  initials: "GG",
  email: "[EMAIL_ADDRESS]",
  github: "https://github.com/Gaurav-Garg13",
  linkedin: "https://www.linkedin.com/in/gaurav-garg-764a23323/",
  resumeUrl: "https://flowcv.com/resume/gmghhgfcv6mw",
};

export const STATUS = {
  availability: "Available",
  location: "India",
  focus: "Cyber Security & Systems",
  reading: "Practical Malware Analysis",
  latestProject: "PortSpy",
};

export const JOURNEY_MILESTONES = [
  {
    id: "foundation",
    label: "Curiosity Begins",
    year: "2019",
    description: "Started exploring computers, building small projects and understanding how things work under the hood.",
  },
  {
    id: "academic",
    label: "Engineering Path",
    year: "2021",
    description: "Joined Computer Science Engineering. Discovered my love for systems, networks and problem solving.",
  },
  {
    id: "security",
    label: "Cyber Security",
    year: "2022",
    description: "Explored security fundamentals, networking, Linux and ethical hacking. Built labs. Broke things. Fixed them.",
  },
  {
    id: "current",
    label: "Building & Shipping",
    year: "2024",
    description: "Started building real world projects that solve practical problems.",
  },
  {
    id: "future",
    label: "What's Next",
    year: "Now",
    description: "Deepening into application security, open source and building tools that make an impact.",
  },
];

export const PHILOSOPHY = [
  {
    title: "I prototype before I optimize.",
    description: "I don't optimize early. I optimize when measurement proves it matters. The first goal is always to solve the problem and understand the domain."
  },
  {
    title: "I prefer solving root causes.",
    description: "Every bug teaches something. Fixing a symptom is a temporary patch; finding the root cause improves the entire system's architecture."
  },
  {
    title: "Readable code is scalable code.",
    description: "Readable code survives longer than clever code. If a future engineer (or myself in six months) can't understand it instantly, it's technical debt."
  },
  {
    title: "Security begins with understanding systems.",
    description: "Every security tool begins with understanding the protocol. You cannot secure or exploit a system you don't fundamentally comprehend."
  },
  {
    title: "Every project must solve a real problem.",
    description: "Every project should solve a real problem before solving a technical problem. Building software is ultimately about designing experiences."
  }
];

export const WORKSHOP = {
  currentProject: {
    name: "PortSpy",
    progress: 68,
    progressVisual: "█████████░░░░",
    focus: ["Banner Grabbing", "UDP Scanning", "OS Fingerprinting"]
  },
  upcoming: [
    "Packet Analyzer",
    "Password Strength Analyzer",
    "Malware Traffic Visualizer"
  ]
};

export const CASE_STUDIES = [
  {
    id: "portspy",
    title: "PortSpy",
    year: "2026",
    subtitle: "TCP Port Scanner",
    problem: "Most lightweight port scanners only report if a port is open or closed, failing to detect firewalls. Heavy scanners like Nmap are often overkill for quick scripts or embedded environments.",
    research: "Analyzed TCP handshake behaviors across various firewalls. Discovered that measuring socket timeouts and ICMP responses allows accurate detection of filtered vs. dropped packets.",
    architecture: "Built entirely on Python's standard `socket` and `concurrent.futures` libraries. No external dependencies. Uses an internal thread pool. Threads don't make code faster here—they reduce waiting for socket timeouts.",
    implementation: "Implemented a state machine for each connection attempt. Wrote custom ANSI escape sequences for the CLI to avoid heavy dependencies like `curses` or `rich`.",
    challenges: "Handling the OS file descriptor limits (ulimit) when spawning 1000+ concurrent threads. Solved by implementing dynamic batching based on the host OS limits.",
    results: "Successfully detects common TCP services. Scans 1024 ports in under one second. Uses exactly 100 concurrent threads natively.",
    lessons: "Thread pools reduced execution time by 72% compared to sequential scripts. Optimizing socket creation isn't as valuable as optimizing the wait state.",
    future: "Add UDP scanning. Implement SYN stealth scanning requiring raw sockets.",
    tech: ["Python", "TCP/IP", "Multithreading", "Socket API"],
    github: "https://github.com/Gaurav-Garg13/PortSpy",
    metrics: [
      { label: "Execution Time", value: "-72%" },
      { label: "Concurrent Threads", value: "100" },
      { label: "Ports/sec", value: ">1000" }
    ]
  }
];

export const NOTEBOOK_ENTRIES = [
  {
    id: "note-1",
    date: "May 2026",
    category: "Architecture",
    text: "Discovered thread pools are more valuable than optimizing socket creation. -> Add async version later.",
    signature: "GG."
  },
  {
    id: "note-2",
    date: "June 2026",
    category: "Idea",
    text: "Visualize packet flow using SVG animation. Would make the network layer tangible.",
    signature: "GG."
  },
  {
    id: "note-3",
    date: "July 2026",
    category: "Security",
    text: "Security is rarely about one big mistake. It's usually twenty tiny ones chained together.",
    signature: "GG."
  },
  {
    id: "note-4",
    date: "Observation",
    category: "Design",
    text: "Good architecture is invisible. If you notice it, it's usually getting in the way.",
    signature: "GG."
  }
];

export const NAV_LINKS = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Workshop", href: "#workshop" },
  { label: "Case Studies", href: "#cases" },
  { label: "Contact", href: "#contact" },
];

export const TOOLBOX_CATEGORIES = [
  {
    name: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL", "Bash"]
  },
  {
    name: "Frontend",
    items: ["React", "Tailwind CSS", "HTML", "CSS", "Framer Motion"]
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "REST API", "Socket Programming"]
  },
  {
    name: "Cyber Security",
    items: ["Linux", "Nmap", "Wireshark", "Burp Suite", "OWASP"]
  },
  {
    name: "Tools",
    items: ["Git", "Docker", "VS Code", "Postman", "Figma"]
  },
  {
    name: "Databases",
    items: ["MySQL", "MongoDB"]
  },
  {
    name: "Concepts",
    items: ["DSA", "System Design", "OOP", "Networking"]
  }
];
