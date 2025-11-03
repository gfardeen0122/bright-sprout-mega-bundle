<?php
/**
 * Bright Sprout Theme Functions
 */

// Enqueue styles and scripts
function bright_sprout_enqueue_assets() {
    // Main theme stylesheet
    wp_enqueue_style('bright-sprout-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Tailwind CSS CDN for utility classes
    wp_enqueue_style('tailwind-cdn', 'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css', array(), '3.4.1');
    
    // Custom theme JavaScript
    wp_enqueue_script('bright-sprout-script', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'bright_sprout_enqueue_assets');

// Theme setup
function bright_sprout_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'bright-sprout'),
        'footer' => __('Footer Menu', 'bright-sprout'),
    ));
}
add_action('after_setup_theme', 'bright_sprout_theme_setup');

// Customizer settings
function bright_sprout_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => __('Hero Section', 'bright-sprout'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => '10,000+ Fun Worksheets for Kids Aged 3–7',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'bright-sprout'),
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Make Learning Fun with Printable Worksheets',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label' => __('Hero Subtitle', 'bright-sprout'),
        'section' => 'hero_section',
        'type' => 'textarea',
    ));
    
    // Pricing Section
    $wp_customize->add_section('pricing_section', array(
        'title' => __('Pricing', 'bright-sprout'),
        'priority' => 40,
    ));
    
    $wp_customize->add_setting('price', array(
        'default' => '499',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('price', array(
        'label' => __('Price (₹)', 'bright-sprout'),
        'section' => 'pricing_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('original_price', array(
        'default' => '2,999',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('original_price', array(
        'label' => __('Original Price (₹)', 'bright-sprout'),
        'section' => 'pricing_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('purchase_link', array(
        'default' => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('purchase_link', array(
        'label' => __('Purchase Link', 'bright-sprout'),
        'section' => 'pricing_section',
        'type' => 'url',
    ));
}
add_action('customize_register', 'bright_sprout_customize_register');

// Remove admin bar for cleaner landing page
add_filter('show_admin_bar', '__return_false');
?>
