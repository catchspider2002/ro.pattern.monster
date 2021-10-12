const strings = {
  website: "https://ro.pattern.monster",
  title: "Pattern Monster",
  description: "Un simplu generator de modele online pentru a crea modele SVG repetabile.",
  description2: "Accelerați site-ul dvs. fără a compromite calitatea imaginii.",
  description3: "Perfect pentru fundalurile website-ului, îmbrăcăminte, marcă, design de ambalaje și multe altele.",
  keywords: "modele svg, modele, fundaluri svg, fundal vectorial, generator de modele",
  pages: [
    {
      page: "index",
      title: "Generator de modele SVG",
      keywords: "",
      description: "",
      image: "",
    },
    {
      page: "changelog",
      title: "Istoric modificări",
      keywords: "istoric modificări",
      description: "Changelog for Pattern Monster.",
      image: "",
    },
    {
      page: "downloads",
      title: "Descărcări",
      keywords: "descărcări",
      description: "Downloads for Pattern Monster.",
      image: "",
    },
    {
      page: "features",
      title: "Caracteristici",
      keywords: "caracteristici",
      description: "Features for Pattern Monster.",
      image: "",
    },
    {
      page: "privacy-policy",
      title: "Politica de confidenţialitate",
      keywords: "politica de confidenţialitate",
      description: "Privacy Policy for Pattern Monster.",
      image: "",
    },
    {
      page: "api",
      title: "API",
      keywords: "api",
      description: "API for Pattern Monster.",
      image: "",
    },
    {
      page: "accessories",
      title: "Accessories",
      keywords: "accessories, shop",
      description: "Accessories for Pattern Monster.",
      image: "",
    },
    {
      page: "home-living",
      title: "Home & Living",
      keywords: "home, living, shop",
      description: "Home Living for Pattern Monster.",
      image: "",
    },
    {
      page: "phone-cases",
      title: "Phone Cases",
      keywords: "phone, cases, shop",
      description: "Phone Cases for Pattern Monster.",
      image: "",
    },
    {
      page: "stationery-office",
      title: "Stationery & Office",
      keywords: "stationery, office, shop",
      description: "Stationery & Office for Pattern Monster.",
      image: "",
    },
    {
      page: "stickers-skins",
      title: "Stickers & Skins",
      keywords: "stickers, skins, shop",
      description: "Stickers & Skins for Pattern Monster.",
      image: "",
    },
    {
      page: "wall-art",
      title: "Wall Art",
      keywords: "wall-art, shop",
      description: "Wall Art for Pattern Monster.",
      image: "",
    },
  ],
  versions: [
    {
      lang: "en",
      website: "https://pattern.monster",
    },
    {
      lang: "de",
      website: "https://de.pattern.monster",
    },
    {
      lang: "pl",
      website: "https://pl.pattern.monster",
    },
    {
      lang: "tr",
      website: "https://tr.pattern.monster",
    },
    {
      lang: "es",
      website: "https://es.pattern.monster",
    },
    {
      lang: "it",
      website: "https://it.pattern.monster",
    },
    {
      lang: "ro",
      website: "https://ro.pattern.monster",
    },
    {
      lang: "fr",
      website: "https://fr.pattern.monster",
    },
    {
      lang: "ar",
      website: "https://ar.pattern.monster",
    },
    {
      lang: "pt",
      website: "https://pt.pattern.monster",
    },
    {
      lang: "zh-cn",
      website: "https://cn.pattern.monster",
    },
    {
      lang: "nl",
      website: "https://nl.pattern.monster",
    },
  ],
};

