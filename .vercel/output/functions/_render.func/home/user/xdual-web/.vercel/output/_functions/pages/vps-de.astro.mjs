/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CtZIaE04.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cs8eLbcE.mjs';
import { $ as $$Nav, a as $$Header, b as $$Cards, c as $$Footer } from '../chunks/Footer_C5wslwMG.mjs';
import { $ as $$VpsCard, a as $$PanelInfo } from '../chunks/VpsCard_S4vZvaQF.mjs';
export { renderers } from '../renderers.mjs';

const $$VpsDe = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      name: "VPS 1",
      href: "https://my.xdual.es/checkout/config/1",
      price: "5",
      features: [
        "\u{1F1E9}\u{1F1EA} Germany, Frankfurt",
        "2 Intel vCores",
        "4GB DDR4 RAM",
        "50GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "VPS 2",
      href: "https://my.xdual.es/checkout/config/7",
      price: "8",
      features: [
        "\u{1F1E9}\u{1F1EA} Germany, Frankfurt",
        "4 Intel vCores",
        "6GB DDR4 RAM",
        "70GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "VPS 3",
      href: "https://my.xdual.es/checkout/config/8",
      price: "10",
      features: [
        "\u{1F1E9}\u{1F1EA} Germany, Frankfurt",
        "6 Intel vCores",
        "8GB DDR4 RAM",
        "90GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "VPS 4",
      href: "https://my.xdual.es/checkout/config/9",
      price: "15",
      features: [
        "\u{1F1E9}\u{1F1EA} Germany, Frankfurt",
        "6 Intel vCores",
        "12GB DDR4 RAM",
        "125GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "VPS 5",
      href: "https://my.xdual.es/checkout/config/10",
      price: "20",
      features: [
        "\u{1F1E9}\u{1F1EA} Germany, Frankfurt",
        "8 Intel vCores",
        "16GB DDR4 RAM",
        "160GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Xdual | VPS DE", "description": "This is the description for the xdual website." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "Header", $$Header, {})} <!-- CARDS --> <div class="relative max-w-7xl mx-auto px-3 pt-10"> <h1 class="mb-4 font-bold text-3xl text-black">Our Products</h1> <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4"> ${products.map((product) => renderTemplate`${renderComponent($$result2, "VpsCard", $$VpsCard, { "name": product.name, "href": product.href, "price": product.price, "features": product.features })}`)} </div> </div> <!--CARDS END --> ${renderComponent($$result2, "Info", $$Cards, {})} ${renderComponent($$result2, "PanelInfo", $$PanelInfo, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "/home/user/xdual-web/src/pages/vps-de.astro", void 0);

const $$file = "/home/user/xdual-web/src/pages/vps-de.astro";
const $$url = "/vps-de";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$VpsDe,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
