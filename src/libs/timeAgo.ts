import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const timeAgoUtil = (date: string) => timeAgo.format(new Date(date))

export default timeAgoUtil
