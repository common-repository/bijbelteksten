<?php
/*
Plugin Name: Bijbel Plugin voor Wordpress
Plugin URI: https://www.bijbelsecultuur.nl/bijbel-plugin
Description: Verandert bijbelverwijzingen automatisch in een link naar de bijbeltekst in een vertaling naar keuze.
Version: 1.0
Author: Bijbelse Cultuur Stichting
Author URI: https://www.bijbelsecultuur.nl/
*/

// Prohibit direct script loading.
defined( 'ABSPATH') || die('No direct script access allowed!' );


// Save the plugin version
if(!defined( 'BVERSE_CONVERT_VERSION' )) {
	define( 'BVERSE_CONVERT_VERSION', '1.0');
}

// Save the plugin directory path. Ex. '/public_html/my-site/wp-content/plugins/bijbel-plugin/'
if(!defined( 'BVERSE_CONVERT_BASE_DIR' )) {
	define( 'BVERSE_CONVERT_BASE_DIR', plugin_dir_path(__FILE__));
}

// Save the plugin directory URL. Ex. 'https://www.mysite.com/wp-content/plugins/bijbel-plugin/'
if(!defined( 'BVERSE_CONVERT_BASE_URL' )) {
	define( 'BVERSE_CONVERT_BASE_URL', plugin_dir_url(__FILE__));
}

// Save the plugin firectory name. Ex. 'bijbel-plugin'
if(!defined( 'BVERSE_CONVERT_DIR_NAME' )) {
	define( 'BVERSE_CONVERT_DIR_NAME', plugin_basename(dirname(__FILE__)));
}



/**
 * Setup Localization
 *
 * @since 1.1
 */
add_action( 'plugins_loaded', 'bverse_convert_localization' );
function bverse_convert_localization() {
	load_plugin_textdomain('bijbel-plugin', false, basename( dirname( __FILE__ ) ) . '/languages/' );
}



/**
 * Set the links for the Wordpress Plugin Admin Page
 */
add_filter( 'plugin_action_links', 'bverse_convert_wp_admin_plugin_links', 10, 5 );
function bverse_convert_wp_admin_plugin_links($bverse_convert_plugin_page_actions, $bverse_convert_plugin_file) {
	static $bverse_convert_plugin;

	if (!isset($bverse_convert_plugin))
		$bverse_convert_plugin = plugin_basename(__FILE__);
	if ($bverse_convert_plugin == $bverse_convert_plugin_file) {
		
			$bverse_convert_plugin_page_settings = array('settings' => '<a href="admin.php?page=bijbel-plugin">' . __('Instellingen', 'bijbel-plugin') . '</a>');
			$bverse_convert_plugin_page_site_link = array('support' => '<a href="https://www.bijbelsecultuur.nl/bijbel-plugin" target="_blank">' . __('Support', 'bijbel-plugin') . '</a>');
		
    			$bverse_convert_plugin_page_actions = array_merge($bverse_convert_plugin_page_settings, $bverse_convert_plugin_page_actions);
				$bverse_convert_plugin_page_actions = array_merge($bverse_convert_plugin_page_site_link, $bverse_convert_plugin_page_actions);
			
		}
		
		return $bverse_convert_plugin_page_actions;
}



/**
 * @since 1.0
 * Create a top-level Dashboard Menu which will appear in the Sidebar
 */
add_action( 'admin_menu', 'bverse_convert_options_load_menu' );
function bverse_convert_options_load_menu() {
	if (function_exists( 'add_menu_page' )) {
		add_menu_page( 'Bijbel Plugin','Bijbel Plugin','manage_options','bijbel-plugin','bverse_convert_display_options', 'dashicons-format-quote' );
	}
}



/*
 * @Since 1.2
 * Lets set up the Bible References Services
 */
$bverse_bible_ref_services[] = Array("value" => 'Bibles', "type" => 0, "text" => __('Bibles.org'));
$bverse_bible_ref_services[] = Array("value" => 'Biblia', "type" => 0, "text" => __('Biblia.com'));
$bverse_bible_ref_services[] = Array("value" => 'BibleGateway', "type" => 0, "text" => __('BibleGateway.com'));




/*
 * Lets set up the Bible Versions and Languages
 */
$refServices = get_option('bverse_bible_ref_services'); // @Since 1.2
if ($refServices == 'Biblia') {
	
	// Include Available Biblia.com Versions
	require_once('bible-versions/biblia.php');
	
	// Biblia.com Shortcode
	require_once('includes/shortcodes/shortcode-biblia.php');
	
} else if($refServices == 'BibleGateway') {
	
		$bible_versions[] = Array("value" => -1, "type" => 3, "text" => __('Last Version Selected in BibleGateway', 'bijbel-plugin'));
	
	// Include Available BibleGateway.com Versions
	require_once('bible-versions/bg.php');
	
	// BibleGateway.com Shortcode
	require_once('includes/shortcodes/shortcode-bg.php');
		
} else {	
	
	// Include Available Bibles.org Versions
	require_once('bible-versions/bibles.php');
	
	// Bibles.org Shortcode
	require_once('includes/shortcodes/shortcode-bibles.php');

}



/*
 * Register Plugin Options on activation
 */
if (isset($_GET['activate']) and $_GET['activate'] == 'true') {
	add_action( 'init', 'bverse_convert_register_options' );
}



/**
 * Register and Enqueue Admin Stylesheets and Scripts
 */
function bverse_convert_admin_css_js($hook) {
	// Load only on ?page=bverse-convert
	if($hook != 'toplevel_page_bijbel-plugin') {
		return;
	}
	
	// Include Bootstrap but only if isn't already included in site theme
	$style = 'bootstrap';
	if( ( ! wp_style_is( $style, 'queue' ) ) && ( ! wp_style_is( $style, 'done' ) ) ) {
		wp_enqueue_style( 'bverse-bootstrap', 	  BVERSE_CONVERT_BASE_URL.( 'admin/css/bootstrap.min.css' ) );
	}
	
	// CSS  
	wp_enqueue_style( 'bverse-bootstrap-select',  BVERSE_CONVERT_BASE_URL.( 'admin/css/bootstrap-select.css' ) );
	wp_enqueue_style( 'bverse-admin-style',		  BVERSE_CONVERT_BASE_URL.( 'admin/css/bverse-admin-style.css' ) );
	
	// JS
	wp_enqueue_script( 'bverse-custom', 		  BVERSE_CONVERT_BASE_URL.( 'admin/js/custom.js' ) );
	wp_enqueue_script( 'bverse-bootstrap', 		  BVERSE_CONVERT_BASE_URL.( 'admin/js/bootstrap.min.js' ) );
	wp_enqueue_script( 'bverse-bootstrap-select', BVERSE_CONVERT_BASE_URL.( 'admin/js/bootstrap-select.js' ),'bverse_bootstrap','',false );
}
add_action( 'admin_enqueue_scripts', 'bverse_convert_admin_css_js' );



/**
 * Register and Enqueue Front-end Stylesheets and Scripts
 */
