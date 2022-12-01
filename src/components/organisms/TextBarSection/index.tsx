import TextBarListItem from '@components/molecules/TextBarListItem'

const TextBarSection = () => {
  return (
    <section className={'w-full'}>
      <ul className={'mx-10 flex justify-evenly border-t-2 border-t-blue/10'}>
        <TextBarListItem
          text={'検視官 アイダホ州の学生はベッドで刺殺された'}
          time={'2 hour ago'}
          url={'news/test-news'}
        />
        <TextBarListItem
          text={'サウジ王子の新たな肩書きが、殺害をめぐる訴訟回避の鍵に'}
          time={'2 hour ago'}
          url={'news/test-news'}
        />
        <TextBarListItem
          text={
            'スタジアムでのビール禁止にもかかわらず、ワールドカップ・ファンは祝杯を挙げる用意がある。'
          }
          time={'2 hour ago'}
          url={'news/test-news'}
        />
        <TextBarListItem
          text={'ウイルス性のジャンバラヤ」。米国の病院を苦しめる初期インフルエンザ'}
          time={'2 hour ago'}
          url={'news/test-news'}
        />
        <TextBarListItem
          text={'学生ローンの免除を申請した場合に知っておくべきこと'}
          time={'2 hour ago'}
          isVerticalLine={false}
          url={'news/test-news'}
        />
      </ul>
    </section>
  )
}

export default TextBarSection
