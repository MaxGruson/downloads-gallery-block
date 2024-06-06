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
import {__experimentalLinkControl as LinkControl, useBlockProps, RichText, BlockControls} from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

import { ToolbarGroup, ToolbarButton, Popover, Button } from '@wordpress/components';

import { useState } from '@wordpress/element';

import { trash, link } from '@wordpress/icons';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	const [ showLinkPopover, setShowLinkPopover ] = useState( false );
	const toggleLinkPopover = () => {
			setShowLinkPopover( ( state ) => ! state );
	};

  const blockProps = useBlockProps( {
    className: 'downloads-gallery__item'
  } );

	return (
		<>
		{/* Toolbar zone */}
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon={link}
					label={__('Link', 'downloads-gallery')}
					onClick={toggleLinkPopover}
					isPressed={showLinkPopover}
				/>
			</ToolbarGroup>
			{showLinkPopover && (
				<Popover>
					<LinkControl
						searchInputPlaceholder={__('Zoek of typ URL', 'downloads-gallery')}
						value={ attributes.dl_link }
						onChange={ ( newLink ) => {
							setAttributes( { dl_link: {...newLink || ''} } ) 
						} }
					>
					</LinkControl>
				</Popover>
			)}
		</BlockControls>
		{/* End Toolbar zone */}

		{/* Main block zone */}
		<li { ...blockProps }>
			<RichText 
				tagName='h3'
				allowedFormats={[]}
				value={ attributes.dl_title }
				onChange={(dl_title) => setAttributes({dl_title})}
				placeholder={__( 'Titel (bijv. Jaarverslag)', 'downloads-gallery')}
				required
			/>
			<RichText 
				tagName='div'
				className='wp-element-button wp-block-button__link'
				allowedFormats={[]}
				value={ attributes.dl_link.title }
				onChange={ (newTitle) => {
					setAttributes( { dl_link: {...attributes.dl_link, title: newTitle} } )
				} }
				placeholder={__( 'Knoptekst (bijv. Downloaden)', 'downloads-gallery')}
				required
			/>
		</li>
		{/* End Main block zone */}
		</>
	);
}
