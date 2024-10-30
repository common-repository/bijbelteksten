(function() {
    tinymce.create('tinymce.plugins.bverse_bibles_button', {
        init : function(ed, url) {
            ed.addButton('bverse_bibles_button', {
                title : 'Bibles.org',
                image : url+'../../../../img/bibles.png',
                onclick : function() {
                     ed.selection.setContent('[bversebibles title=""]' + ed.selection.getContent() + '[/bversebibles]');
 
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('bverse_bibles_button', tinymce.plugins.bverse_bibles_button);
})();