# WordPress Theme Conversion Guide

## Overview
This guide will help you convert the static HTML portfolio to a WordPress theme.

## File Structure for WordPress Theme

```
bayazid-portfolio-theme/
├── style.css (required WordPress theme file)
├── index.php (main template)
├── functions.php (theme functions)
├── header.php (header template)
├── footer.php (footer template)
├── front-page.php (homepage template)
├── assets/
│   ├── css/
│   │   └── portfolio.css
│   ├── js/
│   │   └── portfolio.js
│   └── images/
│       └── (portfolio images)
├── template-parts/
│   ├── section-hero.php
│   ├── section-about.php
│   ├── section-experience.php
│   ├── section-skills.php
│   ├── section-services.php
│   ├── section-portfolio.php
│   └── section-contact.php
└── inc/
    ├── customizer.php
    └── enqueue-scripts.php
```

## Step 1: Create style.css (Theme Header)

```css
/*
Theme Name: Bayazid Bhuiyan Portfolio
Description: A modern, professional portfolio theme for creative designers and developers
Author: Bayazid Bhuiyan
Version: 1.0.0
License: GPL v2 or later
Text Domain: bayazid-portfolio
*/

/* Import the main CSS file */
@import url("assets/css/portfolio.css");
```

## Step 2: Create functions.php

```php
<?php
/**
 * Bayazid Portfolio Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme setup
function bayazid_portfolio_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menu
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'bayazid-portfolio'),
    ));
}
add_action('after_setup_theme', 'bayazid_portfolio_setup');

// Enqueue scripts and styles
function bayazid_portfolio_scripts() {
    // Enqueue styles
    wp_enqueue_style('bayazid-portfolio-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('bayazid-portfolio-main', get_template_directory_uri() . '/assets/css/portfolio.css', array(), '1.0.0');
    
    // Enqueue Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap', array(), null);
    
    // Enqueue scripts
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest/dist/umd/lucide.js', array(), '1.0.0', true);
    wp_enqueue_script('bayazid-portfolio-main', get_template_directory_uri() . '/assets/js/portfolio.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('bayazid-portfolio-main', 'bayazid_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('bayazid_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'bayazid_portfolio_scripts');

// Handle contact form submission
function handle_contact_form() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['nonce'], 'bayazid_nonce')) {
        wp_die('Security check failed');
    }
    
    // Sanitize form data
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $subject = sanitize_text_field($_POST['subject']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Validate email
    if (!is_email($email)) {
        wp_send_json_error('Invalid email address');
        return;
    }
    
    // Prepare email
    $to = get_option('admin_email');
    $email_subject = 'Portfolio Contact: ' . $subject;
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";
    
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . $name . ' <' . $email . '>'
    );
    
    // Send email
    $sent = wp_mail($to, $email_subject, $email_message, $headers);
    
    if ($sent) {
        wp_send_json_success('Message sent successfully!');
    } else {
        wp_send_json_error('Failed to send message. Please try again.');
    }
}
add_action('wp_ajax_contact_form', 'handle_contact_form');
add_action('wp_ajax_nopriv_contact_form', 'handle_contact_form');

// Customizer settings
function bayazid_portfolio_customizer($wp_customize) {
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => 'Hero Section',
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Creative Designer & Developer',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => 'Hero Title',
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_description', array(
        'default' => 'I\'m Bayazid Bhuiyan, a passionate and creative individual...',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_description', array(
        'label' => 'Hero Description',
        'section' => 'hero_section',
        'type' => 'textarea',
    ));
    
    // Contact Information
    $wp_customize->add_section('contact_info', array(
        'title' => 'Contact Information',
        'priority' => 35,
    ));
    
    $wp_customize->add_setting('contact_email', array(
        'default' => 'bayazid.bhuiyan@example.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label' => 'Email Address',
        'section' => 'contact_info',
        'type' => 'email',
    ));
    
    $wp_customize->add_setting('contact_phone', array(
        'default' => '+880 1234 567890',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label' => 'Phone Number',
        'section' => 'contact_info',
        'type' => 'text',
    ));
}
add_action('customize_register', 'bayazid_portfolio_customizer');

// Helper functions
function get_hero_title() {
    return get_theme_mod('hero_title', 'Creative Designer & Developer');
}

function get_hero_description() {
    return get_theme_mod('hero_description', 'I\'m Bayazid Bhuiyan, a passionate and creative individual with a strong interest in business, technology, and design.');
}

function get_contact_email() {
    return get_theme_mod('contact_email', 'bayazid.bhuiyan@example.com');
}

function get_contact_phone() {
    return get_theme_mod('contact_phone', '+880 1234 567890');
}
?>
```

