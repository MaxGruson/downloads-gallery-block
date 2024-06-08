<?php
/**
 * Downloads block template.
 *
 * @param   array $attributes - A clean associative array of block attributes.
 * @param   array $block - All the block settings and attributes.
 * @param   string $content - The block inner HTML (usually empty unless using inner blocks).
 *
 * @package maxgruson/downloads-block
 */

namespace DOWNLOADS_GALLERY_BLOCK;

$dl_title = $attributes['dl_title'] ?? '';
$dl_link  = $attributes['dl_link'] ?? '';

if ( $dl_title && $dl_link ) {
	?>
<li <?php echo get_block_wrapper_attributes( array( 'class' => 'downloads-gallery__item' ) ); ?>>
	<h3><?php echo wp_kses_post( $dl_title ); ?></h3>
	<a download
	class="wp-element-button wp-block-button__link"
		href="<?php echo $dl_link['url'] ? esc_url( $dl_link['url'] ) : '#'; ?>">
		<?php echo isset( $dl_link['title'] ) ? wp_kses_post( $dl_link['title'] ) : wp_kses_post( __( 'Downloaden', 'downloads-gallery' ) ); ?>
	</a>
</li>
	<?php
}
