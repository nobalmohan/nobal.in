---
layout: post
title: Open markdown link in new tab
tags: Web Technology Jekyll
categories: [ technology]
date: '2017-04-20'
---

Linking in markdown is a fairly simple. You can add a HTML directly with the target attribute. But if you are using Jekyll, you add the text in square brackets and enclose the link in parenthesis with additional target syntax like mentioned below. 

### For Jekyll

```markdown
[text-to-highlight](actual-link){:target="\_blank"}
```

### For others

```markdown
<a href="http://example.com/" target="_blank">Hello, world!</a>
```


