import store from '@/store.ts';

export default function() {
  let searchKeyword = andOr(store.state.searchKeyword);
  searchKeyword += popular(store.state.isPopular);
  searchKeyword += period(store.state.period);
  searchKeyword += tags(store.state.tagList);
  window.open('https://qiita.com/search?utf8=✓&q=' + searchKeyword);
}
function andOr(keyword: string): string {
  if (!store.state.isOrSearch) {
    return keyword;
  }
  return keyword.split(' ').join(' OR ');
}
function popular(isPopular: boolean): string {
  if (!isPopular) {
    return '';
  }
  return '+stocks%3A>10';
}
function period(periodStr: string) {
  if (periodStr.length === 0) {
    return '';
  }
  return '+created%3A>' + periodStr;
}
function tags(tagList: string[]) {
  return tagList
    .map((tag: string) => '+tag%3A' + tag);
}
