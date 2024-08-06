import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_CtZIaE04.mjs';
import 'kleur/colors';
import 'clsx';

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-black fixed w-full z-20 top-0"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="https://xdual.es" class="flex items-center space-x-3 rtl:space-x-reverse"><img src="logo.avif" class="h-14 w-14 rounded-full" alt="Xdual Logo" alt="Xdual logo"><span class="self-center text-4xl font-bold whitespace-nowrap text-white">Xdual</span></a><button class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg></button><div class="hidden w-full md:flex md:w-auto md:order-1 hidden" id="navbar-sticky"> <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0 bg-black md:p-0"> <li> <a class="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white" href="/vps-nl">Vps Servers</a> </li><li> <a class="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white" href="/dedicated">Dedicated Servers</a> </li> <li> <a class="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white" href="https://status.xdual.es" target="_blank">Status</a> </li> </ul> </div><div class="hidden md:flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse"> <a href="https://my.xdual.es/login" class="rounded-md hover:bg-gray-200 bg-white text-black font-bold text-sm px-4 py-2 text-center border-black border border-transparent">Client Area</a> </div> </div><div class="md:hidden hidden" id="mobile-menu"> <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"> <a class="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white" href="https://xdual.es">Home</a><a class="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white" href="https://Xdual.es/vps-nl">Vps Servers</a><a class="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white" href="https://Xdual.es/dedicated">Dedicated Servers</a> </div><div class="pt-4 ml-2 pb-3 border-t border-gray-700"> <a href="https://my.xdual.es/login" class="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white">Client Area</a><a class="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 hover:bg-transparent hover:text-white p-0 active:text-white" target="_blank" href="https://status.xdual.es">Status</a> </div> </div> </nav> `;
}, "/home/user/xdual-web/src/components/Nav.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative py-12 isolate"> <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"> <div class="relative left-[calc(50%-11rem)] aspect-[1155/878] w-[36.125rem] -translate-x-1/4 rotate-[10deg] bg-gradient-to-tr from-[#FFA500] to-[#FF4500] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);"></div> </div><div class="relative max-w-7xl mx-auto px-3 pt-20"> <div class="overflow-hidden sm:rounded-lg"> <div class="mt-20 mx-auto mb-20"> <h1 class="mb-4 font-bold text-6xl"> <span class="text-white"> High Performance Servers </span> </h1><p class="font-normal text-white text-2xl mt-6">
We're an affordable hosting provider<br> We offer reliable and quality hosting solutions located across
                    4 global locations.
</p><ul class="list-disc text-white list-inside mt-5"> <li>Owned hardware across all cloud server regions</li><li>
Enterprise hardware with great support
</li><li>
Global availability of servers
</li> </ul> </div> </div> </div> </div>`;
}, "/home/user/xdual-web/src/components/Header.astro", void 0);

const $$Cards = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative max-w-7xl mx-auto pt-10"> <div class="overflow-hidden sm:rounded-lg"> <div class="mx-auto"> <div class="grid grid-cols-1 md:grid-cols-3 gap-14"> <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"> <div class=" mr-5 ml-1 mt-5"> <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" aria-hidden="true" data-slot="icon" class="h-10 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"></path></svg> </div><h4 class="text-xl font-bold mb-2">
Lightning Fast CPUs
</h4><p class="text-gray-500">
We only use some of the fastest and highest end CPUs
                            in our servers.
</p> </div> </div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"> <div class=" mt-5"> <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" aria-hidden="true" data-slot="icon" class="h-10 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"></path></svg> </div><h4 class="text-xl font-bold mb-2">Network</h4><p class="text-gray-500">
We offer the fastest Gbit network uplinks in most of our locations, providing a massive upgrade from the standard bandwidth typically offered by cloud servers.
</p> </div> </div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="300"> <div class=" mt-5"> <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" aria-hidden="true" data-slot="icon" class="h-10 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"></path></svg> </div><h4 class="text-xl font-bold mb-2">
All NVMe Storage
</h4><p class="text-gray-500">
Almost all of our servers contain lightning fast
                            solid state storage, resulting in low latency access
                            times to your data.
</p> </div> </div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"> <div class=" mr-5 ml-1 mt-5"> <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" aria-hidden="true" data-slot="icon" class="h-10 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"></path></svg> </div><h4 class="text-xl font-bold mb-2">
Affordable
</h4><p class="text-gray-500">
We are one of the cheapest cloud service providers
                            in the market, offering high performance servers at
                            a fraction of the cost.
</p> </div> </div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"> <div class=" mt-5"> <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" aria-hidden="true" data-slot="icon" class="h-10 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"></path></svg> </div><h4 class="text-xl font-bold mb-2">
Owned Infrastructure
</h4><p class="text-gray-500">
We own all of our hardware across nearly all of our
                            cloud server regions, allowing us to deliver high
                            performance at an affordable price.
</p> </div> </div><div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="300"> <div class=" mt-5"> <div class="mb-6 md:mb-8 rounded-md border-solid border-2 w-16 h-16 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" aria-hidden="true" data-slot="icon" class="h-10 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg> </div><h4 class="text-xl font-bold mb-2">Reliable</h4><p class="text-gray-500">
All services come with a 99.9% uptime by
                            default. We use enterprise gear and redundant
                            systems to ensure reliability.
</p> </div> </div> </div> </div> </div> </div>`;
}, "/home/user/xdual-web/src/components/Cards.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <h2 id="footer-heading" class="sr-only">Footer</h2><div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32"> <div class="xl:grid xl:grid-cols-3 xl:gap-8"> <div class="space-y-8"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"><img src="logo.avif" class="h-14" alt="Xdual logo" loading="lazy"><span class="self-center text-2xl font-semibold whitespace-nowrap font-bukhari-script text-white">Xdual</span></a><p class="text-sm leading-6 text-gray-300">
High-performance cloud hosting for an affordable price,
                    featuring lightning fast processors.
