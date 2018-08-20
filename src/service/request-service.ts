import store from '@/store.ts';

export default function() {
  const searchKeyword = andOr(store.state.searchKeyword);
  window.open('https://qiita.com/search?q=' + searchKeyword);
}
function andOr(keyword: string): string {
  if (store.state.andOr === 'AND') {
    return keyword;
  }
  return keyword.split(' ').join(' OR ');
}
