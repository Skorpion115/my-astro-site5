gtag("consent", "default", {
    ad_user_data: "denied",
    ad_personalization: "denied",
    ad_storage: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });

  dataLayer.push({
    "event": "default_consent"
  });

  gtag("js", new Date());
  // Google Remarketing blockieren

  window.gatpadsallowed = false;
  __cmp("getVendorConsents", null, function (x, y) {
    if (
      "customVendorConsents" in x &&
      "s1" in x.customVendorConsents &&
      x.customVendorConsents["s1"]
    ) {
      window.gatpadsallowed = true;
    }
  });
  gtag("set", "allow_ad_personalization_signals", false);

  gtag("config", "GT-5TG3DK3");

  gtag("config", "GT-MR4MFC6");