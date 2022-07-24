import Image from 'next/future/image'
import avatar from '@/images/avatar.png'

export const Avatar = () => {
  return (
    <Image
      id="avatar"
      src={avatar}
      alt="Stylised avatar of Ben Weier"
      width={132}
      height={132}
      className="rounded-full shadow-[0_0_10px_-5px_rgba(0,0,0,0.4)]"
      placeholder="blur"
      sizes="132px"
      loading="eager"
    />
  )
}
