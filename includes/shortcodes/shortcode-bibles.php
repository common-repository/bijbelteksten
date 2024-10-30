<?php
	// Bibles.org Shortcode
	function bverse_bibles_shortcode( $atts, $reference = null ) {
	    extract( shortcode_atts( array(
	                'title' => ''
	    ), $atts ) );
	    
	        $bverse_bibles_reftagg_output = '<cite class="bibleref" title="'.$title.'">'.do_shortcode( $reference ).'</cite>';
	        
	    return $bverse_bibles_reftagg_output;
	}
	add_shortcode( 'bversebibles','bverse_bibles_shortcode' );
	

	// Integrate the Service Icon to Tinymce Panel
	function bverse_bibles_button() {
		if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
			return;
		}
		
		if ( get_user_option( 'rich_editing' ) == 'true' ) {
			add_filter( 'mce_external_plugins', 'add_bverse_bibles_button' );
			add_filter( 'mce_buttons', 'register_bverse_bibles_button' );
	   }
	}
	add_action( 'init', 'bverse_bibles_button' );
	
	function register_bverse_bibles_button( $buttons ) {
	 array_push( $buttons, "|", "bverse_bibles_button" );
	 return $buttons;
	}
	
	function add_bverse_bibles_button( $plugin_array ) {
	   $plugin_array['bverse_bibles_button'] = BVERSE_CONVERT_BASE_URL.( 'admin/js/shortcodes/shortcode-bibles.js' );
	   return $plugin_array;
	}
?>