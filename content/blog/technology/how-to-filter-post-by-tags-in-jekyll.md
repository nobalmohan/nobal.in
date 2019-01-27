---
layout: post
title: How to filter post by category or tag in Jekyll
tags: Web Technology Jekyll
categories: [blog, technology]
date: '2017-04-22'
---

Jekyll follows liquid templating and allows a greater customization of filtering pages, tags, posts and categories.

To filter a list of post based on one category:

```
  for post in site.posts
       if post.categories contains 'Travel'
          <a href="#">post.title</a>
       endif
   endfor
```

For the tag, replace category with tag.

```
  for post in site.posts
       if post.tags contains 'Travel'
          <a href="#">post.title</a>
       endif
   endfor
```

### Contains can only search strings. You cannot use it to check for an object in an array of objects. Left argument is case sensitive

You can also use If, Else or Unless instead of contains. More about IF/Else condition checking in liquid templating [here](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#if--else)
