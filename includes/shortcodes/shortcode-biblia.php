<?php
	// Biblia.com Shortcode
	function bverse_biblia_shortcode( $atts, $reference = null ) {
	    extract( shortcode_atts( array(
	                'title' => ''
	    ), $atts ) );
	    
	        $bverse_biblia_reftagg_output = '<cite class="rtBibleRef" title="'.$title.'">'.do_shortcode( $reference ).'</cite>';
	        
	    return $bverse_biblia_reftagg_output;
	}
	add_shortcode( 'bversebiblia','bverse_biblia_shortcode' );
	

	// Integrate the Service Icon to Tinymce Panel
	function bverse_biblia_button() {
		if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
			return;
		}
		
		if ( get_user_option( 'rich_editing' ) == 'true' ) {
			add_filter( 'mce_external_plugins', 'add_bverse_biblia_button' );
			add_filter( 'mce_buttons', 'register_bverse_biblia_button' );
	   }
	}
	add_action( 'init', 'bverse_biblia_button' );
	
	function register_bverse_biblia_button( $buttons ) {
	 array_push( $buttons, "|", "bverse_biblia_button" );
	 return $buttons;
	}
	
	function add_bverse_biblia_button( $plugin_array ) {
	   $plugin_array['bverse_biblia_button'] = BVERSE_CONVERT_BASE_URL.( 'admin/js/shortcodes/shortcode-biblia.js' );
	   return $plugin_array;
	}
?>