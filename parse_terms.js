const fs = require('fs');

const text = fs.readFileSync('Terms&Conditions.json', 'utf8');
const lines = text.split('\n');

const sections = [];
let currentSection = null;
let currentSubsection = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Check for main section (e.g., "1. Introduction")
    // Needs to match digit(s), dot, space, text
    const mainMatch = line.match(/^(\d+)\.\s+(.*)/);
    // Check for subsection (e.g., "1.1 General Information")
    // Needs to match digit(s), dot, digit(s), space, text
    const subMatch = line.match(/^(\d+\.\d+)\s+(.*)/);

    // Some lines might just be text
    if (subMatch) {
        currentSubsection = { title: line, content: [] };
        if (currentSection) {
            currentSection.subsections.push(currentSubsection);
        } else {
            currentSection = { title: 'General', intro: [], subsections: [currentSubsection] };
            sections.push(currentSection);
        }
    } else if (mainMatch && parseInt(mainMatch[1]) > 0) {
        currentSection = { title: line, intro: [], subsections: [] };
        sections.push(currentSection);
        currentSubsection = null;
    } else {
        if (currentSubsection) {
            currentSubsection.content.push(line);
        } else if (currentSection) {
            currentSection.intro.push(line);
        } else {
            if (sections.length === 0) {
                currentSection = { title: '', intro: [line], subsections: [] };
                sections.push(currentSection);
            } else {
                currentSection.intro.push(line);
            }
        }
    }
}

if (!fs.existsSync('src/data')) {
    fs.mkdirSync('src/data', { recursive: true });
}

fs.writeFileSync('src/data/TermsAndConditionsData.json', JSON.stringify(sections, null, 2));
console.log('Successfully written to src/data/TermsAndConditionsData.json');
