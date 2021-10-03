export const MENUDATAS = ["ホーム", "動画", "再生リスト", "チャンネル", "フリートーク概要"];

export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MENUDATAS);
    }, 1000);
  });
};
