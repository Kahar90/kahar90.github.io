import { c as create_ssr_component } from "../../chunks/index-5f038599.js";
var app = /* @__PURE__ */ (() => `/* fira-mono-cyrillic-ext-400-normal*/
@font-face {
  font-family: 'Fira Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* fira-mono-cyrillic-400-normal*/
@font-face {
  font-family: 'Fira Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* fira-mono-greek-ext-400-normal*/
@font-face {
  font-family: 'Fira Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');
  unicode-range: U+1F00-1FFF;
}
/* fira-mono-greek-400-normal*/
@font-face {
  font-family: 'Fira Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/fira-mono-greek-400-normal-a8be01ce.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');
  unicode-range: U+0370-03FF;
}
/* fira-mono-latin-ext-400-normal*/
@font-face {
  font-family: 'Fira Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* fira-mono-latin-400-normal*/
@font-face {
  font-family: 'Fira Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/fira-mono-latin-400-normal-e43b3538.woff2') format('woff2'), url('/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff') format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* ! tailwindcss v3.1.4 | MIT License | https://tailwindcss.com*/
/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/
*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}
::before,
::after {
  --tw-content: '';
}
/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/
html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}
/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/
body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}
/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/
hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}
/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/
abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}
/*
Remove the default font size and weight for headings.
*/
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
/*
Reset links to optimize for opt-in styling instead of opt-out.
*/
a {
  color: inherit;
  text-decoration: inherit;
}
/*
Add the correct font weight in Edge and Safari.
*/
b,
strong {
  font-weight: bolder;
}
/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/
code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}
/*
Add the correct font size in all browsers.
*/
small {
  font-size: 80%;
}
/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/
table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}
/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}
/*
Remove the inheritance of text transform in Edge and Firefox.
*/
button,
select {
  text-transform: none;
}
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}
/*
Use the modern Firefox focus style for all focusable elements.
*/
:-moz-focusring {
  outline: auto;
}
/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/
:-moz-ui-invalid {
  box-shadow: none;
}
/*
Add the correct vertical alignment in Chrome and Firefox.
*/
progress {
  vertical-align: baseline;
}
/*
Correct the cursor style of increment and decrement buttons in Safari.
*/
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/
[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
/*
Remove the inner padding in Chrome and Safari on macOS.
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
/*
Add the correct display in Chrome and Safari.
*/
summary {
  display: list-item;
}
/*
Removes the default spacing and border for appropriate elements.
*/
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
/*
Prevent resizing textareas horizontally by default.
*/
textarea {
  resize: vertical;
}
/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/
input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}
input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}
/*
Set the default cursor for buttons.
*/
button,
[role="button"] {
  cursor: pointer;
}
/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}
/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}
/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/
img,
video {
  max-width: 100%;
  height: auto;
}
:root,
[data-theme] {
  background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));
  color: hsla(var(--bc) / var(--tw-text-opacity, 1));
}
html {
  -webkit-tap-highlight-color: transparent;
}
:root {
  --p: 259 94% 51%;
  --pf: 259 94% 41%;
  --sf: 314 100% 38%;
  --af: 174 60% 41%;
  --nf: 219 14% 22%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --pc: 0 0% 100%;
  --s: 314 100% 47%;
  --sc: 0 0% 100%;
  --a: 174 60% 51%;
  --ac: 175 44% 15%;
  --n: 219 14% 28%;
  --nc: 0 0% 100%;
  --b1: 0 0% 100%;
  --b2: 0 0% 95%;
  --b3: 180 2% 90%;
  --bc: 215 28% 17%;
}
@media (prefers-color-scheme: dark) {
  :root {
    --p: 262 80% 50%;
    --pf: 262 80% 40%;
    --sf: 316 70% 40%;
    --af: 175 70% 33%;
    --in: 198 93% 60%;
    --su: 158 64% 52%;
    --wa: 43 96% 56%;
    --er: 0 91% 71%;
    --inc: 198 100% 12%;
    --suc: 158 100% 10%;
    --wac: 43 100% 11%;
    --erc: 0 100% 14%;
    --rounded-box: 1rem;
    --rounded-btn: 0.5rem;
    --rounded-badge: 1.9rem;
    --animation-btn: 0.25s;
    --animation-input: .2s;
    --btn-text-case: uppercase;
    --btn-focus-scale: 0.95;
    --border-btn: 1px;
    --tab-border: 1px;
    --tab-radius: 0.5rem;
    --pc: 0 0% 100%;
    --s: 316 70% 50%;
    --sc: 0 0% 100%;
    --a: 175 70% 41%;
    --ac: 0 0% 100%;
    --n: 218 18% 12%;
    --nf: 223 17% 8%;
    --nc: 220 13% 69%;
    --b1: 220 18% 20%;
    --b2: 220 17% 17%;
    --b3: 219 18% 15%;
    --bc: 220 13% 69%;
  }
}
[data-theme=light] {
  --p: 259 94% 51%;
  --pf: 259 94% 41%;
  --sf: 314 100% 38%;
  --af: 174 60% 41%;
  --nf: 219 14% 22%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --pc: 0 0% 100%;
  --s: 314 100% 47%;
  --sc: 0 0% 100%;
  --a: 174 60% 51%;
  --ac: 175 44% 15%;
  --n: 219 14% 28%;
  --nc: 0 0% 100%;
  --b1: 0 0% 100%;
  --b2: 0 0% 95%;
  --b3: 180 2% 90%;
  --bc: 215 28% 17%;
}
[data-theme=dark] {
  --p: 262 80% 50%;
  --pf: 262 80% 40%;
  --sf: 316 70% 40%;
  --af: 175 70% 33%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --pc: 0 0% 100%;
  --s: 316 70% 50%;
  --sc: 0 0% 100%;
  --a: 175 70% 41%;
  --ac: 0 0% 100%;
  --n: 218 18% 12%;
  --nf: 223 17% 8%;
  --nc: 220 13% 69%;
  --b1: 220 18% 20%;
  --b2: 220 17% 17%;
  --b3: 219 18% 15%;
  --bc: 220 13% 69%;
}
[data-theme=cupcake] {
  --p: 183 47% 59%;
  --pf: 183 47% 47%;
  --sf: 338 71% 62%;
  --af: 39 84% 46%;
  --nf: 280 46% 11%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --pc: 183 100% 12%;
  --sc: 338 100% 16%;
  --ac: 39 100% 12%;
  --nc: 280 83% 83%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --s: 338 71% 78%;
  --a: 39 84% 58%;
  --n: 280 46% 14%;
  --b1: 24 33% 97%;
  --b2: 27 22% 92%;
  --b3: 22 14% 89%;
  --bc: 280 46% 14%;
  --rounded-btn: 1.9rem;
  --tab-border: 2px;
  --tab-radius: .5rem;
}
[data-theme=bumblebee] {
  --p: 41 74% 53%;
  --pf: 41 74% 42%;
  --sf: 50 94% 46%;
  --af: 240 33% 11%;
  --nf: 240 33% 11%;
  --b2: 0 0% 90%;
  --b3: 0 0% 81%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --bc: 0 0% 20%;
  --ac: 240 60% 83%;
  --nc: 240 60% 83%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --pc: 240 33% 14%;
  --s: 50 94% 58%;
  --sc: 240 33% 14%;
  --a: 240 33% 14%;
  --n: 240 33% 14%;
  --b1: 0 0% 100%;
}
[data-theme=emerald] {
  --p: 141 50% 60%;
  --pf: 141 50% 48%;
  --sf: 219 96% 48%;
  --af: 10 81% 45%;
  --nf: 219 20% 20%;
  --b2: 0 0% 90%;
  --b3: 0 0% 81%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --btn-text-case: uppercase;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --pc: 151 28% 19%;
  --s: 219 96% 60%;
  --sc: 210 20% 98%;
  --a: 10 81% 56%;
  --ac: 210 20% 98%;
  --n: 219 20% 25%;
  --nc: 210 20% 98%;
  --b1: 0 0% 100%;
  --bc: 219 20% 25%;
  --animation-btn: 0;
  --animation-input: 0;
  --btn-focus-scale: 1;
}
[data-theme=corporate] {
  --p: 229 96% 64%;
  --pf: 229 96% 51%;
  --sf: 215 26% 47%;
  --af: 154 49% 48%;
  --nf: 233 27% 10%;
  --b2: 0 0% 90%;
  --b3: 0 0% 81%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --pc: 229 100% 93%;
  --sc: 215 100% 12%;
  --ac: 154 100% 12%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --btn-text-case: uppercase;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 215 26% 59%;
  --a: 154 49% 60%;
  --n: 233 27% 13%;
  --nc: 210 38% 95%;
  --b1: 0 0% 100%;
  --bc: 233 27% 13%;
  --rounded-box: 0.25rem;
  --rounded-btn: .125rem;
  --rounded-badge: .125rem;
  --animation-btn: 0;
  --animation-input: 0;
  --btn-focus-scale: 1;
}
[data-theme=synthwave] {
  --p: 321 70% 69%;
  --pf: 321 70% 55%;
  --sf: 197 87% 52%;
  --af: 48 89% 46%;
  --nf: 253 61% 15%;
  --b2: 254 59% 23%;
  --b3: 254 59% 21%;
  --pc: 321 100% 14%;
  --sc: 197 100% 13%;
  --ac: 48 100% 11%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 197 87% 65%;
  --a: 48 89% 57%;
  --n: 253 61% 19%;
  --nc: 260 60% 98%;
  --b1: 254 59% 26%;
  --bc: 260 60% 98%;
  --in: 199 87% 64%;
  --inc: 257 63% 17%;
  --su: 168 74% 68%;
  --suc: 257 63% 17%;
  --wa: 48 89% 57%;
  --wac: 257 63% 17%;
  --er: 352 74% 57%;
  --erc: 260 60% 98%;
}
[data-theme=retro] {
  --p: 3 74% 76%;
  --pf: 3 74% 61%;
  --sf: 145 27% 58%;
  --af: 49 67% 61%;
  --nf: 42 17% 34%;
  --inc: 221 100% 91%;
  --suc: 142 100% 87%;
  --wac: 32 100% 9%;
  --erc: 0 100% 90%;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --pc: 345 5% 15%;
  --s: 145 27% 72%;
  --sc: 345 5% 15%;
  --a: 49 67% 76%;
  --ac: 345 5% 15%;
  --n: 42 17% 42%;
  --nc: 45 47% 80%;
  --b1: 45 47% 80%;
  --b2: 45 37% 72%;
  --b3: 42 36% 65%;
  --bc: 345 5% 15%;
  --in: 221 83% 53%;
  --su: 142 76% 36%;
  --wa: 32 95% 44%;
  --er: 0 72% 51%;
  --rounded-box: 0.4rem;
  --rounded-btn: 0.4rem;
  --rounded-badge: 0.4rem;
}
[data-theme=cyberpunk] {
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  --pf: 345 100% 58%;
  --sf: 195 80% 56%;
  --af: 276 74% 57%;
  --nf: 57 100% 10%;
  --b2: 56 100% 45%;
  --b3: 56 100% 41%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --bc: 56 100% 10%;
  --pc: 345 100% 15%;
  --sc: 195 100% 14%;
  --ac: 276 100% 14%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --p: 345 100% 73%;
  --s: 195 80% 70%;
  --a: 276 74% 71%;
  --n: 57 100% 13%;
  --nc: 56 100% 50%;
  --b1: 56 100% 50%;
  --rounded-box: 0;
  --rounded-btn: 0;
  --rounded-badge: 0;
  --tab-radius: 0;
}
[data-theme=valentine] {
  --p: 353 74% 67%;
  --pf: 353 74% 54%;
  --sf: 254 86% 61%;
  --af: 181 56% 56%;
  --nf: 336 43% 38%;
  --b2: 318 46% 80%;
  --b3: 318 46% 72%;
  --pc: 353 100% 13%;
  --sc: 254 100% 15%;
  --ac: 181 100% 14%;
  --inc: 221 100% 91%;
  --suc: 142 100% 87%;
  --wac: 32 100% 9%;
  --erc: 0 100% 90%;
  --rounded-box: 1rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 254 86% 77%;
  --a: 181 56% 70%;
  --n: 336 43% 48%;
  --nc: 318 46% 89%;
  --b1: 318 46% 89%;
  --bc: 344 38% 28%;
  --in: 221 83% 53%;
  --su: 142 76% 36%;
  --wa: 32 95% 44%;
  --er: 0 72% 51%;
  --rounded-btn: 1.9rem;
}
[data-theme=halloween] {
  --p: 32 89% 52%;
  --pf: 32 89% 42%;
  --sf: 271 46% 34%;
  --af: 91 100% 26%;
  --nf: 180 4% 9%;
  --b2: 0 0% 12%;
  --b3: 0 0% 10%;
  --bc: 0 0% 83%;
  --sc: 271 100% 88%;
  --ac: 91 100% 7%;
  --nc: 180 5% 82%;
  --inc: 221 100% 91%;
  --suc: 142 100% 87%;
  --wac: 32 100% 9%;
  --erc: 0 100% 90%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --pc: 180 7% 8%;
  --s: 271 46% 42%;
  --a: 91 100% 33%;
  --n: 180 4% 11%;
  --b1: 0 0% 13%;
  --in: 221 83% 53%;
  --su: 142 76% 36%;
  --wa: 32 95% 44%;
  --er: 0 72% 51%;
}
[data-theme=garden] {
  --p: 139 16% 43%;
  --pf: 139 16% 34%;
  --sf: 97 37% 75%;
  --af: 0 68% 75%;
  --nf: 0 4% 28%;
  --b2: 0 4% 82%;
  --b3: 0 4% 74%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --pc: 139 100% 89%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 97 37% 93%;
  --sc: 96 32% 15%;
  --a: 0 68% 94%;
  --ac: 0 22% 16%;
  --n: 0 4% 35%;
  --nc: 0 4% 91%;
  --b1: 0 4% 91%;
  --bc: 0 3% 6%;
}
[data-theme=forest] {
  --p: 141 72% 42%;
  --pf: 141 72% 34%;
  --sf: 141 75% 38%;
  --af: 35 69% 42%;
  --nf: 0 10% 5%;
  --b2: 0 12% 7%;
  --b3: 0 12% 7%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --bc: 0 12% 82%;
  --pc: 141 100% 8%;
  --sc: 141 100% 10%;
  --ac: 35 100% 10%;
  --nc: 0 7% 81%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 141 75% 48%;
  --a: 35 69% 52%;
  --n: 0 10% 6%;
  --b1: 0 12% 8%;
  --rounded-btn: 1.9rem;
}
[data-theme=aqua] {
  --p: 182 93% 49%;
  --pf: 182 93% 40%;
  --sf: 274 31% 45%;
  --af: 47 100% 64%;
  --nf: 205 54% 40%;
  --b2: 219 53% 39%;
  --b3: 219 53% 35%;
  --bc: 219 100% 89%;
  --sc: 274 100% 91%;
  --ac: 47 100% 16%;
  --nc: 205 100% 90%;
  --inc: 221 100% 91%;
  --suc: 142 100% 87%;
  --wac: 32 100% 9%;
  --erc: 0 100% 90%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --pc: 181 100% 17%;
  --s: 274 31% 57%;
  --a: 47 100% 80%;
  --n: 205 54% 50%;
  --b1: 219 53% 43%;
  --in: 221 83% 53%;
  --su: 142 76% 36%;
  --wa: 32 95% 44%;
  --er: 0 72% 51%;
}
[data-theme=lofi] {
  --p: 0 0% 5%;
  --pf: 0 0% 4%;
  --sf: 0 2% 8%;
  --af: 0 0% 12%;
  --nf: 0 0% 0%;
  --btn-text-case: uppercase;
  --border-btn: 1px;
  --tab-border: 1px;
  --pc: 0 0% 100%;
  --s: 0 2% 10%;
  --sc: 0 0% 100%;
  --a: 0 0% 15%;
  --ac: 0 0% 100%;
  --n: 0 0% 0%;
  --nc: 0 0% 100%;
  --b1: 0 0% 100%;
  --b2: 0 0% 95%;
  --b3: 0 2% 90%;
  --bc: 0 0% 0%;
  --in: 212 100% 48%;
  --inc: 0 0% 100%;
  --su: 137 72% 46%;
  --suc: 0 0% 100%;
  --wa: 5 100% 66%;
  --wac: 0 0% 100%;
  --er: 325 78% 49%;
  --erc: 0 0% 100%;
  --rounded-box: 0.25rem;
  --rounded-btn: 0.125rem;
  --rounded-badge: 0.125rem;
  --animation-btn: 0;
  --animation-input: 0;
  --btn-focus-scale: 1;
  --tab-radius: 0;
}
[data-theme=pastel] {
  --p: 284 22% 80%;
  --pf: 284 22% 64%;
  --sf: 352 70% 70%;
  --af: 158 55% 65%;
  --nf: 199 44% 49%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --bc: 0 0% 20%;
  --pc: 284 59% 16%;
  --sc: 352 100% 18%;
  --ac: 158 100% 16%;
  --nc: 199 100% 12%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 352 70% 88%;
  --a: 158 55% 81%;
  --n: 199 44% 61%;
  --b1: 0 0% 100%;
  --b2: 210 20% 98%;
  --b3: 216 12% 84%;
  --rounded-btn: 1.9rem;
}
[data-theme=fantasy] {
  --p: 296 83% 25%;
  --pf: 296 83% 20%;
  --sf: 200 100% 30%;
  --af: 31 94% 41%;
  --nf: 215 28% 13%;
  --b2: 0 0% 90%;
  --b3: 0 0% 81%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --pc: 296 100% 85%;
  --sc: 200 100% 87%;
  --ac: 31 100% 10%;
  --nc: 215 62% 83%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 200 100% 37%;
  --a: 31 94% 51%;
  --n: 215 28% 17%;
  --b1: 0 0% 100%;
  --bc: 215 28% 17%;
}
[data-theme=wireframe] {
  font-family: Chalkboard,comic sans ms,"sanssecondaryerif";
  --pf: 0 0% 58%;
  --sf: 0 0% 58%;
  --af: 0 0% 58%;
  --nf: 0 0% 74%;
  --bc: 0 0% 20%;
  --pc: 0 0% 14%;
  --sc: 0 0% 14%;
  --ac: 0 0% 14%;
  --nc: 0 0% 18%;
  --inc: 240 100% 90%;
  --suc: 120 100% 85%;
  --wac: 60 100% 10%;
  --erc: 0 100% 90%;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --p: 0 0% 72%;
  --s: 0 0% 72%;
  --a: 0 0% 72%;
  --n: 0 0% 92%;
  --b1: 0 0% 100%;
  --b2: 0 0% 93%;
  --b3: 0 0% 87%;
  --in: 240 100% 50%;
  --su: 120 100% 25%;
  --wa: 60 30% 50%;
  --er: 0 100% 50%;
  --rounded-box: 0.2rem;
  --rounded-btn: 0.2rem;
  --rounded-badge: 0.2rem;
  --tab-radius: 0.2rem;
}
[data-theme=black] {
  --p: 0 2% 20%;
  --pf: 0 2% 16%;
  --sf: 0 2% 16%;
  --af: 0 2% 16%;
  --bc: 0 0% 80%;
  --pc: 0 5% 84%;
  --sc: 0 5% 84%;
  --ac: 0 5% 84%;
  --nc: 0 3% 83%;
  --inc: 240 100% 90%;
  --suc: 120 100% 85%;
  --wac: 60 100% 10%;
  --erc: 0 100% 90%;
  --border-btn: 1px;
  --tab-border: 1px;
  --s: 0 2% 20%;
  --a: 0 2% 20%;
  --b1: 0 0% 0%;
  --b2: 0 0% 5%;
  --b3: 0 2% 10%;
  --n: 0 1% 15%;
  --nf: 0 2% 20%;
  --in: 240 100% 50%;
  --su: 120 100% 25%;
  --wa: 60 100% 50%;
  --er: 0 100% 50%;
  --rounded-box: 0;
  --rounded-btn: 0;
  --rounded-badge: 0;
  --animation-btn: 0;
  --animation-input: 0;
  --btn-text-case: lowercase;
  --btn-focus-scale: 1;
  --tab-radius: 0;
}
[data-theme=luxury] {
  --p: 0 0% 100%;
  --pf: 0 0% 80%;
  --sf: 218 54% 14%;
  --af: 319 22% 21%;
  --nf: 270 4% 7%;
  --pc: 0 0% 20%;
  --sc: 218 100% 84%;
  --ac: 319 85% 85%;
  --inc: 202 100% 14%;
  --suc: 89 100% 10%;
  --wac: 54 100% 13%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 218 54% 18%;
  --a: 319 22% 26%;
  --n: 270 4% 9%;
  --nc: 37 67% 58%;
  --b1: 240 10% 4%;
  --b2: 270 4% 9%;
  --b3: 270 2% 18%;
  --bc: 37 67% 58%;
  --in: 202 100% 70%;
  --su: 89 62% 52%;
  --wa: 54 69% 64%;
  --er: 0 100% 72%;
}
[data-theme=dracula] {
  --p: 326 100% 74%;
  --pf: 326 100% 59%;
  --sf: 265 89% 62%;
  --af: 31 100% 57%;
  --nf: 230 15% 24%;
  --b2: 231 15% 17%;
  --b3: 231 15% 15%;
  --pc: 326 100% 15%;
  --sc: 265 100% 16%;
  --ac: 31 100% 14%;
  --nc: 230 71% 86%;
  --inc: 191 100% 15%;
  --suc: 135 100% 13%;
  --wac: 65 100% 15%;
  --erc: 0 100% 93%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 265 89% 78%;
  --a: 31 100% 71%;
  --n: 230 15% 30%;
  --b1: 231 15% 18%;
  --bc: 60 30% 96%;
  --in: 191 97% 77%;
  --su: 135 94% 65%;
  --wa: 65 92% 76%;
  --er: 0 100% 67%;
}
[data-theme=cmyk] {
  --p: 203 83% 60%;
  --pf: 203 83% 48%;
  --sf: 335 78% 48%;
  --af: 56 100% 48%;
  --nf: 0 0% 8%;
  --b2: 0 0% 90%;
  --b3: 0 0% 81%;
  --bc: 0 0% 20%;
  --pc: 203 100% 12%;
  --sc: 335 100% 92%;
  --ac: 56 100% 12%;
  --nc: 0 0% 82%;
  --inc: 192 100% 10%;
  --suc: 291 100% 88%;
  --wac: 25 100% 11%;
  --erc: 4 100% 91%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 335 78% 60%;
  --a: 56 100% 60%;
  --n: 0 0% 10%;
  --b1: 0 0% 100%;
  --in: 192 48% 52%;
  --su: 291 48% 38%;
  --wa: 25 85% 57%;
  --er: 4 81% 56%;
}
[data-theme=autumn] {
  --p: 344 96% 28%;
  --pf: 344 96% 22%;
  --sf: 0 63% 47%;
  --af: 27 56% 50%;
  --nf: 22 17% 35%;
  --b2: 0 0% 85%;
  --b3: 0 0% 77%;
  --bc: 0 0% 19%;
  --pc: 344 100% 86%;
  --sc: 0 100% 92%;
  --ac: 27 100% 13%;
  --nc: 22 100% 89%;
  --inc: 187 100% 10%;
  --suc: 165 100% 9%;
  --wac: 30 100% 10%;
  --erc: 354 100% 90%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 0 63% 58%;
  --a: 27 56% 63%;
  --n: 22 17% 44%;
  --b1: 0 0% 95%;
  --in: 187 48% 50%;
  --su: 165 34% 43%;
  --wa: 30 84% 50%;
  --er: 354 79% 49%;
}
[data-theme=business] {
  --p: 210 64% 31%;
  --pf: 210 64% 24%;
  --sf: 200 13% 44%;
  --af: 13 80% 48%;
  --nf: 213 14% 13%;
  --b2: 0 0% 11%;
  --b3: 0 0% 10%;
  --bc: 0 0% 83%;
  --pc: 210 100% 86%;
  --sc: 200 100% 11%;
  --ac: 13 100% 12%;
  --nc: 213 28% 83%;
  --inc: 199 100% 88%;
  --suc: 144 100% 11%;
  --wac: 39 100% 12%;
  --erc: 6 100% 89%;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 200 13% 55%;
  --a: 13 80% 60%;
  --n: 213 14% 16%;
  --b1: 0 0% 13%;
  --in: 199 100% 42%;
  --su: 144 31% 56%;
  --wa: 39 64% 60%;
  --er: 6 56% 43%;
  --rounded-box: 0.25rem;
  --rounded-btn: .125rem;
  --rounded-badge: .125rem;
}
[data-theme=acid] {
  --p: 303 100% 50%;
  --pf: 303 100% 40%;
  --sf: 27 100% 40%;
  --af: 72 98% 40%;
  --nf: 238 43% 14%;
  --b2: 0 0% 88%;
  --b3: 0 0% 79%;
  --bc: 0 0% 20%;
  --pc: 303 100% 90%;
  --sc: 27 100% 10%;
  --ac: 72 100% 10%;
  --nc: 238 99% 83%;
  --inc: 210 100% 12%;
  --suc: 149 100% 12%;
  --wac: 53 100% 11%;
  --erc: 1 100% 89%;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 27 100% 50%;
  --a: 72 98% 50%;
  --n: 238 43% 17%;
  --b1: 0 0% 98%;
  --in: 210 92% 58%;
  --su: 149 50% 58%;
  --wa: 53 93% 57%;
  --er: 1 100% 45%;
  --rounded-box: 1.25rem;
  --rounded-btn: 1rem;
  --rounded-badge: 1rem;
}
[data-theme=lemonade] {
  --p: 89 96% 31%;
  --pf: 89 96% 24%;
  --sf: 60 81% 44%;
  --af: 63 80% 71%;
  --nf: 238 43% 14%;
  --b2: 0 0% 90%;
  --b3: 0 0% 81%;
  --bc: 0 0% 20%;
  --pc: 89 100% 86%;
  --sc: 60 100% 11%;
  --ac: 63 100% 18%;
  --nc: 238 99% 83%;
  --inc: 192 79% 17%;
  --suc: 74 100% 16%;
  --wac: 50 100% 15%;
  --erc: 1 100% 17%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 60 81% 55%;
  --a: 63 80% 88%;
  --n: 238 43% 17%;
  --b1: 0 0% 100%;
  --in: 192 39% 85%;
  --su: 74 76% 79%;
  --wa: 50 87% 75%;
  --er: 1 70% 83%;
}
[data-theme=night] {
  --p: 198 93% 60%;
  --pf: 198 93% 48%;
  --sf: 234 89% 59%;
  --af: 329 86% 56%;
  --b2: 222 47% 10%;
  --b3: 222 47% 9%;
  --bc: 222 66% 82%;
  --pc: 198 100% 12%;
  --sc: 234 100% 15%;
  --ac: 329 100% 14%;
  --nc: 217 76% 83%;
  --inc: 198 100% 10%;
  --suc: 172 100% 10%;
  --wac: 41 100% 13%;
  --erc: 351 100% 14%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 234 89% 74%;
  --a: 329 86% 70%;
  --n: 217 33% 17%;
  --nf: 217 30% 22%;
  --b1: 222 47% 11%;
  --in: 198 90% 48%;
  --su: 172 66% 50%;
  --wa: 41 88% 64%;
  --er: 351 95% 71%;
}
[data-theme=coffee] {
  --p: 30 67% 58%;
  --pf: 30 67% 46%;
  --sf: 182 25% 16%;
  --af: 194 74% 20%;
  --nf: 300 20% 5%;
  --b2: 306 19% 10%;
  --b3: 306 19% 9%;
  --pc: 30 100% 12%;
  --sc: 182 67% 84%;
  --ac: 194 100% 85%;
  --nc: 300 14% 81%;
  --inc: 171 100% 13%;
  --suc: 93 100% 12%;
  --wac: 43 100% 14%;
  --erc: 10 100% 15%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 182 25% 20%;
  --a: 194 74% 25%;
  --n: 300 20% 6%;
  --b1: 306 19% 11%;
  --bc: 37 8% 42%;
  --in: 171 37% 67%;
  --su: 93 25% 62%;
  --wa: 43 100% 69%;
  --er: 10 95% 75%;
}
[data-theme=winter] {
  --p: 212 100% 51%;
  --pf: 212 100% 41%;
  --sf: 247 47% 35%;
  --af: 310 49% 42%;
  --nf: 217 92% 8%;
  --pc: 212 100% 90%;
  --sc: 247 100% 89%;
  --ac: 310 100% 90%;
  --nc: 217 100% 82%;
  --inc: 192 100% 16%;
  --suc: 182 100% 13%;
  --wac: 32 100% 17%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: 0.25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: 0.95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
  --s: 247 47% 43%;
  --a: 310 49% 52%;
  --n: 217 92% 10%;
  --b1: 0 0% 100%;
  --b2: 217 100% 97%;
  --b3: 219 44% 92%;
  --bc: 214 30% 32%;
  --in: 192 93% 78%;
  --su: 182 47% 66%;
  --wa: 32 62% 84%;
  --er: 0 63% 72%;
}
*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.avatar {
  position: relative;
  display: inline-flex;
}
.avatar > div {
  display: block;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.avatar img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.avatar.placeholder > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn {
  display: inline-flex;
  flex-shrink: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  border-color: hsl(var(--n) / var(--tw-border-opacity));
  text-align: center;
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: var(--rounded-btn, 0.5rem);
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 1em;
  min-height: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  text-transform: var(--btn-text-case, uppercase);
  -webkit-text-decoration-line: none;
  text-decoration-line: none;
  border-width: var(--border-btn, 1px);
  -webkit-animation: button-pop var(--animation-btn, 0.25s) ease-out;
          animation: button-pop var(--animation-btn, 0.25s) ease-out;
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--nc) / var(--tw-text-opacity));
}
.btn-disabled, 
  .btn[disabled] {
  pointer-events: none;
}
.btn.loading, 
    .btn.loading:hover {
  pointer-events: none;
}
.btn.loading:before {
  margin-right: 0.5rem;
  height: 1rem;
  width: 1rem;
  border-radius: 9999px;
  border-width: 2px;
  -webkit-animation: spin 2s linear infinite;
          animation: spin 2s linear infinite;
  content: "";
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: currentColor;
  border-right-color: currentColor;
}
@media (prefers-reduced-motion: reduce) {
  .btn.loading:before {
    -webkit-animation: spin 10s linear infinite;
            animation: spin 10s linear infinite;
  }
}
@-webkit-keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
}
.btn-group > input[type="radio"].btn {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.btn-group > input[type="radio"].btn:before {
  content: attr(data-title);
}
.divider {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 1rem;
  white-space: nowrap;
}
.divider:before,
  .divider:after {
  content: "";
  flex-grow: 1;
  height: 0.125rem;
  width: 100%;
}
.footer {
  display: grid;
  width: 100%;
  grid-auto-flow: row;
  place-items: start;
  row-gap: 2.5rem;
  -moz-column-gap: 1rem;
       column-gap: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.footer > * {
  display: grid;
  place-items: start;
  gap: 0.5rem;
}
@media (min-width: 48rem) {
  .footer {
    grid-auto-flow: column;
  }
  .footer-center {
    grid-auto-flow: row dense;
  }
}
.hero {
  display: grid;
  width: 100%;
  place-items: center;
  background-size: cover;
  background-position: center;
}
.hero > * {
  grid-column-start: 1;
  grid-row-start: 1;
}
.hero-content {
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80rem;
  gap: 1rem;
  padding: 1rem;
}
.link {
  cursor: pointer;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
}
.navbar {
  display: flex;
  align-items: center;
  padding: var(--navbar-padding, 0.5rem);
  min-height: 4rem;
  width: 100%;
}
:where(.navbar > *) {
  display: inline-flex;
  align-items: center;
}
.avatar-group .avatar {
  overflow: hidden;
  border-radius: 9999px;
  border-width: 4px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--b1) / var(--tw-border-opacity));
}
.btn:active:hover,
  .btn:active:focus {
  -webkit-animation: none;
          animation: none;
  transform: scale(var(--btn-focus-scale, 0.95));
}
.btn:hover, 
    .btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));
}
.btn:focus-visible {
  outline: 2px solid hsl(var(--nf));
  outline-offset: 2px;
}
.btn.glass:hover,
    .btn.glass.btn-active {
  --glass-opacity: 25%;
  --glass-border-opacity: 15%;
}
.btn.glass:focus-visible {
  outline: 2px solid 0 0 2px currentColor;
}
.btn-ghost {
  border-width: 1px;
  border-color: transparent;
  background-color: transparent;
  color: currentColor;
}
.btn-ghost:hover, 
    .btn-ghost.btn-active {
  --tw-border-opacity: 0;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
}
.btn-ghost:focus-visible {
  outline: 2px solid 0 0 2px currentColor;
}
.btn-disabled, 
  .btn-disabled:hover, 
  .btn[disabled], 
  .btn[disabled]:hover {
  --tw-border-opacity: 0;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
  color: hsl(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.2;
}
.btn.loading.btn-square:before, 
    .btn.loading.btn-circle:before {
  margin-right: 0px;
}
.btn.loading.btn-xl:before, 
    .btn.loading.btn-lg:before {
  height: 1.25rem;
  width: 1.25rem;
}
.btn.loading.btn-sm:before, 
    .btn.loading.btn-xs:before {
  height: 0.75rem;
  width: 0.75rem;
}
.btn-group > input[type="radio"]:checked.btn, 
  .btn-group > .btn-active {
  --tw-border-opacity: 1;
  border-color: hsl(var(--p) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
.btn-group > input[type="radio"]:checked.btn:focus-visible, .btn-group > .btn-active:focus-visible {
  outline: 2px solid hsl(var(--p));
}
.btn-group:not(.btn-group-vertical) > .btn:not(:first-of-type) {
  margin-left: -1px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.btn-group:not(.btn-group-vertical) > .btn:not(:last-of-type) {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.btn-group-vertical > .btn:not(:first-of-type) {
  margin-top: -1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.btn-group-vertical > .btn:not(:last-of-type) {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
@-webkit-keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, 0.95));
  }
  40% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, 0.95));
  }
  40% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes checkmark {
  0% {
    background-position-y: 5px;
  }
  50% {
    background-position-y: -2px;
  }
  100% {
    background-position-y: 0;
  }
}
@keyframes checkmark {
  0% {
    background-position-y: 5px;
  }
  50% {
    background-position-y: -2px;
  }
  100% {
    background-position-y: 0;
  }
}
.divider:before {
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
}
.divider:after {
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
}
.divider:not(:empty) {
  gap: 1rem;
}
.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-ghost {
  outline: 2px solid currentColor;
}
.link:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
.menu :where(li:not(.menu-title):not(:empty)) > :where(:not(ul).active), 
  .menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):active) {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}
.mockup-phone .display {
  overflow: hidden;
  border-radius: 40px;
  margin-top: -25px;
}
@-webkit-keyframes progress-loading {
  50% {
    left: 107%;
  }
}
@keyframes progress-loading {
  50% {
    left: 107%;
  }
}
@-webkit-keyframes radiomark {
  0% {
    box-shadow: 0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset;
  }
  50% {
    box-shadow: 0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset;
  }
  100% {
    box-shadow: 0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset;
  }
}
@keyframes radiomark {
  0% {
    box-shadow: 0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset;
  }
  50% {
    box-shadow: 0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset;
  }
  100% {
    box-shadow: 0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset;
  }
}
@-webkit-keyframes rating-pop {
  0% {
    transform: translateY(-0.125em);
  }
  40% {
    transform: translateY(-0.125em);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes rating-pop {
  0% {
    transform: translateY(-0.125em);
  }
  40% {
    transform: translateY(-0.125em);
  }
  100% {
    transform: translateY(0);
  }
}
.table tr.active th, 
    .table tr.active td, 
    .table tr.active:nth-child(even) th, 
    .table tr.active:nth-child(even) td {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
}
.avatar.online:before {
  content: "";
  position: absolute;
  z-index: 10;
  display: block;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--su) / var(--tw-bg-opacity));
  width: 15%;
  height: 15%;
  top: 7%;
  right: 7%;
  box-shadow: 0 0 0 2px hsl(var(--b1));
}
.avatar.offline:before {
  content: "";
  position: absolute;
  z-index: 10;
  display: block;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));
  width: 15%;
  height: 15%;
  top: 7%;
  right: 7%;
  box-shadow: 0 0 0 2px hsl(var(--b1));
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.mb-16 {
  margin-bottom: 4rem;
}
.mt-5 {
  margin-top: 1.25rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.hidden {
  display: none;
}
.h-screen {
  height: 100vh;
}
.min-h-screen {
  min-height: 100vh;
}
.max-w-md {
  max-width: 28rem;
}
.grow {
  flex-grow: 1;
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.grid-flow-col {
  grid-auto-flow: column;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.gap-4 {
  gap: 1rem;
}
.space-x-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.25rem * var(--tw-space-x-reverse));
  margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));
}
.rounded {
  border-radius: 0.25rem;
}
.border {
  border-width: 1px;
}
.bg-dark-blue {
  --tw-bg-opacity: 1;
  background-color: rgb(70 70 96 / var(--tw-bg-opacity));
}
.bg-dark-green {
  --tw-bg-opacity: 1;
  background-color: rgb(54 139 133 / var(--tw-bg-opacity));
}
.p-4 {
  padding: 1rem;
}
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.text-center {
  text-align: center;
}
.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.font-bold {
  font-weight: 700;
}
.uppercase {
  text-transform: uppercase;
}
.italic {
  font-style: italic;
}
.text-whitesmoke {
  --tw-text-opacity: 1;
  color: rgb(241 233 229 / var(--tw-text-opacity));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-neutral-content {
  --tw-text-opacity: 1;
  color: hsl(var(--nc) / var(--tw-text-opacity));
}
.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.hover\\:bg-whitesmoke:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(241 233 229 / var(--tw-bg-opacity));
}
@media (min-width: 768px) {
  .md\\:place-self-center {
    place-self: center;
  }
  .md\\:justify-self-center {
    justify-self: center;
  }
}
`)();
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar flex flex-row bg-dark-blue"}"><div class="${"grow avatar"}"><button><h1 class="${"italic text-whitesmoke"}">Nabil Alkahar</h1></button></div>
	<div class="${"space-x-5 mr45 justify-end"}"><div><button class="${"text-whitesmoke"}">About</button></div>
		<div><button class="${"text-whitesmoke"}">Contacts</button></div>
		<div><button class="${"text-whitesmoke"}">Portfolio</button></div>
		<div><button class="${"text-whitesmoke"}">Blog</button></div></div></div>

