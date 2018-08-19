import store from '@/store.ts';

export default function() {
  console.log(store.state.searchKeyword);
  window.open('https://qiita.com/search?q=' + store.state.searchKeyword);
}
