const BASE_URL = 'https://res.cloudinary.com/dtecpsig5/image/upload/f_webp/'
const CONFIG = {
  scale700: 'c_scale,w_700/',
  scale900: 'c_scale,w_900/',
  lowQuality: 'q_50/',
}
const DIRECTORY = 'moroz/'

const FORMATTED_IMAGE_PREFIX = BASE_URL + DIRECTORY
const FORMATTED_SCALED700_IMAGE_PREFIX = BASE_URL + CONFIG.scale700 + DIRECTORY
const FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX = BASE_URL + CONFIG.scale700 + CONFIG.lowQuality + DIRECTORY

export const HEADER_IMAGE = FORMATTED_IMAGE_PREFIX + 'headerPictures_pbzcx8.jpg'
export const HEADER_IMAGE2 = FORMATTED_IMAGE_PREFIX + 'headerPictures2_c4cfhh.jpg'

export const ABOUT_PHOTO = FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX +'about2_e5vuzn.png'
export const ABOUT_PHOTO2 = FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX + 'about_uhkdfq.png'

export const WORK_BACKGROUND = FORMATTED_IMAGE_PREFIX + '/XAOqDUeNaC8_nrrpol.jpg'
export const WORK_PHOTO = [
  WORK_BACKGROUND,
  FORMATTED_SCALED700_IMAGE_PREFIX + 'jdUXLZExosA_sniqbx.jpg',
  FORMATTED_SCALED700_IMAGE_PREFIX + 'a1WFVx8fvTM_ndk6kc.jpg',
  FORMATTED_SCALED700_IMAGE_PREFIX + 'JKfssRRCKus_hznwco.jpg',
  FORMATTED_SCALED700_IMAGE_PREFIX + 'yforXyNfbZU_thl9c8.jpg',
  FORMATTED_SCALED700_IMAGE_PREFIX + 'y3awzVC72sg_mf1r3i.jpg',
]