<div class="${"bg-dark-blue"}">${slots.default ? slots.default({}) : ``}</div>

<footer class="${"footer items-center p-4 bg-dark-blue text-neutral-content"}"><div class="${"grid-flow-col gap-4 md:place-self-center md:justify-self-center"}"><a href="${"https://www.linkedin.com/in/nabilalkahar/"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path fill="${"white"}" d="${"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}"></path></svg></a>
		<a href="${"https://t.me/nabilalkahar"}"><svg width="${"24px"}" height="${"24px"}" style="${"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"}"><path fill="${"white"}" id="${"telegram-4"}" d="${"M12,0c-6.626,0 -12,5.372 -12,12c0,6.627 5.374,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.628 -5.373,-12 -12,-12Zm3.224,17.871c0.188,0.133 0.43,0.166 0.646,0.085c0.215,-0.082 0.374,-0.267 0.422,-0.491c0.507,-2.382 1.737,-8.412 2.198,-10.578c0.035,-0.164 -0.023,-0.334 -0.151,-0.443c-0.129,-0.109 -0.307,-0.14 -0.465,-0.082c-2.446,0.906 -9.979,3.732 -13.058,4.871c-0.195,0.073 -0.322,0.26 -0.316,0.467c0.007,0.206 0.146,0.385 0.346,0.445c1.381,0.413 3.193,0.988 3.193,0.988c0,0 0.847,2.558 1.288,3.858c0.056,0.164 0.184,0.292 0.352,0.336c0.169,0.044 0.348,-0.002 0.474,-0.121c0.709,-0.669 1.805,-1.704 1.805,-1.704c0,0 2.084,1.527 3.266,2.369Zm-6.423,-5.062l0.98,3.231l0.218,-2.046c0,0 3.783,-3.413 5.941,-5.358c0.063,-0.057 0.071,-0.153 0.019,-0.22c-0.052,-0.067 -0.148,-0.083 -0.219,-0.037c-2.5,1.596 -6.939,4.43 -6.939,4.43Z"}"></path></svg></a>
		<a href="${"mailto:nabilalkahar90@gmail.com"}"><svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path fill="${"white"}" d="${"M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"}"></path></svg></a></div></footer>

`;
});
export { _layout as default };
