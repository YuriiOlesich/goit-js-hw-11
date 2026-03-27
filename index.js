import{a as f,S as u,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const m="55203638-ed2d579cf4ced86cd2d49b188",y="https://pixabay.com/api/";async function g(o){const r={key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};try{return(await f.get(y,{params:r})).data}catch(e){throw console.error("Pixabay API error:",e),e}}const d=document.getElementById("gallery"),p=document.getElementById("loader");let h=new u(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function v(o){const r=o.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img 
            src="${e.webformatURL}" 
            alt="${e.tags}" 
            class="gallery-image"
            loading="lazy"
          />
        </a>
        <div class="info">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${e.likes.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${e.views.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${e.comments.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${e.downloads.toLocaleString()}</span>
          </div>
        </div>
      </li>
    `).join("");d.innerHTML=r,h.refresh()}function L(){d.innerHTML=""}function w(){p.classList.add("show")}function l(){p.classList.remove("show")}const b=document.getElementById("search-form"),c=document.getElementById("search-input");b.addEventListener("submit",async o=>{o.preventDefault();const r=c.value.trim();if(r===""){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"}),c.focus();return}L(),w();try{const e=await g(r);if(l(),e.hits.length===0){n.info({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(e.hits)}catch(e){l(),n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}});
//# sourceMappingURL=index.js.map
