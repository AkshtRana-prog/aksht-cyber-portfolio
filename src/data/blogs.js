const blogs = [
  {
    title: "I Didn’t Build My Phishing Detector in One Go. I Evolved It.",
    date: "2026",
    category: "Cybersecurity | Threat Detection",
    tag: "Cybersecurity | Threat Detection",
    description: "From a terminal-based URL checker to a multi-modal cybersecurity analysis platform.",
    content: `# I Didn’t Build My Phishing Detector in One Go. I Evolved It.

**From a terminal-based URL checker to a multi-modal cybersecurity analysis platform.**

When I started working on my Phishing Detector, I had a pretty simple idea.

Take a URL.

Analyze it.

Tell me whether it looks like phishing.

That was it.

There was no polished dashboard. No fancy animations. No deepfake detection. No PCAP analysis. No email investigation.

Just a terminal, a backend, a rule-based detection system, and a lot of experimenting.

Looking back at what the project has become today, that first version feels almost like a different project.

And honestly, that's probably my favorite part of it.

I didn't build the final version from the beginning.

**I built it one problem at a time.**

---

## Where It Started

The earliest version of the project was completely terminal-based.

I wanted to understand how phishing detection actually worked rather than simply using an existing security tool.

So I started with one of the most common entry points for phishing attacks:

**URLs.**

The initial detection system was rule-based. It looked for suspicious characteristics and patterns that could indicate a malicious URL.

It wasn't trying to be some magical AI system.

It was simply my starting point.

At that stage, the project was more of an experiment than a product.

I could run it from the terminal, provide a URL, and get an analysis.

It worked.

But I quickly started noticing something.

A security tool isn't very useful if only the person who built it knows how to operate it.

That led to the next step.

---

# From Terminal to Interface

I integrated a frontend.

This might sound like a straightforward change, but for me it changed how I thought about the project.

The backend was doing the actual work, but now there was a proper interface sitting on top of it.

Instead of thinking only about:

> "Does the detection work?"

I started thinking about:

> "Can someone understand what's happening?"

That introduced an entirely different side of development.

I had to think about layouts, information hierarchy, results, user feedback, loading states, reports and eventually the overall experience of using the application.

The project was slowly moving from being a script I built for myself into something that another person could actually interact with.

And that opened the door to a much bigger question.

---

# Expanding Beyond URL Analysis: Embracing Multi-Modal Threat Detection

While working on the detector, I started thinking about how security investigations actually happen.

A suspicious URL is only one piece of evidence.

An analyst might receive a suspicious email.

They might have an .eml file.

They might need to investigate system logs.

They might capture network traffic in a PCAP file.

And then there is another problem that has become increasingly relevant:

**synthetic and manipulated media.**

So I started expanding the scope of the project.

Not because I wanted to create a giant feature list.

But because I wanted to explore a bigger question:

> **Could one security analysis platform handle different kinds of suspicious digital evidence?**

That question changed the direction of the project.

---

# The Detector Became Much More Than a URL Checker

Over time, the project grew beyond URL analysis.

It gained support for different forms of analysis, including:

### URL Analysis

The original foundation of the project.

The system examines URLs for indicators associated with potentially malicious or phishing behaviour.

### Email & .eml Analysis

Phishing doesn't always arrive as a suspicious link pasted into a browser.

It often arrives inside an email.

Adding email and .eml analysis allowed the project to move closer to a realistic investigation workflow.

### Log Analysis

Logs can contain important clues about what happened on a system.

Being able to feed log data into the platform expanded the project beyond simple phishing detection and toward security investigation.

### PCAP Analysis

Network traffic provides another layer of evidence.

PCAP analysis brought network-level investigation into the same environment.

### Audio Deepfake Detection

Then came synthetic media.

The project expanded into audio deepfake detection using machine-learning techniques alongside fallback analysis methods.

### Video Deepfake Detection

The same broader idea extended into video.

Instead of focusing solely on phishing, the project was becoming an exploration of how different forms of suspicious digital content could be analyzed within one platform.

---

# Intelligence Doesn't Always Mean "AI"

One thing I learned while building this project is that cybersecurity isn't simply about putting AI everywhere.

There are situations where machine learning can be useful.

There are also situations where deterministic rules, patterns and heuristics are extremely valuable.

So the project evolved toward a more hybrid approach.

Where appropriate, machine-learning models could provide intelligent classification.

Where models weren't available or couldn't reliably handle an input, fallback mechanisms could still provide analysis.

That approach taught me an important engineering lesson:

**A good security system shouldn't depend on one trick.**

Different techniques have different strengths.

Sometimes the best solution is not choosing between machine learning and traditional analysis.

Sometimes it's combining them.

---

# And Then Came the UI Problem

At this point, the backend could do considerably more than the original version.

But there was another problem.

The interface didn't feel like it belonged to the system anymore.

The capabilities had grown.

The UI hadn't grown at the same pace.

So I redesigned it.

Then redesigned it again.

And then again.

Yes, I probably spent more time thinking about spacing, cards, animations, visual hierarchy and overall consistency than I expected when I started this project.

But that process taught me something important.

## A technically capable application can still feel unfinished.

A cybersecurity tool doesn't need to look like a movie version of a hacker terminal.

It needs to be clear.

It needs to communicate information quickly.

It needs to make results understandable.

And it needs to feel trustworthy.

The final redesign was therefore not just about making the application "look cool."

It was about making the interface match the maturity of the system behind it.

---

# From Project to Product

This is probably the biggest change I've seen throughout the project.

In the beginning, I was asking:

**"Can I make this work?"**

Then:

**"Can I make this useful?"**

Then:

**"Can I make this analyze more types of evidence?"**

And eventually:

**"Can I make this feel like an actual security product?"**

Those are very different questions.

The final interface is only the visible part of that journey.

Behind it are countless smaller decisions, experiments, bugs, redesigns, model issues, integration problems and moments where something simply didn't work the way I expected.

That's the part people don't usually see when they look at a finished project.

---

# What Building This Actually Taught Me

The biggest lessons weren't necessarily about writing code.

### 1. Start small.

If I had started by trying to build a huge multi-modal security platform, I probably would have overwhelmed myself.

The original URL detector gave me something manageable to build on.

### 2. Let the project evolve.

The original idea wasn't bad just because it became much bigger.

It was the foundation.

Every version gave me a reason to rethink the next one.

### 3. Functionality and usability are different problems.

Getting a detector to produce a result is one problem.

Presenting that result in a way that another person can understand is another.

Both matter.

### 4. Don't be afraid to rebuild.

I've redesigned parts of this project multiple times.

Sometimes the right solution isn't another small patch.

Sometimes you need to step back and say:

**"This needs to be rebuilt properly."**

### 5. Projects teach differently when you actually own the problems.

Tutorials can teach you syntax.

Courses can teach you concepts.

But when your own application breaks at 2 AM and you have no idea why, you learn something different.

You learn how systems actually fit together.

---

# What Started as a Detector Became a Learning Environment

One of the unexpected things about this project is how much it forced me to explore.

Cybersecurity.

Machine learning.

Network analysis.

File analysis.

Backend development.

Frontend development.

UI/UX.

System integration.

Debugging.

Deployment.

Git.

Architecture.

I didn't sit down one day and decide:

> "I'm going to learn all of these things."

The project simply kept creating problems that required me to learn something new.

And that's probably why I've enjoyed working on it so much.

Every time I thought I was getting close to finishing it, I found another thing that could be improved.

---

# Where It Is Today

Today, the Phishing Detector is no longer the small terminal-based URL checker I started with.

It has evolved into a broader security analysis platform capable of working with multiple forms of digital evidence, while bringing those capabilities together through a much more polished interface.

The final UI is cleaner.

The workflows are more structured.

The analysis capabilities are broader.

And the project feels much closer to the vision I have been slowly building toward.

But I don't think the most important achievement is any individual feature.

It's the evolution.

From:

**Terminal → Backend → URL Detection → Frontend → Multi-Modal Analysis → ML & Hybrid Detection → Professional Security Platform**

That progression represents much more than changes in code.

It represents how my own understanding of software development and cybersecurity has changed while building it.

---

# I'm Still Not Calling It Perfect

There are still things I want to improve.

There are always things to improve.

Detection systems can be refined.

Models can be evaluated more rigorously.

Performance can be optimized.

Analysis can become more explainable.

The UX can always be questioned again.

And new security problems will continue to appear.

So I don't see this project as something that suddenly became "finished."

I see today's version as a milestone.

A point where I can finally look at the project and say:

**This is no longer just an experiment.**

It's something I've genuinely built, broken, rebuilt, expanded and learned from.

---

# The Real Project Was the Process

If I had to go back to the beginning, I wouldn't tell myself to start with a bigger idea.

I'd probably tell myself to start exactly where I did.

With a terminal.

With a simple URL detector.

With a rough idea.

Because I now realize that the final project was never the thing I was supposed to know how to build on day one.

**The process was the project.**

Every limitation forced an improvement.

Every new problem forced me to learn.

Every redesign forced me to think about the user.

And every version became the foundation for the next one.

What began as a small attempt to detect phishing has turned into one of the projects that has taught me the most about what it actually means to build something.

Not just make it work.

**Build it.**

---

### And that's where the Phishing Detector stands today.

Not as a perfect cybersecurity product.

Not as the final version of what it can ever become.

But as something much more valuable to me:

**proof of how far an idea can go when you keep improving it instead of abandoning it.**`,
  },

{

title:"Building a Rule-Based Phishing Detector",

date:"2026",

category:"Cybersecurity | Threat Detection",


description:
"Technical analysis of building a defensive phishing detection system.",



content:

`

PHISHING DETECTOR

STATUS:
COMPLETED 



WHAT IS PHISHING?

Phishing is a cyber attack technique where attackers
create fake websites, emails, or messages designed to
trick users into revealing sensitive information.

These attacks commonly target usernames, passwords,
banking details, personal information and organizational
credentials.

Attackers usually use social engineering techniques to
make malicious content appear trustworthy.



WHY WAS THIS PROJECT NEEDED?

Phishing remains one of the most common cybersecurity
threats because it targets human behaviour rather than
only technical vulnerabilities.

A simple click on a malicious link can lead to account
compromise, malware installation or data theft.

The objective of this project was to create a lightweight
security tool that could analyse suspicious URLs and
identify possible phishing attempts before users access
them.



HOW DOES IT WORK?

The detector performs rule-based analysis on URLs by
checking different indicators that are commonly found in
malicious websites.


Detection methods include:

• Suspicious keywords inside URLs

• Abnormal domain structures

• Unsafe URL patterns

• Unusual characters and redirects

• Risk based scoring



REAL WORLD USE CASES:

• Security awareness training

• Basic malicious URL screening

• Educational cybersecurity demonstrations

• First layer defence before advanced security systems



IMPORTANCE:

Early phishing detection helps reduce the possibility of
credential theft, financial fraud and unauthorized access.

Although advanced solutions use artificial intelligence,
rule based detection provides a simple and explainable
security approach.



CHALLENGES FACED:

While developing this project, the major challenges were:

• Creating accurate detection rules

• Reducing false positive results

• Detecting different phishing patterns

• Balancing security with usability



HOW I SOLVED THEM:

I improved the detection system by creating multiple
validation checks instead of depending on a single rule.

The system analyses multiple URL characteristics and
combines results to identify suspicious behaviour.



FUTURE IMPROVEMENTS:

Future versions can include:

• Machine learning based classification

• Real time threat intelligence APIs

• Browser extension integration

• Automated threat reporting



`


},




{

title:"Building My Wazuh Home Lab",

date:"2026",

category:"SIEM | SOC Operations",



description:
"Creating a personal security monitoring environment.",



content:

`

WAZUH HOME LAB

STATUS:
ACTIVE 



WHAT IS A SECURITY HOME LAB?

A cybersecurity home lab is a personal environment
created for learning, testing and practising security
operations.

It allows security enthusiasts to simulate real SOC
(Security Operations Center) activities without requiring
enterprise infrastructure.



WHY DID I BUILD IT?

Cybersecurity cannot be learned only through theory.

Security professionals need practical experience with
logs, alerts, monitoring systems and incident analysis.

The purpose of this lab was to understand how security
teams monitor systems and detect suspicious activity.



ROLE OF WAZUH:

Wazuh is an open-source security monitoring platform
used for threat detection, endpoint monitoring and
security event analysis.

It works as a SIEM solution by collecting and analysing
security related information.



USE CASES:

• Monitoring system activity

• Detecting suspicious behaviour

• Analysing security alerts

• Practising SOC workflows



IMPORTANCE:

A home lab provides hands-on experience with real
security concepts.

It helps build practical knowledge required for roles
such as SOC analyst and security engineer.



CHALLENGES FACED:

• Installing and configuring components

• Understanding security logs

• Managing communication between systems

• Analysing generated alerts



HOW I SOLVED THEM:

I worked on:

• Linux based environments

• Wazuh configuration

• Log investigation

• Security monitoring workflows



FUTURE IMPROVEMENTS:

• Additional endpoints

• Custom detection rules

• Automated response actions

• Advanced monitoring scenarios



`

},




{

title:"Building My Cybersecurity Portfolio",

date:"2026",

category:"Frontend | Security Interface",


description:
"Designing an interactive cybersecurity themed portfolio.",



content:

`

AKSHT SECURITY PORTFOLIO

STATUS:
ONLINE 



OVERVIEW:

This portfolio was designed as a cybersecurity interface
rather than a traditional developer website.

The goal was to create an interactive experience where
projects, skills and security knowledge are presented
through a technical environment.



CORE FEATURES:

The portfolio includes:

• Interactive terminal

• Cybersecurity themed interface

• Hidden easter eggs

• Animated security elements

• Project case files

• Technical reports



WHY THIS APPROACH?

A cybersecurity professional portfolio should represent
problem solving and creativity.

Instead of only displaying skills, this project
demonstrates the ability to build interactive systems
and security focused experiences.



TECHNOLOGY USED:

React

Tailwind CSS

Framer Motion

JavaScript



CHALLENGES FACED:

• Creating terminal behaviour

• Maintaining performance with animations

• Designing a unique user experience

• Managing interactive components



HOW I SOLVED THEM:

I created reusable React components and implemented
custom animations and interactive logic to build a
smooth cybersecurity inspired interface.



FUTURE IMPROVEMENTS:

• More security simulations

• Advanced terminal commands

• Additional security tools

• More technical research reports



`

}


];


export default blogs;