import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: React.ComponentType<React.ComponentProps<'img'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'オープンソース',
    src: require('@site/static/img/zmm-small.png').default,
    description: (
      <>
        ZMMは誰でも開発に参加できる開かれたプラットフォームです。<a href="https://github.com/windymelt/zmm" target="_blank">GitHub</a>でソースコードは公開されています。
      </>
    ),
  },
  {
    title: 'すべてをテキストで',
    src: require('@site/static/img/zmm-small.png').default,
    description: (
      <>
        テキストを書くことに集中しましょう。従来の動画作成ツールのような複雑な設定や操作はあえて用意せず、XMLファイルを書くことで全ての作業を完結できます。
      </>
    ),
  },
  {
    title: 'ほげほげふがふが',
    src: require('@site/static/img/zmm-small.png').default,
    description: (
      <>
        ここの文言は後で考えるのだ
      </>
    ),
  },
];

function Feature({title, src, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
          <img src={src} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
