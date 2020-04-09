---
title: Wordpress
---

# Wordpress

### Root Link
``` php
<?php echo get_template_directory_uri(); ?>
```

### Sample .gitignore
``` code
ap.xml.gz
/sitemap.xml
/readme.html
/license.txt
/.htaccess
wp-content/plugins/hello.php
wp-content/wp-cache-config.php
wp-content/uploads/
wp-content/upgrade/
wp-content/cache/
wp-content/blogs.dir/
wp-content/backups/
wp-content/backup-db/
wp-content/advanced-cache.php
wp-config.php
*.log
```

### Auto versioning to stylesheets
``` php
/* functions.php */
wp_enqueue_style( 'hue_and_cry-style', get_stylesheet_uri() );
wp_enqueue_style( 'hue_and_cry-style', get_stylesheet_directory_uri() . '/style.css', array(), filemtime( get_stylesheet_directory() . '/style.css' ) );
```

### Enque fonts
``` php
/* functions.php */
wp_enqueue_style( 'roboto', 'https://fonts.googleapis.com/css?family=Roboto' );
```

### WP All in One Migration hack
In `constants.php` file:
``` code
define( 'AI1WM_MAX_FILE_SIZE', 536870912 * 20 );
```

### Insert shortcode into PHP
``` php
<?php echo do_shortcode("[example_shortcode]"); ?>
```

### Auto update copyright
``` php
&copy;<? echo date(Y);?>
```

### Author and date
``` php
<?php the_author(); ?>
<?php the_time('jS F Y') ?> /* August, 4, 2018 */
```

### Show Ttgs
``` php
<?php the_tags( '<ul><li>', '</li><li>', '</li></ul>' ); ?>
```

### Show an excerpt
``` php
<?php echo wp_trim_words( get_the_content(), 60, '<a class="more-link" href="'. get_permalink($post->ID) . '">...read more</a>' );?>
```

### Featured image as background image
``` php
<section style="background: url('<?php echo get_the_post_thumbnail_url( $post_id, 'large' ); ?>') no-repeat center; background-size:cover;">
```

### Simple Generic Loop
``` php
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
... Display post content
<?php endwhile; endif; ?>
```

### Show first post differently than rest
``` php
<?php
  if (have_posts()) :
  $counter = 1;
  while (have_posts()) :
  the_post();
  if( $counter == 1 ) { ?>

  //featured post styles here
  <h1><?php the_title(); ?></h1>

  <? } else { ?>

  //other post styles here
  <h6><?php the_title(); ?></h6>

  <?php }
  $counter++;
  endwhile;
  endif;
?>
```