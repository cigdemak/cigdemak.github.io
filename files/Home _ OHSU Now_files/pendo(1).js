(function(apiKey){
  (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
    v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
    o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
    y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
    z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
})('4c6dab7e-9c4c-4ded-47a3-96832b0055ac');

// Unset Pendo's default z-index because it's dumb.
(function(){
  var css = "._pendo-guide_ { z-index: 9 !important; } ._pendo-backdrop_ { z-index: 8 !important }";
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  head.appendChild(style);

  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
})();
