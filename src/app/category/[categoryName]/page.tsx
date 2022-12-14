import FilteredNewsSection from '@components/organisms/FilteredNewsSection'
import { getFilteredNews } from '@libs/cmsUtils'

type NewsCategoryPage = {
  params: { categoryName: string }
}
const NewsCategoryPage = async ({ params }: NewsCategoryPage) => {
  const filteredNewsList = await getFilteredNews(params.categoryName)
  return (
    <>
      <FilteredNewsSection newsItemList={filteredNewsList} />
    </>
  )
}

export default NewsCategoryPage
