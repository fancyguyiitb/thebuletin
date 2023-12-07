import React from "react";
import axios from "axios";
import "./styles.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import NewsCard from "../../components/newsCard/NewsCard";
import { useState, useEffect } from "react";
import cardPlaceholder from "../../assets/placeholder286x180.png";
import CardCarousel from "../../components/cardCarousel/CardCarousel";
import TopPicks from "../../components/topPicks/TopPicks";
import BusinessNewsComponent from "../../components/businessNewsComponent/BusinessNewsComponent";
import SportsAndTechNewsComponent from "../../components/sportsAndTechNewsComponent/SportsAndTechNewsComponent";
import MovieNewsComponent from "../../components/movieNewsComponent/MovieNewsComponent";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const tempArray = [
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Mohammad Haris",
      title: "IREDA IPO Listing Next Week: What Does GMP Suggest? - News18",
      description:
        "Unlisted shares of IREDA are currently trading Rs 10 higher in the grey market, which is a 31.25 per cent listing gain from the public issue",
      url: "https://www.news18.com/business/ireda-ipo-listing-next-week-what-does-gmp-suggest-8677833.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2023/09/mahesh-3-169520702916x9.jpg",
      publishedAt: "2023-11-27T12:30:50Z",
      content:
        "IREDA IPO, which saw a whopping 39 times subscription last week, is likely to be listed on the BSE and the NSE on December 4. According to market observers, the grey market premium (GMP) of the India… [+3034 chars]",
    },
    {
      source: {
        id: null,
        name: "Team-BHP",
      },
      author: "Tushar Kelshikar",
      title: "Kia Seltos receives a price cut of Rs 2,000 - Team-BHP",
      description:
        "Kia has revised the prices of the Seltos. Select variants of the SUV get a minor price cut of Rs 2,000. Prices of the 1.5L Petrol MT HTX, 1.5L Turbo Petrol iMT HTX+, 1.5L Turbo Petrol DCT GTX+(S) and the 1.5L Turbo Petrol DCT GTX+ have been reduced by Rs 2,00…",
      url: "https://www.team-bhp.com/news/kia-seltos-receives-price-cut-rs-2000",
      urlToImage:
        "https://www.team-bhp.com/sites/default/files/styles/large/public/Seltos GTX Plus (S)_0.png",
      publishedAt: "2023-11-27T11:00:16Z",
      content:
        "Kia has revised the prices of the Seltos. Select variants of the SUV get a minor price cut of Rs 2,000.\r\nPrices of the 1.5L Petrol MT HTX, 1.5L Turbo Petrol iMT HTX+, 1.5L Turbo Petrol DCT GTX+(S) an… [+566 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Sunil Shankar Matkar",
      title:
        "Trade setup for Tuesday: 15 things to know before opening bell - Moneycontrol",
      description:
        "A sustainable up move above 19,900 can take the Nifty towards all-time highs but a decisive move below 19,600 will likely open a near-term downward correction",
      url: "https://www.moneycontrol.com/news/business/markets/trade-setup-for-tuesday-15-things-to-know-before-opening-bell-7-11811891.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/10/sensex1-770x433.jpg",
      publishedAt: "2023-11-27T11:00:08Z",
      content:
        "The market, which has remained range-bound for more than a week now, can do with a trigger or two to break out of the 19,620-19,875 range. If the Nifty breaks on the higher side, 19,900-20,000 can't … [+8215 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        '"Not Involved In Construction Of Uttarakhand Tunnel": Adani Group - NDTV',
      description:
        "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      url: "https://www.ndtv.com",
      urlToImage: "https://cdn.ndtv.com/common/images/ogndtv.png",
      publishedAt: "2023-11-27T10:51:49Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Zee Business",
      },
      author: "ZeeBiz WebTeam",
      title:
        "Tata Technologies IPO allotment status: How to check online on BSE, Link Intime - Zee Business",
      description:
        "Tata Technologies IPO allotment status check online: The quota for Qualified Institutional Buyers (QIBs) received 203.41 times the subscription, while the category for Retail Individual Investors (RIIs) got subscribed 16.5 times.",
      url: "https://www.zeebiz.com/markets/ipo/news-tata-technologies-ipo-allotment-date-status-check-online-linkintime-bse-nse-listing-date-tata-group-tata-motors-susbcription-266146",
      urlToImage:
        "https://cdn.zeebiz.com/sites/default/files/2023/11/27/270438-madhya-pradesh-weather-today-1.jpg",
      publishedAt: "2023-11-27T10:07:05Z",
      content:
        "Tata Technologies IPO allotment date, Tata Technologies IPO allotment status check online: The Rs 3,042.5 crore IPO of Tata Technologies, which provides engineering and product development digital se… [+2202 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Abhinav Kaul",
      title:
        "Investors strike it rich as first sovereign gold bonds come up for maturity - Moneycontrol",
      description:
        "The first tranche of Sovereign Gold Bonds, which are government securities denominated in grams of gold, are all set to see its first redemption on November 30. Investors holding SGB 2015-I till maturity will stand to gain a CAGR of 10.88%.",
      url: "https://www.moneycontrol.com/news/business/personal-finance/investors-strike-gold-as-first-sovereign-gold-bonds-come-up-for-maturity-11816441.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/10/Gold_-770x433.jpg",
      publishedAt: "2023-11-27T09:52:00Z",
      content:
        "Investors in the first tranche of sovereign gold bonds (SGBs) that are coming up for maturity have struck gold. When the issue matures on November 30, investors would have made 10.88 percent CAGR ret… [+3454 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today News Desk",
      title:
        "Gautam Singhania forced me to climb Tirupati steps with no food, water: Nawaz Modi - India Today",
      description:
        "In a recently surfaced audio clip, Raymond Group chairman Gautam Singhania’s estranged wife Nawaz Modi is heard claiming that he forced her to climb up the steps to the Tirupati temple without food or water.",
      url: "https://www.indiatoday.in/india/story/gautam-singhania-forced-me-to-climb-tirupati-steps-with-no-food-water-nawaz-modi-2468084-2023-11-27",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/nawaz-modi-singhania-with-estranged-husband-gautam-singhania-275553360-16x9_0.jpeg?VersionId=1zSbdctoG4XLJBC58IOedpRjZmlEMfVm",
      publishedAt: "2023-11-27T09:49:33Z",
      content:
        "Amidst the high-profile divorce proceedings between Raymond Group MD Gautam Singhania and his estranged wife Nawaz Modi, a new audio clip has surfaced in which Modi accuses Singhania of forcing her t… [+1630 chars]",
    },
    {
      source: {
        id: null,
        name: "Gadgets360.com",
      },
      author: "Manas Mitul, Siddharth Suvarna",
      title:
        "Bengaluru Airport to Begin Passenger Trials of Full Body Scanners in December: Report - Gadgets 360",
      description:
        "Airport security in India asks passengers to remove all personal gadgets like mobile phones, tablets and laptops from their hand baggage and place them separately in trays for a scan. While this is a necessary step to ensure that the devices are safe to be ta…",
      url: "https://www.gadgets360.com/transportation/news/bengaluru-kempegowda-international-airport-ctx-machine-full-body-scan-electronic-devices-tray-report-4609753",
      urlToImage:
        "https://i.gadgets360cdn.com/large/bengaluru_airport_1701075783766.png",
      publishedAt: "2023-11-27T09:34:35Z",
      content:
        "Airport security in India asks passengers to remove all personal gadgets like mobile phones, tablets, and laptops from their hand baggage and place them separately in trays for a scan. While this is … [+2820 chars]",
    },
    {
      source: {
        id: null,
        name: "GaadiWaadi.com",
      },
      author: "Surendhar M",
      title:
        "4 Upcoming Royal Enfield Bikes To Wait For In 2024 In India - GaadiWaadi.com",
      description:
        "In this list, we have brought you a rundown of the possible upcoming Royal Enfield bikes in the year 2024 in India",
      url: "https://gaadiwaadi.com/4-upcoming-royal-enfield-bikes-to-wait-for-in-2024-in-india/",
      urlToImage:
        "https://gaadiwaadi.com/wp-content/uploads/2023/11/royal-enfield-shotgun-650-5.jpg",
      publishedAt: "2023-11-27T09:20:10Z",
      content:
        "In this list, we have brought you a rundown of the possible upcoming Royal Enfield bikes in the year 2024 in India\r\nRoyal Enfield announced prices of the Super Meteor 650 earlier this year and the Hi… [+2112 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "MapmyIndia board gives nod to raise funds up to ₹500 crore via QIP route | Mint - Mint",
      description:
        "The fund raise would be subject to the receipt of necessary approvals from the company's shareholders, and regulatory and statutory bodies, MapmyIndia owner CE Info Systems said.",
      url: "https://www.livemint.com/companies/news/mapmyindia-board-gives-nod-to-raise-funds-up-to-rs-500-crore-via-qip-route-11701075281376.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/11/27/1600x900/MapmyIndia_IPO_allotment_date_1639620989290_1701076393033.PNG",
      publishedAt: "2023-11-27T09:13:53Z",
      content:
        "The board of directors of MapmyIndia, in a meeting held on November 27, gave its nod to the proposal for raising funds up to 500 crore via qualified institutional placement (QIP) route, a regulatory … [+1930 chars]",
    },
    {
      source: {
        id: null,
        name: "CarToq.com",
      },
      author: "Shantonil Nag",
      title: "Skoda Kushaq and Slavia Elegance Editions launched - CarToq.com",
      description:
        "It’s raining special edition models from Volkswagen and Skoda. Following the launch of the Sound Edition models for the Taigun and Virtus, Skoda Volkswagen Auto India Limited has unveiled the new Elegance Edition for two popular Skoda models, the Kushaq and S…",
      url: "https://www.cartoq.com/skoda-kushaq-and-slavia-elegance-editions-launched/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2023/11/Kushaq-Elegance-featured.jpg",
      publishedAt: "2023-11-27T09:11:34Z",
      content:
        "Its raining special edition models from Volkswagen and Skoda. Following the launch of the Sound Edition models for the Taigun and Virtus, Skoda Volkswagen Auto India Limited has unveiled the new Eleg… [+2229 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Sale Of Houses Over Rs 4 Crore Doubles, Most Growth Seen In This City - NDTV",
      description:
        "Sale of luxury homes worth Rs 4 crore and more jumped 97 per cent year-on-year in the seven major cities of India between January and September 2023, a report from real estate firm CBRE said today.",
      url: "https://www.ndtv.com/india-news/sale-of-houses-worth-over-rs-4-crore-up-by-97-delhi-ncr-accounts-for-4609734",
      urlToImage:
        "https://c.ndtvimg.com/2023-11/cqfp8pm8_delhi-construction-istock-650_650x400_27_November_23.jpg",
      publishedAt: "2023-11-27T09:05:16Z",
      content:
        "Delhi-NCR accounted for 37 per cent of the sales.\r\nNew Delhi: Sale of luxury homes worth Rs 4 crore and more jumped 97 per cent year-on-year in the seven major cities of India between January and Sep… [+1913 chars]",
    },
    {
      source: {
        id: "the-hindu",
        name: "The Hindu",
      },
      author: "The Hindu",
      title:
        "Google in talks to invest $4 million in BharatGPT-maker - The Hindu",
      description: null,
      url: "https://www.thehindu.com/sci-tech/technology/google-in-talks-to-invest-4-million-in-bharatgpt-maker/article67579209.ece",
      urlToImage: null,
      publishedAt: "2023-11-27T08:50:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "FXStreet",
      },
      author: "Akhtar Faruqui",
      title:
        "Gold Price Forecast: XAU/USD hovers above $2,010 on weaker US Dollar - FXStreet",
      description:
        "Gold price maintains its position above $2,010 per troy ounce during the European session on Monday.",
      url: "https://www.fxstreet.com/news/gold-price-forecast-xau-usd-hovers-above-2-010-on-weaker-us-dollar-202311270850",
      urlToImage:
        "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/safe-investment-gm147311616-17537479_Large.jpg",
      publishedAt: "2023-11-27T08:50:00Z",
      content:
        "<ul><li>Gold price extends gains as investors take caution ahead of the skew of US data.</li><li>China's industrial profits declined by 7.8% could dampen the positive sentiment arising from the PBoC … [+1731 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title:
        "Honasa block deal: Mamaearth employees may sell Rs 150-cr ESOPs this week - Moneycontrol",
      description:
        "The block deal is likely to be executed at 5-7 percent discount to market price of Rs 477.10",
      url: "https://www.moneycontrol.com/news/business/stocks/honasa-block-deal-mamaearth-employees-may-sell-rs-150-cr-esops-this-week-11815831.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/05/ghazal-Alagh-Honasa-770x433.jpg",
      publishedAt: "2023-11-27T08:45:27Z",
      content:
        "Employees of Mamaearth parent Honasa Consumer Care are likely to sell shares worth Rs 150 crore in a block deal this week, sources told CNBC-Awaaz. The block deal is likely to be executed at a 5-7 pe… [+1545 chars]",
    },
    {
      source: {
        id: null,
        name: "Motoroctane.com",
      },
      author: "MotorOctane",
      title:
        "7 Cars with diesel engines under Rs 15 lakh » MotorOctane - MotorOctane",
      description: null,
      url: "https://motoroctane.com/news/265259-7-cars-with-diesel-engines-under-rs-15-lakh",
      urlToImage: null,
      publishedAt: "2023-11-27T08:30:55Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "CNBCTV18",
      },
      author: "Meghna Sen",
      title:
        "Maruti Suzuki to hike prices of its cars from January 2024 due to increased cost pressure - CNBCTV18",
      description:
        "Maruti Suzuki will hike prices of its cars on account of increased cost pressure driven by overall inflation and increased commodity prices. This price increase shall vary across models, the company said in a statement.",
      url: "https://www.cnbctv18.com/business/companies/maruti-suzuki-announces-price-hike-for-all-cars-from-january-2024-18416081.htm",
      urlToImage:
        "https://images.cnbctv18.com/wp-content/uploads/2019/05/2019-05-21T100448Z_2_LYNXNPEF4K0HL_RTROPTP_4_MARUTI-SUZUKI-IN-RESULTS.jpg",
      publishedAt: "2023-11-27T08:15:25Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Entrackr",
      },
      author: "Entrackr",
      title:
        "AstroTalk posts Rs 283 Cr revenue in FY23; remains profitable - Entrackr",
      description: null,
      url: "https://entrackr.com/2023/11/astrotalk-posts-rs-283-cr-revenue-in-fy23-remains-profitable/",
      urlToImage: null,
      publishedAt: "2023-11-27T08:08:48Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title:
        "BYJU’S elevates Jiny Thattil as CTO following incumbent Anil Goel's exit - Moneycontrol",
      description:
        "In a statement, the company said Thattil will take over reins from Anil Goel who is leaving the company after three years as CTO.",
      url: "https://www.moneycontrol.com/news/business/startup/byjus-elevates-jiny-thattil-as-cto-following-incumbent-anil-goels-exit-11815951.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/11/Siddharth-Maheshwari-1-770x433.jpg",
      publishedAt: "2023-11-27T07:47:57Z",
      content:
        "The parent entity of edtech company Byjus, Think &amp; Learn, on November 27, said it elevated Jiny Thattil as its Chief Technology Officer at a time when the company is battling troubles on various … [+3601 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title:
        "Mark Mobius to shift base to Dubai, focus on AI investments; bullish on India - Moneycontrol",
      description:
        "When asked about arguably the best company that is manufacturing AI tools for the world, Mobius cited Amazon as the best example.",
      url: "https://www.moneycontrol.com/news/business/markets/mark-mobius-to-shift-base-to-dubai-focus-on-ai-investments-bullish-on-india-11806541.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/11/Mark-Mobius-770x433.jpg",
      publishedAt: "2023-11-27T07:47:20Z",
      content:
        "Emerging markets guru Mark Mobius, the co-founder of Mobius Capital Partners, has decided to step down and establish a base in Dubai to invest in technology and AI-related stocks in emerging markets … [+2157 chars]",
    },
  ];
  //creating loading state
  const [loading, setLoading] = useState(false);
  //creating articles state
  const [articles, setArticles] = useState([
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Mohammad Haris",
      title: "IREDA IPO Listing Next Week: What Does GMP Suggest? - News18",
      description:
        "Unlisted shares of IREDA are currently trading Rs 10 higher in the grey market, which is a 31.25 per cent listing gain from the public issue",
      url: "https://www.news18.com/business/ireda-ipo-listing-next-week-what-does-gmp-suggest-8677833.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2023/09/mahesh-3-169520702916x9.jpg",
      publishedAt: "2023-11-27T12:30:50Z",
      content:
        "IREDA IPO, which saw a whopping 39 times subscription last week, is likely to be listed on the BSE and the NSE on December 4. According to market observers, the grey market premium (GMP) of the India… [+3034 chars]",
    },
    {
      source: {
        id: null,
        name: "Team-BHP",
      },
      author: "Tushar Kelshikar",
      title: "Kia Seltos receives a price cut of Rs 2,000 - Team-BHP",
      description:
        "Kia has revised the prices of the Seltos. Select variants of the SUV get a minor price cut of Rs 2,000. Prices of the 1.5L Petrol MT HTX, 1.5L Turbo Petrol iMT HTX+, 1.5L Turbo Petrol DCT GTX+(S) and the 1.5L Turbo Petrol DCT GTX+ have been reduced by Rs 2,00…",
      url: "https://www.team-bhp.com/news/kia-seltos-receives-price-cut-rs-2000",
      urlToImage:
        "https://www.team-bhp.com/sites/default/files/styles/large/public/Seltos GTX Plus (S)_0.png",
      publishedAt: "2023-11-27T11:00:16Z",
      content:
        "Kia has revised the prices of the Seltos. Select variants of the SUV get a minor price cut of Rs 2,000.\r\nPrices of the 1.5L Petrol MT HTX, 1.5L Turbo Petrol iMT HTX+, 1.5L Turbo Petrol DCT GTX+(S) an… [+566 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Sunil Shankar Matkar",
      title:
        "Trade setup for Tuesday: 15 things to know before opening bell - Moneycontrol",
      description:
        "A sustainable up move above 19,900 can take the Nifty towards all-time highs but a decisive move below 19,600 will likely open a near-term downward correction",
      url: "https://www.moneycontrol.com/news/business/markets/trade-setup-for-tuesday-15-things-to-know-before-opening-bell-7-11811891.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/10/sensex1-770x433.jpg",
      publishedAt: "2023-11-27T11:00:08Z",
      content:
        "The market, which has remained range-bound for more than a week now, can do with a trigger or two to break out of the 19,620-19,875 range. If the Nifty breaks on the higher side, 19,900-20,000 can't … [+8215 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        '"Not Involved In Construction Of Uttarakhand Tunnel": Adani Group - NDTV',
      description:
        "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      url: "https://www.ndtv.com",
      urlToImage: "https://cdn.ndtv.com/common/images/ogndtv.png",
      publishedAt: "2023-11-27T10:51:49Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Zee Business",
      },
      author: "ZeeBiz WebTeam",
      title:
        "Tata Technologies IPO allotment status: How to check online on BSE, Link Intime - Zee Business",
      description:
        "Tata Technologies IPO allotment status check online: The quota for Qualified Institutional Buyers (QIBs) received 203.41 times the subscription, while the category for Retail Individual Investors (RIIs) got subscribed 16.5 times.",
      url: "https://www.zeebiz.com/markets/ipo/news-tata-technologies-ipo-allotment-date-status-check-online-linkintime-bse-nse-listing-date-tata-group-tata-motors-susbcription-266146",
      urlToImage:
        "https://cdn.zeebiz.com/sites/default/files/2023/11/27/270438-madhya-pradesh-weather-today-1.jpg",
      publishedAt: "2023-11-27T10:07:05Z",
      content:
        "Tata Technologies IPO allotment date, Tata Technologies IPO allotment status check online: The Rs 3,042.5 crore IPO of Tata Technologies, which provides engineering and product development digital se… [+2202 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Abhinav Kaul",
      title:
        "Investors strike it rich as first sovereign gold bonds come up for maturity - Moneycontrol",
      description:
        "The first tranche of Sovereign Gold Bonds, which are government securities denominated in grams of gold, are all set to see its first redemption on November 30. Investors holding SGB 2015-I till maturity will stand to gain a CAGR of 10.88%.",
      url: "https://www.moneycontrol.com/news/business/personal-finance/investors-strike-gold-as-first-sovereign-gold-bonds-come-up-for-maturity-11816441.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/10/Gold_-770x433.jpg",
      publishedAt: "2023-11-27T09:52:00Z",
      content:
        "Investors in the first tranche of sovereign gold bonds (SGBs) that are coming up for maturity have struck gold. When the issue matures on November 30, investors would have made 10.88 percent CAGR ret… [+3454 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today News Desk",
      title:
        "Gautam Singhania forced me to climb Tirupati steps with no food, water: Nawaz Modi - India Today",
      description:
        "In a recently surfaced audio clip, Raymond Group chairman Gautam Singhania’s estranged wife Nawaz Modi is heard claiming that he forced her to climb up the steps to the Tirupati temple without food or water.",
      url: "https://www.indiatoday.in/india/story/gautam-singhania-forced-me-to-climb-tirupati-steps-with-no-food-water-nawaz-modi-2468084-2023-11-27",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/nawaz-modi-singhania-with-estranged-husband-gautam-singhania-275553360-16x9_0.jpeg?VersionId=1zSbdctoG4XLJBC58IOedpRjZmlEMfVm",
      publishedAt: "2023-11-27T09:49:33Z",
      content:
        "Amidst the high-profile divorce proceedings between Raymond Group MD Gautam Singhania and his estranged wife Nawaz Modi, a new audio clip has surfaced in which Modi accuses Singhania of forcing her t… [+1630 chars]",
    },
    {
      source: {
        id: null,
        name: "Gadgets360.com",
      },
      author: "Manas Mitul, Siddharth Suvarna",
      title:
        "Bengaluru Airport to Begin Passenger Trials of Full Body Scanners in December: Report - Gadgets 360",
      description:
        "Airport security in India asks passengers to remove all personal gadgets like mobile phones, tablets and laptops from their hand baggage and place them separately in trays for a scan. While this is a necessary step to ensure that the devices are safe to be ta…",
      url: "https://www.gadgets360.com/transportation/news/bengaluru-kempegowda-international-airport-ctx-machine-full-body-scan-electronic-devices-tray-report-4609753",
      urlToImage:
        "https://i.gadgets360cdn.com/large/bengaluru_airport_1701075783766.png",
      publishedAt: "2023-11-27T09:34:35Z",
      content:
        "Airport security in India asks passengers to remove all personal gadgets like mobile phones, tablets, and laptops from their hand baggage and place them separately in trays for a scan. While this is … [+2820 chars]",
    },
    {
      source: {
        id: null,
        name: "GaadiWaadi.com",
      },
      author: "Surendhar M",
      title:
        "4 Upcoming Royal Enfield Bikes To Wait For In 2024 In India - GaadiWaadi.com",
      description:
        "In this list, we have brought you a rundown of the possible upcoming Royal Enfield bikes in the year 2024 in India",
      url: "https://gaadiwaadi.com/4-upcoming-royal-enfield-bikes-to-wait-for-in-2024-in-india/",
      urlToImage:
        "https://gaadiwaadi.com/wp-content/uploads/2023/11/royal-enfield-shotgun-650-5.jpg",
      publishedAt: "2023-11-27T09:20:10Z",
      content:
        "In this list, we have brought you a rundown of the possible upcoming Royal Enfield bikes in the year 2024 in India\r\nRoyal Enfield announced prices of the Super Meteor 650 earlier this year and the Hi… [+2112 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "MapmyIndia board gives nod to raise funds up to ₹500 crore via QIP route | Mint - Mint",
      description:
        "The fund raise would be subject to the receipt of necessary approvals from the company's shareholders, and regulatory and statutory bodies, MapmyIndia owner CE Info Systems said.",
      url: "https://www.livemint.com/companies/news/mapmyindia-board-gives-nod-to-raise-funds-up-to-rs-500-crore-via-qip-route-11701075281376.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/11/27/1600x900/MapmyIndia_IPO_allotment_date_1639620989290_1701076393033.PNG",
      publishedAt: "2023-11-27T09:13:53Z",
      content:
        "The board of directors of MapmyIndia, in a meeting held on November 27, gave its nod to the proposal for raising funds up to 500 crore via qualified institutional placement (QIP) route, a regulatory … [+1930 chars]",
    },
    {
      source: {
        id: null,
        name: "CarToq.com",
      },
      author: "Shantonil Nag",
      title: "Skoda Kushaq and Slavia Elegance Editions launched - CarToq.com",
      description:
        "It’s raining special edition models from Volkswagen and Skoda. Following the launch of the Sound Edition models for the Taigun and Virtus, Skoda Volkswagen Auto India Limited has unveiled the new Elegance Edition for two popular Skoda models, the Kushaq and S…",
      url: "https://www.cartoq.com/skoda-kushaq-and-slavia-elegance-editions-launched/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2023/11/Kushaq-Elegance-featured.jpg",
      publishedAt: "2023-11-27T09:11:34Z",
      content:
        "Its raining special edition models from Volkswagen and Skoda. Following the launch of the Sound Edition models for the Taigun and Virtus, Skoda Volkswagen Auto India Limited has unveiled the new Eleg… [+2229 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Sale Of Houses Over Rs 4 Crore Doubles, Most Growth Seen In This City - NDTV",
      description:
        "Sale of luxury homes worth Rs 4 crore and more jumped 97 per cent year-on-year in the seven major cities of India between January and September 2023, a report from real estate firm CBRE said today.",
      url: "https://www.ndtv.com/india-news/sale-of-houses-worth-over-rs-4-crore-up-by-97-delhi-ncr-accounts-for-4609734",
      urlToImage:
        "https://c.ndtvimg.com/2023-11/cqfp8pm8_delhi-construction-istock-650_650x400_27_November_23.jpg",
      publishedAt: "2023-11-27T09:05:16Z",
      content:
        "Delhi-NCR accounted for 37 per cent of the sales.\r\nNew Delhi: Sale of luxury homes worth Rs 4 crore and more jumped 97 per cent year-on-year in the seven major cities of India between January and Sep… [+1913 chars]",
    },
    {
      source: {
        id: "the-hindu",
        name: "The Hindu",
      },
      author: "The Hindu",
      title:
        "Google in talks to invest $4 million in BharatGPT-maker - The Hindu",
      description: null,
      url: "https://www.thehindu.com/sci-tech/technology/google-in-talks-to-invest-4-million-in-bharatgpt-maker/article67579209.ece",
      urlToImage: null,
      publishedAt: "2023-11-27T08:50:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "FXStreet",
      },
      author: "Akhtar Faruqui",
      title:
        "Gold Price Forecast: XAU/USD hovers above $2,010 on weaker US Dollar - FXStreet",
      description:
        "Gold price maintains its position above $2,010 per troy ounce during the European session on Monday.",
      url: "https://www.fxstreet.com/news/gold-price-forecast-xau-usd-hovers-above-2-010-on-weaker-us-dollar-202311270850",
      urlToImage:
        "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/safe-investment-gm147311616-17537479_Large.jpg",
      publishedAt: "2023-11-27T08:50:00Z",
      content:
        "<ul><li>Gold price extends gains as investors take caution ahead of the skew of US data.</li><li>China's industrial profits declined by 7.8% could dampen the positive sentiment arising from the PBoC … [+1731 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title:
        "Honasa block deal: Mamaearth employees may sell Rs 150-cr ESOPs this week - Moneycontrol",
      description:
        "The block deal is likely to be executed at 5-7 percent discount to market price of Rs 477.10",
      url: "https://www.moneycontrol.com/news/business/stocks/honasa-block-deal-mamaearth-employees-may-sell-rs-150-cr-esops-this-week-11815831.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/05/ghazal-Alagh-Honasa-770x433.jpg",
      publishedAt: "2023-11-27T08:45:27Z",
      content:
        "Employees of Mamaearth parent Honasa Consumer Care are likely to sell shares worth Rs 150 crore in a block deal this week, sources told CNBC-Awaaz. The block deal is likely to be executed at a 5-7 pe… [+1545 chars]",
    },
    {
      source: {
        id: null,
        name: "Motoroctane.com",
      },
      author: "MotorOctane",
      title:
        "7 Cars with diesel engines under Rs 15 lakh » MotorOctane - MotorOctane",
      description: null,
      url: "https://motoroctane.com/news/265259-7-cars-with-diesel-engines-under-rs-15-lakh",
      urlToImage: null,
      publishedAt: "2023-11-27T08:30:55Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "CNBCTV18",
      },
      author: "Meghna Sen",
      title:
        "Maruti Suzuki to hike prices of its cars from January 2024 due to increased cost pressure - CNBCTV18",
      description:
        "Maruti Suzuki will hike prices of its cars on account of increased cost pressure driven by overall inflation and increased commodity prices. This price increase shall vary across models, the company said in a statement.",
      url: "https://www.cnbctv18.com/business/companies/maruti-suzuki-announces-price-hike-for-all-cars-from-january-2024-18416081.htm",
      urlToImage:
        "https://images.cnbctv18.com/wp-content/uploads/2019/05/2019-05-21T100448Z_2_LYNXNPEF4K0HL_RTROPTP_4_MARUTI-SUZUKI-IN-RESULTS.jpg",
      publishedAt: "2023-11-27T08:15:25Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Entrackr",
      },
      author: "Entrackr",
      title:
        "AstroTalk posts Rs 283 Cr revenue in FY23; remains profitable - Entrackr",
      description: null,
      url: "https://entrackr.com/2023/11/astrotalk-posts-rs-283-cr-revenue-in-fy23-remains-profitable/",
      urlToImage: null,
      publishedAt: "2023-11-27T08:08:48Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title:
        "BYJU’S elevates Jiny Thattil as CTO following incumbent Anil Goel's exit - Moneycontrol",
      description:
        "In a statement, the company said Thattil will take over reins from Anil Goel who is leaving the company after three years as CTO.",
      url: "https://www.moneycontrol.com/news/business/startup/byjus-elevates-jiny-thattil-as-cto-following-incumbent-anil-goels-exit-11815951.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/11/Siddharth-Maheshwari-1-770x433.jpg",
      publishedAt: "2023-11-27T07:47:57Z",
      content:
        "The parent entity of edtech company Byjus, Think &amp; Learn, on November 27, said it elevated Jiny Thattil as its Chief Technology Officer at a time when the company is battling troubles on various … [+3601 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title:
        "Mark Mobius to shift base to Dubai, focus on AI investments; bullish on India - Moneycontrol",
      description:
        "When asked about arguably the best company that is manufacturing AI tools for the world, Mobius cited Amazon as the best example.",
      url: "https://www.moneycontrol.com/news/business/markets/mark-mobius-to-shift-base-to-dubai-focus-on-ai-investments-bullish-on-india-11806541.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/11/Mark-Mobius-770x433.jpg",
      publishedAt: "2023-11-27T07:47:20Z",
      content:
        "Emerging markets guru Mark Mobius, the co-founder of Mobius Capital Partners, has decided to step down and establish a base in Dubai to invest in technology and AI-related stocks in emerging markets … [+2157 chars]",
    },
  ]);
  // creating articles state
  const [usArticles, setUsArticles] = useState([]);
  // creating articles state
  const [businessArticles, setBusinessArticles] = useState([]);
  // creating articles state
  const [sportsArticles, setSportsArticles] = useState([]);
  // creating articles state
  const [techArticles, setTechArticles] = useState([]);
  // creating articles state
  const [moviesArticles, setMoviesArticles] = useState([]);
  //creating page state
  const [page, setPage] = useState(1);

  //getting category wise API news data
  // const getCategoryNewsData = async (category) => {
  //   const apiCategoryUrl = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=JWDQzBXAopU3ZInzJRMA2r70nTB9HKir`;

  //   try {
  //     const response = await fetch(apiCategoryUrl);
  //     //parsing data to json format
  //     const json = await response.json();
  //     const parsedData = json.results;
  //     setArticles(parsedData);
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // };

  //firing the getApiData function as soon as page loads
  useEffect(() => {
    const fetchData = async (category, arrayUpdateFunction) => {
      const apiUrl = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=JWDQzBXAopU3ZInzJRMA2r70nTB9HKir`;
      try {
        const response = await fetch(apiUrl);
        //parsing data to json format
        const json = await response.json();
        const parsedData = json.results;
        // console.log(parsedData);
        arrayUpdateFunction(parsedData);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData("world", setArticles);
    fetchData("us", setUsArticles);
    fetchData("business", setBusinessArticles);
    fetchData("sports", setSportsArticles);
    fetchData("technology", setTechArticles);
    fetchData("movies", setMoviesArticles);
  }, []);

  return (
    <>
      <ContentWrapper>
        {/* TOP PICKS SECTION */}
        <TopPicks usArticlesArray={usArticles} />

        {/* WORLD NEWS SECTION */}
        <div className="worldNews">
          <div className="worldNewsTitle">
            <h3>World News</h3>
            <button type="button" className="btn btn-dark">
              See All
            </button>
          </div>

          {/*CARDS */}
          <CardCarousel articlesArray={tempArray} />
        </div>

        {/* BUSINESS NEWS SECTION */}
        <div className="businessNews">
          <div className="worldNewsTitle">
            <h3>Business News</h3>
            <button type="button" className="btn btn-dark">
              See All
            </button>
          </div>

          {/* BUSINESS NEWS CARDS */}
          <BusinessNewsComponent businessArticlesArray={businessArticles} />
        </div>

        {/* SPORTS AND TECH SECTION */}
        <SportsAndTechNewsComponent
          sportsArticles={sportsArticles}
          techArticles={techArticles}
        />

        {/* MOVIES UPDATES */}
        <MovieNewsComponent moviesArticles={moviesArticles} />
      </ContentWrapper>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
