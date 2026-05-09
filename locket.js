const mapping = {
  'Locket': ['Gold'],
  'VSCO': ['pro']
};

var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],aleoo=JSON.parse($response.body);aleoo.Attention="hihi";var kthaoo={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-01-01T01:05:16Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2012-03-25T01:05:19Z",purchase_date:"2012-03-25T01:05:19Z",store:"app_store"},kthao={grace_period_expires_date:null,purchase_date:"2012-03-25T01:05:19Z",product_identifier:"com.kthaoo.premium.yearly",expires_date:"2099-01-01T01:05:16Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(kthao.product_identifier=s,aleoo.subscriber.subscriptions[s]=kthaoo):aleoo.subscriber.subscriptions["com.kthaoo.premium.yearly"]=kthaoo,aleoo.subscriber.entitlements[e]=kthao}else aleoo.subscriber.subscriptions["com.kthaoo.premium.yearly"]=kthaoo,aleoo.subscriber.entitlements.pro=kthao;$done({body:JSON.stringify(aleoo)});