const pageDetails = (page) => {
  let imagePrefix = "https://giguom.com/pattern.monster/images/";
  let pageValues =
    strings.pages.filter((currentPage) => currentPage.page === page)[0] || strings.pages.filter((currentPage) => currentPage.page === "index")[0];

  let website = strings.website;
  let title = strings.title + " - " + strings.pages[0].title;
  let url = website;
  let keywords = strings.keywords;
  let desc = strings.description + " " + strings.description3;
  let image = pageValues.image == "" ? imagePrefix + "/TwitterBG2.png" : pageValues.image;

  let versions = strings.versions.map((version) => {
    return { lang: version.lang, website: version.website + (page === "index" ? "" : "/" + page + "/") };
  });

  if (page != "index") {
    title = pageValues.title + " - " + strings.title + " | " + strings.pages[0].title;
    url = website + "/" + page + "/";
    desc = pageValues.description + " " + strings.description + " " + strings.description3;
    keywords = pageValues.keywords + ", " + strings.keywords;
  }

  return { title, url, keywords, desc, image, versions };
};

let bmcData = `<path d="M0 24.48C0 10.96 11.78 0 26.31 0h600.32c14.54 0 26.32 10.96 26.32 24.48v104.04c0 13.52-11.78 24.48-26.32 24.48H26.31C11.78 153 0 142.04 0 128.52z" fill="#ffc800"/>
<path d="M109.52 50.32l-.06-.04-.16-.05c.06.05.14.08.22.09zM110.5 57.31l-.07.02zM109.55 50.3h-.03v.02l.03-.01zM109.52 50.32h.02zM110.45 57.3l.11-.06.04-.03.04-.04a.65.65 0 00-.2.13zM109.72 50.47l-.12-.1-.07-.04c.04.07.1.12.18.14zM81.88 118.35a.57.57 0 00-.23.18l.07-.05.16-.13zM98.05 115.17c0-.1-.05-.08-.04.28l.02-.09c0-.06 0-.12.02-.19zM96.38 118.35a.57.57 0 00-.23.18l.07-.05.16-.13zM70.49 119.11a.48.48 0 00-.24-.11l.2.1zM67.93 116.66a2.38 2.38 0 010 0z" fill="#0d0c22"/>
<path d="M85.14 72.77C81.62 74.27 77.63 76 72.45 76a24 24 0 01-6.4-.89l3.58 36.74a6.14 6.14 0 006.12 5.63s5.07.26 6.76.26c1.83 0 7.29-.26 7.29-.26a6.14 6.14 0 006.12-5.63l3.83-40.6a16.3 16.3 0 00-5.4-.97c-3.36 0-6.08 1.16-9.21 2.5z" fill="#fff"/>
<path d="M54.98 57.1l.07.06.03.02a.6.6 0 00-.1-.08z" fill="#0d0c22"/>
<path d="M116.3 53.71l-.54-2.72c-.48-2.43-1.58-4.74-4.08-5.62-.8-.28-1.72-.4-2.33-.99-.62-.58-.8-1.49-.94-2.33l-.78-4.62c-.23-1.33-.42-2.81-1.03-4.03-.79-1.63-2.43-2.58-4.06-3.21-.83-.32-1.69-.58-2.55-.8-4.08-1.07-8.36-1.46-12.55-1.69-5.03-.28-10.08-.2-15.1.25-3.73.34-7.67.75-11.22 2.04a9.5 9.5 0 00-3.62 2.05 3.92 3.92 0 00-.72 4.67 6.05 6.05 0 002.82 2.37c1.47.66 3 1.16 4.58 1.5 4.39.96 8.93 1.34 13.41 1.5 4.97.2 9.95.04 14.89-.48 1.22-.14 2.44-.3 3.66-.49 1.44-.22 2.36-2.1 1.93-3.4-.5-1.56-1.86-2.17-3.4-1.93l-.68.1-.16.02a95.5 95.5 0 01-4.8.47 107.24 107.24 0 01-19.14-.4l-.47-.07-.1-.01-.48-.07a50.9 50.9 0 01-2.96-.53.44.44 0 010-.87h.02a47.95 47.95 0 013.42-.6c.54-.03 1.08-.13 1.61-.2a102.3 102.3 0 0122.2.1l.56.08.38.05c1.09.16 2.17.36 3.25.6 1.6.34 3.66.45 4.37 2.2.22.56.33 1.18.45 1.76l.16.75.01.04 1.13 5.27a.95.95 0 01-.15.75.97.97 0 01-.66.4h-.01l-.23.04-.23.03a128.48 128.48 0 01-6.45.68 149.64 149.64 0 01-12.9.52 151.25 151.25 0 01-19.17-1.24l-.51-.07-1.19-.17c-1.33-.2-2.65-.45-3.97-.66a6.9 6.9 0 00-4.58.66 6.66 6.66 0 00-2.76 2.86c-.62 1.29-.8 2.7-1.08 4.08-.28 1.39-.72 2.88-.55 4.3a6.87 6.87 0 005.59 6.13 161.9 161.9 0 0046.27 1.53 1.98 1.98 0 012.19 2.17l-.3 2.85a1089465.02 1089465.02 0 01-4.15 40.42c-.17 1.67-.19 3.4-.5 5.04-.5 2.6-2.27 4.2-4.83 4.78-2.35.53-4.76.82-7.17.84-2.67.01-5.34-.1-8.01-.1-2.86.02-6.35-.24-8.55-2.36-1.94-1.87-2.2-4.79-2.47-7.31l-1.04-10.03-1.94-18.59L62.84 70l-.07-.6c-.15-1.43-1.16-2.84-2.76-2.77-1.37.06-2.93 1.23-2.77 2.77l.93 8.92 1.92 18.44 1.64 15.72.31 3.01c.6 5.49 4.8 8.44 9.98 9.27 3.03.5 6.14.6 9.21.64 3.94.06 7.92.22 11.8-.5 5.74-1.05 10.05-4.89 10.67-10.84l.53-5.15 1.75-17.05 1.9-18.58.87-8.51a1.98 1.98 0 011.6-1.74c1.64-.32 3.2-.87 4.38-2.12 1.86-1.99 2.23-4.58 1.57-7.2zm-61.8 1.84c.03-.01-.02.2-.04.3 0-.15 0-.28.05-.3zm.16 1.23c.02 0 .06.04.1.1l-.1-.1zm.16.2c.06.1.09.16 0 0zm.32.26l.02.03a.21.21 0 00-.03-.03zm55.13-.38c-.6.56-1.48.82-2.36.95A166.3 166.3 0 0178.1 59.7a200.69 200.69 0 01-21.24-2.03c-.7-.1-1.44-.23-1.92-.74-.9-.96-.46-2.9-.22-4.06.21-1.06.62-2.48 1.89-2.63 1.97-.23 4.27.6 6.22.9a136.85 136.85 0 0037.57.3c1.84-.26 3.67-.54 5.5-.87 1.62-.3 3.42-.84 4.4.84.67 1.15.76 2.68.66 3.98-.04.56-.28 1.1-.7 1.48z" fill="#0d0c22"/>
<g aria-label="Cumpără-mi o cafea" transform="translate(988.52 -189.84) scale(8.85175)" fill="#000" stroke="none">
  <path d="M-93.4 28.95c-.23 0-.25-.08-.3-.08-.06 0-.1.14-.1.26 0 .27.17.4.37.4.9 0 2.17-.93 2.17-1.94 0-.71-.45-1.08-1.04-1.08-1.64 0-2.68 1.99-2.68 3.59 0 1.58.7 2.6 1.88 2.6 1 0 1.6-.65 1.62-.68.2-.2-.2-.78-.42-.43-.01.01-.44.5-1.14.5-.94 0-1.28-.97-1.28-2 0-1.33.83-2.98 1.91-2.98.38 0 .5.27.5.46 0 .7-.87 1.38-1.48 1.38zM-88.7 32.6c.71 0 1.03-.74 1.18-1.29l.01-.05c0-.16-.16-.34-.29-.34-.08 0-.16.07-.2.25-.07.36-.22.88-.54.88-.22 0-.22-.3-.22-.37v-2.1c0-.19-.17-.35-.44-.35-.12 0-.27.03-.27.09 0 .05.09.07.09.3v1.33c-.1.58-.35 1.11-.68 1.11-.23 0-.37-.24-.37-.68 0-.7.09-1.05.23-1.66.04-.12.27-.45-.13-.45-.43 0-.38.16-.43.3 0 0-.3.98-.3 1.85 0 .72.32 1.18.87 1.18.36 0 .63-.24.82-.59.06.33.3.59.68.59z"/>
  <path d="M-83.06 31.31l.01-.05c0-.16-.15-.34-.28-.34-.09 0-.17.07-.2.25-.08.36-.22.88-.55.88-.22 0-.22-.3-.22-.37v-1.7c0-.38-.12-.84-.65-.84-.37 0-.66.34-.87.78-.01-.37-.15-.78-.65-.78-.37 0-.65.35-.87.8v-.35c0-.2-.17-.36-.44-.36-.12 0-.21.05-.21.14 0 .05.03.1.03.26v2.6c0 .3.23.37.4.37.23 0 .22-.2.22-.36v-1.2c.05-.65.52-1.35.74-1.35.14 0 .16.21.16.47v2.07c0 .3.23.37.4.37.23 0 .22-.2.22-.36v-1.2c.05-.65.52-1.35.74-1.35.14 0 .16.21.16.47v1.66c0 .42.25.78.69.78.7 0 1.03-.74 1.17-1.29z"/>
  <path d="M-82.48 32.68c.29 0 .6-.14.83-.38 1.1 0 1.6-.67 1.6-1.04 0-.12-.15-.32-.3-.32-.07 0-.1.07-.18.23-.2.38-.32.6-.86.62.13-.3.22-.74.22-1.2 0-.81-.32-1.45-.96-1.45-.34 0-.57.2-.74.44-.01-.19-.19-.35-.45-.35-.11 0-.26.03-.26.09 0 .05.08.07.08.3v5.75c0 .12.03.22.19.22s.44-.06.44-.36v-2.68c.06.08.2.13.39.13zm.15-2.98c.28 0 .52.27.52 1.02 0 .3-.1.87-.3 1.15-.37.04-.65.12-.76.29v-1.77c.09-.4.3-.7.54-.7z"/>
  <path d="M-78.2 32.05c-.2 0-.29-.2-.29-.37v-1.36c0-.2-.17-.36-.44-.36-.12 0-.21.06-.21.14 0 .06.03.1.03.26v1.27c-.1.23-.24.42-.46.42-.29 0-.47-.24-.47-.67 0-1.18.73-1.72 1.36-1.72l.23.02c.09 0 .11-.05.11-.19 0-.21-.15-.35-.38-.35-1 0-1.95.84-1.95 2.21 0 .7.33 1.25.98 1.25.3 0 .54-.15.7-.34.13.2.35.34.63.34.71 0 1.04-.74 1.18-1.29v-.05c0-.16-.15-.34-.28-.34-.08 0-.16.07-.2.25-.07.36-.22.88-.55.88zm-.9-3.4c.28 0 .93-.11.93-.92 0-.11-.2-.25-.34-.25a.2.2 0 00-.2.15c0 .2 0 .52-.4.52s-.42-.34-.44-.58c-.02-.04-.09-.09-.18-.09-.22 0-.37.1-.37.2 0 .77.6.97 1 .97z"/>
  <path d="M-75.83 32.6c.7 0 1.02-.74 1.17-1.29l.01-.05c0-.16-.16-.34-.29-.34-.08 0-.16.07-.2.25-.07.36-.2.88-.59.88-.22 0-.32-.21-.32-.44 0-.82.37-1.8.37-1.89.03-.19-.3-.46-.4-.46h-.43c-.08 0-.16 0-.43-.03-.1-.34-.32-.44-.52-.44-.21 0-.41.15-.41.38 0 .24.15.41.35.53 0 .41-.04 1.1-.13 1.42-.07.28.35.58.46.23.15-.47.2-1.19.2-1.5h.72c-.26.7-.4 1.28-.4 1.8 0 .73.45.95.84.95z"/>
  <path d="M-72.78 32.05c-.2 0-.28-.2-.28-.37v-1.36c0-.2-.17-.36-.44-.36-.11 0-.21.06-.21.14 0 .06.03.1.03.26v1.27c-.09.23-.24.42-.46.42-.29 0-.47-.24-.47-.67 0-1.18.73-1.72 1.36-1.72l.24.02c.08 0 .1-.05.1-.19 0-.21-.15-.35-.38-.35-1 0-1.95.84-1.95 2.21 0 .7.34 1.25.98 1.25.3 0 .54-.15.7-.34.13.2.35.34.64.34.7 0 1.03-.74 1.17-1.29l.01-.05c0-.16-.16-.34-.29-.34-.08 0-.16.07-.2.25-.07.36-.22.88-.55.88zm-.88-3.4c.28 0 .93-.11.93-.92 0-.11-.2-.25-.35-.25a.2.2 0 00-.2.15c0 .2 0 .52-.4.52s-.42-.34-.44-.58c-.02-.04-.09-.09-.18-.09-.22 0-.37.1-.37.2 0 .77.6.97 1 .97zM-71.86 29.88c-.15 0-.23.28-.23.42 0 .13.05.23.14.23h1.69c.15 0 .25-.35.25-.52 0-.1-.02-.18-.08-.18-.02 0-.05.05-.1.05zM-64.41 31.31v-.05c0-.16-.15-.34-.28-.34-.08 0-.16.07-.2.25-.07.36-.22.88-.55.88-.21 0-.21-.3-.21-.37v-1.7c0-.38-.12-.84-.66-.84-.37 0-.66.34-.86.78-.02-.37-.16-.78-.65-.78-.37 0-.66.35-.87.8v-.35c0-.2-.17-.36-.45-.36-.11 0-.2.05-.2.14 0 .05.02.1.02.26v2.6c0 .3.23.37.4.37.24 0 .23-.2.23-.36v-1.2c.05-.65.52-1.35.74-1.35.14 0 .15.21.15.47v2.07c0 .3.23.37.4.37.24 0 .23-.2.23-.36v-1.2c.05-.65.52-1.35.74-1.35.14 0 .15.21.15.47v1.66c0 .42.26.78.7.78.7 0 1.02-.74 1.17-1.29z"/>
  <path d="M-64.42 28.41a.5.5 0 00.5-.5c0-.29-.21-.5-.5-.5a.5.5 0 00-.5.5c0 .27.23.5.5.5zm.19 1.18c0-.2-.17-.36-.44-.36-.12 0-.22.05-.22.14 0 .05.04.1.04.26v2.2c0 .41.25.77.69.77.7 0 1.02-.74 1.17-1.29.07-.26-.38-.65-.48-.14-.07.36-.22.88-.55.88-.21 0-.21-.3-.21-.37zM-58.62 31.01c-.05.32-.24.6-.59.6-.06 0-.1 0-.16-.02.08-.28.11-.59.11-.9 0-.79-.31-1.37-.7-1.37-.44 0-.66.44-.66.96 0 .59.2 1.13.59 1.46-.1.19-.26.31-.49.31-.32 0-.59-.34-.59-1.03 0-.82.25-1.12.38-1.32.21-.14.05-.57-.16-.57-.18 0-.84.73-.84 1.94 0 .82.37 1.53 1.2 1.53.47 0 .78-.24.98-.6.13.05.26.06.4.06.57 0 .9-.37 1-.81.1-.46-.43-.43-.47-.24zm-1.57-.76c0-.26.05-.4.14-.4.18 0 .2.42.2.98 0 .12 0 .25-.02.38a1.6 1.6 0 01-.32-.96zM-55.5 32.6c1.21 0 1.57-1 1.63-1.5.04-.29-.43-.45-.5-.08-.1.5-.4 1.03-1.03 1.03-.49 0-.84-.36-.84-1 0-.75.29-1.35.59-1.35.28 0 .3.3.34.44-.05.29.51.12.51-.19 0-.29-.21-.8-.78-.8-.78 0-1.34.95-1.34 1.9 0 1 .7 1.55 1.43 1.55z"/>
  <path d="M-52.04 32.05c-.2 0-.28-.2-.28-.37v-1.36c0-.2-.18-.36-.45-.36-.11 0-.21.06-.21.14 0 .06.03.1.03.26v1.27c-.09.23-.24.42-.46.42-.29 0-.47-.24-.47-.67 0-1.18.74-1.72 1.36-1.72l.24.02c.08 0 .1-.05.1-.19 0-.21-.15-.35-.37-.35-1 0-1.96.84-1.96 2.21 0 .7.34 1.25.98 1.25.31 0 .54-.15.7-.34.13.2.35.34.64.34.7 0 1.03-.74 1.17-1.29l.01-.05c0-.16-.15-.34-.29-.34-.08 0-.16.07-.2.25-.07.36-.21.88-.54.88z"/>
  <path d="M-49.9 30.02c.23.01.21.1.26.1.11 0 .16-.4.16-.52 0-.18-.16-.23-.34-.23-.22 0-.64.02-1.02.05V27.1c0-.2-.17-.36-.44-.36-.11 0-.26.03-.26.09 0 .05.08.07.08.3v2.34l-.12.01c-.13.02-.18.12-.18.2 0 .13.12.23.25.36l.05.06v4.42c0 .6.18 1.23.76 1.23.65 0 1.09-1 1.09-2.37 0-1.35-.48-2.33-1.23-3.24v-.18zm-.34 3.36c0 1.05-.16 1.77-.4 1.77-.16 0-.2-.37-.2-.63V31c.4.77.6 1.64.6 2.38zM-47.37 29.97c0-.49-.28-.83-.74-.83-.63 0-1.25.79-1.25 1.83 0 1.03.7 1.63 1.45 1.63 1.2 0 1.54-1 1.6-1.5.03-.29-.43-.45-.5-.08-.1.5-.37 1.03-1.01 1.03a.77.77 0 01-.76-.5c.8-.24 1.21-.97 1.21-1.58zm-1.32.97c-.02-.34.1-1.24.5-1.24.12 0 .18.1.18.28 0 .5-.26.92-.67 1.11l-.01-.15z"/>
  <path d="M-44.5 32.05c-.19 0-.27-.2-.27-.37v-1.36c0-.2-.17-.36-.44-.36-.12 0-.22.06-.22.14 0 .06.03.1.03.26v1.27c-.09.23-.23.42-.46.42-.28 0-.46-.24-.46-.67 0-1.18.73-1.72 1.35-1.72l.24.02c.08 0 .1-.05.1-.19 0-.21-.15-.35-.37-.35-1 0-1.96.84-1.96 2.21 0 .7.34 1.25.98 1.25.31 0 .54-.15.7-.34.13.2.35.34.64.34.7 0 1.04-.74 1.18-1.29v-.05c0-.16-.15-.34-.28-.34-.09 0-.17.07-.2.25-.08.36-.22.88-.55.88z"/>
</g>`;
let bmcHeader = `<svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 653.27 153" fill="none">${bmcData}</svg>`;
let bmcFooter = `<svg xmlns="http://www.w3.org/2000/svg" height="4rem" viewBox="0 0 653.27 153" fill="none">${bmcData}</svg>`;

export default { bmcHeader, bmcFooter, strings, pageDetails };
