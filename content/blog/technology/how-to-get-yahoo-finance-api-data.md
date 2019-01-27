---
layout: post
title: Getting real time stock data from Yahoo Finance API
tags: Technology Yahoo API
categories: [blog, technology]
date: '2017-02-28'
---

Yahoo Finance provide a way to query real time stock market data across the world. You can use Yahoo Query Language [console](https://developer.yahoo.com/yql/console/) to test your query.

There's not much documentation from Yahoo about the URL construction. The following examples will help you to understand the URL structure and terms

**_Example 1_**

In YQL, to querying Yahoo(YHOO) historical data from "2009-09-11" to "2010-03-10"

```
https://developer.yahoo.com/yql/console/?q=show%20tables&env=store://datatables.org/alltableswithkeys#h=select+*+from+yahoo.finance.historicaldata+where+symbol+%3D+%22YHOO%22+and+startDate+%3D+%222009-09-11%22+and+endDate+%3D+%222010-03-10%22

```

URL endpoint [here](https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22YHOO%22%20and%20startDate%20%3D%20%222009-09-11%22%20and%20endDate%20%3D%20%222010-03-10%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=)

**_Example 2_**

To download multiple stock symbol in CSV format

```
http://download.finance.yahoo.com/d/quotes.csv?s=YHOO,GOOG,AAPL&f=sl1d1t1c1ohgv&e=.csv&columns='symbol,price,date,time,change,col1,high,low,col2
```

**_Example 3_**

To download facebook intraday data in CSV format for a day(1d)

```
http://chartapi.finance.yahoo.com/instrument/1.0/FB/chartdata;type=quote;range=1d/csv/
```

The following list of symbols credit goes to [Wern](http://wern-ancheta.com/blog/2015/04/05/getting-started-with-the-yahoo-finance-api/)

**_Pricing_**

- a – ask
- b – bid
- b2 – ask (realtime)
- b3 – bid (realtime)
- p – previous close
- o – open

**_Dividends_**

- y – dividend yield
- d – dividend per share
- r1 – dividend pay date
- q – ex-dividend date

**_Date_**

- c1 – change
- c – change & percentage change
- c6 – change (realtime)
- k2 – change percent
- p2 – change in percent
- d1 – last trade date
- d2 – trade date
- t1 – last trade time

**_Averages_**

- c8 – after hours change
- c3 – commission
- g – day’s low
- h – day’s high
- k1 – last trade (realtime) with time
- l – last trade (with time)
- l1 – last trade (price only)
- t8 – 1 yr target price
- m5 – change from 200 day moving average
- m6 – percent change from 200 day moving average
- m7 – change from 50 day moving average
- m8 – percent change from 50 day moving average
- m3 – 50 day moving average
- m4 – 200 day moving average

**_Misc_**

- w1 – day’s value change
- w4 – day’s value change (realtime)
- p1 – price paid
- m – day’s range
- m2 – day’s range (realtime)
- g1 – holding gain percent
- g3 – annualized gain
- g4 – holdings gain
- g5 – holdings gain percent (realtime)
- g6 – holdings gain (realtime)
- t7 – ticker trend
- t6 – trade links
- i5 – order book (realtime)
- l2 – high limit
- l3 – low limit
- v1 – holdings value
- v7 – holdings value (realtime)
- s6 – revenue

**_52 Week Pricing_**

- k – 52 week high
- j – 52 week low
- j5 – change from 52 week low
- k4 – change from 52 week high
- j6 – percent change from 52 week low
- k5 – percent change from 52 week high
- w – 52 week range

**_Symbol Info_**

- v – more info
- j1 – market capitalization
- j3 – market cap (realtime)
- f6 – float shares
- n – name
- n4 – notes
- s – symbol
- s1 – shares owned
- x – stock exchange
- j2 – shares outstanding

**_Volume_**

- v – volume
- a5 – ask size
- b6 – bid size
- k3 – last trade size
- a2 – average daily volume

**_Ratios_**

- e – earnings per share
- e7 – eps estimate current year
- e8 – eps estimate next year
- e9 – eps estimate next quarter
- b4 – book value
- j4 – EBITDA
- p5 – price / sales
- p6 – price / book
- r – P/E ratio
- r2 – P/E ratio (realtime)
- r5 – PEG ratio
- r6 – price / eps estimate current year
- r7 – price /eps estimate next year
- s7 – short ratio