function bverse_convert_front_end_css_js() {
	// Register CSS
	wp_enqueue_style( 'bverse-popover', BVERSE_CONVERT_BASE_URL.( 'public/css/popover.css' ) );
	wp_enqueue_style( 'bverse-style', 	BVERSE_CONVERT_BASE_URL.( 'public/css/bverse-style.css' ) );

	// Register JS
	$refServices = get_option('bverse_bible_ref_services'); // @Since 1.2
	
	// If selected service is BibleGatway.com
	if($refServices == 'BibleGateway') {
	
		wp_enqueue_script( 'bverse-popover', 		 BVERSE_CONVERT_BASE_URL.( 'public/js/popover.js' ),'','',true );
		wp_enqueue_script( 'bverse-popover-options', BVERSE_CONVERT_BASE_URL.( 'public/js/popover-options.js' ),'','',true );
		
	// Else set Biblia.com
	} else if($refServices == 'Biblia') {
		
		$is_spanish = in_array( get_option( 'bverse_bible_version' ), array('RVA', 'LBLA95', 'NBLH', 'RVR60', 'NVI') );
		$version 	= get_option('bverse_bible_version');
		$window 	= (bool) get_option('bverse_open_new_window');
		$popoveropt = (bool) get_option('bverse_popover');
		
		if($is_spanish) {
			wp_enqueue_script('bverse-popover-options', BVERSE_CONVERT_BASE_URL.( 'public/js/biblia.es.js' ),'','',true );
		} else {
			wp_enqueue_script('bverse-popover-options', BVERSE_CONVERT_BASE_URL.( 'public/js/biblia.js' ),'','',true );
		}
		
		?>
			<!-- bVerse Convert Biblia.com -->
			<script>
				var refTagger = {
					settings: {
						bibleVersion: 		"<?php echo $version; ?>",
						linksOpenNewWindow: "<?php echo $window; ?>",
						useTooltip: 		"<?php echo $popoveropt; ?>",
						socialSharing: [],
					}
				};
			
				(function(d, t) {
					var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
					s.parentNode.insertBefore(g, s);
				}(document, 'script'));
			</script>
		<?php
	} else {
		
		$version 		  		 = get_option('bverse_bible_version');
		$bverse_bibles_max_depth = get_option('bverse_bibles_max_depth'); // @ Since 1.3 - Bibles.org specific
		
		wp_enqueue_script('bverse-popover-options', BVERSE_CONVERT_BASE_URL.( 'public/js/bibles.js' ),'','',true );
		
		?>
		
		<!-- bVerse Convert Bibles.org -->
		<script id="bw-highlighter-config" data-version="<?php echo $version; ?>" data-maxdepth="<?php echo $bverse_bibles_max_depth; ?>">
			(function(w, d, s, e, id) {
			  w._bhparse = w._bhparse || [];
			  function l() {
			    if (d.getElementById(id)) return;
			    var n = d.createElement(s), x = d.getElementsByTagName(s)[0];
			    x.parentNode.insertBefore(n, x);
			  }
			  (w.attachEvent) ? w.attachEvent('on' + e, l) : w.addEventListener(e, l, false);
			})(window, document, 'script', 'load', 'bw-highlighter-src');
		</script>
		
		<?php
	}
	
	
	/*
	 * Pass the Plugin Options into a variable to the JavaScript Files
	 * This will enable the Popover to have the same version as all references
	 * @since 1.1
	 */
	 	
	// Set the variables
	$bVerseBibleRefServices = get_option('bverse_bible_ref_services'); // @Since 1.2
	$bVerseBibleVersion 	= get_option( 'bverse_bible_version' );
	$bVerseNewWindow 		= (bool) get_option( 'bverse_open_new_window' );
	$bVersePopOver 			= (bool) get_option( 'bverse_popover' );
	$bVersePopOverMore  	= __( 'More', 'bijbel-plugin' );
	
	// Pass the variable values to "bverse_vars" so it can be used in a Javascript file
	$passbVersion = array(
		'bVerseBibleRefService' => $bVerseBibleRefServices, // @Since 1.2
	    'bVerseBibleVersion' 	=> $bVerseBibleVersion,
	    'bVerseNewWindow'	 	=> $bVerseNewWindow,
	    'bVersePopOver' 	 	=> $bVersePopOver,
	    'bVersePopOverMore'  	=> $bVersePopOverMore,
	    'wpinstalldir'			=> site_url(), // @Since 1.3 - This will save the Wordpress Site URL to the var and will be used in a JS file to load needed resources from there
	);
	wp_localize_script( 'bverse-popover-options', 'bverse_vars', $passbVersion );
}
add_action( 'wp_enqueue_scripts', 'bverse_convert_front_end_css_js' );



/**
 * Register bVerse Options
 */
function bverse_convert_register_options() {
	register_setting( 'my_bverse_options', 'bverse_bible_ref_services' ); // @Since 1.2
	register_setting( 'my_bverse_options', 'bverse_bible_version' );
	register_setting( 'my_bverse_options', 'bverse_open_new_window' );
	register_setting( 'my_bverse_options', 'bverse_popover' );
	register_setting( 'my_bverse_options', 'bverse_credits' );
	register_setting( 'my_bverse_options', 'bverse_biblia_social' );
	register_setting( 'my_bverse-options', 'bverse_bibles_max_depth' ); // @ Since 1.3 - Bibles.org specific
} 
add_action( 'admin_init', 'bverse_convert_register_options' );



/**
 * Unregister bVerse Options
 */
function bverse_convert_unregister_options() {
	delete_option( 'bverse_bible_ref_services' );
	delete_option( 'bverse_bible_version' );
	delete_option( 'bverse_open_new_window' );
	delete_option( 'bverse_popover' );
	delete_option( 'bverse_credits' );
	delete_option( 'bverse_biblia_social' );
	delete_option( 'bverse_bibles_max_depth' );
}



