const blogs = [

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