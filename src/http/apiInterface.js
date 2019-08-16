import fetch from '@/utils/fetch'

/**
 * HomeBanner
 * @param {*} param
 */
export function HomeBanner () {
  return fetch({
    url: '/home_banner',
    method: 'get'
  })
}

/**
 * HomePage
 * @param {*} param
 */
export function HomePage () {
  return fetch({
    url: '/shop_data',
    method: 'get'
  })
}
