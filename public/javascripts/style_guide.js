document.addEventListener("DOMContentLoaded", function () {
  var demos = document.querySelectorAll('.sgexample');
  for (var i = 0; i < demos.length; i++) {
    var demo = demos[i];
    var content = html_beautify(demo.children[0].innerHTML).replace(/[<>\"\'\t\n]/g, function(m) {
      return {
        '<' : '&lt;',
        '>' : '&gt;',
        "'" : '&#39;',
        '"' : '&quot;',
        '\t': '  ',
        '\n': '\n' // needed for IE
      }[m];
    });;
    demo.insertAdjacentHTML('beforeend', '<pre><code class="sgexample__code html">' + content + '</code></pre>');
  }
});
