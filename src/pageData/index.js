import albums from './albums.json'

const BASE_URL = 'https://res.cloudinary.com/dtecpsig5/image/upload/f_webp/'
const CONFIG = {
  scale100: 'c_scale,w_100/',
  scale700: 'c_scale,w_700/',
  scale1000: 'c_scale,w_1000/',
  lowQuality: 'q_50/',
  blur: 'e_blur:2000/'
}
const DIRECTORY = 'moroz/'

export const FORMATTED_IMAGE_PREFIX = BASE_URL + DIRECTORY
export const FORMATTED_SCALED700_IMAGE_PREFIX = BASE_URL + CONFIG.scale700 + DIRECTORY
export const FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX = BASE_URL
  + CONFIG.scale700
  + CONFIG.lowQuality
  + DIRECTORY

export const FORMATTED_SCALED200_LOW_QUALITY_IMAGE_PREFIX = BASE_URL
  + CONFIG.scale100
  + CONFIG.lowQuality
  + DIRECTORY
export const FORMATTED_SCALED1000_IMAGE_PREFIX = BASE_URL + CONFIG.scale1000 + DIRECTORY

export const FORMATTED_LOW_QUALITY_BLURRED_IMAGE_PREFIX = BASE_URL
  + CONFIG.blur
  + CONFIG.lowQuality
  + CONFIG.scale700
  + DIRECTORY

export const HEADER_IMAGE = FORMATTED_IMAGE_PREFIX + 'space/PPAxH8GNOhY_lykacc.jpg'
export const MOBILE_HEADER_IMAGE = FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX + 'space/PPAxH8GNOhY_lykacc.jpg'
export const HEADER_IMAGE2 = FORMATTED_IMAGE_PREFIX + 'FCtJb2idqHo_npxs7t.jpg'
export const MOBILE_HEADER_IMAGE2 = FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX + 'FCtJb2idqHo_npxs7t.jpg'

export const ABOUT_PHOTO = FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX +'dZ3CskhtI0Y_zc8jnh.jpg'
export const ABOUT_PHOTO2 = FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX + 'about_uhkdfq.png'

export const WORK_BACKGROUND = 'KiberKitsune/XAOqDUeNaC8_nrrpol.jpg'

export const ALBUMS = albums
export const WORKS_TYPES = [
  {
    cover: 'KiberKitsune/XAOqDUeNaC8_nrrpol.jpg',
    name: 'Sensitive',
    description: 'Чувственные фотографии',
    id: 'sensitive'
  },
  {
    cover: '12_rsrqmb',
    name: 'Couples',
    description: 'Парные фотографии',
    id: 'couple'
  },
]
