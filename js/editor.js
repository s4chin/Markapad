exports.reload = function(){
    var marked = require("marked");
    marked.setOptions({
    renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });
    var resultDiv = global.$('.md_result');
    var textEditor = global.$('#editor');
    var text = textEditor.val();
    resultDiv.html(marked(text));
};