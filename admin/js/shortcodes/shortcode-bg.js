(function() {
    tinymce.create('tinymce.plugins.bverse_bg_button', {
        init : function(ed, url) {
            ed.addButton('bverse_bg_button', {
                title : 'BibleGateway.com',
                image : url+'../../../../img/biblegateway.png',
                onclick : function() {
                     ed.selection.setContent('[bversebg title=""]' + ed.selection.getContent() + '[/bversebg]');
 
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('bverse_bg_button', tinymce.plugins.bverse_bg_button);
})();