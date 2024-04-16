参考サイト
https://isaiasvillegas.github.io/blog-preview-card/

cardのborderの設定 (4/14)
タイトルのtransition color(4/14)
レスポンシブ対応(4/14)
shadowをarbitrary valueで対応(4/14)
- README整備, publish(4/16)

## What are you most proud of, and what would you do differently next time?
box-shadow に関わる項目、色に関わる項目以外は、
arbitrary valueを使わずに全てTailwindCSSの既存のクラスで画面を作った。
100%の再現よりも保守性を重視した。

コンテンツのタグ、タイトル、本文などはコンポーネントに直書きしているが、
page.tsxに書かれている内容をCardコンポーネントなどに分割してpropsで内容を
受け取るようにすればより実用的になると思う。

All elements except those related to box-shadow and color were created using existing TailwindCSS classes without using arbitrary values.
I prioritized maintainability over achieving 100% reproduction accuracy.

While tags, titles, and content strings are directly written in components, I believe it would be more practical to divide the content written in page.tsx into components like `Card` and receive the content through props.

## What challenges did you encounter, and how did you overcome them?
box-shadowに関してはTailwindCSSの既存のクラスでは対応ができなかったため
やむを得ずarbitrary valueを使った。

We had to use arbitrary values for box-shadow because it couldn't be addressed with existing TailwindCSS classes.

## What specific areas of your project would you like help with?
