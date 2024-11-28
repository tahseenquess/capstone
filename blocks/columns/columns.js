export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // Add class to the div containing only the picture
          picWrapper.classList.add('columns-img-col');
  
          // Add class to the next sibling div of picWrapper
          const nextSibling = picWrapper.nextElementSibling;
          if (nextSibling && nextSibling.tagName === 'DIV') {
            nextSibling.classList.add('columns-content');
          }
        }
      }
    });
  });
}
