/* Pixel Meta LOUBICHKA® — relie loubichka.com au Gestionnaire de publicités.
   Pixel principal : 1649812453841707 « LOUBICHKA site », compte pub Loubna El Amri (23829772).
   Ancien pixel conservé : 2216300182651479 (compte Loubna El Amei, 1836690311076229).
   Événements suivis :
   - PageView : chaque page vue
   - Contact : « Réserver sur WhatsApp » ou « DM Instagram » (Piercing Party, aide, questions)
   - CustomizeProduct : un bijou posé sur l'oreille dans l'Ear Studio
   - AddToCart : un look ajouté au panier
   - InitiateCheckout : « Commander sur WhatsApp » */
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','1649812453841707');
fbq('init','2216300182651479');
fbq('track','PageView');
window.lbTrack=function(ev,p){try{fbq('track',ev,p||{})}catch(_){}};
document.addEventListener('click',function(e){
  var a=e.target&&e.target.closest?e.target.closest('a'):null;if(!a)return;
  if(a.getAttribute('aria-disabled')==='true')return;
  var h=a.getAttribute('href')||'';
  if(a.id==='cpay'||a.id==='cwa'){window.lbTrack('InitiateCheckout',{currency:'MAD'});return}
  if(/wa\.me\/212661435742/.test(h)||/ig\.me\/m\/loubichka/.test(h)){
    window.lbTrack('Contact',{content_name:location.pathname.indexOf('piercing')>=0?'Piercing Party':'Loubichka'})}
},true);