// Store Options in Variables
function bverse_convert_display_options() {
	global $bible_versions;
	global $bverse_bible_ref_services; // @Since 1.2
	$refServices   = get_option('bverse_bible_ref_services'); // @Since 1.2
	$version 	   = get_option( 'bverse_bible_version' );
	$window 	   = (bool) get_option( 'bverse_open_new_window' );
	$popoveropt    = (bool) get_option( 'bverse_popover' );
	$bversecredits = (bool) get_option( 'bverse_credits' );
	$bverse_bilia_social =  get_option( 'bverse_biblia_social' );
	$bverse_bibles_max_depth = get_option('bverse_bibles_max_depth'); // @ Since 1.3 - Bibles.org specific
?>



<!--------------------------------------->
<!-- HTML to display the Admin Options -->
<!--------------------------------------->
<div class="bV-wrap">
	<div class="page-title">                    
	    <h2><span class="fa fa-book"></span> Bijbel Plugin voor Wordpress <span class="label label-danger"><?php esc_html_e('Opties', 'bijbel-plugin') ?></span></h2>
	</div>
                
	<div class="col-md-8">
		<form action="options.php" method="post" class="form-horizontal">
			<input type="hidden" name="action" value="update" />
			<input type="hidden" name="page_options" value="bverse_bible_ref_services,bverse_bible_version,bverse_open_new_window,bverse_popover,bverse_credits,bverse_bibles_max_depth" />
			
			<?php if (function_exists('wp_nonce_field')): wp_nonce_field('update-options'); endif; ?>
						
			<div class="panel panel-colorful">
			    <div class="panel-heading">
			        <h3 class="panel-title"><?php esc_html_e('Instellingen', 'bijbel-plugin') ?></h3>
			    </div>
			    
			    <div class="panel-body">
				    <!-- Services -->
				    <!-- <div class="form-group">
					    <label class="col-md-3 col-xs-12 control-label" for="bverse_bible_ref_services"><?php _e('Bible Reference Service', 'bijbel-plugin') ?></label>
					    <div class="col-md-6 col-xs-12">
					        <select name="bverse_bible_ref_services" id="bverse_bible_ref_services" class="selectpicker show-tick">
						        <?php
							        foreach ($bverse_bible_ref_services as $bible_ref_service) {
								        $refValue = $bible_ref_service['value'];
										echo '<option value="'.$refValue.'" '.($refValue == $refServices && $bible_ref_service['type'] == 0 ? 'selected="selected" ' : '').'>'.$bible_ref_service['text'].'</option>';
									}
							    ?>
							</select>
					        <span class="help-block"><?php _e('Select the service you would like to use.', 'bijbel-plugin') ?></span>
					    </div>
					</div> -->
					
				    <!-- Bible Versions -->
			        <div class="form-group">
					    <label class="col-md-3 col-xs-12 control-label" for="bverse_bible_version"><?php esc_html_e('Bijbelvertaling', 'bijbel-plugin') ?></label>
					    <div class="col-md-6 col-xs-12">
					        <select name="bverse_bible_version" id="bverse_bible_version" class="selectpicker show-tick" data-live-search="true">
						        <?php
							        foreach ($bible_versions as $bible_version) {
								        $value = $bible_version['value'];
										echo '<option value="'.$value.'" '.($value == $version && $bible_version['type'] == 0 ? 'selected="selected" ' : '').' '.($bible_version['type'] == 1 ? 'disabled="true" data-icon="glyphicon-globe"' : '').' '.($bible_version['type'] == 0 ? 'class="bible-version-list-item"' : '').'>'.$bible_version['text'].'</option>';
									}
							    ?>
							</select>
					        <span class="help-block"><?php esc_html_e('Selecteer de vertaling die je wilt gebruiken.', 'bijbel-plugin') ?></span>
					    </div>
					</div>
					
					<!-- Bibles.org Max Depth Option -->
					<?php if($refServices == 'Bibles') { ?>
						<div class="form-group">
						    <label class="col-md-3 col-xs-12 control-label" for="bverse_bibles_max_depth"><?php _e('Maximum Depth Search', 'bijbel-plugin') ?></label>
						    <div class="col-md-6 col-xs-12">
								<input type="text" name="bverse_bibles_max_depth" id="bverse_bibles_max_depth" class="form-control" placeholder="Ex. 18" value="<?php echo $bverse_bibles_max_depth; ?>">
						        
						        <span class="help-block"><?php _e('Set the maximum depth for DOM parsing. Must be any positive number. Default value is 10. For more info <a href="http://www.crossedcode.com/bverse-convert/docs/releases/13/maximum-depth" target="_blank">click here</a>.', 'bijbel-plugin') ?></span>
						    </div>
						</div>
					<?php } ?>
					
					<!-- New Window -->
					<div class="form-group">
					    <label class="col-md-3 col-xs-12 control-label" for="bverse_open_new_window"><?php esc_html_e('Nieuw venster', 'bijbel-plugin') ?></label>
					    <div class="col-md-6 col-xs-12">                                                                                                                                        
					        <label class="check"><input type="checkbox" id="bverse_open_new_window" name="bverse_open_new_window" <?php echo ($window ? ' checked="checked"' : ''); ?> value="1" class="icheckbox"/> <?php esc_html_e('Open links in een nieuw venster', 'bijbel-plugin') ?></label>				        
					        <span class="help-block"><?php esc_html_e('Wanneer aangevinkt worden alle bijbelteksten geopend in een nieuw venster.', 'bijbel-plugin') ?></span>
					    </div>
					</div>
					
					<!-- Popover -->
					<div class="form-group">
					    <label class="col-md-3 col-xs-12 control-label" for="bverse_popover"><?php esc_html_e('Tooltip', 'bijbel-plugin') ?></label>
					    <div class="col-md-6 col-xs-12">                                                                                                                                        
					        <label class="check"><input type="checkbox" id="bverse_popover" name="bverse_popover" <?php echo ($popoveropt ? ' checked="checked"' : ''); ?> value="1" class="icheckbox"/> <?php esc_html_e('Toon tooltip bij bijbelteksten', 'bijbel-plugin') ?></label>				        
					        <span class="help-block"><?php esc_html_e('Wanneer aangevinkt verschijnt er een tooltip met de bijbeltekst bij het aanwijzen van een bijbelverwijzing.', 'bijbel-plugin') ?></span>
					        
					        <?php
						        $bible_version = get_option('bverse_bible_version');
						        if ($bible_version == 'RVR1960' || $bible_version == 'BLP' || $bible_version == 'BLPH' || $bible_version == 'PDT' || $bible_version == 'RVA2015' || $bible_version == 'RVR1995'){ ?>
							        <div class="alert alert-warning" role="alert">
										<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
										<strong><?php esc_html_e('Waarschuwing!', 'bijbel-plugin')?></strong> <?php printf( __('Deze bijbelvertaling werkt nog niet met de tooltip-functionaliteit. We adviseren je om <strong>de tooltip functie uit te schakelen</strong> als je deze vertaling gebruikt.', 'bijbel-plugin') ); ?>
									</div>
						        <?php }
					        ?>
					        
					    </div>
					</div> 
					
					<!-- Optional Credits to Us -->
					<div class="form-group">
					    <label class="col-md-3 col-xs-12 control-label" for="bverse_credits"><?php esc_html_e('Credits', 'bijbel-plugin') ?></label>
					    <div class="col-md-6 col-xs-12">                                                                                                                                        
					        <label class="check"><input type="checkbox" id="bverse_credits" name="bverse_credits" <?php echo ($bversecredits ? ' checked="checked"' : ''); ?> value="1" class="icheckbox"/> <?php esc_html_e('Steun ons en laat zien dat je deze plugin gebruikt' , 'bijbel-plugin') ?></label>				        
					        <span class="help-block"><?php esc_html_e('Als je er geen probleem mee hebt om te laten zien dat je deze plugin gebruikt, kan je deze functie inschakelen. Er verschijnt dan een kleine horizontale balk onder aan je website met een verwijzing naar onze plugin-pagina, zodat ook anderen deze plugin kunnen downloaden. Dit is geheel vrijwillig en heeft geen invloed op je site. Als je deze horizontale balk wilt aanpassen kan dat via de CSS class "bijbel-plugin-credits".', 'bijbel-plugin') ?></span>
					    </div>
					</div>
			    </div>
			    
			    <div class="panel-footer">
			        <button class="btn btn-primary pull-right" type="submit" name="Submit"><?php esc_html_e('Bewaar instellingen', 'bijbel-plugin') ?></button>
			    </div>                            
			</div>
		</form>
	</div>
	
	
		
	<div class="col-md-4">
		<div class="panel panel-colorful">
		    <div class="panel-body panel-body-image">
			    <img src="<?php echo BVERSE_CONVERT_BASE_URL ?>/img/bVC-Options-Panel-Header.jpg" alt="bVerse Convert">
				<a href="https://www.crossedcode.com/bverse-convert/" class="panel-body-inform" target="_blank">
					<span class="fa fa-book"></span>
				</a>
		    </div>
		    <div class="panel-body">
		        <h3><?php esc_html_e('Bedankt!', 'bijbel-plugin') ?></h3>
		        <p><?php esc_html_e('We hopen dat je veel plezier zult hebben van onze ', 'bijbel-plugin') ?> <strong>Bijbel Plugin voor Wordpress </strong>. <?php esc_html_e('Deze plugin is gebaseerd op het codewerk van CrossedCode en aangepast voor Nederlandse gebruikers in opdracht van de Bijbelse Cultuur Stichting. Hierdoor is het mogelijk om o.a. de NBG51-vertaling van het Nederlands Bijbelgenootschap te gebruiken op je website. ', 'bijbel-plugin') ?></p>
		        <h4><?php esc_html_e('Sjalom!', 'bijbel-plugin') ?></h4>
		    </div>
		    <div class="panel-footer text-muted text-center">
		        <span><?php esc_html_e('Aangeboden door de', 'bijbel-plugin') ?> <a href="https://www.bijbelsecultuur.nl/" target="_blank"><strong>Bijbelse Cultuur Stichting</strong></a></span>
		    </div>
		</div>
	</div>


	<div class="col-md-4">
		<small class="text-muted"><?php esc_html_e('De Bijbel Plugin voor Wordpress voorziet enkel in een eenvoudige manier om bijbelteksten weer te geven van derde partijen, die deze teksten publiekelijk beschikbaar hebben gemaakt. De Bijbel Plugin is hier geen eigenaar van, bevat deze teksten ook niet, maar integreert deze alleen in Wordpress-sites. Alle rechten op afbeeldingen en teksten zijn voorbehouden aan de eigenaren hiervan.', 'bijbel-plugin') ?></small>
	</div>
	
</div>



<?php
}



