const colors = {
  p: '#9b051d',
  div: '#5d3077',
  span: '#e4fb4b',
  section: '#020fc5',
  ul: '#e90e4c',
  ol: '#2f045f',
  header: '#b37549',
  nav: '#fa2af7',
  main: '#f631d2',
  footer: '#c5f4cf',
  form: '#3b152e',
  body: '#b051c6',
  padrao: '#677c12',
  get(tag) {
    return this[tag] ? this[tag] : this.padrao;
  },
};
 
document.querySelectorAll('.tag').forEach(elemento => { 
  const tagName = elemento.tagName.toLowerCase() 
  
  elemento.style.borderColor = colors.get(tagName);

  if (!elemento.classList.contains('nolabel')) {
    const label = document.createElement('label')
    label.style.backgroundColor = colors.get(tagName);
    label.innerHTML = tagName
    elemento.insertBefore(label, elemento.childNodes[0])
  }
})