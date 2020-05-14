import authenticate from './authenticate';
import isSensorAvailable from './isSensorAvailable';
import release from './release';

const BIOMETRIC_STRONG = 15;
const BIOMETRIC_WEAK = 255;
const DEVICE_CREDENTIAL = 32768;

export default {
  authenticate,
  release,
  isSensorAvailable,
  BIOMETRIC_STRONG,
  BIOMETRIC_WEAK,
  DEVICE_CREDENTIAL,
};
