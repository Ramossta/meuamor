// ===== PERSONALIZE AQUI =====
var NOME = "meu amor";
var MOTIVOS = [
  "Seu sorriso que me faz delirar toda vez que o vejo",
  "Você sempre me apoia e incentiva a seguir meus sonhos",
  "Do seu jeito de ser, que me faz te amar cada vez mais",
  "Você faz qualquer dia ruim virar um dia maravilhoso",
  "Do seu abraço, que é o meu lugar favorito",
  "Você me faz querer ser uma pessoa melhor todos os dias",
  "Da sua risada, principalmente dos seus olhinhos que eu amo",
  "Porque com você tudo fica mais facil, mais leve e mais divertido",
];
var FINAL = "E ainda tem muito mais.";
var FINAL_SUB = "Eu te amo, e vou continuar descobrindo motivos todos os dias.";
// ============================

var i = 0, busy = false;
var $ = function(id){return document.getElementById(id)};
function show(id){document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('on')});$(id).classList.add('on')}
function render(){
  $('text').textContent = MOTIVOS[i];
  $('count').textContent = (i+1) + " de " + MOTIVOS.length;
}
function next(){
  if(busy) return; busy = true;
  var c = $('card'); c.classList.add('out');
  setTimeout(function(){
    i++;
    if(i >= MOTIVOS.length){ show('end'); }
    else { render(); }
    c.style.transition='none'; c.classList.remove('out'); void c.offsetWidth; c.style.transition='';
    busy = false;
  }, 480);
}
$('nome').textContent = NOME;
$('final').textContent = FINAL;
$('finalSub').textContent = FINAL_SUB;
$('open').onclick = function(){ i = 0; render(); show('deck'); };
$('card').onclick = next;
$('card').onkeydown = function(e){ if(e.key==='Enter'||e.key===' '){e.preventDefault();next()} };
$('next').onclick = next;
$('again').onclick = function(){ i = 0; render(); show('deck'); };