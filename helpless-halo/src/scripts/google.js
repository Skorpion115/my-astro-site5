window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

window.gatpadsallowed = false;
 __cmp('getVendorConsents',null,function (x,y)
       {
        if("customVendorConsents" in x && "s1" in x.customVendorConsents && x.customVendorConsents["s1"])
        {
         window.gatpadsallowed = true;
        }
       });
gtag('set', 'allow_ad_personalization_signals', window.gatpadsallowed);

gtag('config', 'GT-5TG3DK3');

gtag('config', 'GT-MR4MFC6');

gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied'
});

dataLayer.push({
  'event': 'default_consent'
});