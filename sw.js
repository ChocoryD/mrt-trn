const C="trn-v1",A=["trn.html","names.json","schedule.json","manifest.json","icon-180.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
// network-first so the daily schedule refresh wins; cache is the offline fallback
self.addEventListener("fetch",e=>{if(new URL(e.request.url).origin!==location.origin)return;
e.respondWith(fetch(e.request).then(n=>{const k=n.clone();caches.open(C).then(c=>c.put(e.request,k));return n;}).catch(()=>caches.match(e.request)));});
