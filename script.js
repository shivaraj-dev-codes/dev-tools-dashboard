// Tab Switching Logic
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.tool-section');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(btn.dataset.tool).classList.add('active');
    });
});

// JSON Tools
function formatJSON() {
    const el = document.getElementById('json-input');
    try {
        const obj = JSON.parse(el.value);
        el.value = JSON.stringify(obj, null, 4);
    } catch(e) { alert("Invalid JSON"); }
}

function minifyJSON() {
    const el = document.getElementById('json-input');
    try {
        const obj = JSON.parse(el.value);
        el.value = JSON.stringify(obj);
    } catch(e) { alert("Invalid JSON"); }
}

// Base64 Tools
function encodeB64() {
    const el = document.getElementById('base64-input');
    el.value = btoa(el.value);
}

function decodeB64() {
    const el = document.getElementById('base64-input');
    try { el.value = atob(el.value); } catch(e) { alert("Invalid Base64"); }
}

// Regex Tool
const patternInput = document.getElementById('regex-pattern');
const textInput = document.getElementById('regex-test-text');
const matchDisplay = document.getElementById('regex-matches');

function runRegex() {
    try {
        const regex = new RegExp(patternInput.value, 'g');
        const matches = textInput.value.match(regex);
        matchDisplay.innerHTML = matches ? `Matches: ${matches.join(', ')}` : 'No matches found.';
    } catch(e) { matchDisplay.innerHTML = 'Invalid Regex Pattern'; }
}
[patternInput, textInput].forEach(i => i.addEventListener('input', runRegex));

// Color Tool
const colorInput = document.getElementById('color-input');
const hexLabel = document.getElementById('hex-label');
colorInput.addEventListener('input', () => {
    hexLabel.innerText = colorInput.value.toUpperCase();
});

// Utilities
function copyContent(id) {
    const text = document.getElementById(id).value;
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
}

function clearInput(id) {
    document.getElementById(id).value = '';
}
