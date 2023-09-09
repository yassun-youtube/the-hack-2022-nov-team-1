'use client'

import timeAgoUtil from '@/libs/time-ago'

function TimeAgoText({ time }: { time: string }) {
  return <time dateTime={time}>{timeAgoUtil(time)}</time>
}

export default TimeAgoText
