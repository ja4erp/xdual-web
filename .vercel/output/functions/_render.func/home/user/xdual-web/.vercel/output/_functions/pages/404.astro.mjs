/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CtZIaE04.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cs8eLbcE.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404", "description": "This is the description for the xdual website.", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-zetdm5md> <div class="svg-container" data-astro-cid-zetdm5md> <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet" data-astro-cid-zetdm5md> <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" data-astro-cid-zetdm5md> <path d="M3078 3663 c-9 -10 -154 -214 -323 -453 -168 -239 -310 -436 -314
                -438 -4 -1 -70 85 -146 193 l-140 195 -313 0 c-248 0 -312 -3 -306 -12 4 -7
                137 -196 296 -420 l288 -407 -458 -643 c-253 -354 -464 -653 -470 -664 -22
                -42 -5 -44 303 -44 l291 0 327 456 326 455 45 -63 c25 -35 88 -121 139 -193
                l93 -130 312 -3 c172 -1 312 0 312 4 0 5 -275 392 -482 677 l-108 149 19 27
                c11 14 222 309 470 655 248 345 451 634 451 640 0 33 -22 36 -310 36 -261 0
                -288 -2 -302 -17z" data-astro-cid-zetdm5md></path> </g> </svg> </div> <div class="content" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404</h1> <h2 data-astro-cid-zetdm5md>Page not found</h2> </div> </main> ` })} `;
}, "/home/user/xdual-web/src/pages/404.astro", void 0);

const $$file = "/home/user/xdual-web/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
