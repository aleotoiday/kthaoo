var aleoo = JSON.parse($response.body);
aleoo.subscriber.entitlements = {
  "Gold": {
    "expires_date": "2099-01-01T09:09:09Z",
    "product_identifier": "locket_6000_1y",
    "purchase_date": "2008-08-23T02:33:33Z"
  }
};
aleoo.subscriber.original_purchase_date = "2008-08-23T02:33:33Z";
aleoo.subscriber.subscriptions = {
  "locket_6000_1y": {
    "expires_date": "2099-01-01T09:09:09Z",
    "original_purchase_date": "2008-08-23T02:33:33Z",
    "purchase_date": "2008-08-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(aleoo) });
