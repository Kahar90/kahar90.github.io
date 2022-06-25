import { c as create_ssr_component, e as escape } from "../../chunks/index-5f038599.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hour;
  let min;
  let sec;
  let date = new Date();
  let dayOrNight = "AM";
  hour = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();
  return `${$$result.head += `${$$result.title = `<title>Welcome</title>`, ""}`, ""}

<div class="${"hero min-h-screen bg-dark-blue"}"><div class="${"hero-content text-center"}"><div class="${"max-w-md"}"><img class="${"rounded mt-5 mb-2"}" src="${"https://i.postimg.cc/02dshfvm/Peristiwa-Penubuhan-Universiti-Teknologi-Malaysia-UTM-3.jpg"}" alt="${"UTM"}">
			<div id="${""}" class="${"clockWrapper"}"><p class="${"clockDisplay text-whitesmoke mt-5"}">${escape(hour - 12)} : ${escape(min)} : ${escape(sec)}
					${escape(dayOrNight)}</p></div>
			<div class="${"divider"}"></div>
			<div class="${"btn-group justify-center "}"><button class="${"btn bg-dark-green text-black hover:bg-whitesmoke"}">About</button>
				<button class="${"btn bg-dark-green text-black hover:bg-whitesmoke"}">Contacts</button>
				<button class="${"btn bg-dark-green text-black hover:bg-whitesmoke"}">Portfolio</button>
				<button class="${"btn bg-dark-green text-black hover:bg-whitesmoke"}">Blog</button></div></div></div></div>`;
});
export { Routes as default };
