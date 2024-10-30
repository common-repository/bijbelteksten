<?php
	// Bibliegateway.com Shortcode
	function bverse_bg_shortcode( $atts, $reference = null ) {
	    extract( shortcode_atts( array(
	                'title' => ''
	    ), $atts ) );
	    
	    	// In this case we need to call the Bible Version Option
	    	$version = get_option( 'bverse_bible_version' );
	    	
	        $bverse_biblia_bg_output = '<cite><a class="bibleref" href="//www.biblegateway.com/passage/?search='.$title.'&version='.$version.'&src=tools">'.do_shortcode( $reference ).'</a</cite>';
	        
	    return $bverse_biblia_bg_output;
	}
	add_shortcode( 'bversebg','bverse_bg_shortcode' );
	

	// Integrate the Service Icon to Tinymce Panel
	function bverse_bg_button() {
		if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
			return;
		}
		
		if ( get_user_option( 'rich_editing' ) == 'true' ) {
			add_filter( 'mce_external_plugins', 'add_bverse_bg_button' );
			add_filter( 'mce_buttons', 'register_bverse_bg_button' );
	   }
	}
	add_action( 'init', 'bverse_bg_button' );
	
	function register_bverse_bg_button( $buttons ) {
	 array_push( $buttons, "|", "bverse_bg_button" );
	 return $buttons;
	}
	
	function add_bverse_bg_button( $plugin_array ) {
	   $plugin_array['bverse_bg_button'] = BVERSE_CONVERT_BASE_URL.( 'admin/js/shortcodes/shortcode-bg.js' );
	   return $plugin_array;
	}
?>