</p> <div class="flex space-x-6"></div> </div><div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"> <div class="md:grid md:grid-cols-2 md:gap-8"> <div> <h3 class="text-sm font-semibold leading-6 text-white">
Solutions
</h3><ul role="list" class="mt-6 space-y-4"> <li> <a class="text-sm leading-6 text-gray-300 hover:text-white" href="/vps-nl">Vps Servers</a> </li><li> <a class="text-sm leading-6 text-gray-300 hover:text-white" href="https://xdual.es/dedicated">Dedicated Servers</a> </li> </ul> </div><div class="mt-10 md:mt-0"> <h3 class="text-sm font-semibold leading-6 text-white">
Support
</h3><ul role="list" class="mt-6 space-y-4"> <li> <a href="https://my.xdual.es/tickets/create" class="text-sm leading-6 text-gray-300 hover:text-white">Contact</a> </li><li> <a href="https://docs.xdual.es" class="text-sm leading-6 text-gray-300 hover:text-white">Docs</a> </li><li> <a href="https://status.xdual.es" target="_blank" class="text-sm leading-6 text-gray-300 hover:text-white">Service Status</a> </li> </ul> </div> </div><div class="md:grid md:grid-cols-2 md:gap-8"> <div> <h3 class="text-sm font-semibold leading-6 text-white">
Services
</h3><ul role="list" class="mt-6 space-y-4"> <li> <a href="https://my.xdual.es" class="text-sm leading-6 text-gray-300 hover:text-white">Client Area</a> </li> <li> <a href="https://vps.xdual.es" class="text-sm leading-6 text-gray-300 hover:text-white">VPS Panel</a> </li> </ul> </div><div class="mt-10 md:mt-0"> <h3 class="text-sm font-semibold leading-6 text-white">
Legal
</h3><ul role="list" class="mt-6 space-y-4"> <li> <a href="https://my.xdual.es/tos" class="text-sm leading-6 text-gray-300 hover:text-white">Terms</a> </li> <li> <a href="https://my.xdual.es/tos" class="text-sm leading-6 text-gray-300 hover:text-white">Refund</a> </li> </ul> </div> </div> </div> </div><div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24"> <p class="text-xs leading-5 text-gray-400">
© 2024 Xcompany.es, All rights reserved.
</p> </div> </div> </footer>`;
}, "/home/user/xdual-web/src/components/Footer.astro", void 0);

export { $$Nav as $, $$Header as a, $$Cards as b, $$Footer as c };
