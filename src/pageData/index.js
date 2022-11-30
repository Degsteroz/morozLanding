const BASE_URL = 'https://res.cloudinary.com/dtecpsig5/image/upload/f_webp/'
const CONFIG = {
  scale700: 'c_scale,w_700/',
  scale900: 'c_scale,w_900/',
  lowQuality: 'q_50/',
}
const DIRECTORY = 'moroz/'

export const FORMATTED_IMAGE_PREFIX = BASE_URL + DIRECTORY
export const FORMATTED_SCALED700_IMAGE_PREFIX = BASE_URL + CONFIG.scale700 + DIRECTORY
export const FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX = BASE_URL + CONFIG.scale700 + CONFIG.lowQuality + DIRECTORY
export const FORMATTED_SCALED900_IMAGE_PREFIX = BASE_URL + CONFIG.scale900 + DIRECTORY

export const HEADER_IMAGE = FORMATTED_IMAGE_PREFIX + 'headerPictures_pbzcx8.jpg'
export const HEADER_IMAGE2 = FORMATTED_IMAGE_PREFIX + 'headerPictures2_c4cfhh.jpg'

export const ABOUT_PHOTO = FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX +'about2_e5vuzn.png'
export const ABOUT_PHOTO2 = FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX + 'about_uhkdfq.png'

export const WORK_BACKGROUND = '/XAOqDUeNaC8_nrrpol.jpg'
export const WORK_PHOTO = [
  WORK_BACKGROUND,
  'jdUXLZExosA_sniqbx.jpg',
  'a1WFVx8fvTM_ndk6kc.jpg',
  'JKfssRRCKus_hznwco.jpg',
  'yforXyNfbZU_thl9c8.jpg',
  'y3awzVC72sg_mf1r3i.jpg',
]

