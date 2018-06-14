import helmet from 'helmet';

// * XSS Protection
// * Prevent Clickingjacking using X-Frame-Options
// * Enforcing all connections to be HTTPS
// * Setting a Context-Security-Policy header
// * Disabling the X-Powered-By header so attackers can’t narrow down their attacks to specific software
const HELMET = helmet();

export default HELMET;
