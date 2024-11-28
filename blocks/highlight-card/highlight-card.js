/**
 * Decorates <a> tags by adding a 'button' class
 * @param {Element} block - The block element within which to find <a> tags
 */
export default function decorate(block) {
    // Find all <a> tags within the block
    const anchorTags = block.querySelectorAll('a');
  
    // Add the 'button' class to each <a> tag
    anchorTags.forEach((anchor) => {
      anchor.classList.add('button');
    });
  }