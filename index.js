import{S as u,i as h}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();function f(i){return i.map(({webformatURL:t,largeImageURL:c,tags:s,likes:e,views:r,comments:a,downloads:d})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${c}">
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
              <p class="discribe-text">${a}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Downloads</h2>
              <p class="discribe-text">${d}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}const l={key:"46019224-0ece95bdc3a0496b8437567d7",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0};function m(i){return l.q=i,`https://pixabay.com/api/?${new URLSearchParams(l).toString()}`}function p(i){return fetch(i).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const y=new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),o={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};o.searchForm.addEventListener("submit",g);function g(i){i.preventDefault();const t=i.currentTarget.elements.searchtext.value.toLowerCase().trim();o.gallery.innerHTML="",o.loader.classList.add("loader"),p(m(t)).then(c=>{o.loader.classList.remove("loader");const s=c.hits;s.length===0&&n(),o.gallery.insertAdjacentHTML("beforeend",f(s)),y.refresh()}).catch(n).finally(o.searchForm.reset())}function n(i){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=index.js.map
