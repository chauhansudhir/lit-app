import{r as n,x as e,i as h,t as l}from"./index-C2pKgt2J.js";import{a as p}from"./service-base-ihO7f0ps.js";var u=Object.getOwnPropertyDescriptor,g=(t,o,c,i)=>{for(var r=i>1?void 0:i?u(o,c):o,a=t.length-1,d;a>=0;a--)(d=t[a])&&(r=d(r)||r);return r};let s=class extends n{constructor(){super(...arguments),this.data=[]}async connectedCallback(){super.connectedCallback();const t=await p();this.data=t,this.requestUpdate()}render(){const t=this.data.length===0?e`<div>Loading...</div>`:"";return e`
      <h2>Photos</h2>
      ${t}
      <div class="photos">
        ${this.data.map(o=>e`
            <div class="photo">
              <img
                src="${o.download_url}"
                alt="${o.author}"
                width="100%"
                height="auto"
              />
            </div>
          `)}
      </div>
    `}};s.styles=h`
    .photos {
      columns: 3;
      background-color: var(--background-light);
      border-radius: 1rem;
      padding: 10px;
    }

    .photo {
      break-inside: avoid;
      margin-bottom: 10px;
    }
    .photo img {
      aspect-ratio: 1/1;
      object-fit: cover;
      width: 100%;
      border-radius: 1rem;
    }
  `;s=g([l("lit-photos")],s);export{s as Photos};
