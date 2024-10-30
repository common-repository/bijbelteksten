(function() {
    tinymce.create('tinymce.plugins.bverse_biblia_button', {
        init : function(ed, url) {
            ed.addButton('bverse_biblia_button', {
                title : 'Biblia.com',
                image : url+'../../../../img/biblia.png',
                onclick : function() {
                     ed.selection.setContent('[bversebiblia title=""]' + ed.selection.getContent() + '[/bversebiblia]');
 
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('bverse_biblia_button', tinymce.plugins.bverse_biblia_button);
})();