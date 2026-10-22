---
title: SKIN
tagline: A beauty price comparison app, backed on Dragons' Den, that shows users the best prices for the products on their "virtual beauty shelf".
role: Backend & full-stack development
tech: [Laravel, MySQL, Typesense, Redis, AWS Bedrock, AWS S3, Elastic Beanstalk, Docker, Pest, Sentry]
order: 1
status: live
links:
  - label: theskin.app
    href: https://theskin.app
  - label: App Store
    href: https://apps.apple.com/gb/app/skin/id1522723156
  - label: Google Play
    href: https://play.google.com/store/apps/details?id=app.theskin
---

SKIN is a UK app that helps people find the best prices for the beauty products they already use. I built and maintained the **Laravel API** behind its Flutter mobile app.

## Price-drop notifications

I built the notification feature. When any tracked retailer lowers the price of a product on a user's shelf, the user gets an alert, and the deal lands in their in-app notification feed with the retailer, the product and the discount.

![SKIN notification feed listing price drops from retailers such as LOOKFANTASTIC and Cosmetify](../../assets/skin/price-drop-alerts.png)

## AI shopping assistant

I led the **AI-powered in-app assistant** on **AWS Bedrock**. Users chat with it, and it recommends products through conversation. I owned it end to end, from the backend design to the mobile UI.

## Also built

- Product data pulled from **multiple affiliate retailers**, with fast search powered by **Typesense**.
- User-facing features such as shelf stats and price comparison, plus an **internal admin panel** the business team uses to manage content, analytics and campaigns.

![Shelf stats showing the total potential saving across a user's products](../../assets/skin/shelf-stats.png)
![Browse screen with product search and categories](../../assets/skin/browse-search.png)
![Product page comparing prices across retailers](../../assets/skin/compare-prices.png)
