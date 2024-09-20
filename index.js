import{S as u,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function h(i){return i.map(({webformatURL:t,largeImageURL:a,tags:s,likes:e,views:r,comments:c,downloads:d})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${t}" 
            alt="${s}" 
            width="360"
            height="152" 
          />
        </a>
        <div class="discribe-box">
          <ul class="discribe-list">
            <li class="discribe-item">
              <h2 class="discribe-title">Likes</h2>
              <p class="discribe-text">${e}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Views</h2>
              <p class="discribe-text">${r}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Comments</h2>
              <p class="discribe-text">${c}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Downloads</h2>
              <p class="discribe-text">${d}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}const l={key:"44868701-a6c2bf036a020cab1604664f3",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0};function m(i){return l.q=i,`https://pixabay.com/api/?${new URLSearchParams(l).toString()}`}function p(i){return fetch(i).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const y=new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),o={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};o.searchForm.addEventListener("submit",g);function g(i){i.preventDefault();const t=i.currentTarget.elements.searchtext.value.toLowerCase().trim();o.gallery.innerHTML="",o.loader.classList.add("loader"),p(m(t)).then(a=>{o.loader.classList.remove("loader");const s=a.hits;s.length===0&&n(),o.gallery.insertAdjacentHTML("beforeend",h(s)),y.refresh()}).catch(n).finally(o.searchForm.reset())}function n(i){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=index.js.map
