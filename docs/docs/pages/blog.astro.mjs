import { c as createComponent, r as renderComponent, b as renderHead, d as addAttribute, a as renderTemplate } from '../chunks/astro/server_C0qQeIQO.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_apjwO5mi.mjs';
import { g as getCollection } from '../chunks/_astro_content_DPydrNqe.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Header_BVWZ7jBI.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_CWREyl05.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_BUCA18RE.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-5tznm7mj> ${post.data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 720, "height": 360, "src": post.data.heroImage, "alt": "", "data-astro-cid-5tznm7mj": true })}`} <h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "/Users/koheeyoun/heeyun-ko.github.io/src/pages/blog/index.astro", void 0);

const $$file = "/Users/koheeyoun/heeyun-ko.github.io/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