## Step 3: Create header.php

```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Navigation -->
<nav id="navigation" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
    <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
            <div class="text-2xl font-bold text-gradient">
                <?php bloginfo('name'); ?>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="#hero" class="text-foreground hover:text-accent transition-colors font-medium scroll-link">Home</a>
                <a href="#about" class="text-foreground hover:text-accent transition-colors font-medium scroll-link">About</a>
                <a href="#experience" class="text-foreground hover:text-accent transition-colors font-medium scroll-link">Experience</a>
                <a href="#skills" class="text-foreground hover:text-accent transition-colors font-medium scroll-link">Skills</a>
                <a href="#services" class="text-foreground hover:text-accent transition-colors font-medium scroll-link">Services</a>
                <a href="#portfolio" class="text-foreground hover:text-accent transition-colors font-medium scroll-link">Portfolio</a>
                <a href="#contact" class="text-foreground hover:text-accent transition-colors font-medium scroll-link">Contact</a>
                
                <!-- Theme Toggle -->
                <button id="theme-toggle" class="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all">
                    <i data-lucide="sun" class="h-5 w-5"></i>
                </button>
                
                <a href="#contact" class="accent-gradient hover-lift px-4 py-2 rounded-lg text-sm font-medium text-accent-foreground">
                    Let's Connect
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="flex items-center space-x-2 md:hidden">
                <button id="theme-toggle-mobile" class="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all">
                    <i data-lucide="sun" class="h-5 w-5"></i>
                </button>
                <button id="mobile-menu-toggle" class="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all">
                    <i data-lucide="menu" class="h-5 w-5"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="md:hidden mt-4 p-4 bg-card rounded-lg shadow-lg border hidden">
            <div class="space-y-4">
                <a href="#hero" class="block text-foreground hover:text-accent transition-colors font-medium scroll-link">Home</a>
                <a href="#about" class="block text-foreground hover:text-accent transition-colors font-medium scroll-link">About</a>
                <a href="#experience" class="block text-foreground hover:text-accent transition-colors font-medium scroll-link">Experience</a>
                <a href="#skills" class="block text-foreground hover:text-accent transition-colors font-medium scroll-link">Skills</a>
                <a href="#services" class="block text-foreground hover:text-accent transition-colors font-medium scroll-link">Services</a>
                <a href="#portfolio" class="block text-foreground hover:text-accent transition-colors font-medium scroll-link">Portfolio</a>
                <a href="#contact" class="block text-foreground hover:text-accent transition-colors font-medium scroll-link">Contact</a>
                <a href="#contact" class="accent-gradient w-full px-4 py-2 rounded-lg text-sm font-medium text-accent-foreground text-center block">
                    Let's Connect
                </a>
            </div>
        </div>
    </div>
</nav>
```

## Step 4: Create index.php (Main Template)

