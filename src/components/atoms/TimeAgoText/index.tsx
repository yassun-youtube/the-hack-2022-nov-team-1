'use client'

import timeAgoUtil from '@libs/timeAgo'

const TimeAgoText = ({ time }: { time: string }) => <time dateTime={time}>{timeAgoUtil(time)}</time>

export default TimeAgoText
