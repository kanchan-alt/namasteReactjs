import React from 'react';
import ReactDOM from 'react-dom/client'; 
 
// Header- logo and nav link
const Header = ()=> {
   return (
      <div className='header'>
         <div className='logo-container'>
            <img
            className='logo'
            src='https://img.freepik.com/premium-vector/fast-food-logo-template-design-vector_20029-840.jpg'/>
            </div>

         <div className='nav-items'>
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>

    
   )
}



const RestaurantCard = (props) => {
   const {restaurantData} = props
   console.log(restaurantData.info);
   const {name, cuisines, avgRating } = restaurantData?.info
   const {deliveryTime }= restaurantData?.info?.sla 
   return (
      <div className='restaurant-card' style={{backgroundColor:"#cccccc"}}>
         <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ restaurantData.info.cloudinaryImageId }alt="restaurant-logo" className='restaurant-logo'/>
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating} stars</h4>
         <h4>{deliveryTime} minutes</h4>
      </div>
   )
}
const resturantList = 
   [
      {
      "info": {
      "id": "7078",
      "name": "Cafe Coffee Day",
      "cloudinaryImageId": "b925459fbc1faf59f02f7289eb079a74",
      "locality": "Karthik Nagar",
      "areaName": "KR Puram",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Burgers",
      "Ice Cream",
      "Bakery",
      "Fast Food"
      ],
      "avgRating": 4.1,
      "feeDetails": {
      "restaurantId": "7078",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 4400
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 4400
      },
      "parentId": "1",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "22 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-10-17 23:30:00",
      "opened": true
      },
      "badges": {
      "textExtendedBadges": [
      {
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available",
      "fontColor": "#7E808C"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {
      "badgeObject": [
      {
      "attributes": {
      "description": "",
      "fontColor": "#7E808C",
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available"
      }
      }
      ]
      }
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "text": "BENEFITS",
      "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-a94636a5-4e10-4c5c-b32d-40557eafa085"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-karthik-nagar-kr-puram-bangalore-7078",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "21155",
      "name": "Hyderabad Biryaani House",
      "cloudinaryImageId": "lkn0extnvjywfts4q7gw",
      "locality": "Murugeshpalya",
      "areaName": "Murugeshpalya",
      "costForTwo": "₹600 for two",
      "cuisines": [
      "North Indian",
      "Chinese",
      "Hyderabadi",
      "Biryani",
      "Andhra"
      ],
      "avgRating": 4,
      "feeDetails": {
      "restaurantId": "21155",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 5700
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 5700
      },
      "parentId": "2403",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 4.8,
      "serviceability": "SERVICEABLE",
      "slaString": "22 mins",
      "lastMileTravelString": "4.8 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-10-18 01:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "text": "BENEFITS",
      "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-a94636a5-4e10-4c5c-b32d-40557eafa085"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/hyderabad-biryaani-house-murugeshpalya-bangalore-21155",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "237665",
      "name": "McDonald's",
      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
      "locality": "Preatige Tech park",
      "areaName": "Kadubeesanahalli",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
      ],
      "avgRating": 4.2,
      "feeDetails": {
      "restaurantId": "237665",
      "fees": [
      {
      "name": "BASE_TIME"
      },
      {
      "name": "BASE_DISTANCE",
      "fee": 4400
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 4400
      },
      "parentId": "630",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
      "deliveryTime": 23,
      "lastMileTravel": 3.5,
      "serviceability": "SERVICEABLE",
      "slaString": "23 mins",
      "lastMileTravelString": "3.5 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-10-18 01:00:00",
      "opened": true
      },
      "badges": {
      "textExtendedBadges": [
      {
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available",
      "fontColor": "#7E808C"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {
      "badgeObject": [
      {
      "attributes": {
      "description": "",
      "fontColor": "#7E808C",
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available"
      }
      }
      ]
      }
      }
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "text": "BENEFITS",
      "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-a94636a5-4e10-4c5c-b32d-40557eafa085"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-preatige-tech-park-kadubeesanahalli-bangalore-237665",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "10866",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Munnekolalu Village",
      "areaName": "Marathahalli",
      "costForTwo": "₹350 for two",
      "cuisines": [
      "Pizzas"
      ],
      "avgRating": 3.7,
      "feeDetails": {
      "restaurantId": "10866",
      "fees": [
      {
      "name": "BASE_TIME"
      },
      {
      "name": "BASE_DISTANCE",
      "fee": 3600
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3600
      },
      "parentId": "721",
      "avgRatingString": "3.7",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 2.7,
      "serviceability": "SERVICEABLE",
      "slaString": "22 mins",
      "lastMileTravelString": "2.7 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-10-18 02:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "text": "BENEFITS",
      "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-a94636a5-4e10-4c5c-b32d-40557eafa085"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-munnekolalu-village-marathahalli-bangalore-10866",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "43910",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "Marathahalli",
      "areaName": "Marathahalli",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
      ],
      "avgRating": 4,
      "feeDetails": {
      "restaurantId": "43910",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 4100
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 4100
      },
      "parentId": "547",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 26,
      "lastMileTravel": 1.8,
      "serviceability": "SERVICEABLE",
      "slaString": "26 mins",
      "lastMileTravelString": "1.8 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-10-18 01:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "text": "BENEFITS",
      "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-a94636a5-4e10-4c5c-b32d-40557eafa085"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-marathahalli-bangalore-43910",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "581461",
      "name": "Cheesecakes By CakeZone",
      "cloudinaryImageId": "41ed60ce5ed96b212bdf9c45a09b7e92",
      "locality": "Bhoganhalli",
      "areaName": "Devarabisanahalli",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "Desserts",
      "Bakery"
      ],
      "avgRating": 4.3,
      "veg": true,
      "feeDetails": {
      "restaurantId": "581461",
      "fees": [
      {
      "name": "BASE_TIME"
      },
      {
      "name": "BASE_DISTANCE",
      "fee": 3600
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3600
      },
      "parentId": "348057",
      "avgRatingString": "4.3",
      "totalRatingsString": "50+",
      "sla": {
      "deliveryTime": 18,
      "lastMileTravel": 2.7,
      "serviceability": "SERVICEABLE",
      "slaString": "18 mins",
      "lastMileTravelString": "2.7 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-10-17 23:59:00",
      "opened": true
      },
      "badges": {
      "imageBadges": [
      {
      "imageId": "newg.png",
      "description": "Gourmet"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {
      "badgeObject": [
      {
      "attributes": {
      "description": "Gourmet",
      "imageId": "newg.png"
      }
      }
      ]
      },
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "text": "BENEFITS",
      "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-a94636a5-4e10-4c5c-b32d-40557eafa085"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/cheesecakes-by-cakezone-bhoganhalli-devarabisanahalli-bangalore-581461",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "445762",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "Kote MR Plaza",
      "areaName": "Sanjay Nagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
      "Burgers",
      "American"
      ],
      "avgRating": 4.1,
      "feeDetails": {
      "restaurantId": "445762",
      "fees": [
      {
      "name": "BASE_TIME"
      },
      {
      "name": "BASE_DISTANCE",
      "fee": 4400
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 4400
      },
      "parentId": "166",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 26,
      "lastMileTravel": 3.6,
      "serviceability": "SERVICEABLE",
      "slaString": "26 mins",
      "lastMileTravelString": "3.6 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-10-18 03:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "EVERY ITEM",
      "subHeader": "@ ₹129"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "text": "BENEFITS",
      "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-a94636a5-4e10-4c5c-b32d-40557eafa085"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-kote-mr-plaza-sanjay-nagar-bangalore-445762",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "1187",
      "name": "Baskin Robbins - Ice Cream Desserts",
      "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
      "locality": "Anand Nagar",
      "areaName": "Marathahalli",
      "costForTwo": "₹250 for two",
      "cuisines": [
      "Desserts",
      "Ice Cream"
      ],
      "avgRating": 4.4,
      "veg": true,
      "feeDetails": {
      "restaurantId": "1187",
      "fees": [
      {
      "name": "BASE_TIME"
      },
      {
      "name": "BASE_DISTANCE",
      "fee": 3600
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3600
      },
      "parentId": "5588",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
      "deliveryTime": 16,
      "lastMileTravel": 1.4,
      "serviceability": "SERVICEABLE",
      "slaString": "16 mins",
      "lastMileTravelString": "1.4 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-10-18 05:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "D",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "text": "BENEFITS",
      "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-a94636a5-4e10-4c5c-b32d-40557eafa085"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-anand-nagar-marathahalli-bangalore-1187",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
      "info": {
      "id": "725899",
      "name": "BOX8 - Desi Meals",
      "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
      "locality": "Marathahalli Main Rd",
      "areaName": "Yemalur",
      "costForTwo": "₹250 for two",
      "cuisines": [
      "North Indian",
      "Biryani",
      "Thalis",
      "Home Food"
      ],
      "avgRating": 4,
      "feeDetails": {
      "restaurantId": "725899",
      "fees": [
      {
      "name": "BASE_TIME"
      },
      {
      "name": "BASE_DISTANCE",
      "fee": 3600
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3600
      },
      "parentId": "10655",
      "avgRatingString": "4.0",
      "totalRatingsString": "50+",
      "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 0.8,
      "serviceability": "SERVICEABLE",
      "slaString": "17-27 mins",
      "lastMileTravelString": "0.8 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-10-18 02:00:00",
      "opened": true
      },
      "badges": {
      "textExtendedBadges": [
      {
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available",
      "fontColor": "#7E808C"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {
      "badgeObject": [
      {
      "attributes": {
      "description": "",
      "fontColor": "#7E808C",
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available"
      }
      }
      ]
      }
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "text": "BENEFITS",
      "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
      "title": {},
      "subTitle": {},
      "message": {},
      "customIcon": {}
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
      "context": "seo-data-a94636a5-4e10-4c5c-b32d-40557eafa085"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/box8-desi-meals-marathahalli-main-rd-yemalur-bangalore-725899",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }
      ]

// body
const Body = ()=> {
   return(
      <div className='body'>
         <div className='search'>Search</div>
         <div className='restaurant-container'>
            <RestaurantCard  restaurantData ={resturantList[0]}/>
            {resturantList.map((restaurant )=>(<RestaurantCard key={restaurant.info.id} restaurantData={restaurant}/>))}
                  
         </div>
      </div>
   )
}





const AppLayout = ()=> {
   return(
      <div className="app">
         <Header/>
         <Body/>
         
      </div>
   )
}



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>);

