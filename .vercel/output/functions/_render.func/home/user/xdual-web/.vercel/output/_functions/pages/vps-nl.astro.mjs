/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CtZIaE04.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cs8eLbcE.mjs';
import { $ as $$Nav, a as $$Header, b as $$Cards, c as $$Footer } from '../chunks/Footer_C5wslwMG.mjs';
import { $ as $$VpsCard, a as $$PanelInfo } from '../chunks/VpsCard_S4vZvaQF.mjs';
export { renderers } from '../renderers.mjs';

const $$VpsNl = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      name: "VPS 1",
      href: "https://my.xdual.es/checkout/config/12",
      price: "2",
      features: [
        "\u{1F1F3}\u{1F1F1} Netherlands",
        "2 Xeon vCores",
        "4GB DDR4 RAM",
        "50GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "VPS 2",
      href: "https://my.xdual.es/checkout/config/13",
      price: "3",
      features: [
        "\u{1F1F3}\u{1F1F1} Netherlands",
        "4 Xeon vCores",
        "6GB DDR4 RAM",
        "70GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "VPS 3",
      href: "https://my.xdual.es/checkout/config/14",
      price: "4",
      features: [
        "\u{1F1F3}\u{1F1F1} Netherlands",
        "6 Xeon vCores",
        "8GB DDR4 RAM",
        "90GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "VPS 4",
      href: "https://my.xdual.es/checkout/config/15",
      price: "6",
      features: [
        "\u{1F1F3}\u{1F1F1} Netherlands",
        "6 Xeon vCores",
        "12GB DDR4 RAM",
        "125GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "VPS 5",
      href: "https://my.xdual.es/checkout/config/17",
      price: "8",
      features: [
        "\u{1F1F3}\u{1F1F1} Netherlands",
        "8 Xeon vCores",
        "16GB DDR4 RAM",
        "160GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "VPS 6",
      href: "https://my.xdual.es/checkout/config/23",
      price: "10",
      features: [
        "\u{1F1F3}\u{1F1F1} Netherlands",
        "10 Xeon vCores",
        "20GB DDR4 RAM",
        "200GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "VPS 7",
      href: "https://my.xdual.es/checkout/config/19",
      price: "14",
      features: [
        "\u{1F1F3}\u{1F1F1} Netherlands",
        "12 Xeon vCores",
        "28GB DDR4 RAM",
        "260GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "VPS 8",
      href: "https://my.xdual.es/checkout/config/21",
      price: "20",
      features: [
        "\u{1F1F3}\u{1F1F1} Netherlands",
        "16 Xeon vCores",
        "40GB DDR4 RAM",
        "400GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "VPS 9",
      href: "https://my.xdual.es/checkout/config/22",
      price: "30",
      features: [
        "\u{1F1F3}\u{1F1F1} Netherlands",
        "18 Xeon vCores",
        "60GB DDR4 RAM",
        "600GB NVMe",
        "AntiDDoS path.net + 1 IPv4",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Xdual | VPS", "description": "This is the description for the xdual website." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "Header", $$Header, {})} <!-- CARDS --> <div class="relative max-w-7xl mx-auto px-3 pt-10"> <h1 class="mb-4 font-bold text-3xl text-black">Our Products</h1> <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4"> ${products.map((product) => renderTemplate`${renderComponent($$result2, "VpsCard", $$VpsCard, { "name": product.name, "href": product.href, "price": product.price, "features": product.features })}`)} </div> </div> <!--CARDS END --> ${renderComponent($$result2, "Info", $$Cards, {})} ${renderComponent($$result2, "PanelInfo", $$PanelInfo, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "/home/user/xdual-web/src/pages/vps-nl.astro", void 0);

const $$file = "/home/user/xdual-web/src/pages/vps-nl.astro";
const $$url = "/vps-nl";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$VpsNl,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
