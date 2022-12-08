const BASE_URL = 'https://res.cloudinary.com/dtecpsig5/image/upload/f_webp/'
const CONFIG = {
  scale200: 'c_scale,w_200/',
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
  + CONFIG.scale200
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
export const HEADER_IMAGE2 = FORMATTED_IMAGE_PREFIX + 'pQ15C-sGB2w_rdajce.jpg'
export const MOBILE_HEADER_IMAGE2 = FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX + 'pQ15C-sGB2w_rdajce.jpg'

export const ABOUT_PHOTO = FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX +'dZ3CskhtI0Y_zc8jnh.jpg'
export const ABOUT_PHOTO2 = FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX + 'about_uhkdfq.png'

export const WORK_BACKGROUND = 'KiberKitsune/XAOqDUeNaC8_nrrpol.jpg'
export const WORK_PHOTO = [
  {
    main: 'XAOqDUeNaC8_nrrpol.jpg',
    photos: [
      'XAOqDUeNaC8_nrrpol.jpg',
      'kPHK7h6OjJM_m3mcq0.jpg',
      '2tLsM_UFJAU_aj2ccx.jpg',
      '7AkiV73J_q8_ziuowl.jpg',
      'J159Y9jiZhk_y3bmk1.jpg',
      'Xdp8VmNu-f4_h6yh7g.jpg',
    ],
    prefix: 'KiberKitsune/',
  },
  {
    main: 'jdUXLZExosA_sniqbx.jpg',
    photos: [
      'jdUXLZExosA_sniqbx.jpg',
      'G7uhTWwYQl4_pkxgkd.jpg',
      'qmg42pigvho_ncen79.jpg',
      'Ep3OtwZew_o_ofkd39.jpg',
      'IfPo3i4AFDw_vdnard.jpg',
      'ASbph-NRhMY_kbe5s3.jpg',
    ],
    prefix: 'hotReport/',
  },
  {
    main: 'yforXyNfbZU_thl9c8.jpg',
    photos: [
      'rdcExsrxlQ8_yycyqn.jpg',
      'WkRf4e8Tq5I_tpbkuu.jpg',
      'yforXyNfbZU_thl9c8.jpg',
      'fBe-6jlkGlU_eqzw1w.jpg',
      'OymMNm-FBnY_e0yptw.jpg',
    ],
    prefix: 'melon/',
  },
  {
    main: 'JKfssRRCKus_hznwco.jpg',
    photos: [
      'JKfssRRCKus_hznwco.jpg',
      'dV5jqtIQ178_oitbi7.jpg',
      'D3hIybl8CGY_k9sbi9.jpg',
      'gAj9yRoAX8Y_gkvgai.jpg',
      'stnCzFJCcIM_vre72e.jpg',
      'zBIreXt7EN4_mprkxv.jpg',
    ],
    prefix: 'plastic/',
  },
  {
    main: 'PPAxH8GNOhY_lykacc.jpg',
    photos: [
      'PPAxH8GNOhY_lykacc.jpg',
      'UeHswxhOugk_cmznsn.jpg',
      '_mC-McCVxUM_ktujrx.jpg',
      'gwNwiSnQPV8_nzvp6y.jpg',
      'YJRhdT4Z_qY_agculf.jpg',
      '5z5hPASKRKc_m9msio.jpg',
    ],
    prefix: 'space/',
  },
]
