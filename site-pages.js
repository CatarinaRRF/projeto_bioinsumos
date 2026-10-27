(function(){
  var language='en';
  var options=document.querySelectorAll('[data-language-option]');
  var localeNodes=document.querySelectorAll('[data-locale]');

  function setLanguage(nextLanguage){
    language=nextLanguage==='pt-BR'?'pt-BR':'en';
    document.documentElement.lang=language;
    document.title=document.documentElement.getAttribute('data-title-'+language);
    var description=document.querySelector('meta[name="description"]');
    description.content=document.documentElement.getAttribute('data-description-'+language);
    localeNodes.forEach(function(node){
      node.hidden=node.dataset.locale!==language;
    });
    options.forEach(function(option){
      var selected=option.dataset.languageOption===language;
      option.classList.toggle('is-active',selected);
      option.setAttribute('aria-pressed',selected?'true':'false');
    });
    document.querySelectorAll('[data-language-group]').forEach(function(group){
      group.setAttribute('aria-label',language==='pt-BR'?'Escolha o idioma':'Choose language');
    });
    var nav=document.querySelector('.primary-nav');
    nav.setAttribute('aria-label',language==='pt-BR'?'Navegação principal':'Main navigation');
    var footerNav=document.querySelector('.site-footer-links');
    footerNav.setAttribute('aria-label',language==='pt-BR'?'Navegação do rodapé':'Footer navigation');
  }

  options.forEach(function(option){
    option.addEventListener('click',function(){
      setLanguage(option.dataset.languageOption);
    });
  });

  setLanguage(language);
})();