/**
 * Show credits on footer
 */
add_action( 'wp_footer', 'bverse_convert_insert_credits', 100 );
function bverse_convert_insert_credits() {
	
	// Get Options
	$bversecredits = (bool) get_option( 'bverse_credits' );
	$refServices 	= get_option('bverse_bible_ref_services'); // @Since 1.2
	
	// Set Conditional Credits
	if ($bversecredits == '1') {
		
		// If service is 'Biblia.com'
		if($refServices == 'Biblia') {
			printf(
				__('<div class="bijbel-plugin-credits"><span>Bijbelteksten mogelijk gemaakt door de <a href="%s" target="_blank">Bijbelse Cultuur Stichting</a></span></div>',
				'bijbel-plugin'),
				'https://www.bijbelsecultuur.nl'
			);
		
		// Else if service is 'Bibles.org'
		} else if($refServices == 'Bibles') {
			printf(
				__('<div class="bijbel-plugin-credits"><span>Bijbelteksten mogelijk gemaakt door de <a href="%s" target="_blank">Bijbelse Cultuur Stichting</a></span></div>',
				'bijbel-plugin'),
				'https://www.bijbelsecultuur.nl'
			);
		
		// If nothing of above is true then display credits for 'BibleGateway.com'	
		} else {
			printf(
				__('<div class="bijbel-plugin-credits"><span>Bijbelteksten mogelijk gemaakt door de <a href="%s" target="_blank">Bijbelse Cultuur Stichting</a></span></div>',
				'bijbel-plugin'),
				'https://www.bijbelsecultuur.nl'
			);
		}
	}
}



/**
 * Activation and Deactivation Hooks
 */
register_activation_hook( __FILE__, 'bverse_convert_register_options' );
register_deactivation_hook( __FILE__, 'bverse_convert_unregister_options' );
?>