```php
<?php get_header(); ?>

<!-- Hero Section -->
<?php get_template_part('template-parts/section', 'hero'); ?>

<!-- About Section -->
<?php get_template_part('template-parts/section', 'about'); ?>

<!-- Experience Section -->  
<?php get_template_part('template-parts/section', 'experience'); ?>

<!-- Skills Section -->
<?php get_template_part('template-parts/section', 'skills'); ?>

<!-- Services Section -->
<?php get_template_part('template-parts/section', 'services'); ?>

<!-- Portfolio Section -->
<?php get_template_part('template-parts/section', 'portfolio'); ?>

<!-- Contact Section -->
<?php get_template_part('template-parts/section', 'contact'); ?>

<?php get_footer(); ?>
```

## Step 5: Create footer.php

```php
<!-- Footer -->
<footer class="bg-primary text-primary-foreground">
    <div class="container mx-auto px-4 py-16">
        <div class="grid md:grid-cols-4 gap-8">
            <!-- Brand & Description -->
            <div class="md:col-span-2 space-y-4">
                <h3 class="text-2xl font-bold"><?php bloginfo('name'); ?></h3>
                <p class="text-primary-foreground/80 leading-relaxed max-w-md">
                    <?php bloginfo('description'); ?>
                </p>
                <div class="flex space-x-4">
                    <a href="mailto:<?php echo get_contact_email(); ?>" class="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all hover-lift">
                        <i data-lucide="mail" class="h-5 w-5"></i>
                    </a>
                    <a href="tel:<?php echo get_contact_phone(); ?>" class="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all hover-lift">
                        <i data-lucide="phone" class="h-5 w-5"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-primary-foreground/20 mt-12 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div class="flex items-center space-x-2 text-primary-foreground/80">
                    <span>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Made with</span>
                    <i data-lucide="heart" class="h-4 w-4 text-accent fill-current"></i>
                    <span>in Bangladesh</span>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
```

## Step 6: Update JavaScript for WordPress

In your `assets/js/portfolio.js`, update the contact form handling:

```javascript
// Update contact form handling for WordPress
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        formData.append('action', 'contact_form');
        formData.append('nonce', bayazid_ajax.nonce);
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Send AJAX request
        fetch(bayazid_ajax.ajax_url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showToast(data.data, 'success');
                contactForm.reset();
            } else {
                showToast(data.data, 'error');
            }
        })
        .catch(error => {
            showToast('An error occurred. Please try again.', 'error');
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });
}
```

## Step 7: Create Template Parts

Create individual PHP files in the `template-parts/` directory for each section:

- `section-hero.php` - Hero section with PHP variables
- `section-about.php` - About section
- `section-experience.php` - Work experience section
- `section-skills.php` - Skills section with progress bars
- `section-services.php` - Services offered
- `section-portfolio.php` - Portfolio projects
- `section-contact.php` - Contact form and information

## Installation Instructions

1. **Prepare Files**: Copy all static HTML files to the WordPress theme directory
2. **Convert HTML to PHP**: Replace static content with WordPress functions
3. **Upload Theme**: Upload the theme folder to `/wp-content/themes/`
4. **Activate Theme**: Go to Appearance > Themes and activate the portfolio theme
5. **Customize**: Use the WordPress Customizer to modify content
6. **Add Content**: Create pages and posts as needed

## Additional Features to Consider

1. **Custom Post Types**: Create custom post types for portfolio items
2. **ACF Integration**: Use Advanced Custom Fields for easier content management
3. **Page Builder Support**: Add support for Elementor or Gutenberg blocks
4. **SEO Optimization**: Install Yoast SEO or similar plugin
5. **Performance**: Add caching and optimization plugins
6. **Analytics**: Integrate Google Analytics

## Testing Checklist

- [ ] Theme activates without errors
- [ ] All sections display correctly
- [ ] Contact form works and sends emails
- [ ] Responsive design works on all devices
- [ ] Dark/light theme toggle functions
- [ ] Navigation scrolling works smoothly
- [ ] All animations and effects work
- [ ] Customizer settings save and display correctly

This guide provides a complete framework for converting your static HTML portfolio to a fully functional WordPress theme.