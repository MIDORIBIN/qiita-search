import store from '@/store/main-store';

export default function() {
  const query = createQuery(
    store.state.searchStore.isPopular,
    store.state.searchStore.period,
    store.state.searchStore.tagList,
    store.state.searchStore.sort,
    store.state.searchStore.searchKeyword,
    store.state.searchStore.isOrSearch,
    store.state.searchStore.isTitle,
    store.state.searchStore.candidateList,
  );
  window.open('https://qiita.com/search?utf8=✓&q=' + query);
}
function createQuery(
  isPopular: boolean,
  periodStr: string,
  tagList: string[],
  sortStr: string,
  searchKeyword: string,
  isOr: boolean,
  isTitle: boolean,
  isBody: boolean,
) {
  const popularQuery = popular(isPopular);
  const periodQuery = period(periodStr);
  const tagListQuery = tags(tagList);
  const sortQuery = sort(sortStr); // 最後
  const searchQuery = createSearchQuery(searchKeyword, isOr, isTitle, isBody);
  return searchQuery + popularQuery + periodQuery + tagListQuery + sortQuery;
}
function popular(isPopular: boolean): string {
  if (!isPopular) {
    return '';
  }
  return '+stocks%3A>10';
}
function period(periodStr: string): string {
  if (periodStr.length === 0) {
    return '';
  }
  return '+created%3A>' + periodStr;
}
function tags(tagList: string[]): string {
  return tagList
    .map((tag: string) => '+tag%3A' + tag)
    .join();
}
function sort(sortStr: string): string {
  return '&sort=' + sortStr;
}
function createSearchQuery(searchKeyword: string, isOr: boolean, isTitle: boolean, isBody: boolean): string {
  if (searchKeyword.length === 0) {
    return searchKeyword;
  }
  if (!(isOr || isTitle || isBody)) {
    return searchKeyword;
  }
  if (isOr) {
    return or(searchKeyword);
  }
  let searchQuery = '';
  if (isTitle) {
    searchQuery += title(searchKeyword);
  }
  if (isBody) {
    searchQuery += body(searchKeyword);
  }
  return searchQuery;
}
function or(keyword: string): string {
  return keyword.split(' ').join(' OR ');
}
function title(keyword: string): string {
  return keyword.split(' ')
    .map((key: string) => '+title%3A' + key)
    .join();
}
function body(keyword: string): string {
  return keyword.split(' ')
    .map((key: string) => '+body%3A' + key)
    .join();
}
