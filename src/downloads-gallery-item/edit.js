/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText, 
	BlockControls,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';

import {
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';

import { 
	useSelect 
} from '@wordpress/data';

import {
	customLink, linkOff
} from '@wordpress/icons';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	const blockProps = useBlockProps( {
		className: 'downloads-gallery__item'
	} );

	const isFileSet = ( !! attributes.dl_link && !! attributes.dl_id );

	const unlink = () => {
		setAttributes( {
			dl_link: undefined,
			dl_id: undefined
		} );
	}

	const fileTitle = useSelect( select => {
		const file = attributes.dl_id && select( 'core' ).getMedia( attributes.dl_id );
		return file ? file.title.rendered : 0;
	}, [ attributes.dl_id ] );

	return (
		<>
		{/* Toolbar zone */}
		<BlockControls>
			<ToolbarGroup>
				{ ! isFileSet && (
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => {
								setAttributes( { 
									dl_id: media.id,
									dl_link: media.url
								} );
							} }
							value={ attributes.dl_link }
							render={ ( { open } ) => (
								<ToolbarButton
									label={__('Bestand', 'downloads-gallery')}
									onClick={ open }
									icon={ customLink }
								/>
							) }
						/>
					</MediaUploadCheck>
				) }
				{ isFileSet && (
					<MediaUploadCheck>
						<ToolbarButton
							name='link'
							icon={ linkOff }
							title={ __( 'Unlink' ) }
						 	onClick={ unlink } 
							text={ fileTitle }
							isActive />
					</MediaUploadCheck>
				) }
			</ToolbarGroup>
		</BlockControls>
		{/* End Toolbar zone */}

		{/* Main block zone */}
		<li { ...blockProps }>
			<RichText 
				tagName='h3'
				allowedFormats={[]}
				value={ attributes.dl_title }
				onChange={ ( dl_title ) => {
					setAttributes( { dl_title: dl_title } )
				} }
				placeholder={__( 'Titel (bijv. Jaarverslag)', 'downloads-gallery')}
				required
			/>
			<RichText 
				tagName='div'
				className='wp-element-button wp-block-button__link'
				allowedFormats={[]}
				value={ attributes.dl_button_text }
				onChange={ ( dl_button_text ) => {
					setAttributes( { dl_button_text: dl_button_text } )
				} }
				placeholder={__( 'Knoptekst (bijv. Downloaden)', 'downloads-gallery')}
				required
			/>
		</li>
		{/* End Main block zone */}
		</>
	);
}
