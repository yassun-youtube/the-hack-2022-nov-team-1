'use client'
import ImageContainer from '@components/molecules/ImageContainer'
import ListItemContainer from '@components/molecules/ListItemContainer'

const TopPageNewsSection = () => {
  return (
    <section className={'flex justify-center'}>
      <div className={'my-24 h-[409px] w-[680px] bg-white'}>
        <div>
          <hr className={'mb-6 border-t-8 border-t-gray'} />
          <h1 className={'font-robot text-2xl font-bold leading-7 tracking-[0.03em] text-blue'}>
            TECHNOLOGY
          </h1>
          <div className={'mt-6 flex'}>
            <ImageContainer
              url={'news/meta'}
              paragraph={
                'アイルランドの監視当局、Metaに2億6500万ユーロの制裁金、最新のプライバシー事件で'
              }
              alt={''}
              src={
                'https://storage.googleapis.com/afs-prod/media/867e7ddc5d684e5fbb41fc8539fe5bd9/400.jpeg'
              }
            />
            <ul className={'ml-10 flex-col'}>
              <ListItemContainer
                url={'news/mask1'}
                title={'マスク氏、Twitterのプレミアムサービス再開を計画、再び'}
              />
              <ListItemContainer
                url={'news/mask2'}
                title={'マスク、Twitterのアカウント停止に「恩赦」を認めると発言'}
              />
              <ListItemContainer
                url={'news/fcc'}
                title={'米FCC、HuaweiとZTEの中国製ハイテク製品の販売・輸入を禁止に'}
              />
              <ListItemContainer
                url={'news/wright'}
                title={'部外者のために保守系メディアを読み解くライティング'}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopPageNewsSection
