const centerRuler = ({ total, activePage }) => {
  if (activePage === total) {
    return activePage - 2;
  }

  if (activePage - 1 <= 0) {
    return 1;
  }

  return activePage - 1;
};

const isNumber = (value) => typeof value === 'number';

export default ({ total = 1, activePage = 1 } = {}) => {
  if (!isNumber(total)) {
    throw new TypeError('total should be a number');
  }

  if (!isNumber(activePage)) {
    throw new TypeError('activePage should be a number');
  }

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const visiblePages = 3;
  let pages = [
    1,
    ...Array.from({ length: visiblePages }, (_, i) => i + centerRuler({ total, activePage })),
    total,
  ].filter((value, index, array) => array.indexOf(value) === index);

  let [firstPage, secondPage] = pages;

  if (secondPage === firstPage + 2) {
    pages = [firstPage, firstPage + 1, ...pages.slice(1)];
  }

  [firstPage, secondPage] = pages;

  if (secondPage > firstPage + 2) {
    pages = [firstPage, '...', ...pages.slice(1)];
  }

  let penultimatePage = pages[pages.length - 2];
  let lastPage = pages[pages.length - 1];

  if (penultimatePage === lastPage - 2) {
    pages = [...pages.slice(0, -1), lastPage - 1, lastPage];
  }

  penultimatePage = pages[pages.length - 2];
  lastPage = pages[pages.length - 1];

  if (penultimatePage < lastPage - 2) {
    pages = [...pages.slice(0, -1), '...', lastPage];
  }

  return pages;
};
