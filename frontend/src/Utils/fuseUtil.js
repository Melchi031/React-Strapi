//import Fuse from 'fuse.js';
//import diacritics from 'diacritics';

export const fuseOptions = {
  includeScore: false,
  ignoreLocation: false,
  isCaseSensitive: false,
  minMatchCharLength: 1,
  shouldSort: true,
  threshold: 0.5,
  keys: ['Titre', 'tags.Name'],
  //   getFn: function (obj, path) {
  //     const value = Fuse?.config?.getFn?.(obj, path) ?? '';
  //     if (Array.isArray(value)) {
  //       return value.map((s) => diacritics.remove(s));
  //     }
  //     return diacritics.remove(value);
  //   },
};

export function unpackSearch(searchResults) {
  const result = [];
  searchResults.forEach((element) => {
    result.push(element.item);
  });
  return result;
}
