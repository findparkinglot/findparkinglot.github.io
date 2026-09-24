import{r as E,c as X,o as Yn,a as mt,w as Y,b as _,d as C,n as ml,e as Qi,f as c,g as Z,h as ni,i as W,j as Mo,T as Lc,t as B,p as Nn,k as Mn,l as Pe,m as Ye,F as Ae,q as xe,s as Fc,u as fo,v as k,x as L,y as pl,z as Ge,A as nt,B as kt,C as qs,D as Hc}from"./vendor-C5Bqh2DJ.js";import{m as xn}from"./mapbox-HLKS-riT.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Yi=""+new URL("../logo.png",import.meta.url).href,fl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVGSURBVHic7d0/bBNnHIfxx4fzh8S2aAR17AYhIQYyWCChTFGWoExUAoQqBrIidga8VEVIXRx16dIlK+2G1Awdm6lRBybwQFW1aktaRxFSqYiDSJBIh7uTTBqSFPu993y/70eyhFC4vPb73Ovz3ZHkdnZ2OIxqvTkEzAKXgUmgEj0Kh9qAuNIG1qLHE2AJWG41aluH+ce5gwKo1ptl4C4wDxS7GqokZQO4D9xrNWrr+33hOwOo1puDQB24g/byftUGFoBGq1Hb3usL9gwg2usfANNOhydJWQGu7bUa/CeAar1ZA74DTiYzNknIKnCp1ag1O//yrQCiPf8hmvysWgWmOleCIP5D9J7/AE1+lp0EHkRzDXQEQHjAp/f87JsmnGsgeguIlv5f0NG+FW3gTKtRW49XgLto8i0pEM45ucqdx0PAM3SSx5oN4ERAeHpXk29PEZgNCM/ti02XA8ILO2LTZEB4RU9sqigA2yoB+vhnWSE4+GskyxSAcQrAOAVgnAIwTgEYpwCMy/seQBYMD+SYPj3K1KmjjJcGKJfyjJfylIt5Roe628dOffpTj0a5NwXwnj4YOcLcZIG5s0VmzoxwdKA/F1MF8D+NDAbcnB7j1swYo4P9OemdFMAhHQng+oVj3L54nBOF7Lxs2XkmDpWLeRbnJzj30bDvofScAjjA+YlhFm9M8GExmy9VNp9Vj1w5V2LhaoWhfM73UJxRAO9w5VyJLz+p+h6Gc/1/GOvA+YlhFq7auE9GAexSLuZZvDGR6WW/kwLocCSAxfnsHvDtRQF0uH7hWCY/6u1HAURGBgNuXzzuexiJUwCRm9NjmTrDd1gKgPDCzq2ZMd/D8EIBAHOThUxc2HkfNp/1LnNn7f7fWPMBDA/kmDkz4nsY3pgPYPr0aN/ezNELdp95ZOrUUd9D8Mre555dxksDzr/H079f88X3z/h5fYunz1+zufXG+fc8LPMBlEtuX4Ifft3k5td/8XI7PZPeyfxbwLjjAL599CK1kw8KgLLjCz8//vbS6fa7ZT6Abu/bP8ifz1873X63zAdgnQIwTgEYpwCMUwDGKQDjFIBxCsA4BWCcAjBOARinAIxTAMYpAOMUgHG5yp3H+//++JT74/OzvoeQmGbrFR9/9XtPt6kVoI988/Cfnm9TAfSJze03LD160fPtKoA+sfToBZsObi5VAH3CxfIPCqAvNFuvaLZeOdm2AugDrvZ+UACp5+rgL6YAUs7VwV9MAaScy+UfFECquTz4iymAFHO994MCSC3XB38xBZBSrg/+YgogpZJY/kEBpFISB38xBZBCSe39oABSJ6mDv5gCSJmkDv5iCiBlklz+IQP3BHbL9T2Frn/3b7e0AhinAIxTAMYpAOMUgHEKwDgFYJwCME4BGKcAjFMAxikA4xSAcQrAOAVgnAIwTgEYpwCMUwDGKQDjFIBxCsA4BWCcAjBOARinAIxTAMYFQNv3IMSbdgCs+R6FeLOmAGxbC4Anvkch3jwJgCXfoxBvlgJgGdjwPRJJ3AawHLQatS3gvu/RSOLutxq1rfg8wD30cdCSNuGchyeCWo3aOrDgc0SSqIVozt86E9gAVvyMRxK0QjjXQEcArUZtG7gGrHoYlCRjFbgWzTWw61pAtCxcQhFk0SpwKV76Y/+5GNRq1JrAFHo7yJIVYCqa27fseTUwqmQW+Ax9OuhnbcI5nN2958dyOzv7/6DQar1ZBu4C80Cx1yP0LaM/KXSD8NzOvXdNfOzAAGLVenOIcFW4DEwClehR6GqonmUggDbhBb01wus6S8BydILvQP8C924/b5hUVlQAAAAASUVORK5CYII=",yl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA5xSURBVHic7Z17dFTVvcc/58wkk8k7gQABgggkBCOPJkFeykJqC3q1UgXEWtTWetUrFUvLqpRLpVWWwC2gq4i1UOsFSpVnuy4gsgQLEkOaB0aB8BBCyBOSkHcy73P/0AQCmcwkmTl7JnM+a2WtzNn7/H7f5HzX2XP260h0gZRTBEeY+a6kcC+QKkGSAtFARFfiaHiMBglqFTgLnAAO14dw+FQKFncDSO5UGv9vEvQ6FiHxJAqx3VWroQrVwGaHnrVZYylxVblTA4zJJyzUyjJJ4hdAsKcUaqiCWYI1ZoUVuek0O6vk1AAT8rhDdrAdiRTv6NNQibM6iceOpZLfUWGHBpiYx32Swm60tr230KRIzDmeykc3F9xigCnZPOCQ+QcQpIo0DbWwAj/ITOPAjQfbGWDyCcYpDjKAUDWVaahGEwqTMtP5qvWA3PrLmHzCsPMh2sXvzYQhsT0t5/o1bjNAqJVlikSSGF0aKpJskPhN6wcJ2p7zv0Z71AsUzOgYnjmOUhlAr2MR2sUPJAySjUUAUsopgqNMlCrQV7QqDVWprg9hoBxh5rvaxQ9I+kS1ME3+dmBHIwBxwHQZSBMtREMMskyqDIwQLURDDIpCogz0ES1EQxh9ZLSev0AmXMbNSSEavRJJdl1HozejGSDA0QwQ4GgGCHA0AwQ4mgECHM0AAY5etABvEqPvx20hyQwIvo14w1D6Bw0hXBdFhD4GvRSEUQ4HoNnegE2x0Givo9FeS4WliHLLJSosRVwyFVBnqxb8l3iPXmMAGZlRYXeRHjGd5NB0kkPT6B88xCOxyyyFFDRlU9CcTV7Dp5xtzkNB8Uhs0UiTcv33LzHIRu6Oeoi7ox5iQuRMovXqTGuotlbwef0+Mur2klm3H6vi9lI8n8MvDZAcmsb9sU/y/dgniNKLHctqtNdyqGY7e6r+xLnmE0K1dAe/MYCExJSoB3lqwFJSwiaIltMhJxqP8H7562Q3fCJaitv4hQGmRs/iZ/HLGWEcK1qKW5xsymRT+XL+XX9QtBSX+LQBEgyJvJzwFpMi7xctpVtk1O1lXfFLlFkKRUtxik8aQC8F8Uz8cn7U/1cESf49W93saOH9itfZcmUVDsUuWs4t+JwB4oOHsvz2vzE6bLJoKR7lVNNxXi38kc/dDXyqJ/De6NlsHpXf6y4+QErYRN5LzmFK1IOipbTDZwwwt99CXhv2IWG6SNFSvEakPpZVw/7B7LgFoqW0IdwAMjK/Sniblwe/iSxejteRJR2LEv7Ii4NWI/nAbDzh//GfD17DI3H/JVqG6jzRfzELB68TLUOsAV4Y+AaP9XtZpAShzO23kJ/ELxOqQZgBHol7gfkDXhGV3md4Nv73zIh9Qlh+IQYYFTreJ25/vsKSIZsYGZoqJLfqBojQxbBi2A6CJIPaqX2WYDmE127/EKMcpnpu1Q3w4qBVDAi+Te20Ps9gwwieiV+uel5VDZAcms6DfZ9RM6VfMa/fL0gOVXextmoGkJBYPGRDQDzrdxdZ0rFg0B/UzalWoomRMxkVOl6tdH5LasQ0xoVPVS2fagZ4ov9itVL5PU8P+G/VcqligETjOFIjer4TjU2xeUCN7zM+8j4GGoapkksVA3wvdl6Pzi82FzMmbwwhGSHMPzsfu5vj6sXmYkbmjET6TCI+K57shux25b8u/DWhGaGMPzGeC6YLncayK3Z+eu6nRH0exYyTM6ix1dwSy5hhRPpM6vQnJjOGLVe3dJpLQlKtc0gVA0yN/mGPzn+j+A2+avoKu2Jn69WtHKg54PokYEfVDs61nAOgwlLBpopNbWW5jbmsLllNi6OFnMYcZp2eRZO9yWmsPdV7+OuVv1Jvr+dgzUHeLH2zrSy/KZ/VJasxOUwuNdXaann+/PNYXMwknhHTSwwwNGQUQww924G2xNz+xRdlljK3zmtxtDj9XGQqald2sukkz3/9vNNYN9e/ZLrU9nuxudgtPa0oKChK5/NwhoSMJC5oUJfidgevG8BXZ/B2tLBj69WtvFv+rtv1u0O4Lpy3R7yNQXbdEzo2/G6P5OwMr68MSjSO83YKj7Lw4kLSItJID0/vdow7w+7k6JijHZZF6aPc7gu5M2wSn9R82G0d7uB1A/jLVO5WzA4zj55+lLzv5NEnqHuLTnToiNHH9FhLvOH2HsdwhdebgL7BA72dwuNcNl/mqXNP4cAhVMcAD61t7Ayv3wHC5Shvp/AK+67tY1XxKpYkLOnyubW2WnZU7bjluITESONIRoeNditOXNDgLufuKl43QIQ+2tspPMLosNGYHea2x0aAZUXLmBQ5iWlR07oUq8hcxNyCuU7Lf3fb7/jtkN+6jGOQQ7qUtzt4vQmQ/GTwJ1IXyc5ROwnTXR+Ttyt2Hj/zOOWWco/meqv0Lbfq6VVYFOP1q2NyOO9c8TVGh41mY+LGdscqLBU8WvAoVsXqsTyJxkS36unQeSynM7zeBNTZqgnX+UczAPB43OMcqzvGhvINbccy6zMpNLm/oscoG7kj9I4OyxKNiawYusKtOFU2z955OsLrBqiwFDHIMNzbaTzK2mFryW3MJashq+1YhaXC7fOTjEnkfCenxzrKzBd7HMMVXm8CikxnvZ3C4xhkAztG7SAuKE6ojkLTaa/n8LoBCpqzXVfyQRIMCXyQ/AE6yfvtsDNON2W5rtRDvN4EfNWY4fGYW69uJafh1ltssBzMA7EPcH+MZ/YTmB49neVDlrOsqGuLN0osJTx3/rkOywYZBvHcgOfoH9zfZZwvvfC/uxmvG+Cy+RzF5vMkGNz75usOR+uOcrSu47729WXrOXDnAWbEzPBIrqVDlpLXmMee6j1un1NtrebPFX92Wr6rahf5qR2+zLuNy6azFJvPu52zu6jykH6kdnePzndn5KxdvrojAJ0uvgy5qZMlWO74mVtC4i9Jf2FYSPsZOqG66+/ZuDmWK75s+vKWCSU3c7Tun12K2V1UMcDeqvd6NJw6q88st+vKyMyMmQlASmhKu7Ibu2AnR06mf9D12/DDsQ87jRmjj2HnqJ0YZSMAOknHnL5z2srviriLgV0Y85gcOdnlYNH+6vfdjtcTVNshZH3i4R7NC/yk9hOO1B3B6nDeIRMihzAzdiYTIya2HdtdtZvsxmySjEnM7zcfvXS91SsyF7GrahfDQ4bzcB/nBmiloLmA/df2MzVqKuMj2s9wLrOUse3qNqqsVZ3GGBoylB/3+zHhunCndfIaPmXB+eku9XgC1QwwIXIG60a4N5Ur0Fl4/nuqbTWnWkd9Vv3H5Dd+plY6vyW/8Ziq+wyqOlLzVski4WPsvoxVMfM/xS+omlNVA5xpzmFX5dtqpvQrNpa9ysWWk6rmVH2s9k+lS1R5vvU3TjVlse2quusCQYABWhxNvHJhFk32erVT+ywmRzOvFz0tZCNJIbM1Ck2nWVb4mE/unCmCtcU/p8h0RkhuYdN1jtcf4N1y9RZB+iqHarazt/o9YfmFztfaUrGSDaWBu1FUqfkCKy8/K1SD8Al7W6+sYn3p4l7zChZ3abY38JuLs4V/FxJuAIBtV/7A65eexh4gy79tipWlhXM43/KFaCm+YQCAj65tZuHX36fK6t7CT39FQWHl5WfJqv9YtBTAhwwA3wyCPFkwjs/r9omW4hUUFNYVv8T+6v8VLaUNnzIAQK2tksUXHuKPJb/E5GgWLcdjKCisKV7Azsr1oqW0w+cMAN/8s/5+dS3zTo3k42tb/f4L4jcX/0V2V25wXVllfO6NIR2RHJrGwsHrGBt+j2gpXcaqWFhR9BMOXtsmWkqH+IUBWhkbfjdz4l5iWvQjyAJn67pLo72WVy7+kLyGf4mW4hS/MkArgw0jmB23gPti5hEb5Hp2rQiuWC7zywv/ofroXlfxSwO0Iks6xoVPZXr0HKZFP+IzZshtOMyywnnU2ipFS3GJXxvgRiQkbjemMC78HkaHTWFM+BTig4eqqkFB4e9X1vBO2RK/6dTqNQboCKMcRkJIEgmGRBIMSdwT/QOvbVfbZK9n5eVnOVSz3SvxvUWvNsDNyJKONcP3MSHSM4tGWslvPMbvL82n3HLJo3HVwCf7AbyFQ7Hz8bW/eSyeTbHybtlSXjw/zS8vPqiwNMzX8NSraAtNp3nt0lOcae75MnCRBJwB+gUn9Oh8m2Llg6tr2Vj2KlbF7CFV4gg4A/TvgQHyG4+x6vJ/cslU4EFFYgk4A3Rn/91aWyXvlC5hb3XP1jj6IgFngK40ATbFyp7Kd9hY/iqN9lovqhJH4BnAzc0XM+r28mbJy5SaO3+PgL8TUAYI00W6fDt5QXM260sWc6LxiEqqxBJQBojVOx8rON/yBZvKXuVY3f/1una+MwLKAJXWUmpsV4nR92s7drHlJJvKl3OkdndAXfhWAqorGL55eeXP4pdjkI38s2ojh2u2B/SK5YAzgEZ7AmosQONWNAMEOJoBAhzNAAGOZoAARzNAgKMZIMCRQesHCGAUGeg9KzA1ukqjDFSLVqEhjGoZ0DbtC1zOyRLkilahIQiJPFmBT0Xr0BCDAofk+hAOS9D5JvcavZFKq4Mj8qkULApsEa1GQ10Uic256VhlAIeetYD/r3LQcBeTDtbCtz2BWWMpkWCNWE0aqiGxOiOVMrihK9issAIQs2OxhpqcxsTK1g9tBshNp9kBjwH+87pvja7SIOuYmzmZltYD7QaDstL4EpgNWNRWpuF1LJLC7IxxnLrx4C2jgZlpHEDiAaBBNWka3qZJkZj1eToHby7ocDg4M5VDCkwAfHuLKw13OOOAycdT+aijQqfzAY6nUWBRmCDBCrRHRH/EhMRrmEn9tmnvEOcv172BSV8wSLKxCIknFejrOY0aXqBSkdgc5GDNZ+mUu6rslgFaScshyAD3OmC6LJOqKCQBMUDnKy41vEU9UCNJnFMg12HnsE3iX7npOH+/7k38PxKtdki9+fSSAAAAAElFTkSuQmCC",bl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAGKAAABigEzlzBYAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAC09JREFUeJztnXuQXFURxn872ZCHFOERkASUICok+IgRxRhQFBERJEIQIgoGeZZVKAFBoSiJCshLRPFBWZYgiEEUNahoiYgkCohIxDzAZyAPIiZCQpZsCNkZ/+jZgqzTPdO7995zZu75qrpStdn5Tnef3jvn9unTp4vmGAZMA6YD+wPjgPHAyBY+m1AcNgFPAKuB+4F5wL1A32AJu4HTgVVALUlbykrgtPpcujAFeDQCA5JkI48Ak2kRxwDPRqB0kmylB5hBE3wAqEagbJJ8pIoRBJORKAmtZJJ8ZSOwX33O6ar/2w0sBvYmoQxYCrwO6KvUf3AqafLLhEnASSBPgGHAcuTdPqE8WAlMqAAHkCa/jNgdmFpBMnwJ5cT0CvDm0FokBMP+FdLjv8wY34W8F44KrUlCEPR2IcmBhJKi0vxXEjoZKQBKjhQAJUcKgJLDXSnSAuYDN+fAOxDvAGYWME7eWAFcgr4YPxw4Mk8Fst5u3ITsNOWNEcCiHPQvUp4BXm/YuB/5F+fkQroQ2MYwLCtMATbnZEPesgU4wrBtAvDvAvTIjfhiw7gsMSdHG/KUjxk2bQf8pSA9ciPuQ3Ya80Y38Icc7chDrjDsGQ7cWaAuuZL/A9jWMDYr7IOktENPbCvyQ+y3r+uK1KeIVPBXgTMb/LwbuAX5rmsFTwFHIYuiRpgNXO1VrmA8CByEbsOFwOcL06aOvKOsChymjD0NWQy1yvUNw44K8JsC7BmsLANeaugfqiK7kEFWAjsqhl/m5LJWzrsjT4rQkz1Q1gOvNfSeBvQG0q2wgW5SjB8OPODg+Q/2X9JJgRypyWbgEEPfPYEnA+pX6GDHKk6YiG8R9xPDoSALrdAT3y+nG3ruSPgjeIUOtgbYVXHGJ5xcJxuO3ZlikijNxMqFDAfuikDHwgf8JS8cSHkxuoA7HDw9wKsMB08P7Nhb0V/3uoAbA+sXLABq6H+944G1Dp57kXMNGr4TyL4HgNGGXnMC6RVNAPQAr1Scc7ST60LD0WOAxwu27V/ALoZOM4nrAG6wgX+H/td7k4PneaRziYZ3Fujw/2IfsTsQ2S0NPelRBEANOEdx1BjgMQfP37FTzl8uwJbNSLBp2AtZBIee8KgCYBN6guQAfFnCr+m+ZyRy+jkvO6rAicb4OwF/y3H8tg2AGvAQeu3AFQ6eKlI9oyHP2oE5xrgjgd/nNG5HBEAN+JzivBHAnx08T2IvwD6bg+5zafxaS/3n3y3Af20fANZCbhK+LOGPFR6QHUhP2rmZzEeCVMOlOfqsowKghl07MNvJNUvhAX/a2dJ3Z2Oc2PYkog+AGvAVxZldwC8cPBvQ8wwAZw9Rz7XYWci3A88V5LOOCoAq8B7Fqbsh79mtcll5hgpw9yB17EW2bzVMJM4t6bYIgBpSO7CD4twZTq7zFR6QSqT1Tr4q8CGDcyzy1RDah20dADUkh6/hZgfP88CbDK6TnXpdYHCNAu4r2E8dGwA1pESqEbxZwqXY/Q9ua5Hn2wZHxcETmwRXQBOrduBAfFlCbXEJrdUO/Bb7oMuVEfir4wKgBtxuOP0qB08VeK/BZdUOLEVfkwCcEoGfOjYAasBHFcd7s4SrkJy8hkYFGmuwXycPRdYZoX3U0QGwAdlJa4R98VXT/kjhgf+vHdgITDV+f19gXQT+6fgAqAEL0N/pz3FyWbt2ByNfF1Xgg8bvjaP4QpNSB0ANSQc3QgVfcWWzLOG1wCeN/x9F+51F7IgA6EU2hhohyyzhcOXn1D9zewS+KGUA1JDaAW2CjndyfUrhsVBEZVEKgCYyx5ig7zl4NmNnCQfitAhsTwGAXTuwPb7FWbMsYT8Oo/1f9zomAGrILVjaxB2MNKdolesahacfb0AWjqFtTgEwQKyJu9rBYx1fBzgrAltTADSQKpKJa4QRwMMOLitLWEH2AkLbmwKggVi1A94s4W0KD8gR7mcisDcFQAO5QZ02ONfJ9WGD69QIbE0BoMgxyqR5S7/WAS9XuAB+GoGtKQAayBr0riHetjHWvsMuhO3mkQLAkHnKpIE82j1c5xpc74/A1hQAisxSpw2+7+DZhN3DN/bTPqUNgPXAHsqkebOES9CTTWOQyzZD25sCoIHMR2/N8i58vQKsxpNerlgluAJ5yFn6vHGNg8c6qAJyJD20rSkAGshGpH9wI4zA14nbanL5EuI991/qAHgMvaQcZIPHc3ZvrsE1FV+JemwSXIGsZT2t3VjyaSfv8QbXJcbnYpfgCmQpzdqyvhiDyRLuoXANB/4Ygf2lD4AzlAnS8DJ8WcL56FnCSYRr+JwCAPiCMjGgt3AB+IhzHK2zGcB5EfihlAHwA+y2rNcj18xpyCpL2I61A8EVGKo0a8t6Uf33VqDXDuyAL7O3BOn+1QjtVjsQXIGhSLO2rMexdbbOOuJ9CL7M3lUGVztVEAdXYLCyDniNMQlaW9YZxmeudYzfh90Z9GcR+KhjA2AzUv2rYS/kZpFGn7VuHBmJ7zZSK0s4Dl/n8xQALUoVWblr2An4axMO68YRb5bQuif5qIB+6tgAmGM4fBtavznMCqILnDpZJ4k9p5VSADSRW7DbsnrazFuZPe/r3NPotYTbE3ftQHAFWpUF2G1ZLx4E513oAbUnvjZy96DnIrxvGCkABsg/sduyzhoC98cNXm+7V62HAcDXc/ZRxwbAWuDVhmPfxtBu4ehFDpFouNXBtQl9J3I0zRenKQAGyHPYKdx9yKYt65/Q+w6MBZ5wcC1GzxLGWDsQXAFNqtgndcYiV8VkNd5njLHeje87/HKDK7YW8sEV0MS6DWwUcmVcluM1ayvrqf/rQ39yDUduEQ/t36gD4HrFeSCr9rzera2GEaORvgStclmbTzHVDgRXYKDcg/26d3nO43/RGHsKvizhjQaXtyStFAHwCHZbVm9378GI9fgG+Wry8B2n8FSQYA/t8+AK9EtMbVmXAdspengn7mmk9KwRYqgdCD7xNeT70GrLOqnuyCJ1+pahj3fi7kTPOJ5RsF3RBUCztqy74rsfIEs52tDL+3WkZRy7gJ8Hsi+KADjPcPIo4P6Aulm1AyC1iK1yWbekem9N75gAsB6zFaS7d0j9ati1A2OB1Q4u65ZU763pbR8AdxvOAPhSQN0GygmGnofiyxJa5etzA9gWxKFLkH1yDbE1ZGrWO+g6B1cfcJDCE6J2oHBnrkYvxIB427L+Gn0lPxp41MG1HD3fUXTtQKFO3Ije5xekyjfmWzjONHR/I77byW8wuDxPlLYJgD6kSFLDeOIunaoBzwJ7GzZc5OQ7VuEpsu9AYc6zunZsCywsUJehyIPotQPd+C6PfAo9S/hWiqkdKMRp31SMBDltO68gPbISa6v6FfiyhL9CX1tcVoAtuQ9wB/KXocFzGicWaVY7kBW8Ta+jC4BFSEs1DbNzHj9PafWyiaHC2/Q6mgBYhf79BnA48dXHeeVKw74scX6ONuRCugGYbBg0BejJ0aiixErqZIk8awcyJ9wCHGkYsxtSLhV68rKSZei1A1nCu7hsSazF2WCxEJhYl0Y4Aeng3SmYgNQoLihgrEXI62Fm6KL+GEgoJ7SzbAklQQqAkiMFQMmRAqDkqCBZpoRyoreCFGgklBOrUgCUG6srSNl1QjlxXwX7urWEzsa8LqQg43EkR59QHqwAJgxDUsE9wPvC6pNQMM4GHuovRepGNhq0i5YSOgtLkJb3ff2JoC3ATKTqNaGz0YPcf9QHW2cCH+aF2zMSOhNV4ETk2jwVR+DrkJmkPWQD9nH3rTAZ+Z4IrXSSbGQxrV2ltxW6gVPorPKtsslypJGFdtOZeZtWP4Yh7VumA29BLkIYTzEl0QmtoxfpaLoaOZ00r/5v1frQ/wDJeOfsLhejVwAAAABJRU5ErkJggg==",gl=""+new URL("004-link-I-rCjY3f.png",import.meta.url).href,zc=""+new URL("IOS_01-DtHfNzMs.jpg",import.meta.url).href,Vc=""+new URL("IOS_02-CiUCcSTE.jpg",import.meta.url).href,Wc=""+new URL("IOS_03-DQ8E1BHM.jpg",import.meta.url).href,jc=""+new URL("IOS_04-DJfZ2EAs.jpg",import.meta.url).href,Gc=""+new URL("IOS_05-BGSAS2rN.jpg",import.meta.url).href,Kc=""+new URL("Android_01-BkXW7jwd.jpg",import.meta.url).href,Qc=""+new URL("Android_02-7T4EvWUN.jpg",import.meta.url).href,Yc=""+new URL("Android_03-Dt5XfxoK.jpg",import.meta.url).href,Xc=""+new URL("Android_04-CcEUR2FT.jpg",import.meta.url).href;var Jc={kml:{$:{xmlns:"http://www.opengis.net/kml/2.2"},Document:[{name:["Alan大重停車記事"],description:["更新請到<br>https://forms.gle/euRCPCPSmvYLm5Rj8<br>2026/09/14<br>  - 新增中壢國小、中山停車場<br>2026/09/12<br>  - 辛亥路一段100號機車停車場改為禁停<br>2026/07/17<br>  - 更新三峽、鶯歌、淡水路邊收費機車格<br>2026/07/15<br>  - 更新台北市路外試辦12處停車場<br>2026/06/16<br>  - 更新新莊收費機車格<br>  - 更新七月預定開放收費機車格<br>2026/05/26<br>  - 更新泰山 中和 收費機車格<br>2026/05/03<br>  - 更新台中共用停車格<br>  - 西區 中區 西屯區 南屯區<br>2026/05/01<br>  - 更新新北試辦重機停收費機車格<br>  - 中和、永和、土城、淡水等收費機車格<br>2026/04/07<br>  - 更新台北市試辦停車場<br>2026/03/26<br>  - 合併重機格/機車費率圖層至機車費率圖層<br>  - 新增預計開放圖層(4/6 台北市辦路外停車場)<br>2026/03/06<br>  - 新增重機友善店家圖層<br>2026/03/01<br>  - 新增新北試辦重機停收費機車格<br>  - 新莊、泰山、林口、三重、蘆洲等收費機車格<br>2026/01/23<br>  - 更新台中撤銷禁止陡峭停車場<br>2026/01/01<br>  - 新增春德路停車場<br>2025/11/22<br>  - 新增塔城公園停車場<br>  - 移除阿曼TIT停車場<br>2025/11/05<br>  - 新增科技大樓停車場<br>2025/10/23<br>  - 調整三創停車場費率與類型<br>2025/10/15<br>  - 新增高雄草衙道機車停車場<br>  - 新增台中第二停車場<br>2025/7/14更新<br>  - 新增台北市試辦機車共用車格<br>  - 移除部分停止營業停車場<br>  - 調整部分停車場 icon"],Style:[{$:{id:"icon-1502-7CB342-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-14.png"]}]}]},{$:{id:"icon-1538-0288D1-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-6.png"]}]}]},{$:{id:"icon-1538-0288D1-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-6.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1538-757575-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-3.png"]}]}],LabelStyle:[{scale:["0"]}]},{$:{id:"icon-1538-757575-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-3.png"]}]}],LabelStyle:[{scale:["1"]}]},{$:{id:"icon-1538-757575-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-3.png"]}]}]},{$:{id:"icon-1538-757575-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-3.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1538-757575-nodesc-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-3.png"]}]}],LabelStyle:[{scale:["0"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1538-757575-nodesc-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-3.png"]}]}],LabelStyle:[{scale:["1"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1538-7CB342-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-2.png"]}]}],LabelStyle:[{scale:["0"]}]},{$:{id:"icon-1538-7CB342-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-2.png"]}]}],LabelStyle:[{scale:["1"]}]},{$:{id:"icon-1538-7CB342-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-2.png"]}]}]},{$:{id:"icon-1538-7CB342-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-2.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1538-7CB342-nodesc-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-2.png"]}]}],LabelStyle:[{scale:["0"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1538-7CB342-nodesc-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-2.png"]}]}],LabelStyle:[{scale:["1"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1538-E65100-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-1.png"]}]}],LabelStyle:[{scale:["0"]}]},{$:{id:"icon-1538-E65100-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-1.png"]}]}],LabelStyle:[{scale:["1"]}]},{$:{id:"icon-1538-E65100-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-1.png"]}]}]},{$:{id:"icon-1538-E65100-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-1.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1632-0288D1-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-12.png"]}]}]},{$:{id:"icon-1632-0288D1-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-12.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1632-757575-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-8.png"]}]}]},{$:{id:"icon-1632-7CB342-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-4.png"]}]}],LabelStyle:[{scale:["0"]}]},{$:{id:"icon-1632-7CB342-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-4.png"]}]}],LabelStyle:[{scale:["1"]}]},{$:{id:"icon-1632-7CB342-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-4.png"]}]}]},{$:{id:"icon-1632-7CB342-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-4.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1632-E65100-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-13.png"]}]}]},{$:{id:"icon-1633-0288D1-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-11.png"]}]}],LabelStyle:[{scale:["0"]}]},{$:{id:"icon-1633-0288D1-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-11.png"]}]}],LabelStyle:[{scale:["1"]}]},{$:{id:"icon-1633-0288D1-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-11.png"]}]}]},{$:{id:"icon-1633-0288D1-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-11.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1633-757575-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-10.png"]}]}],LabelStyle:[{scale:["0"]}]},{$:{id:"icon-1633-757575-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-10.png"]}]}],LabelStyle:[{scale:["1"]}]},{$:{id:"icon-1633-757575-nodesc-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-10.png"]}]}],LabelStyle:[{scale:["0"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1633-757575-nodesc-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-10.png"]}]}],LabelStyle:[{scale:["1"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1633-7CB342-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-9.png"]}]}],LabelStyle:[{scale:["0"]}]},{$:{id:"icon-1633-7CB342-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-9.png"]}]}],LabelStyle:[{scale:["1"]}]},{$:{id:"icon-1633-7CB342-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-9.png"]}]}]},{$:{id:"icon-1633-7CB342-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-9.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1633-7CB342-nodesc-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-9.png"]}]}],LabelStyle:[{scale:["0"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1633-7CB342-nodesc-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-9.png"]}]}],LabelStyle:[{scale:["1"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1633-E65100-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-7.png"]}]}],LabelStyle:[{scale:["0"]}]},{$:{id:"icon-1633-E65100-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-7.png"]}]}],LabelStyle:[{scale:["1"]}]},{$:{id:"icon-1633-E65100-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-7.png"]}]}]},{$:{id:"icon-1633-E65100-nodesc-normal"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-7.png"]}]}],LabelStyle:[{scale:["0"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1633-E65100-nodesc-highlight"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-7.png"]}]}],LabelStyle:[{scale:["1"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1644-0288D1-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-17.png"]}]}]},{$:{id:"icon-1644-0288D1-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-17.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1644-757575-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-16.png"]}]}]},{$:{id:"icon-1644-7CB342-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-15.png"]}]}]},{$:{id:"icon-1644-7CB342-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-15.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1644-9C27B0-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-18.png"]}]}]},{$:{id:"icon-1644-9C27B0-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-18.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1684-7CB342-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-5.png"]}]}]},{$:{id:"icon-1684-7CB342-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-5.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"icon-1898-E65100-labelson"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-19.png"]}]}]},{$:{id:"icon-1898-E65100-labelson-nodesc"},IconStyle:[{scale:["1"],Icon:[{href:["images/icon-19.png"]}]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-15144-nodesc-normal"},LineStyle:[{color:["ff9b5701"],width:["15.144"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-15144-nodesc-highlight"},LineStyle:[{color:["ff9b5701"],width:["22.716"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-15531-nodesc-normal"},LineStyle:[{color:["ff9b5701"],width:["15.531"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-15531-nodesc-highlight"},LineStyle:[{color:["ff9b5701"],width:["23.2965"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-15725-nodesc-normal"},LineStyle:[{color:["ff9b5701"],width:["15.725"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-15725-nodesc-highlight"},LineStyle:[{color:["ff9b5701"],width:["23.5875"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-15919-nodesc-normal"},LineStyle:[{color:["ff9b5701"],width:["15.919"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-15919-nodesc-highlight"},LineStyle:[{color:["ff9b5701"],width:["23.8785"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-16113-nodesc-normal"},LineStyle:[{color:["ff9b5701"],width:["16.113"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-16113-nodesc-highlight"},LineStyle:[{color:["ff9b5701"],width:["24.1695"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-17275-nodesc-normal"},LineStyle:[{color:["ff9b5701"],width:["17.275"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-17275-nodesc-highlight"},LineStyle:[{color:["ff9b5701"],width:["25.9125"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-17469-nodesc-normal"},LineStyle:[{color:["ff9b5701"],width:["17.469"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]},{$:{id:"line-01579B-17469-nodesc-highlight"},LineStyle:[{color:["ff9b5701"],width:["26.2035"]}],BalloonStyle:[{text:["<h3>$[name]</h3>"]}]}],StyleMap:[{$:{id:"icon-1538-757575"},Pair:[{key:["normal"],styleUrl:["#icon-1538-757575-normal"]},{key:["highlight"],styleUrl:["#icon-1538-757575-highlight"]}]},{$:{id:"icon-1538-757575-nodesc"},Pair:[{key:["normal"],styleUrl:["#icon-1538-757575-nodesc-normal"]},{key:["highlight"],styleUrl:["#icon-1538-757575-nodesc-highlight"]}]},{$:{id:"icon-1538-7CB342"},Pair:[{key:["normal"],styleUrl:["#icon-1538-7CB342-normal"]},{key:["highlight"],styleUrl:["#icon-1538-7CB342-highlight"]}]},{$:{id:"icon-1538-7CB342-nodesc"},Pair:[{key:["normal"],styleUrl:["#icon-1538-7CB342-nodesc-normal"]},{key:["highlight"],styleUrl:["#icon-1538-7CB342-nodesc-highlight"]}]},{$:{id:"icon-1538-E65100"},Pair:[{key:["normal"],styleUrl:["#icon-1538-E65100-normal"]},{key:["highlight"],styleUrl:["#icon-1538-E65100-highlight"]}]},{$:{id:"icon-1632-7CB342"},Pair:[{key:["normal"],styleUrl:["#icon-1632-7CB342-normal"]},{key:["highlight"],styleUrl:["#icon-1632-7CB342-highlight"]}]},{$:{id:"icon-1633-0288D1"},Pair:[{key:["normal"],styleUrl:["#icon-1633-0288D1-normal"]},{key:["highlight"],styleUrl:["#icon-1633-0288D1-highlight"]}]},{$:{id:"icon-1633-757575"},Pair:[{key:["normal"],styleUrl:["#icon-1633-757575-normal"]},{key:["highlight"],styleUrl:["#icon-1633-757575-highlight"]}]},{$:{id:"icon-1633-757575-nodesc"},Pair:[{key:["normal"],styleUrl:["#icon-1633-757575-nodesc-normal"]},{key:["highlight"],styleUrl:["#icon-1633-757575-nodesc-highlight"]}]},{$:{id:"icon-1633-7CB342"},Pair:[{key:["normal"],styleUrl:["#icon-1633-7CB342-normal"]},{key:["highlight"],styleUrl:["#icon-1633-7CB342-highlight"]}]},{$:{id:"icon-1633-7CB342-nodesc"},Pair:[{key:["normal"],styleUrl:["#icon-1633-7CB342-nodesc-normal"]},{key:["highlight"],styleUrl:["#icon-1633-7CB342-nodesc-highlight"]}]},{$:{id:"icon-1633-E65100"},Pair:[{key:["normal"],styleUrl:["#icon-1633-E65100-normal"]},{key:["highlight"],styleUrl:["#icon-1633-E65100-highlight"]}]},{$:{id:"icon-1633-E65100-nodesc"},Pair:[{key:["normal"],styleUrl:["#icon-1633-E65100-nodesc-normal"]},{key:["highlight"],styleUrl:["#icon-1633-E65100-nodesc-highlight"]}]},{$:{id:"line-01579B-15144-nodesc"},Pair:[{key:["normal"],styleUrl:["#line-01579B-15144-nodesc-normal"]},{key:["highlight"],styleUrl:["#line-01579B-15144-nodesc-highlight"]}]},{$:{id:"line-01579B-15531-nodesc"},Pair:[{key:["normal"],styleUrl:["#line-01579B-15531-nodesc-normal"]},{key:["highlight"],styleUrl:["#line-01579B-15531-nodesc-highlight"]}]},{$:{id:"line-01579B-15725-nodesc"},Pair:[{key:["normal"],styleUrl:["#line-01579B-15725-nodesc-normal"]},{key:["highlight"],styleUrl:["#line-01579B-15725-nodesc-highlight"]}]},{$:{id:"line-01579B-15919-nodesc"},Pair:[{key:["normal"],styleUrl:["#line-01579B-15919-nodesc-normal"]},{key:["highlight"],styleUrl:["#line-01579B-15919-nodesc-highlight"]}]},{$:{id:"line-01579B-16113-nodesc"},Pair:[{key:["normal"],styleUrl:["#line-01579B-16113-nodesc-normal"]},{key:["highlight"],styleUrl:["#line-01579B-16113-nodesc-highlight"]}]},{$:{id:"line-01579B-17275-nodesc"},Pair:[{key:["normal"],styleUrl:["#line-01579B-17275-nodesc-normal"]},{key:["highlight"],styleUrl:["#line-01579B-17275-nodesc-highlight"]}]},{$:{id:"line-01579B-17469-nodesc"},Pair:[{key:["normal"],styleUrl:["#line-01579B-17469-nodesc-normal"]},{key:["highlight"],styleUrl:["#line-01579B-17469-nodesc-highlight"]}]}],Folder:[{name:["免費汽車停車場"],Placemark:[{name:["(Free)家樂福 彰化店"],description:["彰化市的家樂福重機進出場可以直接繞過柵欄或是按鈴請服務員開柵欄，以上已有與家樂福服務中心確認無需繳費<br>感謝 伸港陳禹勳@PTT"],styleUrl:["#icon-1538-E65100"],Point:[{coordinates:[`
            120.5425197,24.0944302,0
          `]}]},{name:["(Free)家樂福埔里店 Carrefour Pu Li Store"],description:["家樂福（埔里）	停汽車格，免收費。	0	管理員協助 / 按鈴 <br>感謝q64071239分享"],styleUrl:["#icon-1538-E65100"],Point:[{coordinates:[`
            120.9571119,23.9708346,0
          `]}]},{name:["(Free｜按鈴)野柳遊客中心"],description:["野柳地質公園停車場/新北市萬里區港東路(野柳遊客中心旁)	觀光臨停免費	免費	管理員協助 / 按鈴	無 /未知 <br> （2023/7月）來觀光詢問管理員可停，依指示停放不收費。<br>感謝LAN@PTT"],styleUrl:["#icon-1538-E65100"],Point:[{coordinates:[`
            121.6899463,25.2052837,0
          `]}]},{name:["(Free - 管理員)義享時尚廣場-汽車"],description:["2024/7/4回報更新<br>汽機車停車場皆可停 /汽車停車場大重免費<br>---------------------------<br>管理員協助進場<br>感謝 大鳥@PTT"],styleUrl:["#icon-1538-7CB342"],Point:[{coordinates:[`
            120.3063019,22.6564504,0
          `]}]},{name:["(Free)口湖休息站"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            120.1513533,23.5744888,0
          `]}]},{name:["(Free)新北市忠烈祠"],description:["汽車格，免費  無出入口管制  免費停汽車格，無管制  "],styleUrl:["#icon-1538-7CB342"],Point:[{coordinates:[`
            121.4284696,25.1781969,0
          `]}]},{name:["(Free)右車道進-新光三越台南新天地"],description:["離場前需至1F服務台請服務員手動輸入車牌及完成消費折抵 如無需繳費即可直接離場 需繳費則需另尋自動繳費機<br>感謝Jeff1445@ptt<br>-----2024/04更新-----<br>入場辨識 重機靠右道進場 雖只有前牌掃描但偵測到重機會自動開閘 無需掃牌可進場 免費 出場靠左道也無需繳費、掃牌即可出場<br><br>不確定是否有重機專用格 但是大型停車場 我都直接停汽車格 位置也很夠        "],styleUrl:["#icon-1538-7CB342"],Point:[{coordinates:[`
            120.1982502,22.9869358,0
          `]}]},{name:["(Free/3h)文化部"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.4431654,25.0559994,0
          `]}]},{name:["(Free)塔塔加夫妻神木"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            120.8907209,23.5125202,0
          `]}]},{name:["(Free)上東埔停車場"],description:["猴子很多東西要收好"],styleUrl:["#icon-1538-7CB342"],Point:[{coordinates:[`
            120.8858734,23.4826513,0
          `]}]},{name:["(Free)南方澳觀景臺停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.8657868,24.5770232,0
          `]}]},{name:["(Free)烏石鼻觀景停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.8652785,24.5314624,0
          `]}]},{name:["(Free)巨人之手停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            120.96885,24.3226646,0
          `]}]},{name:["(Free)24H 七星潭藍天停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.6239956,24.038312,0
          `]}]},{name:["(Free)193黑森林小徑汽車停放處"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.6224152,24.041401,0
          `]}]},{name:["(Free)台肥海洋深層水園區停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.640025,24.007327,0
          `]}]},{name:["(Free)美崙山公園停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.6118369,23.9852718,0
          `]}]},{name:["(Free)家樂福 花蓮店"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.6103187,24.0156018,0
          `]}]},{name:["(Free)馬槽櫻花公園"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.5696945,25.180766,0
          `]}]},{name:["(Free)上磺溪停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.5831489,25.1780675,0
          `]}]},{name:["(Free)石碇服務區"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.6454355,25.0090722,0
          `]}]},{name:["(Free)水秀小型停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            120.9010759,23.8527939,0
          `]}]},{name:["(Free)向山遊客中心停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            120.9013546,23.8509911,0
          `]}]},{name:["(Free)玄光碼頭停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            120.9131198,23.8521466,0
          `]}]},{name:["(Free)卑南遺址公園停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.1154563,22.7917146,0
          `]}]},{name:["(Free)免費停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.1538384,22.7478673,0
          `]}]},{name:["(Free)交通部觀光署東部海岸國家風景區管理處停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.324466,23.0191623,0
          `]}]},{name:["(Free)五華夜市"],description:["試營運期間去<br>指揮停機車區免費<br>需注意的是非機車格而是停車區<br>所以可能跟一般機車擠在一起"],styleUrl:["#icon-1632-7CB342"],Point:[{coordinates:[`
            121.4848795,25.0899781,0
          `]}]},{name:["(Free)坪林茶業博物館停車場"],styleUrl:["#icon-1538-7CB342-nodesc"],Point:[{coordinates:[`
            121.7127942,24.9349826,0
          `]}]},{name:["(Free)好市多 新北新莊店"],description:["2026/09/22<br>好市多員工引導閘門旁邊騎進去不用辨識車牌<br>可停免費汽車格"],styleUrl:["#icon-1538-7CB342"],Point:[{coordinates:[`
            121.434206,25.0273744,0
          `]}]}]},{name:["重機友善店家"],Placemark:[{name:["嵐天咖啡館 ARASHI SKY COFFEE"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4126426,25.1227567,0
          `]}]},{name:["Rady’s 銳迪驛站〔美式餐廳｜咖啡｜寵物友善｜車聚熱點｜煙燻牛肉堡｜帶骨牛小排｜網紅打卡〕"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.528887,24.9523712,0
          `]}]},{name:["昔日咖啡｜OLD DAYS COFFEE"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4824891,25.0325151,0
          `]}]},{name:["No:8車庫咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4737727,25.0367645,0
          `]}]},{name:["鹿邊咖啡Deer cafe"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5733824,25.297769,0
          `]}]},{name:["左轉靠右咖啡酒吧｜新莊酒吧｜新莊咖啡廳｜新莊美食"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4630314,25.0639322,0
          `]}]},{name:["6115 Caf'e (無訂位）"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.3623716,25.1347664,0
          `]}]},{name:["安妮美式咖啡館(Anne Time) /汽車 /大型重機/ 機車 /停車免費"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4318221,25.1602985,0
          `]}]},{name:["GARAGE Cafe'"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4049816,25.129339,0
          `]}]},{name:["GRAY CAFE 咖灰（不提供訂位服務，最後點餐1930）"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.521215,25.284228,0
          `]}]},{name:["老玩童礦坑咖啡"],description:["有停車空間<br>常有重機於此處休息<br>https://maps.app.goo.gl/kj5m2TMaSZZ5AG6q7"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.7114243,25.0239732,0
          `]}]},{name:["鹿鹿Brunch 早午餐 咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.7069895,24.9196845,0
          `]}]},{name:["坪林香草庭園咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.7036601,24.9357958,0
          `]}]},{name:["目覺北城 (See the northern city)"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5914923,24.967886,0
          `]}]},{name:["山中怪獸Mountain Monster"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.6253782,25.2660012,0
          `]}]},{name:["GMS coffee 特波咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5924828,25.0551543,0
          `]}]},{name:["KICK Burger"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5232615,24.9436479,0
          `]}]},{name:["Rider’s Hall 騎士殿 咖啡、飲料、輕食"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.4484552,22.7680183,0
          `]}]},{name:["SUMMER’S TIME"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.3579524,25.1327359,0
          `]}]},{name:["平交道咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.7805693,25.0459769,0
          `]}]},{name:["151高地"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.2911678,25.101873,0
          `]}]},{name:["第三航廈機場咖啡"],description:["有附一排機車格可以停，也有汽車停車場"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.2174269,25.0570169,0
          `]}]},{name:["56咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6516463,24.2195948,0
          `]}]},{name:["漢克先生 Mr.H motor beauty&coffee&tea"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.69092,24.1347871,0
          `]}]},{name:["Cheers Cafe 騎士咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6233754,24.1390923,0
          `]}]},{name:["GOGOBOX餐車誌in樂灣基地"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.306979,24.8250728,0
          `]}]},{name:["草里一號店"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.6171079,25.277336,0
          `]}]},{name:["咖啡公園"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5722932,25.2973498,0
          `]}]},{name:["親澤庭園咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.8035186,25.0171231,0
          `]}]},{name:["海倫咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.6461054,24.9518675,0
          `]}]},{name:["NineSky 九天"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.3446668,24.9295921,0
          `]}]},{name:["7-Eleven 新雪霸門市"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.8736406,24.4492018,0
          `]}]},{name:["全家便利商店 國姓水長流店"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.8764164,24.0647952,0
          `]}]},{name:["7-ELEVEN 信義鄉門市"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.8536032,23.7022207,0
          `]}]},{name:["全家便利商店 新竹海上花店"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.930887,24.8393986,0
          `]}]},{name:["7-ELEVEN 坪林門市"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.7066017,24.9344892,0
          `]}]},{name:["7-ELEVEN 韌性門市"],description:["有廁所<br>前方有停車空地<br>https://maps.app.goo.gl/PLVSBnE2PLbDZnkX9"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.7634568,24.7965482,0
          `]}]},{name:["財茂彎-328 coffee"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.6737732,24.9418781,0
          `]}]},{name:["34k菇菇咖啡"],description:["門口可停車<br>約可停十幾台"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.6818669,24.941448,0
          `]}]},{name:["香草庭園咖啡 頭城店"],description:["週一至週四：中午12點至22點<br>週五：中午12點至24點<br>週六：早上08點至24點<br>週日：早上08點至22點<br>遇下雨或沒人提早打烊"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.7964763,24.8541195,0
          `]}]},{name:["芳蘭本味Tea& Coffee"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.6241647,24.9563758,0
          `]}]},{name:["鬍鬚茶園"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.6820159,24.9412263,0
          `]}]},{name:["莫內咖啡"],description:["重機好停<br>經典車聚地點"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.6214947,25.0096145,0
          `]}]},{name:["heyman黑門咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.5615795,23.9434029,0
          `]}]},{name:["hierin coffee"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5537409,25.0528887,0
          `]}]},{name:["BALLs custom & cafe 丸製"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4093711,25.0028371,0
          `]}]},{name:["Sunset Coffee & Tea"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.2251502,22.8746925,0
          `]}]},{name:["大三重百貨"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4914598,25.074486,0
          `]}]},{name:["知本老爺酒店"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.0070232,22.691921,0
          `]}]},{name:["西門路四段171巷19弄6-10號"],description:["可詢問老闆能否停店內"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.206221,23.0105125,0
          `]}]},{name:["Binma Area 134"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4886304,25.1897985,0
          `]}]},{name:["黃金咖啡海岸"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.916564,25.0745965,0
          `]}]},{name:["7-ELEVEN 田野門市"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.954719,24.6447095,0
          `]}]},{name:["林記蚵餃"],description:["2026/03/27 新增<br>重機友善店家，用餐停車免費<br>按鈕取幣<br>林記蚵餃附屬停車場，有專用格<br>https://maps.app.goo.gl/HbYFAZuTPD8qpqvGA<br>感謝網友熱情回報"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.1505305,23.4579191,0
          `]}]},{name:["拾夢咖啡"],description:["門口對面可停"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.855559,25.1144415,0
          `]}]},{name:["莫內咖啡"],description:["很大片的停車空地<br>常見重機集散地"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.9951667,24.9480583,0
          `]}]},{name:["芭NANA CAFÉ"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.3455597,25.1276232,0
          `]}]},{name:["來去走走Lucky zou zou~"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4612239,25.1696751,0
          `]}]},{name:["騎士驛站-咖啡屋"],description:["裡面空地可停"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.3258433,24.9349702,0
          `]}]},{name:["海澍景觀咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.3472782,25.1263218,0
          `]}]},{name:["公雞咖啡"],description:["旁邊都是白線"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.467927,25.2503579,0
          `]}]},{name:["獅潭牛肉麵"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.937942,24.5730661,0
          `]}]},{name:["時間厝咖啡館"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.3654123,24.8626383,0
          `]}]},{name:["清一色牛肉麵 大墩店"],description:["店前有停車位，有頂棚下雨天方便整裝。<br>感謝網友熱情回報"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.6529072,24.159583,0
          `]}]},{name:["Sunny Coffee"],description:["可停正門口<br>https://maps.app.goo.gl/T9jrrfBokyx65zMn6"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.2476473,24.936772,0
          `]}]},{name:["7-ELEVEN 百吉門市"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.3060665,24.8302188,0
          `]}]},{name:["永安漁港 大型停車場"],description:["免費汽機車停車場<br>路邊機車停車格在桃園內<br>所以也可以停"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.0138042,24.9882928,0
          `]}]},{name:["海上教堂咖啡"],description:["免費停車場"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.4767637,22.449432,0
          `]}]},{name:["石碇小野Lisa 咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.6916198,25.0059051,0
          `]}]},{name:["金時代自助洗車 重新暢洗店（計時收費）"],description:["可至機車區洗，照機車區計時收費 40/30m<br>機車區是後面巷子<br>走河堤那邊會是汽車收費<br>https://maps.app.goo.gl/cewCqmRPqEu1z9GA9"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.4845449,25.0534893,0
          `]}]},{name:["秘丼 • 生魚片丼飯"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4613277,25.1696323,0
          `]}]},{name:["楓香咖啡陳添鏞老闆"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.9291315,23.8831957,0
          `]}]},{name:["妮珂森咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.8770132,24.0588707,0
          `]}]},{name:["布魯諾咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.569676,24.1556709,0
          `]}]},{name:["丹品咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.512127,23.283544,0
          `]}]},{name:["Ton Up Cafe 英倫復古餐廳"],description:["重機行照可以打九折<br>以前貼文有說重機可以停庭院，停之前可以跟老闆確認<br>配合停車場可以折 50<br>https://maps.app.goo.gl/8GwTpADyUEwh6fTk6"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.4277808,25.1615924,0
          `]}]},{name:["全家便利商店 石岡登峰店"],description:["前方空地停車場可停車"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.7740556,24.2745139,0
          `]}]},{name:["通霄日落大道觀景台"],description:["約六格汽車格免費停車"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.7018575,24.5425769,0
          `]}]},{name:["臺鹽通霄觀光園區 (臺鹽通霄精鹽廠)"],description:["免費汽車停車場"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.7035802,24.5559494,0
          `]}]},{name:["7-ELEVEN 廣洽門市"],description:["前方空地附設免費氣機車停車場"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.5229101,24.2196384,0
          `]}]},{name:["7-ELEVEN 關連門市"],description:["旁邊加油站<br>附設停車格<br>https://maps.app.goo.gl/1cPCMDDzxRMHNRbp8"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.514091,24.2287137,0
          `]}]},{name:["梧棲漁港"],description:["重機免收停車費<br>https://youtu.be/pu8i3mBpwuY?t=90"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.5180791,24.2926803,0
          `]}]},{name:["台灣中油竹東站(直營&自助)"],description:["可以稍微停車休息<br>有洗手間<br>有咖啡"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.096484,24.722462,0
          `]}]},{name:["綠光水岸 複合式餐廳"],description:["門口附設的機車停車格比一般機車格要大<br>可以停重機"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.995072,24.7005979,0
          `]}]},{name:["上山喝咖啡"],description:["往下一點點的平台可以停車"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.1375315,24.6827424,0
          `]}]},{name:["7-ELEVEN 南山門市"],description:["前面空地可以停車<br>旁邊就是加油站<br>https://maps.app.goo.gl/4jsqrJDcVGw8Z5RF8"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.3791021,24.4392075,0
          `]}]},{name:["7-ELEVEN 環山門市"],description:["前方是畫白線<br>可以停<br>但位置不是很多<br>https://maps.app.goo.gl/him2yAGG1WMymjGH7"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.2914795,24.3117495,0
          `]}]},{name:["EGO早午餐/汽車美容"],description:["早午餐<br>前方有一片停車空地<br>可以小車聚"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.7668942,24.7487856,0
          `]}]},{name:["喜日咖啡｜Nice Day Café"],description:["有免費重機停放處<br>https://www.facebook.com/photo?fbid=553229680796191&set=pcb.553229724129520"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.500202,25.0564977,0
          `]}]},{name:["湯米男孩tommyboycafe黎明店"],description:["復免費停車場<br>https://maps.app.goo.gl/8ReriiH7LDQf2EEm8<br>https://www.threads.com/@tommyboy_cafe/post/DTZyGlJEuKz/media"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.6370289,24.1731675,0
          `]}]},{name:["章魚屋"],description:["門口大約可放四五台車<br>騎重機可打折<br>靜巷晚上需牽出巷子後再發動"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.2261111,23.0080923,0
          `]}]},{name:["Lin House 餐廳"],description:["門口兩側都可以停重機<br>https://maps.app.goo.gl/p8pow7BehgKTBNCS6"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.704683,24.9353585,0
          `]}]},{name:["建益機車行"],description:["公道價機車救援"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            120.5936427,23.2991881,0
          `]}]},{name:["巴拉卡鐵人咖啡"],description:["停車位充足"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.5020786,25.203689,0
          `]}]},{name:["全家便利商店 內門羅漢門店"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.4540155,22.9233772,0
          `]}]},{name:["內山女子咖啡室 (店休請看IG/FB公告) 義式咖啡/軟餅乾/起司蛋糕 Lai Suann Good Girls Coffee Bar"],description:["店前面可以停車<br>約 4~6 台車"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.7064084,24.9345276,0
          `]}]},{name:["泰安觀止溫泉會館"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.9518682,24.4676236,0
          `]}]},{name:["嘉義觀止飯店"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.429566,23.47944,0
          `]}]},{name:["龍帥咖啡園藝農場"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4026372,25.1326668,0
          `]}]},{name:["TAICHI 立昇台北"],description:["🛵顧客重機免費停門口 <br>凡來店消費之大型重機，可免費停放本店門口指定區域，請依現場標線與指示停放，並留意行人與車輛通行安全。"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.5804129,25.0513744,0
          `]}]},{name:["66驛站美式餐廳（19:00最後供餐）"],description:["一樓外面可停重機<br>內部有很多哈雷"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.056263,25.031581,0
          `]}]},{name:["水漾石門景觀餐廳&咖啡廳"],description:["可以停在庭院<br>https://maps.app.goo.gl/Moz8M1J2RZ2u6xXF9"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.290804,24.817863,0
          `]}]},{name:["嚴咖啡 a yen cafe"],description:["店前都是白線好停車"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.3436995,24.8230662,0
          `]}]},{name:["丸山咖啡"],styleUrl:["#icon-1684-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.3440793,24.8255253,0
          `]}]},{name:["七號公路咖啡館"],description:["外面有十幾格自己的機車車位"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.3559612,24.8254622,0
          `]}]},{name:["巴尚咖啡（ 窯烤披薩 麵包 窯烤餐 下午茶）"],description:["有六七格位置加白線可以停"],styleUrl:["#icon-1684-7CB342-labelson"],Point:[{coordinates:[`
            121.2757874,24.7839219,0
          `]}]}]},{name:["汽車費率"],Placemark:[{name:["(30/h)福林公園地下停車場"],description:["走汽車道的話，30/H 室內 管理員, 3個專用格"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5305566,25.0960248,0
          `]}]},{name:["(120/h)台北美福大飯店 停車場"],description:["經詢問警衛<br>可停放地下室<br>用餐住宿比照汽車折抵"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            121.553995,25.0802163,0
          `]}]},{name:["(20/h)十三行博物館第二停車場(二排)"],description:["在路邊停車費查詢可以看到包含這個停車場<br>應該算道路範圍<br>勇者可以挑戰機車區"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4057956,25.155548,0
          `]}]},{name:["(50/2h)北新停車場"],description:["人工收費，露天停車場。"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.4490997,25.1785656,0
          `]}]},{name:["(50/d)大溪橋頭汽機車停車場"],description:["沒有機車格<br>有Google 評論說可以停"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            121.281393,24.8849162,0
          `]}]},{name:["(20/h)景美國小地下停車場"],description:["景美國小地下停車場 入場辨識 有後排辨識        "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.540219,24.9887842,0
          `]}]},{name:["(20/h)新莊國民運動中心停車場"],description:["***倒退嚕進場***<br>感謝tonyX@ptt"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4475827,25.0395491,0
          `]}]},{name:["(20/h) 俥亭停車府後地下停車場"],description:["汽車費率 20h 倒退嚕"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.970219,24.8071,0
          `]}]},{name:["(40/h)家樂福 豐原店"],description:["汽車費率 1小時40元 倒退嚕掃牌"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.7063822,24.2521761,0
          `]}]},{name:["(120/h) 統一國際大樓停車場（Dream Plaza）"],description:["機車格汽車格都可停<br>都收汽車費率"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5660488,25.0399458,0
          `]}]},{name:["(40/h)晶冠廣場停車場"],description:["前牌辨識"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4589325,25.0643126,0
          `]}]},{name:["(100/次)奧萬大國家森林遊樂區收費亭"],description:["機車 20<br>重機/汽車 100"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.1693744,23.9542321,0
          `]}]},{name:["(50/h | 200/d)三民家商 校內停車"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.3012831,22.6660057,0
          `]}]},{name:["(30/h)臺中市南屯區文山停車場"],description:["無論停汽機車格都收汽車費率"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.6104854,24.1494881,0
          `]}]},{name:["(30/h)嘟嘟房松壽廣場地下停車場"],description:["後牌辨識，出場要去B1找管理員人工繳費"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5664353,25.0370551,0
          `]}]},{name:["(30/h)長福平面停車場"],description:["改計時收費"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.3725515,24.9320026,0
          `]}]},{name:["(20/h - 按鈴)捷運永寧站轉乘停車場(承天路)"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.4362826,24.9656602,0
          `]}]},{name:["(40/h | 630/d)松山機場臺北國際航空站第三停車場"],description:["有重機辨識區 收費比照汽車"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.553563,25.0630499,0
          `]}]},{name:["(20/h)凱比吉公園"],description:["凱比吉公園 汽/機車費率 及 汽/機車停放位置, 收費 （費率不符 或 免費變收費) 無管制<br>揭停車場自113年4月1日起實施停車計時收費，收費時間為每日8時至20時，例假日照常收費；停車場非收費時段仍開放使用。<br>二、收費方式及停車費率：<br>（一）小型車及重型機車：收費方式以計時收費，停車費率每小時收費新臺幣20元整。        "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.2928885,23.1279449,0
          `]}]},{name:["(20/h | 120/d)新北市三重光復平面停車場"],description:["汽車費率 20h 後牌辨析 12小時內最高120元"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4746157,25.0560805,0
          `]}]},{name:["(20/h)板橋中山國小地下停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.4483621,25.0008401,0
          `]}]},{name:["(30/h)新北市立圖書館總館"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.455153,25.0014859,0
          `]}]},{name:["(30/h)陽明公園停車場"],description:["按鈕取票, 一小時30, 半小時15"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.3103217,24.9799179,0
          `]}]},{name:["(40/h)朝陽公園地下停車場"],description:["40/H 夜間22-8 10/H<br>有後牌辨識"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5137267,25.0561166,0
          `]}]},{name:["(40/h)爭議中- 大稻埕公園地下停車場"],description:["40/H, 夜間19-8 10/H (節日除外)<br>----------------<br>有關早前網友回報，作者有寫市政陳情信，<br>停管處回覆本場地為公辦民營，<br>大型重機依規定可停，會督促業者按照規定<br>不得拒絕大型重機停放"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5105378,25.0584443,0
          `]}]},{name:["(20/h)遠東百貨 竹北店"],description:["汽車停車區可停重機@蟑螂頭PTT"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.023336,24.8223519,0
          `]}]},{name:["(60/h 左車道進)Mega City 板橋大遠百停車場"],description:["停汽車, 比照收費 有後牌<br>感謝a0913@PTT"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4673987,25.0144656,0
          `]}]},{name:["(40/h)台北市農會C區收費停車場"],description:["兩輪誌, 40//H"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5429369,25.0361515,0
          `]}]},{name:["(50/4h | 注意開放時間)國家圖書館"],description:["**管理員協助**<br>本館設有地下停車場，提供35個車位供一般讀者停放，讀者可從中山南路南側車道進入停車場。收費方式依星期二至星期六8:50--21:00，星期日8:50-17:00開放時間，分時段收費，以進館及離館時間計算收費， 每4小時為一時段，每時段停車費新臺幣50元；2小時以內，則採半價彈性收費，超過2小時，以單一時段計費。"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5165693,25.0373594,0
          `]}]},{name:["(20/h)金城立體停車場"],description:["汽車格, 管理員開閘登記"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4585969,24.9835981,0
          `]}]},{name:["(80/h)台北市士林區戶政事務所"],description:["用鍵盤輸入車牌 ; 半小時離場免費"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5196372,25.092678,0
          `]}]},{name:["(50/h | 280/d)長揚停車場(康定店)"],description:["按鈕取幣"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5016689,25.0337708,0
          `]}]},{name:["(40/h | 240/15h - 後牌)榮星花園地下停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5382948,25.0641997,0
          `]}]},{name:["(平30/h | 假40/h)松山工農地下停車場站"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5724754,25.0391011,0
          `]}]},{name:["(30/h - 後牌)興雅國中地下停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5727994,25.0348365,0
          `]}]},{name:["(60/h)Times 南門市場停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5183946,25.0321045,0
          `]}]},{name:["(50/H)南港車站地下停車場"],description:["2023/12/9起, 重機停車比照汽車"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.6036316,25.0520281,0
          `]}]},{name:["(30/h) 三腳渡平面停車場"],description:["汽車費率 30h 無出入口管制 2 格 或以上 <br>超過4小時會被拖吊"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5163917,25.0818385,0
          `]}]},{name:["(50/h - 管理員)天母東側停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.530736,25.1184644,0
          `]}]},{name:["(50/h - 管理員)天母西側停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.5297696,25.1187531,0
          `]}]},{name:["(平50/d | 假40/h)故宮廣場停車場"],styleUrl:["#icon-1538-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.5490323,25.09907,0
          `]}]},{name:["(平10/h | 假60/h)貓空動物園站地下停車場"],styleUrl:["#icon-1538-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.5788148,24.997392,0
          `]}]},{name:["(平50/d | 假60/h)木柵動物園停車場（河川高灘地）"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5784531,24.9982346,0
          `]}]},{name:["(30/h - 管理員)鹽埕停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            120.2864189,22.6252183,0
          `]}]},{name:["(30/h)文山區行政中心便民停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.56947,24.989472,0
          `]}]},{name:["(20/h)興隆公共住宅D2區地下停車場"],description:["汽車費率、無後方辨識 <br>依照管理員指示停汽車或機車格、無專用格        "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5625456,24.9881558,0
          `]}]},{name:["(20/h)水源快速道路高架橋下停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.5353526,25.0038588,0
          `]}]},{name:["⇨(50/h)市民大道延吉段停車場"],description:["收費會按照時間不同, 50/H為最高收費"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.552122,25.044458,0
          `]}]},{name:["(平40/h | 假60/h)華山文創"],description:["按鈕取票 華山文創, 平日40/H, 假日60/H"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5286433,25.0435968,0
          `]}]},{name:["(40/h)臺北自來水事業處公館停車場"],description:["前牌辨析"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5354606,25.0110471,0
          `]}]},{name:["⇨(40/h)復敦段 市民大道停車場"],description:["按鈕請管理員協助<br>收費會按照時間不同, 40/H為最高收費"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5473897,25.0449666,0
          `]}]},{name:["(40/h | 280/d - 後牌)北寧路地下停車場"],description:["汽車費率 40/h 後牌辨析"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5525636,25.0491926,0
          `]}]},{name:["(30/h)國家考場大樓汽車地下停車場"],description:["按鈴停車30/H"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5502302,24.9870299,0
          `]}]},{name:["(30/h)台北大橋橋下停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.509893,25.063125,0
          `]}]},{name:["(40/h)中山堂地下停車場"],description:["有後牌但好像有點壞掉，如遇困難請呼叫管理員，感謝blackstyles@ptt 分享<br>（2023/3月）入場後牌可辨識到，機器正常繳費，離場時辨識不到，但按鈕管理員很快就協助開門，態度友善。<br>感謝LAN@ptt 分享"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.510625,25.0441167,0
          `]}]},{name:["(平60/h | 假70/h)台北車站西區地下停車場"],description:["台北車站西地下停車場可利用後車牌辨識進出場，辨識時車牌位置要在地面白框線垂直範圍內 感謝tony330857@PTT SUPERBIKE 22/10/03"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5154173,25.0475735,0
          `]}]},{name:["(30/h | 150/15h)民權公園地下停車場"],description:["對講機請管理人員協助進入"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.55889,25.062047,0
          `]}]},{name:["(30/h)中正運動中心停車場 - 注意部份為機械位"],styleUrl:["#icon-1538-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.5193082,25.0382225,0
          `]}]},{name:["(30/h)大安運動中心停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.5461487,25.0202369,0
          `]}]},{name:["(平40/h | 假50/h - 後牌)兩廳院停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5170729,25.0351962,0
          `]}]},{name:["(30/h)臺大辛亥汽機車停車場"],description:["汽車入口有標示重機圖案"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5431829,25.0206515,0
          `]}]},{name:["(40/h)延吉廢鐵道停車場"],description:["平面車位"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5550518,25.0432166,0
          `]}]},{name:["(30/h)龍門國中地下停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5382271,25.0237532,0
          `]}]},{name:["(50/h)金華公園地下停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.5316137,25.0296371,0
          `]}]},{name:["(50/h)附中公園地下停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.5424625,25.036124,0
          `]}]},{name:["(平20/h | 假40/h)大安森林公園地下停車場信義路出入口"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5358493,25.0332664,0
          `]}]},{name:["⇦⇨(30/h | 200/d)中林站 市民大道停車場"],description:["感謝c222ssss@PTT更新<br>有後牌辨析"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5222903,25.047956,0
          `]}]},{name:["(平20/h | 假30/h)新北市政府樹林藝文綜合行政大樓"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.4287703,24.9962564,0
          `]}]},{name:["(70/h 左車道進)國立臺灣師範大學運動場停車場"],description:["左車道有後牌辨識"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.525278,25.026602,0
          `]}]},{name:["(30/h)三鶯運動中心停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.3693829,24.9362013,0
          `]}]},{name:["(20/h | 100/d)大湖公園地下停車場"],description:["管理員協助進入"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.6020551,25.0835653,0
          `]}]},{name:["(40/h)青島國宅停車場"],description:["進場一律由管理員給票，憑票付費出場"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5240884,25.04368,0
          `]}]},{name:["(50/h | 320/d)台北車站K區地下街停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.5177734,25.0469584,0
          `]}]},{name:["(20/h)新竹稅務大樓停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.9697671,24.8062113,0
          `]}]},{name:["(平60/h | 假30/h)烏來立體停車場"],description:["車位多 管理員會出來抄車牌<br>管理員友善 <br>22/8/13到此一遊<br>彎處比較死 下坡要注意     "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5516614,24.865516,0
          `]}]},{name:["(20/h)公二停五地下停車場"],description:["辨識失敗，閘門會開啟，停妥後要向管理員索取停車扣繳費用。繳費一樣向管理室繳費，無法自動繳費。<br>感謝a07051226@ptt"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.0113553,24.8310511,0
          `]}]},{name:["(40/h)大誠立體停車場-倒退入場"],description:["汽車費率 40h 需要倒車進入 <br>只有前車牌辨識 必須倒車入場出場  "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.6791579,24.1447486,0
          `]}]},{name:["(30/h)港區第一停車場"],description:["管理員協助 / 按鈴<br>1.按對講機告知車號進場<br>2.至繳費機繳費後離場。<br>管理室在「南寮漁港福宴海鮮餐廳」的位置，建議停（地標上）港區第二停車場的位置。<br>感謝a07051226@ptt分享"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.927062,24.8489939,0
          `]}]},{name:["(30/h)本場較佳-港區第二停車場"],description:["管理員協助 / 按鈴<br>1.按對講機告知車號進場<br>2.至繳費機繳費後離場。<br>管理室在「南寮漁港福宴海鮮餐廳」的位置，建議停（地標上）港區第二停車場的位置。<br>感謝a07051226@ptt分享"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.9255187,24.8468613,0
          `]}]},{name:["(20/h)東大陸橋下停車場-中華站"],description:["車牌辨識失敗，閘門會開。<br>建議停妥後向管理員確認進場記錄，<br>有離場找不到紀錄被卡在閘門口經驗。<br>感謝a07051226@ptt分享"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.9750348,24.8043212,0
          `]}]},{name:["(40/h)台北榮總立體停車場"],description:["感謝VINCENT 管理員協助 / 按鈴"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.521465,25.1195166,0
          `]}]},{name:["(40/h - 後牌) 花博公園圓山停車場"],description:["感謝c222ssss@PTT<br>滿位時工作人員會放重機進場 找空位停好即可"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5203286,25.0686207,0
          `]}]},{name:["(30/h)行善社會住宅公有停車場"],description:["行善社宅下的停車場，停汽車格後車牌辨識 <br>uTagGO★力揚行善停車場 <br>感謝smileverday(uccu)@ptt"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.582184,25.061261,0
          `]}]},{name:["(30/h)建國-復興 市民大道停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.5404604,25.0447372,0
          `]}]},{name:["(平30/h | 假40/h)市民大道敦延段停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.550675,25.0447489,0
          `]}]},{name:["(30/h | 200/d)江翠國小地下停車場"],description:["2023/12/24到訪-文強停車代理後增加後牌辨識<br>-------------------------------------------------------<br>評論有說可以+打電話詢問<br>感謝yaoyuchien @ptt"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4738338,25.0332564,0
          `]}]},{name:["(30/h)府後立體停車場"],description:["走汽車道有後牌辨識，停汽車格，機器可正常繳費。須注意2~3樓為公務車位勿占用到。<br>感謝LAN@ptt"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4586655,25.0102412,0
          `]}]},{name:["(平30/h | 假40/h - 後牌)新北市淡水民生停車場"],description:["平日30/h | 160/12h <br>假日40/h | 200/12h <br>按鈴進場<br>感謝Datolon@ptt"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4618434,25.1379621,0
          `]}]},{name:["(平30/h | 假40/h)延平路立體停車場"],description:["停汽車格, 樓層坡道有點陡"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.2232344,24.9559945,0
          `]}]},{name:["(平30/h;200/d | 假40/h)國立臺灣圖書館 地下停車場"],description:["國立臺灣圖書館 地下停車場/新北市中和區中安街(過中和路350巷右手邊，四號公園地下)	汽車費率	「 平日30h/200d」；「假日(含)前一日17:00起，40h/無上限」	後牌辨析	無 /未知									親身經驗 或 車友/朋友/親人經驗	進入靠右走臨停車道，進出都有後牌辨識，機器繳費正常，也有車輛查詢功能。<br>感謝LAN@PTT"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5117133,25.0011307,0
          `]}]},{name:["(30/h | 240/d)三重區中山立體停車場"],description:["後牌辨析<br>一天(15h)最高收費120 <br>感謝機biker@youtube"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.489702,25.0608973,0
          `]}]},{name:["(平60/h | 假80/h)芝山站停車場"],description:["管理員協助/按鈴"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5225201,25.1029453,0
          `]}]},{name:["(50/h)中正路停車場"],description:["管理員協助/按鈴"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4357525,25.1729876,0
          `]}]},{name:["(40/h)日月亭汽車停車場(松山車站場)"],description:["臨停區域7-10F, 9F可找到工作人員登記車牌號碼<br>但9F為機械位 請停其它樓層<br>僅有前牌辨識"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5810779,25.0490047,0
          `]}]},{name:["(平30/h | 假40/h)三重區綜合體育館 地下停車場"],description:["按鈕取票 無單日上限<br>感謝Jeff1445@PTT"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.4914074,25.0618491,0
          `]}]},{name:["(30/h | 300/d) 健康1區社會住宅地下停車場"],description:["出入口只有前牌辨識，二輪從閘門縫隙處直接進入 無 /未知 30/h ; 150/12h 出入口只有前牌辨識，二輪從閘門縫隙處直接進入 無 /未知 親身經驗 或 車友/朋友/親人經驗 禁停機車格，只能停汽車格；由於沒有車牌辨識，進場後需要通知管理人員（到社宅管理室或是撥打電話 一區：0905-118-571 二區：0905-119-731）  "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5639936,25.0543129,0
          `]}]},{name:["(30/h | 300/d)健康社宅二區停車場"],description:["出入口只有前牌辨識，二輪從閘門縫隙處直接進入  30/h ; 150/12h  禁停機車格，只能停汽車格；由於沒有車牌辨識，進場後需要通知管理人員（到社宅管理室或是撥打電話 一區：0905-118-571 二區：0905-119-731）"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5656339,25.054672,0
          `]}]},{name:["(平20/h | 假30/h)林口停三公有停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.3890519,25.0788142,0
          `]}]},{name:["(20/h)右車道進-平實公園地下停車場"],description:["感謝 Jeff1445@ptt<br>汽車費率 20h 後牌辨析 <br>後牌辨識僅設置於右側車道（出入場均有"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.2364021,22.9928147,0
          `]}]},{name:["(20/h | 100/d)幸福公園停車場"],description:["感謝lumis888@ptt<br>汽車費率 每小時20元，當日上限100元 <br> 出入車道有多重減速板，請小心  "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.4913789,22.6786682,0
          `]}]},{name:["(40/h)新店行政園區市政廳地下停車場"],description:["新店行政園區停車場 汽車費率 40h 後牌辨析 親身經驗 或 車友/朋友/親人經驗  <br>感謝Joketrojan@ptt"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.542371,24.967338,0
          `]}]},{name:["(20/h)三峽國小地下停車場"],description:["管理員協助 / 按鈴<br>fantong@ptt"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.3676077,24.9350732,0
          `]}]},{name:["(30/h)鶯歌老街第二停車場"],description:["推車吧少年 僅有前牌辨識"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.3433595,24.9494311,0
          `]}]},{name:["(30/h)鶯歌老街第二停車場(北區)"],description:["推車照屁屁"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.3431187,24.9496377,0
          `]}]},{name:["(40/h)臺北表演藝術中心停車場"],description:["管理員協助/按鈴"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5236918,25.0846361,0
          `]}]},{name:["(30/h)歐特儀捷運新店站轉乘停車場"],description:["管理員協助/按鈴<br>感謝Timo"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.537613,24.9570375,0
          `]}]},{name:["(平40/h | 假50/h)藝文園區地下停車場(南區) "],description:["感謝harry7991mv@ptt"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.3010533,25.0139785,0
          `]}]},{name:["(20/h)文中小平面停車場"],description:["推車吧少車<br>鳴謝 pokejoe0603 (阿爽)@PTT 貼文"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4822888,25.0589558,0
          `]}]},{name:["(平20/h | 假30/h)城市車旅停車場 海安站"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            120.1956875,22.9912475,0
          `]}]},{name:["(20/h)尚順育樂世界"],description:["汽車費率 20h 專用 2 格 或以上 "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.9046566,24.6882052,0
          `]}]},{name:["(30/h)碧華國小地下停車場"],description:["汽車費率 30h"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.490031,25.085081,0
          `]}]},{name:["(60/h)南華高中收費停車場"],description:["汽車費率 60h "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5310122,25.0156107,0
          `]}]},{name:["(30/h)新北市立圖書館 青少年圖書館"],description:["汽車費率 30h 後牌辨析"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5108473,24.9595799,0
          `]}]},{name:["(30/h)水萍塭公園地下停車場"],description:["汽車費率 不分平假日一小時20 管理員協助 / 按鈴 無 親身經驗 或 車友/朋友/親人經驗 地上有重機入口標示（方便使用對講機）  "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.1945928,22.9856661,0
          `]}]},{name:["(20/h)新市國小地下停車場"],description:["汽車費率 20h "],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.2953828,23.0783336,0
          `]}]},{name:["(20/h)新竹火車站後站(一)汽車停車場"],description:["汽車費率 20h 後牌辨析 <br>新竹市公有停車位，<br>慢慢都開始改成後牌辨識系統  "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.9743026,24.8008332,0
          `]}]},{name:["(20/h)新竹火車站後站(四)汽車停車場"],description:["汽車費率 20h 後牌辨析 <br>新竹市公有停車位，<br>慢慢都開始改成後牌辨識系統  "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.9753929,24.802146,0
          `]}]},{name:["(20/h)新竹火車站後站(二)汽車停車場"],description:["汽車費率 20h 後牌辨析 <br>新竹市公有停車位，<br>慢慢都開始改成後牌辨識系統  "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.9745268,24.8018559,0
          `]}]},{name:["(20/h)北大路停車場"],description:["汽車費率 20h 後牌辨析 <br>新竹市公有停車位，<br>慢慢都開始改成後牌辨識系統  "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.9673988,24.8091779,0
          `]}]},{name:["(20/h)新竹火車站後站(三)汽車停車場"],description:["汽車費率 20h 後牌辨析 <br>新竹市公有停車位，<br>慢慢都開始改成後牌辨識系統  "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.9753797,24.8023625,0
          `]}]},{name:["(60/h)台壽金融總部大樓停車場"],description:["汽車費率 每小時$60 <br>管理員協助 / 按鈴 <br> 重機進入後到B1登記車號，停汽車車位  "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5218145,25.0546668,0
          `]}]},{name:["(30/h - 後牌)新北高工地下停車場"],description:["汽車費率 每小時$30 後牌辨析"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4488276,24.9838447,0
          `]}]},{name:["(50/h)建國北路高架橋下停車場G區"],description:["汽車費率 50/h 後牌辨析"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5369484,25.0596136,0
          `]}]},{name:["(30/h)歐特儀-擎天崗停車場-悠遊卡"],styleUrl:["#icon-1538-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.5739442,25.1667088,0
          `]}]},{name:["(30/h - 後牌)潭興立體停車場"],description:["汽車費率 半小時15元，1小時30元 曾經看到黃牌停在汽車格，所以應該是由管理員開閘門進去~  "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.7042467,24.211247,0
          `]}]},{name:["(40/h)新北思源公共停車場"],description:["汽車40/h 需要按鈴請管理員協助  汽車沒有後排辨識需要請管理員協助  "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4587766,25.0586159,0
          `]}]},{name:["(30/h)中壢大時鐘地下停車場"],description:["汽車費率 30h 後牌辨析 <br>只能停汽車格，停機車格會被管理員貼告示  "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.2214724,24.9555932,0
          `]}]},{name:["(平30/h | 假40/h - 現金繳費)彰新停車場"],description:["汽車費率 平日30h/假日40h 按鈕取票 <br>彰新路一段上的蜀都串串火鍋右轉進去到底就會看到,<br>路口也會看到停車場的牌子,只有現金繳費  "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.5389465,24.0903987,0
          `]}]},{name:["(平40/h | 假60/h - 有後牌)高雄流行音樂中心汽車停車場"],description:["汽車費率 平日 40/h 150/d 假日 60/h 250/d 後牌辨析"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.2868098,22.61745,0
          `]}]},{name:["(平40/h | 假20/h - 後牌)臺北市洲子立體停車場"],description:["汽車費率 平40/h 假20/h 後牌辨析 有共享/優先格"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5694361,25.0792778,0
          `]}]},{name:["(40/h)日月亭中央公園地下停車場 uTagGo"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            120.658261,24.180107,0
          `]}]},{name:["(30/h - 倒退掃牌)台中市台中公園地下停車場"],description:["汽車費率 半小時/15 前牌辨識  請用倒退嚕或者用手機拍車牌給機器掃"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.6829218,24.1455366,0
          `]}]},{name:["(平40/h | 假50/h - 後牌)展演中心地下停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.2990343,25.0162711,0
          `]}]},{name:["(30/h - 後牌)城市車旅-交通局朝富站"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.63754,24.1657166,0
          `]}]},{name:["(平20/h | 假30/h)城市車旅海安路地下停車場2"],description:["汽車費率 20-30h <br>平日10半H，假日15半H  "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.1963574,22.9951091,0
          `]}]},{name:["(Free)台65高架橋下新莊端停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4419759,25.0416524,0
          `]}]},{name:["(20/h | 120/d)嵿埔之星科技廣場停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.4201916,24.9585364,0
          `]}]},{name:["(40/h - 後牌)大豐公園地下停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5042121,25.1310894,0
          `]}]},{name:["(30/h - 管理員)三重正義國小地下停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.495267,25.064565,0
          `]}]},{name:["(30/h - 管理員)沙田立體停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            120.5592652,24.2353297,0
          `]}]},{name:["(20/h | 150/d - 管理員)瑞芳區立體停車場"],description:["現場沒有鈴可以按，管理員會主動出來開門"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.8093553,25.108198,0
          `]}]},{name:["(20/h - 按鈕)板橋國民運動中心停車場"],description:["板橋國民運動中心 汽車費率 20h 按鈕取票"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.458158,25.0228829,0
          `]}]},{name:["(20/h | 120/d - 管理員)八里區第一立體停車場"],description:["平日費用上限80元假日120元 "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.400185,25.1465709,0
          `]}]},{name:["(40/h - 管理員)光興國小地下停車場"],description:["專用2格以上, 有安全帽櫃可鎖"],styleUrl:["#icon-1633-E65100-labelson"],Point:[{coordinates:[`
            121.499321,25.0600965,0
          `]}]},{name:["(30/h - 後牌)台北南港展覽館2館"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.61524,25.0553807,0
          `]}]},{name:["(平30/h | 假60/h)後牌-台北流行音樂中心 地下停車場"],description:["小客車/大型重機收費標準<br><br> 平日優惠價（非活動日)<br>09:00-24:00 每小時 30 元<br>00:00-09:00 每小時 10 元<br>當日單次上限 120 元。<br><br> 例假日及活動日<br>09:00-24:00 每小時 60 元<br>00:00-09:00 每小時 10 元<br>當日單次上限 300 元。<br><br>每30分鐘計費一次，停放未滿 30 分鐘以 30 分鐘計費。"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5995218,25.0524815,0
          `]}]},{name:["(50/h)後牌-捷運士林站轉乘停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5266646,25.09152,0
          `]}]},{name:["(30/h | 180/12h)日月亭台泥基隆路場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.5684795,25.0483982,0
          `]}]},{name:["(平20/h | 假40/h-後牌)東明社會住宅(甲區) uTagGo"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.603923,25.054272,0
          `]}]},{name:["(平20/h | 假40/h-後牌)東明社會住宅(乙區) uTagGo"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.6040697,25.0544512,0
          `]}]},{name:["(60/h)TFC南港經貿大樓(台肥C2)"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.6182203,25.0578007,0
          `]}]},{name:["(20/h)府後街地下停車場"],description:["2023/6/1 重新開放17處坡度較陡停車場<br>按鈴進入，沒人的話需要倒退掃牌"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.675085,24.136244,0
          `]}]},{name:["(30/h)萬壽棒球場附地下停車場"],description:["2023/6/1 重新開放17處坡度較陡停車場"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.6500356,24.14613,0
          `]}]},{name:["(20/h | 50/d - 前牌)樹林區停二停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.3821115,24.9473056,0
          `]}]},{name:["(20/h)干城停車場"],description:["2023/6/1 重新開放17處坡度較陡停車場"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.6881618,24.1431557,0
          `]}]},{name:["(20/h)台中市南京路立體停車場"],description:["2023/6/1 重新開放17處坡度較陡停車場"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.6906821,24.1401194,0
          `]}]},{name:["(60/h)福星立體停車場"],description:["2023/6/1 重新開放17處坡度較陡停車場<br>汽車道按鈕取票入場<br>第一小時30<br>超過後每半小時30<br>凌晨 02:00~08:00 每小時20"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.6460473,24.1756356,0
          `]}]},{name:["(平30/h|假70/h)逢甲夜市-星享道公有停車場"],description:["2023/6/1 重新開放17處坡度較陡停車場<br>第一小都30<br>後面每半小依照平假日 15/35 h"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.6455327,24.1831811,0
          `]}]},{name:["(--)大雅區停四停車場"],description:["中市交停管字第1110071254號公告禁止<br>6/1被議員關切後會勘前趕快開放"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.6563338,24.2258824,0
          `]}]},{name:["(20/h)太平區中興立體停車場"],description:["2023/6/1 重新開放17處坡度較陡停車場"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.720663,24.1306369,0
          `]}]},{name:["(--)大雅公有停一停車場"],description:["中市交停管字第1110071254號公告禁止<br>6/1被議員關切後會勘前趕快開放"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.6472334,24.2238616,0
          `]}]},{name:["(？)臺中中央公園"],description:["中市交停管字第1110071254號公告禁止<br>2023/6/1 重新開放17處坡度較陡停車場"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.6533544,24.1857375,0
          `]}]},{name:["(20/h)文昌國小地下停車場"],description:["2023/6/1 重新開放17處坡度較陡停車場"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.6247834,24.3484998,0
          `]}]},{name:["(60/h|300/d)歐特儀昆陽停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.2724177,24.1224814,0
          `]}]},{name:[`(30/h)全之駐停八立體停車場
`],description:["2023/6/1 重新開放17處坡度較陡停車場"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.8284669,24.2556596,0
          `]}]},{name:["(平40/h | 假50/h - 後牌)桃園市立圖書館總館地下停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.3008635,25.0176219,0
          `]}]},{name:["(30/h)日月亭南門公園地下停車場汽車入口"],description:["可停機車區&汽車區<br>但重機2024/07開始已經比照汽車收費<br>建議不要走機車道"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.3063053,24.9912398,0
          `]}]},{name:["(20/h - 後牌)屏東公園仁愛路停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.4940645,22.6764486,0
          `]}]},{name:["(40/h - 專人引導)新北宏匯停車場"],description:["2024/5/1起，重機比照汽車停車<br>專用格一排，可折抵消費<br><br>大型重型機車(紅牌、黃牌)停車，可比照汽車停車，由汽車道入口「中央路」或「新北大道」，皆可進入。<br>另 B2設置有大型重型機車專用停放區，可由「新北大道」進入，停至專用停車格。"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.449299,25.0589811,0
          `]}]},{name:["(50/h)後牌-振興醫院第二停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5229971,25.1161876,0
          `]}]},{name:["(日40/h | 夜10/h)城市車旅停車場 三總汀州院區站"],description:["汽車費率 計時：40元/時(7時-22時),10元/時(22時-7時) "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5291432,25.016835,0
          `]}]},{name:["(平40/h | 假60/h)NOKE 忠泰樂生活"],description:["汽車費率 平日40/h，假日60/h 後牌辨析"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5570625,25.0822446,0
          `]}]},{name:["(50/h)新光三越台南中山店停車場"],description:["下到閘門口跟左前方保全揮揮手，他會幫你遙控開門，要記住進場時間 無 /未知 親身經驗 或 車友/朋友/親人經驗 停好車後先到一樓服務台跟服務人員告知車牌及進場時間，之後出場可在繳費機輸入車牌繳費，出口閘門可從右邊繞過去出場即可<br>---<br>感謝小鍾@FB"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.209846,22.99551,0
          `]}]},{name:["(40/h)新南停車場-國立臺灣大學"],description:["新南停車場-台灣大學	汽車費率	40h	按鈕取票	2 格 或以上 下停車場管理員引導停在管理室旁邊<br>感謝Jason300R@PTT分享"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5339371,25.0191198,0
          `]}]},{name:["(平40/h | 假50/h)大魯閣新時代購物中心"],description:["台中新時代 <br>汽車費率 平日40/h 假日50/h 後牌辨析<br>感謝伸港陳禹勳@PTT"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.6877477,24.1357726,0
          `]}]},{name:["(80/h)市府轉運站停車場-城市車旅"],description:["車牌辨識（但需按鈕）, 可折抵消費<br>感謝OLIVER分享"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5660354,25.0402213,0
          `]}]},{name:["(平30/h | 假40/h)美麗新淡海影城"],description:["汽車停車場平日$30/時；假日$40/時。 憑電影票根平日折抵3小時，假日折抵2小時，單日全館含商場消費最高折抵4小時。"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4378962,25.2005921,0
          `]}]},{name:["(40/h | 120/d)CITYLINK 內湖店停車場 3F(含)以上可停"],description:["可折抵消費<br>按車牌後4碼進場，40/h 當日最高120，3樓以上(含)汽車格都可以停        "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5943984,25.0841236,0
          `]}]},{name:["(20/h)興隆市場旁平面停車場"],description:["可能要倒退入場"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5472567,24.9994653,0
          `]}]},{name:["(20/h)樟新站停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.55694,24.979542,0
          `]}]},{name:["(20/h)保儀路平面停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.5663107,24.9842647,0
          `]}]},{name:["(平30/h | 假40/h)台北兒童新樂園汽車停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5148957,25.0981888,0
          `]}]},{name:["(40/h)新內一停車場"],description:["按鈕取幣"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.573567,25.0762288,0
          `]}]},{name:["(平30/h | 假60/h)Times JC PARK新莊停車場"],description:["鍵盤輸入 <br>感謝roit******@****.com"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4487113,25.0492249,0
          `]}]},{name:["(100/h)全聯大安北師店停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.5452719,25.0254345,0
          `]}]},{name:["(50/h | 250/d)中華電信仁愛停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.524619,25.036887,0
          `]}]},{name:["(40/h - 後牌)台北田徑場停車場"],description:['"致電台北田徑場 比照汽車的費率<br>感謝PTT車友"'],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5510704,25.0506045,0
          `]}]},{name:["(30/h | 150/d)應安停車場(承德場)"],description:["**倒車照屁股進場**<br>臨停：<br>平日：<br>09:00~21:00 半小時15元<br>21:00~09:00 半小時5元<br>平日當日最高150元<br><br>假日：<br>09:00~21:00 半小時15元<br>21:00~09:00 半小時5元<br>假日當日最高150元"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5166393,25.0617433,0
          `]}]},{name:["(30/h | 150/d)應安停車場(承德二場)"],description:["**倒車照屁股進場**<br>臨停：<br>平日：<br>09:00~21:00 半小時15元<br>21:00~09:00 半小時5元<br>平日當日最高150元<br><br>假日：<br>09:00~21:00 半小時15元<br>21:00~09:00 半小時5元<br>假日當日最高150元"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5179555,25.0616024,0
          `]}]},{name:["(平30/h | 假60/h)淡水中山停車場"],description:["**按鈕取票**<br>平日15/半小, 假日30/半小<br>隔壁幸福培菓寵物店消費可以折抵半小<br>妮妮小虎很可愛, 東西的價錢也很便宜"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.4413869,25.1713665,0
          `]}]},{name:["(30/h | 300/d)桃園長庚紀念醫院停車場"],description:["走左邊車道, 按重機按鈕人工拍後牌 <br>感謝傑哥會客室@YT"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.3662276,25.0289082,0
          `]}]},{name:["(平30/h | 假60/h)廣三SOGO"],description:["感謝PTT車友"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.6617725,24.1552793,0
          `]}]},{name:["(45/h)台中文心秀泰影城"],styleUrl:["#icon-1538-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            120.6457664,24.1297634,0
          `]}]},{name:["(100/h)台灣聯通停車場-晶華酒店場"],description:["台灣聯通停車場-晶華酒店場 入場辨識, 場地承包商改為 USpace 現在改為車牌辨識閘門，但沒有後牌辨識，需聯繫場地管理員開啟。<br>----------<br>23/7/11更新<br>進出場時，無車牌辨識，需於機器上鍵入車牌號碼數字部分，加#後可騎入（不要按到通話鍵）<br>感謝Oliver@PTT<br>-----------<br>26/03/16更新<br>進出場時直接繞過機器<br>警衛會協助引導至重機專用區<br>汽車消費1000 折一小時<br>重機住宿、用餐即免費"],styleUrl:["#icon-1633-E65100-labelson"],Point:[{coordinates:[`
            121.525346,25.0543428,0
          `]}]},{name:["(50/h)台大兒童醫療大樓汽車停車場"],description:["管理員引導, 汽車"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.517826,25.044516,0
          `]}]},{name:["(60/h)應安168停車聯盟 (永樂室內停車場)"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.5103734,25.0554454,0
          `]}]},{name:["(40/h)台北農會中正場"],description:["按鈕取票"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5427194,25.0362116,0
          `]}]},{name:["(30/h)愛買 三重店"],description:["前牌辨識"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4761974,25.0714136,0
          `]}]},{name:["(平60/h | 假80/h)京站時尚廣場"],description:["有重機專用格，是把汽車格對半切只能停一半"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5171935,25.049308,0
          `]}]},{name:["(70/h | 350/d)台安醫院停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.5470355,25.0476425,0
          `]}]},{name:["(60/h)遠東百貨 板橋中山店"],description:["繁忙時間會被引導至機車區<br>收費統一為汽車費率"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4644444,25.0109687,0
          `]}]},{name:["(100/h)遠東百貨 信義A13"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5679552,25.0367511,0
          `]}]},{name:["(50/h)高雄大遠百地下停車場"],description:["按鈕取票 50/h 感謝hompd43@ptt"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.304255,22.6124562,0
          `]}]},{name:["(30/h)明志書院立體停車場(汽車)"],description:["後牌辨析<br>感謝 a07051226@ptt"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.9656769,24.8016094,0
          `]}]},{name:["(室內30/h | 室外20/h)南紡購物中心"],description:["管理員協助 / 按鈴<br>停機車停車場有機率被開單<br>感謝jeff1445@ptt"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.232703,22.990786,0
          `]}]},{name:["(60/d)信義微風置地"],description:["出入口都要 180迴轉<br>車大台者自行考慮<br>https://www.youtube.com/watch?v=86fO25DNqDU<br>機車格機車費率"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5665476,25.0403143,0
          `]}]},{name:["(40/h)IKEA宜家家居 台中店"],description:["管理員協助 / 按鈴<br>入場告知管理員或按鈴告知車號<br>感謝 伸港陳禹勳"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.6432402,24.1473199,0
          `]}]},{name:["(40/h)銀河廣場"],description:["感謝j901386@ptt<br>有後牌辨識"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.2240919,24.9619165,0
          `]}]},{name:["(40/h)雙和醫院停車場"],description:["管理員協助 / 按鈴"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4940065,24.9931734,0
          `]}]},{name:["(20/h)宜舍停車場-板橋力行"],description:["悠遊卡進出"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.4473095,25.0007299,0
          `]}]},{name:["(80/h)全聯淡水淡大店"],description:["***倒退嚕***<br>不限額消費折半小時<br>消費滿300元折一小時<br>折抵上限為一小時"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.446651,25.1776989,0
          `]}]},{name:["(50/h - 後牌)台中大遠百Top City"],description:["感謝ilove1530@PTT"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.644702,24.16311,0
          `]}]},{name:["(30/h | 300/d)歐特儀-自強地下停車場"],description:["停車場是前牌辨識, 直接繞過閘門入場<br>停車後再到管理室告知管理員 (管理室在入口, 如果管理有看到也會幫你開閘門)<br>離場須至管室繳費後, 繞過閘門出場<br>感謝gamania014@ptt"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.2937847,22.6311591,0
          `]}]},{name:["(50h | 350/d)嘟嘟房(高鐵桃園3站)-專用格1/F"],description:["按鈴<br>2 格以上專用格<br>感謝lr0119"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.2159425,25.0140906,0
          `]}]},{name:["(50/h)時代寓所"],description:["車子在感應區15~30秒就會有管理員幫忙，或是從旁邊直接騎進去，停好車再去B1跟管理員講車牌號碼"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.523599,25.043521,0
          `]}]},{name:["(40/h)嘟嘟房(高鐵新竹2站)"],description:["汽車費率 40h 後牌辨析 40h 後牌辨析 "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.0409141,24.8098423,0
          `]}]},{name:["(100/h)微風南山停車場"],description:["管理員協助/按鈴<br>詢問是否為重機之後，管理員會要你下到B3汽車停車場。消費500元折抵0.5小時停車費，最多折抵3小時"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5675603,25.03456,0
          `]}]},{name:["(平30/h | 假40/h)景新大樓地下停車場"],description:["假日上限120,. 按鈕取票"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5423011,24.9900761,0
          `]}]},{name:["(40/h)松山文創園區(菸廠路進)"],description:["後牌辨析<br>入內消費有特定會員才可折抵<br>感謝oliver"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5606383,25.0438366,0
          `]}]},{name:["(30/h)日月光廣場汽車停車場"],description:["後牌辨析, 自由選擇汽機車停車場<br>感謝gamania014@ptt"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4448451,24.9793327,0
          `]}]},{name:["(50/h) 普羅旺斯停車場 (7:30-23:00)"],description:["按鈕取票"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5726368,25.041332,0
          `]}]},{name:["(平50/h | 假70/h)佳音168Parking停車場(限用悠遊卡)"],description:["平日上限200元, 假日上限400元<br>悠遊卡進出"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5215321,25.0250172,0
          `]}]},{name:["(50/h)開封街室內停車場"],description:["按鈕按票"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5128714,25.0460355,0
          `]}]},{name:["(日40/h | 夜10/h)國軍桃園總醫院"],description:["後牌辨析 *<br>汽車費率 前半小時免費，逾時以一小時算，<br>前半小時免費，逾時以一小時算，<br>07~22為40h ；22～07為10h，每日最高600元 <br>***感謝Ding  "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.2348665,24.8773785,0
          `]}]},{name:["(40/h)綠川東街14號(*收費亭 不是times)"],description:["汽車費率 20/半小時 停好跟管理員拿紙條，回來繳現金給他即可  "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.682219,24.136506,0
          `]}]},{name:["(平50/h|假100/h) LaLaport 台中 南館汽車停車場"],description:["感謝Jacky"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.6915401,24.1343175,0
          `]}]},{name:["(30/h)環球購物中心林口A9停車場"],description:["汽車費率 一小時30元 按鈕取票<br>感謝自由飛翼"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.361399,25.066148,0
          `]}]},{name:["(50/h)三井高發一路平面停車場"],description:["汽車費率 50H 後車牌辨識且門口有人會引導，進去後看到汽車格皆可停 <br>入口位於高發一路快到歸仁十三路一段，不是前面的立體停車場  <br>感謝小鍾@FB"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.2886418,22.9241737,0
          `]}]},{name:["(平30/h | 假40/h)捷運北投站轉乘停車場"],description:["平日30/h, 假日40/h 後牌辨析 "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4979288,25.1330225,0
          `]}]},{name:["(30/h | 130/d - 倒退掃牌)Times 龜山南上路停車場"],description:["Times 龜山南上路停車場 入場辨識 前牌"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.2962401,25.0473953,0
          `]}]},{name:["(30/h)頭前國中地下停車場"],description:["汽車費率 30h 管理員協助 / 按鈴<br>感謝fantong@ptt"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4580999,25.0550123,0
          `]}]},{name:["(50/半天) 非24H-有樹林的停車場"],description:["告知現場管理員後會告知停放位置,方可進入 每半天50元 <br>**** 非24H營業 ****"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.0588629,24.7009468,0
          `]}]},{name:["(平25/d | 假100/d) 屏東夜市復興停車場-「不可過夜」-自由路入口"],description:["**感謝停車場經營單位親自回報**<br>汽車費率 25D 按鈕取票 <br> 有謙正巷和自由路兩處入口，<br>露天停車場，不可過夜  "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.4896563,22.6666159,0
          `]}]},{name:["(平25/d | 假100/d) 屏東夜市復興停車場-「不可過夜」-謙正巷入口"],description:["**感謝停車場經營單位親自回報**<br>汽車費率 25D 按鈕取票 <br> 有謙正巷和自由路兩處入口，<br>露天停車場，不可過夜 "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.4903174,22.668346,0
          `]}]},{name:["(60/h | 260/d)國泰世興大樓"],description:["國泰竹北世興大樓站地下停車場 汽車費率 30/0.5h；最高260/d 後牌辨析 <br><br> "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.0420588,24.8068938,0
          `]}]},{name:["(平30/h | 假40/h)168parking(明倫社宅室內停車場)"],description:["感謝kevinbig3<br>汽車費率 平日30h（上限140元）;假日40h（無上限）"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            121.519944,25.0729329,0
          `]}]},{name:["(120/h)城市車旅停車場 中正永昌站"],description:["汽車費率 60／半小時 管理員協助 / 按鈴 無 親身經驗 或 車友/朋友/親人經驗<br>感謝kevinbig3    "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5099007,25.0277684,0
          `]}]},{name:["(20/h - 前牌) iRent彰師附工站"],description:["汽車費率 20h 無 親身經驗 或 車友/朋友/親人經驗<br>感謝   "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.556214,24.084191,0
          `]}]},{name:["(50/h)金福順停車場"],description:["汽車費率 25/半小時 按鈕取票 無 親身經驗 或 車友/朋友/親人經驗<br>   "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.6096657,24.1855355,0
          `]}]},{name:["(30/h) 營業時間0730-2200-停車場"],description:["不管汽車或大型重機統一費率 30h 有人看守 無 親身經驗 或 車友/朋友/親人經驗 營業時間從早上七點半到晚上十點  "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.5458904,24.0719338,0
          `]}]},{name:["(日40/h | 夜20/h - 後牌)桃園長庚轉運站停車場-汽車"],description:["汽車格07-22: 40h 22-07: 20h<br>需由文化一路進入 <br>汽車格直接後排辨識過柵欄<br>停汽車格可由文化一路或湖邊路離場  <br><br>ND@google"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.368364,25.062261,0
          `]}]},{name:["(50/h)台南三井 停車場 北口"],description:["台南三井停車場北口 重機專用格劃設情況 警衛聯繫；出場按鈕；50/h；重機專格無車時也可停汽車格    "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.2874677,22.9265494,0
          `]}]},{name:["(60/h)逢甲大學體育館"],description:["汽車費率 60h 管理員協助 / 按鈴 親身經驗 或 車友/朋友/親人經驗 進來後需到管理室說車牌 出去時也要先到管理室通知  "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.6487841,24.1816393,0
          `]}]},{name:["(30/h - 管理員)捷運迴龍站停車場"],description:["感謝Marcus<br>汽車費率 30h 管理員協助 / 按鈴 <br> 走汽車入口  "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4131016,25.022747,0
          `]}]},{name:["(平30/h | 假60/h)麗寶百貨廣場地下停車場-文強停車"],description:["板橋麗寶停車場機車停車場 汽/機車費率 及 汽/機車停放位置 電話問管理員管理員說是要停汽車（2023）        "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.461844,25.0127428,0
          `]}]},{name:["(平40/h | 假50/h)大同停車場"],description:["汽車費率 平日40h、假日50h 按鈕取票 "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.3146112,24.9903342,0
          `]}]},{name:["(日30/h | 夜10/h)台灣聯通停車場-石潭場 - 重機月租1500/30d"],description:["重機獨立費率 1500/30d 後牌辨析"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5898143,25.0635761,0
          `]}]},{name:["(平40/h | 假60/h)新月廣場汽機車地下停車場 - 左側柵欄進"],description:["汽車費率 平日40h、假日60h 後牌辨析  需至汽車停車場左側柵欄（後車牌辨識）  "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.750255,24.7536907,0
          `]}]},{name:["(50/h)台大癌醫中心地下停車場"],description:["前半小時免費"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5443242,25.0146106,0
          `]}]},{name:["(40/h)台灣聯通 台中草悟廣場-按車牌進"],description:["汽車費率 平日12:00-20:00 40h 20:00-11:59 30h 假日40h 鍵盤輸入 "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.6650995,24.1495973,0
          `]}]},{name:["(20/h)慈雲路停車場"],description:["汽車費率 20h 後牌辨析"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.0108417,24.7898128,0
          `]}]},{name:["(30/h)新北市蘆洲國民運動中心"],description:["汽車費率 30 h/d 目前尚未確認  官網公告須停放汽車區  "],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            121.4620618,25.0911212,0
          `]}]},{name:["(20/h | 140/d)應安168停車聯盟桃園場"],description:["汽車費率 平日20H（60/12H），假日20H（70/12H） 後牌辨析"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.3155091,24.9886107,0
          `]}]},{name:["(30/h | 180/d)勝利停車場"],description:["汽車費率 平日：1h/30 （當然最高100） 假日：1h/30（當日最高180） 按鈕取票"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.7016383,24.2083885,0
          `]}]},{name:["(30/h | 180/d)苗栗高鐵站停車場"],description:["汽車費率 前30分鐘免費 每小時30元 當日最高180元 管理員協助 / 按鈴"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.8271304,24.606692,0
          `]}]},{name:["(30/h | 150/d)城市車旅 社頭停車場 - 進場後牌/出場前牌"],description:["城市車旅社頭"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.5888909,23.897969,0
          `]}]},{name:["(日60/h | 夜20/h)廣德利停車場"],description:["重機可停在汽車格，皆為平面車位 重機：60H (9:00 - 21:00) ；過夜 20H (21:00- 隔天9:00) 按鈕取票  重機直接停汽車格，汽車格初步估算應該有40-50格  "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5154054,25.0499836,0
          `]}]},{name:["(平20/h | 假30/h - 按鈴)國立臺灣美術館美術園區CITYPARKING"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            120.6620269,24.1406702,0
          `]}]},{name:["(40/h - 按鈴)大買家 北屯店"],description:["自由選擇 汽車：1h/40，機車：免費 管理員協助 / 按鈴 無 詢問客服，汽車停車場可以進去但要按鈴，機車停車格也可以停 場地官方網站 或 官方社群媒體 "],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.6999418,24.1766036,0
          `]}]},{name:["(50/d - 按鈴)城市車旅 敦富東街站"],description:["汽車費率 當日計次50 打給客服說的"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.708331,24.188868,0
          `]}]},{name:["(60/h)大順街停車場"],description:["汽車費率 1h/60 按鈕取票"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.5857826,24.1797587,0
          `]}]},{name:["(50/h - 後牌)俥亭新民場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6870724,24.1382318,0
          `]}]},{name:["(平30/h | 假50/h - 按鈴)俥亭台中火車站地下停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            120.6863098,24.1380251,0
          `]}]},{name:["(平30/h | 假50/h - 倒退掃牌)和雲台中復興路四段二站停車場"],description:["汽車費率 平日：30，假日：50 倒退嚕"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.688803,24.1370077,0
          `]}]},{name:["(40/h - 按鈕取票)寶雅彰化民族店停車場"],description:["汽車費率 40h 按鈕取票 寶雅消費折抵 "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.5390022,24.0713788,0
          `]}]},{name:["(30/h - 後牌)SKM Park Outlets 高雄草衙"],description:["汽車費率 30h = 每小時30元 後牌辨析<br>https://www.youtube.com/watch?v=pKmdB20EUVA"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.3293377,22.5825944,0
          `]}]},{name:["(40/h | 200/d - 按鈕取票)樂亭停車場桃園中正站"],description:["汽車費率 40h當日上限200 按鈕取票"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.3012689,25.0114549,0
          `]}]},{name:["(30/h - 鍵盤輸入)新莊中原路第6停車場 - 無現金"],description:["汽車費率 30h,半小時計費 鍵盤輸入 無現金繳費  "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.448948,25.0544167,0
          `]}]},{name:["(20/h - 前牌)文茂路停車場"],description:["汽車費率 20h 倒退嚕可以辨識到"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.3884367,25.0506859,0
          `]}]},{name:["(平50/d | 假100/d)八里左岸計次停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.4309453,25.1602418,0
          `]}]},{name:["(展期60/h | 無展20/h - 後牌)世貿公園地下停車場 - 現金/悠遊卡"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.6146011,25.0579767,0
          `]}]},{name:["(40/h - 按鈕)寶盛停車場-中東場"],styleUrl:["#icon-1538-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            120.3124488,22.6331904,0
          `]}]},{name:["(日60/h | 夜20/h - 管理員)政大公企中心停車場"],description:["日6-23 夜23-6<br>行駛汽車道下去後，柵欄右手邊爲管理中心，知會管理員後，管理員會手動拍照記錄並開柵欄，離場前請至1樓大廳櫃臺現金繳費（B1~B3的繳費機不可繳納）"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5274305,25.0307573,0
          `]}]},{name:["(30/h | 150/d)力揚文二立體停車場"],description:["重機後牌辨識似乎沒啟用，通常要管理員才能進"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.3637684,25.0610162,0
          `]}]},{name:["(100/h - 管理員)國泰慕軒飯店站"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.5492548,25.0340662,0
          `]}]},{name:["(30/h - 管理員)裕生停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.446925,24.9844974,0
          `]}]},{name:["(平30/h | 假40/h - 管理員)臺中洲際棒球場附屬停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            120.6851665,24.1972592,0
          `]}]},{name:["(20/h - 悠遊卡)城市車旅龜山停四站"],description:["汽車費率 20/h 悠遊卡"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.3451161,24.9914195,0
          `]}]},{name:["(60/h - 管理員)合發大樓停車場"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.526594,25.0644855,0
          `]}]},{name:["(70/h - 管理員)城市車旅士林福德一站"],styleUrl:["#icon-1538-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.5230236,25.0919955,0
          `]}]},{name:["(30/h-按鈕)長庚醫院A8站停車場"],description:["汽車費率 每半小時15元 按鈕取票 無 "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.3707378,25.0598428,0
          `]}]},{name:["(120/h - 管理員)城市車旅 台北瑞安站"],description:["汽車費率 120h 管理員協助 / 按鈴"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5392568,25.0256308,0
          `]}]},{name:["(平40/h | 假50/h - 後牌)國立自然科學博物館"],description:["國立自然科學博物館第一停車場（博館路） 汽車費率 平日：15/半h，假日與國定假日：15/半h ,上限180，非參觀：平日：20/半h，假日與國定假日：25/半h ，夜間：19：00~08：00（50/一次） 後牌辨析 無 場地官方網站 或 官方社群媒體  "],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.6660606,24.1572335,0
          `]}]},{name:["(40/h - 按鈕取票)新光人壽教育會館"],description:["台北市士林區基河路250號 新光人壽教育會館 汽車費率 40h 按鈕取票 入場斜坡鋪止滑磚，路感很怪，雨天請小心 "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5205968,25.0917199,0
          `]}]},{name:["(20/h - 無閘門)文修停車場"],description:["文修停車場 汽車費率 半小時10元 無出入口管制"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.6422797,24.1853629,0
          `]}]},{name:["(50/h - 按鈕)麥當勞-三重重陽餐廳"],description:["消費50元折1小時 跟店員拿代幣  "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.4868984,25.0576563,0
          `]}]},{name:["(平100/h | 假120/h)機車道入場停汽車格-中山收費停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5207154,25.0515131,0
          `]}]},{name:["(20/h - B2限悠遊卡)俥亭新店民權場"],description:["致電詢問 B2 限定悠遊卡  "],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.5379933,24.9833673,0
          `]}]},{name:["(平30/h | 假50/h)秀泰生活嘉義店 - 按鈴進場後跟管理員確認"],description:["汽車費率 平日：30元/H 假日：50元/H 管理員協助 / 按鈴  車輛停妥後，記得跟管理員或警衛再次確認，以免發生誤會"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            120.4478278,23.4854145,0
          `]}]},{name:["(30/h)蘆洲國小地下停車場"],description:["需請管理員開門登記車號，停汽車位"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4699352,25.084152,0
          `]}]},{name:["(20/h)興中立體停車場"],description:["汽車入口進<br>進機車會一樣收汽車錢有上新聞"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.6064258,25.0560795,0
          `]}]},{name:["(30/h)台北市災害應變中心地下停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5658956,25.0288093,0
          `]}]},{name:["(平25|假30/h)正好停-台北車站西側地上停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5158969,25.0484602,0
          `]}]},{name:["(30/h)溪北公園地下停車場"],description:["汽車道汽車格"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4306821,24.9892437,0
          `]}]},{name:["(60/h)板橋農會停車場"],description:["5~6 重機專用格"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4582481,25.0083813,0
          `]}]},{name:["(70/h|400d)大亞百貨停車場"],description:["招牌寫提供紅黃牌臨停<br>但有車友反應感應不是很優<br>且天花板高度低"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5157,25.045583,0
          `]}]},{name:["(20/h)臺中市政府陽明大樓-B1停車場(入口)"],description:["2023/6/1 重新開放17處坡度較陡停車場"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.7213559,24.2467374,0
          `]}]},{name:["(20/h)大車河-大益立體停車場"],description:["2023/6/1 重新開放17處坡度較陡停車場"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.6564828,24.1462251,0
          `]}]},{name:["(30/h)台中健康公園停車場"],description:["2023/6/1 重新開放17處坡度較陡停車場"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.667112,24.1193203,0
          `]}]},{name:["(20/h)歐特儀 停車場(大墩國中地下停車場)"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            120.6392109,24.1453796,0
          `]}]},{name:["(20/h)CITY PARKING 城市車旅停車場 本堂公園站"],description:["2023/6/1 重新開放17處坡度較陡停車場"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.6995218,24.0595771,0
          `]}]},{name:["(60/h|300/d)合歡山遊客中心公有停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.284263,24.1422528,0
          `]}]},{name:["(平:40/h|假:60/h)CITY PARKING 城市車旅停車場 萬麗酒店站"],description:["前排辨識<br>按鈕請管理員開門入場<br>吃飯可折抵"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5293213,25.093438,0
          `]}]},{name:["(40/h|200/d)新光三越 台南小北門店"],description:["也可以停機車區"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.2071028,23.0096351,0
          `]}]},{name:["(平40/h|假50/h)大全聯內湖店(停車場)"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.5765973,25.0624554,0
          `]}]},{name:["(40/h)路停站前停車場"],description:["一～四 40/h, 五六日 50/h<br>機車格可進但一樣汽車費率"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            121.3110311,24.9889702,0
          `]}]},{name:["(50/h)國家兩廳院地下停車場"],description:["後牌辨識<br>有當日演出票券可以 100/4h"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.520203,25.0373004,0
          `]}]},{name:["(平40:假60/d)台灣聯通停車場-臺北文創場"],description:["停機車也會收汽車費率<br>建議走機車道"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            121.5605567,25.0449549,0
          `]}]},{name:["(60/h)Times 萬華運動中心停車場"],description:["機車道入口有寫禁止重機"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            121.5063103,25.0475232,0
          `]}]},{name:["(平50/h | 假60/h)日月亭-希望園區地下停車場"],description:["平日/日間收費 50元/一小時，每12小時最高150元。<br>假日收費 60元/一小時，每12小時最高200元。 <br><br>2026/03/26 更新<br>已裝設後排辨識，出入場時停在專用停止線感應後排，價格已變更：假日一小時60 半小時30 平日一小時50 半小時25，第一小時，不滿30分鐘皆以一小時計算，後續每半小時計費。<br>感謝網友熱情回報"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5327127,25.0448877,0
          `]}]},{name:["(平100/h|假120/h)Porsche Destination Charging"],description:["入口寫 > 500cc 可停汽車格"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            121.545067,25.0451878,0
          `]}]},{name:["(20/h)Porsche Destination Charging"],description:["汽車 > 500cc 可停<br>推測機車區應該是 < 500cc 可停"],styleUrl:["#icon-1632-757575-labelson"],Point:[{coordinates:[`
            121.545035,25.045384,0
          `]}]},{name:["(40/h)正好停-信義國小地下停車場"],description:["前車牌辨識"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.562621,25.0319319,0
          `]}]},{name:["(30/h|300/d)府前廣場地下停車場（嘟嘟房）"],description:["4,5,11,12,18,19,25,26<br>80/h<br>https://maps.app.goo.gl/vxEJGJHp4yRdETF36"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            121.5626264,25.0391235,0
          `]}]},{name:["(10/h)俥亭停車場(新店中央場)"],description:["悠遊卡進出"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.53105,24.978508,0
          `]}]},{name:["(平60/h|假70/h)正好停台北車站東區地下停車場"],description:["15分鐘免費<br>接送人很好用<br>機車區禁停"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5198414,25.047301,0
          `]}]},{name:["(20/h)南港59號公園臨時平面停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.613505,25.047531,0
          `]}]},{name:["(?)好市多 高雄店"],description:["可停汽車區但不知道怎麼收費<br>附屬的機車格飛道路範圍非道路範圍<br>理論上也可以停<br>等各位網友回報"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.306258,22.603775,0
          `]}]},{name:["(日40/h | 夜20/h)林口長庚醫院復健立體停車場"],styleUrl:["#icon-1538-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.368595,25.0625636,0
          `]}]},{name:["(30/h)冷水坑2號停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.5631619,25.1678755,0
          `]}]},{name:["(30/h)夢幻湖停車場"],description:["機車區悠遊卡進出，有標示請停汽車區"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.562022,25.168711,0
          `]}]},{name:["(30/h)台北市士林區冷水坑一號停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.563976,25.166078,0
          `]}]},{name:["(30/h)林口長庚質子治療中心停車場入口"],description:["會貼依規定需停汽車格"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            121.3714479,25.0617739,0
          `]}]},{name:["(平60/h|假80/h)日月潭力麗溫德姆溫泉酒店 Wyndham Sun Moon Lake 日月潭力麗ウィンダムホテル"],description:["設有室內停車格，有開放給重機停放(每車格可停2-3台)，平日30分鐘30元，假日30分鐘40元，可臨停"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.9319337,23.8467563,0
          `]}]},{name:["(150/d)九族文化村小車停車收費站"],description:["門口會有警衛收費 150"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.9447489,23.8704274,0
          `]}]},{name:["(平50/h|假100/h)Mitsui Shopping Park LaLaport 台中 北館停車場（復興東一街）"],description:["消費1000可折抵一小時"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            120.6909973,24.1354539,0
          `]}]},{name:["(30/h)淡水北新金雞母室內停車場"],description:["汽車費率, 30元／第一小時，第二小時之後以15元／30分鐘 計價<br>按鈕取票，只收現金，地下室停車場，沒有電梯、樓梯，行人只能從車道出入要小心。<br>感謝網友 ketw玲玖 回報"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            121.451086,25.1774908,0
          `]}]},{name:["(50/h)汐止火車站停車場"],description:["前半小時 30 後每半小時 25<br>柵欄有寫重型機車請停汽車格<br>（奇怪 125 也是重型機車）"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            121.661882,25.068345,0
          `]}]},{name:["(30/h)日月亭網溪國小地下停車場 uTagGo"],description:["後牌辨識<br>但有車友反應辨識不靈敏"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5199983,25.0137367,0
          `]}]},{name:["(30/d)彩虹河濱公園堤外停車場北端入口"],description:["小型車： 計次 30元/次(09時~17時),隔日另計"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.5727796,25.0595557,0
          `]}]},{name:["(平20/h|假30/h)歐特儀林口轉運站平面停車場(機車)(汽車)"],description:["前30分鐘免費"],styleUrl:["#icon-1538-757575-labelson"],Point:[{coordinates:[`
            121.3618664,25.0660871,0
          `]}]},{name:["(20/h)木柵公有停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.5661316,24.9884191,0
          `]}]},{name:["(30/h)高爾夫球場地下停車場"],description:["汽車道按鈴請人員協助進入"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.5074607,25.0247724,0
          `]}]},{name:["(40/h|200/d)Citylink南港店立體停車場"],styleUrl:["#icon-1538-757575-labelson-nodesc"],Point:[{coordinates:[`
            121.6042781,25.0519251,0
          `]}]},{name:["(30/h|150/d)桃園醫院露天汽車停車場"],description:["2026/07/28 感謝網友 MAKI 分享<br>工作人員引導至停放區"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.2689047,24.9770888,0
          `]}]},{name:["(30/H)林口新創園 B區停車場"],description:["走汽車道，後牌辨識，B1有重機停車格"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.3779522,25.0759245,0
          `]}]},{name:["(30/h)永福國小地下停車場"],description:["2026/08/29 感謝網友 Ming 分享<br>汽車格, 警衛室前方空地也可以停，之前是警衛把三角錐拿走讓我停<br>因為沒有車牌辨識，是手動登記，所以要自己記錄幾點進去幾點出去"],styleUrl:["#icon-1538-E65100-labelson"],Point:[{coordinates:[`
            121.4798061,25.0775352,0
          `]}]},{name:["(30/h)新北市三重國民運動中心"],description:["2026/9/1 貼請走汽車道"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.4878983,25.0546254,0
          `]}]},{name:["(40/h)中壢國小地下停車場"],description:["2026/09/14 感謝網友 Jun 分享<br>也可停機車格"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            121.2219516,24.9541738,0
          `]}]}]},{name:["重機格/汽車費率"],Placemark:[{name:["(50/h)家樂福 新店店"],description:["機車道入場<br>有重機專用格<br>汽車費率  https://maps.app.goo.gl/TeqyYeuLEh51YmsJ9"],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.5461652,24.9765087,0
          `]}]},{name:["(40/h)樂活公園地下停車場"],description:["4席大型重型機車位<br>每日8時至21時每小時新臺幣（下同）40元、21時至翌日8時每小時20元，小型車全日月票5,000元、大型重型機車月票最高售價為2,500元"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.6211135,25.0699432,0
          `]}]},{name:["(平50/h|假60/h)福星社會住宅地下停車場"],description:["專用格四格<br>１、星期一至五：10時至22時每小時收費新臺幣（下同）50元；22時至翌日10時每小時收費10元。<br>２、星期六、日及政府行政機關放假之紀念日及民俗節日：10時至24時每小時收費60元；0時至10時每小時收費10元。"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.506194,25.0471312,0
          `]}]},{name:["(50/h)正好停-科技大樓地下停車場"],description:["09~21時(50/h)<br>21~09時(10/h)<br>同汽車費率<br>汽車道入，三格重機格<br>https://dot.gov.taipei/News_Content.aspx?n=D739A9F6B5C0AB95&sms=72544237BBE4C5F6&s=ED1691016D7382E4"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5432109,25.0259986,0
          `]}]},{name:["(40/h)正好停-振華公園地下停車場"],description:["大型重型機車停車位4席"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5182083,25.115759,0
          `]}]},{name:["(40/h | 220/10h)板橋火車站停車場"],description:["停汽車, 40/H 每10小時220<br>2020/7 GOOGLE街景看到重機駛出, 理應可停<br> 有專用格4格以上，進場後順時鐘繞行，接近出口處右側可看到專用格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.4643776,25.0152598,0
          `]}]},{name:["(30/h)後港新公園地下停車場"],description:["汽車費率 30h 管理員協助 / 按鈴 <br>專用1 格 <br>重機會有一格在角落繳費機前的汽車格，因為角度的關係一般汽車沒辦法停進去，會被管理員當成重機停車格。<br>進場要請管理員登記車牌，出場只要繳費機繳完錢就可出場。  ?<br>感謝Chris"],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.4240119,25.0260716,0
          `]}]},{name:["(50/h)夢時代購物中心 汽車停車場"],description:["入場停車30分鐘內離場免費，不滿1小時以1小時計；第2小時起，每半小時新台幣25元，不足半小時以半小時計。經自動繳費機計價後須於30分鐘內離場，逾時須補繳差額。<br><br>大型重機停車:重機停放汽車停車場，依汽車入場方式進場，按對講機進入；離場時至繳費機辦理停車折抵，由B1F及3F出口汽車道左側「重機及汽車共用車道」辨識出場。<br><br>教士2016貼文下回覆 3樓有重機專用停車位<br>但許多網友回報無硬性規定停汽車格"],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            120.308268,22.594772,0
          `]}]},{name:["(平30/h | 假40/h)萬華車站地下停車場"],styleUrl:["#icon-1633-757575-nodesc"],Point:[{coordinates:[`
            121.4994222,25.0334845,0
          `]}]},{name:["(日40/h | 夜20/h - 後牌)塔城段 - 市民大道停車場"],description:["市民大道停車場-塔城段 汽車費率 日間40/h 。 夜間20/h 後牌辨析 2 格 或以上"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5098014,25.0503723,0
          `]}]},{name:["(20/h | 100/d)App - USPACE 立功街122號"],description:["App 控制出入 汽車費率 20h 日上限100 <br>感謝Kevin111123"],styleUrl:["#icon-1633-0288D1"],Point:[{coordinates:[`
            121.4732016,25.1250654,0
          `]}]},{name:["(20/h - 管理員)華東公有平面停車場"],description:["板橋華東公有平面停車場 專用格 1 格 "],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.4499537,24.9958076,0
          `]}]},{name:["(50/h)宏達經營管理顧問安平停車場"],description:["按鈕取票 2格專用格"],styleUrl:["#icon-1633-0288D1"],Point:[{coordinates:[`
            121.51182,24.998093,0
          `]}]},{name:["(40/h - 管理員)新明國小地下停車場"],styleUrl:["#icon-1633-E65100-nodesc"],Point:[{coordinates:[`
            121.2166453,24.9613791,0
          `]}]},{name:["(120/h)遠東SOGO 台北復興館"],description:["露天重機專用格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.542942,25.0411353,0
          `]}]},{name:["(40/h)置地生活廣場"],description:["汽車入口, 重機專用鈕可辨識車牌<br>消費可折抵停車費"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.2989363,24.965178,0
          `]}]},{name:["(80/h)客限-板橋凱撒大飯店"],description:['<img src="https://mymaps.usercontent.google.com/hostedimage/m/*/3AAjQbR5J52Lport77vCo4NQnhwwNl8reyQ9C6UFVKeHWcS_eePsc8HgHwV1JDRezRDAn13zo1CZyQ9Bb9ZzEFGAg3Vmfm8XwCYrt2Y86TOQwfcF6CQEFLxLz7eBKzBPyKOa_9WeX0sBuWZd7ufgGwxEKg09kZsZqbbdIJD2g1oUJDFqSi7SKwWME2E8gdnG2xklnMN_2EfzK5fY6yxVVvlkPdqPFC0Em3Gv9de8vMTx9fuFkPUak5SRFXijz-FM?fife=s16383" height="200" width="auto" /><br><br>感謝hoha5432提供<br>汽車費率 80h 按鈕取票 2 格 或以上 <br>目前對外說不開放臨停，僅供住宿與用餐客人停放。費用沒有公開，根據個人繳費經驗推估約 80h。<br>官網寫說「本飯店提供機車/汽車地下停車場(B2-B5) ，共220個車位。※B2停放機車（可供重型機車停靠，但如需要更大空間可改停靠汽車停車格）」但實際沒有機車格，而是只有大重停車格（為汽車格畫線切出）。  '],styleUrl:["#icon-1633-0288D1"],ExtendedData:[{Data:[{$:{name:"gx_media_links"},value:["https://mymaps.usercontent.google.com/hostedimage/m/*/3AAjQbR5J52Lport77vCo4NQnhwwNl8reyQ9C6UFVKeHWcS_eePsc8HgHwV1JDRezRDAn13zo1CZyQ9Bb9ZzEFGAg3Vmfm8XwCYrt2Y86TOQwfcF6CQEFLxLz7eBKzBPyKOa_9WeX0sBuWZd7ufgGwxEKg09kZsZqbbdIJD2g1oUJDFqSi7SKwWME2E8gdnG2xklnMN_2EfzK5fY6yxVVvlkPdqPFC0Em3Gv9de8vMTx9fuFkPUak5SRFXijz-FM?fife=s16383"]}]}],Point:[{coordinates:[`
            121.4627367,25.0117803,0
          `]}]},{name:["(30/h)CITY PARKING 城市車旅停車場 新竹晶品城站"],description:["汽車費率 30/1H <br>有重車專用格<br> 廣場目前 商場歇業，停車場正常營運 使用。  "],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            120.9703398,24.8019649,0
          `]}]},{name:["(平50/h | 假60/h)城市車旅臺北大巨蛋園區站"],description:["走汽車道"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.560796,25.041616,0
          `]}]},{name:["(20/h)靠左側-市政公園停車場-汽車"],description:["紅黃牌可自由選擇停機車或汽車 機車20d 汽車20h 後牌辨析 2 格 或以上 <br>從機車道進場可停機車格或大型重機專用車格<br>從汽車道進場可停汽車格或大型重機專用車格<br>停車入口有兩邊可從文心路或惠中路進出，若大重從汽車道進請靠左側後車牌辨識才能準確，不建議從汽車道右邊辨識  "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            120.6441542,24.1607147,0
          `]}]},{name:["(50/h - 入場找管理員報車牌)大全聯 中崙店"],description:["重機只能停 B3 汽車區，不可停機車區<br>可折抵消費"],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.5429839,25.0456392,0
          `]}]},{name:["(Free)漢神巨蛋購物廣場-汽車"],description:["進入收費柵欄前有大格的重機專用格免費<br>但數量不多<br>建議普通尺寸的車友可以直接停機車區<br>https://www.facebook.com/PT.MotoDaily/posts/pfbid0DoJyDhkEM5JzKyqm5xNuLHUzCGqXDiASG9orjQwjbDZHMb31nhc4TX8Gxwq2xLYkl"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            120.3030345,22.6701499,0
          `]}]},{name:["(40/h)環球購物中心汽車 屏東市"],description:["汽車停車場 後牌；40/h;重機"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            120.4933212,22.6733706,0
          `]}]},{name:["(30/h)家樂福 青海店"],description:["教士2016貼文下回覆 有重機專用停車位"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            120.644814,24.170162,0
          `]}]},{name:["(60/h)大統領停車場"],description:["重機專用格汽車, 警衛引導"],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.5511481,25.0417158,0
          `]}]},{name:["(200/h | 消費折抵 - 人工註記)遠東SOGO 台北敦化館"],description:["重機獨立費率 消費1000以上當日免費，未消費者200/h 無出入口，管理員紙本登記 1 格 位於後方的巷子內，SOGO館內消費1000元以上免費停，未消費者200/h  "],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.5481954,25.0398775,0
          `]}]},{name:["(30/h)汽車右道進-基隆東岸地下停車場站"],description:["@通勤者之歌SHORT<br>汽車道進入, 管理室旁有重機專用區"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.7437208,25.1303401,0
          `]}]},{name:["(30/h - 後牌)城市車旅運動公園立體站"],description:["重機車位共7格 後牌辨析 "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.2185008,24.8675391,0
          `]}]},{name:["(40/h - 管理員)臺北醫學大學附設醫院地下停車場"],description:["有共享/優先格  "],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.5624462,25.0260413,0
          `]}]},{name:["(日30/h | 夜10/h - 後牌&管理室繳費)平鎮文化公園地下停車場"],description:["汽車費率 日間08:00~22:00 1H/30元 夜間22:00~08:00 1H/10元 後牌辨析 2 格 或以上 親身經驗 或 車友/朋友/親人經驗 該停車場要出場繳費時，繳費機會讀取不到大型重機車牌資料(入場可辨識得到車牌)<br>需到管理員室繳費即可。<br>已有反應過，但不知何時才會改善  "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.2036972,24.954396,0
          `]}]},{name:["(100/h)合作金庫總行停車場"],styleUrl:["#icon-1633-757575-nodesc"],Point:[{coordinates:[`
            121.5458942,25.0494003,0
          `]}]},{name:["(30/h - 管理員)秀山公園地下停車場"],description:["中和秀山公園地下停車場 汽車費率 30h 管理員協助 / 按鈴 2 格 或以上 入口是需要上坡起步的斜坡 "],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.523012,24.9954674,0
          `]}]},{name:["(40/h)中山運動中心地下停車場"],description:["機車格收汽車費率 每小時$40 <br>專用格不大<br>管理員協助 / 按鈴 <br>專用2 格 或以上 <br> 設計不良，按鈕處在斜坡上，有倒車的危險 "],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.5216194,25.0547352,0
          `]}]},{name:["(30/h)汽車右道進-輔大醫療大樓停車場B2"],description:["B2 重機專用5格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.4315987,25.0389581,0
          `]}]},{name:["(40/h)台北榮總三號門機車停車場"],description:["台北榮總三號門機車停車場 汽車費率收費40/h;有專格;後牌     "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.52108,25.1189407,0
          `]}]},{name:["(30/h)西松高中地下停車場"],styleUrl:["#icon-1633-7CB342-nodesc"],Point:[{coordinates:[`
            121.5660926,25.0558398,0
          `]}]},{name:["(平40/h | 假50/h | 300/d)松山車站地下停車場"],description:["週一-四 40/H, 週五-日及假日50/H, 上限300/日<br>有後牌辨識 @PTT車友分享 2022年7月底<br>有重機專用格2格以上"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5784781,25.0483101,0
          `]}]},{name:["(30/h)延平國小地下停車場"],description:["相片有重機停車區"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.511936,25.067167,0
          `]}]},{name:["(30/h)後牌-林森公園地下停車場"],description:["向3592 rebel車主致敬<br>您被撞倒也同時讓作者知道這裡可以停..."],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5264592,25.0522814,0
          `]}]},{name:["(30/h)後牌-林森公園地下停車場(新生路入口)"],styleUrl:["#icon-1633-7CB342-nodesc"],Point:[{coordinates:[`
            121.5273067,25.0524352,0
          `]}]},{name:["(30/h - 後牌)中央地下停車場"],description:["汽車, 重機格 感謝PTT車友"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.2261388,24.9564135,0
          `]}]},{name:["(30/h - 管理員)春光公園地下停車場"],description:["30/H, 5個專用格<br>專用格散佈在B1及B2樑柱旁，有明顯標示<br>雖有後牌辨析，但要管理員操作，宜先提醒再出場"],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.5810047,25.0425178,0
          `]}]},{name:["(--)家樂福 中壢店"],styleUrl:["#icon-1633-7CB342-nodesc"],Point:[{coordinates:[`
            121.2447137,24.9470869,0
          `]}]},{name:["(40/h)嘟嘟房僑安站"],description:["8-22 40/H, 22-8 30/H, 兩輪誌,1個專用格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5566716,25.0406905,0
          `]}]},{name:["(30/h)艋舺公園地下停車場"],description:["不算友善 有2個專用格(市政府資料)"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.4994475,25.0361423,0
          `]}]},{name:["(50/h)建成公園地下停車場"],styleUrl:["#icon-1633-7CB342-nodesc"],Point:[{coordinates:[`
            121.518072,25.053972,0
          `]}]},{name:["(40/h)長安國小地下停車場"],description:["汽車道<br>日間40/h, 晚間30/h, 1個專用格<br>入場辨識 後牌<br>911@m01"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5315162,25.0503831,0
          `]}]},{name:["(日50/h | 夜10/h - 後牌)建成國中地下停車場"],description:["後牌辨識，40/H, 2個專用格<br>感謝Kris60111@ptt<br>漲價日間 50, 夜間不確定"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5196246,25.0506833,0
          `]}]},{name:["(30/h)嘟嘟房蘆洲站捷運轉乘停車場"],description:["汽車費率 30 h 專用2 格 或以上 專用格在出入口斜坡前   "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.4649438,25.0926776,0
          `]}]},{name:["(30/h)玉成國小地下停車場"],description:["日間30/h, 晚間20/h, 4個專用格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5927067,25.0532036,0
          `]}]},{name:["(40/h)成淵高中地下停車場"],styleUrl:["#icon-1633-7CB342-nodesc"],Point:[{coordinates:[`
            121.5200647,25.0603782,0
          `]}]},{name:["(30/h)啟聰學校地下停車場"],description:["汽車道，30/H 有專用格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5117372,25.0742783,0
          `]}]},{name:["(40/h - 專人引導)新北宏匯停車場"],description:["2024/5/1起，重機比照汽車停車<br>專用格一排，可折抵消費<br><br>大型重型機車(紅牌、黃牌)停車，可比照汽車停車，由汽車道入口「中央路」或「新北大道」，皆可進入。<br>另 B2設置有大型重型機車專用停放區，可由「新北大道」進入，停至專用停車格。"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.4497697,25.0601041,0
          `]}]},{name:["(平50/h | 假60/h)信義廣場地下停車場"],description:["平日40/H, 假日50/H, 2個專用格<br>有後車牌辨識"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5663935,25.0330535,0
          `]}]},{name:["(平40/h | 假20/h)大港墘公園地下停車場"],description:["(沒誤植, 假日真的比較便宜)<br>大港墘公園地下停車場 汽車費率 40h 假日20h <br>後牌辨析 <br>專用格 2 格 或以上 正好停代管"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5743909,25.0784192,0
          `]}]},{name:["(平30/h | 假40/h)大龍國小地下停車場"],description:["平日30/H, 假日40/H, 2個專用格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.517292,25.074126,0
          `]}]},{name:["(平40/h | 假50/h)雅祥公園地下停車場"],description:["平日40/H, 假日50/H, 上限200, 1個專用格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.571726,25.047512,0
          `]}]},{name:["(20/h)萬華國中地下停車場"],description:["有6格專用格 1小時20元"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.4996102,25.0291847,0
          `]}]},{name:["(60/h)京站時尚廣場小碧潭店"],description:["汽車費率 B4 621-626 重機專用格<br>按鈕入場<br>60元/小時, 500元折抵一小時"],styleUrl:["#icon-1633-0288D1"],Point:[{coordinates:[`
            121.5307121,24.9723512,0
          `]}]},{name:["(平20/h | 假30/h)洛陽停車場（環河北路入口）"],description:["汽車, 後牌, 6-7F, 專用格20格，可停汽車格<br>2026/03/27 更新專用格數量<br>感謝網友熱情回報"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.505156,25.047588,0
          `]}]},{name:["(平40/h | 假50/h)後牌-承德公園地下停車場"],description:["平日40. 假日50, 有1個專用格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5224221,25.0898566,0
          `]}]},{name:["(平30/h | 假40/h)蘭雅公園地下停車場"],description:["平日30/H, 假日40/H, 有1個專用車格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.52913,25.10988,0
          `]}]},{name:["(30/h)七星公園地下停車場"],description:["有2個專用格(政府資料)"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5023796,25.1366685,0
          `]}]},{name:["(平30/h | 假40/h - 汽車道進)市民廣場地下停車場 | 歐特儀 - 平日上限150"],description:["走汽車道，是車牌辯識系統，<br>專屬大型重機專用停車格在停車場柵欄處旁邊<br>@節錄自DCARD<br>平日上限,150, 假日無上限"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.4656987,25.0141061,0
          `]}]},{name:["(日30/h|夜10/h)府前廣場地下停車場"],description:["重機停車費用比照汽車停車費用，有重機專用停車格，在靠近出口處。<br>9~18 30/h<br>18~9 10/h"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5630113,25.0359834,0
          `]}]},{name:["(20/h)景文平面停車場"],description:["20/H 大重專用格*2 兩輪誌"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5404782,24.9904812,0
          `]}]},{name:["(30/h)博愛地下停車場"],description:["比照汽車收費, 有重機專用區"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.7418883,25.1275495,0
          `]}]},{name:["(日50/h | 夜30/h - 後牌)永盛公園地下停車場"],description:["後牌辨識"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5247481,25.0592032,0
          `]}]},{name:["(40/h)中華電信大安園區地下停車場"],description:['"台北市中華電信大安園區委外地下停車場，抽票卡式，平日白 02/20 04:58<br>→ seelel: 天可以停重機專屬區域，有監視器，汽車收費一小時40元"'],styleUrl:["#icon-1633-0288D1"],Point:[{coordinates:[`
            121.547107,25.032227,0
          `]}]},{name:["(30/h | 200/d)永和國小地下停車場"],description:["半小時離場免費"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.517269,25.00182,0
          `]}]},{name:["(50/h)松山國小停車場"],description:["重機；後牌；專用位4格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5785727,25.0503664,0
          `]}]},{name:["(30/h | 150/12h)光榮國小地下停車場"],description:["半小時離場免費, B2有專用格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5003256,25.072442,0
          `]}]},{name:["(30/h)三張里地下停車場"],description:["後牌, 汽車, 重機格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.566903,25.030641,0
          `]}]},{name:["(30/h)棒球場地下停車場"],description:["按鈴請人員協助進入"],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.5031293,25.0237976,0
          `]}]},{name:["(30/h)蓬萊國小地下停車場"],description:["30/H 寧夏夜市最佳, 有專用格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5155291,25.0554429,0
          `]}]},{name:["(40/h)忠信廣場地下停車場"],description:["全日40/h, 2個專用格"],styleUrl:["#icon-1633-757575"],Point:[{coordinates:[`
            121.5681758,25.0402346,0
          `]}]},{name:["(50/h)峨眉立體停車場 [右車道進]"],description:["右車道進，可停電動車位旁綠色漆面空間<br>於管理室後方有專用空間<br>感謝 kawsxkaws@PTT <br>汽車, 後牌, 50/H"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5055568,25.044105,0
          `]}]},{name:["(平30/h | 假60/h) 捷運淡水站停車場"],description:["教士2016年貼文下回覆，有大重專用車位及攝影機<br>2026/03/27 更新<br>後排辨識、有專用格，不可停汽車格，汽車費率<br>感謝網友熱情回報"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.445523,25.167695,0
          `]}]},{name:["(日20/h | 夜40/h - 後牌)前港公園地下停車場"],description:["19:00-02:00 40/h 02:00-19:00 20/h 後牌辨析 <br>專用 2 格 或以上"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5209054,25.0856274,0
          `]}]},{name:["(30/h 按鈴)-國立臺灣科學教育館 - 汽車"],description:["場地方並無特別限制或指示，出入口無特別標示大重禁止進入，場內也有多位車友停放，故推薦需要之使用者前往應為可行    "],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.515986,25.0961006,0
          `]}]},{name:["(30/h)民生立體收費停車場"],description:["30/H 2樓A區專用格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5596168,25.0584021,0
          `]}]},{name:["(30/h)中崙高中地下停車場"],description:["入場不需走車道辨識，大型重機可以直接鑽車道右側小縫進入停車場，找到專用格停放之後到管理室報備車號即可，有大型重機專用停車格<br>感謝KEVIN@PTT 12/24更新<br>專用格三格, 專人引導 @兩輪誌"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5612173,25.04997,0
          `]}]},{name:["(30/h)後牌-民有市場地下停車場"],description:["台北市松山區民有市場地下停車場 可停重機，入場辨識有時有些不靈敏，服務台人員很親切可協助，重機位置分佈每一樓層，兩格汽車車位中的一小格 後牌；30/h     "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5470182,25.0604839,0
          `]}]},{name:["(平40/h | 假50/h - 後牌)八德立體停車場"],description:["有可專用停重機的車格非常少，入場需要請管理員協助或倒退嚕照車牌<br>感謝Una<br>24年6月增加後牌辨識"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5716591,25.0496618,0
          `]}]},{name:["⇦(30/h | 160/d)林森-金山 市民大道停車場 "],description:["後牌辨識、專用２格<br>優先>４格 "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5255722,25.0476593,0
          `]}]},{name:["⇨(40/h | 220/d)公中站 市民大道停車場"],description:["B1有重機位 後牌辨析(站主親訪)"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5192315,25.0482003,0
          `]}]},{name:["(20/h)福林路平面停車場"],description:["感謝s8802946@ptt<br>無出入管制，人工收費20/h, 重機停車格有四格<br>2023/4/2站主親往更新"],styleUrl:["#icon-1633-0288D1"],Point:[{coordinates:[`
            121.5326097,25.0959795,0
          `]}]},{name:["(30/h)新北市蘆洲區仁愛停車場多功能大樓"],description:["後牌辨析 ; 專用格 2 格 或以上"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.4714473,25.0908005,0
          `]}]},{name:["(30/h)秀朗樂活停車場"],description:["管理員協助 / 按鈴, 重機專用 2 格 或以上<br>入口處名稱是＂秀朗樂活停車場＂上方有大型重機圖示，斜坡下去後左手邊就是管理室，管理員會幫忙開門引導登記時間，離場時再至管理室繳費，整體態度友善，有規劃專屬車格就在管理室的旁邊。<br>感謝LAN@ptt"],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.5203326,24.9988332,0
          `]}]},{name:["(10/h|100/d)金山立體停車場"],description:["2026/07/29 試辦停機車格，大車可考慮照舊走汽車道"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.6416937,25.220059,0
          `]}]},{name:["(50/h)臺南市立圖書館 新總館"],description:["按鈕取票<br>入場為前牌辨識 待辨識失敗後即可按鈕取票 <br>專用格2格以上<br>感謝Jeff 1445 @ptt"],styleUrl:["#icon-1633-0288D1"],Point:[{coordinates:[`
            120.2376688,23.0247416,0
          `]}]},{name:["(平20/h | 假50/h)深坑區公有市場附設停車場"],description:["專用格2格或以上，比照汽車收費<br>(2023/3)變更為前牌辨識，需找管理員<br>感謝匿名網友提供"],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.6157737,25.0011491,0
          `]}]},{name:["(30/h)中原國小地下停車場"],description:["30h 後牌辨析 專用格2 格 或以上    "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.2393713,24.9564023,0
          `]}]},{name:[`(平30/h | 假40/h)臺南市美術館2館地下停車場
`],description:["汽車費率 平日 30H；假日 40H 繞過汽車閘門直接騎到出口找管理室，他們會引導重機停管理室前的車位<br>感謝小鍾@FB"],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            120.2009466,22.9901905,0
          `]}]},{name:["(40/h)新生高架停車場"],description:["40h 前10分鐘免費 無出入口管制"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5277302,25.0605135,0
          `]}]},{name:["(30/h - 後牌)新北市頂溪國小地下停車場"],description:["重機月租1500, 專用格6格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5107736,25.0156073,0
          `]}]},{name:[`(30/h | 250/d)中山國中地下停車場
`],description:["感謝cbc0916(低調) 私訊回報"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5464855,25.0606557,0
          `]}]},{name:["(20/h | 100/d)中路三號社會住宅地下停車場"],description:["汽車費率 20元/H (每日最高上限100元） 後牌辨析  專用格2 格 或以上  <br>重機專用格停滿，則停放一般汽車格  "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.2848293,25.0075492,0
          `]}]},{name:["(日30/h | 夜20/h)南港國小地下停車場"],description:["汽車費率 30h 後牌辨析 2 格 或以上 <br>假日及平日（20-8）20h ,平日（8-20）30h  "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.611225,25.0564874,0
          `]}]},{name:["(30/h)福和國中地下停車場"],description:["汽車費率 30h（上限150d) 後牌辨析 <br>專用2 格 或以上 <br>收費貌似半小時未滿一小時會分開為15元/30分鐘  "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5229223,25.0046986,0
          `]}]},{name:["(30/h)新莊國民中學地下停車場"],description:["鍵盤輸入 專用2格以上"],styleUrl:["#icon-1633-0288D1"],Point:[{coordinates:[`
            121.4513198,25.0342778,0
          `]}]},{name:["(40/h)機車道進-中和國小地下停車場"],description:["汽車費率 專用格4格以上<br>機車道進入 會自動調整為汽車費率<br>可停專用格或汽車格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.4998259,24.9985862,0
          `]}]},{name:["(30/h)三重商工地下停車場"],description:["汽車費率 30h 後牌辨析 2 格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.482657,25.0705516,0
          `]}]},{name:["(30/h - 按鈕取票 離場人工繳費)新店高中地下停車場"],description:["汽車費率 30h 按鈕取票 專用8格<br>離場時需人工繳費，通知為重機  "],styleUrl:["#icon-1633-0288D1"],Point:[{coordinates:[`
            121.5341234,24.9742319,0
          `]}]},{name:["(40/h - 後牌)城市車旅文昌公園地下停車場2"],description:["後牌辨析 專用2格以上"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.309288,24.99229,0
          `]}]},{name:["(30/h | 150/d - 後牌)石牌國小地下停車場"],description:["汽車費率 30h 後牌辨析 2 格 平日上限150元 "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5131654,25.114495,0
          `]}]},{name:["(30/h)大東文化藝術中心_地下收費停車場"],description:["汽車費率 30/H 後牌辨析 <br>專用2 格 或以上 "],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            120.362435,22.6242582,0
          `]}]},{name:["(20/h | 100/d - 進場靠左)中路四號社會住宅"],styleUrl:["#icon-1633-7CB342-nodesc"],Point:[{coordinates:[`
            121.2868819,25.0076794,0
          `]}]},{name:["(30/h | 300/d - 後牌)財稅大樓地下停車場"],description:["可電子支付<br>https://tw.news.yahoo.com/%E9%AB%98%E9%9B%84-%E9%87%8D%E6%A9%9F%E9%9B%A3%E5%81%9C%E6%83%B9%E6%80%A8-%E6%B0%91%E4%BB%A3%E4%BF%83%E6%AA%A2%E8%A8%8E%E8%A6%8F%E7%AF%84-201000328.html?guccounter=1"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            120.3096932,22.6304052,0
          `]}]},{name:["(30/h - 後牌)公有學成停車場"],styleUrl:["#icon-1633-7CB342-nodesc"],Point:[{coordinates:[`
            121.4514575,24.988058,0
          `]}]},{name:["(30/h)大安高工地下停車場"],description:["入場可辨識後牌（不確定是否需要靠按鈕辨識，但今天的停車經驗是按下對講鈕同時螢幕就顯示出車號），大重專用/優先格皆有，整體相當友善，推薦使用，費率一小時30元<br>感謝Kevin@ptt"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5409841,25.0327172,0
          `]}]},{name:["(30/h)健康國小地下停車場"],description:["重機專用格1格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5627054,25.0561118,0
          `]}]},{name:["(20/h)靠左側-市政公園地下停車場-汽車"],description:["---<br>2025/10/15 更新<br>臨時停車無論停汽機車格一率收汽車費率(20/h)<br>建議直接停汽車區<br>---<br>紅黃牌可自由選擇停機車或汽車 機車20d 汽車20h 後牌辨析 2 格 或以上 <br>從機車道進場可停機車格或大型重機專用車格<br>從汽車道進場可停汽車格或大型重機專用車格<br>停車入口有兩邊可從文心路或惠中路進出，若大重從汽車道進請靠左側後車牌辨識才能準確，不建議從汽車道右邊辨識  "],styleUrl:["#icon-1538-7CB342"],Point:[{coordinates:[`
            120.6471499,24.1593509,0
          `]}]},{name:["(50/h)正好停-大安國中地下停車場"],description:["小型車停車位223席，大型重型機車停車位1席，機車停車位52席<br>小型車（含大重機）計時收費新臺幣50元"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5461616,25.0299188,0
          `]}]},{name:["(30/h)塔城公園停車場"],description:["汽車費率 有重機專用格"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5105798,25.0508763,0
          `]}]},{name:["(平50/d|假90d)八里龍米公有停車場"],description:["四格專用格"],styleUrl:["#icon-1633-757575"],Point:[{coordinates:[`
            121.4360744,25.156758,0
          `]}]},{name:["(10/h)三芝中正立體停車場"],description:["三格專用格"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.5031276,25.2548858,0
          `]}]},{name:["(30/h)嘉興公園地下停車場 (台達電動車充電站)"],styleUrl:["#icon-1633-7CB342-nodesc"],Point:[{coordinates:[`
            121.551928,25.021666,0
          `]}]},{name:["(20/d)仁愛路四段512巷機車平面停車場"],description:["沒看到禁止重機符號<br>理論上可停"],styleUrl:["#icon-1632-7CB342"],Point:[{coordinates:[`
            121.5612802,25.0369838,0
          `]}]},{name:["(30/h)溪墘公園地下停車場"],description:["有後牌辨識，辨識區請靠近電子看板，辨識不到可找管理員<br>感謝網友  Philip 回報"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.4762506,25.0796136,0
          `]}]},{name:["(30/h)財團法人彰化基督教醫院第四停車場"],description:["汽車格	汽車費率, 30/h<br>感謝網友 hugo930713 回報"],styleUrl:["#icon-1538-7CB342"],Point:[{coordinates:[`
            120.5454826,24.0710713,0
          `]}]},{name:["彰化基督教醫院 教學研究大樓"],description:["機車格	機車費率, 10/h<br>感謝網友 hugo930713 回報"],styleUrl:["#icon-1632-7CB342"],Point:[{coordinates:[`
            120.5453151,24.0710955,0
          `]}]},{name:["(30/h)辰淵-綠湖公園地下停車場"],description:["汽車區內有重機專用格<br>倒車掃牌"],styleUrl:["#icon-1633-E65100"],Point:[{coordinates:[`
            121.5463335,24.9795792,0
          `]}]},{name:["(30/h|150/d)uTagGo 五都台南五站"],description:["機車格<br>機車道<br>汽車費率"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            120.283162,22.926044,0
          `]}]},{name:["(Free)24.9879090, 121.5665702"],description:["機車平面停車場附設重機專用格<br>感謝網友於 2026/06/21 回報"],styleUrl:["#icon-1633-7CB342"],Point:[{coordinates:[`
            121.5665702,24.987909,0
          `]}]}]},{name:["重機格/個別費率"],Placemark:[{name:["(20/h|60/d)捷運士林站橋下空間機車停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br> 停放於汽車區：依各場小型車費率計收。<br> 停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5272275,25.0900792,0
          `]}]},{name:["(20/h|60/d)捷運劍潭站橋下機車停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5258885,25.0865038,0
          `]}]},{name:["(20/h|60|d)平陽街18號機車平面停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5161123,25.0551402,0
          `]}]},{name:["(20/h|60/d)建成國中地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5196283,25.050566,0
          `]}]},{name:["(40/d)龍門國中地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5382217,25.0235685,0
          `]}]},{name:["(40/d)嘉興公園地下停車場 (台達電動車充電站)"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.551928,25.0215396,0
          `]}]},{name:["(20/h|40/d)市立濱江國中地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5616506,25.0794297,0
          `]}]},{name:["(40/d)永盛公園地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5247481,25.0592628,0
          `]}]},{name:["(20/h|100/d)行一機車停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5209023,25.0477223,0
          `]}]},{name:["(20/h|40/d)uTagGo 力揚行善社會住宅地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5820526,25.0610715,0
          `]}]},{name:["(40/d)東湖國小地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.616062,25.0684371,0
          `]}]},{name:["(20/h|40/d)樂活公園地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.6210599,25.0700039,0
          `]}]},{name:["(20/h|40/d)景美女中地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5565973,24.982044,0
          `]}]},{name:["(20/h|40/d)景美國小地下停車場"],styleUrl:["#icon-1633-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5402222,24.9885354,0
          `]}]},{name:["(20/h|40/d)福星公園地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5125686,25.1074856,0
          `]}]},{name:["(20/h|40/d)歐特儀-振興公園地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5232622,25.1187915,0
          `]}]},{name:["(20/h|40/d)嘟嘟房(八德立體站)"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5717127,25.0495998,0
          `]}]},{name:["(40/d)正好停-松山國小地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5785915,25.0502303,0
          `]}]},{name:["(20/h|40/d)廣慈衛福大樓地下停車場(20個車位)"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5831563,25.0386393,0
          `]}]},{name:["(40/d)信義廣場地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5665977,25.0339469,0
          `]}]},{name:["(40/d)世貿公園地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.6145904,25.0578528,0
          `]}]},{name:["(20/h|40/d)嘟嘟房玉成國小地下停車場"],description:["容易滿場<br><br>為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5926612,25.0532805,0
          `]}]},{name:["(20/d|40/h)國雲停車-青年社會住宅二期地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5033358,25.0204879,0
          `]}]},{name:["(20/h|40/d)正好停-艋舺公園地下停車場"],description:["為優化公有路外停車場空間管理並滿足各式新興載具停車需求，臺北市停車管理工程處（以下簡稱停管處）宣布延續本市路邊「機車與大型重型機車共用機車格位」2.0計畫，將自115年4月6日（星期一）起於全市24處公有路外停車場試辦大型重型機車停放機車格計畫，試辦期程預計為6個月。<br><br>停放於汽車區：依各場小型車費率計收。<br>停放於機車區：依現場標誌指示，得斜向停放且以最多2格機車格位為限，比照各場機車費率之2倍計收，現場將設置之專屬停車須知牌面，引導車主遵循斜停規範並消弭民眾誤解。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.499496,25.03615,0
          `]}]},{name:["(30/h)Hi PARKING 辛亥路高架橋下停車場"],description:['07:00~21:30 30/h<br>21:30~07:00 10/h<br>感謝 profeellau 分享<br>大型重機專用停車格 3格<br><br>"台北市大安區辛亥路一段113號 <br>台北市私立新民小學正門橋下 <br>車行入口由辛亥路西向橋下快車道入口進入<br>https://www.google.com/maps/@25.022474,121.5326464,3a,75y,231.38h,72.15t/data=!3m7!1e1!3m5!1sL2IxiEPnBx78PqmyOd3egg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D17.85178780759277%26panoid%3DL2IxiEPnBx78PqmyOd3egg%26yaw%3D231.38353503606945!7i16384!8i8192?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D<br>"'],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5336397,25.0225851,0
          `]}]},{name:["(25/h)大漢橋下機車停車場"],description:["有重機格，有人實測可停機車格，但一樣收重機費率"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.4600721,25.0408659,0
          `]}]},{name:["(Free - 管理員引導)KHTOY絨毛玩偶旗艦館"],description:["免費，工作人員引導到專屬區域，直接從大門進去即可 免費"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.4329524,23.5193316,0
          `]}]},{name:["(Free)新豐休息站"],description:["61快速公路 新豐休息站"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.972294,24.9158078,0
          `]}]},{name:["(Free)中友百貨"],description:["中庭露天重機專用格"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.684783,24.1522173,0
          `]}]},{name:["(20/h)家樂福 桂林店"],description:["機車停車區有重機專屬格位"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5057287,25.0379199,0
          `]}]},{name:["(Free)大江購物中心右側立體停車場 (汽車)"],description:["無出入口管制<br>在立體停車場（位於大江購物中心右側）出入口旁邊約有五格，一格約可以停三到四台重機左右。"],styleUrl:["#icon-1633-0288D1-labelson"],Point:[{coordinates:[`
            121.228654,25.000988,0
          `]}]},{name:["(Free)漢神巨蛋購物廣場-機車"],description:["地下二樓有收費機車專用格2格、<br>也可以選機車停車場不收費 50h 停汽車格需按鈕聯繫管理員，機車停車場可直接下去<br>專用2 格 或以上 親身經驗 或 車友/朋友/親人經驗   "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.3029326,22.6697936,0
          `]}]},{name:["(Free - 無閘門)北橫遊客中心/停車場/北橫之驛"],description:["專用格10格"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.2851622,24.8491295,0
          `]}]},{name:["(Free)家樂福台東店停車場"],description:["購物專用  有重機專用格"],styleUrl:["#icon-1633-0288D1-labelson"],Point:[{coordinates:[`
            121.1492267,22.7556099,0
          `]}]},{name:["(Free)家樂福 南投店"],description:["目前2F設立專用格, 按鈴進入後免費停放"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.6891737,23.9053862,0
          `]}]},{name:["(Free)家樂福 內壢店"],description:["免費 騎進汽車道 專用格2 格 或以上 <br>感謝Yang@YT"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.2536774,24.9724254,0
          `]}]},{name:["(Free)家樂福 嘉義店"],description:["在B1停車場斜坡下去的右邊 共有5格車位<br>無出入口管制"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.4314986,23.4711237,0
          `]}]},{name:["(60/d)板橋原宿"],description:["重機計次60元, 2022/6/28. 感謝PTT車友"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.4615329,25.008665,0
          `]}]},{name:["(Free)家樂福 新仁店"],description:["重機免費停車 NA 無出入口管制  專用2 格 或以上"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.2200784,22.9474224,0
          `]}]},{name:["(黃60/d | 紅100/d)中山機車腳踏車保管處"],description:["重機獨立費率 黃牌60/DAY 紅牌100/DAY 阿嬤在入口引導"],styleUrl:["#icon-1633-0288D1-labelson"],Point:[{coordinates:[`
            120.6836747,24.1374162,0
          `]}]},{name:["(60/d - 機車停車場進)城市車旅中壢自強立體停車場站"],description:["重機獨立費率 60d 後牌辨析 專用2 格 或以上"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.2583775,24.9684539,0
          `]}]},{name:["(Free)花園夜市停車場 - 專用格跟汽車排隊"],description:["免收費 管理員引導 1 格 最後一次去大約3個月前設有重機專用停車格但是進場要跟汽車排隊等到路口由管理員引導  "],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.1993396,23.0097603,0
          `]}]},{name:["(20/h)機車道進-赤土崎公園地下停車場"],description:["汽車費率/機車格 後牌辨析 僅有共享/優先格 親身經驗 或 車友/朋友/親人經驗 停車場設有機車停車場獨立出入口，在建中路管理室旁邊，是地下停車場，與一般機車共用停車格，停車格有加大，大部分重機都停的下，有210個位置有月租  "],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.9939724,24.7992646,0
          `]}]},{name:["(Free)家樂福 中正店"],description:["大型重機免費停車；專用停車格6格 感謝Jeff 1445@ptt"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.228612,23.032797,0
          `]}]},{name:["(Free)家樂福 光華店"],description:["汽車費率 有購物可折抵、或免費 按鈴，或直接從桿子末端進入  專用格2 格 或以上"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.3171752,22.6109204,0
          `]}]},{name:["(平40/h | 假60/h)環球購物中心 新北中和"],description:["後牌；汽車費率；專用8格<br>Google map 有人說機車道可進 10/h 可嘗試"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.4748058,25.0071689,0
          `]}]},{name:["(Free)家樂福淡新店"],description:["汽車道下，繞擋條直接進入，限停重機專用格<br>可直接離場無須繳費 2023/3/11"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.4436466,25.1882039,0
          `]}]},{name:["(Free)富基漁港"],description:['"末端有一個重機驛站免費停車<br>可以讓愛車和大海拍照<br>外面一點也有一個重機專用停車空間<br>友善重機 風景漂亮的漁港<br>另外張阿瑞生魚片超好吃"'],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5357911,25.2934166,0
          `]}]},{name:["(40/d - 後牌停5/F)文化機車&自行車停車場5F"],description:["悠遊卡進入/出場<br>2026/03/27 更新<br>重機專用格位於3、4F，後車牌識別入場，彎道窄且有坡度小心會車，月租1000元<br>感謝網友熱情回報"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.4387431,25.1726548,0
          `]}]},{name:["(50/d)歐特儀石牌圖書館停車場"],description:["要從機車入口處進入，重機獨立費率 50d 按鈕後直接進場，<br>在欄杆前直接投幣50元，欄杆就會升起，直接離場  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5228604,25.1132602,0
          `]}]},{name:["(20/h)南港LaLaport P3入口停車場"],description:["機車每小時10<br>大重每小時20 可至大重停車區斜停兩格<br><br>騎重機的朋友，以下注意囉📢📢<br>✅停車費為每小時20元，平/假日皆相同<br>✅請由P3入口進入（#詳見留言處）<br>停放至「#大型重機停放區」，一台車停放兩格<br>✅重機亦享有與普通機車相同之停車折抵優惠<br>單筆消費滿200元可折抵1小時停車費"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.6170447,25.0597251,0
          `]}]},{name:["(60/d起可能要留鑰匙)南安寄車處"],description:["重機獨立費率 60起/D 人工登記 專用2 格 或以上 <br> 以日記費，費率要和櫃檯確定，多日可議價  "],styleUrl:["#icon-1633-0288D1-labelson"],Point:[{coordinates:[`
            120.2117266,22.9960295,0
          `]}]},{name:["(Free)家樂福 屏東店"],description:["不收費 ; 檔桿較短，重機從右側縫隙進入，車身較大者可按鈴通知管理員開門 ; 專用格數2格，接近賣場入口  <br>感謝paul40807@ptt"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.4977911,22.6823957,0
          `]}]},{name:["(--)武聖夜市"],description:["武聖夜市 裡面有大型重機的停車格<br>請遵循工作人員引導 "],styleUrl:["#icon-1633-0288D1-labelson"],Point:[{coordinates:[`
            120.1905098,23.003458,0
          `]}]},{name:["(100/d - 營業時間)PIT147 重機維修｜保養改裝｜重機停車｜新車買賣 - 有月租"],styleUrl:["#icon-1633-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            120.310615,22.687881,0
          `]}]},{name:["(Free - 按鈴限專用格)浮雲客棧Kloud Hotel"],description:["專用2格"],styleUrl:["#icon-1633-E65100-labelson"],Point:[{coordinates:[`
            120.6478401,24.1837202,0
          `]}]},{name:["(80/d)九份隔頂停車場（小客車&機車）"],description:["應該是機車格<br>機車 50 重機 80 汽車 150<br>都計次"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.847796,25.112006,0
          `]}]},{name:["(80/d)璞麗機車停車場"],description:["重機收費，但跟機車停一起"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.3119957,24.9906201,0
          `]}]},{name:["(Free)清境農場"],description:["2023/11/2 14:05（11/2 15:12 更新）<br><br>（中央社記者蕭博陽南投縣2日電）清境農場2處停車場12月起收費，小型車每小時新台幣50元、大型車100元，半小時內離場免費，購物滿額可折抵，24小時計費無上限；紅、黃、白牌機車規劃停車專區且免費。"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.163889,24.058611,0
          `]}]},{name:["(Free)CITY PARKING 城市車旅停車場 吳興街220巷59弄站"],description:["機車區無柵欄"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5604614,25.0268659,0
          `]}]},{name:["(平20/h|假30/h)歐特儀-中興低碳立體停車場"],description:["走汽車道<br>小台可以直接柵欄旁邊繞進去<br>大台可以按鈴<br>停好後管理員會來幫你手動開單<br>入口轉彎馬上有專用格，不大"],styleUrl:["#icon-1633-0288D1-labelson"],Point:[{coordinates:[`
            121.5470878,24.9771695,0
          `]}]},{name:["(40/d)福林公園地下停車場士林"],description:["115年7月6日起擴大實施大重機共用格位<br>依現場標誌指示，得斜向停放且以最多2格機車格位為限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5307618,25.0960479,0
          `]}]},{name:["(40/d)啟聰學校地下停車場"],description:["115年7月6日起擴大實施大重機共用格位<br>依現場標誌指示，得斜向停放且以最多2格機車格位為限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.511749,25.0744341,0
          `]}]},{name:["(20/h|40d)大安森林公園地下停車場 (信義路出入口)"],description:["115年7月6日起擴大實施大重機共用格位<br>依現場標誌指示，得斜向停放且以最多2格機車格位為限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5373288,25.0320604,0
          `]}]},{name:["(20/h|40/d)長安國小地下停車場"],description:["115年7月6日起擴大實施大重機共用格位<br>依現場標誌指示，得斜向停放且以最多2格機車格位為限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5313687,25.050388,0
          `]}]},{name:["(40/d)萬興國小地下停車場"],description:["115年7月6日起擴大實施大重機共用格位<br>依現場標誌指示，得斜向停放且以最多2格機車格位為限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5767155,24.9894653,0
          `]}]},{name:["(20/h|40/d)嘟嘟房停車場-七星公園站"],description:["115年7月6日起擴大實施大重機共用格位<br>依現場標誌指示，得斜向停放且以最多2格機車格位為限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5021296,25.1365832,0
          `]}]},{name:["(20/h|40/d)民有市場地下停車場"],description:["入口有直角轉彎，大車要斟酌<br>https://www.facebook.com/photo/?fbid=28317051417889957&set=a.457950930893380<br>機車道，得斜向停放且以最多2格機車格位為限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.54675,25.0606103,0
          `]}]},{name:["(20/h|40/d)松山工農地下停車場"],description:["115年7月6日起擴大實施大重機共用格位<br>依現場標誌指示，得斜向停放且以最多2格機車格位為限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5724055,25.0390518,0
          `]}]},{name:["(20/h|40/d)忠信廣場地下停車場"],description:["115年7月6日起擴大實施大重機共用格位<br>依現場標誌指示，得斜向停放且以最多2格機車格位為限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5682751,25.0403379,0
          `]}]},{name:["(40/d)玉成公園地下停車場"],description:["115年7月6日起擴大實施大重機共用格位<br>依現場標誌指示，得斜向停放且以最多2格機車格位為限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5871481,25.042201,0
          `]}]},{name:["(40/d)捷運南港機廠社會住宅停車場"],description:["115年7月6日起擴大實施大重機共用格位<br>依現場標誌指示，得斜向停放且以最多2格機車格位為限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5967035,25.0496796,0
          `]}]},{name:["(40/d)青年公園高爾夫球場地下停車場"],description:["115年7月6日起擴大實施大重機共用格位<br>依現場標誌指示，得斜向停放且以最多2格機車格位為限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5075346,25.0243329,0
          `]}]},{name:["(10/h|200/d)新莊幸福立體停車場"],description:["2026/05/20 網友寫信詢問走汽車道<br>2026/07/29 試辦走機車道 10/h <br>每日收費上限汽車收費上限"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.4604394,25.0501087,0
          `]}]}]},{name:["機車費率"],Placemark:[{name:["(Free)林口三井OUTLET二館停車場 文化二路一段"],description:["下去有一個U形迴轉，迴轉半徑較大的建議改停一館"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.3647688,25.0677138,0
          `]}]},{name:["(20/d)168parking(明倫社宅室內停車場)"],description:["2026/03/30<br>機車費率20元/次<br>機車出入口與汽車共用一車道 小心駕駛<br>感謝網友 liyco.kennie.9999 熱心回報"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5199158,25.0728151,0
          `]}]},{name:["(30/d | 1200/隔夜)家樂福B1 重新店"],description:["機車, B1有大重專用格6格<br>家樂福B1 重新店 收費 （費率不符 或 免費變收費) 30/d;有消費當日即免費;停放隔夜1200/d        "],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.4676236,25.0432961,0
          `]}]},{name:["(Free)家樂福 林口店"],description:["從汽車入口進去停專用格 不用錢 閘門旁邊進去 專用2 格 或以上 "],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.3740639,25.0775982,0
          `]}]},{name:["(20/h)市政公園地下停車場-機車"],description:["---<br>2025/10/15 更新<br>臨時停車無論停汽機車格一率收汽車費率(20/h)<br>建議直接停汽車區<br>---<br>機車費率 20/d 後牌辨析<br>台中市交通局試辦機車格停放大型重機區域 <br>紅黃牌可自由選擇停機車或汽車 機車20d 汽車20h 後牌辨析 2 格 或以上 <br>從機車道進場可停機車格或大型重機專用車格<br>從汽車道進場可停汽車格或大型重機專用車格<br>停車入口有兩邊可從文心路或惠中路進出，若大重從汽車道進請靠左側後車牌辨識才能準確，不建議從汽車道右邊辨識  "],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.6470641,24.1591845,0
          `]}]},{name:["(Free)麥當勞-台北舊宗餐廳－設有得來速"],description:["得來速裡面有設幾個機車＆汽車格<br>數量都不多<br>https://maps.app.goo.gl/Qr2DsDYtxFr4uATX9"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5792293,25.0607116,0
          `]}]},{name:["(Free)故宮西側停車場"],description:["依管理員指示停放，無車牌辨識，直接繞過去就好"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5475335,25.1017598,0
          `]}]},{name:["(100/d)劍湖山世界主題樂園"],description:["樂園入口有工作人員收費<br>重機比照機車收費<br>機車格沒畫分隔線<br>不用擔心佔太大格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.5795803,23.6158352,0
          `]}]},{name:["(?)環河停車場(機車)"],description:["有重機專用格6格，滿大的，應該是2.5格左右大小"],styleUrl:["#icon-1633-0288D1-labelson"],Point:[{coordinates:[`
            121.5044156,25.067752,0
          `]}]},{name:["(40/d)五權立體停車場"],description:["可以汽車可以機車"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6844405,24.1543991,0
          `]}]},{name:["(Free)台中公園機車停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6824039,24.145224,0
          `]}]},{name:["(10/h)大魯閣新時代購物中心"],description:["機車道可進"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6877091,24.1357088,0
          `]}]},{name:["(20/d)三創生活園區停車場"],description:["2025/10/24 開始試辦停至 B2 重機停車區<br>機車道入口進入停車<br>*原B3/B4重機停車區將於114年10月24日起調整至B2樓層-重機區。試營運期間將比照機車收費標準，如有停車相關問題，請洽B3管理室或致電02-2351-1084。<br><br>https://www.syntrend.com.tw/traffic.html"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5306259,25.044922,0
          `]}]},{name:["(30/h|100/d|60/d)Times 重慶南路一段停車場"],description:["機車費率，悠遊卡進出<br>刷卡地方剛好是斜坡有點尷尬<br>汽車區禁停重機<br>平日上限 100 (附近很多上班族，平日下午很難有位置)<br>假日上限 60"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.5133087,25.045441,0
          `]}]},{name:["(Free)烘爐地機車停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.49855,24.9711778,0
          `]}]},{name:["(30/d)CITY PARKING 城市車旅停車場 中華電信站"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.524648,25.0375759,0
          `]}]},{name:["(30/d)基隆火車站機車停車場二"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.7404484,25.1345243,0
          `]}]},{name:["(Free)中山高架下停車場-機車"],description:["機車區無柵欄"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4804276,25.0614268,0
          `]}]},{name:["(free)玉泉公園平面停車場"],description:["機車格無柵欄"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5069113,25.0501885,0
          `]}]},{name:["(20/d)第二市場停車場"],description:["機車道入，機車費率<br>https://maps.app.goo.gl/RMcnuyCX1gUAhCpXA"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6781647,24.1442924,0
          `]}]},{name:["(Free)SKM PARK機車停車場"],description:["免費停車，大型重機也可以停，位子不會太窄，好迴車，出停車場會直接接機車專用道直到穿越地下道"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.3284415,22.5815716,0
          `]}]},{name:["(30/d)國雲停車-銀河廣場地下停車場(附設充電樁)"],description:["感謝 vodka0307<br>我有試過走機車入口停機車格，吃飯兩小時回來，還是機車費率，可能要低調，我也看過有人走機車入口進去"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2236942,24.9617947,0
          `]}]},{name:["(Free)家樂福 斗六店"],description:["雲林斗六家樂福 室外有棚免費 免費"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.5307388,23.7017936,0
          `]}]},{name:["(20/d)市政公園停車場-機車"],description:["機車費率 20/d 後牌辨析<br>台中市交通局試辦機車格停放大型重機區域  <br>紅黃牌可自由選擇停機車或汽車 機車20d 汽車20h 後牌辨析 2 格 或以上 <br>從機車道進場可停機車格或大型重機專用車格<br>從汽車道進場可停汽車格或大型重機專用車格<br>停車入口有兩邊可從文心路或惠中路進出，若大重從汽車道進請靠左側後車牌辨識才能準確，不建議從汽車道右邊辨識  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.644299,24.1609203,0
          `]}]},{name:["(Free)愛買南雅店機車停車場"],description:["這邊機車很多，愛買規劃停車格有時都不夠用，但又有時夠用"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4561346,25.0026588,0
          `]}]},{name:["(10/h | 30/d)青埔新光影城/x-park 城市車旅"],description:["10h/30d 重機比照機車停<br>感謝 ___@ptt (名字不見了)"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2143985,25.0176982,0
          `]}]},{name:["(機20/d | 汽40/h)舊社捷運站地下停車場 - 場地方確認自由選擇"],description:["自由選擇 機車1d/20 汽車：1h/40 機車格應該是後牌辨識，汽車格找管理員 無 親身經驗 或 車友/朋友/親人經驗 打電話親問說沒設立重機車格，因此汽車格跟機車格兩個都可以，看自己狀況自選  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.7075335,24.1825032,0
          `]}]},{name:["(Free - 機車)慈湖停車場"],description:["處有管理員，會顯示禁止機車入內<br>旁邊有自由出入之機車停車場可停  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2928554,24.8403805,0
          `]}]},{name:["(Free)迪化汚水處理廠停車場"],description:["直接從機車車道進入，無管制 "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5113663,25.0740888,0
          `]}]},{name:["(機20/d | 汽40/h)後牌-中正公園地下停車場"],description:["機車格試辦場地，汽車那邊也有後牌辨識"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6815183,24.157537,0
          `]}]},{name:["(Free)車埕遊客中心"],description:['免費	無出入口管制 面對遊客中心的左手邊有一塊水泥空地，有箭頭標示"重機.機車專用停車場"，入口無管制，目測是提供觀光免費臨停。<br>感謝LAN@ptt提供'],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.8658589,23.8320376,0
          `]}]},{name:["(30/d)乙未紀念公園地下停車場"],description:["按鈴進入<br>直接停汽車格<br>感謝lr0119<br>--2024年4月更新--<br>入場辨識 大重可以直接下機車車道停機車區，收費比照機車，僅需注意機車車道為單車道雙向通行        "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.205809,24.9479263,0
          `]}]},{name:["(機20/h | 汽40/h)大潤發景平店停車場"],description:["機車格的話是後牌辨識，停汽車需與對講機協助開柵欄 無 親身經驗 或 車友/朋友/親人經驗 30分鐘內繳費離場免費，一小時內持有大潤發停車消費折抵免費，超過一小時後機車格消費滿300/汽車格消費滿500抵兩小時，停車場停車道下去後左手邊機車停車區，右手邊汽車停車區  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5156096,24.9924246,0
          `]}]},{name:["(20/d)捷運水安宮站(文心路)"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.646965,24.152727,0
          `]}]},{name:["(Free)遠東巨城購物中心停車場"],description:["三處停車場（機車，地下汽車，樓上汽車）都可以停；僅前車牌辨識，重機需按鈴請管理員協助，目前無需繳費即可按鈴出場。"],styleUrl:["#icon-1632-E65100-labelson"],Point:[{coordinates:[`
            120.975405,24.809547,0
          `]}]},{name:["(50/d)城市車旅新竹高鐵二站"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.039679,24.805964,0
          `]}]},{name:["(10/d - 投幣)臺中洲際棒球場附屬停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6852899,24.1975577,0
          `]}]},{name:["(20/d)武嶺停車場"],description:["機車費率 20d 閘門投幣式 <br>機車車道進入，停放機車格  <br>走汽車道的話有重機格15格（汽車費率）"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.2756246,24.1373205,0
          `]}]},{name:["(30/d)雙峰停車場"],description:["機車費率 30d 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.3136918,25.0126676,0
          `]}]},{name:["(10/h | 20/d)  台北市立第二殯儀館"],description:["新蓋好停車場目前比照一般白牌機車停車位及收費 <br>感謝eraser1101@PTT 回文"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5530253,25.0135172,0
          `]}]},{name:["(Free)基隆七堵停車場-I"],description:["機車費率 免費 無出入口管制"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.714078,25.095651,0
          `]}]},{name:["(30/d)城市車旅-寶中停車場"],description:["機車費率 30/d 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.548166,24.9783362,0
          `]}]},{name:["(20/d)中國醫藥大學新竹附設醫院停車場"],description:["中國醫藥大學新竹附設醫院停車場 機車費率 20d 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.0017964,24.8250761,0
          `]}]},{name:["(30/d)歐特儀A19體育園區站室內停車場"],description:["機車費率 30d 後牌辨析<br>感謝Jason888@ptt"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2028295,25.0025036,0
          `]}]},{name:["(10/h | 50/d) 家樂福三民店停車場"],description:["後牌辨析 10/h；當日最高50；第一個小時免費 後牌辨析  重機走機車道進出場  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.563546,25.061656,0
          `]}]},{name:["(機車30/d) 岡山樂購停車場"],description:["汽車 平30/h | 假50/h<br>自由選擇 <br> 汽車停車場按鈴<br> 機車停車場後牌辨識<br> 汽機車停車場均可停放 <br>感謝Jeff1445@PTT"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.3000282,22.77989,0
          `]}]},{name:["(20/d)日月光廣場機車停車場"],description:["後牌辨析, 自由選擇汽機車停車場<br>機車場閘門出入口是直角彎道, 出場時要注意<br>感謝gamania014@ptt"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4442712,24.9795515,0
          `]}]},{name:["(20/h)捷運文心崇德站機車停車場"],description:["先前已問過嘟嘟房客服人員，文心崇德站機車停車場是可以停放重機的。<br>場內也有不少重機車友停放，顯示是可以正常停放的。<br>https://imgur.io/a/asJhfyP<br>感謝Hirate77@ppt"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6848545,24.1720423,0
          `]}]},{name:["(Free)[仁愛路進入]中正運動中心機車停車場(平面)"],description:["無出入口管制<br>由仁愛路側進入，可與一般機車免費停放（平面，非地下停車場）<br>感謝Oliver"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5195639,25.038844,0
          `]}]},{name:["(Free)夢時代購物中心"],description:["B1M機車停車區/免費（格子稍小請斟酌）<br>大台可以停汽車格<br>感謝tonyX@ptt<br>低調，門口會貼比照汽車停車<br>但還是可以下去"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            120.3087101,22.5950161,0
          `]}]},{name:["(30/d)高雄大遠百地下停車場"],description:["露天機車停車區經詢問警衛可停，均為人工收費，30/d<br>感謝tonyX@ptt"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            120.3045661,22.6125404,0
          `]}]},{name:["(自由樂捐)陽明黃帝神宮"],description:["為宮廟的停車場，我的大羊有停過沒問題，但就是寬度有點窄，停車可能要注意，廟方是說自由捐獻，不過現場是沒看到香油錢的箱子<br>感謝s8802946@ptt"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4980678,25.1340104,0
          `]}]},{name:["(Free)愛買 三重店"],description:["室外機車格免費停<br>劃設停車區非停車格<br>不用擔心大台超出格子<br>感謝LiamTiger@ptt "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4765439,25.0714937,0
          `]}]},{name:["(60/d)城市車旅停車場(信義101停車場 )"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.56471,25.0323151,0
          `]}]},{name:["(30/d)台中勤美機車停車場"],description:["台中勤美機車停車場<br>可以停放大型重機，單次收費30元<br>入口大概在這個位置<br>感謝車友s8802946@ptt"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.663848,24.1512354,0
          `]}]},{name:["(60/d)汐止東科停車場"],description:["往機車停，按票卡的(最高60/天)<br>機車停好，往管理員收費方向走上1F，剛好是星巴克<br>(感謝車友 雷克斯索尼@ptt superbike 分享)<br>111/10/1"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.647577,25.060282,0
          `]}]},{name:["(20/h | 60/d)SOGO天母店"],description:["2022年12月下旬致電館方, 確認為自由選擇, 消費折抵當日"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5239678,25.1045847,0
          `]}]},{name:["(20/h)信義新光三越 A4"],description:["機車, 半小時10元<br><br>當天消費累計滿500元，憑發票即可兌換半小時的免費停車優惠、1000元可兌換一小時免費停車優惠，依此類推，當日免費停車最高以4小時為限， 超出時數部分，均依一般計費標準收費。結帳時向專櫃人員告知欲辦理停車折抵即可。"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5667018,25.0396539,0
          `]}]},{name:["(30/d)24TPS永固便利(湯城站)"],description:["機車費率<br>但看評論和照片... 要不要停自己斟酌<br>感謝PTT車友"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.468881,25.046283,0
          `]}]},{name:["(---)正捷停車場"],description:["室內有人顧<br>待踩點確認,. 感謝DCARD"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.3124266,24.9889509,0
          `]}]},{name:["(50/d)桃園水利大樓停車場-復興路進"],description:['"重機停機車位一次40元, 友善<br>感謝中央大學同學@DCARD"<br>入口在復興路, 請勿跑到後面另一個停車場<br>2026/04/15 更新費率<br>一次 50'],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.311451,24.9901387,0
          `]}]},{name:["(Free)新光三越 台中中港店"],description:["感謝PTT車友"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6437083,24.1652572,0
          `]}]},{name:["(10/h)自由時報停車大樓"],description:["按鈕取票<br>感謝Joketrojan@ptt提供場地"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.5728405,25.0786153,0
          `]}]},{name:["(20/d)桃園區原住民族集會所"],styleUrl:["#icon-1632-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3269477,25.001417,0
          `]}]},{name:["(Free)潮境公園收費停車場"],description:["鑽縫進出, 潛規則"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.8029801,25.1427133,0
          `]}]},{name:["(40/d)詮營停車場(信義101) - 悠遊卡"],description:["機車費率 平日20d假日30d  刷悠遊卡進入"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.5646995,25.0326143,0
          `]}]},{name:["(20/h)家樂福重慶店"],description:["需要停到二樓機車停車場，沒有重機專用位，但有車格都能停，二樓機車入口在寧夏路的汽車出口旁邊，採按鈕取幣式，地上有感應線圈，若感應不到，得要車友踢側柱壓在線圈上<br>感謝車友補充VXXXX@gmail.com補充"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5138854,25.0589241,0
          `]}]},{name:["(Free)美麗華大直影城"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5575147,25.0832173,0
          `]}]},{name:["(10/h)樹林秀泰生活"],description:["注意格位偏小，另短牌架辨析可能會失敗<br>感謝elynn889@ptt提醒"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4285741,24.994905,0
          `]}]},{name:["(Free)家樂福 樹林店"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4211138,24.9969966,0
          `]}]},{name:["(Free)大潤發中和店機車停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4993916,25.0037383,0
          `]}]},{name:["(Free)淡水禮萊國賓影城"],styleUrl:["#icon-1633-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4294771,25.1765173,0
          `]}]},{name:["(20)東吳大學機車停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5454248,25.0945636,0
          `]}]},{name:["(10/h)三猿廣場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4687302,25.0235797,0
          `]}]},{name:["(30/d)Uniqlo新莊中正店停車場"],description:["機車停車場，機車費率，30元/次。<br>跟停車場管理公司反應後，機車停車場現在已可停重機。<br>感謝John  爭取合理停車權益"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.4626623,25.0405046,0
          `]}]},{name:["(Free)林口三井"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.3647993,25.0705502,0
          `]}]},{name:["(機10/h | 汽30/h)台茂購物中心立體停車場"],description:["自由選擇"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2885645,25.0536603,0
          `]}]},{name:["(30/d)中國信託金融園區停車場B1"],description:["感謝sporplo0221@ptt更新資訊"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.6163821,25.0583302,0
          `]}]},{name:["(30/d)南港展覽館2館機車停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.6155494,25.0553937,0
          `]}]},{name:["(10/h)家樂福 蘆洲店"],description:["有重機區, 在GOGORO換電站旁"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.486766,25.087879,0
          `]}]},{name:["(15/h | 90/d)iFG遠雄廣場停車場"],description:["感謝c222ssss@PTT<br>機車停車場有隔大重區"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.6480753,25.0619454,0
          `]}]},{name:["(20/d)國軍松山醫院機車停車場"],description:["機車;20/d;後牌"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5579724,25.0540863,0
          `]}]},{name:["(30/d)高雄橋頭火車(捷運)站 站前街停車場"],description:["機車費率	30h	按鈕取票<br>高雄橋頭火車(捷運)站 站前街停車場 https://maps.app.goo.gl/JzB3CBTL2xxCKj99A"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            120.3099352,22.7612647,0
          `]}]},{name:["(Free)遠東巨城購物中心停車場 (機車)"],description:["機車場無任何設備管制，汽車場車牌辨識不會成功但門會開，離場按鈴管理員開門。<br>三處停車場（機車，地下汽車，樓上汽車）都可以停<br>感謝a07051226@ptt"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.974721,24.8094861,0
          `]}]},{name:["(20/d)新光三越 高雄左營店"],description:["機車停車場後牌辨識<br>進門前警衛會依照重機體型決定<br>該停汽車或機車格<br>感謝jeff1445@ptt"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.310393,22.6891377,0
          `]}]},{name:["(Free)奇美博物館"],description:["大門詢問回覆重機請直接停放於機車停車場，機車停車場無收費無出入口管制<br>感謝 j901386@ptt "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.2260268,22.9345608,0
          `]}]},{name:["(45/d)Times 忠孝臨沂停車場"],description:["機車費率, 推薦<br>車道其實偏窄，一般黃牌大羊會有點壓迫感，但確實是可以順順停進去。"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5308111,25.0432984,0
          `]}]},{name:["(20/h | 50/d)嘟嘟房停車場（高雄美術館站）"],description:["感謝s8802946@ptt"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            120.2880279,22.6559348,0
          `]}]},{name:["(30/h | 80/d)宏泰交易(一號)廣場"],description:["感謝2023/1/1 rexsony@ptt 分享"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5692775,25.0370278,0
          `]}]},{name:["(20/h)新光三越 台北信義新天地A8"],description:["感謝c222ssss@PTT"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5667909,25.0382241,0
          `]}]},{name:["(20/h)新光三越 台北信義新天地A11"],description:["比照機車 感謝tom1880043@PTT"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5673381,25.0365955,0
          `]}]},{name:["(--)禮客OUTLET內湖店"],styleUrl:["#icon-1633-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5747577,25.0642724,0
          `]}]},{name:["(20/h) 台北101 - CITY PARKING 城市車旅機車停車場"],description:["感謝Oliver<br>台北101	機車費率	20h	後牌辨析 需從市府路/信義路五段路口那側，警衛會要你走機車道，進去後有非常多重機車友都停在一個區域。若從其他出入口（松智路）似乎要汽車費率，但不確定"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.564101,25.0334929,0
          `]}]},{name:["(Free)義享時尚廣場-機車"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.3062965,22.6561484,0
          `]}]},{name:["(10/h | 50/d )裕隆城地下(機車)停車場"],description:["自由選擇<br>重型機車位有8格，從機車入口進入。後方車牌辨識。<br>機車位 10/h | 50/d ; <br>汽車位 平50/h | 假60/h<br>機車 200 折抵一小時<br>汽車 1000 折抵一小"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.5468285,24.9788992,0
          `]}]},{name:["(Free)愛買 台南店"],description:["免費停放 自由選擇汽車或機車格<br>感謝 Jeff1445@PTT"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.2288699,23.0345864,0
          `]}]},{name:["(50/d)CITY PARKING 城市車旅停車場 Focus中山站 機車停車場"],description:["機車費率 50/d 後牌辨析<br>感謝小鍾@FB"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.21098,22.99533,0
          `]}]},{name:["(20/h)阿卡停車場"],description:["機車費率 20H 後牌辨析 FOCUS汽車停車場旁  <br>感謝小鍾@FB"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.2103282,22.9950169,0
          `]}]},{name:["(20/h)環球購物中心機車 屏東市"],description:['後牌;20/h;機車;無專用"<br>感謝paul40807@ptt'],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.4935469,22.6732077,0
          `]}]},{name:["(Free)建國市場-機車平面停車場"],description:["從建成路土地公廟進入露天平面停車場，<br>2023/5/20 停放 無出入口管制<br>感謝 paul40807@ptt "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6947052,24.1338856,0
          `]}]},{name:["(Free)愛買 水湳店"],description:["愛買水湳店大型重機限停機車區，停車格長度目測只有 1.5-1.8 m，建議找兩排的地方停 2 格。<br>進出在同一個地方，車道狹窄，轉彎半徑小，進出停車場時小心會車。"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6596416,24.1926926,0
          `]}]},{name:["(20/d)考選部國家考場機車停車場"],description:["重機可停機車 機車格標準大小"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5501873,24.9869281,0
          `]}]},{name:["(Free)迪卡儂 南屯店"],description:["免費 入場感應到有機車直接開門  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6495355,24.1314395,0
          `]}]},{name:["(10/h)台北遠東通訊園區地下停車場"],description:["2023/12/9更新-後牌辨識<br>B1走路上來剛好是TPKA 研發辦公大樓 1F大廳，24H可停<br>(感謝車友 雷克斯索尼@ptt superbike 分享)"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.456366,24.999069,0
          `]}]},{name:["(10/h)LaLaport 台中 南館機車停車場"],description:["2023.12.22 詢問保全，於當日停進南館機車區。費率會取決於停放場域（機/汽車）。<br><br>南館機車區雖有標示大型重機專用格，但依照現場標線看起來比較像共用車格。<br><br>南館機車區大重專用位進閘門後繼續直行，將與左側看到。<br><br>------<br>感謝Jacky"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6916259,24.1341021,0
          `]}]},{name:["(20/d)凱達大飯店附屬停車場"],description:["機車費率 20d 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4984402,25.0328179,0
          `]}]},{name:["(20/d)臺北自來水事業處水源停車場"],description:["機車費率 20d 後牌辨析 2 格 或以上"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5340331,25.0128723,0
          `]}]},{name:["(Free)耐斯廣場購物中心"],description:["機車免費  無出入口管制  停車場進去一點有遮雨棚<br>感謝@wayne0355 "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.4525868,23.4965708,0
          `]}]},{name:["(Free)俥亭華江場"],description:["免費 Free 無出入口管制 <br>感謝Kevin111123"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4841282,25.0267022,0
          `]}]},{name:["(40/d)遠東通訊園區 立體停車場"],description:["經詢問管理人員，得知小型車入口沒有後牌辨析，因此「目前」先停放機車區，不清楚是否之後會更改政策。實際體驗有看到幾輛紅黃牌，但由於機車區的格子大小不一，有些格子可能不適合停放。  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4542645,24.9975113,0
          `]}]},{name:["(20/d)遠東世界中心"],description:["依機車收費，詳見以下停車場管理辦法<br>http://www.fewc.org.tw/uploads/tadnews/file/112/地下三樓停車管理辦法(112.11.15修訂).pdf"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.6458181,25.060989,0
          `]}]},{name:["(Free)淡水漁人碼頭"],description:["機車道進 無出入口管制，實際未聽聞被驅趕經驗"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.4114078,25.1835039,0
          `]}]},{name:["(20/d)淺水灣停車場"],description:["淺水灣停車場 機車費率 20d 後牌辨析<br>感謝kevinbig3"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4707017,25.2519237,0
          `]}]},{name:["(10/h | 40/d)扇形車庫公有立體停車場-機車B1"],description:["按鈕取票<br>感謝伸港陳禹勳@PTT"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            120.5370076,24.08254,0
          `]}]},{name:["(30/d)台南國泰置地機車停車場"],description:["感謝o.m_r6@ig<br>機車費率 30d 現金投幣進入（可投10、50、100，可找零） 無"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            120.1996086,22.9880352,0
          `]}]},{name:["(40/d)Times 太原路【機車】停車場"],description:["悠遊卡進出<br>位置偏少自行斟酌車體大小<br>鳴謝pokejoe0603 (阿爽)@PTT 貼文<br>另外這邊很擠不太好停"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.5162009,25.0517541,0
          `]}]},{name:["(20/d)清水機車停車場"],description:["想到淡水逛街的話 這邊是另一個選擇<br>也算是泛指的淡水老街觀光區一塊<br>因為1比較容易停滿位置也比較小<br>大台一點的車或找不到位置可以往這裡停<br>這邊忘記是後牌辨識還是悠遊卡進出 反正很好進就對了 一次20超爽<br>這裡離重建街清水街比較近<br>如果受夠外面靠海那條街的商業化<br>停這邊逛逛這裡的山逕舊街也是不錯的選擇<br>感謝 pokejoe0603 (阿爽) @PTT 貼文"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.4414455,25.1701493,0
          `]}]},{name:["(30/d)叭叭房淡江Hicity "],description:["2026/03/27 更新<br>由機車入口進入，較大臺重機無法停車（停普通機車格），無現金僅限行動支付、悠遊卡<br>感謝網友熱心回報"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4486332,25.1778751,0
          `]}]},{name:["(30/h)亞東停車場"],description:["汽車費率 30h 後牌辨析 專用2 格 或以上<br>不是亞東醫院停車場，是亞東停車場 亞東科大學生在停的 也開放民眾停車 b1有圍重機專用停車區  "],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.4521481,24.9964761,0
          `]}]},{name:["(20/h)潭子街二段31巷機車停車場"],description:["機車費率 1小時20 按鈕取票"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.706233,24.213701,0
          `]}]},{name:["(Free)潭子運動中心停車場入口"],description:["不收費 0 無出入口管制<br>請沿指示至運動中心後方機車格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.7011001,24.2097652,0
          `]}]},{name:["(20/h)城市車旅停車場 秋紅谷A"],description:["機車費率 1小時20 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.640218,24.166784,0
          `]}]},{name:["(30/d)逢甲大學凱旋停車場"],description:["機車費率 30d 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6503789,24.1819181,0
          `]}]},{name:["(20/d)全聯平鎮新富停車場"],description:["機車費率 20d 後牌辨析<br>感謝JT@ptt "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2135111,24.9395625,0
          `]}]},{name:["(30/d)享平方Shown Square"],description:["機車費率 平日ㄧ天最高30<br>**好像是享平方的官方人員來投稿?"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.0271592,24.818891,0
          `]}]},{name:["(30/d | 電子票證 20/d)桃捷 A11 坑口站"],description:["機車費率 30d 後牌辨析 僅有共享/優先格<br>電子票證20d<br>當時去停重車 管理員指示停機車即可<br>希望這個資訊有幫助 謝謝  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.26637,25.08646,0
          `]}]},{name:["(Free)大安休息站"],description:["Free 無出入口管制"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            120.5918876,24.3782236,0
          `]}]},{name:["(10/h | 30/d)高雄總圖/承億酒店"],description:["機車費率 30/D 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.3023581,22.6093366,0
          `]}]},{name:["(20/d)惠新停車場"],description:["機車費率 20d 無出入口管制<br>市政府試辦停車場地點之一"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6422427,24.164438,0
          `]}]},{name:["(10/h | 50/d)10AM後-誠品生活480"],description:["機車費率 10 /h 後牌辨析 <br> 不分平假日，一般計費收費標準<br>機車停車：10 元／1 小時(當日最高收費50元)  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6385268,24.1600364,0
          `]}]},{name:["(10/d)恩主公醫院停車場 (詮營 Parkinsys)"],description:["機車費率 10d 入口投十元開門"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.3630686,24.9383661,0
          `]}]},{name:["(30/d)新北市立土城醫院"],description:["機車費率 計次$30 後牌辨析 無 親身經驗 或 車友/朋友/親人經驗 重機可以停機車格  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4487246,24.9761498,0
          `]}]},{name:["(20/d)城市車旅 正德醫院站"],description:["機車費率 全日計次：每次20元 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6315984,24.1435097,0
          `]}]},{name:["(30/d)大車河新烏日站-地下停車場"],description:["機車費率 30/d 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.614151,24.1087935,0
          `]}]},{name:["(Free)輔仁大學機車停車場 靠近開門"],description:["機車費率 免費 有閘門 但靠近就會開 有三層 進閘門會在最底層 需要慢慢爬上去 斜坡下雨會很滑很陡  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4356855,25.0330168,0
          `]}]},{name:["(Free)中國文化大學機車停車場 - 自由選擇"],description:["自由選擇 free 無出入口管制"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5438566,25.1381713,0
          `]}]},{name:["(20/h)IKEA宜家家居 桃園店"],description:["機車費率 可參考 https://www.ikea.com.tw/zh/store/tao-yuan/info 後牌辨析  與一般白牌機車共用停車格  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2171759,25.0133222,0
          `]}]},{name:["(Free)福和華廈停車場"],description:["為里公共用地，開放給機車停放 免費 無出入口管制 https://lurl.cc/gOcQn"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.530109,25.017248,0
          `]}]},{name:["(20/d)城市車旅-屏東民生立體停車場"],description:["感謝lumis888@ptt<br>機車費率 20/d 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.4926281,22.6691228,0
          `]}]},{name:["(Free)新光三越 台北天母店二館"],description:["可停機車格 免費"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.533775,25.117305,0
          `]}]},{name:["(Free)新光三越 台北天母店一館"],description:["可停機車格 免費"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5339077,25.1178973,0
          `]}]},{name:["(30/d)俥亭停車屏東中華停車場"],description:["機車費率 30d 後牌辨析 "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.4902219,22.6736476,0
          `]}]},{name:["(30/d)A21環北站轉乘停車場"],description:["機車費率 30D 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2210854,24.9670832,0
          `]}]},{name:["(20/d)城市車旅-北屯總站轉乘停車場"],description:["機車費率 1次/20 後牌辨析  打給客服，重機可以進去"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.7082037,24.1894412,0
          `]}]},{name:["(Free)大買家 北屯店"],description:["自由選擇 汽車：1h/40，機車：免費 管理員協助 / 按鈴 無 詢問客服，汽車停車場可以進去但要按鈴，機車停車格也可以停 場地官方網站 或 官方社群媒體 "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6998291,24.176403,0
          `]}]},{name:["(Free)麗寶樂園機車停車場"],description:["客服說可以進機車停車場"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.7010784,24.3261933,0
          `]}]},{name:["(Free)全聯潭子中山店"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.7045683,24.2064633,0
          `]}]},{name:["(Free)大新路口機車停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.7046916,24.2025809,0
          `]}]},{name:["(--)IKEA宜家家居 台中店 機車停車場"],description:["客服說，重機可以去機車停車場"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6426971,24.1475301,0
          `]}]},{name:["(平30/d | 假50/d)台中車站機車停車場"],styleUrl:["#icon-1632-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            120.686304,24.13635,0
          `]}]},{name:["(30/d)國防部福利站(板橋站)"],description:["機車費率 30/d 後牌辨析 3年前有騎黃牌去停，可以辨識後牌，不知道現在紅黃牌還能不能停機車那邊。  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4651686,25.0208546,0
          `]}]},{name:["(Free)樹林興仁花園夜市"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4154278,25.0031642,0
          `]}]},{name:["(30/d)太子文旅機車停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.2178816,22.9951998,0
          `]}]},{name:["(10/h - 窄車道)NOVA資訊廣場 新竹店"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.0004859,24.7942812,0
          `]}]},{name:["(Free)中研院機車棚"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.6158427,25.0439533,0
          `]}]},{name:["(Free)特力屋 南崁店"],description:["窄車道"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.294785,25.0400904,0
          `]}]},{name:["(30/d)逢甲停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6465247,24.1716841,0
          `]}]},{name:["(25/d)領袖天下工業園區停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.455916,24.9963056,0
          `]}]},{name:["(Free)光復橋下"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4853339,25.0224298,0
          `]}]},{name:["(Free)城市車旅嘉義建國C站"],description:["可停機車停車區免費 "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.4607337,23.4778516,0
          `]}]},{name:["(30/d - 機車)A4新莊副都心站停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4450853,25.0590259,0
          `]}]},{name:["(Free)大里運動公園地下停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6841002,24.1007093,0
          `]}]},{name:["(平10/h | 假20/h)斗六停三立體停車場"],description:["斗六停三立體停車場 機車費率 平日10/d 假日20/d 後牌辨析<br>多元付款方式 有刷卡及LinePay等 "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.5439758,23.7106821,0
          `]}]},{name:["(平20/h | 假30/h - 機車區)白沙灣遊客中心第一停車場-委外業者已確認"],description:["白沙灣遊客中心第一、二停車場 機車費率 皆為平日20h,假日30h 後牌辨析<br>大型重機進出是從旁邊機車道不做管制(免費)，不需跟汽車排隊，並且停在白牌普重機車格。<br>機車空位在周末尖峰時段可以空七成以上，非常好停。<br>白沙灣停車場委外業者電話為0965-706-739，可以自行致電確認。<br>回報者本人停過非常多次。"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5186046,25.2827725,0
          `]}]},{name:["(Free - 機車區)白沙灣遊客中心第二停車場-委外業者已確認"],description:["白沙灣遊客中心第一、二停車場 機車費率 皆為平日20h,假日30h 後牌辨析<br>大型重機進出是從旁邊機車道不做管制(免費)，不需跟汽車排隊，並且停在白牌普重機車格。<br>機車空位在周末尖峰時段可以空七成以上，非常好停。<br>白沙灣停車場委外業者電話為0965-706-739，可以自行致電確認。<br>回報者本人停過非常多次。"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5141267,25.2833191,0
          `]}]},{name:["(20/d - 機車試辦) 桃園區大有立體暨殯葬園區平面公有停車場"],description:["機車費率 20d 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.3160759,25.0229315,0
          `]}]},{name:["(20/h)竹北市立-竹仁停十三停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.0118837,24.8356754,0
          `]}]},{name:["(平20/4h | 假30/4h)玉雪機車停車場"],description:["機車費率 平日前4小時為20h 假日前4小時為30h 第五個小時開始為10h 後牌辨析"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6843286,24.1531069,0
          `]}]},{name:["(10/h | 50/d - 按鈕取票)基河停車場"],description:["基河停車場之汽車部分禁止重機進入 "],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.5207658,25.0940722,0
          `]}]},{name:["(30/d)台大長興停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5456298,25.0178027,0
          `]}]},{name:["(30/d - 機車)和雲育達高中地下停車場"],description:["機車費率 30d 後牌辨析 臨停與一般機車共用車位"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5540422,25.050406,0
          `]}]},{name:["(Free - 引導至一樓廣場停車區)昇恆昌內湖旗艦店"],description:["和機車一起停在廣場停車區  "],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5881273,25.0642384,0
          `]}]},{name:["(Free - 無閘門)屏東公園機車停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.490944444444,22.6753611111111,0
          `]}]},{name:["(50/d)city parking市政北二站"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6410056,24.1595777,0
          `]}]},{name:["(Free-機車)總統路進-福隆海水浴場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.94325,25.0179444444444,0
          `]}]},{name:[`(平30/d | 假50/d)大葉高島屋天母停車場
`],description:["消費可折抵<br>2024年3月kevinbig網友修正可停機車停車場"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5317687,25.1112118,0
          `]}]},{name:["(10/h - 機車)LaLaport 台中 北館停車場（進德路）"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6927022,24.1359807,0
          `]}]},{name:["(10/h | 100/d)台中高鐵P3機車停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6155765,24.1131399,0
          `]}]},{name:["(30/h)松山火車站西區機車收費停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5773602,25.049382,0
          `]}]},{name:["(10/h)新莊宜家家居停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4647157,25.0408037,0
          `]}]},{name:["(20/h)WeMo Scooter 新光三越A9站"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5665042,25.0362271,0
          `]}]},{name:["(10/h)華泰名品城機車停車場（三期）"],description:["動線：機車出入口（代幣）<br>要點：有上下兩排，入口為下排，騎到底可以轉到上排"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2170774,25.0176095,0
          `]}]},{name:["(10/h)華泰名品城室外機車停車場"],description:["無專用格，機車費率，折抵規則跟白牌一樣"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2111895,25.0135082,0
          `]}]},{name:["(10/d)中興橋下機車停車場"],description:["悠遊卡繳費"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4902072,25.0495308,0
          `]}]},{name:["(30/d)松山車站東區機車收費停車場"],description:["無專用車位"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5802461,25.0489278,0
          `]}]},{name:["(Free)日月亭-新月橋停車場"],description:["機車區無柵欄"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4497285,25.031258,0
          `]}]},{name:["(20/h)鼎豐國聖停車場"],description:["機車停車場共 50 格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2866329,24.988696,0
          `]}]},{name:["(平50/d|假70/d)Times 赤峰街【機車】停車場"],description:["悠遊卡進出<br>道路窄，一般機車也不好走"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.5189472,25.0538495,0
          `]}]},{name:["(平20/h|假30/h|平60/d|假80|/d)168停車聯盟機車停車場"],description:["平日為 一～四<br>五六日為假日"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.5210213,25.0506986,0
          `]}]},{name:["(30/d)停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5375072,25.0393163,0
          `]}]},{name:["(Free)牯嶺街52號旁機車停車場"],description:["一般機車停車場，自行考慮車輛大小"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5169625,25.0291944,0
          `]}]},{name:["(40/d)Times 林森七條通第2【機車】停車場"],description:["一般機車停車場"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5261988,25.0505121,0
          `]}]},{name:["苗栗縣"],description:["依據苗栗縣人行空間機車慢車停車秩序實施要點<br>重機可停放於人行道、騎樓之機車停車格<br><br>https://www.miaoli.gov.tw/public_works/News.aspx?n=589&sms=9570<br><br>https://webws.miaoli.gov.tw/Download.ashx?u=LzAwMS9VcGxvYWQvNDA4L3JlbGZpbGUvOTU3MC8zNjc3NS9mZjJjMmFkMi1hN2RmLTRkODMtYmFiYy1jMjNhMjQ3MzgyMzkucGRm&n=6IuX5qCX57ij5Lq66KGM56m66ZaT5qmf6LuK5oWi6LuK5YGc6LuK56ep5bqP5a%2bm5pa96KaB6bue5YWo5paHKDExMjExMTQpLnBkZg%3d%3d&icon=.pdf"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.8214265,24.560159,0
          `]}]},{name:["(30/d)國立政治大學達賢圖書館停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5787823,24.9886061,0
          `]}]},{name:["(40/d)春德路停車場"],description:["跟一般機車一起停無專用格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2122631,25.014836,0
          `]}]},{name:["(10/h)宜家家居 新店店"],description:["2025/9<br>目前大重機有規劃一個迷你的停放區，在下坡道處右邊死角處，估計最多16台<br><br>停一般機車區也行，我看外送黃牌的也是停入一般機車區，但他說出去時...要再按對講機和服務人員說明<br>就會放行。"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.5300492,24.9726619,0
          `]}]},{name:["(20/d)忠孝夜市機車停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6819331,24.1297915,0
          `]}]},{name:["(Free)CITY PARKING 城市車旅停車場 交通局櫻花站"],description:["跟白牌機車一起停，無專用格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6520553,24.1700249,0
          `]}]},{name:["(20/d)建成停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6992647,24.1549866,0
          `]}]},{name:["(?)太和停車場"],description:["https://www.traffic.taichung.gov.tw/news/index-1.asp?Parser=9,4,21,,,,20296"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.725235,24.1632473,0
          `]}]},{name:["(20/d)CITY PARKING 城市車旅停車場 大慶站"],description:["機車道入場"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6489846,24.1201158,0
          `]}]},{name:["(20/d)CITY PARKING 城市車旅停車場 交通局城隍機車站"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.682025,24.1297685,0
          `]}]},{name:["(20/d)CITY PARKING 城市車旅停車場 交通局春安站"],description:["機車入口"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6076654,24.1357479,0
          `]}]},{name:["(20/d)朝富停車場 Charging Station"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.638536,24.16515,0
          `]}]},{name:["(20/d)馬龍潭停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.6305208,24.1601962,0
          `]}]},{name:["(20/d)豐原轉運中心 機車地下停車場"],description:["市政府試辦停車場地點之一"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.7241663,24.2547869,0
          `]}]},{name:["(50/d)Times 南京西路【機車】停車場"],description:["有留言說禁止重機!!!<br>前往需找備案<br>但悠遊卡進出，理論上也沒辦法禁止<br>導航要注意，google 地圖位置會導到隔壁巷子<br>https://maps.app.goo.gl/QywG3KGTJsvavNUJ8"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.5183217,25.0525816,0
          `]}]},{name:["(20/h)家樂福 板橋店"],description:["消費可折抵"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4794499,25.0177483,0
          `]}]},{name:["(Free)熊嗨星樂園(新北板橋店)"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4796966,25.0209498,0
          `]}]},{name:["(?)好市多 北臺中店"],description:["有重機專用停車區"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.7078043,24.1870585,0
          `]}]},{name:["(30/d)新光三越 台南小北門店"],description:["也可以停汽車區"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.2070843,23.0095155,0
          `]}]},{name:["(Free)ViVi PARK敬業二路停車場"],description:["可以跟一般機車停在外圍<br>沒有柵欄"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5544335,25.0809001,0
          `]}]},{name:["(10/h)內湖宜家家居停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5787218,25.0600021,0
          `]}]},{name:["(20/d)三總機車停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5899477,25.0725187,0
          `]}]},{name:["(Free)迪卡儂戶外綜合球場"],description:["戶外有附機車停車場"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.576741,25.0602259,0
          `]}]},{name:["(30/d)家樂福 內湖店"],description:["東面有機車棚"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5748964,25.0600645,0
          `]}]},{name:["(10/h | 30/d)博客停車場-三重迪卡儂場(臨停/月租)"],description:["FB小編回覆 重機停機車停車場<br>原PO有實際去過OK, 要注意出入口有點小"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4898748,25.0552896,0
          `]}]},{name:["(30/d)泰山貴和停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4228182,25.033555,0
          `]}]},{name:["新月廣場汽機車地下停車場入口"],description:["通道較窄，大台請考慮汽車格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.7500779,24.7535816,0
          `]}]},{name:["(平:15/d|假20/d)三仙臺停車場"],description:["重機專用格很大格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4075565,23.1223882,0
          `]}]},{name:["(20/h)YouBike 三民路8巷路外停車場"],description:["👉時段：7/1起，週一至週日8時至20時<br>👉費率：每小時20元(未達1小時以1小時計算)"],styleUrl:["#icon-1538-7CB342-labelson"],Point:[{coordinates:[`
            120.3211398,23.3081913,0
          `]}]},{name:["(Free)旱溪夜市機車停車場"],description:["機車區有重機專用格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.7013275,24.1339763,0
          `]}]},{name:["(10/h|30/d)博客停車場-樂華場(機車/臨停)"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5103367,25.0089579,0
          `]}]},{name:["(Free)陽光PARK收費停車場"],description:["機車區二樓以上有公告禁停"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5152334,24.9793092,0
          `]}]},{name:["(20/d)嘟嘟房(富邦遼寧大樓站)"],description:["入口寫禁止進入<br>但有車友在 GOOGLE 評論可停機車區"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.543064,25.0532646,0
          `]}]},{name:["(30/d)合作金庫總行停車場"],description:["有車友評論在可走機車區<br>有重機專用格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5450788,25.048302,0
          `]}]},{name:["(Free)CITY PARKING 城市車旅停車場 吳興街284巷站"],description:["機車道無柵欄"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5636772,25.0252653,0
          `]}]},{name:["(Free)溫州街52巷平面停車場"],description:["機車格子不多"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5329239,25.0210657,0
          `]}]},{name:["(30/d | 600/月)嘟嘟房停車場紀念牆"],description:["感謝Kyontw@ptt<br>24年3月修正月費為900<br>24年7月修正月費為300<br>24年8月修正月費為600<br>https://maps.app.goo.gl/SmM12rb7Ahkci6uz7"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5301916,25.0140085,0
          `]}]},{name:["(50/d)24TPS永固便利停車場-信義二"],description:["機車道入場"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.56533,25.0326194,0
          `]}]},{name:["(Free)研究院路平面停車場"],description:["無柵欄可能屬於道路範圍，請低調<br>與一般機車共用<br>無專用格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.6148511,25.0449104,0
          `]}]},{name:["(Free)中央研究院機車停車場"],description:["無柵欄可能屬於道路範圍，請低調<br>一般機車格大小"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.6171716,25.0414104,0
          `]}]},{name:["(Free)臺北市立美術館停車場(非現金支付)"],description:["機車格免費<br>格子少位置不多"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.524023,25.0715427,0
          `]}]},{name:["(20/d)棧西停車場(碼頭邊)"],description:["機車道悠遊卡進出<br>無禁止大重標示"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            120.2760257,22.6194186,0
          `]}]},{name:["(Free)關渡碼頭機車停車場"],description:["裡面有大重專用停車區"],styleUrl:["#icon-1633-7CB342-labelson"],Point:[{coordinates:[`
            121.4620675,25.1205783,0
          `]}]},{name:["(Free)航空城博物館園區—05警戒區"],description:["可以直接停機車區位置很多，無柵欄有警衛"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2298225,25.048133,0
          `]}]},{name:["(Free)uTagGo 易亭新店中正場"],description:["一般機車格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5340763,24.989207,0
          `]}]},{name:["(20/d)嘟嘟房停車場-捷運文心中清(機車)站"],description:["2026/04/07<br>感謝網友hugo930713熱情回報"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6702256,24.1735007,0
          `]}]},{name:["(Free)小觀音停車場"],description:["無柵欄，無標示禁止重機"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5462645,25.1797994,0
          `]}]},{name:["(Free)草山第一停車場"],description:["可停機車區"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5422399,25.1370691,0
          `]}]},{name:["(10/h|100/d)嘟嘟房停車場-高鐵台南4站"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.2855974,22.9232732,0
          `]}]},{name:["(Free)漢神洲際購物廣場"],description:["https://www.youtube.com/shorts/e6iB04D9YFk"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.6860827,24.1981428,0
          `]}]},{name:["(?)日月亭桃園新民平面停車場"],description:["有看到車有停機車區"],styleUrl:["#icon-1632-757575-labelson"],Point:[{coordinates:[`
            121.3106818,24.993355,0
          `]}]},{name:["(Free)三民路橋下汽機車停車場"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.3071403,24.9872605,0
          `]}]},{name:["台灣聯通(日月潭中興場)"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            120.9113498,23.865772,0
          `]}]},{name:["(Free)義大世界機車停車場"],description:["一般機車格<br>無柵欄直接進出"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.4073272,22.7300904,0
          `]}]},{name:["(100/d)義大世界購物廣場 汽車停車場"],description:["當日單次以次計費：100元/次<br>消費滿800元可免費停車(憑當日消費發票或憑據EX：國賓電影票根)<br>單次停車滿30分鐘即開始收費<br>所有車輛繳費完成後請於30分鐘內離場"],styleUrl:["#icon-1538-0288D1-labelson"],Point:[{coordinates:[`
            120.4067255,22.7300218,0
          `]}]},{name:["(10/h)俥亭-環南市場停車場"],description:["2026/04/27<br>B1是機車停車場，後牌辨識。機車格可停大型重機，機車費率，也能月租，半小時計費5元"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4902047,25.0281889,0
          `]}]},{name:["(Free)俥亭-萬板高架橋下停車場"],description:["就算比照道路<br>板橋也可以停機車格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4808833,25.0265921,0
          `]}]},{name:["(Free)八里渡船頭老街(機車停車場)"],description:["要騎上一個鐵板爬坡<br>自行考慮風險<br>https://maps.app.goo.gl/dLGynRxJkEhvZ1Ns6"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.4339024,25.1590455,0
          `]}]},{name:["(Free)忠義站平面停車場"],description:["低調<br>無柵欄機車區免費<br>屬於停車場應可停機車格<br>有看過停汽車格的車友"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.474759,25.131843,0
          `]}]},{name:["(Free)日月亭忠孝碼頭停車場 uTagGo"],description:["旁邊機車道未標示禁止重機"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.499969,25.056454,0
          `]}]},{name:["(10/d)臺北紙廠停車場"],description:["悠遊卡進出"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.4446343,25.0034945,0
          `]}]},{name:["(15/d)日月亭都會公園停車場 uTagGo"],description:["2026/8/1 試辦比照機車費率<br>可斜停兩格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.3203337,22.7304974,0
          `]}]},{name:["(15/d)高雄高工 公有立體汽機停車場出入口"],description:["2026/8/1 試辦比照機車費率<br>可斜停兩格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.3255547,22.64748,0
          `]}]},{name:["(15/d)鳳山捷運站機車停車場"],description:["2026/8/1 試辦比照機車費率<br>可斜停兩格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.3561162,22.6258559,0
          `]}]},{name:["(15/d)鳳山國中站機車停車場"],description:["2026/8/1 試辦比照機車費率<br>可斜停兩格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.3711671,22.6245052,0
          `]}]},{name:["(15/d)前鎮高中捷運站機車停車場"],description:["2026/8/1 試辦比照機車費率<br>可斜停兩格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            120.3215491,22.5877452,0
          `]}]},{name:["(30/d)國立陽明交通大學陽明校區入口收費亭"],description:["https://www.facebook.com/share/p/1BqKYAJsnu/"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.5132295,25.1192983,0
          `]}]},{name:["(Free)好市多 北投店"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4700057,25.1277518,0
          `]}]},{name:["(Free)好市多汐止店"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.633169,25.056257,0
          `]}]},{name:["(Free)好市多 台北內湖店"],styleUrl:["#icon-1632-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.576143,25.063963,0
          `]}]},{name:["(30/d)中壢國小地下停車場"],description:["2026/09/14 感謝網友 Jun 分享<br>也可停汽車格"],styleUrl:["#icon-1632-7CB342-labelson"],Point:[{coordinates:[`
            121.2218872,24.9540133,0
          `]}]},{name:["(平:30/d|假:40/d)中山停車場"],description:["2026/09/14 感謝網友 Jun 分享<br>比照機車費率平日30/日 假日40/日"],styleUrl:["#icon-1632-0288D1-labelson"],Point:[{coordinates:[`
            121.2274501,24.9552535,0
          `]}]}]},{name:["路邊友善車格"],Placemark:[{name:["新店區"],description:["【新北市訊】為提升大型重機停車可及性，新北市交通局今(114)年8月1日起，試辦開放大型重機停放板橋區及新店區的路邊機車格，若停在收費機車格，比照大型重機專用格費率，採計次收費，每4小時30元。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.5394822,24.978282,0
          `]}]},{name:["板橋區"],description:["【新北市訊】為提升大型重機停車可及性，新北市交通局今(114)年8月1日起，試辦開放大型重機停放板橋區及新店區的路邊機車格，若停在收費機車格，比照大型重機專用格費率，採計次收費，每4小時30元。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.4618415,25.0114095,0
          `]}]},{name:["桃園區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.2969674,24.9934099,0
          `]}]},{name:["中壢區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.2053963,24.9721514,0
          `]}]},{name:["平鎮區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.2053963,24.9296022,0
          `]}]},{name:["八德區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.2912463,24.9469059,0
          `]}]},{name:["楊梅區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.1366715,24.9242108,0
          `]}]},{name:["蘆竹區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.2969674,25.0784359,0
          `]}]},{name:["龜山區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.3655989,25.0199092,0
          `]}]},{name:["龍潭區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.2053963,24.8444927,0
          `]}]},{name:["大溪區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.2969674,24.8658422,0
          `]}]},{name:["大園區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.193945,25.0492632,0
          `]}]},{name:["觀音區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.1137544,25.0359365,0
          `]}]},{name:["新屋區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.067907,24.9826597,0
          `]}]},{name:["復興區"],description:["桃園市政府日前宣布，自115年4月1日起，推動「大型重型機車停放路邊機車格」試辦計畫，紅、黃牌重機騎士將可停放於路邊機車停車格，以有效利用城市空間，並提供大型重機多元的停車選擇。<br><br>試辦範圍涵蓋全桃園市轄內的路邊機車停車格，包含收費與不收費之格位，收費方式比照一般機車，依各路段機車收費費率及時段計費。大型重機停放以「一車一格」為原則，車身不得超出格線；若車身較長，最多可採斜向方式跨停2格，但仍須確保車身完整停放於格線範圍內。"],styleUrl:["#icon-1502-7CB342-labelson"],Point:[{coordinates:[`
            121.3770336,24.709089,0
          `]}]},{name:["(40/h)信義路四段199巷18號對面 重機專用格"],styleUrl:["#icon-1644-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5516615,25.034331,0
          `]}]},{name:["(20/h)哈密街59巷53弄 重機專用格"],styleUrl:["#icon-1644-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5168742,25.0753063,0
          `]}]},{name:["松河街238號 重機專用格"],description:["這是舊版台北市重機格，費率比照小型車<br>https://maps.app.goo.gl/ewS7RgoJH7BjYW5AA"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.5784735,25.0518461,0
          `]}]},{name:["(30/h)辛亥路二段台大側門 重機專用格2個"],description:["週一至週六 09-17 (30/h)<br>平日17-09 ; 週日 (不收費)"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.54153,25.02101,0
          `]}]},{name:["(30/h)鄭州路143巷 重機專用格"],styleUrl:["#icon-1644-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.509861111111,25.0511111111111,0
          `]}]},{name:["(40/h)天祥路 重機專用格"],styleUrl:["#icon-1644-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5208849,25.0622535,0
          `]}]},{name:["(30/h) 瑞光路與瑞光路112巷路口 重機專用格2個"],styleUrl:["#icon-1644-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.5806739,25.0721181,0
          `]}]},{name:["(30/d)公園街重機專用路邊停車格"],styleUrl:["#icon-1644-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.462058,25.0079231,0
          `]}]},{name:["(30/4h)復興路一段重機專用格"],description:["3格<br>一～五 07:00~20:00<br>六日(國定假日)  09:00~18:00  <br>https://maps.app.goo.gl/HWoLcFPgA9mJBjsy7"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.4494482,25.0430725,0
          `]}]},{name:["(30/4h)觀海大道重機專用格"],description:["收費時段假日08:00-18:00"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.4281833,25.1617522,0
          `]}]},{name:["(30/4h)文化路二段重機專用格"],description:["收費時段<br>平日 07:00~20:00"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.4712258,25.0272782,0
          `]}]},{name:["(30/4h)安和路重機專用格"],description:["收費時間平日 07:00-20:00<br>感謝1112209032分享"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.506256,24.9968677,0
          `]}]},{name:["(30/4h)中央路重機專用格"],description:["收費時間平日07:00-20:00"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.4498571,25.05883,0
          `]}]},{name:["(30/4h)三泰路重機專用格"],description:["收費時間平日07:00-20:00"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.434151,25.0374683,0
          `]}]},{name:["(30/4h)大學路重機專用格"],description:["收費時間平日07:00-20:00"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.3759508,24.9420982,0
          `]}]},{name:["(30/4h)建國路重機專用格"],description:["2026/04/10<br>重機專用格三格<br>感謝網友 ketw玲玖 回報"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.5370962,24.9843631,0
          `]}]},{name:["(30/4h)重機專用格"],description:["https://maps.app.goo.gl/9pXNbUNdhVozGJzk8"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.4905718,25.0495615,0
          `]}]},{name:["(30/4h)三民路重機專用停車格"],description:["平：07:00-20:00 假：無收費"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.5343454,24.9742906,0
          `]}]},{name:["(30/4h)長榮路重機專用停車格"],description:["收費時間平日07:00-20:00<br>假日09:00-18:00"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.462301,25.0835676,0
          `]}]},{name:["(30/4h)明德路重機專用格"],description:["收費時段<br>07:00-20:00"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.4617867,24.9778143,0
          `]}]},{name:["(30/4h)商港三路重機專用格"],description:["商港三路上有重機專用停車格<br>未確定精準座標<br>請求支援回報"],styleUrl:["#icon-1644-757575-labelson"],Point:[{coordinates:[`
            121.398034,25.1505294,0
          `]}]},{name:["(30/4h)芳洲路重機專用格"],description:["芳洲路上有重機專用停車格<br>未確定精準座標<br>請求支援回報"],styleUrl:["#icon-1644-757575-labelson"],Point:[{coordinates:[`
            121.4431783,25.0843728,0
          `]}]},{name:["(30/4h)新城一路重機專用格"],description:["新城一路上有重機專用停車格<br>未確定精準座標<br>請求支援回報"],styleUrl:["#icon-1644-757575-labelson"],Point:[{coordinates:[`
            121.4421917,25.0862272,0
          `]}]},{name:["(30/4h)中山路重機專用格"],description:["中山路上有重機專用停車格<br>未確定精準座標<br>請求支援回報"],styleUrl:["#icon-1644-757575-labelson"],Point:[{coordinates:[`
            121.4220063,24.9891406,0
          `]}]},{name:["(30/4h)中原二街重機專用格"],description:["中原二街上有重機專用停車格<br>未確定精準座標<br>請求支援回報"],styleUrl:["#icon-1644-757575-labelson"],Point:[{coordinates:[`
            121.487163,25.0112485,0
          `]}]},{name:["(30/4h)民利街68巷5弄重機專用格"],description:["民利街68巷5弄上有重機專用停車格<br>未確定精準座標<br>請求支援回報"],styleUrl:["#icon-1644-757575-labelson"],Point:[{coordinates:[`
            121.4775205,24.9988058,0
          `]}]},{name:["(30/4h)光復路重機專用格"],styleUrl:["#icon-1644-7CB342-labelson-nodesc"],Point:[{coordinates:[`
            121.4720047,25.0522769,0
          `]}]},{name:["普通大型共用機車格"],description:["南港區三重路（西側），停車格在經貿二路106巷至新民街西側。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.61403,25.057288,0
          `]}]},{name:["普通大型共用機車格"],description:["萬華區 昆明街（西側），停車格在峨嵋街至成都路，附近就是西門商圈以及台北市立聯合醫院，不過西門商圈較為擁擠，擔心車子刮傷的車友，可以停去峨嵋立體停車場。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.504967,25.043758,0
          `]}]},{name:["普通大型共用機車格"],description:["中正區 徐州路（南側），停車格在徐州路2號前，附近鄰近台大醫院。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.520088,25.04154,0
          `]}]},{name:["普通大型共用機車格"],description:["大同區民生西路（南側），停車格在寧夏路到太原路靠南這一側。這邊緊鄰寧夏夜市，好吃的東西非常多，以往想騎車前往停車較不容易，試辦期間剛好解決停車問題，停車格剛好就在太春小館門口，這間我很喜歡吃，推薦給各位車友。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.516296,25.057082,0
          `]}]},{name:["普通大型共用機車格"],description:["中正區 杭州南路1段（西側），停車格在杭州南路1段24號前。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.524725,25.036878,0
          `]}]},{name:["普通大型共用機車格"],description:["中山區松江路（東側），停車格在民權東路2段至錦州街東側。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.533333,25.061389,0
          `]}]},{name:["普通大型共用機車格"],description:["士林區基河路（西側），停車格在承德路四段179巷至基河路與文林路口，靠近百齡高中這一側，鄰近觀光客眾多的士林夜市，騎乘大型重機去逛夜市更加方便。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.524222,25.08725,0
          `]}]},{name:["普通大型共用機車格"],description:["大安區復興南路1段（東側），停車格在市民大道3段至復興南路1段95號東側。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.54393,25.044164,0
          `]}]},{name:["普通大型共用機車格"],description:["松山區南京東路3段（北側），停車格在南京東路3段269巷至敦化北路北側，在這附近的上班族可以考慮試停。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.54683,25.051923,0
          `]}]},{name:["普通大型共用機車格"],description:["北投區 西安街2段（西側），停車格在靠近石牌國民小學這一側。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.514306,25.115758,0
          `]}]},{name:["普通大型共用機車格"],description:["信義區 仁愛路4段（北側），停車格在靠近逸仙路與仁愛路四段路口這一段，並非仁愛路四段整排都可以停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.560326,25.037735,0
          `]}]},{name:["普通大型共用機車格"],description:["信義區 逸仙路（西側），停車格在松高路至仁愛路4段靠近國父紀念館這一側。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.5615,25.038528,0
          `]}]},{name:["普通大型共用機車格"],description:["內湖區瑞光路513巷22弄（南側），停車格在瑞光路583巷至瑞光路513巷南側。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.56876,25.079936,0
          `]}]},{name:["普通大型共用機車格"],description:["文山區 新光路2段（北側），停車格在捷運動物園站北側靠近河濱自行車道，騎重機去動物園玩可以順便試停看看。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.578063,24.997704,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定) 仁愛路四段122巷4號對面汽機車共用車格"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.5503356,25.0372426,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定) 敦化南路一段 <-> 仁愛路四段112巷 汽機車共用停車格"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.5494076,25.0355405,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定) 敦化北路199巷2弄 (宏國大樓後方) 汽機車共用停車格"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.5500274,25.054991,0
          `]}]},{name:["(Free - 平日夜間19-7 / 假日限定) 大業路452巷(彰銀前) 汽機車共用停車格"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.4972075,25.131783,0
          `]}]},{name:["(Free - 平日夜間20-8 / 假日限定) 建國北路二段120號"],description:["免付費 無出入口管制  汽機車共用車格20:00-8:00  "],styleUrl:["#icon-1644-9C27B0-labelson"],Point:[{coordinates:[`
            121.5364353,25.0589585,0
          `]}]},{name:["(Free - 平日夜間19-7 / 假日限定)松江路25巷38號"],description:["免付費 無出入口管制 汽機車共用車格1900-0700"],styleUrl:["#icon-1644-9C27B0-labelson"],Point:[{coordinates:[`
            121.5344345,25.0475979,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定)成功路二段323巷32號"],description:["(Free - 平日夜間20-7 / 假日限定)"],styleUrl:["#icon-1644-9C27B0-labelson"],Point:[{coordinates:[`
            121.5914209,25.0704294,0
          `]}]},{name:["(Free - 夜間20-7限定)仁愛路三段123巷13弄"],description:["夜間限定共用車格"],styleUrl:["#icon-1644-9C27B0-labelson"],Point:[{coordinates:[`
            121.543305555556,25.0398888888889,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定) 吉祥路182號"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.5625329,25.0510057,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定)基隆路一段380巷"],description:["(Free - 平日夜間20-7 / 假日限定)"],styleUrl:["#icon-1644-9C27B0-labelson"],Point:[{coordinates:[`
            121.55925,25.0345,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定)和平東路二段118巷"],description:["(Free - 平日夜間20-7 / 假日限定)"],styleUrl:["#icon-1644-9C27B0-labelson"],Point:[{coordinates:[`
            121.542888888889,25.0241944444444,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定)和平東路二段96巷"],description:["(Free - 平日夜間20-7 / 假日限定)"],styleUrl:["#icon-1644-9C27B0-labelson"],Point:[{coordinates:[`
            121.5414664,25.0245313,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定)台北市大安區復興南路一段107巷"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.545638888889,25.0435833333333,0
          `]}]},{name:["(20/d - 平日夜間18-8 / 假日限定)台北市信義區松勇路"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.569777777778,25.0376666666667,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定) 一江街汽機車共用車格"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.5315334,25.0529277,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定)四平街汽機車共用車格"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.5324684,25.0536657,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定) 吉林路汽機車共用車格"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.5300676,25.0528747,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定)汽機車共用車格"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.5493945,25.0298979,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定)汽機車共用車格"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.5494083,25.030483,0
          `]}]},{name:["(Free - 平日夜間20-7 / 假日限定)汽機車共用車格"],styleUrl:["#icon-1644-9C27B0-labelson-nodesc"],Point:[{coordinates:[`
            121.5481438,25.0299441,0
          `]}]},{name:["(30/4h)新知八路"],description:["開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4546675,25.0613714,0
          `]}]},{name:["(30/4h)新莊路214巷(中正路至景德路)"],description:["新莊路214巷(中正路至景德路)<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4528521,25.0357157,0
          `]}]},{name:["(30/4h)中華路一段"],description:["2026/03 新北試辦重機停收費機車格<br>中華路1段(中正路至中華路1段63巷)<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4520445,25.0380558,0
          `]}]},{name:["(30/4h)民權路61巷"],description:["2026/03 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4734386,25.0879184,0
          `]}]},{name:["(30/4h)三民路98巷"],description:["2026/03 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4723979,25.0870292,0
          `]}]},{name:["(30/4h)長樂路237巷"],description:["2026/03 新北試辦重機停收費機車格<br>長樂路237巷(長興路至長樂路)<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4614246,25.092146,0
          `]}]},{name:["(30/4h)長樂路"],description:["2026/03 新北試辦重機停收費機車格<br>長樂路(三民路至長樂路237巷)<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4628195,25.0914264,0
          `]}]},{name:["(30/4h)三民路"],description:["2026/03 新北試辦重機停收費機車格<br>三民路<br>(單號側：民族路548巷至長興路<br>雙號側：三民路300巷至長興路)<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4625659,25.0920892,0
          `]}]},{name:["(30/4h)中正路"],description:["2026/03 新北試辦重機停收費機車格<br>中正路<br>(單號側：中正路439號至三民路<br>雙號側：中正路410號至三民路)<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4633583,25.092799,0
          `]}]},{name:["(30/4h)復興路"],description:["2026/03 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4800896,25.0896997,0
          `]}]},{name:["(30/4h)三泰路(莊泰路至貴子路)"],description:["2026/03 新北試辦重機停收費機車格<br>三泰路(莊泰路至貴子路)<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4357786,25.0365472,0
          `]}]},{name:["(30/4h)思源路單號側(中正路至思源路61巷)"],description:["2026/03 新北試辦重機停收費機車格<br>思源路單號側(中正路至思源路61巷)<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4599482,25.0398703,0
          `]}]},{name:["(30/4h)中正路(化成路至思源路)"],description:["2026/03 新北試辦重機停收費機車格<br>中正路(化成路至思源路)<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4611065,25.0392489,0
          `]}]},{name:["(30/4h)貴子路67巷"],description:["2026/03 新北試辦重機停收費機車格<br>貴子路67巷<br>貴子路67巷對面新闢道路<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.430825,25.0403868,0
          `]}]},{name:["(30/4h)泰林路二段2號"],description:["2026/03 新北試辦重機停收費機車格<br>泰林路2段2號對面空地<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4386161,25.0534149,0
          `]}]},{name:["(30/4h)新北大道四段437號"],description:["2026/03 新北試辦重機停收費機車格<br>新北大道4段437號旁空地<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4392637,25.0524298,0
          `]}]},{name:["(30/4h)八德路"],description:["2026/03 新北試辦重機停收費機車格<br>八德路(文化三路1段至文化二路1段)<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.3628886,25.0658836,0
          `]}]},{name:["(30/4h)三民路(保和街至得勝街)"],description:["2026/03 新北試辦重機停收費機車格<br>三民路(保和街至得勝街)<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4731839,25.0857824,0
          `]}]},{name:["(30/4h)忠承路(忠義路至承天路)起"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4406911,24.9669976,0
          `]}]},{name:["(30/4h)忠承路(忠義路至承天路)訖"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4378161,24.9645232,0
          `]}]},{name:["(30/4h)承天路(中央路3段至承天路43巷)起"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4357452,24.9662861,0
          `]}]},{name:["(30/4h)承天路(中央路3段至承天路43巷)訖"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4385189,24.9639615,0
          `]}]},{name:["(30/4h)中央路3段(中華路至大安路)起"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4328192,24.9653975,0
          `]}]},{name:["(30/4h)中央路3段(中華路至大安路)訖"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4376364,24.9679785,0
          `]}]},{name:["(30/4h)海山路"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4487415,24.9848549,0
          `]}]},{name:["(30/4h)頂埔活動中心旁空地"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4185572,24.957333,0
          `]}]},{name:["(30/4h)中央路4段53號周邊道路"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4188623,24.9584805,0
          `]}]},{name:["(30/4h)中央路4段(大暖路至中央路4段136巷)訖"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4175731,24.9585133,0
          `]}]},{name:["(30/4h)科技路"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.421321,24.9591067,0
          `]}]},{name:["(30/4h)大暖路"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4225882,24.9588456,0
          `]}]},{name:["(30/4h)中和路(雙號側：永貞路至宜安路)起"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.5124975,25.0042949,0
          `]}]},{name:["(30/4h)中和路(雙號側：永貞路至宜安路)訖"],description:["2026/05 新北試辦重機停收費機車格開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.5082725,24.9995635,0
          `]}]},{name:["(30/4h)四維街"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.5245664,24.9981529,0
          `]}]},{name:["(30/4h)永和路2段(文化路、竹林路口至中山路1段、中正路口)起"],description:["2026/05 新北試辦重機停收費機車格開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.5157931,25.0149823,0
          `]}]},{name:["(30/4h)永和路2段(文化路、竹林路口至中山路1段、中正路口)訖"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.5145104,25.0103483,0
          `]}]},{name:["(30/4h)新市三路一段"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.430597,25.1969777,0
          `]}]},{name:["(30/4h)崁頂三路"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4312573,25.1981842,0
          `]}]},{name:["(30/4h)崁頂五路279巷"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4240915,25.1979786,0
          `]}]},{name:["(30/4h)崁頂五路"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4188126,25.1935305,0
          `]}]},{name:["(30/4h)濱海路一段"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4381079,25.18966,0
          `]}]},{name:["(30/4h)新市一路三段101巷"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4455571,25.1851579,0
          `]}]},{name:["(30/4h)中山北路二段381巷"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4433204,25.186916,0
          `]}]},{name:["(30/4h)中山北路二段"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4438929,25.1888274,0
          `]}]},{name:["(30/4h)中正東路2段71號旁道路"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4597543,25.1541746,0
          `]}]},{name:["(30/4h)義山路二段"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4395453,25.200204,0
          `]}]},{name:["(30/4h)新市三路二段"],description:["2026/05 新北試辦重機停收費機車格<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4351991,25.1958443,0
          `]}]},{name:["(30/4h)油車口公有停車場"],description:["2026/05 新北試辦重機停收費機車格<br>***非停車場內，是路邊收費停車格***<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4194105,25.1807471,0
          `]}]},{name:["(30/4h)中正路"],description:["2026/05 新北試辦重機停收費機車格<br>中正路(含財政部國稅局淡水稽徵所第二辦公室旁土地及淡水區紅毛城段976地號)<br>開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4381038,25.1716184,0
          `]}]},{name:["中興街(公益路-公正路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6629285,24.1507139,0
          `]}]},{name:["中興街(公益路-公正路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6629499,24.1490408,0
          `]}]},{name:["館前路(英才路470巷-公益路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6634827,24.1533253,0
          `]}]},{name:["館前路(英才路470巷-公益路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6634237,24.1509358,0
          `]}]},{name:["臺灣大道二段311巷(臺灣大道-公益路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6654081,24.1536718,0
          `]}]},{name:["臺灣大道二段311巷"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.664252,24.150921,0
          `]}]},{name:["臺灣大道二段311巷1弄(英才路-臺灣大道2段311巷)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.665146,24.1533017,0
          `]}]},{name:["臺灣大道二段311巷1弄(英才路-臺灣大道2段311巷)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6662591,24.1526581,0
          `]}]},{name:["公益路155巷(公益路-公正路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6642435,24.150734,0
          `]}]},{name:["公益路155巷(公益路-公正路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6642381,24.1490256,0
          `]}]},{name:["公益路(英才路-美村路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6651021,24.1507961,0
          `]}]},{name:["公益路(英才路-美村路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.661744,24.1507913,0
          `]}]},{name:["英才路(臺灣大道-公益路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6652468,24.1509705,0
          `]}]},{name:["英才路(臺灣大道-公益路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6666684,24.1529774,0
          `]}]},{name:["英才路470巷(英才路-館前路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6656584,24.1521962,0
          `]}]},{name:["英才路470巷"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6636281,24.1533905,0
          `]}]},{name:["綠川西街(光復路-民權路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6851824,24.1400429,0
          `]}]},{name:["綠川西街(光復路-民權路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6815829,24.136621,0
          `]}]},{name:["綠川東街(建國路-民權路）"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6817788,24.1364041,0
          `]}]},{name:["綠川東街(建國路-民權路）"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6857324,24.1396974,0
          `]}]},{name:["民族路(建國路-綠川西街)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6823098,24.1372155,0
          `]}]},{name:["民族路(建國路-綠川西街)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.683144,24.136464,0
          `]}]},{name:["中山路(建國路-綠川西街)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6830361,24.1378999,0
          `]}]},{name:["中山路(建國路-綠川西街)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6841975,24.1372806,0
          `]}]},{name:["成功路(建國路-綠川西街)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6845103,24.1393347,0
          `]}]},{name:["成功路(建國路-綠川西街)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.685492,24.1385367,0
          `]}]},{name:["逢甲路(文華路-西屯路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6463855,24.1788154,0
          `]}]},{name:["逢甲路(文華路-西屯路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6423837,24.1778122,0
          `]}]},{name:["福星路(河南路-福星北路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6477556,24.1742573,0
          `]}]},{name:["福星路(河南路-福星北路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6449527,24.1821364,0
          `]}]},{name:["至善路(逢甲路-西屯路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6434051,24.1782694,0
          `]}]},{name:["至善路(逢甲路-西屯路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6432442,24.1768587,0
          `]}]},{name:["逢大路(大鵬路~河南路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6503032,24.1780207,0
          `]}]},{name:["逢大路(大鵬路~河南路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6506385,24.1759311,0
          `]}]},{name:["文華路86巷(全路段)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.650273,24.1765734,0
          `]}]},{name:["文華路86巷(全路段)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6466252,24.1765416,0
          `]}]},{name:["逢大路19巷(全路段)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6503591,24.17652,0
          `]}]},{name:["文心南路(文心南五路-文心南九路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6464487,24.1318749,0
          `]}]},{name:["文心南路(文心南五路-文心南九路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6463441,24.1279437,0
          `]}]},{name:["文心南五路(永春東一路-文心南路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6414495,24.1320264,0
          `]}]},{name:["文心南五路(永春東一路-文心南路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6462158,24.1320313,0
          `]}]},{name:["永春東一路(文心南五路-文心南七路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6413053,24.13189,0
          `]}]},{name:["永春東一路(文心南五路-文心南七路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6412999,24.1296233,0
          `]}]},{name:["向心南路(文心南五路-文心南七路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6439081,24.1318051,0
          `]}]},{name:["向心南路(文心南五路-文心南七路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6439081,24.1296021,0
          `]}]},{name:["豐偉路(文心南五路-文心南九路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6450572,24.1317977,0
          `]}]},{name:["豐偉路(文心南五路-文心南九路)"],description:["為提升路邊停車空間使用效率，台中市政府自115年5月1日起，於逢甲、勤美、文心秀泰商圈、台中火車站等熱門區域，試辦「大型重型機車共用路邊機車格位計畫」。<br><br>地面繪設「大重機共用」標誌，比照一般機車費率計收。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            120.6450303,24.1279448,0
          `]}]},{name:["(30/4h)貴陽街(新北大道6段至明志路3段)"],description:["開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4210307,25.0335287,0
          `]}]},{name:["(30/4h)貴陽街(新北大道6段至明志路3段)"],description:["開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4221653,25.0329989,0
          `]}]},{name:["(30/4h)明志路三段(明志路3段352巷至432巷)"],description:["開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4218552,25.0350259,0
          `]}]},{name:["(30/4h)明志路三段(明志路3段352巷至432巷)"],description:["開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4209281,25.0331504,0
          `]}]},{name:["(30/4h)景平路單號側(景安路至景平路241巷)"],description:["開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.5095274,24.9928194,0
          `]}]},{name:["(30/4h)景平路單號側(景安路至景平路241巷)"],description:["開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.5049595,24.9933816,0
          `]}]},{name:["(30/4h)景安路(景平路至安和路)"],description:["開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.5050328,24.9937679,0
          `]}]},{name:["(30/4h)景安路(景平路至安和路)"],description:["開放大型重機停放路邊收費機車格，停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.5061539,24.9971907,0
          `]}]},{name:["松河街重機專用格"],description:["這是舊版台北市重機格，費率比照小型車<br>https://maps.app.goo.gl/hj1ahrahpdjm1Pk58"],styleUrl:["#icon-1644-7CB342-labelson"],Point:[{coordinates:[`
            121.5748979,25.0510359,0
          `]}]},{name:["中信街(中央路至新北大道)"],description:["停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4468706,25.059217,0
          `]}]},{name:["中信街(中央路至新北大道)"],description:["停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4475706,25.0581989,0
          `]}]},{name:["中央路"],description:["停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4449091,25.0564271,0
          `]}]},{name:["中央路"],description:["停放機車格時車身均不得超出格線，若車身太長，可採跨2格停放，但仍須停妥於格線內，避免影響其他車輛停放與行車安全。"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4594895,25.0587718,0
          `]}]},{name:["龍七路(鳳一路至鳳三路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3360126,24.97276,0
          `]}]},{name:["龍七路(鳳一路至鳳三路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3348431,24.971836,0
          `]}]},{name:["三鶯轉運站北側停車場"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.35801,24.9544766,0
          `]}]},{name:["龍五路(鳳一路至鳳三路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3354252,24.9732765,0
          `]}]},{name:["龍五路(鳳一路至鳳三路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.334245,24.9724207,0
          `]}]},{name:["鳳三路(鶯歌路至龍三路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3353482,24.9711581,0
          `]}]},{name:["鳳三路(鶯歌路至龍三路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3328966,24.9737695,0
          `]}]},{name:["鳳一路(鶯歌路至龍三路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3367573,24.9722298,0
          `]}]},{name:["鳳一路(鶯歌路至龍三路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3340751,24.9746417,0
          `]}]},{name:["鶯歌路(鳳一路至鳳三路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3367923,24.9720941,0
          `]}]},{name:["鶯歌路(鳳一路至鳳三路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3355156,24.9711361,0
          `]}]},{name:["文化路229號對面"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3541838,24.9533675,0
          `]}]},{name:["建國路(中正一路至建國路85號)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3408326,24.950662,0
          `]}]},{name:["建國路(中正一路至建國路85號)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3568977,24.9569178,0
          `]}]},{name:["行政路"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3550127,24.9564504,0
          `]}]},{name:["行政路"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3501874,24.9549354,0
          `]}]},{name:["仁愛路(中正一路至建國路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.353487,24.956819,0
          `]}]},{name:["仁愛路(中正一路至建國路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3546376,24.9552018,0
          `]}]},{name:["大學路(三樹路至學府路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3716678,24.9475566,0
          `]}]},{name:["大學路(三樹路至學府路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3780192,24.9398714,0
          `]}]},{name:["大同路2段(大同路1段515巷至大同路2段184巷)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.6455921,25.0623556,0
          `]}]},{name:["大同路2段(大同路1段515巷至大同路2段184巷)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.6527129,25.0645486,0
          `]}]},{name:["福興段194地號臨時路外機車停車場(路外停車場代收)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.6172452,25.0513675,0
          `]}]},{name:["國慶路"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3774911,24.9380024,0
          `]}]},{name:["國慶路"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3739184,24.9408966,0
          `]}]},{name:["三樹路(民生街至大學路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3777944,24.938062,0
          `]}]},{name:["三樹路(民生街至大學路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.378288,24.9396526,0
          `]}]},{name:["民生街(三樹路至國光街)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3776641,24.9377956,0
          `]}]},{name:["民生街(三樹路至國光街)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3757598,24.9365358,0
          `]}]},{name:["學成路(國慶路至大學路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3738946,24.941256,0
          `]}]},{name:["學成路(國慶路至大學路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3753698,24.9426277,0
          `]}]},{name:["復興路"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3682134,24.9388953,0
          `]}]},{name:["復興路(學成路至復興路459巷)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3621027,24.9385884,0
          `]}]},{name:["大勇路(復興路至大仁路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3669934,24.9387927,0
          `]}]},{name:["大勇路(復興路至大仁路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3670792,24.9376496,0
          `]}]},{name:["國華路"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3429321,24.9565781,0
          `]}]},{name:["國華路"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3438602,24.9523127,0
          `]}]},{name:["鶯歌路(鶯桃路至鳳七路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3305306,24.9680384,0
          `]}]},{name:["鶯歌路(鶯桃路至鳳七路)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.3318624,24.9689454,0
          `]}]},{name:["新市一路一段331巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4361728,25.1896298,0
          `]}]},{name:["新市一路一段331巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4358456,25.1862415,0
          `]}]},{name:["新市一路一段281巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4347746,25.187903,0
          `]}]},{name:["新市一路一段281巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4345385,25.1864103,0
          `]}]},{name:["新市一路二段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4443803,25.1829816,0
          `]}]},{name:["新市一路二段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4431411,25.182899,0
          `]}]},{name:["新市二路二段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4267079,25.1957871,0
          `]}]},{name:["新市二路二段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4316647,25.1939523,0
          `]}]},{name:["新市二路三段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4320058,25.1938687,0
          `]}]},{name:["新市二路三段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4383305,25.1931066,0
          `]}]},{name:["新市二路三段172巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4371569,25.1930749,0
          `]}]},{name:["新市二路三段172巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4369396,25.1917133,0
          `]}]},{name:["崁頂五路"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4257022,25.2009955,0
          `]}]},{name:["新市二路四段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4385529,25.1930334,0
          `]}]},{name:["新市二路四段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.446439,25.1923992,0
          `]}]},{name:["新市五路一段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4218196,25.197897,0
          `]}]},{name:["新市五路一段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4283558,25.200131,0
          `]}]},{name:["新市五路三段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.438988,25.197733,0
          `]}]},{name:["新市五路三段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4337148,25.1983543,0
          `]}]},{name:["義山路二段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4384696,25.193215,0
          `]}]},{name:["新市六路一段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4306244,25.202992,0
          `]}]},{name:["新市六路一段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4345941,25.2014485,0
          `]}]},{name:["中山北路3段(濱海路1段至新市二路4段)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4445665,25.1920735,0
          `]}]},{name:["中山北路3段(濱海路1段至新市二路4段)"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4437779,25.1893115,0
          `]}]},{name:["中山北路二段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4444867,25.1831328,0
          `]}]},{name:["中山北路三段31巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4431855,25.189887,0
          `]}]},{name:["濱海路一段111巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4392942,25.1877889,0
          `]}]},{name:["濱海路一段306巷9弄"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4382228,25.1910355,0
          `]}]},{name:["濱海路一段306巷9弄"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4407387,25.1907079,0
          `]}]},{name:["濱海路一段306巷60弄"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4410533,25.1916579,0
          `]}]},{name:["濱海路一段306巷60弄"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4429871,25.1923035,0
          `]}]},{name:["濱海路二段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4377284,25.1896935,0
          `]}]},{name:["濱海路二段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4310605,25.1905624,0
          `]}]},{name:["濱海路一段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4465422,25.1890485,0
          `]}]},{name:["濱海路二段202巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4346043,25.1902683,0
          `]}]},{name:["濱海路二段202巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4351407,25.1932925,0
          `]}]},{name:["濱海路二段202巷65弄"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4330679,25.1926502,0
          `]}]},{name:["濱海路二段202巷65弄"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4348972,25.1924294,0
          `]}]},{name:["義山路一段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4384155,25.1929018,0
          `]}]},{name:["義山路一段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4374177,25.1860573,0
          `]}]},{name:["義山路一段163巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.437562,25.1879706,0
          `]}]},{name:["義山路一段163巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4336996,25.1881842,0
          `]}]},{name:["義山路一段401巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4380272,25.1910677,0
          `]}]},{name:["義山路一段401巷"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4349346,25.1915022,0
          `]}]},{name:["崁頂二路"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4363433,25.2008948,0
          `]}]},{name:["崁頂二路"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4352275,25.1937206,0
          `]}]},{name:["沙崙路二段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4319356,25.1940487,0
          `]}]},{name:["沙崙路二段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4346821,25.2011209,0
          `]}]},{name:["後洲路一段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4266582,25.1960608,0
          `]}]},{name:["新市三路一段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4249711,25.1991437,0
          `]}]},{name:["後洲路一段"],styleUrl:["#icon-1644-0288D1-labelson-nodesc"],Point:[{coordinates:[`
            121.4297534,25.2031086,0
          `]}]},{name:["財政部北區國稅局淡水稽徵所第二辦公室旁土地"],description:["財政部國稅局淡水稽徵所第二辦公室旁土地及淡水區紅毛城段976地號(路外停車場代收)"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.4363908,25.1727571,0
          `]}]},{name:["輕軌紅樹林站橋下"],description:["輕軌紅樹林站橋下(海天段等6筆地號)機車停車格(路外停車場代收)"],styleUrl:["#icon-1644-0288D1-labelson"],Point:[{coordinates:[`
            121.458885,25.156278,0
          `]}]},{name:["新北大道1段5巷2弄"],styleUrl:["#line-01579B-17275-nodesc"],LineString:[{tessellate:["1"],coordinates:[`
            121.4879531,25.0605999,0
            121.4887081,25.0605866,0
            121.4894444,25.0605975,0
          `]}]},{name:["過圳街31巷"],styleUrl:["#line-01579B-17469-nodesc"],LineString:[{tessellate:["1"],coordinates:[`
            121.4883349,25.0598276,0
            121.489153,25.0603354,0
            121.4894444,25.0605975,0
            121.4898933,25.0608675,0
          `]}]},{name:["重新路3段115巷(新北大道1段至重新路3段)"],styleUrl:["#line-01579B-15144-nodesc"],LineString:[{tessellate:["1"],coordinates:[`
            121.4909931,25.0595769,0
            121.4905855,25.0600337,0
            121.4902395,25.0604249,0
            121.4898933,25.0608675,0
            121.4899241,25.0613097,0
          `]}]},{name:["過圳街7巷(重新路3段115巷至過圳街7巷16號)"],styleUrl:["#line-01579B-15725-nodesc"],LineString:[{tessellate:["1"],coordinates:[`
            121.4899941,25.0595653,0
            121.4906191,25.0599918,0
          `]}]},{name:["新北大道1段15巷"],styleUrl:["#line-01579B-15919-nodesc"],LineString:[{tessellate:["1"],coordinates:[`
            121.4879775,25.0613168,0
            121.4879507,25.0605879,0
            121.4879507,25.0603206,0
          `]}]},{name:["重新路3段115巷1弄"],styleUrl:["#line-01579B-15531-nodesc"],LineString:[{tessellate:["1"],coordinates:[`
            121.491625,25.0605186,0
            121.4911945,25.0602356,0
            121.490874,25.0600521,0
            121.4906581,25.0599501,0
          `]}]},{name:["重新路3段(中正南、北路口至過圳街、重安街口)"],styleUrl:["#line-01579B-16113-nodesc"],LineString:[{tessellate:["1"],coordinates:[`
            121.4927493,25.0607313,0
            121.4909362,25.0595116,0
            121.4893537,25.0584668,0
          `]}]},{name:["新北大道1段(單號側：重新路3段至過圳街)"],styleUrl:["#line-01579B-17275-nodesc"],LineString:[{tessellate:["1"],coordinates:[`
            121.4869187,25.0614294,0
            121.4918701,25.0614002,0
            121.4924173,25.0612836,0
          `]}]}]},{name:["禁停重機"],Placemark:[{name:["(禁止)嘟嘟房(西門漢口站)"],description:["2024年9月起禁止大型重機停放"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5083579,25.0452686,0
          `]}]},{name:["(禁止)亞東醫院地下停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.4530377,24.9982006,0
          `]}]},{name:["(禁止)淡水區中正市場機車停車場"],description:["1/10日到訪 已明文禁止重機進入"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.4397615,25.1701065,0
          `]}]},{name:["(禁止)中山市場立體機車停車場"],description:["1/10到訪 已明文禁止重機進入"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.4427199,25.1704159,0
          `]}]},{name:["(禁止)Focus 時尚流行館汽車停車場"],description:["機械車位因安全理由禁止停放，請至123巷機車停車場<br>感謝小鍾@FB"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            120.2102076,22.9955314,0
          `]}]},{name:["(2023起禁止停機車場)明志書院立體停車場（機車)"],description:["2023年7月起更新禁停 <br>感謝豆漿"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            120.9659344,24.8013951,0
          `]}]},{name:["(禁止)Times 台北地下街停車場 西出入口"],description:["禁停重機，不開閘門，要自行迴轉"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5110668,25.0499729,0
          `]}]},{name:["⇦ (禁止)Times 台北地下街停車場 東出入口"],description:["禁停重機，不開閘門，要自行迴轉"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5181686,25.0486126,0
          `]}]},{name:["(禁止)宏泰交易(二號)廣場"],description:["請至對面一號廣場停放"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5694885,25.0365248,0
          `]}]},{name:["(禁止)濱江果菜市場地下停車場"],description:["地下停車場本身禁停重機，但管理員說可停放至一樓機車區（據說每個管理員說詞不同）"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5382433,25.0671325,0
          `]}]},{name:["(禁止)聯邦佳佳大樓停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.5340869,25.0587823,0
          `]}]},{name:["(禁止)星聚點KTV 台北旗艦館"],description:["有消費也不行"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5121135,25.0562854,0
          `]}]},{name:["(禁止)臺北市內湖運動中心 Taipei Neihu Sports Center"],description:["臺北市內湖運動中心 停車場  禁止停放"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5747649,25.0781567,0
          `]}]},{name:["(禁止)台南市永康區中華立體停車場(俥亭)"],description:["禁止停放 門口立牌表明不給重機停<br>感謝小鍾@FB"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            120.237602,23.000689,0
          `]}]},{name:["(禁止)屏東太平洋百貨"],description:["感謝paul40807@ptt"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            120.4898241,22.6742434,0
          `]}]},{name:["(禁止)農水署臺中管理處尊賢大樓 (水利大樓)"],description:["2023/5/20造訪 出入口管理員表明禁止重機臨停  <br>感謝paul40807@ptt"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            120.6851955,24.1486834,0
          `]}]},{name:["(禁止)自由路立體停車場"],description:["客服說汽車停車場以小客車為主，黃紅牌禁止進入"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            120.6850512,24.1426197,0
          `]}]},{name:["(禁止)嘟嘟房停車場捷運南港展覽館站（機車）"],description:["雙北捷運系統不允許重機停機車格"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.6188629,25.0553269,0
          `]}]},{name:["(禁止)東海停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            120.5911564,24.181266,0
          `]}]},{name:["(禁止)天京停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.4482648,24.9831732,0
          `]}]},{name:["(禁止)桃園長庚轉運站停車場-機車"],description:["機車區可進但會被貼警告單"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.367672,25.0624797,0
          `]}]},{name:["(禁止)榕樹下停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.549192,25.0351333,0
          `]}]},{name:["(禁止)俥亭高鐵路停車場 uTagGo"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            120.3102005,22.687373,0
          `]}]},{name:["(禁止)金山停車場(永康街)"],description:["感謝Yukikaze68@ptt<br>汽車費率 80h; 150/d (平日) 240/d (假日) 按鈕取票"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5275496,25.0327871,0
          `]}]},{name:["(禁止)士林運動中心"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.5215623,25.0894226,0
          `]}]},{name:["(禁止)板橋怡寶大樓停車場 0700-2400營業"],description:["汽車費率 50h 按鈕取票 <br>只開放早上07:00至凌晨00:00  "],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.4603895,25.0080942,0
          `]}]},{name:["(禁止) 富邦金融中心停車場"],description:["重機獨立費率 80/h 後牌辨析<br>24年6月起禁止停放"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5518362,25.0383839,0
          `]}]},{name:["(禁止)台北松山意舍酒店"],description:["先打電話詢問，結果到現場不給停"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5803545,25.0493928,0
          `]}]},{name:["(禁止)光華數位新天地停車場"],description:["半平面半機械"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5316393,25.0455304,0
          `]}]},{name:["(禁止)第一果菜批發市場機車停車場"],description:["招牌直接寫禁止 250cc 以上進入"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.4980686,25.0189256,0
          `]}]},{name:["(禁止)機車停車場(露天)"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.5049327,25.0142954,0
          `]}]},{name:["(禁止)瑞豐夜市"],description:["汽機車停車場都不可停有上新聞<br>https://www.youtube.com/watch?v=XLcAvQXrFgE"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            120.2993478,22.6660148,0
          `]}]},{name:["(禁止)環安廣寧停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            120.4410211,23.4760319,0
          `]}]},{name:["168Parking 水源大廈停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.534971,25.0135188,0
          `]}]},{name:["(禁止)USPACE大直典華停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.5550552,25.0837339,0
          `]}]},{name:["(禁止)臺北榮民總醫院第三門診停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.5189375,25.1192065,0
          `]}]},{name:["(禁止)台北榮總停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.520312,25.1192228,0
          `]}]},{name:["(禁止)汐止區行政中心停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.6588402,25.0635948,0
          `]}]},{name:["(禁止)老虎城機車停車場"],description:["感謝 swordart1597 分享<br>機車格	機車費率<br>--以上只是歷史現在禁止停重機--"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            120.6381239,24.1642474,0
          `]}]},{name:["(禁止)宏仁醫院"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.4837593,25.0539754,0
          `]}]},{name:["(禁止)嘟嘟房蘆洲站捷運轉乘機車停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.4663572,25.0910041,0
          `]}]},{name:["台大立體機車停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.542658,25.0161284,0
          `]}]},{name:["台大癌醫機車停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.5432959,25.0151056,0
          `]}]},{name:["國雲停車-世貿D1停車場"],description:["https://maps.app.goo.gl/DeTdzSdLSjzkVABWA"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.561876,25.0321021,0
          `]}]},{name:["台北市政府辦公停車場"],description:["職員專用"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5639994,25.0359352,0
          `]}]},{name:["Times 台北地下街停車場 中央入口"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.515391,25.049235,0
          `]}]},{name:["福金寶機車停車場"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.5155814,25.0491936,0
          `]}]},{name:["富邦國際會議中心"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.548439,25.0454864,0
          `]}]},{name:["嘟嘟房(板橋三民站)"],styleUrl:["#icon-1898-E65100-labelson-nodesc"],Point:[{coordinates:[`
            121.4789493,25.0195128,0
          `]}]},{name:["辰淵雙十停車場"],description:["2023/5/20 造訪一中街時向管理員表明欲停車被拒絕停放<br>感謝 paul40807@ptt"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            120.6859311,24.147339,0
          `]}]},{name:["(禁止)羅斯福路二段4巷機車停車場"],description:["內有公告為道路延伸<br>受道交條例"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5204966,25.0293374,0
          `]}]},{name:["24H 臨海新路棧西停車場（大客車＆小客車）"],description:["停進去柵欄會開<br>但會被困在裡面無法繳費出來<br>感謝網友carte._thyia 慘痛分享"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            120.2759355,22.6206903,0
          `]}]},{name:["冷水坑2號機車停車場"],description:["悠遊卡進出，門口有掛重機請停汽車格"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.563022,25.1677761,0
          `]}]},{name:["辛亥路一段100號機車停車場"],description:["紅牌原本停放於此停車場，已於115/8/22被開違規停車單"],styleUrl:["#icon-1898-E65100-labelson"],Point:[{coordinates:[`
            121.5317156,25.02157,0
          `]}]}]},{name:["未確定"],Placemark:[{name:["(20/h)社子國小地下停車場"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.5021851,25.0913749,0
          `]}]},{name:["(平40/h | 假50/h)臺北市立百齡高級中學"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.5239269,25.0866361,0
          `]}]},{name:["(30/h)台北市萬華區公所"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.4997957,25.034839,0
          `]}]},{name:["(假日限定120/d)捷運木柵機廠停車場"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.5858637,25.0014853,0
          `]}]},{name:["(平20/h | 假40/h)台北市立大學天母校區停車場"],description:["平日20/H, 假日40/H"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.53605,25.1162833,0
          `]}]},{name:["(20/h)景華公園地下停車場"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.543781,24.995162,0
          `]}]},{name:["(30/h)國家生技園區地下停車場"],description:["重機月租1000"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.611421,25.047491,0
          `]}]},{name:["(20/h)永建國小地下停車場"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.5556248,24.9887608,0
          `]}]},{name:["(20/h)臺北花木批發市場地下停車場"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.5404497,25.0045263,0
          `]}]},{name:["(30/h)二重公園停車場"],description:["重機月租1500"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.474965,25.0663291,0
          `]}]},{name:["(20/h)興隆公園地下停車場"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.551241,25.000642,0
          `]}]},{name:["(30/h)台北市文山運動中心停車場"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.5590277,24.9969837,0
          `]}]},{name:["(20/h)臺北市文山區辛亥國民小學"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.5592414,25.0062244,0
          `]}]},{name:["(20/h)海光公園地下停車場"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.508492,25.0809343,0
          `]}]},{name:["(20/h)社正路平面停車場"],description:["不確定車牌辨識方式"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.5090091,25.0880852,0
          `]}]},{name:["(40/h)五分埔公園地下停車場"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.5805361,25.0468265,0
          `]}]},{name:["(平30/h | 假60/h)松山高中地下停車場"],description:["平日30/H, 假日60/H"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.5637821,25.044065,0
          `]}]},{name:["(30/h)景勤二號公園地下停車場"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.5585051,25.0260548,0
          `]}]},{name:["(20/h | 50/12h)中南社會住宅"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.6191229,25.0429206,0
          `]}]},{name:["(40/h)東湖國小地下停車場"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            121.6160861,25.068595,0
          `]}]},{name:["(20/h)臺北市文山區萬興國民小學"],description:["20/H, 2個專用格"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.576313,24.9899037,0
          `]}]},{name:["正好停-新和國小地下停車場"],description:["有重機專用停車格，但不確定汽車收費或機車收費"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.5027591,25.0266657,0
          `]}]},{name:["(?)六福村"],description:["走機車道進場，汽車道無後牌辨識<br>應該是停機車格+機車費率"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.18476,24.82183,0
          `]}]},{name:["(?)鵝鑾鼻燈塔停車場"],styleUrl:["#icon-1538-757575-nodesc"],Point:[{coordinates:[`
            120.8515546,21.9051993,0
          `]}]},{name:["(?)嘟嘟房世貿站"],description:["停車場資訊<br><br>台北國際會議中心設有2層地下停車場，共計386個小型車位(含重型機車)，開放時間為每日上午7點至晚間11點，全場採用自動化取票收費管理系統。<br><br>不確定停汽車還機車，請各為車友協助回報"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.560726,25.0341587,0
          `]}]},{name:["(?)渡船頭平面停車場(八里區公有停車場)"],description:["有六格重機專用格<br>但不知道從哪進怎麼收費"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.435243,25.1568739,0
          `]}]},{name:["YouBike微笑單車 2.0: 臨沂街停車場"],description:["機車專用停車場<br>不知道能不能停"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.53006,25.0426,0
          `]}]},{name:["(20/d)遼寧街199巷17號公有機車停車場"],description:["機車專用停車場<br>不知道能不能停<br>沒看到禁止重機<br>理論上能停"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.5427937,25.0539739,0
          `]}]},{name:["(20/d)遼寧街185巷7弄臨時機車停車場"],description:["機車專用停車場<br>不知道能不能停<br>沒看到禁止重機<br>理論上能停"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.5427812,25.0537072,0
          `]}]},{name:["小油坑橋停車場"],description:["應該可以免費停機車區，未發現禁止重機"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.5446375,25.1793186,0
          `]}]},{name:["(150/h)No. 129, Xining South Road Garage"],description:["疑似停機車格會收汽車費率<br>請各位車友有機會的話再回報<br>https://maps.app.goo.gl/ZbXjw7hau4zLyLUq8"],styleUrl:["#icon-1538-757575"],Point:[{coordinates:[`
            121.5065505,25.0443265,0
          `]}]}]}]}]}};const qc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAxlBMVEUAAAAAAAAAAAAAAAAAAADOzs7///9ycnL///9aWlqSkpL39/f///////8AAAD///////////9+fn739/f////7+/vv7+/7+/sAAADOzs7////r6+sZGRn////r6+v////r6+v///////////////+urq7KysqGhob////mUQD78+v77+brgknztpLrdjXmWg3raiXzrorrcjH75trmXhXvnm73xq772sr3wqbzupr77+vvnnLmVgXzonbmVgnzpn7mWgnvilZ0gU91AAAAKHRSTlMATj0sDLL3cpJmgeslTBPKZuJ287333vMhrt7OVI7aztY8MAg0loJIEcbVoAAAAtRJREFUeNrt/cei8iwQhgGEaIrdbtfTz5vY7XbP/d/UB1EDMRj5d//m3THhCcMwM7DU/idK5+1ys2SapWbZzqdVqY9OAQEVOh8KWCZHp+42y8FkcTgsJoPlZkcNucwL7Iti7nDkBDQauhT9isA+baC/vzghXfZ9wP58xqV7wHTsSDWeAr0nYXqvYT5znmo2R+1dxmVMrMZOhMYrmJIYvZvYOi+0hRlaM117zTGy9rDPzx5WjoJW6AVja2M+VgHHc9gi9wXMHCXNADETcpg6ipoix7kM+tzR2Rohrbk/4z4ywoJ7/ksJR0n+fc+X/IDL85NuYnZ60EwMwcXFvco6GIp7mDshzcUYDNG5gQUIddTHOQye0eeDEQpXLo0dtw6kB0N9HfDRDtf0yWPDjVuZp8xXISE3yHugjaVvO7nyE53CPfmD5S17yoIbf8BIBo6AP38wQNkDm5j4thXtHVJBKIIJmh5YwsK3IUL+pAVKHggcgqD7iLhB8AB4oBkE3YEzCaTdeuIM3CBoylxlUR2JIIvWVOaqGBz6/eiw7QtiX48ieA9OSzgO+p21gqEIDr3CF8ABWh5oCAnAJva3D5W13vYhgksYHvgjpBwi5E/a4McDf4UkVwJ3+PXAeoqnmQo4QqrugfEGL2QVcIhG/FqQFm8dbIJQs3eJwaGtw7pyWuzNb1YK4B5vsRsYT/rtkZ3XOgyy87kVOG2PyZunmqZ37+U7OZ6PizC4oOZbek3R1e+clrX+yxVgZX1Q0w31S8fgC9Il21XVa67aFhakgU2oXqyJmBaQXqyoXOWVoh7ktDhJVl4/HipJEn8AtSwpvn6uFAndYJhMVKMfSNWEjGNk24h6khltOUf3qROr++wR2LWIHteeKUZI8g2SZ+dbkpCYFqGsTojVSAULMdWwCNGzWrQYShLfRivFntaplvGdIAoYUzzGWEF6LK4pKl6P6R6t67G6nPoHcldcQOHxu78AAAAASUVORK5CYII=",$c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAzFBMVEUAAAAAAAAAAAAAAAD///8AAADQ0ND///9xcXHr6+tdXV2VlZX///////////////////99fX3////////v7+8AAAD////39/f///////8AAAD39/f////MzMzz8/P7+/v///////////+wsLCJiYnMzMz////7+/t1dXXT09Pz8/N9fX15eXnj4+OJiYmwsLC0tLShoaGRkZHIyMjX19fv7+/ExMTAwMDr6+udnZ2NjY3Q0NCVlZXb29ukpKSBgYH39/eoqKjMzMyZmZnoR8KzAAAAJnRSTlMATj0MkSyz93HaaIG8yCZMaHXjMN4T6+vQ7yHz37Dn9zwINJVIgVFmtqYAAANvSURBVHja7f3FgqswFIYBEKjX67XxOTgO9dq8/zvdkADFKsu7+Vdpmo8cTbJk/hO1OoXGYsTzo0Wj0Gm9SvULPUioV+i/gLWbeKm00zfaSVFO2kbfSXii2X6CfWFM8iwhIcvDbPPrAfZZAHANRchIMVyAwuc9rjUBfiULuZJXPEzuhOljCmtLuCtrDdOPPK5dBlEWHkgWoZwTo48y2MIT2VDO7NmaPud8cpry83MCovCCRJgkY1uAddo/+WLsM6C8hkKc+wJ+m1qy9QtmlyEtHuKV0IRVeoVKyvSYIVfQvHFtcNOGagQ7njKg7EI7tqEh5IH7rJOCYNy27IOUrc+1T6o5oCJBPwqpl/n7JBEwp+AFLwpsD7IluqM9LCpCxk0LepRrgZThzLD7ReWSCbgEtHw62XTJxND1EXeheMmkagedwEU9DV7JbivShfgb103iXz1wsgGbFLehZvrFtD2QoZf8u0HABWhJDueYWEp/0RKKL9FgQcARxAKn7RyHLoW1jue14Ee8FE4wIiAPsWxdJfXghiHlDzqpA/dwiCdUAZ6A5ThITNJsiMlOeYLBMgHncVO3tqqKprA5h9h5I5iiqtrbuKlzAr7FPDfoakeOKsCUHTq49YEGb+l06Jg5mh6PzxGRLvcHvGceMR1lO0xHKZqSz7RK/gD+9hT888f+3ArOcvT5EgF/o5IzwaVxuuIjj3jJ44PtSqYUF8xg2Q5+CfgTFbkRfuICh7AhD3AJl4deSvBDwNk4bCsdnNsAZ5MXT4ITOhINLBjPCMgtw1LcA08CrKj46/u9JRMraDdrfFg9Hiw52pCV6OhQQcWkYgcfCABbIaUXnCP46KhQjilWQ/O3Z+AdUYJ4o+EUSaLDwzkoAQOqxQDk6tHxuCU1LSWO0yM9fgIOt049sJRh2Oqty/e6YaaOKMU09Kg7VlBlQ44ZVoB/cKXGha+AyjACGbaUvXRyhS+d0m1DvCUavHrNDVBsQxzY2qsXa63IJMR231+5yt+7bJJjOFR/f/54eK8jLgViN7vPnyvdpIMhWRs8fiANanmcT6LSoydZCeVz2E8WVar3HoHVCmI55p6KCNWrkPPsrNYRKjIPNGQRqizHkNB4WUGIHTKP5aOo9l1qvM3L5flbo/RdQy9gvjhscFJFjnlR3KzI+jsjli3O8ql/s0lXshnTfqcAAAAASUVORK5CYII=",Zc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAz1BMVEUAAAAAAAAAAAAAAAAAAADR0dHs7Oz///90dHT///+VlZVcXFz///8AAAD////////////////39/d8fHzw8PD////////7+/sAAADNzc37+/vz8/Po6OgaGhr////39/f///////////////////+xsbHNzc2IiIj////3+/90veQCiNGt2fA5odnZ7PdRreEmmdmd0ezs9/sxndkOjdXo8/u13fOVzezN6Pep1fBJqd0WkdW94fPk8/uNyegGjdFZseEOjdFgteQeldWZzexIEjjoAAAAKHRSTlMATT0MKrXY93CRgGgmE+TFTGjzd9290PchsPPozVTJ7I05Lgg0lYBI+HfTgAAAA3FJREFUeNrt/UdjqzAQhAEgcLednp6eNnSqu3v+/296QrIwIFyO7zKXKEYfrHZHKx2V/0Sd8+b140W9fvF43TzvHEt9vJ0gp5O3jyOws1M6NR4aI288n4+9kTGM6Q+nZwewrxcg6NtmTnY/AF6+9mCfTWBqLE1JS2MKND93cZ0b6LMSjKEzHTc70vT+ACc0dyp08PBexp3VYUXmHkUW6iU5eq/jzzygP9Slb3Ye4JsH5eOhsM7PG1jmEbJwk89tE05xfeOVMZLAyEEzy31BL+YzTAwzlMhQR9YJL5gVZwyYTRcSOcPLljvDtFh3j2GLtQQup9jW5BSGWQbatinLwKngPhDIRnMSclACLgOIXfaGvvR4HDNwXkL28bYBTyCHNOR72Jqb4+IjGyec6yCWOFfsfmu+kBIeg9vnXC7XeJpAzoL+sVZSqYY4Z2BTzqnPvjYzI7oL6WL9vIWMjXuuUbTWiIeZmMmbsGE///h6kxsvz0UsUDj8P1YXZJ3gbbJzgUzivGGvx90GZ0V/X/Mv5vI+xgUDdWSq5QeTiSNSionBxs5kknXIHDoD61mQheT5yMgvrISCdTnU0B84lmuOdIHprulazsAP5VAfM8kx+OxelDrAjXp8sK2Zh0cGPm3LsaLMwu3rtI9YfHoy0PvugtIrMWuEJwZW05dFAXcJrePI5uAoGSe/zRBEaVhVBv6klnMx5Xnyaatkq9RpS+Tdbz6Fu5k2xA8Df1OTG+IVK0zEhpyIEIdpYDF+GXj3KsproLcdJPax1mZPzE8HNl7vGKjdCyva0HmCB3SSbdtj9g7eBjxdvL6Pe41vyEbaOgYYUAcs/6Cn3lzr+KNP1wPRR2jraHBOqdREFGEAvWfFmdSzEsVWT0cQimXUKhtQa6XtMWQGj3PtdMHbz4aj7bG1iVRR1Np2l9uG4RZ63tI1jHR3zFBTBad0G/IRsEP0CGh0U1BRq/KhUyp66FS3H6SffL469pi7es58kCa2fezB2q4oOamXt8cc5beXap5TNNK6PXx5uG0RrQAqXXJ5+LpySegCZbJ9tf+CdNUu4xLyubrvSlZ9LufoOlXSqO26BNYaRNWUXaoQ0qqh5NpZaxFSUfaoqxLSuH9FTq/3DULUrrJfCUra39UnfrV+qn63yRFYIo0GnFdFU46UdldROaNW7sqpf77Zbnu3WlsJAAAAAElFTkSuQmCC",ed="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAzFBMVEUAAAAAAAAAAAAAAAD///8AAADR0dHs7Oz///90dHSVlZVcXFz///////8AAAD////////////39/d8fHzw8PD///////////8AAADNzc37+/v7+/v39/fz8/Po6OgaGhr///////////+xsbHNzc2IiIj///8CiNH3+/+t2fDs9/vZ7PeVzewWkdW94fN0veTN6Pc5odkxndl4wegGiNGZ0exNrd0OjdEmmdnk8/uNyeiAxejo8/sGjdFsueRFqd1Jqd0OjdVcteFVseHxv90KAAAAJnRSTlMATT0MkSq12PdwgGgmTBPF5Gjzd929LtAhsPP37OjNVDkINJWASEQn5CQAAANFSURBVHja7f3HYqswEEUBIHB3S09Pz6jQKe5uyf//05MwHbDJ7m1uGlZ0GM3VqCyl/0SD88b180Wnc/F83Tgf1KVuGmeQ0VnjpgY2HPOuK2ruZvp6rc92Jl3xhvHwBPbBMabZOCNbYxz9OIK9NwDm5hQXNDXnAI33Km5wC2RRggXogsBthU1vD6A6uFKOCg9vZdywA3SPj2hPoVPi0VsHNA8fladBpxBz8AA+PikfHnJ5vt8C9U6DHoXbrLcNUPe4hvYqNNLcBxAH15JDIF0JY1jgmlrAOOGGMJ/WBadzGKYCmhXdtOJIzCTkDbCqgC7R801TBjexpVoFh3VSDKnFxp6BXY75hsFYYZpsODtwA1iVc1ijlJakv4JD+ZwDxdWaq4WKonAepljlKdZUlcBvvtUMk7yGXdSkbyL9roNwYq+y8uAOrkNvZlHTNtnaDP5xJh5WBetmoTsXkMzVmku3lyISf5srwImat0CHiwAksE4ava27/N3zxU74NKicm3sb2CzdbcqiNZAA7KRAxwJCgP3gBc97IgK6+AdEm+WkwE5+qA5T+asdI3ByKgIS/QfmRPe2KnPyQ31OzLHC5UxFifoioK8T/r0USzh2dwbPAfgST4fNn3SbawKLiRGYa4sy91dTMQmRuzt4CcBWXAAb4vHZTcvA1BAhfrhtZBN2M6EVgF9xybkMZ0E2w4b450LkzNywG4WvAPyOi/yX27SjQqCK3xpP3ldjS6LaW8F3AN49RaPXiRa9YYvjhCaHBy1a0zY83QWgch8vZBeCPLbMwLEMFrx2A9FINbhXDguym2wdPljLpQFWavXqFlB3acUbPd86ugdOaraThTUxGLHMVA2Kw9EizJhEH01oN0NQ6f1te+yFI5Ukuf2XDbktR5w06v7lCOiOYlCSW/UPnVYSkId8vap7zF29pgJyY/t1D9Z+U8pIvnysc5Q/XspZTlJQ7/H05eGxh5QcKI3Q5enryiXiCRbJ/tXxC9JVv4wT5Gvr2JWs9VrO8Txl1G1XXQLbXSQrUpWaCPXaZdfOdg+hpnREIxmh7v1TZt+Bp/suQvJIOi6Bov5n6+VwtX5pffZRDUxI4QPOqqlINaXcNeUDIzfvyql/EElUzqPEPTAAAAAASUVORK5CYII=",nd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAA21BMVEUAAAAAAAAAAAD///8AAAD///8AAADOzs5ycnLr6+v///9aWlqSkpL39/f///////8AAAD///////9+fn7////////v7+////8AAADOzs77+/v7+/vr6+v39/cZGRn///////////////////+urq7KysqGhob////mUQD/+/fztpL74tL/9/P3xq7mWg330r7vnnL75tr3wqbrcjHzpn7mVgXmXhX/8+/rdjXzonrvilbvmmrrYhnrgkn77+b77+vvhk3raiXzuprzrorrfkH78+vmWgn72sr3xqo77bE6AAAAJ3RSTlMATT33DMossnLakmaB6yVME+tmdt693uIhrvfzzvNUjjwwCDSWgkgqsJJiAAADVklEQVR42u39x4KzOgyFAVDS06dPn35Mp5OeMu1//ye6hoQaSJjd3ZxNwPGHLFmSvWT+J+qdtM7Phjw/PDtvnfTKUs+Pl0jp8vG5BNav0qlLU5+vXcdx13PdXNKBav8I9kqxb3FEUhqJ3xR9PYC9tICF/kP29KMvgNZLEderQvhUSa7UTwHVgjA93cKwSKEsA7dPeVyfh6KSA1IV8DkxeuKxIUe0Ab9ns3d7nPPJ24yfL1UopIQUVNOxbcFQy4CqgVaSe4VgkVKyBCQzoYpPUlKfqMZcHwu1LKgu0E8Y1AumbcS9IT02+YzvnwJwLMyyQz/fCKvsEWIBR1x533kRjzvwEqN8zNQ0z9vzfoTLLdfDMp8joqIoOe4vsU2fE5ikWAvDyQ6ZOAnAVmFMiWgYAibZUX2XPeeYh0OzaahJYGfh96rfLDjHeQCeYR0OfcWtTaOva/9hia8MuMZZAA7hRmMOlWvZviW6gbYProxs3bgYBqCApPtfY3uiqiZkug0S5QwyxdQeJ606EAKQT4CWBEGGNyEi9XvlGxyTCSALkKwEyAfgfbxUS5bopy0liKRjUE5wJ1gILvmSZCte6n02OL/SNk9Meeb3CSpzJpszwaZVIUXRDYNzF23HiD7NRlQriBMtCO5oTJ3dLB1/E8LEnOMuAOtRAkwFh+5uUhpRNN/ElK5cmO6m6agH4HuUcmOPpEFvTbR/9I9P32dvvJtm4j0AP6Ikn9DNm/+jUiD5PyJ1fmPs/pxFubfERwBedcPVq7IYfiHKwjlW2wdR3hXYCN2rAKxcR4U8RuDHl5xIFs0LPjtFuFIR15VtQTbi1rGBZNsafhPV6/5CsW0pavS0dTS2HFNrxoW10jxB0lMl6OiS7Gmr8FVHs7YDK52/tcfObqUMwzX/0pCbXMgxg8ZfjoDGIAIZrl7+0KnHBqnJh4uyx9zFQ8IgDWy77MHarjEpcac3ZY7ym1MuzTEVtnNz/PJw02ErGZAZsKfHryunLHVwn2xfHL4gXbTzOJ98qB+6ktUf8jnqJ8c2mkWXwGaD5SpMkWos22nmXTubHZatMQc04Fi2cd1N9R10rxssyw2Yw/JRtv1Wv+ve8/x9967+1mZLYL4qdMFp1SpMSVWuatyW4WpX+dR/j75gOB3q6osAAAAASUVORK5CYII=",td="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAsVBMVEUAAAAAAAAAAAAAAAD///8AAADPz8////90dHTr6+tdXV2UlJT////////////////////39/d8fHz////////v7+8AAAD////n5+f///8AAADLy8v7+/v////39/fz8/P///////////+vr6/Ly8uIiIj///+Yw2l8s0Lz9+/r8+Ofx3jX58PH36/b68v3+/O715uQv13T47+z05S305TD26eEt1KEt0rL37OAt0qnz4S2+HsrAAAAJnRSTlMATj0MkCyz93DaaIAmSsfjaPN3MLveE8/P7yGv99/r5zwINJSARmY1CXEAAAKfSURBVHja7f3HguIwEEQBWDY4m0wGJpdsMhn4/w9b2TCgBHhue6mjpKfqbsWj8Z8orBQaw6rjVIeNQiXMS9ULZQgqF+o5sKjEhibrzWS1j+P9arJZJ6yhFL3APhm2mNFYEJ0tGPr5BPsoMLPtKVZ02jLbwscjLmwDOw2WoTug/aBM712MafxQdIzuu46LHEwP8RMdpnA0NXp3cIxf6AhH8Qy7r7mU7Ep5frQxjXNoirZY2wLGhzzgYYwCz30CNM4lCvA7oYRdnFM7lO5chES37pOJpvGUIOIMt7rJ53Nd6/ZuWdcbUn3izLJ+K+lMN/Uc0FrOboUta2em6RnWd5QvXIhEN/E0BbW7IsFl+1Sw1s6LR5ZrVK4pbjS90wuos9xck2xAWC92zczm4/tVNZ7P2AXEj5igkYFDcM2rBFol/BgMM7CKPTcdXei4BZ/rHtUMBPg4tORCrBGQgY4IxlSJNpFqC0cTqoaUud9Q37ASO6QKJUo33jKwA+X4nHnwLPdO0MlAW90ASx5cyr0b2Bn4rW65Iw8qt98a3xn4o27yOQ8qZyvBTwb2RspWFpZyIXVSjHoZaPXlg7zKgCmll50uVXWGvnU5kK58dUzSALMoaBq0WHR2dbgXzih60mW1xPg2eDKWyrqFV7yCViBZLoWlOy8lw+AaqWGY3l8uZM/85YyW+5cnwG3dQMO08z869t2QWZJm3meuSThDVlg/78PqFw1BZm2Q5ykf1EyRMywSDF5/HgYBsSSQpVl7/V2piQn+kn7z+Qep6eu4lCT2sy+ZTfQcy9MkrvfoE+i5xLSMRyoSEjBU/XZ6ASFF44laJiFufwRBo75LiNkynitFif9ld97Sr/Vbx/7ySQ4slcUCFlW0jJyyekUzdSamWezpqX82JE2QGlywLwAAAABJRU5ErkJggg==",od="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAArlBMVEUAAAAAAAAAAAAAAAD///8AAADPz8/////r6+t0dHRdXV2UlJT///////8AAAD///////////98fHz////39/f////v7+/////n5+f///8AAADLy8v7+/vz8/MXFxf///////////////+vr6/Ly8uIiIj///98s0Kfx3iUw2XT47/z9+/H36+z05Tr8+OAt0rL37O305Tz9+vX58PD26eEt1KQv133+/OEt0q/15/jq8UwAAAAJnRSTlMATj0MkCyz99pwaIAmShPH42h3MPO73s/P7yGv9+dS3zwINJSARqTWptAAAAKLSURBVHja7f3Hgqo8GAZgEDpgt9umv1E6du//xv6AHiUaIst/867mnMkzXzpZKv+TNLr68GNgWYOPod5t1FV9vQMuHb1fgzXbrGngR+vjgdLDcR35AfuPdvMN+2bsFG4ol014YvRbwr50YJsl9CVJtgX0ryrXGAN7ASvoHhhXTNPnFPGGVmYTY/opck0LuzOV5LyDJZijTwspfZMU1kvNxvS9y+X0aZxfY+xojeww5udWR3yuA88x9LL7Bh7zeSnttlOcrjm5Aco7oY09FcI8/Brt0X64JrZJNQSiEky2aJYKZlQGUe5u9ijZR5DI4elQKhmgf5/SkMoht8bhfWI72AhgtGFZh7eSpS5t0Lm6BgIqgLc/tn4dZYDr9unCl0AaX+uXGvjo3oYYyaBf/OtSahDdBjnEWgLZuj1XXGNYwA8cq2GS8vXzHPFRwAEOIuiHLOm1HrblBgcMCghQEeSScS2AAlrvYcy3gCXraikBPwn/uroUT06pHv97NjnLAk7Ey3Ev93JDrzEpoCneADufJb2s6UsimAX8lW+51/j4LeCfdJMLEuCvgDPxsaqE7FjNCqjNhQe5EoaYa9cD6QivjirIrg7n6hTDFl1WVTCDbdyg5omuxwrIjpl366miqLbgQq6Ae9jqP6e0HMEnQAzZJ8Bp3aGimvU/OuajICu5GtX9zI1WpYJsYt26H1bXULiovUWdT/mip/JO0Yi3eP94WHhEe4JKi/TeP1d6hA3wVboj+QNp5IpcLlem7ElmrsSOjVMljl31CLQdompKVQxCPBuCZ6ftEWIokrRUQpz580N37hCithR5ckrcH3OyzJ/Wy4n545IaLI/GOszH0JSa0WaGmlcmqmrMxOo/ADVI102nV0sAAAAASUVORK5CYII=",id="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAtFBMVEUAAAAAAAAAAAAAAAD///8AAADQ0ND///9xcXHr6+tdXV2VlZX///////////////////8AAAD39/f///99fX3////////v7+////////8AAADMzMzz8/P7+/v///8ZGRn///////////+wsLCJiYnMzMz///91dXXz8/N5eXn7+/uRkZHr6+t9fX3IyMjQ0NDExMTAwMCwsLDv7+/T09OJiYm0tLSdnZ2BgYGVlZWoqKi4uLjDhMkkAAAAJnRSTlMATj0MkSyz93HaaIHrvcgmTBPraHXfMN7Q7yGw5/fjVDwINJVIgU2VXXAAAAKXSURBVHja7f3Hoqs6DEUBYEjopKcnOV10avr9//96ppzEPhiH4ZvsGdgLFQtZQ+F/ouG0Z81NzzPnVm867EotegegdOgtOmCjAd7qxNnldHXd6+mSxQ5+MRi9wD4x5iS+TclPMDv45GAfPYD87NoNueccoPfRxg1X4KWhzVSYerBqSdP7GgLfbpUfwPqdxY0UOIY2R+ERFEaO3hWI7BeKQGnYHK5fcwW5/hPnxwqOdgcdYUXntgdB2AUMA+iR3Cd4p8fiP6LanCC6UaTvAVkJA0htJliIPqMUBk9uBHnYDoJ3J53NYUQYPNscEOBCLJ+fJhfguHzQeWbAdh1YPFKa2HyQOuPkkdgD+AzwfiuUeFWYhEs+HCpuCI7NAOuP3ZtROlCVzxRiDmhPyqeM2BDDtA4x44Fx+USmPauDtCg//oJuXkVMbLiAVYJzOLWDbkTbL3SCeQmacGWBUYoVBdVDTm64glmCHrgskBKVBRe8ElReg4FLgwrPVUIOnYRfV3fs5BD26HWcnB3vOB7mGh369zhkdgEcY6zo363Z2DOQS/CHX3JNxfBTgt/cImfIge8S3EyYv1Ur6MNkU4LSlvkjt4IJbKXqh1SZraMNxK1DrTihr7GaVRt4Bq1fg5LBao8tIG6PRu2pIIgaoyG3gClo4i8njFXw/G4gvgLU8QMURLn7pSM/DWKTb8uu19zyjTCIE6t3vVj1vkBJnO27XOX7mUhzgoSM/evhYW8g6Q8ojNHs9bgyQzjAJqkv+QPSUmdxBfkm80Yy+Y3N4ThFpGptQ6CmIlES2tRHyNCAMXZqBkJ9gaOxiJC6ndDtarJVERLHAl8FivQv2dqZimLuLPlLRx2wQhJ2mFZfEjpK2vTFwjISxf6GTf0HaG9KcG8+c5YAAAAASUVORK5CYII=",sd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAtFBMVEUAAAAAAAAAAAAAAAAAAAD////R0dH7+/v///90dHTs7OxcXFyVlZX///////8AAAD////39/f///98fHz////7+/v////////k5OQAAADNzc3z8/MaGhr///////////////+xsbHNzc2IiIj///8CiNGp1fBJqd2VzezZ7Pfs9/sOjdFwveSNyeg5odkGjdHo8/vk8/sWkdWx2fCZ0ex0veQmmdkOjdUxndlgteSAxejJ5PckqldsAAAAJHRSTlMATj0sDJG18Pdw2WiAJkwT0Oxod733MMXRIbDoVOQ8CDSVgEj2jxycAAACkElEQVR42u39x3arMBQFUCA6xd3dduoBd3en/v9/PVmQWAqSYPgmZ4bNXkJXdWj8J6m1ne7E831v0nXataqq78wgZOb0K7D6gL56SDfzt9N+f3qbb9ID/WFQL2FPlK0Wu0TIbrGi9EnDHh3geF0nhayvR8B5VLlaE9hKGKNboKko04OH5UeizMcS3oPM1X2c3xNN3s/wJTV68LFISrKAX2iz5uGSlOYC708/H5s4JxVyRlOsrYPlexX4voTDuyfgXs8vbratlou5ID8AfiYMsE2k8JZvYSJtMbi7Oo5rNQQ+Obg+os41eE10EPznXu9N9rFa6+HqxDW5Qv+3pMLQS6Awxovfws6wk8DPHc18kTfJfdIOs8zVcEgkMB+fz2IvD8imTxupBibf7GnDvZCinXdxo4Mpe+LLvsk72cVcA+m4sR5zL8zRzWvzpobrS/bEl+8tr46HkwymW5rLMns48i+c4DEI7GVQiFCFPcCgXw6XexH6uk/lchCL8POpE3lxuPbE/2lxJgwO5cPxk1Vhh55jyKArnwDnlObyNd8nf7OBy+CLfsoVk+KFwVftJJfkgFcGRy3pslLCHVojBu2xdCEr4QJjO1uQgXTrUEG6dQSZM6xQtlmp4BWhlUM7lm2PCkiXWZx/qWGYoWRDVsAtQvPHGY1AcgTIIT0CgsYvNEy3+qHj3hukTU6rH3NTrkFa2KjqwRpZhhCz06tylPc6pugMm8S98stDLyb2H2g0SKf8utIhtINFGZVdkCKZu8mpq7uSuVO5o/00SRCqLoFhQEzbUMUiJKa0eO0MY0IsQ5OGSUgwbonbVWscEGI2DH1ulETP7jC7Wg/d54hUYLfY1s1yMS3bqBh7ZJlMm6Y1kqt/rVM7Fg2yhi4AAAAASUVORK5CYII=",rd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAt1BMVEUAAAAAAAAAAAAAAAD///8AAADQ0NB0dHT////r6+v///9cXFyUlJT///////////////98fHz39/cAAADv7+////////////////8AAADMzMz7+/vz8/Pn5+f///////////////+wsLDMzMyIiIj///+cJ7CgLLDz6/e4ZMTYqN/v3/PUpN/fvOfbtOP37/vIiNSwVMCgMLTIhNDQnNukOLSoRLygNLSwUMDAeMzMlNioPLjr0O+s0hu9AAAAJXRSTlMATjws9wy0cJTY42iAJkzHaHfzE968jNDvIbD359A8MAg0lIBIh1ji+gAAApdJREFUeNrt/ce6sjoYBWCQ0AG7Xd19AXbb7vv+r+sPEY+JhMjwTNaM8j4hH2lD43+SWtPrBW3Lagc9r1mrqh77AaQE/ccKrN5gr6ab4/zjPUneP+bHTcpuNOp32DNj29U+lrJfbRl91rAnjzW2O8SFHHasWe+pzNUGwEnBOD0Bg5IyPQyx/IpL87XE8EHl6hbWn7Emn2tYiho9WFgksTbJAlahzdoQi/huFhje9PNpgHVyHyZrDOTaelh+xhXyuYQnumfgWs8fYbRtl4u5JL8AcSQ0cIqVMMufNJBOaFxdHemhHALfAjykqAsN7mIdhPi5u2uTj9ge9ND6FZrc4jLL+ljFeij94xX6OQywV8DvPct8lTcpfNIewdnVkMYKmP+f72IvU5yHTxMbDYz/+NVReGGDJoeedLcA1/xKLPsxHz09zDUwSc89Fl6Yo5fX5qMcsqnEI5bvI69OG+8quFmxLJbnC6l872hzCCQqKEWqQgJwaN2Hy0SGlu5ThaS/0guXT52qiyO0Jz9nxZlyOFP/jku2u9s1ZY4Zh456AKyzLH7mxaXoCIfDV/2QK2aDVw7ftINckRRvHI7U06oUsmk14tAeKydyKVxhbJ8npKtcOsogWzrcszNMX7VYlcEdfDOHdqRaHksgWx6j/EsNg/qKBbkEnuDTizM6rmILUEO2Bbid/6BBneqbjnNtkDVJulW3uS4RGmSFDaturKFpSKGtSZWtfNKisjNsEk3uHx4mEbFvIOtm6/5xpSV38CLDrv6A1A1VLpPE0R3JHKJ2rJ+UuH7ZIdB3CbWNspiERIwWj51+RIhpaNKhhLjj24Pu2CWEdgx9MkrCF2c2zY7W05nzEpIKLIttZlYINW2jYuyRSbmm1Byp1T853kKnPhIKRgAAAABJRU5ErkJggg==",ld="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAsVBMVEUAAAAAAAAAAAAAAAAAAAD///9ycnL////r6+v///9aWlqSkpL///////8AAAD///////9+fn7S0tL////////Ozs7v7+8AAAD39/f7+/vOzs7r6+vz8/MZGRn///////////////////+urq7KysqGhob////mUQDznnLmWg3rdjX3xq775tr78+vraiXrgknmXhX3wqbmVgXmWgn77+b77+vzrorzsorztpLzso7zupq+UxdKAAAAJnRSTlMATj0MLPdyktjKaIElTBPkaHa2772u3iHz97LO5lSOPDAINJaCSL807K8AAAJPSURBVHja7f3HerM6EAZgSKKDu7tLej4B7u7J/V/YL5pjTDF6zuZsZmVjvRkxGZUl+Z9ErWX0ZiNNG816RqtWVb29NJGK5stbBVa3xNDTzt2st/v9dr1xdyfxwKo/YR+Cra4+T4V/XQn6UcLeDeDoHngmDu4RMN6LXE2kO3s8N7yzSFpQptculj4vDH+J7mueq2tYeLwkvAW0nBq9avjlT+IXWiZnrfvcBbL78J7vFha8QixgpWtrYOlVgd4Sxr37AG71vLjZ8e4l+eQD951g4Zz88gNkpAv8JJ/PsP5cHUfvz2WkGzxLpHdE/S5hMvQSrQc344DL7est5RtWh/Sge/n46LBCsspecC0clvOnrniJYRN+YYKcKfhoRq6GE+cFMsdxfkLUPi3seIHMdXyHVgiN3PIHw/Od+D3qnh42PF/mO75BL67NmpfJTCOt4+qMsOUlMtu6W4xCCOx5scxp+T0QQk0eav9tqjP54sxCOJX/d0xD2JFvgE4Iv+Rb7iuE3/JN/h3CofyyGoZQ6csu5L4SLUhdduvQI0dUU26zMtUYKo7c9ujEMyWEmTIbsskSRxq6zBGgN26QsEn1Q2fyl1CknA+qHnOD+V1CUVi76sFqqyQVrD2ucpSP2yztiEKd8fPLw9ihygMkDdp+fl1pU/GCWWkPyi9IAzvPBXI+KbuSTeb5Trwno7pZdAk0dcoUUhQqpY6g2Wun6VCqkpJoMEr1/uNFt69TyhqkPAJK7c/ONLpaTzufNq3AglDEhNOhKqRiKEOVBZkpY+owX/0DjHRG7GJmx18AAAAASUVORK5CYII=",ad="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAtFBMVEUAAAAAAAAAAAAAAAAAAADPz8////90dHTr6+v///9dXV2UlJT///////8AAAD///////////98fHz39/f////////v7+/n5+f///8AAADLy8v7+/v////z8/P39/cXFxf///////////////////+vr6/Ly8uIiIj///98s0LD26eQv13z9+vr8+P3+/O305Sbw2yAt0qfx3iUw2WEt1LX58Oz05TL37PT47/H36/n79uEt0oZQnT+AAAAKHRSTlMATj0MLLP3cNqUaIAmShPK42h387uM3s/vIa/33+frUs88MAg0lIBG8QUaiwAAAsVJREFUeNrt/bfC8yoMhgEYd9vp6elfl7tb+v3f1w9OASfE4WxnebcIPZEQkmGU/idqdK3Boq/r/cXA6jZEqc9hByrqDD8FsGYbuwaHXeYXrlv42e4QYEO7+Qb7xlh0TNyKkmOE0e8a7MvCweLUfVIa47DW1yuusQHwOFiJegCbF2X6mECYuy+VhzD54HFNHbZnt0bnLeicGn3osHffaA/6U8zG5D1HyMnDPr82sHUFtIVNtbYWhGcR8ByCxXLfALkrpByA7YQ2eK6gPGhTrgkBPff8BE860XzSAJpMwJj+JYfDJF2PacjPSkC83fRBOVsCHPI2ZUM4snsI3SeFbA2OMLyCHWDmKODVyYOA/kigc+EarDXjHgzONWP/+9I+XThQ456XKcmVacgDdEvQgt3dlkb8E/UgovXbXbtnwKSBM014YAIVp0EJLsC/27b428EVMEPgw6IE+1DcbVCju1MB/RJkTBcwekSiKoi9SlCvglHm+pW2O/luFlVBnZcqqWrCgqRaHi/VJVMcvE763WdBshqzoA/LEhwzlcbrYUrakRFu5DRkwQzGJagxDUAcg/3DZJ325Pqg4A60EvxlWg5qdHc6wG8J/jFNLgQG8FeC0xVtMxEwgdW0BJUZHWQR8Agz5TKQBv10EAdmOmlyFMSfDuPCSap5/1gJgDGY6hVUnHtIcl6cuwAPzW3AcUDnmqkkyeZtfP3Yi4tnsMDma3t5YMo3TmoZ/+UKMFp3UJI18UtHowFxyPVI9JobrZmAuLC26MVqq1JFcm8ucpXPe3KVkxTkzN8/HuYOUh5AqYV6758rPYQ3+Ezao/oH0sjmcYRca3VPMm3N5/A+ZWSYrx6BpoFkRXolFSHHBM6z03QQUqUatWSEjNmqOoirmYGQ3JLqRVBk/2jjJXlaL8faj40EMCIFJ1yVqkiCUqaqTCIjWVanfOofpNhZMgCkABcAAAAASUVORK5CYII=",cd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAtFBMVEUAAAAAAAAAAAAAAAD///8AAADQ0ND///9xcXHr6+tdXV2VlZX///////////////8AAAD///99fX3////////v7+/////39/f///8AAAD39/f////MzMzz8/P7+/v///8ZGRn///////////+wsLCJiYnMzMz///91dXX7+/vv7+/T09N9fX2RkZG0tLTAwMCJiYl5eXnz8/Pr6+uBgYGZmZmwsLDIyMjExMT39/fj4+OdnZ1+OeeWAAAAJ3RSTlMATj0MkSyz93HaaIG8yCZME2h14zDe6+vQIfPfsOf371Q8CDSVSIEvtYLfAAAC1UlEQVR42u39x8KqMBCFARCw2+32vx86xa7v/143oJJBEbO8m7NjMh+ZmUzKUvlP1OoWGvORYYzmjUK3JUsNCn2k1C8MJLB2k7uG1v7ib4Ng61/2VsgNzfYb7Jtj4dHRU3KOnG1+52BfBcB0A/1JgWsCha9XXGsCw7P1TNmegcmLMn2usXH0l3I2WH9mce0yLFvPkW2hnFGjzzIO+hsdUH6as7V+z0Xk+iHPrwksXUIWJunaFrCxZUB7gwLlvmH4upQcA7QTmvB0SXloCq4NUwTqn/Gks4jHNtEmE7rilxkcJ8W4K6YcIBT96QBO8KDIljgEIQZJSY80B/J3EQWpwTEpbJ/8Tzez6uTBFB8O+leuhVBYdzQq4oud+ApxbZ8ubZoDNnqGNrQhLXRvKe4TW3DKXlEPJ1G//S3JBi6J7ZKKSYhnQJ0aMTiHWF6LHzlmhvihI/LxMY/BEbaJzcBLGYnTFqMYNCDCj11Oj8zVkDgFMGKwnAZPu4d25Y26O6XBcgzOSKh8PKrqjoJRtTwKbjGLwSUpDh+P+t2nYDTqUtDH8mk5osjsqB2JeCPbZwrel6NEGiByNA8PO+t8MEHBPUox+EeWCDlKnCz8xeAvaXIpMMRvDE7HYkPIgA7G0xjUFmIjy4BHLLTrhqyIoyNyIHv2LlocfnRUrpxSrCaHlQToolq8gVo9OR43QPaZg/sG58dj/RapoqjV+/b1XdfdPoNbbr61l4eqeueUTgVGzpVKxa+ASicBFbUkf+mUxIR8yo+h7DU3/CAT8sLWZC/WWlFJSe2tZK7yVU9Nc4rG6qv3j4dVnWkPoNJhvffPlR7jCT6TtWH+A2lYy+Ii8qOU9yQrfWRzPE+VVaqvHoHVClM15ZWKjNU5+vzsrNYZKyo56qiMVRbj9EYcLyqMqR0lXxHKaj+lxnJWLs+WjdJPjUlgkTQecFpFTZGUNi2q0cxMVYvTbOofXfZSlRZo/eYAAAAASUVORK5CYII=",dd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAA0lBMVEUAAAAAAAAAAAAAAAD///8AAADPz8/////r6+t0dHRdXV2UlJT///////////////////98fHz////z8/P///8AAADv7+/n5+f///////8AAADLy8v////7+/v7+/v39/f39/f///////////+vr6/Ly8uIiIj///98s0L3+/O715vr8+PH36/7+/fb68vz9+vX58OEt06jy3yYw2mQv13T47/D26eAs0bj79efx3j7//uIu1Kz05S305TL37OUw2WAt0qEt0qny4Cz05DT58Orz4Sgj3ZGAAAAJ3RSTlMATj0MkCyz99pwaIAmSsfraHcw57sT3s/P4yGv3/fz6/M8CDSUgEaYkIERAAADSElEQVR42u39VYPqMBCFATQtjqziwPpOUsdx/P//pTsJ1KCF7tt9OewiQ76czBB7lP4TFR4Tr60Hw3hovSYeC3Gp50QdAqonnmNgxRI2tYaL6aA7HncH08XQwkCpeAf7QozpfRpQX2eIft3APhNottzQK22WaJv4jOIKNZiNQjCBjmZQiyjTRwe0NY3UWoPORxhXTIO9pTe0tSEdUqOPNKzoHa0gfeVZ6NznONm5yPOzBjaNIRtqwdomQNvGAbcaJPzcF8zWNJbWM/DPhBKMaEyNoORxRbA2ccGNBUWf4TKi2Uq/Ci09y+doQ3U2vwyh5bNbUj2Co112nbzuFrYO/XBsaJqMXQ2mD/UTVwArnKO6bduwuApbcJo+jzCk0bKuex3C4znFRRSla5oBu8vo4pzkK0yd0HzvaDcWdnyvmlyCU3gVYAsGXsiViR8H/I3l9XvWAFoCfICuGxujumuVO2FvKgd32uW66cKDAA0Y+8ehjo7b7hAYrhaNG9I97FXV7zoGQ4BpH4gbi2EAO1K9R2mPG6r0CDzm247GkBbguzfUAdOw67UtKrnhhsb8CJYxp1ONDbyhvgvwxSvORDv1ccCmuE+ghnMD/1RsrbnVHcCLAKtu2frQo/M+qgf6zhTF7atGl674Iui5E3MKVQGm3AmwmI1x1fhl0oPJLfaY2cxtBikB/rhTTmU0CGJe5gG/GPGcmXpuNoQfAf66k3yH2fYOKBs0/qJj8ivNzcyZexb8CrDx5oy+y3SnB/d362HeQjo7F78Pbw0BKk13IaundKfMN1lMJrpdgDNSHZrKaUFmva1jBZORasLEt3rnE7DV0cTd6HHryJ44KZnxNqueyYzJ0j8H8XCcGMzsOR+XkEmeQSX/t+0xfx6pJMmZv2zIGdnhpHL2L0dAtuyCkpyKf+ikPEO0JJW4x1yF+AyxsLm4B2suKQUkP7XjHOXtJznISQrJt+9fHtp5olyAmObT/evKUzBBh8xVbl+QKrkwjpMkdetKliLhHOYpk2wm6hKYyRJZkaKUJCSfCbt2ZvKEJKUbKsuEZJtvgX0H3ppZQuSydFscJbnvVPXlPZ1+f6mmvnMkBsal4ICDSipSTCmNpMydiSwnG+HUP5CIXyH8TQPBAAAAAElFTkSuQmCC",hd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAulBMVEUAAAAAAAAAAAAAAAAAAADPz8////90dHT////r6+v///9dXV2UlJT39/f///////8AAAD///////98fHz////v7+/////////n5+f///8AAADLy8v7+/vz8/MXFxf///////////////+vr6/Ly8uIiIj///98s0Lz9+vD26eQv12Yw2mny4Cfx3jr8+P3+/P7//v7+/fH36+z05SEt1K305Tj79PX58PT47+Mu1mEt0qAt0rL37O/158A8ya6AAAAJnRSTlMATj0MLLP3cJTa42iA8yZKE8dod7vejM/P7yGv9+dSPDAINJSARmLrYVgAAALPSURBVHja7f3XmqowFIUBEDrNblenbzpgV2fm/V/rhOIQQr08N8vGl+R3JTs75ZL5T9QbyRPV2O8NdSKPel2p15kKBamz1w5Yf4ibWrej75xM8+T4x5uFC4b9FuwdY+HBNQtyDyFG3xuwNxmbnb/Nkr7P2FZ+q+N6c4jsCixB7QjmNWF6WULgmrVyA1i+VHF9Ea4Ps0GPK4gVMXoR4cds0Q+IJc/esp2LySU1zrc5XM0OusK8GFsZgkcX8BGATHLvENHxvNtBGAb2nSp2IyAzYQg21eC4T/N0f6QqbBjmXB8sat6PMXO5xDRFflvQJwzPxdo7Jmw86IeNeaq359zytWSI29v0E2H5XGUzOBTrzAtEp/TpFMGFqjzALANVIEPqeJ4XguVlsiDE3w7RwAU15XpgEcU/UCkyrSxI02cEt7zQhxr5eZsbjBJQJiP+m7RyT+4TeD7+5m2OWfZMyH/LwLg/iax4TBTowySLjUODeAa8FPSSGSmCThYdA040GOISHE8cWzwhIQ2ewEjAPZg0mK6xe5IzV6BBE/YJKFaAcMkS7X6BClCs6yrW/uA7jn/YQxl8dnVbDk6FCsHZJuCiPB3NoA+LBBTKCdAMHkFIwE8y5bqAN/hMwC8yybuAFnwl4IpcVh1AvKxWCcitiYXcATzAmksXpERsHe0g3jqklGN4Jd+s2sEzKHwGcnpuea4Dz7mhnvWUYVjlbytzomouemaXDQr75JiBlB8BXlDFBV5WjY8AafAHMqzQ/dARckNsuZt2PeamO8IQB1brerBqPFMQO950Oco3Y7bIMRzSN+2Xh42OOApkBmjcfl0ZIzzAMqlNmy9IU62Ki8md0HQlE3bVHB4niySl7hKoSIjlmDrxCOkYLV87FR0hnmnQgEVIWtMX3bWEEDtgmhWjSPsQFltDFI3tQvjQUAcsFoc7XBTPMR3FrXg2dkYsy6+qqX8NhEz2Tm1ssgAAAABJRU5ErkJggg==",ud="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAulBMVEUAAAAAAAAAAAD///8AAAAAAAB0dHTs7Oz///+RkZFcXFz///////8AAAD////////////////R0dH39/f////Nzc37+/vw8PCAgIAAAAD7+/vR0dH39/fz8/Po6OgaGhr///////+xsbHNzc2IiIj///8CiNGNyegmmdnk8/t0veRJqd05odkxndmVzezZ7PcWkdXs9/ux2fBwveSp1fCZ0ewOjdEGjdHz+/sOjdWAxejN6PcKjdHB4fMRNPn3AAAAJXRSTlMATj2RLAxw2feAaEwmEy7J5Gi2872w9913IfOx7OjNVDwIlYBImQtBiAAAAs5JREFUeNrt/deCsywQhgGIXdPT07e9anp6+v3f1gfGFVxNwn/2n7zZTQEeZxhmgEPlf6J8RasParZdG9S1Sl6WKmplJFTWihJYrkSHjnfbabA6HlfBdLsb04ZS7p01iq0XMy+h2WJN0VdWPzVqbHLwUjpMqFnt8xmXbwF+BhaiPtB6EqaPLpZz76nmS3Q/sricjc3Ze6HzBnZGjD5sLLw3WsBO2cx3sffeao/un3l+trDxJLRBKxlbDcuzDHheQhO5IjD3pDQHxEwowfck5aPEuRzGfN3nV6R05f4cxsgJBif8kRkcJXn/hJssYi0YpNO9/dFcDMFhHc9SE5fex9JLaSnGYBEHtgyhjsa4pMELxvzHDOUHlxdbp5kLQ32dis9+pE8FO964z/KU+Sok5A6VaIrbuO22zl5RH+tb/GMbTbIuuEE9nWWBMyQG1aPYBHHbhu4dmYJQBEEUnRpWcdsJT3WKB61QC0HgGLc9hqSY8D0edARC0E6Cp6kXJNLuGnjTUxK0U67SfhbVmQiyaPki+OvqQAgO7Wf5Hogg652IYIBBCA6FSNN+thX4IuiHhS+AUwxDsCokABs43t+R0H3Pjg8OblENwW8h5fBC8aAdvkPwR0hyKXCMnxDs9HmayYAz9DshaDR4IcuACzSMR0GafOtgA4Tq5M5xkG4d5oNTdCverCTACSw9Ag0n3h7Zet3TIFufqMDp9uhEniqKav2WbzC5TFZpcEWbo/TyYam/nFIw/8sRYBZiUFF78odOjxukJkfyx9xIMEgD68oerK6uJKS2mzJHebOtJjnFIE7z/eWh6RDjD6gUSPv9daVN6ATTpPvuguRmcYwc9V5dyXqjbI7OUyWm9ewSaJlENZRn0glxLGRcOy2HEF15oYJKiNnoJwux3zAJUQvKazGUuF/V4eNqPax+uUQCYzJ0xgpSdUORlNHR1ZBWVb2TTf0DxvdDHoiXojsAAAAASUVORK5CYII=",md="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAA2FBMVEUAAAAAAAAAAAAAAAD///8AAADOzs7///9ycnJaWlqSkpL39/f///////8AAAD///////////9+fn739/f////v7+/7+/v////////r6+v7+/sAAADOzs7r6+v///8ZGRnr6+v///////////+urq7KysqGhob////mUQDmVgX30rrzupr/+/v72sr3xq7mWg3vilH75tr77+braiX3wqb78+vztpLvlmbrcjHvnm7/9/frdjXrgknrej3zrormXhXvhk377+v3yrLzonbvnnLrYhnzpn7mWgll/jcJAAAAJ3RSTlMATT0Mkiyy93JmgeslTBPGZuJ28zDe973O2vMhrs7eVNY8CDSWgkhVX6/SAAADd0lEQVR42u39R6OqMBCFARDstnvtdm8fOmC32/3//+iFhB4sy7c5G5HkI5OZk7Lk/hPl3+ONfiWVqvQb8ff8q1Q1XoKASvHqC1jhDXc9jBfr0U4Ud6P1YnzAL94KT7BvjE2mKyGg1XSC0e8H2FccYHi+CYxu5yFA/Osel2+CstWFSOlbBZp30vTZBnMu3NXchPZnFFdIwVEXHkg/QioiR58pkIUnkiHFjJlvP+cssh2a51cTNOEFadAM5jYOZnh++uy0YUDdhLif+wYlnM+5ZZgxQ84V8DvhDbbhHiqxqcGQW3jzuAIMw4GOCGZcGFAfQsE34FmIAjcrgdXZG7IKE9afpkWaEeBtAlU3pVOmeWflBlQxgpy6iS0BG9KYruGjKOzCTSsoUS4PB4bbO6tfE2dMwg9A7fPOlms3JDM08I82g2uodQzv9hQXYVAmo13JKsSwvA60LuxJNmAd4tY0TMtMI4k8ToPNDQL2YRTkdBKoUwtSF/A7YQR9AlbAl7jRWJKo28Cc4fcX+4/f7zuoEFABX7XkiSqZTkoVaUZ9IEn+goqgEDDlB0lIIxl8kkMzwWCKDXUuq6ZmCOulgy33gqGZqjxnQ/Un50p7H3XXAQbeo4i8ajrJ6XnlmGHG2E8VvI9otLv1oEz3BqZnTq819AiYdA2gT+iCxnXcbOxs4l/y3S1MnDW7gCQBf13LGTCkeRrjLY/MUsEmoq3i0N0OxvBLwD/X5CfnEzOQaOFVQXJCHMPJ7naAPwJ2cs6yWsDRe8D2UbSLcHQm4j6sINchYKzrWHEFS5JgUcU5XG1WVpmu9moeLZ3PT6Ebowsy7W4dKqjYAaIMS9eblyXIIrGeSl/grSNNOS7x4WxW8wksJW3oSz0p0VCTljCxLXCGj4QNxrLu9jgnnj4EtlODbj82h5dO1o6U4/iWtyFvFqd9aIsS96eFuzq20OIdjium2SPgjvARkC66IMcn2UMnUvjQSXoD4iEHtVePudrANyBObObVgzWT4ALiy/VXjvJ6mQ9yXAxl688vD/UsioVArojKz68rZYQnyJKZ2uMLUi0TxVnkIPnoSpYcRHN4njxKt+5dAltpxMe4e0oglP2AiGvnRxahBPdARR6hdDcHAeW6aYT4IvdYFooyP8lezrpa53rJnwx6AbMUwwEHlYhxLyrWSfCU4ROdaOofClNe/i0qa/kAAAAASUVORK5CYII=",pd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAxlBMVEUAAAAAAAAAAAAAAAD///8AAADQ0NBxcXHr6+tdXV2VlZX///////////////////////99fX3////////v7+8AAAD////39/f///////8AAADMzMzz8/P7+/v///////////////+wsLCJiYnMzMz////7+/t1dXX39/e4uLjr6+t9fX15eXmRkZHExMTz8/OwsLCdnZ2BgYGkpKTv7+/T09Pj4+Pb29vX19fQ0NC0tLTIyMjAwMCJiYmNjY2VlZWFhYXMzMzOV7j7AAAAJXRSTlMATj0MkSyzcdpogeu8xyZMaHXjMN4T9+vQ7yGw5/ffPAg0lUiBzfXQeAAAA0BJREFUeNrt/cdiszoQRgEgcHdLT+KSPpLouNum2H7/l7oSNp327+7mS59wGKaipfA/0eiuMfjoY9z/GDTuRnWpx8YDJPTQeKyBjYfsUvNgLdylpi3dhXUwmWE4rsC+GWYaOklINxg7/C7BvhoA66NGMtKOa4DGVxE3egPsqCRXqoPhrSBNn++g6KRQugLvn3nc+AU2KimRuoGXnBx9voBNKmTDS8bn6L2a4+R7Ks6vN9iQGtrAWzK3DVDUOqCqQCPOfQP2SC3pGOKdMASH1JQDw4gbw1qtC6prGMccHgsus42M6Ri5fARTKwBlvEybNBMew5QaBRxRqZyxGWFiH6CgRS+7HaWZ6HV4uHIjMPM5Ymw2e7AyZhOu7XMHB1Ks9TpjOsDdLUSriDIUBcMqbbVuQQ5gEZjOVqCVn+c131XbNLiAgQ9+gBuYTtFq27E/Xf6LCacU6MKHD/YhqpXGpOoy93RmVeTgSknPzRL6PoghXv6TLK9U9QC8DArj1iwkS5bjXjXAPkhjoKcAxkBXxGFxr7jDI//BbIoXA2n6UT2qsFt7ez+TGneIlytYs747KdRLP+osSs72Ns4H3qIX7vCypJcllvkIh9l1YZYqh85+W+pMCzBWOz+5uoxVYvMhWISNGZSjFTaAhTWWirh2ZLPjLtgVGg4vg5YP/oUtd6QkCZpnsuPFcHjMNBjaA/z54G/Y5CtWvMWGCxT+3WDB28rtn+ew90z49cHJa/D0KjWCO4R1WwQZMIIB0+F14oPSNBxk+Rruie5JqJ3p38SCYKQNmErXgWxHq8OGrSzvYRub3uUW9rK8DRc9Wx3tKyc0O9GyWuwp3lqJFaRZW0z34QQdodO8gVLv39Zj7/akgiB2/mUhd8SAE57bgPV6HHsFtJ9DUBBb9V86rcghc4me6r7mnlDMIUtst+6LtdsUEhLv53Ve5fN7MckJEurNqw8P8x6SUiAL8776uHKfDDAgu0/lB6Snbh7HSdQqO5K1UD7H4hRRu1N0COy0kSgJRWoi1OvkHTs7PYSaQomeRYTa09fE3oHXaRsh8VkoF0dR96c1mPUp7c8GrZ8uqoFxSeyBk2pKQk1Jk6bIPSNRbE7yqf8AzhBQcpR5pw4AAAAASUVORK5CYII=",fd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAzFBMVEUAAAAAAAAAAAAAAAD///8AAADPz8/////r6+t0dHRdXV2UlJT39/f///////////////////98fHz////////v7+8AAADn5+f///////8AAADLy8vz8/P7+/v////39/f///////////+vr6/Ly8uIiIj///98s0L7+/eQv12bw2zL37Ojy3ynz4Sz05Tb68/z9+vr8+PT47/n79vX58P3+/Pz9++As0aEt1KEt0rH36/D26e305SAt0qfx3jX58f7//u715+Mu1aUw2WXlVMqAAAAJnRSTlMATj0MkCyz99pwaIDzJkrHaON3MLveE8/P7yGv5/ff6zwINJSARm6TgG4AAANzSURBVHja7f3HwqowEEYBELDb7da/Dx27Skd9/3e6IRGkWZZ3821EksNkSiZZMv+J6q1cb1EThNqil2vV36W6uTbE1M5138AaTTz1sNEc8XQ8nkRH2xzwi2bjBfaNsb0h8TFJxh6j30+wrxzAyrL5lGxrBZD7esTVR+CZGRhBTQ9GD8L0OYb1lX+o6xrGn1lcowg7nX8ifQfFjBh9FkHmX0iGYspmffya88lxws+vEez4N7SDUTy2OVgn/TtplpQC9TXkotw3eMl4in7BbFLk1YNoJTTBTM7YkjJVUqQJzTvXgFUy76KPqeolBdoraEQMWnwWKKWd5HnrbrILh3ShrX1ynQHaB+iGITVSwyc/NrA9ZpBGGNg2pJe0oXt4d+RPySEJ2pSrwyHFKcHu3x3VVMAPQMunlU7XaUU8VPDPTk2lagOtm4taEpSJNZPsQgzL8XRqNyd74CQ4hy7TLyZxSR6N+HCPgAsQ45xOFhrkguQFopUgwoKANYgETty4Lq02WGt49oVajMX9BDUCChDJlrzfLldBSL2lRuytlstohRxBIGAxCpIliTJEJCc8wWAxvdSrvF3vFF7ZB5iA/+zWW/maXuosEpwzne3qYQUouksfzuEkEWYEHN7ToWFGVQwB95Gg5nC3EAxFxXSYbQeGBCyEr/Q9rRKcR0e6RdN/9t+ZsNfDzxcI+BuWnAIrGqcNbnnESwEXER09rsJ2sIFfAv6FRX4OPqHCkiZ+yy9BDaYHXh7gj4CTjyC9Grj3B5xNb3Ph3cCR8EGCjwkBuWlQihIIJMDHLf66JEknsgq6m0Uh+LwBU45uyHLYOrawxRVgyyCEtXkRQMajFzxEX+DWUaYcky8FzUrcg7D0j+DIRtP8A3opwP6WbQtK+RvIVcP2KJICP6h8RCptPzcOt8fqbaUMw5buu1yyzkqi59nK+X4amFBiA44ZlNNHwAPhI6A8CEGGLaQPnUzhQ6dwN4hNov67x1wfRQziwFbePVgreSYmtjN/5yifd9g4x3CoOn99eZhXEZcAsZud19eVTtzBgKz0n1+Q+pUszidR4dmVrICyOewni8qlR5fAUhmxHPNIeYSqJci4dpaqCOWZJxqwCJWnHxDTx7SMEDtgnstHUeWnMJzVisXabFj4qaA3MF8cXnBceY55U9wkz/qWEcvmJ9nUPxIQVh9SZRjzAAAAAElFTkSuQmCC",yd=Object.assign({"../assets/MapData/My Maps/PackingMarkerList2/doc.xml":Jc}),bd=Object.assign({"../assets/MapData/My Maps/PackingMarkerList2/images/icon-1.png":qc,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-10.png":$c,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-11.png":Zc,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-12.png":ed,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-13.png":nd,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-14.png":td,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-15.png":od,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-16.png":id,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-17.png":sd,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-18.png":rd,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-19.png":ld,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-2.png":ad,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-3.png":cd,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-4.png":dd,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-5.png":hd,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-6.png":ud,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-7.png":md,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-8.png":pd,"../assets/MapData/My Maps/PackingMarkerList2/images/icon-9.png":fd}),gd=/\/PackingMarkerList(\d*)\//,Al=n=>{const e=gd.exec(n);return e?e[1]===""?1:Number(e[1]):-1},_l=Object.entries(yd).map(([n,e])=>({folderIndex:Al(n),xml:e})).filter(n=>n.folderIndex>0).sort((n,e)=>e.folderIndex-n.folderIndex);var nl,tl;const Ad=(tl=(nl=_l[0])==null?void 0:nl.folderIndex)!=null?tl:-1,vl=n=>n===Ad?"":`s${n}`,fi=_l.map(({xml:n,folderIndex:e})=>({xml:n,folderIndex:e,tag:vl(e)})),Pl={};for(const[n,e]of Object.entries(bd)){const t=Al(n);if(t<=0)continue;const o=vl(t),i=n.split("/").pop();Pl[o?`${o}:${i}`:i]=e}function _d(){return fi.map(({xml:n,tag:e,folderIndex:t})=>({xml:n,tag:e,folderIndex:t}))}const vd={2:"Alan大重停車記事"};function Pd(n){return n==null?"":vd[n]||`PackingMarkerList${n===1?"":n}`}const Cd=/^(icon-\d{3,4}-[A-Fa-f0-9]{6})/;function Cl(n){if(!n)return"";const e=Cd.exec(n.replace(/^#/,""));return e?e[1]:""}const Xi={"icon-1538-E65100":"icon-1.png","icon-1538-7CB342":"icon-2.png","icon-1538-757575":"icon-3.png","icon-1684-7CB342":"icon-4.png","icon-1538-0288D1":"icon-5.png","icon-1633-7CB342":"icon-6.png","icon-1632-E65100":"icon-7.png","icon-1633-757575":"icon-8.png","icon-1632-7CB342":"icon-9.png","icon-1632-757575":"icon-10.png","icon-1632-0288D1":"icon-11.png","icon-1633-0288D1":"icon-12.png","icon-1633-E65100":"icon-13.png","icon-1502-7CB342":"icon-14.png","icon-1644-7CB342":"icon-15.png","icon-1644-757575":"icon-16.png","icon-1644-0288D1":"icon-17.png","icon-1644-9C27B0":"icon-18.png","icon-1898-E65100":"icon-19.png","icon-1594-757575":"icon-20.png"};function Ud(n,e){return n&&Xi[n]||e}const yi={};var ol,il,sl,rl,ll,al,cl,dl,hl,ul;if((ol=fi[0])!=null&&ol.xml){const n=((rl=(sl=(il=fi[0].xml.kml)==null?void 0:il.Document)==null?void 0:sl[0])==null?void 0:rl.Style)||[];for(const e of n){const t=Cl(((ll=e.$)==null?void 0:ll.id)||""),o=Xi[t];if(!o)continue;const s=(((ul=(hl=(dl=(cl=(al=e.IconStyle)==null?void 0:al[0])==null?void 0:cl.Icon)==null?void 0:dl[0])==null?void 0:hl.href)==null?void 0:ul[0])||"").replace("images/","");s&&(yi[o]=s)}}function Ed(n,e){const t=(e||"").replace(/^#/,""),o=n.kml.Document[0].StyleMap||[];for(const i of o)if(i.$.id===t)return(i.Pair[0].styleUrl[0]||"").replace(/^#/,"");return t}function Bd(n,e){var i,s,r,l,a;const t=(e||"").replace(/^#/,""),o=n.kml.Document[0].Style||[];for(const d of o)if(d.$.id===t)return(((a=(l=(r=(s=(i=d.IconStyle)==null?void 0:i[0])==null?void 0:s.Icon)==null?void 0:r[0])==null?void 0:l.href)==null?void 0:a[0])||"").replace("images/","");return""}const wd=n=>{var o,i,s;const e=(s=(i=(o=n.split("(")[1])==null?void 0:o.split(")")[0])==null?void 0:i.replace(/ /g,""))!=null?s:"";let t=e?e.split("|"):[];return t.length>0&&t[0].match(/---|--/)&&(t=[]),t.length>0&&t[0].match(/-/)&&(t=t[0].split("-")),{priceType:e,priceValue:t}};function Sd(n){const e={};return{folders:(n.kml.Document[0].Folder||[]).map(i=>({name:i.name[0],features:(i.Placemark||[]).filter(s=>{var r,l,a;return(a=(l=(r=s.Point)==null?void 0:r[0])==null?void 0:l.coordinates)==null?void 0:a[0]}).map(s=>{var b;const r=s.Point[0].coordinates[0].trim().split(","),l=wd(s.name[0]),a=((b=s.styleUrl)==null?void 0:b[0])||"",d=Ed(n,a),m=Bd(n,d),u=Cl(d),f=Ud(u,m);return u&&f&&(e[u]=f),{properties:{name:s.name[0],description:s.description?s.description[0]:"",iconId:a,icon:f,styleHash:u,priceInfo:l.priceType,priceArray:l.priceValue},geometry:{coordinates:[r[0],r[1]]}}})})),iconMap:e}}function Id(n,e){const t=Number(e==null?void 0:e[0]).toFixed(5),o=Number(e==null?void 0:e[1]).toFixed(5);return`${n}@${t},${o}`}function kd(n){if(!Array.isArray(n)||n.length===0)return[];const e=[],t=new Map,o=new Set;let i={};const s=r=>{let l=t.get(r);return l||(l={name:r,features:[]},t.set(r,l),e.push(l)),l};return n.forEach((r,l)=>{var f;if(!(r!=null&&r.xml))return;const{folders:a,iconMap:d}=Sd(r.xml),m=r.tag!==void 0?r.tag:l===0?"":`s${l+1}`,u=(f=r.folderIndex)!=null?f:l+1;l===0&&(i=d);for(const b of a){const g=s(b.name);for(const w of b.features){const D=Id(w.properties.name,w.geometry.coordinates);if(o.has(D))continue;o.add(D);const U=Q=>({...Q,properties:{...Q.properties,sourceFolderIndex:u}});if(l===0){g.features.push(U(w));continue}const j=w.properties.styleHash,N=j?i[j]:"";N?N!==w.properties.icon?g.features.push(U({...w,properties:{...w.properties,icon:N}})):g.features.push(U(w)):m&&w.properties.icon?g.features.push(U({...w,properties:{...w.properties,icon:`${m}:${w.properties.icon}`}})):g.features.push(U(w))}}}),e.filter(r=>r.features.length>0)}function ne(n){if(!n)return $s("");if(n.match("http"))return n;let e=n,t="";return/^[a-z0-9]+:/i.test(e)||(e=e.split("/").pop(),t=e,yi[e]&&(e=yi[e])),Pl[e]||$s(t)}const Dd=Object.fromEntries(Object.entries(Xi).map(([n,e])=>[e,n])),Td={1538:"汽",1632:"重",1633:"機",1644:"P",1898:"✕",1502:"★",1684:"☕",1594:"?"};function $s(n){const e=Dd[n]||"",t=/^icon-(\d{3,4})-([A-Fa-f0-9]{6})$/.exec(e),o=t?t[1]:"",i=t?t[2]:"9E9E9E",s=Td[o]||"?",r=/[\u4e00-\u9fff\u2600-\u27bf]/.test(s),d=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#${i}" stroke="#FFFFFF" stroke-width="2"/><text x="16" y="${r?21:22}" text-anchor="middle" font-family="system-ui, -apple-system, &quot;Microsoft JhengHei&quot;, sans-serif" font-size="${r?14:18}" font-weight="700" fill="#FFFFFF">${s}</text></svg>`;return"data:image/svg+xml;utf8,"+encodeURIComponent(d)}function Zs(n,e,t){if(!n)return!1;const o=!e||e.length===0||e.indexOf(n)!==-1,i=!t||t.length===0||t.indexOf(n)!==-1;return o&&i}function er(n,e,t,o,i){if(!t)return!0;if(t==="free")return/Free/.test(n);const s=t==="h"?/\/h/:t==="d"?/\/d/:t==="t"?/\/次/:null;if(!s||!s.test(n))return!1;for(const r of e)if(s.test(r)){const l=Number(r.replace(/[^0-9]/g,""));if(l>=o&&l<=i)return!0}return!1}function nr(n,e){if(!n)return!1;const t=n.getSouthWest?n.getSouthWest():n._sw,o=n.getNorthEast?n.getNorthEast():n._ne,i=Number(e[0]),s=Number(e[1]);return t.lng<i&&o.lng>i&&t.lat<s&&o.lat>s}const sn={get(n,e=null){try{const t=window.localStorage.getItem(n);return t===null?e:t}catch(t){return e}},set(n,e){try{return window.localStorage.setItem(n,e),!0}catch(t){return!1}},remove(n){try{window.localStorage.removeItem(n)}catch(e){}},getJSON(n,e=null){try{const t=window.localStorage.getItem(n);return t===null?e:JSON.parse(t)}catch(t){return e}},setJSON(n,e){try{return window.localStorage.setItem(n,JSON.stringify(e)),!0}catch(t){return!1}}},Ul="favorites_v1";function bi(n,e){if(!n||!e)return"";const t=Number(e[0]).toFixed(6),o=Number(e[1]).toFixed(6);return`${n}|${t},${o}`}const Un=E(sn.getJSON(Ul,[])||[]),tr=()=>sn.setJSON(Ul,Un.value);function Nd(){const n=X(()=>new Set(Un.value.map(i=>i.id)));return{favorites:Un,favoriteIdSet:n,isFavorite:i=>n.value.has(i),toggleFavorite:i=>{if(!(i!=null&&i.id))return;const s=Un.value.findIndex(r=>r.id===i.id);s>=0?Un.value.splice(s,1):Un.value.push({id:i.id,name:i.name,parkingType:i.parkingType||"",geometry:i.geometry,address:i.address||"",icon:i.icon||"",addedAt:Date.now()}),tr()},removeFavorite:i=>{const s=Un.value.findIndex(r=>r.id===i);s>=0&&(Un.value.splice(s,1),tr())}}}const Md=()=>{};var or={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=function(n,e){if(!n)throw pt(e)},pt=function(n){return new Error("Firebase Database ("+El.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=function(n){const e=[];let t=0;for(let o=0;o<n.length;o++){let i=n.charCodeAt(o);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&o+1<n.length&&(n.charCodeAt(o+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++o)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Rd=function(n){const e=[];let t=0,o=0;for(;t<n.length;){const i=n[t++];if(i<128)e[o++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[o++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],r=n[t++],l=n[t++],a=((i&7)<<18|(s&63)<<12|(r&63)<<6|l&63)-65536;e[o++]=String.fromCharCode(55296+(a>>10)),e[o++]=String.fromCharCode(56320+(a&1023))}else{const s=n[t++],r=n[t++];e[o++]=String.fromCharCode((i&15)<<12|(s&63)<<6|r&63)}}return e.join("")},Ji={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let i=0;i<n.length;i+=3){const s=n[i],r=i+1<n.length,l=r?n[i+1]:0,a=i+2<n.length,d=a?n[i+2]:0,m=s>>2,u=(s&3)<<4|l>>4;let f=(l&15)<<2|d>>6,b=d&63;a||(b=64,r||(f=64)),o.push(t[m],t[u],t[f],t[b])}return o.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||d==null||u==null)throw new Od;const f=s<<2|l>>4;if(o.push(f),d!==64){const b=l<<4&240|d>>2;if(o.push(b),u!==64){const g=d<<6&192|u;o.push(g)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Od extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wl=function(n){const e=Bl(n);return Ji.encodeByteArray(e,!0)},yo=function(n){return wl(n).replace(/\./g,"")},gi=function(n){try{return Ji.decodeString(n,!0)}catch(e){}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n){return Sl(void 0,n)}function Sl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ld(t)||(n[t]=Sl(n[t],e[t]));return n}function Ld(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=()=>Fd().__FIREBASE_DEFAULTS__,zd=()=>{if(typeof process=="undefined"||typeof or=="undefined")return;const n=or.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vd=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&gi(n[1]);return e&&JSON.parse(e)},Il=()=>{try{return Md()||Hd()||zd()||Vd()}catch(n){return}},Wd=n=>{var e,t;return(t=(e=Il())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},jd=n=>{const e=Wd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),o]:[e.substring(0,t),o]},kl=()=>{var n;return(n=Il())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,o)=>{t?this.reject(t):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,o))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},o=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r={iss:`https://securetoken.google.com/${o}`,aud:o,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[yo(JSON.stringify(t)),yo(JSON.stringify(r)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dl(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kd())}function Qd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tl(){return El.NODE_ADMIN===!0}function Yd(){try{return typeof indexedDB=="object"}catch(n){return!1}}function Xd(){return new Promise((n,e)=>{try{let t=!0;const o="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(o);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(o),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="FirebaseError";class qt extends Error{constructor(e,t,o){super(t),this.code=e,this.customData=o,this.name=Jd,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nl.prototype.create)}}class Nl{constructor(e,t,o){this.service=e,this.serviceName=t,this.errors=o}create(e,...t){const o=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?qd(s,o):"Error",l=`${this.serviceName}: ${r} (${i}).`;return new qt(i,l,o)}}function qd(n,e){return n.replace($d,(t,o)=>{const i=e[o];return i!=null?String(i):`<${o}?>`})}const $d=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n){return JSON.parse(n)}function Be(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=function(n){let e={},t={},o={},i="";try{const s=n.split(".");e=Ft(gi(s[0])||""),t=Ft(gi(s[1])||""),i=s[2],o=t.d||{},delete t.d}catch(s){}return{header:e,claims:t,data:o,signature:i}},Zd=function(n){const e=Ml(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},e1=function(n){const e=Ml(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function lt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ir(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bo(n,e,t){const o={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(o[i]=e.call(t,n[i],i,n));return o}function go(n,e){if(n===e)return!0;const t=Object.keys(n),o=Object.keys(e);for(const i of t){if(!o.includes(i))return!1;const s=n[i],r=e[i];if(sr(s)&&sr(r)){if(!go(s,r))return!1}else if(s!==r)return!1}for(const i of o)if(!t.includes(i))return!1;return!0}function sr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(n){const e=[];for(const[t,o]of Object.entries(n))Array.isArray(o)?o.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const o=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)o[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)o[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const f=o[u-3]^o[u-8]^o[u-14]^o[u-16];o[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],r=this.chain_[2],l=this.chain_[3],a=this.chain_[4],d,m;for(let u=0;u<80;u++){u<40?u<20?(d=l^s&(r^l),m=1518500249):(d=s^r^l,m=1859775393):u<60?(d=s&r|l&(s|r),m=2400959708):(d=s^r^l,m=3395469782);const f=(i<<5|i>>>27)+d+a+m+o[u]&4294967295;a=l,l=r,r=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+r&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const o=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(r===0)for(;i<=o;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let o=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[o]=this.chain_[i]>>s&255,++o;return e}}function Ro(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=function(n){const e=[];let t=0;for(let o=0;o<n.length;o++){let i=n.charCodeAt(o);if(i>=55296&&i<=56319){const s=i-55296;o++,v(o<n.length,"Surrogate pair missing trail surrogate.");const r=n.charCodeAt(o)-56320;i=65536+(s<<10)+r}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Oo=function(n){let e=0;for(let t=0;t<n.length;t++){const o=n.charCodeAt(t);o<128?e++:o<2048?e+=2:o>=55296&&o<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(e){return!1}}async function i1(n){return(await fetch(n,{credentials:"include"})).ok}class Ht{constructor(e,t,o){this.name=e,this.instanceFactory=t,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const o=new Jt;if(this.instancesDeferred.set(t,o),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&o.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var i;const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(i=e==null?void 0:e.optional)!=null?i:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l1(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch(t){}for(const[t,o]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});o.resolve(s)}catch(s){}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:o,options:t});for(const[s,r]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);o===l&&r.resolve(i)}return i}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(o))!=null?r:new Set;i.add(e),this.onInitCallbacks.set(o,i);const s=this.instances.get(o);return s&&e(s,o),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const o=this.onInitCallbacks.get(t);if(o)for(const i of o)try{i(e,t)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:r1(e),options:t}),this.instances.set(e,o),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch(i){}return o||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r1(n){return n===Fn?void 0:n}function l1(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(le||(le={}));const c1={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},d1=le.INFO,h1={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},u1=(n,e,...t)=>{if(e<n.logLevel)return;const o=new Date().toISOString(),i=h1[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ol{constructor(e){this.name=e,this._logLevel=d1,this._logHandler=u1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const m1=(n,e)=>e.some(t=>n instanceof t);let rr,lr;function p1(){return rr||(rr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f1(){return lr||(lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xl=new WeakMap,Ai=new WeakMap,Ll=new WeakMap,ti=new WeakMap,qi=new WeakMap;function y1(n){const e=new Promise((t,o)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",r)},s=()=>{t(wn(n.result)),i()},r=()=>{o(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",r)});return e.then(t=>{t instanceof IDBCursor&&xl.set(t,n)}).catch(()=>{}),qi.set(e,n),e}function b1(n){if(Ai.has(n))return;const e=new Promise((t,o)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",r),n.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{o(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",r),n.addEventListener("abort",r)});Ai.set(n,e)}let _i={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ai.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ll.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function g1(n){_i=n(_i)}function A1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const o=n.call(oi(this),e,...t);return Ll.set(o,e.sort?e.sort():[e]),wn(o)}:f1().includes(n)?function(...e){return n.apply(oi(this),e),wn(xl.get(this))}:function(...e){return wn(n.apply(oi(this),e))}}function _1(n){return typeof n=="function"?A1(n):(n instanceof IDBTransaction&&b1(n),m1(n,p1())?new Proxy(n,_i):n)}function wn(n){if(n instanceof IDBRequest)return y1(n);if(ti.has(n))return ti.get(n);const e=_1(n);return e!==n&&(ti.set(n,e),qi.set(e,n)),e}const oi=n=>qi.get(n);function v1(n,e,{blocked:t,upgrade:o,blocking:i,terminated:s}={}){const r=indexedDB.open(n,e),l=wn(r);return o&&r.addEventListener("upgradeneeded",a=>{o(wn(r.result),a.oldVersion,a.newVersion,wn(r.transaction),a)}),t&&r.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const P1=["get","getKey","getAll","getAllKeys","count"],C1=["put","add","delete","clear"],ii=new Map;function ar(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ii.get(e))return ii.get(e);const t=e.replace(/FromIndex$/,""),o=e!==t,i=C1.includes(t);if(!(t in(o?IDBIndex:IDBObjectStore).prototype)||!(i||P1.includes(t)))return;const s=async function(r,...l){const a=this.transaction(r,i?"readwrite":"readonly");let d=a.store;return o&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&a.done]))[0]};return ii.set(e,s),s}g1(n=>({...n,get:(e,t,o)=>ar(e,t)||n.get(e,t,o),has:(e,t)=>!!ar(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(E1(t)){const o=t.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(t=>t).join(" ")}}function E1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vi="@firebase/app",cr="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new Ol("@firebase/app"),B1="@firebase/app-compat",w1="@firebase/analytics-compat",S1="@firebase/analytics",I1="@firebase/app-check-compat",k1="@firebase/app-check",D1="@firebase/auth",T1="@firebase/auth-compat",N1="@firebase/database",M1="@firebase/data-connect",R1="@firebase/database-compat",O1="@firebase/functions",x1="@firebase/functions-compat",L1="@firebase/installations",F1="@firebase/installations-compat",H1="@firebase/messaging",z1="@firebase/messaging-compat",V1="@firebase/performance",W1="@firebase/performance-compat",j1="@firebase/remote-config",G1="@firebase/remote-config-compat",K1="@firebase/storage",Q1="@firebase/storage-compat",Y1="@firebase/firestore",X1="@firebase/ai",J1="@firebase/firestore-compat",q1="firebase",$1="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="[DEFAULT]",Z1={[vi]:"fire-core",[B1]:"fire-core-compat",[S1]:"fire-analytics",[w1]:"fire-analytics-compat",[k1]:"fire-app-check",[I1]:"fire-app-check-compat",[D1]:"fire-auth",[T1]:"fire-auth-compat",[N1]:"fire-rtdb",[M1]:"fire-data-connect",[R1]:"fire-rtdb-compat",[O1]:"fire-fn",[x1]:"fire-fn-compat",[L1]:"fire-iid",[F1]:"fire-iid-compat",[H1]:"fire-fcm",[z1]:"fire-fcm-compat",[V1]:"fire-perf",[W1]:"fire-perf-compat",[j1]:"fire-rc",[G1]:"fire-rc-compat",[K1]:"fire-gcs",[Q1]:"fire-gcs-compat",[Y1]:"fire-fst",[J1]:"fire-fst-compat",[X1]:"fire-vertex","fire-js":"fire-js",[q1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new Map,e2=new Map,Ci=new Map;function dr(n,e){try{n.container.addComponent(e)}catch(t){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _o(n){const e=n.name;if(Ci.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;Ci.set(e,n);for(const t of Ao.values())dr(t,n);for(const t of e2.values())dr(t,n);return!0}function n2(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function t2(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sn=new Nl("app","Firebase",o2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,t,o){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=$1;function Fl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const o={name:Pi,automaticDataCollectionEnabled:!0,...e},i=o.name;if(typeof i!="string"||!i)throw Sn.create("bad-app-name",{appName:String(i)});if(t||(t=kl()),!t)throw Sn.create("no-options");const s=Ao.get(i);if(s){if(go(t,s.options)&&go(o,s.config))return s;throw Sn.create("duplicate-app",{appName:i})}const r=new a1(i);for(const a of Ci.values())r.addComponent(a);const l=new i2(t,o,r);return Ao.set(i,l),l}function r2(n=Pi){const e=Ao.get(n);if(!e&&n===Pi&&kl())return Fl();if(!e)throw Sn.create("no-app",{appName:n});return e}function it(n,e,t){var r;let o=(r=Z1[n])!=null?r:n;t&&(o+=`-${t}`);const i=o.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const l=[`Unable to register library "${o}" with version "${e}":`];i&&l.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(l.join(" "));return}_o(new Ht(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2="firebase-heartbeat-database",a2=1,zt="firebase-heartbeat-store";let si=null;function Hl(){return si||(si=v1(l2,a2,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zt)}catch(t){}}}}).catch(n=>{throw Sn.create("idb-open",{originalErrorMessage:n.message})})),si}async function c2(n){try{const t=(await Hl()).transaction(zt),o=await t.objectStore(zt).get(zl(n));return await t.done,o}catch(e){if(e instanceof qt)bn.warn(e.message);else{const t=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(t.message)}}}async function hr(n,e){try{const o=(await Hl()).transaction(zt,"readwrite");await o.objectStore(zt).put(e,zl(n)),await o.done}catch(t){if(t instanceof qt)bn.warn(t.message);else{const o=Sn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bn.warn(o.message)}}}function zl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=1024,h2=30;class u2{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new p2(t),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ur();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>h2){const r=f2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){bn.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ur(),{heartbeatsToSend:o,unsentEntries:i}=m2(this._heartbeatsCache.heartbeats),s=yo(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return bn.warn(t),""}}}function ur(){return new Date().toISOString().substring(0,10)}function m2(n,e=d2){const t=[];let o=n.slice();for(const i of n){const s=t.find(r=>r.agent===i.agent);if(s){if(s.dates.push(i.date),mr(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),mr(t)>e){t.pop();break}o=o.slice(1)}return{heartbeatsToSend:t,unsentEntries:o}}class p2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yd()?Xd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await c2(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var o;if(await this._canUseIndexedDBPromise){const i=await this.read();return hr(this.app,{lastSentHeartbeatDate:(o=e.lastSentHeartbeatDate)!=null?o:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var o;if(await this._canUseIndexedDBPromise){const i=await this.read();return hr(this.app,{lastSentHeartbeatDate:(o=e.lastSentHeartbeatDate)!=null?o:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mr(n){return yo(JSON.stringify({version:2,heartbeats:n})).length}function f2(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let o=1;o<n.length;o++)n[o].date<t&&(t=n[o].date,e=o);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(n){_o(new Ht("platform-logger",e=>new U1(e),"PRIVATE")),_o(new Ht("heartbeat",e=>new u2(e),"PRIVATE")),it(vi,cr,n),it(vi,cr,"esm2020"),it("fire-js","")}y2("");var pr={};const fr="@firebase/database",yr="1.1.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl="";function b2(n){Vl=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ft(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new g2(e)}}catch(e){}return new A2},Vn=Wl("localStorage"),_2=Wl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Ol("@firebase/database"),v2=function(){let n=1;return function(){return n++}}(),jl=function(n){const e=o1(n),t=new t1;t.update(e);const o=t.digest();return Ji.encodeByteArray(o)},$t=function(...n){let e="";for(let t=0;t<n.length;t++){const o=n[t];Array.isArray(o)||o&&typeof o=="object"&&typeof o.length=="number"?e+=$t.apply(null,o):typeof o=="object"?e+=Be(o):e+=o,e+=" "}return e};let Tt=null,br=!0;const P2=function(n,e){v(!e,"Can't turn on custom loggers persistently."),st.logLevel=le.VERBOSE,Tt=st.log.bind(st)},Ie=function(...n){if(br===!0&&(br=!1,Tt===null&&_2.get("logging_enabled")===!0&&P2()),Tt){const e=$t.apply(null,n);Tt(e)}},Zt=function(n){return function(...e){Ie(n,...e)}},Ui=function(...n){const e="FIREBASE INTERNAL ERROR: "+$t(...n);st.error(e)},gn=function(...n){const e=`FIREBASE FATAL ERROR: ${$t(...n)}`;throw st.error(e),new Error(e)},Oe=function(...n){const e="FIREBASE WARNING: "+$t(...n);st.warn(e)},C2=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$i=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},U2=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},jn="[MIN_NAME]",kn="[MAX_NAME]",Jn=function(n,e){if(n===e)return 0;if(n===jn||e===kn)return-1;if(e===jn||n===kn)return 1;{const t=gr(n),o=gr(e);return t!==null?o!==null?t-o===0?n.length-e.length:t-o:-1:o!==null?1:n<e?-1:1}},E2=function(n,e){return n===e?0:n<e?-1:1},Bt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Be(e))},Zi=function(n){if(typeof n!="object"||n===null)return Be(n);const e=[];for(const o in n)e.push(o);e.sort();let t="{";for(let o=0;o<e.length;o++)o!==0&&(t+=","),t+=Be(e[o]),t+=":",t+=Zi(n[e[o]]);return t+="}",t},Gl=function(n,e){const t=n.length;if(t<=e)return[n];const o=[];for(let i=0;i<t;i+=e)i+e>t?o.push(n.substring(i,t)):o.push(n.substring(i,i+e));return o};function ke(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Kl=function(n){v(!$i(n),"Invalid JSON number");const e=11,t=52,o=(1<<e-1)-1;let i,s,r,l,a;n===0?(s=0,r=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-o)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),o),s=l+o,r=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(s=0,r=Math.round(n/Math.pow(2,1-o-t))));const d=[];for(a=t;a;a-=1)d.push(r%2?1:0),r=Math.floor(r/2);for(a=e;a;a-=1)d.push(s%2?1:0),s=Math.floor(s/2);d.push(i?1:0),d.reverse();const m=d.join("");let u="";for(a=0;a<64;a+=8){let f=parseInt(m.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},B2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},w2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function S2(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const o=new Error(n+" at "+e._path.toString()+": "+t);return o.code=n.toUpperCase(),o}const I2=new RegExp("^-?(0*)\\d{1,10}$"),k2=-2147483648,D2=2147483647,gr=function(n){if(I2.test(n)){const e=Number(n);if(e>=k2&&e<=D2)return e}return null},ft=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Oe("Exception was thrown by user callback.",t),e},Math.floor(0))}},T2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,t2(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(o=>this.appCheck=o)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,o)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,o):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(o=>o.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,t,o){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=o,this.auth_=null,this.auth_=o.getImmediate({optional:!0}),this.auth_||o.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,o)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,o):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class co{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}co.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="5",Ql="v",Yl="s",Xl="r",Jl="f",ql=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$l="ls",Zl="p",Ei="ac",ea="websocket",na="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t,o,i,s=!1,r="",l=!1,a=!1,d=null){this.secure=t,this.namespace=o,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function R2(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function oa(n,e,t){v(typeof e=="string","typeof type must == string"),v(typeof t=="object","typeof params must == object");let o;if(e===ea)o=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===na)o=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);R2(n)&&(t.ns=n.namespace);const i=[];return ke(t,(s,r)=>{i.push(s+"="+r)}),o+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(){this.counters_={}}incrementCounter(e,t=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return xd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri={},li={};function ns(n){const e=n.toString();return ri[e]||(ri[e]=new O2),ri[e]}function x2(n,e){const t=n.toString();return li[t]||(li[t]=e()),li[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const o=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<o.length;++i)o[i]&&ft(()=>{this.onMessage_(o[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="start",F2="close",H2="pLPCommand",z2="pRTLPCB",ia="id",sa="pw",ra="ser",V2="cb",W2="seg",j2="ts",G2="d",K2="dframe",la=1870,aa=30,Q2=la-aa,Y2=25e3,X2=3e4;class ot{constructor(e,t,o,i,s,r,l){this.connId=e,this.repoInfo=t,this.applicationId=o,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zt(e),this.stats_=ns(t),this.urlFn=a=>(this.appCheckToken&&(a[Ei]=this.appCheckToken),oa(t,na,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new L2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(X2)),U2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ts((...s)=>{const[r,l,a,d,m]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,r===Ar)this.id=l,this.password=a;else if(r===F2)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+r)},(...s)=>{const[r,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(r,l)},()=>{this.onClosed_()},this.urlFn);const o={};o[Ar]="t",o[ra]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(o[V2]=this.scriptTagHolder.uniqueCallbackIdentifier),o[Ql]=es,this.transportSessionId&&(o[Yl]=this.transportSessionId),this.lastSessionId&&(o[$l]=this.lastSessionId),this.applicationId&&(o[Zl]=this.applicationId),this.appCheckToken&&(o[Ei]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&ql.test(location.hostname)&&(o[Xl]=Jl);const i=this.urlFn(o);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ot.forceAllow_=!0}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){return ot.forceAllow_?!0:!ot.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!B2()&&!w2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const o=wl(t),i=Gl(o,Q2);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const o={};o[K2]="t",o[ia]=e,o[sa]=t,this.myDisconnFrame.src=this.urlFn(o),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Be(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ts{constructor(e,t,o,i){this.onDisconnect=o,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=v2(),window[H2+this.uniqueCallbackIdentifier]=e,window[z2+this.uniqueCallbackIdentifier]=t,this.myIFrame=ts.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const r="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(l){Ie("frame writing exception"),l.stack&&Ie(l.stack),Ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch(t){const o=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+o+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ia]=this.myID,e[sa]=this.myPW,e[ra]=this.currentSerial;let t=this.urlFn(e),o="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+aa+o.length<=la;){const r=this.pendingSegs.shift();o=o+"&"+W2+i+"="+r.seg+"&"+j2+i+"="+r.ts+"&"+G2+i+"="+r.d,i++}return t=t+o,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,o){this.pendingSegs.push({seg:e,ts:t,d:o}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const o=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(o,Math.floor(Y2)),s=()=>{clearTimeout(i),o()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const o=this.myIFrame.doc.createElement("script");o.type="text/javascript",o.async=!0,o.src=e,o.onload=o.onreadystatechange=function(){const i=o.readyState;(!i||i==="loaded"||i==="complete")&&(o.onload=o.onreadystatechange=null,o.parentNode&&o.parentNode.removeChild(o),t())},o.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(o)}catch(o){}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=16384,q2=45e3;let vo=null;typeof MozWebSocket!="undefined"?vo=MozWebSocket:typeof WebSocket!="undefined"&&(vo=WebSocket);class on{constructor(e,t,o,i,s,r,l){this.connId=e,this.applicationId=o,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zt(this.connId),this.stats_=ns(t),this.connURL=on.connectionURL_(t,r,l,i,o),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,o,i,s){const r={};return r[Ql]=es,typeof location!="undefined"&&location.hostname&&ql.test(location.hostname)&&(r[Xl]=Jl),t&&(r[Yl]=t),o&&(r[$l]=o),i&&(r[Ei]=i),s&&(r[Zl]=s),oa(e,ea,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vn.set("previous_websocket_failure",!0);try{let o;Tl(),this.mySock=new vo(this.connURL,[],o)}catch(o){this.log_("Error instantiating WebSocket.");const i=o.message||o.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=o=>{this.handleIncomingFrame(o)},this.mySock.onerror=o=>{this.log_("WebSocket error.  Closing connection.");const i=o.message||o.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,o=navigator.userAgent.match(t);o&&o.length>1&&parseFloat(o[1])<4.4&&(e=!0)}return!e&&vo!==null&&!on.forceDisallow_}static previouslyFailed(){return Vn.isInMemoryStorage||Vn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const o=Ft(t);this.onMessage(o)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const o=this.extractFrameCount_(t);o!==null&&this.appendFrame_(o)}}send(e){this.resetKeepAlive();const t=Be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const o=Gl(t,J2);o.length>1&&this.sendString_(String(o.length));for(let i=0;i<o.length;i++)this.sendString_(o[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(q2))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}on.responsesRequiredToBeHealthy=2;on.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{static get ALL_TRANSPORTS(){return[ot,on]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=on&&on.isAvailable();let o=t&&!on.previouslyFailed();if(e.webSocketOnly&&(t||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),o=!0),o)this.transports_=[on];else{const i=this.transports_=[];for(const s of Vt.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Vt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=6e4,Z2=5e3,e0=10*1024,n0=100*1024,ai="t",_r="d",t0="s",vr="r",o0="e",Pr="o",Cr="a",Ur="n",Er="p",i0="h";class s0{constructor(e,t,o,i,s,r,l,a,d,m){this.id=e,this.repoInfo_=t,this.applicationId_=o,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=l,this.onDisconnect_=a,this.onKill_=d,this.lastSessionId=m,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zt("c:"+this.id+":"),this.transportManager_=new Vt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),o=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,o)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Nt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>n0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>e0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ai in e){const t=e[ai];t===Cr?this.upgradeIfSecondaryHealthy_():t===vr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Pr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Bt("t",e),o=Bt("d",e);if(t==="c")this.onSecondaryControl_(o);else if(t==="d")this.pendingDataMessages.push(o);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Er,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ur,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Bt("t",e),o=Bt("d",e);t==="c"?this.onControl_(o):t==="d"&&this.onDataMessage_(o)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Bt(ai,e);if(_r in e){const o=e[_r];if(t===i0){const i={...o};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Ur){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===t0?this.onConnectionShutdown_(o):t===vr?this.onReset_(o):t===o0?Ui("Server Error: "+o):t===Pr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ui("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,o=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),es!==o&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),o=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,o),Nt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Z2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Er,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{put(e,t,o,i){}merge(e,t,o,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,o){}onDisconnectMerge(e,t,o){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const o=[...this.listeners_[e]];for(let i=0;i<o.length;i++)o[i].callback.apply(o[i].context,t)}}on(e,t,o){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:o});const i=this.getInitialEvent(e);i&&t.apply(o,i)}off(e,t,o){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!o||o===i[s].context)){i.splice(s,1);return}}validateEventType_(e){v(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends da{static getInstance(){return new Po}constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Dl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=32,wr=768;class ee{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let o=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[o]=this.pieces_[i],o++);this.pieces_.length=o,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function q(){return new ee("")}function F(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Dn(n){return n.pieces_.length-n.pieceNum_}function ae(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ee(n.pieces_,e)}function os(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function r0(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Wt(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ha(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ee(e,0)}function ue(n,e){const t=[];for(let o=n.pieceNum_;o<n.pieces_.length;o++)t.push(n.pieces_[o]);if(e instanceof ee)for(let o=e.pieceNum_;o<e.pieces_.length;o++)t.push(e.pieces_[o]);else{const o=e.split("/");for(let i=0;i<o.length;i++)o[i].length>0&&t.push(o[i])}return new ee(t,0)}function H(n){return n.pieceNum_>=n.pieces_.length}function Le(n,e){const t=F(n),o=F(e);if(t===null)return e;if(t===o)return Le(ae(n),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function l0(n,e){const t=Wt(n,0),o=Wt(e,0);for(let i=0;i<t.length&&i<o.length;i++){const s=Jn(t[i],o[i]);if(s!==0)return s}return t.length===o.length?0:t.length<o.length?-1:1}function is(n,e){if(Dn(n)!==Dn(e))return!1;for(let t=n.pieceNum_,o=e.pieceNum_;t<=n.pieces_.length;t++,o++)if(n.pieces_[t]!==e.pieces_[o])return!1;return!0}function Je(n,e){let t=n.pieceNum_,o=e.pieceNum_;if(Dn(n)>Dn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[o])return!1;++t,++o}return!0}class a0{constructor(e,t){this.errorPrefix_=t,this.parts_=Wt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let o=0;o<this.parts_.length;o++)this.byteLength_+=Oo(this.parts_[o]);ua(this)}}function c0(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Oo(e),ua(n)}function d0(n){const e=n.parts_.pop();n.byteLength_-=Oo(e),n.parts_.length>0&&(n.byteLength_-=1)}function ua(n){if(n.byteLength_>wr)throw new Error(n.errorPrefix_+"has a key path longer than "+wr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Br)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Br+") or object contains a cycle "+Hn(n))}function Hn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends da{static getInstance(){return new ss}constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const o=!document[e];o!==this.visible_&&(this.visible_=o,this.trigger("visible",o))},!1)}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=1e3,h0=60*5*1e3,Sr=30*1e3,u0=1.3,m0=3e4,p0="server_kill",Ir=3;class yn extends ca{constructor(e,t,o,i,s,r,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=o,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=yn.nextPersistentConnectionId_++,this.log_=Zt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wt,this.maxReconnectDelay_=h0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Tl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ss.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Po.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,o){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Be(s)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),o&&(this.requestCBHash_[i]=o)}get(e){this.initConnection_();const t=new Jt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:r=>{const l=r.d;r.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,o,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:o};this.listens.get(r).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,o=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(o)})}sendListen_(e){const t=e.query,o=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+o+" for "+i);const s={p:o},r="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(r,s,l=>{const a=l.d,d=l.s;yn.warnOnListenWarnings_(a,t),(this.listens.get(o)&&this.listens.get(o).get(i))===e&&(this.log_("listen response",l),d!=="ok"&&this.removeListen_(o,i),e.onComplete&&e.onComplete(d,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&un(e,"w")){const o=lt(e,"w");if(Array.isArray(o)&&~o.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||e1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Zd(e)?"auth":"gauth",o={cred:e};this.authOverride_===null?o.noauth=!0:typeof this.authOverride_=="object"&&(o.authvar=this.authOverride_),this.sendRequest(t,o,i=>{const s=i.s,r=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,o=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,o)})}unlisten(e,t){const o=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+o+" "+i),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(o,i)&&this.connected_&&this.sendUnlisten_(o,i,e._queryObject,t)}sendUnlisten_(e,t,o,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},r="n";i&&(s.q=o,s.t=i),this.sendRequest(r,s)}onDisconnectPut(e,t,o){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,o):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:o})}onDisconnectMerge(e,t,o){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,o):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:o})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,o,i){const s={p:t,d:o};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,r=>{i&&setTimeout(()=>{i(r.s,r.d)},Math.floor(0))})}put(e,t,o,i){this.putInternal("p",e,t,o,i)}merge(e,t,o,i){this.putInternal("m",e,t,o,i)}putInternal(e,t,o,i,s){this.initConnection_();const r={p:t,d:o};s!==void 0&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,o=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,o,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,o=>{if(o.s!=="ok"){const s=o.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const t=e.r,o=this.requestCBHash_[t];o&&(delete this.requestCBHash_[t],o(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ui("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>m0&&(this.reconnectDelay_=wt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*u0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),o=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yn.nextConnectionId_++,s=this.lastSessionId;let r=!1,l=null;const a=function(){l?l.close():(r=!0,o())},d=function(u){v(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:d};const m=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(m),this.appCheckTokenProvider_.getToken(m)]);r?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,l=new s0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,o,b=>{Oe(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(p0)},s))}catch(u){this.log_("Failed to get token: "+u),r||(this.repoInfo_.nodeAdmin&&Oe(u),a())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ir(this.interruptReasons_)&&(this.reconnectDelay_=wt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let o;t?o=t.map(s=>Zi(s)).join("$"):o="default";const i=this.removeListen_(e,o);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const o=new ee(e).toString();let i;if(this.listens.has(o)){const s=this.listens.get(o);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(o)}else i=void 0;return i}onAuthRevoked_(e,t){Ie("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ir&&(this.reconnectDelay_=Sr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ie("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ir&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Vl.replace(/\./g,"-")]=1,Dl()?e["framework.cordova"]=1:Qd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Po.getInstance().currentlyOnline();return ir(this.interruptReasons_)&&e}}yn.nextPersistentConnectionId_=0;yn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new z(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const o=new z(jn,e),i=new z(jn,t);return this.compare(o,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro;class ma extends xo{static get __EMPTY_NODE(){return ro}static set __EMPTY_NODE(e){ro=e}compare(e,t){return Jn(e.name,t.name)}isDefinedOn(e){throw pt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return z.MIN}maxPost(){return new z(kn,ro)}makePost(e,t){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,ro)}toString(){return".key"}}const Wn=new ma;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,o,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(e=e,r=t?o(e.key,t):1,i&&(r*=-1),r<0)this.isReverse_?e=e.left:e=e.right;else if(r===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,t,o,i,s){this.key=e,this.value=t,this.color=o!=null?o:Ue.RED,this.left=i!=null?i:Fe.EMPTY_NODE,this.right=s!=null?s:Fe.EMPTY_NODE}copy(e,t,o,i,s){return new Ue(e!=null?e:this.key,t!=null?t:this.value,o!=null?o:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,o){let i=this;const s=o(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,o),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,o)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let o,i;if(o=this,t(e,o.key)<0)!o.left.isEmpty()&&!o.left.isRed_()&&!o.left.left.isRed_()&&(o=o.moveRedLeft_()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed_()&&(o=o.rotateRight_()),!o.right.isEmpty()&&!o.right.isRed_()&&!o.right.left.isRed_()&&(o=o.moveRedRight_()),t(e,o.key)===0){if(o.right.isEmpty())return Fe.EMPTY_NODE;i=o.right.min_(),o=o.copy(i.key,i.value,null,null,o.right.removeMin_())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class f0{copy(e,t,o,i,s){return this}insert(e,t,o){return new Ue(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,t=Fe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Fe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let t,o=this.root_;for(;!o.isEmpty();){if(t=this.comparator_(e,o.key),t===0)return o.value;t<0?o=o.left:t>0&&(o=o.right)}return null}getPredecessorKey(e){let t,o=this.root_,i=null;for(;!o.isEmpty();)if(t=this.comparator_(e,o.key),t===0){if(o.left.isEmpty())return i?i.key:null;for(o=o.left;!o.right.isEmpty();)o=o.right;return o.key}else t<0?o=o.left:t>0&&(i=o,o=o.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new lo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new lo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new lo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new lo(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new f0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(n,e){return Jn(n.name,e.name)}function rs(n,e){return Jn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;function b0(n){Bi=n}const pa=function(n){return typeof n=="number"?"number:"+Kl(n):"string:"+n},fa=function(n){if(n.isLeafNode()){const e=n.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else v(n===Bi||n.isEmpty(),"priority of unexpected type.");v(n===Bi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr;class Ce{static set __childrenNodeConstructor(e){kr=e}static get __childrenNodeConstructor(){return kr}constructor(e,t=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),fa(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:F(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const o=F(e);return o===null?t:t.isEmpty()&&o!==".priority"?this:(v(o!==".priority"||Dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(o,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pa(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Kl(this.value_):e+=this.value_,this.lazyHash_=jl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,o=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(t),s=Ce.VALUE_TYPE_ORDER.indexOf(o);return v(i>=0,"Unknown leaf type: "+t),v(s>=0,"Unknown leaf type: "+o),i===s?o==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya,ba;function g0(n){ya=n}function A0(n){ba=n}class _0 extends xo{compare(e,t){const o=e.node.getPriority(),i=t.node.getPriority(),s=o.compareTo(i);return s===0?Jn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return z.MIN}maxPost(){return new z(kn,new Ce("[PRIORITY-POST]",ba))}makePost(e,t){const o=ya(e);return new z(t,new Ce("[PRIORITY-POST]",o))}toString(){return".priority"}}const he=new _0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=Math.log(2);class P0{constructor(e){const t=s=>parseInt(Math.log(s)/v0,10),o=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=o(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Co=function(n,e,t,o){n.sort(e);const i=function(a,d){const m=d-a;let u,f;if(m===0)return null;if(m===1)return u=n[a],f=t?t(u):u,new Ue(f,u.node,Ue.BLACK,null,null);{const b=parseInt(m/2,10)+a,g=i(a,b),w=i(b+1,d);return u=n[b],f=t?t(u):u,new Ue(f,u.node,Ue.BLACK,g,w)}},s=function(a){let d=null,m=null,u=n.length;const f=function(g,w){const D=u-g,U=u;u-=g;const j=i(D+1,U),N=n[D],Q=t?t(N):N;b(new Ue(Q,N.node,w,null,j))},b=function(g){d?(d.left=g,d=g):(m=g,d=g)};for(let g=0;g<a.count;++g){const w=a.nextBitIsOne(),D=Math.pow(2,a.count-(g+1));w?f(D,Ue.BLACK):(f(D,Ue.BLACK),f(D,Ue.RED))}return m},r=new P0(n.length),l=s(r);return new Fe(o||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;const et={};class fn{static get Default(){return v(et&&he,"ChildrenNode.ts has not been loaded"),ci=ci||new fn({".priority":et},{".priority":he}),ci}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=lt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Fe?t:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,t){v(e!==Wn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const o=[];let i=!1;const s=t.getIterator(z.Wrap);let r=s.getNext();for(;r;)i=i||e.isDefinedOn(r.node),o.push(r),r=s.getNext();let l;i?l=Co(o,e.getCompare()):l=et;const a=e.toString(),d={...this.indexSet_};d[a]=e;const m={...this.indexes_};return m[a]=l,new fn(m,d)}addToIndexes(e,t){const o=bo(this.indexes_,(i,s)=>{const r=lt(this.indexSet_,s);if(v(r,"Missing index implementation for "+s),i===et)if(r.isDefinedOn(e.node)){const l=[],a=t.getIterator(z.Wrap);let d=a.getNext();for(;d;)d.name!==e.name&&l.push(d),d=a.getNext();return l.push(e),Co(l,r.getCompare())}else return et;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new fn(o,this.indexSet_)}removeFromIndexes(e,t){const o=bo(this.indexes_,i=>{if(i===et)return i;{const s=t.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new fn(o,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St;class M{static get EMPTY_NODE(){return St||(St=new M(new Fe(rs),null,fn.Default))}constructor(e,t,o){this.children_=e,this.priorityNode_=t,this.indexMap_=o,this.lazyHash_=null,this.priorityNode_&&fa(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||St}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?St:t}}getChild(e){const t=F(e);return t===null?this:this.getImmediateChild(t).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(v(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const o=new z(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(o,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(o,this.children_));const r=i.isEmpty()?St:this.priorityNode_;return new M(i,r,s)}}updateChild(e,t){const o=F(e);if(o===null)return t;{v(F(e)!==".priority"||Dn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(o).updateChild(ae(e),t);return this.updateImmediateChild(o,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let o=0,i=0,s=!0;if(this.forEachChild(he,(r,l)=>{t[r]=l.val(e),o++,s&&M.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1}),!e&&s&&i<2*o){const r=[];for(const l in t)r[l]=t[l];return r}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pa(this.getPriority().val())+":"),this.forEachChild(he,(t,o)=>{const i=o.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":jl(e)}return this.lazyHash_}getPredecessorChildName(e,t,o){const i=this.resolveIndex_(o);if(i){const s=i.getPredecessorKey(new z(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const o=t.minKey();return o&&o.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new z(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const o=t.maxKey();return o&&o.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new z(t,this.children_.get(t)):null}forEachChild(e,t){const o=this.resolveIndex_(e);return o?o.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const o=this.resolveIndex_(t);if(o)return o.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const o=this.resolveIndex_(t);if(o)return o.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===eo?-1:0}withIndex(e){if(e===Wn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const o=this.getIterator(he),i=t.getIterator(he);let s=o.getNext(),r=i.getNext();for(;s&&r;){if(s.name!==r.name||!s.node.equals(r.node))return!1;s=o.getNext(),r=i.getNext()}return s===null&&r===null}else return!1;else return!1}}resolveIndex_(e){return e===Wn?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class C0 extends M{constructor(){super(new Fe(rs),M.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const eo=new C0;Object.defineProperties(z,{MIN:{value:new z(jn,M.EMPTY_NODE)},MAX:{value:new z(kn,eo)}});ma.__EMPTY_NODE=M.EMPTY_NODE;Ce.__childrenNodeConstructor=M;b0(eo);A0(eo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=!0;function Ee(n,e=null){if(n===null)return M.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ce(t,Ee(e))}if(!(n instanceof Array)&&U0){const t=[];let o=!1;if(ke(n,(r,l)=>{if(r.substring(0,1)!=="."){const a=Ee(l);a.isEmpty()||(o=o||!a.getPriority().isEmpty(),t.push(new z(r,a)))}}),t.length===0)return M.EMPTY_NODE;const s=Co(t,y0,r=>r.name,rs);if(o){const r=Co(t,he.getCompare());return new M(s,Ee(e),new fn({".priority":r},{".priority":he}))}else return new M(s,Ee(e),fn.Default)}else{let t=M.EMPTY_NODE;return ke(n,(o,i)=>{if(un(n,o)&&o.substring(0,1)!=="."){const s=Ee(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(o,s))}}),t.updatePriority(Ee(e))}}g0(Ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends xo{constructor(e){super(),this.indexPath_=e,v(!H(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const o=this.extractChild(e.node),i=this.extractChild(t.node),s=o.compareTo(i);return s===0?Jn(e.name,t.name):s}makePost(e,t){const o=Ee(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,o);return new z(t,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,eo);return new z(kn,e)}toString(){return Wt(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0 extends xo{compare(e,t){const o=e.node.compareTo(t.node);return o===0?Jn(e.name,t.name):o}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,t){const o=Ee(e);return new z(t,o)}toString(){return".value"}}const ga=new E0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n){return{type:"value",snapshotNode:n}}function at(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function jt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Gt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function B0(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.index_=e}updateChild(e,t,o,i,s,r){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(o.getChild(i))&&l.isEmpty()===o.isEmpty()||(r!=null&&(o.isEmpty()?e.hasChild(t)?r.trackChildChange(jt(t,l)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?r.trackChildChange(at(t,o)):r.trackChildChange(Gt(t,o,l))),e.isLeafNode()&&o.isEmpty())?e:e.updateImmediateChild(t,o).withIndex(this.index_)}updateFullNode(e,t,o){return o!=null&&(e.isLeafNode()||e.forEachChild(he,(i,s)=>{t.hasChild(i)||o.trackChildChange(jt(i,s))}),t.isLeafNode()||t.forEachChild(he,(i,s)=>{if(e.hasChild(i)){const r=e.getImmediateChild(i);r.equals(s)||o.trackChildChange(Gt(i,s,r))}else o.trackChildChange(at(i,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.indexedFilter_=new as(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Kt.getStartPost_(e),this.endPost_=Kt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,o=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&o}updateChild(e,t,o,i,s,r){return this.matches(new z(t,o))||(o=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,o,i,s,r)}updateFullNode(e,t,o){t.isLeafNode()&&(t=M.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const s=this;return t.forEachChild(he,(r,l)=>{s.matches(new z(r,l))||(i=i.updateImmediateChild(r,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,o)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const o=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?o<=0:o<0},this.withinEndPost=t=>{const o=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?o<=0:o<0},this.rangedFilter_=new Kt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,o,i,s,r){return this.rangedFilter_.matches(new z(t,o))||(o=M.EMPTY_NODE),e.getImmediateChild(t).equals(o)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,o,i,s,r):this.fullLimitUpdateChild_(e,t,o,s,r)}updateFullNode(e,t,o){let i;if(t.isLeafNode()||t.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let r=0;for(;s.hasNext()&&r<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),r++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let r=0;for(;s.hasNext();){const l=s.getNext();r<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?r++:i=i.updateImmediateChild(l.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,o)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,o,i,s){let r;if(this.reverse_){const u=this.index_.getCompare();r=(f,b)=>u(b,f)}else r=this.index_.getCompare();const l=e;v(l.numChildren()===this.limit_,"");const a=new z(t,o),d=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),m=this.rangedFilter_.matches(a);if(l.hasChild(t)){const u=l.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,d,this.reverse_);for(;f!=null&&(f.name===t||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const b=f==null?1:r(f,a);if(m&&!o.isEmpty()&&b>=0)return s!=null&&s.trackChildChange(Gt(t,o,u)),l.updateImmediateChild(t,o);{s!=null&&s.trackChildChange(jt(t,u));const w=l.updateImmediateChild(t,M.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(at(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return o.isEmpty()?e:m&&r(d,a)>=0?(s!=null&&(s.trackChildChange(jt(d.name,d.node)),s.trackChildChange(at(t,o))),l.updateImmediateChild(t,o).updateImmediateChild(d.name,M.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jn}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new cs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function S0(n){return n.loadsAllData()?new as(n.getIndex()):n.hasLimit()?new w0(n):new Kt(n)}function I0(n,e){const t=n.copy();return t.index_=e,t}function Dr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===he?t="$priority":n.index_===ga?t="$value":n.index_===Wn?t="$key":(v(n.index_ instanceof ls,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Be(t),n.startSet_){const o=n.startAfterSet_?"startAfter":"startAt";e[o]=Be(n.indexStartValue_),n.startNameSet_&&(e[o]+=","+Be(n.indexStartName_))}if(n.endSet_){const o=n.endBeforeSet_?"endBefore":"endAt";e[o]=Be(n.indexEndValue_),n.endNameSet_&&(e[o]+=","+Be(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Tr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==he&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends ca{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,o,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=o,this.appCheckTokenProvider_=i,this.log_=Zt("p:rest:"),this.listens_={}}listen(e,t,o,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Uo.getListenId_(e,o),l={};this.listens_[r]=l;const a=Dr(e._queryParams);this.restRequest_(s+".json",a,(d,m)=>{let u=m;if(d===404&&(u=null,d=null),d===null&&this.onDataUpdate_(s,u,!1,o),lt(this.listens_,r)===l){let f;d?d===401?f="permission_denied":f="rest_error:"+d:f="ok",i(f,null)}})}unlisten(e,t){const o=Uo.getListenId_(e,t);delete this.listens_[o]}get(e){const t=Dr(e._queryParams),o=e._path.toString(),i=new Jt;return this.restRequest_(o+".json",t,(s,r)=>{let l=r;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(o,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},o){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+n1(t);this.log_("Sending REST request for "+r);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(o&&l.readyState===4){this.log_("REST Response for "+r+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ft(l.responseText)}catch(d){Oe("Failed to parse JSON response for "+r+": "+l.responseText)}o(null,a)}else l.status!==401&&l.status!==404&&Oe("Got unsuccessful REST response for "+r+" Status: "+l.status),o(l.status);o=null}},l.open("GET",r,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(){return{value:null,children:new Map}}function _a(n,e,t){if(H(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const o=F(e);n.children.has(o)||n.children.set(o,Eo());const i=n.children.get(o);e=ae(e),_a(i,e,t)}}function wi(n,e,t){n.value!==null?t(e,n.value):D0(n,(o,i)=>{const s=new ee(e.toString()+"/"+o);wi(i,s,t)})}function D0(n,e){n.children.forEach((t,o)=>{e(o,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&ke(this.last_,(o,i)=>{t[o]=t[o]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=10*1e3,N0=30*1e3,M0=5*60*1e3;class R0{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new T0(e);const o=Nr+(N0-Nr)*Math.random();Nt(this.reportStats_.bind(this),Math.floor(o))}reportStats_(){const e=this.statsListener_.get(),t={};let o=!1;ke(e,(i,s)=>{s>0&&un(this.statsToReport_,i)&&(t[i]=s,o=!0)}),o&&this.server_.reportStats(t),Nt(this.reportStats_.bind(this),Math.floor(Math.random()*2*M0))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rn||(rn={}));function ds(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function us(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t,o){this.path=e,this.affectedTree=t,this.revert=o,this.type=rn.ACK_USER_WRITE,this.source=ds()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ee(e));return new Bo(q(),t,this.revert)}}else return v(F(this.path)===e,"operationForChild called for unrelated child."),new Bo(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.source=e,this.path=t,this.type=rn.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new Qt(this.source,q()):new Qt(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t,o){this.source=e,this.path=t,this.snap=o,this.type=rn.OVERWRITE}operationForChild(e){return H(this.path)?new Gn(this.source,q(),this.snap.getImmediateChild(e)):new Gn(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t,o){this.source=e,this.path=t,this.children=o,this.type=rn.MERGE}operationForChild(e){if(H(this.path)){const t=this.children.subtree(new ee(e));return t.isEmpty()?null:t.value?new Gn(this.source,q(),t.value):new ct(this.source,q(),t)}else return v(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ct(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t,o){this.node_=e,this.fullyInitialized_=t,this.filtered_=o}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const t=F(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function x0(n,e,t,o){const i=[],s=[];return e.forEach(r=>{r.type==="child_changed"&&n.index_.indexedValueChanged(r.oldSnap,r.snapshotNode)&&s.push(B0(r.childName,r.snapshotNode))}),It(n,i,"child_removed",e,o,t),It(n,i,"child_added",e,o,t),It(n,i,"child_moved",s,o,t),It(n,i,"child_changed",e,o,t),It(n,i,"value",e,o,t),i}function It(n,e,t,o,i,s){const r=o.filter(l=>l.type===t);r.sort((l,a)=>F0(n,l,a)),r.forEach(l=>{const a=L0(n,l,s);i.forEach(d=>{d.respondsTo(l.type)&&e.push(d.createEvent(a,n.query_))})})}function L0(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function F0(n,e,t){if(e.childName==null||t.childName==null)throw pt("Should only compare child_ events.");const o=new z(e.childName,e.snapshotNode),i=new z(t.childName,t.snapshotNode);return n.index_.compare(o,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n,e){return{eventCache:n,serverCache:e}}function Mt(n,e,t,o){return Lo(new Kn(e,t,o),n.serverCache)}function va(n,e,t,o){return Lo(n.eventCache,new Kn(e,t,o))}function Si(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Qn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;const H0=()=>(di||(di=new Fe(E2)),di);class re{static fromObject(e){let t=new re(null);return ke(e,(o,i)=>{t=t.set(new ee(o),i)}),t}constructor(e,t=H0()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:q(),value:this.value};if(H(e))return null;{const o=F(e),i=this.children.get(o);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ae(e),t);return s!=null?{path:ue(new ee(o),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const t=F(e),o=this.children.get(t);return o!==null?o.subtree(ae(e)):new re(null)}}set(e,t){if(H(e))return new re(t,this.children);{const o=F(e),s=(this.children.get(o)||new re(null)).set(ae(e),t),r=this.children.insert(o,s);return new re(this.value,r)}}remove(e){if(H(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const t=F(e),o=this.children.get(t);if(o){const i=o.remove(ae(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new re(null):new re(this.value,s)}else return this}}get(e){if(H(e))return this.value;{const t=F(e),o=this.children.get(t);return o?o.get(ae(e)):null}}setTree(e,t){if(H(e))return t;{const o=F(e),s=(this.children.get(o)||new re(null)).setTree(ae(e),t);let r;return s.isEmpty()?r=this.children.remove(o):r=this.children.insert(o,s),new re(this.value,r)}}fold(e){return this.fold_(q(),e)}fold_(e,t){const o={};return this.children.inorderTraversal((i,s)=>{o[i]=s.fold_(ue(e,i),t)}),t(e,this.value,o)}findOnPath(e,t){return this.findOnPath_(e,q(),t)}findOnPath_(e,t,o){const i=this.value?o(t,this.value):!1;if(i)return i;if(H(e))return null;{const s=F(e),r=this.children.get(s);return r?r.findOnPath_(ae(e),ue(t,s),o):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,q(),t)}foreachOnPath_(e,t,o){if(H(e))return this;{this.value&&o(t,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(ae(e),ue(t,i),o):new re(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,t){this.children.inorderTraversal((o,i)=>{i.foreach_(ue(e,o),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,o)=>{o.value&&e(t,o.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.writeTree_=e}static empty(){return new ln(new re(null))}}function Rt(n,e,t){if(H(e))return new ln(new re(t));{const o=n.writeTree_.findRootMostValueAndPath(e);if(o!=null){const i=o.path;let s=o.value;const r=Le(i,e);return s=s.updateChild(r,t),new ln(n.writeTree_.set(i,s))}else{const i=new re(t),s=n.writeTree_.setTree(e,i);return new ln(s)}}}function Ii(n,e,t){let o=n;return ke(t,(i,s)=>{o=Rt(o,ue(e,i),s)}),o}function Mr(n,e){if(H(e))return ln.empty();{const t=n.writeTree_.setTree(e,new re(null));return new ln(t)}}function ki(n,e){return qn(n,e)!=null}function qn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Le(t.path,e)):null}function Rr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(he,(o,i)=>{e.push(new z(o,i))}):n.writeTree_.children.inorderTraversal((o,i)=>{i.value!=null&&e.push(new z(o,i.value))}),e}function In(n,e){if(H(e))return n;{const t=qn(n,e);return t!=null?new ln(new re(t)):new ln(n.writeTree_.subtree(e))}}function Di(n){return n.writeTree_.isEmpty()}function dt(n,e){return Pa(q(),n.writeTree_,e)}function Pa(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let o=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(v(s.value!==null,"Priority writes must always be leaf nodes"),o=s.value):t=Pa(ue(n,i),s,t)}),!t.getChild(n).isEmpty()&&o!==null&&(t=t.updateChild(ue(n,".priority"),o)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n,e){return Ba(e,n)}function z0(n,e,t,o,i){v(o>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:o,visible:i}),i&&(n.visibleWrites=Rt(n.visibleWrites,e,t)),n.lastWriteId=o}function V0(n,e,t,o){v(o>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:o,visible:!0}),n.visibleWrites=Ii(n.visibleWrites,e,t),n.lastWriteId=o}function W0(n,e){for(let t=0;t<n.allWrites.length;t++){const o=n.allWrites[t];if(o.writeId===e)return o}return null}function j0(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);v(t>=0,"removeWrite called with nonexistent writeId.");const o=n.allWrites[t];n.allWrites.splice(t,1);let i=o.visible,s=!1,r=n.allWrites.length-1;for(;i&&r>=0;){const l=n.allWrites[r];l.visible&&(r>=t&&G0(l,o.path)?i=!1:Je(o.path,l.path)&&(s=!0)),r--}if(i){if(s)return K0(n),!0;if(o.snap)n.visibleWrites=Mr(n.visibleWrites,o.path);else{const l=o.children;ke(l,a=>{n.visibleWrites=Mr(n.visibleWrites,ue(o.path,a))})}return!0}else return!1}function G0(n,e){if(n.snap)return Je(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Je(ue(n.path,t),e))return!0;return!1}function K0(n){n.visibleWrites=Ca(n.allWrites,Q0,q()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Q0(n){return n.visible}function Ca(n,e,t){let o=ln.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const r=s.path;let l;if(s.snap)Je(t,r)?(l=Le(t,r),o=Rt(o,l,s.snap)):Je(r,t)&&(l=Le(r,t),o=Rt(o,q(),s.snap.getChild(l)));else if(s.children){if(Je(t,r))l=Le(t,r),o=Ii(o,l,s.children);else if(Je(r,t))if(l=Le(r,t),H(l))o=Ii(o,q(),s.children);else{const a=lt(s.children,F(l));if(a){const d=a.getChild(ae(l));o=Rt(o,q(),d)}}}else throw pt("WriteRecord should have .snap or .children")}}return o}function Ua(n,e,t,o,i){if(!o&&!i){const s=qn(n.visibleWrites,e);if(s!=null)return s;{const r=In(n.visibleWrites,e);if(Di(r))return t;if(t==null&&!ki(r,q()))return null;{const l=t||M.EMPTY_NODE;return dt(r,l)}}}else{const s=In(n.visibleWrites,e);if(!i&&Di(s))return t;if(!i&&t==null&&!ki(s,q()))return null;{const r=function(d){return(d.visible||i)&&(!o||!~o.indexOf(d.writeId))&&(Je(d.path,e)||Je(e,d.path))},l=Ca(n.allWrites,r,e),a=t||M.EMPTY_NODE;return dt(l,a)}}}function Y0(n,e,t){let o=M.EMPTY_NODE;const i=qn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(he,(s,r)=>{o=o.updateImmediateChild(s,r)}),o;if(t){const s=In(n.visibleWrites,e);return t.forEachChild(he,(r,l)=>{const a=dt(In(s,new ee(r)),l);o=o.updateImmediateChild(r,a)}),Rr(s).forEach(r=>{o=o.updateImmediateChild(r.name,r.node)}),o}else{const s=In(n.visibleWrites,e);return Rr(s).forEach(r=>{o=o.updateImmediateChild(r.name,r.node)}),o}}function X0(n,e,t,o,i){v(o||i,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,t);if(ki(n.visibleWrites,s))return null;{const r=In(n.visibleWrites,s);return Di(r)?i.getChild(t):dt(r,i.getChild(t))}}function J0(n,e,t,o){const i=ue(e,t),s=qn(n.visibleWrites,i);if(s!=null)return s;if(o.isCompleteForChild(t)){const r=In(n.visibleWrites,i);return dt(r,o.getNode().getImmediateChild(t))}else return null}function q0(n,e){return qn(n.visibleWrites,e)}function $0(n,e,t,o,i,s,r){let l;const a=In(n.visibleWrites,e),d=qn(a,q());if(d!=null)l=d;else if(t!=null)l=dt(a,t);else return[];if(l=l.withIndex(r),!l.isEmpty()&&!l.isLeafNode()){const m=[],u=r.getCompare(),f=s?l.getReverseIteratorFrom(o,r):l.getIteratorFrom(o,r);let b=f.getNext();for(;b&&m.length<i;)u(b,o)!==0&&m.push(b),b=f.getNext();return m}else return[]}function Z0(){return{visibleWrites:ln.empty(),allWrites:[],lastWriteId:-1}}function wo(n,e,t,o){return Ua(n.writeTree,n.treePath,e,t,o)}function ps(n,e){return Y0(n.writeTree,n.treePath,e)}function Or(n,e,t,o){return X0(n.writeTree,n.treePath,e,t,o)}function So(n,e){return q0(n.writeTree,ue(n.treePath,e))}function eh(n,e,t,o,i,s){return $0(n.writeTree,n.treePath,e,t,o,i,s)}function fs(n,e,t){return J0(n.writeTree,n.treePath,e,t)}function Ea(n,e){return Ba(ue(n.treePath,e),n.writeTree)}function Ba(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,o=e.childName;v(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),v(o!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(o);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(o,Gt(o,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(o);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(o,jt(o,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(o,at(o,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(o,Gt(o,e.snapshotNode,i.oldSnap));else throw pt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(o,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{getCompleteChild(e){return null}getChildAfterChild(e,t,o){return null}}const wa=new th;class ys{constructor(e,t,o=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=o}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const o=this.optCompleteServerCache_!=null?new Kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fs(this.writes_,e,o)}}getChildAfterChild(e,t,o){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qn(this.viewCache_),s=eh(this.writes_,i,t,1,o,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n){return{filter:n}}function ih(n,e){v(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function sh(n,e,t,o,i){const s=new nh;let r,l;if(t.type===rn.OVERWRITE){const d=t;d.source.fromUser?r=Ti(n,e,d.path,d.snap,o,i,s):(v(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered()&&!H(d.path),r=Io(n,e,d.path,d.snap,o,i,l,s))}else if(t.type===rn.MERGE){const d=t;d.source.fromUser?r=lh(n,e,d.path,d.children,o,i,s):(v(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered(),r=Ni(n,e,d.path,d.children,o,i,l,s))}else if(t.type===rn.ACK_USER_WRITE){const d=t;d.revert?r=dh(n,e,d.path,o,i,s):r=ah(n,e,d.path,d.affectedTree,o,i,s)}else if(t.type===rn.LISTEN_COMPLETE)r=ch(n,e,t.path,o,s);else throw pt("Unknown operation type: "+t.type);const a=s.getChanges();return rh(e,r,a),{viewCache:r,changes:a}}function rh(n,e,t){const o=e.eventCache;if(o.isFullyInitialized()){const i=o.getNode().isLeafNode()||o.getNode().isEmpty(),s=Si(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!o.getNode().equals(s)||!o.getNode().getPriority().equals(s.getPriority()))&&t.push(Aa(Si(e)))}}function Sa(n,e,t,o,i,s){const r=e.eventCache;if(So(o,t)!=null)return e;{let l,a;if(H(t))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=Qn(e),m=d instanceof M?d:M.EMPTY_NODE,u=ps(o,m);l=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const d=wo(o,Qn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const d=F(t);if(d===".priority"){v(Dn(t)===1,"Can't have a priority with additional path components");const m=r.getNode();a=e.serverCache.getNode();const u=Or(o,t,m,a);u!=null?l=n.filter.updatePriority(m,u):l=r.getNode()}else{const m=ae(t);let u;if(r.isCompleteForChild(d)){a=e.serverCache.getNode();const f=Or(o,t,r.getNode(),a);f!=null?u=r.getNode().getImmediateChild(d).updateChild(m,f):u=r.getNode().getImmediateChild(d)}else u=fs(o,d,e.serverCache);u!=null?l=n.filter.updateChild(r.getNode(),d,u,m,i,s):l=r.getNode()}}return Mt(e,l,r.isFullyInitialized()||H(t),n.filter.filtersNodes())}}function Io(n,e,t,o,i,s,r,l){const a=e.serverCache;let d;const m=r?n.filter:n.filter.getIndexedFilter();if(H(t))d=m.updateFullNode(a.getNode(),o,null);else if(m.filtersNodes()&&!a.isFiltered()){const b=a.getNode().updateChild(t,o);d=m.updateFullNode(a.getNode(),b,null)}else{const b=F(t);if(!a.isCompleteForPath(t)&&Dn(t)>1)return e;const g=ae(t),D=a.getNode().getImmediateChild(b).updateChild(g,o);b===".priority"?d=m.updatePriority(a.getNode(),D):d=m.updateChild(a.getNode(),b,D,g,wa,null)}const u=va(e,d,a.isFullyInitialized()||H(t),m.filtersNodes()),f=new ys(i,u,s);return Sa(n,u,t,i,f,l)}function Ti(n,e,t,o,i,s,r){const l=e.eventCache;let a,d;const m=new ys(i,e,s);if(H(t))d=n.filter.updateFullNode(e.eventCache.getNode(),o,r),a=Mt(e,d,!0,n.filter.filtersNodes());else{const u=F(t);if(u===".priority")d=n.filter.updatePriority(e.eventCache.getNode(),o),a=Mt(e,d,l.isFullyInitialized(),l.isFiltered());else{const f=ae(t),b=l.getNode().getImmediateChild(u);let g;if(H(f))g=o;else{const w=m.getCompleteChild(u);w!=null?os(f)===".priority"&&w.getChild(ha(f)).isEmpty()?g=w:g=w.updateChild(f,o):g=M.EMPTY_NODE}if(b.equals(g))a=e;else{const w=n.filter.updateChild(l.getNode(),u,g,f,m,r);a=Mt(e,w,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function xr(n,e){return n.eventCache.isCompleteForChild(e)}function lh(n,e,t,o,i,s,r){let l=e;return o.foreach((a,d)=>{const m=ue(t,a);xr(e,F(m))&&(l=Ti(n,l,m,d,i,s,r))}),o.foreach((a,d)=>{const m=ue(t,a);xr(e,F(m))||(l=Ti(n,l,m,d,i,s,r))}),l}function Lr(n,e,t){return t.foreach((o,i)=>{e=e.updateChild(o,i)}),e}function Ni(n,e,t,o,i,s,r,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,d;H(t)?d=o:d=new re(null).setTree(t,o);const m=e.serverCache.getNode();return d.children.inorderTraversal((u,f)=>{if(m.hasChild(u)){const b=e.serverCache.getNode().getImmediateChild(u),g=Lr(n,b,f);a=Io(n,a,new ee(u),g,i,s,r,l)}}),d.children.inorderTraversal((u,f)=>{const b=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!m.hasChild(u)&&!b){const g=e.serverCache.getNode().getImmediateChild(u),w=Lr(n,g,f);a=Io(n,a,new ee(u),w,i,s,r,l)}}),a}function ah(n,e,t,o,i,s,r){if(So(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(o.value!=null){if(H(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Io(n,e,t,a.getNode().getChild(t),i,s,l,r);if(H(t)){let d=new re(null);return a.getNode().forEachChild(Wn,(m,u)=>{d=d.set(new ee(m),u)}),Ni(n,e,t,d,i,s,l,r)}else return e}else{let d=new re(null);return o.foreach((m,u)=>{const f=ue(t,m);a.isCompleteForPath(f)&&(d=d.set(m,a.getNode().getChild(f)))}),Ni(n,e,t,d,i,s,l,r)}}function ch(n,e,t,o,i){const s=e.serverCache,r=va(e,s.getNode(),s.isFullyInitialized()||H(t),s.isFiltered());return Sa(n,r,t,o,wa,i)}function dh(n,e,t,o,i,s){let r;if(So(o,t)!=null)return e;{const l=new ys(o,e,i),a=e.eventCache.getNode();let d;if(H(t)||F(t)===".priority"){let m;if(e.serverCache.isFullyInitialized())m=wo(o,Qn(e));else{const u=e.serverCache.getNode();v(u instanceof M,"serverChildren would be complete if leaf node"),m=ps(o,u)}m=m,d=n.filter.updateFullNode(a,m,s)}else{const m=F(t);let u=fs(o,m,e.serverCache);u==null&&e.serverCache.isCompleteForChild(m)&&(u=a.getImmediateChild(m)),u!=null?d=n.filter.updateChild(a,m,u,ae(t),l,s):e.eventCache.getNode().hasChild(m)?d=n.filter.updateChild(a,m,M.EMPTY_NODE,ae(t),l,s):d=a,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(r=wo(o,Qn(e)),r.isLeafNode()&&(d=n.filter.updateFullNode(d,r,s)))}return r=e.serverCache.isFullyInitialized()||So(o,q())!=null,Mt(e,d,r,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const o=this.query_._queryParams,i=new as(o.getIndex()),s=S0(o);this.processor_=oh(s);const r=t.serverCache,l=t.eventCache,a=i.updateFullNode(M.EMPTY_NODE,r.getNode(),null),d=s.updateFullNode(M.EMPTY_NODE,l.getNode(),null),m=new Kn(a,r.isFullyInitialized(),i.filtersNodes()),u=new Kn(d,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Lo(u,m),this.eventGenerator_=new O0(this.query_)}get query(){return this.query_}}function uh(n){return n.viewCache_.serverCache.getNode()}function mh(n,e){const t=Qn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!H(e)&&!t.getImmediateChild(F(e)).isEmpty())?t.getChild(e):null}function Fr(n){return n.eventRegistrations_.length===0}function ph(n,e){n.eventRegistrations_.push(e)}function Hr(n,e,t){const o=[];if(t){v(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(s=>{const r=s.createCancelEvent(t,i);r&&o.push(r)})}if(e){let i=[];for(let s=0;s<n.eventRegistrations_.length;++s){const r=n.eventRegistrations_[s];if(!r.matches(e))i.push(r);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return o}function zr(n,e,t,o){e.type===rn.MERGE&&e.source.queryId!==null&&(v(Qn(n.viewCache_),"We should always have a full cache before handling merges"),v(Si(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=sh(n.processor_,i,e,t,o);return ih(n.processor_,s.viewCache),v(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,Ia(n,s.changes,s.viewCache.eventCache.getNode(),null)}function fh(n,e){const t=n.viewCache_.eventCache,o=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(he,(s,r)=>{o.push(at(s,r))}),t.isFullyInitialized()&&o.push(Aa(t.getNode())),Ia(n,o,t.getNode(),e)}function Ia(n,e,t,o){const i=o?[o]:n.eventRegistrations_;return x0(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko;class yh{constructor(){this.views=new Map}}function bh(n){v(!ko,"__referenceConstructor has already been defined"),ko=n}function gh(){return v(ko,"Reference.ts has not been loaded"),ko}function Ah(n){return n.views.size===0}function bs(n,e,t,o){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return v(s!=null,"SyncTree gave us an op for an invalid query."),zr(s,e,t,o)}else{let s=[];for(const r of n.views.values())s=s.concat(zr(r,e,t,o));return s}}function _h(n,e,t,o,i){const s=e._queryIdentifier,r=n.views.get(s);if(!r){let l=wo(t,i?o:null),a=!1;l?a=!0:o instanceof M?(l=ps(t,o),a=!1):(l=M.EMPTY_NODE,a=!1);const d=Lo(new Kn(l,a,!1),new Kn(o,i,!1));return new hh(e,d)}return r}function vh(n,e,t,o,i,s){const r=_h(n,e,o,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,r),ph(r,t),fh(r,t)}function Ph(n,e,t,o){const i=e._queryIdentifier,s=[];let r=[];const l=Tn(n);if(i==="default")for(const[a,d]of n.views.entries())r=r.concat(Hr(d,t,o)),Fr(d)&&(n.views.delete(a),d.query._queryParams.loadsAllData()||s.push(d.query));else{const a=n.views.get(i);a&&(r=r.concat(Hr(a,t,o)),Fr(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Tn(n)&&s.push(new(gh())(e._repo,e._path)),{removed:s,events:r}}function ka(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function rt(n,e){let t=null;for(const o of n.views.values())t=t||mh(o,e);return t}function Da(n,e){if(e._queryParams.loadsAllData())return Fo(n);{const o=e._queryIdentifier;return n.views.get(o)}}function Ta(n,e){return Da(n,e)!=null}function Tn(n){return Fo(n)!=null}function Fo(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do;function Ch(n){v(!Do,"__referenceConstructor has already been defined"),Do=n}function Uh(){return v(Do,"Reference.ts has not been loaded"),Do}let Eh=1;class Vr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=Z0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Na(n,e,t,o,i){return z0(n.pendingWriteTree_,e,t,o,i),i?yt(n,new Gn(ds(),e,t)):[]}function Bh(n,e,t,o){V0(n.pendingWriteTree_,e,t,o);const i=re.fromObject(t);return yt(n,new ct(ds(),e,i))}function Bn(n,e,t=!1){const o=W0(n.pendingWriteTree_,e);if(j0(n.pendingWriteTree_,e)){let s=new re(null);return o.snap!=null?s=s.set(q(),!0):ke(o.children,r=>{s=s.set(new ee(r),!0)}),yt(n,new Bo(o.path,s,t))}else return[]}function Ho(n,e,t){return yt(n,new Gn(hs(),e,t))}function wh(n,e,t){const o=re.fromObject(t);return yt(n,new ct(hs(),e,o))}function Sh(n,e){return yt(n,new Qt(hs(),e))}function Ih(n,e,t){const o=As(n,t);if(o){const i=_s(o),s=i.path,r=i.queryId,l=Le(s,e),a=new Qt(us(r),l);return vs(n,s,a)}else return[]}function Mi(n,e,t,o,i=!1){const s=e._path,r=n.syncPointTree_.get(s);let l=[];if(r&&(e._queryIdentifier==="default"||Ta(r,e))){const a=Ph(r,e,t,o);Ah(r)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const d=a.removed;if(l=a.events,!i){const m=d.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(s,(f,b)=>Tn(b));if(m&&!u){const f=n.syncPointTree_.subtree(s);if(!f.isEmpty()){const b=Th(f);for(let g=0;g<b.length;++g){const w=b[g],D=w.query,U=Oa(n,w);n.listenProvider_.startListening(Ot(D),To(n,D),U.hashFn,U.onComplete)}}}!u&&d.length>0&&!o&&(m?n.listenProvider_.stopListening(Ot(e),null):d.forEach(f=>{const b=n.queryToTagMap.get(zo(f));n.listenProvider_.stopListening(Ot(f),b)}))}Nh(n,d)}return l}function kh(n,e,t,o){const i=As(n,o);if(i!=null){const s=_s(i),r=s.path,l=s.queryId,a=Le(r,e),d=new Gn(us(l),a,t);return vs(n,r,d)}else return[]}function Dh(n,e,t,o){const i=As(n,o);if(i){const s=_s(i),r=s.path,l=s.queryId,a=Le(r,e),d=re.fromObject(t),m=new ct(us(l),a,d);return vs(n,r,m)}else return[]}function Wr(n,e,t,o=!1){const i=e._path;let s=null,r=!1;n.syncPointTree_.foreachOnPath(i,(f,b)=>{const g=Le(f,i);s=s||rt(b,g),r=r||Tn(b)});let l=n.syncPointTree_.get(i);l?(r=r||Tn(l),s=s||rt(l,q())):(l=new yh,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=M.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((b,g)=>{const w=rt(g,q());w&&(s=s.updateImmediateChild(b,w))}));const d=Ta(l,e);if(!d&&!e._queryParams.loadsAllData()){const f=zo(e);v(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const b=Mh();n.queryToTagMap.set(f,b),n.tagToQueryMap.set(b,f)}const m=ms(n.pendingWriteTree_,i);let u=vh(l,e,t,m,s,a);if(!d&&!r&&!o){const f=Da(l,e);u=u.concat(Rh(n,e,f))}return u}function gs(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(r,l)=>{const a=Le(r,e),d=rt(l,a);if(d)return d});return Ua(i,e,s,t,!0)}function yt(n,e){return Ma(e,n.syncPointTree_,null,ms(n.pendingWriteTree_,q()))}function Ma(n,e,t,o){if(H(n.path))return Ra(n,e,t,o);{const i=e.get(q());t==null&&i!=null&&(t=rt(i,q()));let s=[];const r=F(n.path),l=n.operationForChild(r),a=e.children.get(r);if(a&&l){const d=t?t.getImmediateChild(r):null,m=Ea(o,r);s=s.concat(Ma(l,a,d,m))}return i&&(s=s.concat(bs(i,n,o,t))),s}}function Ra(n,e,t,o){const i=e.get(q());t==null&&i!=null&&(t=rt(i,q()));let s=[];return e.children.inorderTraversal((r,l)=>{const a=t?t.getImmediateChild(r):null,d=Ea(o,r),m=n.operationForChild(r);m&&(s=s.concat(Ra(m,l,a,d)))}),i&&(s=s.concat(bs(i,n,o,t))),s}function Oa(n,e){const t=e.query,o=To(n,t);return{hashFn:()=>(uh(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return o?Ih(n,t._path,o):Sh(n,t._path);{const s=S2(i,t);return Mi(n,t,null,s)}}}}function To(n,e){const t=zo(e);return n.queryToTagMap.get(t)}function zo(n){return n._path.toString()+"$"+n._queryIdentifier}function As(n,e){return n.tagToQueryMap.get(e)}function _s(n){const e=n.indexOf("$");return v(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ee(n.substr(0,e))}}function vs(n,e,t){const o=n.syncPointTree_.get(e);v(o,"Missing sync point for query tag that we're tracking");const i=ms(n.pendingWriteTree_,e);return bs(o,t,i,null)}function Th(n){return n.fold((e,t,o)=>{if(t&&Tn(t))return[Fo(t)];{let i=[];return t&&(i=ka(t)),ke(o,(s,r)=>{i=i.concat(r)}),i}})}function Ot(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Uh())(n._repo,n._path):n}function Nh(n,e){for(let t=0;t<e.length;++t){const o=e[t];if(!o._queryParams.loadsAllData()){const i=zo(o),s=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(s)}}}function Mh(){return Eh++}function Rh(n,e,t){const o=e._path,i=To(n,e),s=Oa(n,t),r=n.listenProvider_.startListening(Ot(e),i,s.hashFn,s.onComplete),l=n.syncPointTree_.subtree(o);if(i)v(!Tn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((d,m,u)=>{if(!H(d)&&m&&Tn(m))return[Fo(m).query];{let f=[];return m&&(f=f.concat(ka(m).map(b=>b.query))),ke(u,(b,g)=>{f=f.concat(g)}),f}});for(let d=0;d<a.length;++d){const m=a[d];n.listenProvider_.stopListening(Ot(m),To(n,m))}}return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ps(t)}node(){return this.node_}}class Cs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ue(this.path_,e);return new Cs(this.syncTree_,t)}node(){return gs(this.syncTree_,this.path_)}}const Oh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},jr=function(n,e,t){if(!n||typeof n!="object")return n;if(v(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return xh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Lh(n[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},xh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:v(!1,"Unexpected server value: "+n)}},Lh=function(n,e,t){n.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const o=n.increment;typeof o!="number"&&v(!1,"Unexpected increment value: "+o);const i=e.node();if(v(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return o;const r=i.getValue();return typeof r!="number"?o:r+o},xa=function(n,e,t,o){return Us(e,new Cs(t,n),o)},La=function(n,e,t){return Us(n,new Ps(e),t)};function Us(n,e,t){const o=n.getPriority().val(),i=jr(o,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const r=n,l=jr(r.getValue(),e,t);return l!==r.getValue()||i!==r.getPriority().val()?new Ce(l,Ee(i)):n}else{const r=n;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new Ce(i))),r.forEachChild(he,(l,a)=>{const d=Us(a,e.getImmediateChild(l),t);d!==a&&(s=s.updateImmediateChild(l,d))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e="",t=null,o={children:{},childCount:0}){this.name=e,this.parent=t,this.node=o}}function Bs(n,e){let t=e instanceof ee?e:new ee(e),o=n,i=F(t);for(;i!==null;){const s=lt(o.node.children,i)||{children:{},childCount:0};o=new Es(i,o,s),t=ae(t),i=F(t)}return o}function bt(n){return n.node.value}function Fa(n,e){n.node.value=e,Ri(n)}function Ha(n){return n.node.childCount>0}function Fh(n){return bt(n)===void 0&&!Ha(n)}function Vo(n,e){ke(n.node.children,(t,o)=>{e(new Es(t,n,o))})}function za(n,e,t,o){t&&!o&&e(n),Vo(n,i=>{za(i,e,!0,o)}),t&&o&&e(n)}function Hh(n,e,t){let o=n.parent;for(;o!==null;){if(e(o))return!0;o=o.parent}return!1}function no(n){return new ee(n.parent===null?n.name:no(n.parent)+"/"+n.name)}function Ri(n){n.parent!==null&&zh(n.parent,n.name,n)}function zh(n,e,t){const o=Fh(t),i=un(n.node.children,e);o&&i?(delete n.node.children[e],n.node.childCount--,Ri(n)):!o&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Ri(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=/[\[\].#$\/\u0000-\u001F\u007F]/,Wh=/[\[\].#$\u0000-\u001F\u007F]/,hi=10*1024*1024,ws=function(n){return typeof n=="string"&&n.length!==0&&!Vh.test(n)},Va=function(n){return typeof n=="string"&&n.length!==0&&!Wh.test(n)},jh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Va(n)},Oi=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!$i(n)||n&&typeof n=="object"&&un(n,".sv")},Wa=function(n,e,t,o){o&&e===void 0||Wo(Ro(n,"value"),e,t)},Wo=function(n,e,t){const o=t instanceof ee?new a0(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Hn(o));if(typeof e=="function")throw new Error(n+"contains a function "+Hn(o)+" with contents = "+e.toString());if($i(e))throw new Error(n+"contains "+e.toString()+" "+Hn(o));if(typeof e=="string"&&e.length>hi/3&&Oo(e)>hi)throw new Error(n+"contains a string greater than "+hi+" utf8 bytes "+Hn(o)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ke(e,(r,l)=>{if(r===".value")i=!0;else if(r!==".priority"&&r!==".sv"&&(s=!0,!ws(r)))throw new Error(n+" contains an invalid key ("+r+") "+Hn(o)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);c0(o,r),Wo(n,l,o),d0(o)}),i&&s)throw new Error(n+' contains ".value" child '+Hn(o)+" in addition to actual children.")}},Gh=function(n,e){let t,o;for(t=0;t<e.length;t++){o=e[t];const s=Wt(o);for(let r=0;r<s.length;r++)if(!(s[r]===".priority"&&r===s.length-1)){if(!ws(s[r]))throw new Error(n+"contains an invalid key ("+s[r]+") in path "+o.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(l0);let i=null;for(t=0;t<e.length;t++){if(o=e[t],i!==null&&Je(i,o))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+o.toString());i=o}},Kh=function(n,e,t,o){const i=Ro(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ke(e,(r,l)=>{const a=new ee(r);if(Wo(i,l,ue(t,a)),os(a)===".priority"&&!Oi(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),Gh(i,s)},Ss=function(n,e,t,o){if(!Va(t))throw new Error(Ro(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qh=function(n,e,t,o){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ss(n,e,t)},Is=function(n,e){if(F(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Yh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ws(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!jh(t))throw new Error(Ro(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jo(n,e){let t=null;for(let o=0;o<e.length;o++){const i=e[o],s=i.getPath();t!==null&&!is(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function ja(n,e,t){jo(n,t),Ga(n,o=>is(o,e))}function an(n,e,t){jo(n,t),Ga(n,o=>Je(o,e)||Je(e,o))}function Ga(n,e){n.recursionDepth_++;let t=!0;for(let o=0;o<n.eventLists_.length;o++){const i=n.eventLists_[o];if(i){const s=i.path;e(s)?(Jh(n.eventLists_[o]),n.eventLists_[o]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Jh(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const o=t.getEventRunner();Tt&&Ie("event: "+t.toString()),ft(o)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="repo_interrupt",$h=25;class Zh{constructor(e,t,o,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=o,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Xh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Eo(),this.transactionQueueTree_=new Es,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eu(n,e,t){if(n.stats_=ns(n.repoInfo_),n.forceRestClient_||T2())n.server_=new Uo(n.repoInfo_,(o,i,s,r)=>{Gr(n,o,i,s,r)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Kr(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(t)}catch(o){throw new Error("Invalid authOverride provided: "+o)}}n.persistentConnection_=new yn(n.repoInfo_,e,(o,i,s,r)=>{Gr(n,o,i,s,r)},o=>{Kr(n,o)},o=>{nu(n,o)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(o=>{n.server_.refreshAuthToken(o)}),n.appCheckProvider_.addTokenChangeListener(o=>{n.server_.refreshAppCheckToken(o.token)}),n.statsReporter_=x2(n.repoInfo_,()=>new R0(n.stats_,n.server_)),n.infoData_=new k0,n.infoSyncTree_=new Vr({startListening:(o,i,s,r)=>{let l=[];const a=n.infoData_.getNode(o._path);return a.isEmpty()||(l=Ho(n.infoSyncTree_,o._path,a),setTimeout(()=>{r("ok")},0)),l},stopListening:()=>{}}),ks(n,"connected",!1),n.serverSyncTree_=new Vr({startListening:(o,i,s,r)=>(n.server_.listen(o,s,i,(l,a)=>{const d=r(l,a);an(n.eventQueue_,o._path,d)}),[]),stopListening:(o,i)=>{n.server_.unlisten(o,i)}})}function Ka(n){const t=n.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Go(n){return Oh({timestamp:Ka(n)})}function Gr(n,e,t,o,i){n.dataUpdateCount++;const s=new ee(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let r=[];if(i)if(o){const a=bo(t,d=>Ee(d));r=Dh(n.serverSyncTree_,s,a,i)}else{const a=Ee(t);r=kh(n.serverSyncTree_,s,a,i)}else if(o){const a=bo(t,d=>Ee(d));r=wh(n.serverSyncTree_,s,a)}else{const a=Ee(t);r=Ho(n.serverSyncTree_,s,a)}let l=s;r.length>0&&(l=ht(n,s)),an(n.eventQueue_,l,r)}function Kr(n,e){ks(n,"connected",e),e===!1&&iu(n)}function nu(n,e){ke(e,(t,o)=>{ks(n,t,o)})}function ks(n,e,t){const o=new ee("/.info/"+e),i=Ee(t);n.infoData_.updateSnapshot(o,i);const s=Ho(n.infoSyncTree_,o,i);an(n.eventQueue_,o,s)}function Ds(n){return n.nextWriteId_++}function tu(n,e,t,o,i){Ko(n,"set",{path:e.toString(),value:t,priority:o});const s=Go(n),r=Ee(t,o),l=gs(n.serverSyncTree_,e),a=La(r,l,s),d=Ds(n),m=Na(n.serverSyncTree_,e,a,d,!0);jo(n.eventQueue_,m),n.server_.put(e.toString(),r.val(!0),(f,b)=>{const g=f==="ok";g||Oe("set at "+e+" failed: "+f);const w=Bn(n.serverSyncTree_,d,!g);an(n.eventQueue_,e,w),Li(n,i,f,b)});const u=Ns(n,e);ht(n,u),an(n.eventQueue_,u,[])}function ou(n,e,t,o){Ko(n,"update",{path:e.toString(),value:t});let i=!0;const s=Go(n),r={};if(ke(t,(l,a)=>{i=!1,r[l]=xa(ue(e,l),Ee(a),n.serverSyncTree_,s)}),i)Ie("update() called with empty data.  Don't do anything."),Li(n,o,"ok",void 0);else{const l=Ds(n),a=Bh(n.serverSyncTree_,e,r,l);jo(n.eventQueue_,a),n.server_.merge(e.toString(),t,(d,m)=>{const u=d==="ok";u||Oe("update at "+e+" failed: "+d);const f=Bn(n.serverSyncTree_,l,!u),b=f.length>0?ht(n,e):e;an(n.eventQueue_,b,f),Li(n,o,d,m)}),ke(t,d=>{const m=Ns(n,ue(e,d));ht(n,m)}),an(n.eventQueue_,e,[])}}function iu(n){Ko(n,"onDisconnectEvents");const e=Go(n),t=Eo();wi(n.onDisconnect_,q(),(i,s)=>{const r=xa(i,s,n.serverSyncTree_,e);_a(t,i,r)});let o=[];wi(t,q(),(i,s)=>{o=o.concat(Ho(n.serverSyncTree_,i,s));const r=Ns(n,i);ht(n,r)}),n.onDisconnect_=Eo(),an(n.eventQueue_,q(),o)}function su(n,e,t){let o;F(e._path)===".info"?o=Wr(n.infoSyncTree_,e,t):o=Wr(n.serverSyncTree_,e,t),ja(n.eventQueue_,e._path,o)}function xi(n,e,t){let o;F(e._path)===".info"?o=Mi(n.infoSyncTree_,e,t):o=Mi(n.serverSyncTree_,e,t),ja(n.eventQueue_,e._path,o)}function ru(n){n.persistentConnection_&&n.persistentConnection_.interrupt(qh)}function Ko(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ie(t,...e)}function Li(n,e,t,o){e&&ft(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let s=i;o&&(s+=": "+o);const r=new Error(s);r.code=i,e(r)}})}function Qa(n,e,t){return gs(n.serverSyncTree_,e,t)||M.EMPTY_NODE}function Ts(n,e=n.transactionQueueTree_){if(e||Qo(n,e),bt(e)){const t=Xa(n,e);v(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&lu(n,no(e),t)}else Ha(e)&&Vo(e,t=>{Ts(n,t)})}function lu(n,e,t){const o=t.map(d=>d.currentWriteId),i=Qa(n,e,o);let s=i;const r=i.hash();for(let d=0;d<t.length;d++){const m=t[d];v(m.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),m.status=1,m.retryCount++;const u=Le(e,m.path);s=s.updateChild(u,m.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;n.server_.put(a.toString(),l,d=>{Ko(n,"transaction put response",{path:a.toString(),status:d});let m=[];if(d==="ok"){const u=[];for(let f=0;f<t.length;f++)t[f].status=2,m=m.concat(Bn(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&u.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Qo(n,Bs(n.transactionQueueTree_,e)),Ts(n,n.transactionQueueTree_),an(n.eventQueue_,e,m);for(let f=0;f<u.length;f++)ft(u[f])}else{if(d==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{Oe("transaction at "+a.toString()+" failed: "+d);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=d}ht(n,e)}},r)}function ht(n,e){const t=Ya(n,e),o=no(t),i=Xa(n,t);return au(n,i,o),o}function au(n,e,t){if(e.length===0)return;const o=[];let i=[];const r=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],d=Le(t,a.path);let m=!1,u;if(v(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)m=!0,u=a.abortReason,i=i.concat(Bn(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=$h)m=!0,u="maxretry",i=i.concat(Bn(n.serverSyncTree_,a.currentWriteId,!0));else{const f=Qa(n,a.path,r);a.currentInputSnapshot=f;const b=e[l].update(f.val());if(b!==void 0){Wo("transaction failed: Data returned ",b,a.path);let g=Ee(b);typeof b=="object"&&b!=null&&un(b,".priority")||(g=g.updatePriority(f.getPriority()));const D=a.currentWriteId,U=Go(n),j=La(g,f,U);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=j,a.currentWriteId=Ds(n),r.splice(r.indexOf(D),1),i=i.concat(Na(n.serverSyncTree_,a.path,j,a.currentWriteId,a.applyLocally)),i=i.concat(Bn(n.serverSyncTree_,D,!0))}else m=!0,u="nodata",i=i.concat(Bn(n.serverSyncTree_,a.currentWriteId,!0))}an(n.eventQueue_,t,i),i=[],m&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?o.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):o.push(()=>e[l].onComplete(new Error(u),!1,null))))}Qo(n,n.transactionQueueTree_);for(let l=0;l<o.length;l++)ft(o[l]);Ts(n,n.transactionQueueTree_)}function Ya(n,e){let t,o=n.transactionQueueTree_;for(t=F(e);t!==null&&bt(o)===void 0;)o=Bs(o,t),e=ae(e),t=F(e);return o}function Xa(n,e){const t=[];return Ja(n,e,t),t.sort((o,i)=>o.order-i.order),t}function Ja(n,e,t){const o=bt(e);if(o)for(let i=0;i<o.length;i++)t.push(o[i]);Vo(e,i=>{Ja(n,i,t)})}function Qo(n,e){const t=bt(e);if(t){let o=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[o]=t[i],o++);t.length=o,Fa(e,t.length>0?t:void 0)}Vo(e,o=>{Qo(n,o)})}function Ns(n,e){const t=no(Ya(n,e)),o=Bs(n.transactionQueueTree_,e);return Hh(o,i=>{ui(n,i)}),ui(n,o),za(o,i=>{ui(n,i)}),t}function ui(n,e){const t=bt(e);if(t){const o=[];let i=[],s=-1;for(let r=0;r<t.length;r++)t[r].status===3||(t[r].status===1?(v(s===r-1,"All SENT items should be at beginning of queue."),s=r,t[r].status=3,t[r].abortReason="set"):(v(t[r].status===0,"Unexpected transaction status in abort"),t[r].unwatcher(),i=i.concat(Bn(n.serverSyncTree_,t[r].currentWriteId,!0)),t[r].onComplete&&o.push(t[r].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Fa(e,void 0):t.length=s+1,an(n.eventQueue_,no(e),i);for(let r=0;r<o.length;r++)ft(o[r])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(n){let e="";const t=n.split("/");for(let o=0;o<t.length;o++)if(t[o].length>0){let i=t[o];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(s){}e+="/"+i}return e}function du(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const o=t.split("=");o.length===2?e[decodeURIComponent(o[0])]=decodeURIComponent(o[1]):Oe(`Invalid query segment '${t}' in query '${n}'`)}return e}const Qr=function(n,e){const t=hu(n),o=t.namespace;t.domain==="firebase.com"&&gn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!o||o==="undefined")&&t.domain!=="localhost"&&gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||C2();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ta(t.host,t.secure,o,i,e,"",o!==t.subdomain),path:new ee(t.pathString)}},hu=function(n){let e="",t="",o="",i="",s="",r=!0,l="https",a=443;if(typeof n=="string"){let d=n.indexOf("//");d>=0&&(l=n.substring(0,d-1),n=n.substring(d+2));let m=n.indexOf("/");m===-1&&(m=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(m,u)),m<u&&(i=cu(n.substring(m,u)));const f=du(n.substring(Math.min(n.length,u)));d=e.indexOf(":"),d>=0?(r=l==="https"||l==="wss",a=parseInt(e.substring(d+1),10)):d=e.length;const b=e.slice(0,d);if(b.toLowerCase()==="localhost")t="localhost";else if(b.split(".").length<=2)t=b;else{const g=e.indexOf(".");o=e.substring(0,g).toLowerCase(),t=e.substring(g+1),s=o}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:t,subdomain:o,secure:r,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",uu=function(){let n=0;const e=[];return function(t){const o=t===n;n=t;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Yr.charAt(t%64),t=Math.floor(t/64);v(t===0,"Cannot push at time == 0");let r=s.join("");if(o){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)r+=Yr.charAt(e[i]);return v(r.length===20,"nextPushId: Length should be 20."),r}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,t,o,i){this.eventType=e,this.eventRegistration=t,this.snapshot=o,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class pu{constructor(e,t,o){this.eventRegistration=e,this.error=t,this.path=o}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t,o,i){this._repo=e,this._path=t,this._queryParams=o,this._orderByCalled=i}get key(){return H(this._path)?null:os(this._path)}get ref(){return new Rn(this._repo,this._path)}get _queryIdentifier(){const e=Tr(this._queryParams),t=Zi(e);return t==="{}"?"default":t}get _queryObject(){return Tr(this._queryParams)}isEqual(e){if(e=Xn(e),!(e instanceof Yo))return!1;const t=this._repo===e._repo,o=is(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&o&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+r0(this._path)}}function yu(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function bu(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===Wn){const o="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==jn)throw new Error(o);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==kn)throw new Error(o);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===he){if(e!=null&&!Oi(e)||t!=null&&!Oi(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(v(n.getIndex()instanceof ls||n.getIndex()===ga,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Rn extends Yo{constructor(e,t){super(e,t,new cs,!1)}get parent(){const e=ha(this._path);return e===null?null:new Rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class No{constructor(e,t,o){this._node=e,this.ref=t,this._index=o}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ee(e),o=Yt(this.ref,e);return new No(this._node.getChild(t),o,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(o,i)=>e(new No(i,Yt(this.ref,o),he)))}hasChild(e){const t=new ee(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tn(n,e){return n=Xn(n),n._checkNotDeleted("ref"),e!==void 0?Yt(n._root,e):n._root}function Yt(n,e){return n=Xn(n),F(n._path)===null?Qh("child","path",e):Ss("child","path",e),new Rn(n._repo,ue(n._path,e))}function ho(n,e){n=Xn(n),Is("push",n._path),Wa("push",e,n._path,!0);const t=Ka(n._repo),o=uu(t),i=Yt(n,o),s=Yt(n,o);let r;return r=Promise.resolve(s),i.then=r.then.bind(r),i.catch=r.then.bind(r,void 0),i}function qa(n){return Is("remove",n._path),gu(n,null)}function gu(n,e){n=Xn(n),Is("set",n._path),Wa("set",e,n._path,!1);const t=new Jt;return tu(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Fi(n,e){Kh("update",e,n._path);const t=new Jt;return ou(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class Ms{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const o=t._queryParams.getIndex();return new mu("value",this,new No(e.snapshotNode,new Rn(t._repo,t._path),o))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new pu(this,e,t):null}matches(e){return e instanceof Ms?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Au(n,e,t,o,i){let s;if(typeof o=="object"&&(s=void 0,i=o),typeof o=="function"&&(s=o),i&&i.onlyOnce){const a=t,d=(m,u)=>{xi(n._repo,n,l),a(m,u)};d.userCallback=t.userCallback,d.context=t.context,t=d}const r=new fu(t,s||void 0),l=new Ms(r);return su(n._repo,n,l),()=>xi(n._repo,n,l)}function $a(n,e,t,o){return Au(n,"value",e,t,o)}function Za(n,e,t){xi(n._repo,n,null)}class _u{}class vu extends _u{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){yu(e,"orderByChild");const t=new ee(this._path);if(H(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const o=new ls(t),i=I0(e._queryParams,o);return bu(i),new Yo(e._repo,e._path,i,!0)}}function Pu(n){return Ss("orderByChild","path",n),new vu(n)}function Cu(n,...e){let t=Xn(n);for(const o of e)t=o._apply(t);return t}bh(Rn);Ch(Rn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="FIREBASE_DATABASE_EMULATOR_HOST",Hi={};let Eu=!1;function Bu(n,e,t,o){const i=e.lastIndexOf(":"),s=e.substring(0,i),r=Rl(s);n.repoInfo_=new ta(e,r,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),o&&(n.authTokenProvider_=o)}function wu(n,e,t,o,i){let s=o||n.options.databaseURL;s===void 0&&(n.options.projectId||gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let r=Qr(s,i),l=r.repoInfo,a;typeof process!="undefined"&&pr&&(a=pr[Uu]),a?(s=`http://${a}?ns=${l.namespace}`,r=Qr(s,i),l=r.repoInfo):r.repoInfo.secure;const d=new M2(n.name,n.options,e);Yh("Invalid Firebase Database URL",r),H(r.path)||gn("Database URL must point to the root of a Firebase Database (not including a child path).");const m=Iu(l,n,d,new N2(n,t));return new ku(m,n)}function Su(n,e){const t=Hi[e];(!t||t[n.key]!==n)&&gn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ru(n),delete t[n.key]}function Iu(n,e,t,o){let i=Hi[e.name];i||(i={},Hi[e.name]=i);let s=i[n.toURLString()];return s&&gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Zh(n,Eu,t,o),i[n.toURLString()]=s,s}class ku{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rn(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Su(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gn("Cannot call "+e+" on a deleted database.")}}function Du(n=r2(),e){const t=n2(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const o=jd("database");o&&Tu(t,...o)}return t}function Tu(n,e,t,o={}){n=Xn(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,s=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&go(o,s.repoInfo_.emulatorOptions))return;gn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let r;if(s.repoInfo_.nodeAdmin)o.mockUserToken&&gn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new co(co.OWNER);else if(o.mockUserToken){const l=typeof o.mockUserToken=="string"?o.mockUserToken:Gd(o.mockUserToken,n.app.options.projectId);r=new co(l)}Rl(e)&&i1(e),Bu(s,i,o,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){b2(s2),_o(new Ht("database",(e,{instanceIdentifier:t})=>{const o=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wu(o,i,s,t)},"PUBLIC").setMultipleInstances(!0)),it(fr,yr,n),it(fr,yr,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu={".sv":"timestamp"};function zn(){return Mu}yn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};yn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Nu();var Ru="firebase",Ou="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it(Ru,Ou,"app");const Ln=n=>n?String(n).split(/[\r\n,=\s]/)[0].trim():"",zi={apiKey:Ln("AIzaSyBoxwl4suSMEJu78PJBz51DsX3Tbd_wuqs"),authDomain:Ln("findparkinglot-2519e.firebaseapp.com"),projectId:Ln("findparkinglot-2519e"),databaseURL:Ln("https://findparkinglot-2519e-default-rtdb.asia-southeast1.firebasedatabase.app"),storageBucket:Ln("findparkinglot-2519e.firebasestorage.app"),messagingSenderId:Ln("976769533420"),appId:Ln("1:976769533420:web:f3108318b3def30017acc9")},hn=!!(zi.apiKey&&zi.databaseURL);let Xr=null,Xe=null;hn&&(Xr=Fl(zi),Xe=Du(Xr));const uo="parking_overrides",Dt=E({}),ec=E(!1),Vi=E(null);let xt=null,mi=0;function mo(n,e){if(!n||!Array.isArray(e))return"";const t=Number(e[0]),o=Number(e[1]);return!isFinite(t)||!isFinite(o)?"":`${n}|${t.toFixed(6)},${o.toFixed(6)}`.replace(/[.#$/[\]]/g,"_")}function nc(n,e){if(!e)return n;const t={...n},o=i=>{const s=e[i];s!=null&&(typeof s=="string"&&s.trim()===""||(t[i]=s))};return o("description"),o("iconKey"),o("category"),o("friendliness"),o("priceInfo"),t}function xu(){if(!(!hn||xt))try{const n=tn(Xe,uo);xt=n,$a(n,e=>{const t={};e.forEach(o=>{t[o.key]=o.val()||{}}),Dt.value=t,ec.value=!0},e=>{Vi.value=e})}catch(n){Vi.value=n}}function Lu(){xt&&(Za(xt),xt=null)}function Fu(){Yn(()=>{mi+=1,xu()}),mt(()=>{mi-=1,mi<=0&&Lu()});const n=(s,r)=>{const l=mo(s,r);return l&&Dt.value[l]||null};return{overrides:Dt,ready:ec,error:Vi,getOverride:n,hasOverride:(s,r)=>!!n(s,r),getOverrideHistory:(s,r)=>{const l=n(s,r);return!l||!l.history||typeof l.history!="object"?[]:Object.entries(l.history).map(([a,d])=>({...d||{},_key:a})).sort((a,d)=>a._key<d._key?1:a._key>d._key?-1:0)},upsertOverride:async(s,r,l)=>{var N,Q,_e;if(!hn)throw new Error("Firebase 尚未設定");const a=mo(s.name,s.geometry);if(!a)throw new Error("無法產生 override key (缺少 name 或 geometry)");const[d,m]=s.geometry,u={id:l.id,nickname:l.nickname||""},f={origName:s.name||"",origLng:Number(d),origLat:Number(m),description:typeof r.description=="string"?r.description.trim():"",iconKey:r.iconKey||"",category:r.category||"",friendliness:r.friendliness||"",priceInfo:typeof r.priceInfo=="string"?r.priceInfo.trim():"",updatedBy:u,updatedAt:zn()},b=Dt.value[a]||null,g=nc(s,b),w=["description","iconKey","category","friendliness","priceInfo"],D={},U={};for(const oe of w){const Re=(N=g==null?void 0:g[oe])!=null?N:"",De=(Q=f[oe])!=null?Q:"";String(Re)!==String(De)&&(D[oe]=Re,U[oe]=De)}const j=ho(tn(Xe,`${uo}/${a}/history`)).key;return await Fi(tn(Xe),{[`${uo}/${a}`]:{...f,history:{...((_e=Dt.value[a])==null?void 0:_e.history)||{},[j]:{action:"override",at:zn(),by:u,before:D,after:U}}}}),a},resetOverride:async(s,r)=>{if(!hn)throw new Error("Firebase 尚未設定");const l=mo(s,r);l&&await qa(tn(Xe,`${uo}/${l}`))}}}const cn=(n,e)=>{const t=n.__vccOpts||n;for(const[o,i]of e)t[o]=i;return t},Hu={id:"map"},zu=16,Jr=34,Vu=84,Wu={__name:"MapBox",props:{parkingTypeKeyArray:Array,degreeOfFriendlinessKeyArray:Array,mapDataList:Array,getLngLat:Boolean,mapStylesSelected:String,parkingPriceType:String,priceRangeMin:Number,priceRangeMax:Number,goToParkingPlaceData:Object,routeData:Object,favoriteIds:{type:Object,default:()=>new Set},overrideKeys:{type:Object,default:()=>new Set},overrides:{type:Object,default:()=>({})},onlyFavorites:{type:Boolean,default:!1},showOfficial:{type:Boolean,default:!0},showOverridden:{type:Boolean,default:!0},showCommunity:{type:Boolean,default:!0},focusCoord:{type:Array,default:null},routeProfile:{type:String,default:"driving"},communityParkings:{type:Array,default:()=>[]}},emits:["parkingInfo","communityParkingClick","update:goToParkingPlaceData","update:routeData"],setup(n,{expose:e,emit:t}){const o=n,i=t,s="pk.eyJ1IjoiamFtZXN0aW05MjE1IiwiYSI6ImNrdmo2Y2I4aDVmejEzMm1zbThsdGdoajAifQ.UfBJAI7fFsv2wcAEBo6WUA",r=E(null),l=E({accessToken:s,bounds:[[119.3620389067818,21.83282743468497],[122.07013958372167,25.34391086143183]],center:[121.5173399,25.0475613],zoom:14,userCoordinates:[null,null]}),a=E(null),d=E([]),m=P=>P>=15?60:P>=13?60+(15-P)*30:P>=11?120+(13-P)*60:240,u=P=>Array.isArray(P)&&P.length>=2&&Number.isFinite(Number(P[0]))&&Number.isFinite(Number(P[1])),f=(P,O,$,pe,G)=>{const de=document.createElement("div");de.className="marker",pe&&de.classList.add("is-override"),$&&de.classList.add("is-fav");const Ne=document.createElement("div");Ne.className="tag";const fe=document.createElement("div");fe.className="img";const ze=G||O.properties.icon;return ze&&(fe.style.backgroundImage=`url(${ne(ze)})`,fe.style.backgroundSize="cover",fe.style.backgroundPosition="center center"),de.appendChild(Ne),de.appendChild(fe),de.addEventListener("click",()=>{r.value.flyTo({center:O.geometry.coordinates,zoom:17,bearing:0,speed:1.5,curve:1.5,easing:A=>A,essential:!0}),i("parkingInfo",{name:P.name,properties:O.properties,geometry:O.geometry.coordinates,address:""})}),de},b=(P,O)=>{const $=document.createElement("div");$.className="marker is-community",O&&$.classList.add("is-fav");const pe=document.createElement("div");pe.className="tag";const G=document.createElement("div");return G.className="img",P.iconKey&&(G.style.backgroundImage=`url(${ne(P.iconKey)})`,G.style.backgroundSize="cover",G.style.backgroundPosition="center center"),$.appendChild(pe),$.appendChild(G),$.addEventListener("click",()=>{r.value.flyTo({center:P.coordinates,zoom:17,speed:1.5,curve:1.5,essential:!0}),i("communityParkingClick",P)}),$},g=P=>{const O=document.createElement("div");O.className="marker-cluster";const $=Math.min(1,Math.log2(Math.max(2,P))/Math.log2(500)),pe=Math.round(Jr+(Vu-Jr)*$),G=Math.round(12+10*$);return O.style.width=`${pe}px`,O.style.height=`${pe}px`,O.style.lineHeight=`${pe}px`,O.style.fontSize=`${G}px`,O.textContent=String(P),O},w=()=>{var de,Ne,fe,ze,Ve,A,R,I,ve,Ke,We,An;for(let V=d.value.length-1;V>=0;V--)d.value[V].remove();if(d.value=[],!r.value)return;const P=(Ne=(de=r.value).getBounds)==null?void 0:Ne.call(de),O=[];for(const V of o.mapDataList)for(const x of V.features){const K=x.geometry.coordinates;if(!u(K))continue;const me=bi(x.properties.name,K),Me=(ze=(fe=o.favoriteIds)==null?void 0:fe.has)==null?void 0:ze.call(fe,me),ye=mo(x.properties.name,K),Ze=ye?(A=(Ve=o.overrideKeys)==null?void 0:Ve.has)==null?void 0:A.call(Ve,ye):!1;if(Ze){if(!o.showOfficial&&!o.showOverridden)continue}else if(!o.showOfficial)continue;const be=Ze?(R=o.overrides)==null?void 0:R[ye]:null,gt=typeof(be==null?void 0:be.priceInfo)=="string"&&be.priceInfo.trim()!==""?be.priceInfo.trim():"",At=gt||x.properties.priceInfo,_t=gt?gt.split("|"):x.properties.priceArray,to=(typeof(be==null?void 0:be.iconKey)=="string"&&be.iconKey.trim()!==""?be.iconKey.trim():"")||x.properties.icon;!nr(P,K)||o.onlyFavorites&&!Me||!Zs(to,o.parkingTypeKeyArray,o.degreeOfFriendlinessKeyArray)||!er(At,_t,o.parkingPriceType,o.priceRangeMin,o.priceRangeMax)||O.push({coord:[Number(K[0]),Number(K[1])],createEl:()=>f(V,x,Me,Ze,to)})}for(const V of o.communityParkings||[]){if(!o.showCommunity)break;const x=V.coordinates;if(!u(x)||!nr(P,x))continue;const K=bi(V.name,x),me=(ve=(I=o.favoriteIds)==null?void 0:I.has)==null?void 0:ve.call(I,K);if(o.onlyFavorites&&!me||!Zs(V.iconKey,o.parkingTypeKeyArray,o.degreeOfFriendlinessKeyArray))continue;const Me=V.priceInfo||"",ye=Me?Me.split("|"):[];er(Me,ye,o.parkingPriceType,o.priceRangeMin,o.priceRangeMax)&&O.push({coord:[Number(x[0]),Number(x[1])],createEl:()=>b(V,me)})}const $=(An=(We=(Ke=r.value).getZoom)==null?void 0:We.call(Ke))!=null?An:0;if($>=zu){for(const V of O){const x=new xn.Marker(V.createEl()).setLngLat(V.coord).addTo(r.value);d.value.push(x)}return}const pe=m($),G=new Map;for(const V of O){const x=r.value.project(V.coord),K=Math.floor(x.x/pe),me=Math.floor(x.y/pe),Me=`${K}:${me}`;let ye=G.get(Me);ye||(ye={points:[],sumLng:0,sumLat:0},G.set(Me,ye)),ye.points.push(V),ye.sumLng+=V.coord[0],ye.sumLat+=V.coord[1]}for(const V of G.values())if(V.points.length===1){const x=V.points[0],K=new xn.Marker(x.createEl()).setLngLat(x.coord).addTo(r.value);d.value.push(K)}else{const x=[V.sumLng/V.points.length,V.sumLat/V.points.length],K=g(V.points.length);K.addEventListener("click",()=>{var ye,Ze,be;const Me=Math.min(((be=(Ze=(ye=r.value).getZoom)==null?void 0:Ze.call(ye))!=null?be:0)+2,17);r.value.flyTo({center:x,zoom:Me,speed:1.5,curve:1.5,essential:!0})});const me=new xn.Marker(K).setLngLat(x).addTo(r.value);d.value.push(me)}};let D=null,U=null;const j=()=>{D!=null&&(clearTimeout(D),D=null),U!=null&&(typeof cancelIdleCallback=="function"&&cancelIdleCallback(U),U=null)},N=()=>{j(),D=setTimeout(()=>{D=null;const P=()=>{U=null,o.goToParkingPlaceData==null&&w()};typeof requestIdleCallback=="function"?U=requestIdleCallback(P,{timeout:250}):P()},80)},Q=()=>{const P=document.getElementById("loading-cover");P&&(P.classList.add("active"),setTimeout(()=>P.remove(),600))},_e=()=>{r.value.on("dragend",N),r.value.on("zoomend",N),w(),Q(),r.value.once("load",()=>{const P=o.focusCoord;Array.isArray(P)&&P[0]!=null&&P[1]!=null&&r.value.flyTo({center:[Number(P[0]),Number(P[1])],zoom:17,bearing:0,speed:1.5,curve:1.5,essential:!0})})},oe=()=>{r.value=new xn.Map({container:"map",style:o.mapStylesSelected,center:l.value.center,zoom:16,trackResize:!0,maxBounds:l.value.bounds}),_e(),r.value.addControl(new xn.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserHeading:!0})),r.value.on("geolocate",P=>{r.value.easeTo({bearing:P.coords.heading,duration:1e3,offset:[0,0]})})},Re=P=>{const{longitude:O,latitude:$}=P.coords;O>=l.value.bounds[0][0]&&O<=l.value.bounds[1][0]&&$>=l.value.bounds[0][1]&&$<=l.value.bounds[1][1]?(l.value.userCoordinates=[O,$],l.value.center=[O,$]):l.value.center=[121.5173399,25.0475613],oe()},De=()=>{oe()},$e=()=>{const P=document.getElementById("coordinates"),O=a.value.getLngLat();P.style.display="block",P.innerHTML=`[Longitude, Latitude]<br />[${O.lng}, ${O.lat}]`},dn=()=>{a.value=new xn.Marker({draggable:!0,color:"#2ee7d6"}).setLngLat(r.value.getCenter()).addTo(r.value),$e(),a.value.on("dragend",$e)};async function Te(P,O){r.value.getLayer("point")||r.value.addLayer({id:"point",type:"circle",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:P}}]}},paint:{"circle-radius":10,"circle-color":"#2ee7d6"}});const G=(await(await fetch(`https://api.mapbox.com/directions/v5/mapbox/${o.routeProfile||"driving"}/${P[0]},${P[1]};${O[0]},${O[1]}?alternatives=false&language=zh-Hant&overview=full&steps=true&exclude=ferry&geometries=geojson&access_token=${l.value.accessToken}`,{method:"GET"})).json()).routes[0],de={type:"Feature",properties:{},geometry:{type:"LineString",coordinates:G.geometry.coordinates}};i("update:routeData",G),r.value.getSource("route")?r.value.getSource("route").setData(de):r.value.addLayer({id:"route",type:"line",source:{type:"geojson",data:de},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#2ee7d6","line-width":5,"line-opacity":.75}})}const ce=P=>{if(l.value.userCoordinates[0]!==null){r.value.getSource("point")&&(r.value.removeLayer("point"),r.value.removeSource("point"));for(let $=d.value.length-1;$>=0;$--){const pe=d.value[$].getLngLat();pe.lng!=P[0]&&pe.lat!=P[1]&&d.value[$].remove()}const O=[[l.value.userCoordinates[0],l.value.userCoordinates[1]],[P[0],P[1]]];r.value.fitBounds(O,{padding:{top:100,bottom:100,left:100,right:100}}),Te(l.value.userCoordinates,P)}else"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(Re,De)},He=()=>{var P,O;(P=r.value)!=null&&P.getSource("route")&&(r.value.removeLayer("route"),r.value.removeSource("route")),(O=r.value)!=null&&O.getSource("point")&&(r.value.removeLayer("point"),r.value.removeSource("point")),w(),i("update:goToParkingPlaceData",null)};return Yn(()=>{xn.accessToken=l.value.accessToken,"geolocation"in navigator?navigator.geolocation.getCurrentPosition(Re,De,{enableHighAccuracy:!1,timeout:8e3,maximumAge:6e4}):oe()}),mt(()=>{j()}),Y([()=>o.parkingTypeKeyArray,()=>o.degreeOfFriendlinessKeyArray,()=>o.priceRangeMin,()=>o.priceRangeMax,()=>o.parkingPriceType,()=>o.onlyFavorites,()=>o.showOfficial,()=>o.showOverridden,()=>o.showCommunity,()=>o.favoriteIds,()=>o.communityParkings,()=>o.overrides],()=>N(),{deep:!0}),Y(()=>o.focusCoord,P=>{!P||!r.value||r.value.flyTo({center:P,zoom:17,bearing:0,speed:1.5,curve:1.5,essential:!0})}),Y(()=>o.routeProfile,()=>{o.goToParkingPlaceData!==null&&l.value.userCoordinates[0]!==null&&Te(l.value.userCoordinates,o.goToParkingPlaceData)}),Y(()=>o.goToParkingPlaceData,P=>{P!==null?ce(P):He()}),Y(()=>o.mapStylesSelected,(P,O)=>{O!==P&&r.value&&r.value.setStyle(P)}),Y(()=>o.getLngLat,()=>{if(a.value!==null){a.value.remove();const P=document.getElementById("coordinates");P&&(P.style.display="none")}o.getLngLat===!0&&dn()}),e({getCenter:()=>{if(!r.value)return[...l.value.center];const P=r.value.getCenter();return[P.lng,P.lat]},flyTo:(P,O=17)=>{!r.value||!P||r.value.flyTo({center:P,zoom:O,essential:!0})}}),(P,O)=>(_(),C("div",Hu))}},ju=cn(Wu,[["__scopeId","data-v-98a3b97e"]]),Gu=n=>(Nn("data-v-4ef15e45"),n=n(),Mn(),n),Ku={key:0,class:"modal-header"},Qu=Gu(()=>c("span",{class:"material-icons-outlined"},"close",-1)),Yu=[Qu],Xu={class:"modal-body"},Ju={key:1,class:"modal-footer"},qu={__name:"BaseModal",props:{modelValue:Boolean,title:{type:String,default:""},closeText:{type:String,default:"關閉"},size:{type:String,default:"md"}},emits:["update:modelValue","close"],setup(n,{emit:e}){const t=n,o=e,i=E(null),s=()=>{o("update:modelValue",!1),o("close")},r=l=>{l.key==="Escape"&&t.modelValue&&s()};return Yn(()=>window.addEventListener("keydown",r)),mt(()=>window.removeEventListener("keydown",r)),Y(()=>t.modelValue,async l=>{var a;document.body.classList.toggle("modal-open",l),l&&(await ml(),(a=i.value)==null||a.scrollTo({top:0,behavior:"auto"}))}),(l,a)=>(_(),Qi(Lc,{to:"body"},[c("div",{class:Z(["modal-overlay",{active:n.modelValue}]),onClick:Mo(s,["self"]),role:"dialog","aria-modal":"true",ref_key:"overlayEl",ref:i},[c("div",{class:Z(["modal-card",[`size-${n.size}`,{active:n.modelValue}]])},[n.title||l.$slots.header?(_(),C("header",Ku,[ni(l.$slots,"header",{},()=>[c("h3",null,B(n.title),1)]),c("button",{class:"modal-close",onClick:s,"aria-label":"關閉"},Yu)])):W("",!0),c("div",Xu,[ni(l.$slots,"default",{},void 0)]),l.$slots.footer||n.closeText?(_(),C("footer",Ju,[ni(l.$slots,"footer",{},()=>[c("button",{class:"btn btn-primary",onClick:s},B(n.closeText),1)])])):W("",!0)],2)],2)]))}},pn=cn(qu,[["__scopeId","data-v-4ef15e45"]]),$u=["onClick"],Zu={class:"material-icons-outlined"},e3={class:"fab-item-label"},n3=["aria-label","aria-expanded"],t3={class:"material-icons-outlined"},o3={__name:"FabMenu",props:{items:{type:Array,required:!0},placement:{type:String,default:"right"},mainIcon:{type:String,default:"apps"},mainLabel:{type:String,default:""}},setup(n){const e=E(!1),t=E(null),o=()=>e.value=!e.value,i=r=>{t.value&&!t.value.contains(r.target)&&(e.value=!1)},s=r=>{var l;e.value=!1,(l=r.onClick)==null||l.call(r)};return Yn(()=>document.addEventListener("click",i)),mt(()=>document.removeEventListener("click",i)),(r,l)=>(_(),C("div",{class:Z(["fab-root",`fab-placement-${n.placement}`]),ref_key:"rootEl",ref:t},[Pe(Fc,{name:"fab-item",tag:"div",class:"fab-items"},{default:Ye(()=>[(_(!0),C(Ae,null,xe(e.value?n.items:[],(a,d)=>(_(),C("button",{key:a.key,class:Z(["fab-item",{highlight:a.highlight}]),style:fo({bottom:d*46+"px"}),onClick:m=>s(a)},[c("span",Zu,B(a.icon),1),c("span",e3,B(a.label),1)],14,$u))),128))]),_:1}),c("button",{class:Z(["fab-main",{active:e.value}]),onClick:Mo(o,["stop"]),"aria-label":e.value?"收合選單":n.mainLabel||"展開選單","aria-expanded":e.value},[c("span",t3,B(e.value?"close":n.mainIcon),1)],10,n3)],2))}},qr=cn(o3,[["__scopeId","data-v-b3399b6f"]]),ut=[{name:"全部",value:"",key:null},{name:"汽車：汽車格(含未確認是否有重機格)",value:"car",key:["icon-1.png","icon-2.png","icon-3.png","icon-5.png"]},{name:"重機：有設重機專用格",value:"motorcycle",key:["icon-6.png","icon-8.png","icon-12.png","icon-13.png"]},{name:"機車：機車格",value:"scooter",key:["icon-7.png","icon-9.png","icon-10.png","icon-11.png"]},{name:"綠星:路邊友善車格(機車格開放重機停放)",value:"greenStar",key:["icon-14.png"]},{name:"重機友善店家:用餐/消費可停重機",value:"friendlyShop",key:["icon-4.png"]},{name:"綠P:重機專用路邊停車格",value:"greenP",key:["icon-15.png"]},{name:"灰P:重機專用路邊停車格(未確認精準座標)",value:"greyP",key:["icon-16.png"]},{name:"藍P:普通大型共用機車格(台北市試辦)",value:"blueP",key:["icon-17.png"]},{name:"紫P:時段性汽機車共用停車格，注意使用時間喔!",value:"purpleP",key:["icon-18.png"]},{name:"紅X:停都不給停",value:"redX",key:["icon-19.png"]},{name:"?:類型未確認",value:"unknown",key:["icon-20.png"]}];function i3(n){if(!n)return"未分類";const e=ut.find(t=>Array.isArray(t.key)&&t.key.includes(n));return e?e.name.split(/[：:]/)[0]:"未分類"}const Xt=[{name:"全部",value:"",key:null},{name:"最友善：有後牌辨析",value:"friendly",key:["icon-2.png","icon-4.png","icon-6.png","icon-9.png","icon-14.png","icon-15.png"]},{name:"最傳統：悠遊卡、按鈕取票",value:"normal",key:["icon-5.png","icon-11.png","icon-12.png","icon-17.png"]},{name:"最靠北：按鈕請管理員協助、前牌辨析",value:"unfriendly",key:["icon-1.png","icon-7.png","icon-13.png","icon-19.png"]},{name:"未確定",value:"unknown",key:["icon-3.png","icon-8.png","icon-10.png","icon-16.png","icon-20.png"]}],tt=[{name:"依系統設定",value:"system",theme:"system"},{name:"暗色模式",value:"mapbox://styles/jamestim9215/ckvkdj5cd1q4115nzwxa9rny3",theme:"dark"},{name:"亮色模式",value:"mapbox://styles/jamestim9215/ckvueghhu2woc14nrsgysx41v",theme:"light"}],s3="260924",r3=n=>(Nn("data-v-fc736dec"),n=n(),Mn(),n),l3={class:"range-slider"},a3={class:"range-track"},c3=["min","max","step","value"],d3=["min","max","step","value"],h3={class:"range-values"},u3=r3(()=>c("span",{class:"range-sep"},"~",-1)),m3={__name:"RangeSlider",props:{min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:10},modelMin:{type:Number,default:0},modelMax:{type:Number,default:100},suffix:{type:String,default:""}},emits:["update:modelMin","update:modelMax"],setup(n,{emit:e}){const t=n,o=e,i=X(()=>t.max-t.min||1),s=X(()=>(t.modelMin-t.min)/i.value*100),r=X(()=>(t.modelMax-t.min)/i.value*100),l=d=>{let m=Number(d.target.value);m>t.modelMax&&(m=t.modelMax),o("update:modelMin",m)},a=d=>{let m=Number(d.target.value);m<t.modelMin&&(m=t.modelMin),o("update:modelMax",m)};return(d,m)=>(_(),C("div",l3,[c("div",a3,[c("div",{class:"range-fill",style:fo({left:s.value+"%",right:100-r.value+"%"})},null,4),c("input",{type:"range",min:n.min,max:n.max,step:n.step,value:n.modelMin,onInput:l,class:"range-input range-input-min","aria-label":"最低價格"},null,40,c3),c("input",{type:"range",min:n.min,max:n.max,step:n.step,value:n.modelMax,onInput:a,class:"range-input range-input-max","aria-label":"最高價格"},null,40,d3)]),c("div",h3,[c("span",null,B(n.modelMin)+B(n.suffix),1),u3,c("span",null,B(n.modelMax)+B(n.suffix),1)])]))}},p3=cn(m3,[["__scopeId","data-v-fc736dec"]]),we=n=>(Nn("data-v-ed90af5a"),n=n(),Mn(),n),f3=we(()=>c("span",{class:"material-icons-outlined"},"chevron_left",-1)),y3=[f3],b3=pl('<header class="side-panel-header" data-v-ed90af5a><img class="side-panel-logo" src="'+Yi+'" alt="重機能停哪" data-v-ed90af5a><div class="side-panel-titles" data-v-ed90af5a><h3 data-v-ed90af5a>重機能停哪?</h3><span class="side-panel-subtitle" data-v-ed90af5a><span class="material-icons-outlined" data-v-ed90af5a>tune</span>設定 </span></div></header>',1),g3={class:"side-panel-body"},A3={class:"form-group"},_3={class:"form-toggle"},v3={class:"form-toggle-text"},P3=we(()=>c("span",{class:"material-icons-outlined fav-icon"},"star",-1)),C3={class:"source-count"},U3=["checked"],E3={class:"form-group"},B3=we(()=>c("label",{class:"form-label"},"顯示分類",-1)),w3={class:"source-chips"},S3=["aria-pressed"],I3=we(()=>c("span",{class:"material-icons-outlined source-icon"},"place",-1)),k3={class:"chip-count"},D3=["aria-pressed"],T3=we(()=>c("span",{class:"material-icons-outlined source-icon"},"edit_location_alt",-1)),N3={class:"chip-count"},M3=["aria-pressed"],R3=we(()=>c("span",{class:"material-icons-outlined source-icon"},"add_location_alt",-1)),O3={class:"chip-count"},x3={class:"form-group"},L3=we(()=>c("label",{class:"form-label"},"甚麼格位",-1)),F3=["value"],H3=["value"],z3={class:"form-group"},V3=we(()=>c("label",{class:"form-label"},"友善程度",-1)),W3=["value"],j3=["value"],G3={class:"form-group"},K3=we(()=>c("label",{class:"form-label"},"收費範圍",-1)),Q3={class:"price-chips"},Y3=we(()=>c("span",{class:"material-icons-outlined"},"money_off",-1)),X3={class:"form-group"},J3=we(()=>c("label",{class:"form-label"},"主題顏色",-1)),q3=["value"],$3=["value"],Z3=we(()=>c("section",{class:"form-group"},[c("label",{class:"form-label"},"停車場資料來源"),c("div",{class:"link-list"},[c("a",{href:"https://www.google.com/maps/d/viewer?mid=1ORD5DnL6yqrCrtQJYB9TeTgOOlvo-Yc&g_ep=CAESBjI2LjguNRgAIN1iKpUBLDk0MjY3NzI3LDk0MjkyMTk1LDk0Mjk5NTMyLDEwMDc5NjQ5OCwxMDA3OTc3NTcsMTAwNzk2NTMxLDk0MjgwNTc2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE4NjUzLDk0MjI5ODM5LDk0Mjc1MTY4LDk0Mjc5NjE5LDEwMDc5MjU3MiwxMDA3OTE0ODNCAlRX&skid=9984dc32-0eac-4e02-b7a8-241e8910f915&shorturl=1&ll=25.078951126084913%2C121.45397636318671&z=11",target:"_blank",rel:"noopener",class:"btn btn-outline btn-sm"}," Alan大重停車記事 ")])],-1)),e5={class:"form-group"},n5=pl('<label class="form-label" data-v-ed90af5a>問題回報</label><p class="muted-text" data-v-ed90af5a> 1. 停車場資訊相關（新場地、收費錯誤）： </p><a href="https://forms.gle/euRCPCPSmvYLm5Rj8" target="_blank" rel="noopener" class="btn btn-outline btn-sm" data-v-ed90af5a> Alan大重停車記事 回報表單 </a><p class="muted-text mt-8" data-v-ed90af5a>2. 網頁 BUG、畫面跑版：</p><a href="https://forms.gle/iJCyfqVtpL35WtZM7" target="_blank" rel="noopener" class="btn btn-outline btn-sm" data-v-ed90af5a> 重機能停哪? 回報表單 </a>',5),t5={class:"form-group"},o5=we(()=>c("label",{class:"form-label"},"資訊",-1)),i5={class:"info-list"},s5=we(()=>c("li",null,"版本：v2.3.0",-1)),r5=we(()=>c("li",null,"Web 製作：爽爽",-1)),l5=we(()=>c("li",null,"資料參考：Alan大重停車記事 Google My Map",-1)),a5=we(()=>c("li",null,"地圖：Mapbox GL JS API",-1)),c5=we(()=>c("li",null,"© 2026 爽爽 版權所有。本網頁未經准許，禁止任何商業行為",-1)),d5={__name:"SettingsPanel",props:{parkingType:String,degreeOfFriendliness:String,parkingPriceType:String,priceRangeMin:Number,priceRangeMax:Number,mapStyle:String,active:Boolean,onlyFavorites:Boolean,favoritesCount:{type:Number,default:0},showOfficial:{type:Boolean,default:!0},showOverridden:{type:Boolean,default:!0},showCommunity:{type:Boolean,default:!0},officialCount:{type:Number,default:0},overriddenCount:{type:Number,default:0},communityCount:{type:Number,default:0}},emits:["update:parkingType","update:degreeOfFriendliness","update:parkingPriceType","update:priceRangeMin","update:priceRangeMax","update:mapStyle","update:active","update:onlyFavorites","update:showOfficial","update:showOverridden","update:showCommunity","open-support"],setup(n,{emit:e}){const t=e,o=()=>t("update:active",!1);return(i,s)=>(_(),C("aside",{class:Z(["side-panel",{active:n.active}]),"aria-label":"設定面板"},[c("button",{class:"side-panel-close",onClick:o,"aria-label":"收合設定"},y3),b3,c("div",g3,[c("section",A3,[c("label",_3,[c("span",v3,[P3,k(" 只看我的最愛 "),c("span",C3,"("+B(n.favoritesCount)+")",1)]),c("input",{type:"checkbox",class:"switch",checked:n.onlyFavorites,onChange:s[0]||(s[0]=r=>t("update:onlyFavorites",r.target.checked))},null,40,U3)])]),c("section",E3,[B3,c("div",w3,[c("button",{type:"button",class:Z(["chip source-chip source-chip-official",{active:n.showOfficial}]),onClick:s[1]||(s[1]=r=>t("update:showOfficial",!n.showOfficial)),"aria-pressed":n.showOfficial},[I3,k(" 官方 "),c("span",k3,B(n.officialCount),1)],10,S3),c("button",{type:"button",class:Z(["chip source-chip source-chip-override",{active:n.showOverridden}]),onClick:s[2]||(s[2]=r=>t("update:showOverridden",!n.showOverridden)),"aria-pressed":n.showOverridden},[T3,k(" 修改 "),c("span",N3,B(n.overriddenCount),1)],10,D3),c("button",{type:"button",class:Z(["chip source-chip source-chip-community",{active:n.showCommunity}]),onClick:s[3]||(s[3]=r=>t("update:showCommunity",!n.showCommunity)),"aria-pressed":n.showCommunity},[R3,k(" 共筆 "),c("span",O3,B(n.communityCount),1)],10,M3)])]),c("section",x3,[L3,c("select",{class:"form-control",value:n.parkingType,onChange:s[4]||(s[4]=r=>t("update:parkingType",r.target.value))},[(_(!0),C(Ae,null,xe(L(ut),r=>(_(),C("option",{value:r.value,key:r.value},B(r.name),9,H3))),128))],40,F3)]),c("section",z3,[V3,c("select",{class:"form-control",value:n.degreeOfFriendliness,onChange:s[5]||(s[5]=r=>t("update:degreeOfFriendliness",r.target.value))},[(_(!0),C(Ae,null,xe(L(Xt),r=>(_(),C("option",{value:r.value,key:r.value},B(r.name),9,j3))),128))],40,W3)]),c("section",G3,[K3,c("div",Q3,[c("button",{type:"button",class:Z(["chip",{active:n.parkingPriceType===""}]),onClick:s[6]||(s[6]=r=>t("update:parkingPriceType",""))},"全部",2),c("button",{type:"button",class:Z(["chip chip-free",{active:n.parkingPriceType==="free"}]),onClick:s[7]||(s[7]=r=>t("update:parkingPriceType",n.parkingPriceType==="free"?"":"free"))},[Y3,k(" 免費 ")],2),c("button",{type:"button",class:Z(["chip",{active:n.parkingPriceType==="h"}]),onClick:s[8]||(s[8]=r=>t("update:parkingPriceType","h"))},"計時 /時",2),c("button",{type:"button",class:Z(["chip",{active:n.parkingPriceType==="d"}]),onClick:s[9]||(s[9]=r=>t("update:parkingPriceType","d"))},"計次 /日",2),c("button",{type:"button",class:Z(["chip",{active:n.parkingPriceType==="t"}]),onClick:s[10]||(s[10]=r=>t("update:parkingPriceType","t"))},"計次 /不限時",2)]),/d|h|t/.test(n.parkingPriceType)?(_(),Qi(p3,{key:0,class:"mt-8",min:0,max:300,step:10,"model-min":n.priceRangeMin,"model-max":n.priceRangeMax,suffix:n.parkingPriceType==="h"?" /時":n.parkingPriceType==="d"?" /日":" /次","onUpdate:modelMin":s[11]||(s[11]=r=>t("update:priceRangeMin",r)),"onUpdate:modelMax":s[12]||(s[12]=r=>t("update:priceRangeMax",r))},null,8,["model-min","model-max","suffix"])):W("",!0)]),c("section",X3,[J3,c("select",{class:"form-control",value:n.mapStyle,onChange:s[13]||(s[13]=r=>t("update:mapStyle",r.target.value))},[(_(!0),C(Ae,null,xe(L(tt),r=>(_(),C("option",{value:r.value,key:r.value},B(r.name),9,$3))),128))],40,q3)]),Z3,c("section",e5,[n5,c("button",{type:"button",class:"btn btn-coffee btn-sm mt-8",onClick:s[14]||(s[14]=r=>t("open-support"))}," ❤️ 贊助支持，讓我有動力繼續更新 ")]),c("section",t5,[o5,c("ul",i5,[s5,c("li",null,"地圖資料更新：自動更新於"+B(L(s3)),1),r5,l5,a5,c5])])])],2))}},h5=cn(d5,[["__scopeId","data-v-ed90af5a"]]),qe=n=>(Nn("data-v-d09400e9"),n=n(),Mn(),n),u5=qe(()=>c("span",{class:"material-icons-outlined"},"close",-1)),m5=[u5],p5={class:"info-header"},f5=["src"],y5={class:"info-title"},b5=["aria-label","title"],g5={class:"material-icons-outlined"},A5=["innerHTML"],_5={key:1,class:"info-address"},v5={key:2,class:"info-price"},P5=qe(()=>c("span",{class:"material-icons-outlined"},"payments",-1)),C5=qe(()=>c("span",{class:"info-price-label"},"收費",-1)),U5={class:"info-price-value"},E5={key:0,class:"info-price-tag"},B5={key:3,class:"community-tag"},w5=qe(()=>c("span",{class:"material-icons-outlined"},"push_pin",-1)),S5={key:4,class:"override-tag"},I5=qe(()=>c("span",{class:"material-icons-outlined"},"edit_note",-1)),k5={key:5,class:"source-tag"},D5=qe(()=>c("span",{class:"material-icons-outlined"},"push_pin",-1)),T5={class:"info-meta"},N5={class:"badge-group"},M5={class:"badge"},R5={key:0,class:"badge badge-icon",title:"依圖示分類"},O5={class:"coord"},x5={class:"info-actions"},L5=qe(()=>c("span",{class:"material-icons-outlined"},"edit",-1)),F5=["title"],H5=qe(()=>c("span",{class:"material-icons-outlined"},"edit_note",-1)),z5=qe(()=>c("span",{class:"material-icons-outlined"},"share",-1)),V5={class:"info-actions"},W5=qe(()=>c("span",{class:"material-icons-outlined"},"map",-1)),j5=qe(()=>c("span",{class:"material-icons-outlined"},"map",-1)),G5=qe(()=>c("span",{class:"material-icons-outlined"},"directions",-1)),K5={__name:"ParkingInfoPanel",props:{info:Object,active:Boolean,isMobile:Boolean,isApple:Boolean,isAndroid:Boolean,hasRoute:Boolean,isFavorite:Boolean,isCommunity:{type:Boolean,default:!1},communityMeta:{type:Object,default:null},isOverridden:{type:Boolean,default:!1},overrideMeta:{type:Object,default:null}},emits:["close","route","openMap","toggleFavorite","editCommunity","editOverride","share"],setup(n,{emit:e}){const t=n,o=e,i=new Set(["icon-4.png","icon-14.png","icon-19.png"]),s=l=>l!=null&&l.priceInfo?t.isCommunity||t.isOverridden?!0:!i.has(l==null?void 0:l.parkingIconKey):!1,r=l=>{if(!l)return"";if(/^free$/i.test(l.trim()))return"免費";const a=l.trim().match(/^(\d+(?:\.\d+)?)\s*\/\s*(h|d|次)$/i);if(!a)return l;const d=a[2].toLowerCase(),m=d==="h"?"小時":d==="d"?"日":"次 (不限時)";return`${a[1]} 元 / ${m}`};return(l,a)=>{var d,m,u,f,b,g,w,D;return _(),C("aside",{class:Z(["info-panel",{active:n.active}]),"aria-label":"停車場資訊"},[c("button",{class:"panel-close",onClick:a[0]||(a[0]=U=>o("close")),"aria-label":"關閉"},m5),c("header",p5,[n.info.parkingIcon?(_(),C("img",{key:0,class:"info-icon",src:n.info.parkingIcon,alt:""},null,8,f5)):W("",!0),c("h3",y5,B(n.info.parkingName),1),c("button",{class:Z(["fav-btn",{active:n.isFavorite}]),onClick:a[1]||(a[1]=U=>o("toggleFavorite")),"aria-label":n.isFavorite?"從我的最愛移除":"加入我的最愛",title:n.isFavorite?"從我的最愛移除":"加入我的最愛"},[c("span",g5,B(n.isFavorite?"star":"star_border"),1)],10,b5)]),n.info.parkingNameDes?(_(),C("div",{key:0,class:"info-desc",innerHTML:n.info.parkingNameDes},null,8,A5)):W("",!0),n.info.address?(_(),C("div",_5,B(n.info.address),1)):W("",!0),s(n.info)?(_(),C("div",v5,[P5,C5,c("span",U5,B(r(n.info.priceInfo)),1),n.isOverridden?(_(),C("span",E5,"車友修改")):W("",!0)])):W("",!0),n.isCommunity?(_(),C("div",B5,[w5,c("span",null,[k(" 共筆停車點 "),(m=(d=n.communityMeta)==null?void 0:d.updatedBy)!=null&&m.nickname||(f=(u=n.communityMeta)==null?void 0:u.updatedBy)!=null&&f.id?(_(),C(Ae,{key:0},[k(" · 由 "+B(n.communityMeta.updatedBy.nickname||`匿名#${n.communityMeta.updatedBy.id}`)+" 更新 ",1)],64)):W("",!0)])])):n.isOverridden?(_(),C("div",S5,[I5,c("span",null,[k(" 車友修改資訊 "),(g=(b=n.overrideMeta)==null?void 0:b.updatedBy)!=null&&g.nickname||(D=(w=n.overrideMeta)==null?void 0:w.updatedBy)!=null&&D.id?(_(),C(Ae,{key:0},[k(" · 由 "+B(n.overrideMeta.updatedBy.nickname||`匿名#${n.overrideMeta.updatedBy.id}`)+" 更新 ",1)],64)):W("",!0)])])):W("",!0),!n.isCommunity&&n.info.sourceLabel?(_(),C("div",k5,[D5,c("span",null,"資料來源 · "+B(n.info.sourceLabel),1)])):W("",!0),c("div",T5,[c("div",N5,[c("span",M5,B(n.info.parkingType),1),n.info.iconCategory&&n.info.iconCategory!==n.info.parkingType?(_(),C("span",R5,B(n.info.iconCategory),1)):W("",!0)]),c("span",O5,B(Number(n.info.geometry[0]).toFixed(5))+", "+B(Number(n.info.geometry[1]).toFixed(5)),1)]),c("div",x5,[n.isCommunity?(_(),C("button",{key:0,class:"btn btn-outline btn-sm",onClick:a[2]||(a[2]=U=>o("editCommunity"))},[L5,k(" 編輯 ")])):(_(),C("button",{key:1,class:"btn btn-outline btn-sm",onClick:a[3]||(a[3]=U=>o("editOverride")),title:n.isOverridden?"修改車友提供的資訊 (不會變動官方資料)":"異議 / 補充官方資料 (不會變動官方資料)"},[H5,k(" "+B(n.isOverridden?"修改車友資訊":"異議 / 補充"),1)],8,F5)),c("button",{class:"btn btn-outline btn-sm",onClick:a[4]||(a[4]=U=>o("share")),title:"分享這個停車點"},[z5,k(" 分享 ")])]),c("div",V5,[n.isAndroid?W("",!0):(_(),C("button",{key:0,class:"btn btn-primary btn-sm",onClick:a[5]||(a[5]=U=>o("openMap","apple"))},[W5,k(" Apple Map ")])),c("button",{class:Z(["btn","btn-sm",n.isAndroid?"btn-primary":"btn-outline"]),onClick:a[6]||(a[6]=U=>o("openMap","google"))},[j5,k(" Google Map ")],2),n.hasRoute?W("",!0):(_(),C("button",{key:1,class:"btn btn-outline btn-sm",onClick:a[7]||(a[7]=U=>o("route"))},[G5,k(" 路線規劃 ")]))])],2)}}},Q5=cn(K5,[["__scopeId","data-v-d09400e9"]]),Rs=n=>(Nn("data-v-caf0ec6e"),n=n(),Mn(),n),Y5={class:"route-header"},X5=Rs(()=>c("h3",null,[c("span",{class:"material-icons-outlined"},"alt_route"),k(" 路線 ")],-1)),J5=["aria-expanded"],q5={class:"material-icons-outlined"},$5={key:0,class:"route-summary"},Z5={class:"route-summary-item"},e4=Rs(()=>c("span",{class:"material-icons-outlined"},"schedule",-1)),n4={class:"route-summary-item"},t4=Rs(()=>c("span",{class:"material-icons-outlined"},"straighten",-1)),o4={class:"route-profile",role:"tablist","aria-label":"交通方式"},i4=["onClick","aria-pressed"],s4={class:"material-icons-outlined"},r4={class:"profile-label"},l4={key:1,class:"route-steps"},a4={__name:"RouteSteps",props:{routeData:Object,active:Boolean,profile:{type:String,default:"driving"}},emits:["cancel","update:profile"],setup(n,{emit:e}){const t=n,o=e,i=E(!0),s=()=>i.value=!i.value,r=[{value:"driving",label:"汽機車",icon:"directions_car"},{value:"cycling",label:"單車",icon:"directions_bike"},{value:"walking",label:"步行",icon:"directions_walk"}],l=X(()=>{var u;const m=(u=t.routeData)==null?void 0:u.distance;return typeof m!="number"?"":m>=1e3?`${(m/1e3).toFixed(1)} km`:`${Math.round(m)} m`}),a=X(()=>{var g;const m=(g=t.routeData)==null?void 0:g.duration;if(typeof m!="number")return"";const u=Math.round(m/60);if(u<60)return`${u} 分`;const f=Math.floor(u/60),b=u%60;return b?`${f} 時 ${b} 分`:`${f} 時`}),d=m=>o("update:profile",m);return(m,u)=>(_(),C("aside",{class:Z(["route-panel",{active:n.active}])},[c("header",Y5,[X5,c("button",{class:"route-toggle",onClick:s,"aria-expanded":i.value},[c("span",q5,B(i.value?"expand_less":"expand_more"),1)],8,J5)]),n.routeData?(_(),C("div",$5,[c("div",Z5,[e4,c("strong",null,B(a.value),1)]),c("div",n4,[t4,c("strong",null,B(l.value),1)])])):W("",!0),c("div",o4,[(_(),C(Ae,null,xe(r,f=>c("button",{key:f.value,class:Z(["profile-btn",{active:n.profile===f.value}]),onClick:b=>d(f.value),"aria-pressed":n.profile===f.value},[c("span",s4,B(f.icon),1),c("span",r4,B(f.label),1)],10,i4)),64))]),n.routeData&&i.value?(_(),C("ol",l4,[(_(!0),C(Ae,null,xe(n.routeData.legs[0].steps,(f,b)=>(_(),C("li",{key:b,class:"route-step"},B(f.maneuver.instruction),1))),128))])):W("",!0),c("button",{class:"btn btn-danger btn-sm route-cancel",onClick:u[0]||(u[0]=f=>o("cancel"))}," 取消路線規劃 ")],2))}},c4=cn(a4,[["__scopeId","data-v-caf0ec6e"]]);function d4(n,e,t=20,o=[]){const i=(e||"").trim().toLowerCase();if(!i)return[];const s=[];if(Array.isArray(n))for(const r of n)for(const l of r.features){const a=(l.properties.name||"").toLowerCase(),d=(l.properties.description||"").toLowerCase();if((a.includes(i)||d.includes(i))&&(s.push({groupName:r.name,name:l.properties.name,description:l.properties.description,icon:l.properties.icon,geometry:l.geometry.coordinates,properties:l.properties,isCommunity:!1,score:(a.includes(i)?1e3:0)-(a.indexOf(i)===-1?0:a.indexOf(i))}),s.length>500))break}if(Array.isArray(o))for(const r of o){const l=(r.name||"").toLowerCase(),a=(r.description||"").toLowerCase();if(!l.includes(i)&&!a.includes(i))continue;const d=Array.isArray(r.coordinates)?r.coordinates:[null,null];if(!(d[0]==null||d[1]==null)&&(s.push({groupName:"共筆停車點",name:r.name,description:r.description,icon:r.iconKey,geometry:d,properties:{name:r.name,description:r.description,icon:r.iconKey},isCommunity:!0,community:r,score:(l.includes(i)?900:0)-(l.indexOf(i)===-1?0:l.indexOf(i))}),s.length>500))break}return s.sort((r,l)=>l.score-r.score),s.slice(0,t)}const tc=n=>(Nn("data-v-2b0f75f6"),n=n(),Mn(),n),h4={key:0,class:"search-results",role:"listbox"},u4=["aria-selected","onMouseenter","onClick"],m4=["src"],p4={class:"search-item-text"},f4={class:"search-item-name"},y4={class:"search-item-group"},b4={key:1,class:"search-empty"},g4={class:"search-box",role:"combobox","aria-expanded":"true"},A4=tc(()=>c("span",{class:"material-icons-outlined search-icon"},"search",-1)),_4=tc(()=>c("span",{class:"material-icons-outlined"},"close",-1)),v4=[_4],P4=["aria-label","aria-expanded"],C4={class:"material-icons-outlined"},U4={__name:"SearchBar",props:{mapDataList:Array,communityParkings:{type:Array,default:()=>[]}},emits:["select"],setup(n,{emit:e}){const t=n,o=e,i=E(!1),s=E(""),r=E(-1),l=X(()=>s.value?d4(t.mapDataList,s.value,15,t.communityParkings):[]);Y(s,()=>{r.value=-1});const a=()=>{i.value=!i.value,i.value||(s.value="")},d=()=>{i.value=!1,s.value=""},m=f=>{o("select",f),d()},u=f=>{if(l.value.length)if(f.key==="ArrowDown")f.preventDefault(),r.value=(r.value+1)%l.value.length;else if(f.key==="ArrowUp")f.preventDefault(),r.value=(r.value-1+l.value.length)%l.value.length;else if(f.key==="Enter"){f.preventDefault();const b=r.value>=0?r.value:0;m(l.value[b])}else f.key==="Escape"&&d()};return(f,b)=>(_(),C("div",{class:Z(["search-wrap",{open:i.value}])},[i.value&&l.value.length?(_(),C("ul",h4,[(_(!0),C(Ae,null,xe(l.value,(g,w)=>(_(),C("li",{key:w,class:Z(["search-item",{active:w===r.value}]),role:"option","aria-selected":w===r.value,onMouseenter:D=>r.value=w,onClick:D=>m(g)},[g.icon?(_(),C("img",{key:0,src:L(ne)(g.icon),class:"search-item-icon",alt:""},null,8,m4)):W("",!0),c("div",p4,[c("div",f4,B(g.name),1),c("div",y4,B(g.groupName),1)])],42,u4))),128))])):i.value&&s.value&&!l.value.length?(_(),C("div",b4," 找不到「"+B(s.value)+"」相關停車場 ",1)):W("",!0),Ge(c("div",g4,[A4,Ge(c("input",{"onUpdate:modelValue":b[0]||(b[0]=g=>s.value=g),class:"search-input",type:"text",placeholder:"搜尋停車場名稱…",autofocus:"",onKeydown:u},null,544),[[kt,s.value]]),s.value?(_(),C("button",{key:0,class:"search-clear",onClick:b[1]||(b[1]=g=>s.value=""),"aria-label":"清除"},v4)):W("",!0)],512),[[nt,i.value]]),c("button",{class:Z(["search-toggle",{active:i.value}]),onClick:a,"aria-label":i.value?"關閉搜尋":"開啟搜尋","aria-expanded":i.value},[c("span",C4,B(i.value?"close":"search"),1)],10,P4)],2))}},E4=cn(U4,[["__scopeId","data-v-2b0f75f6"]]),On=n=>(Nn("data-v-2a54cb8a"),n=n(),Mn(),n),B4={class:"editor-body"},w4={key:0,class:"editor-note override-note"},S4=On(()=>c("span",{class:"material-icons-outlined"},"edit_note",-1)),I4={key:1,class:"editor-note"},k4=On(()=>c("span",{class:"material-icons-outlined"},"push_pin",-1)),D4={class:"form-group"},T4={class:"form-label"},N4={key:0},M4={key:1,class:"hint-inline"},R4=["readonly","disabled"],O4={class:"form-group"},x4=On(()=>c("label",{class:"form-label"},"類別",-1)),L4=["value"],F4={class:"form-group"},H4={class:"form-label"},z4={key:0,class:"hint-inline"},V4=["disabled"],W4=["value"],j4={class:"form-group"},G4=On(()=>c("label",{class:"form-label"},"收費",-1)),K4={class:"chip-row"},Q4=["onClick"],Y4={key:0,class:"price-amount"},X4={class:"unit"},J4={key:1,class:"price-amount"},q4={class:"form-group"},$4=On(()=>c("label",{class:"form-label"},"說明(選填)",-1)),Z4={class:"form-group"},em=On(()=>c("label",{class:"form-label"},"暱稱(選填)",-1)),nm=["value"],tm={key:2,class:"error-msg"},om={key:3,class:"form-group history-section"},im={class:"form-label"},sm=On(()=>c("span",{class:"material-icons-outlined",style:{"font-size":"14px","vertical-align":"-2px"}},"history",-1)),rm={class:"history-list"},lm={class:"h-row1"},am={class:"h-by"},cm={class:"h-time"},dm={key:0,class:"h-diff h-diff-note"},hm={key:1,class:"h-diff-list"},um={class:"h-diff-label"},mm={class:"h-diff-old"},pm=On(()=>c("span",{class:"h-diff-arrow"},"→",-1)),fm={class:"h-diff-new"},ym={key:2,class:"h-diff h-diff-note"},bm=["disabled"],gm=["disabled"],Am=["disabled"],_m=["disabled"],vm={__name:"CommunityParkingEditor",props:{open:Boolean,mode:{type:String,default:"add"},initial:{type:Object,default:null},defaultCoord:{type:Array,default:()=>[121.5173399,25.0475613]},nickname:{type:String,default:""},isOwner:{type:Boolean,default:!1},isAdmin:{type:Boolean,default:!1},submitting:{type:Boolean,default:!1},hasExistingOverride:{type:Boolean,default:!1},history:{type:Array,default:()=>[]}},emits:["update:open","update:nickname","submit","delete","reset"],setup(n,{emit:e}){const t=n,o=e,i=E(""),s=E(""),r=E("motorcycle"),l=E("friendly"),a=E("free"),d=E(""),m=E(""),u=E([null,null]),f=X(()=>ut.filter(A=>A.value)),b=X(()=>Xt.filter(A=>A.value)),g={greenStar:"icon-14.png",friendlyShop:"icon-4.png",greenP:"icon-15.png",greyP:"icon-16.png",blueP:"icon-17.png",purpleP:"icon-18.png",redX:"icon-19.png",unknown:"icon-20.png"},w=X(()=>{if(g[r.value])return g[r.value];const A=ut.find(ve=>ve.value===r.value),R=Xt.find(ve=>ve.value===l.value);return A?R&&A.key.find(ve=>R.key.includes(ve))||A.key[0]:"icon-3.png"}),D=X(()=>!!g[r.value]);function U(A){return A?String(A).replace(/<br\s*\/?>/gi,`
`):""}function j(A){return A?String(A).replace(/\r\n|\r|\n/g,"<br>"):""}function N(A){if(!A)return{type:"free",amount:"",custom:""};const R=A.trim();if(/^free$/i.test(R))return{type:"free",amount:"",custom:""};const I=R.match(/^(\d+(?:\.\d+)?)\s*\/\s*([hd次])$/i);return I?{type:I[2].toLowerCase(),amount:I[1],custom:""}:{type:"custom",amount:"",custom:R}}function Q(){return a.value==="free"?"Free":a.value==="custom"?m.value.trim():d.value?`${d.value}/${a.value}`:""}const _e=()=>{if((t.mode==="edit"||t.mode==="override")&&t.initial){i.value=t.initial.name||"",s.value=U(t.initial.description||""),r.value=t.initial.category||"motorcycle",l.value=t.initial.friendliness||"friendly";const A=N(t.initial.priceInfo||"");a.value=A.type,d.value=A.amount,m.value=A.custom,u.value=t.initial.coordinates?[...t.initial.coordinates]:[...t.defaultCoord]}else i.value="",s.value="",r.value="motorcycle",l.value="friendly",a.value="free",d.value="",m.value="",u.value=[...t.defaultCoord]};Y(()=>t.open,A=>{A&&_e()});const oe=E(""),Re=()=>{if(oe.value="",!i.value.trim()){oe.value="請輸入名稱";return}if(u.value[0]==null||u.value[1]==null||Number.isNaN(Number(u.value[0]))||Number.isNaN(Number(u.value[1]))){oe.value="座標無效";return}o("submit",{name:i.value,description:j(s.value),iconKey:w.value,category:r.value,friendliness:D.value?"":l.value,priceInfo:Q(),coordinates:[Number(u.value[0]),Number(u.value[1])]})},De=()=>{var A;(A=t.initial)!=null&&A.id&&window.confirm(`確定要刪除「${i.value}」?此動作無法復原。`)&&o("delete",t.initial.id)},$e=()=>{window.confirm(`確定要重設「${i.value}」回官方原始資料嗎?
你和其他車友先前的修改將被移除。`)&&o("reset")},dn=X({get:()=>t.open,set:A=>o("update:open",A)}),Te=[{value:"free",label:"免費"},{value:"h",label:"計時 / 小時"},{value:"d",label:"計次 / 天"},{value:"次",label:"計次 / 不限時"},{value:"custom",label:"其他"}],ce=E(!1),He=X(()=>!t.history||t.history.length===0?[]:ce.value?t.history:t.history.slice(0,5)),P={create:"新增",update:"修改",delete:"刪除",override:"覆寫",reset:"重設"};function O(A){return P[A]||A||"變更"}function $(A){return A?A.nickname||(A.id?`匿名#${A.id}`:"匿名"):"系統"}function pe(A){if(!A||!isFinite(Number(A)))return"";const R=new Date(Number(A)),I=ve=>String(ve).padStart(2,"0");return`${R.getFullYear()}/${I(R.getMonth()+1)}/${I(R.getDate())} ${I(R.getHours())}:${I(R.getMinutes())}`}const G={name:"名稱",description:"說明",iconKey:"圖示",category:"類別",friendliness:"友善度",priceInfo:"收費",lng:"經度",lat:"緯度"};function de(A){if(A==null||A==="")return"(空)";if(typeof A=="number")return String(A);const R=String(A).replace(/<br\s*\/?>/gi,`
`);return R.length>80?R.slice(0,80)+"…":R}function Ne(A){return A==null?"":typeof A=="string"?A.trim():String(A)}function fe(A){return Ne(A)===""}function ze(A,R){if(!A||A.action==="delete"||A.action==="reset")return[];if(A.after&&typeof A.after=="object")return Object.keys(A.after).filter(K=>{var ye;const me=(ye=A.before)==null?void 0:ye[K],Me=A.after[K];return!(fe(me)&&fe(Me)||Ne(me)===Ne(Me)||fe(me))}).map(K=>{var me;return{label:G[K]||K,before:de((me=A.before)==null?void 0:me[K]),after:de(A.after[K]),hasBefore:!0}});const I=A.snapshot;if(!I||typeof I!="object")return[];const ve=new Set(["createdAt","createdBy","updatedAt","updatedBy","origName","origLng","origLat","history"]),Ke=t.history.findIndex(x=>x._key===A._key),We=Ke>=0?t.history[Ke+1]:null,An=We?We.after&&typeof We.after=="object"?{...We.before||{},...We.after}:We.snapshot||null:null,V=[];for(const x of Object.keys(I)){if(ve.has(x))continue;const K=I[x];if(An&&Object.prototype.hasOwnProperty.call(An,x)){const me=An[x];if(Ne(me)===Ne(K)||fe(me))continue;V.push({label:G[x]||x,before:de(me),after:de(K),hasBefore:!0})}}return V}function Ve(A){return(A==null?void 0:A.action)==="delete"?"該項目被刪除":(A==null?void 0:A.action)==="reset"?"重設為官方資料":(A==null?void 0:A.action)==="create"?"新增此停車點":""}return(A,R)=>(_(),Qi(pn,{modelValue:dn.value,"onUpdate:modelValue":R[9]||(R[9]=I=>dn.value=I),title:n.mode==="override"?"修改官方停車點":n.mode==="edit"?"編輯停車場":"新增停車場",size:"md"},{footer:Ye(()=>[n.mode==="edit"&&n.isOwner?(_(),C("button",{key:0,class:"btn btn-danger btn-sm",disabled:n.submitting,onClick:De}," 刪除 ",8,bm)):W("",!0),n.mode==="override"&&n.hasExistingOverride&&n.isAdmin?(_(),C("button",{key:1,class:"btn btn-danger btn-sm",disabled:n.submitting,onClick:$e,title:"僅站方可使用"}," 重設為官方資料 ",8,gm)):W("",!0),c("button",{class:"btn btn-outline",disabled:n.submitting,onClick:R[8]||(R[8]=I=>dn.value=!1)}," 取消 ",8,Am),c("button",{class:"btn btn-primary",disabled:n.submitting,onClick:Re},B(n.submitting?"送出中…":n.mode==="override"||n.mode==="edit"?"儲存修改":"新增"),9,_m)]),default:Ye(()=>[c("div",B4,[n.mode==="override"?(_(),C("p",w4,[S4,k(" 你正在「修改官方停車點」:這層修改只會疊加在官方資料之上,不會覆蓋原始資料。所有車友都會看到你的修改,也可以再被其他人修改或重設。 ")])):(_(),C("p",I4,[k4,k(" 共筆停車點:任何人都可以新增或修改。請確認資訊正確、避免不雅內容。 ")])),c("section",D4,[c("label",T4,[k(" 名稱 "),n.mode!=="override"?(_(),C("span",N4,"*")):W("",!0),n.mode==="override"?(_(),C("span",M4,"(官方名稱不可修改)")):W("",!0)]),Ge(c("input",{"onUpdate:modelValue":R[0]||(R[0]=I=>i.value=I),class:"form-control",type:"text",placeholder:"例:三張里地下停車場",maxlength:"60",readonly:n.mode==="override",disabled:n.mode==="override"},null,8,R4),[[kt,i.value]])]),c("section",O4,[x4,Ge(c("select",{"onUpdate:modelValue":R[1]||(R[1]=I=>r.value=I),class:"form-control"},[(_(!0),C(Ae,null,xe(f.value,I=>(_(),C("option",{key:I.value,value:I.value},B(I.name),9,L4))),128))],512),[[qs,r.value]])]),c("section",F4,[c("label",H4,[k(" 友善程度 "),D.value?(_(),C("span",z4,"(此類別不適用)")):W("",!0)]),Ge(c("select",{"onUpdate:modelValue":R[2]||(R[2]=I=>l.value=I),class:"form-control",disabled:D.value},[(_(!0),C(Ae,null,xe(b.value,I=>(_(),C("option",{key:I.value,value:I.value},B(I.name),9,W4))),128))],8,V4),[[qs,l.value]])]),c("section",j4,[G4,c("div",K4,[(_(),C(Ae,null,xe(Te,I=>c("button",{key:I.value,type:"button",class:Z(["chip",{active:a.value===I.value}]),onClick:ve=>a.value=I.value},B(I.label),11,Q4)),64))]),a.value==="h"||a.value==="d"||a.value==="次"?(_(),C("div",Y4,[Ge(c("input",{"onUpdate:modelValue":R[3]||(R[3]=I=>d.value=I),type:"number",min:"0",step:"1",class:"form-control compact",placeholder:"金額"},null,512),[[kt,d.value]]),c("span",X4," 元 / "+B(a.value==="h"?"小時":a.value==="d"?"天":"次 (不限時)"),1)])):a.value==="custom"?(_(),C("div",J4,[Ge(c("input",{"onUpdate:modelValue":R[4]||(R[4]=I=>m.value=I),type:"text",class:"form-control",placeholder:"如:平日 30/h、假日 50/d",maxlength:"40"},null,512),[[kt,m.value]])])):W("",!0)]),c("section",q4,[$4,Ge(c("textarea",{"onUpdate:modelValue":R[5]||(R[5]=I=>s.value=I),class:"form-control",rows:"3",placeholder:"後牌辨析、24h、注意事項...",maxlength:"500"},null,512),[[kt,s.value]])]),c("section",Z4,[em,c("input",{value:n.nickname,onInput:R[6]||(R[6]=I=>o("update:nickname",I.target.value)),class:"form-control",type:"text",placeholder:"留空將顯示「匿名#xxx-xxx」",maxlength:"20"},null,40,nm)]),oe.value?(_(),C("p",tm,B(oe.value),1)):W("",!0),n.history.length?(_(),C("section",om,[c("label",im,[sm,k(" 修改紀錄 ("+B(n.history.length)+") ",1)]),c("ul",rm,[(_(!0),C(Ae,null,xe(He.value,(I,ve)=>(_(),C("li",{key:I._key,class:"history-item"},[c("div",lm,[c("span",{class:Z(["h-action",`h-action-${I.action||"other"}`])},B(O(I.action)),3),c("span",am,B($(I.by)),1),c("span",cm,B(pe(I.at)),1)]),Ve(I)?(_(),C("div",dm,B(Ve(I)),1)):ze(I,ve).length?(_(),C("ul",hm,[(_(!0),C(Ae,null,xe(ze(I,ve),(Ke,We)=>(_(),C("li",{key:We,class:"h-diff-item"},[c("span",um,B(Ke.label),1),Ke.hasBefore?(_(),C(Ae,{key:0},[c("span",mm,B(Ke.before),1),pm],64)):W("",!0),c("span",fm,B(Ke.after),1)]))),128))])):(_(),C("div",ym,"(與上一筆相同)"))]))),128))]),n.history.length>5?(_(),C("button",{key:0,type:"button",class:"history-toggle",onClick:R[7]||(R[7]=I=>ce.value=!ce.value)},B(ce.value?"收起":`顯示全部 ${n.history.length} 筆`),1)):W("",!0)])):W("",!0)])]),_:1},8,["modelValue","title"]))}},Pm=cn(vm,[["__scopeId","data-v-2a54cb8a"]]),Cm={class:"tour-card-head"},Um={class:"tour-step-index"},Em={class:"tour-title"},Bm={key:0,class:"material-icons-outlined"},wm={class:"tour-desc"},Sm={class:"tour-actions"},Im={key:0,class:"material-icons-outlined"},km={key:1,class:"material-icons-outlined"},Cn=8,Dm=12,$r=300,ao=16,Tm={__name:"OnboardingTour",props:{active:{type:Boolean,default:!1},steps:{type:Array,required:!0}},emits:["update:active","finish"],setup(n,{emit:e}){const t=n,o=e,i=E(0),s=E(null),r=E(!1),l=X(()=>t.steps[i.value]||null),a=X(()=>i.value>=t.steps.length-1),d=async()=>{await ml();const U=l.value;if(!U){s.value=null;return}const j=U.selector?document.querySelector(U.selector):null;if(!j){s.value=null;return}const N=j.getBoundingClientRect();if(N.width===0&&N.height===0){s.value=null;return}s.value={top:N.top,left:N.left,width:N.width,height:N.height}},m=async()=>{for(let U=0;U<8;U++){if(await d(),s.value)return;await new Promise(j=>setTimeout(j,150))}};Y(()=>[t.active,i.value],async([U])=>{if(!U){r.value=!1;return}r.value=!1,await m(),r.value=!0},{immediate:!0});const u=()=>d();Yn(()=>{window.addEventListener("resize",u),window.addEventListener("scroll",u,!0)}),mt(()=>{window.removeEventListener("resize",u),window.removeEventListener("scroll",u,!0)});const f=X(()=>{const U=s.value;return U?{top:U.top-Cn+"px",left:U.left-Cn+"px",width:U.width+Cn*2+"px",height:U.height+Cn*2+"px",borderRadius:Dm+"px"}:{display:"none"}}),b=X(()=>{var dn;const U=s.value,j=window.innerWidth,N=window.innerHeight;if(!U)return{top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:Math.min($r,j-32)+"px"};const Q=((dn=l.value)==null?void 0:dn.placement)||"auto";let _e=Q;if(Q==="auto"){const Te=N-(U.top+U.height),ce=U.top;_e=Te>=ce?"bottom":"top"}const oe=Math.min($r,j-32);let Re,De,$e="";return _e==="bottom"?(Re=U.top+U.height+ao+Cn,De=Math.max(16,Math.min(j-oe-16,U.left+U.width/2-oe/2))):_e==="top"?(Re=U.top-ao-Cn,De=Math.max(16,Math.min(j-oe-16,U.left+U.width/2-oe/2)),$e="translateY(-100%)"):_e==="right"?(Re=Math.max(16,U.top+U.height/2),De=U.left+U.width+ao+Cn,$e="translateY(-50%)"):(Re=Math.max(16,U.top+U.height/2),De=U.left-ao-Cn,$e="translate(-100%, -50%)"),{top:Re+"px",left:De+"px",width:oe+"px",transform:$e}}),g=()=>{a.value?D():i.value+=1},w=()=>D(),D=()=>{o("update:active",!1),o("finish"),i.value=0};return Y(()=>t.active,U=>{U&&(i.value=0)}),(U,j)=>n.active&&l.value?(_(),C("div",{key:0,class:Z(["tour-root",{"is-ready":r.value}])},[c("div",{class:"tour-spotlight",style:fo(f.value)},null,4),c("div",{class:"tour-backdrop",onClick:Mo(g,["self"])}),c("div",{class:"tour-card",style:fo(b.value),role:"dialog","aria-modal":"true"},[c("div",Cm,[c("span",Um,B(i.value+1)+" / "+B(n.steps.length),1),c("button",{class:"tour-skip",onClick:w,"aria-label":"略過導覽"},"略過")]),c("h3",Em,[l.value.icon?(_(),C("span",Bm,B(l.value.icon),1)):W("",!0),k(" "+B(l.value.title),1)]),c("p",wm,B(l.value.description),1),c("div",Sm,[c("button",{class:"btn btn-primary tour-next",onClick:g},[k(B(a.value?"完成":"下一步")+" ",1),a.value?(_(),C("span",km,"check")):(_(),C("span",Im,"arrow_forward"))])])],4)],2)):W("",!0)}},Nm=cn(Tm,[["__scopeId","data-v-1d730a34"]]),En="community_parkings",Wi=E([]),oc=E(!1),ji=E(null);let Lt=null,pi=0;function Mm(){if(!(!hn||Lt))try{const n=Cu(tn(Xe,En),Pu("updatedAt"));Lt=n,$a(n,e=>{const t=[];e.forEach(o=>{var s,r;const i=o.val()||{};t.push({id:o.key,name:i.name||"",description:i.description||"",iconKey:i.iconKey||"icon-3.png",category:i.category||"",friendliness:i.friendliness||"",priceInfo:i.priceInfo||"",coordinates:[(s=i.lng)!=null?s:null,(r=i.lat)!=null?r:null],createdBy:i.createdBy||null,updatedBy:i.updatedBy||null,createdAt:i.createdAt||null,updatedAt:i.updatedAt||null,history:Om(i.history)})}),Wi.value=t.reverse(),oc.value=!0},e=>{ji.value=e})}catch(n){ji.value=n}}function Rm(){Lt&&(Za(Lt),Lt=null)}function Om(n){return!n||typeof n!="object"?[]:Object.entries(n).map(([e,t])=>({...t||{},_key:e})).sort((e,t)=>e._key<t._key?1:e._key>t._key?-1:0)}function xm(){return Yn(()=>{pi+=1,Mm()}),mt(()=>{pi-=1,pi<=0&&Rm()}),{items:Wi,ready:oc,error:ji,addParking:async(o,i)=>{var f,b,g;if(!hn)throw new Error("Firebase 尚未設定");const[s,r]=o.coordinates,a=ho(tn(Xe,En)).key,d={id:i.id,nickname:i.nickname||""},m={name:((f=o.name)==null?void 0:f.trim())||"",description:((b=o.description)==null?void 0:b.trim())||"",iconKey:o.iconKey||"icon-3.png",category:o.category||"",friendliness:o.friendliness||"",priceInfo:((g=o.priceInfo)==null?void 0:g.trim())||"",lng:Number(s),lat:Number(r),createdBy:d,createdAt:zn(),updatedBy:d,updatedAt:zn()},u=ho(tn(Xe,`${En}/${a}/history`)).key;return await Fi(tn(Xe),{[`${En}/${a}`]:{...m,history:{[u]:{action:"create",at:zn(),by:d,snapshot:m}}}}),a},updateParking:async(o,i,s)=>{var g,w,D,U,j;if(!hn)throw new Error("Firebase 尚未設定");const r={id:s.id,nickname:s.nickname||""},l=Wi.value.find(N=>N.id===o)||{},a={};if(i.name!==void 0&&(a.name=((g=i.name)==null?void 0:g.trim())||""),i.description!==void 0&&(a.description=((w=i.description)==null?void 0:w.trim())||""),i.iconKey!==void 0&&(a.iconKey=i.iconKey),i.category!==void 0&&(a.category=i.category),i.friendliness!==void 0&&(a.friendliness=i.friendliness),i.priceInfo!==void 0&&(a.priceInfo=((D=i.priceInfo)==null?void 0:D.trim())||""),i.coordinates){const[N,Q]=i.coordinates;a.lng=Number(N),a.lat=Number(Q)}const d={},m={};for(const N of Object.keys(a)){let Q;N==="lng"?Q=(U=l.coordinates)==null?void 0:U[0]:N==="lat"?Q=(j=l.coordinates)==null?void 0:j[1]:Q=l[N];const _e=Q==null?"":Q,oe=a[N]===void 0||a[N]===null?"":a[N];_e!==oe&&(d[N]=Q!=null?Q:"",m[N]=a[N])}const u={...a,updatedBy:r,updatedAt:zn()},f=ho(tn(Xe,`${En}/${o}/history`)).key,b={};for(const N of Object.keys(u))b[`${En}/${o}/${N}`]=u[N];return b[`${En}/${o}/history/${f}`]={action:"update",at:zn(),by:r,before:d,after:m},Fi(tn(Xe),b)},deleteParking:async o=>{if(!hn)throw new Error("Firebase 尚未設定");return qa(tn(Xe,`${En}/${o}`))}}}var Lm={VITE_FIREBASE_DATABASE_URL:"https://findparkinglot-2519e-default-rtdb.asia-southeast1.firebasedatabase.app",VITE_FIREBASE_MESSAGING_SENDER_ID:"976769533420",VITE_FIREBASE_MEASUREMENT_ID:"G-XMR8C87T1P",VITE_FIREBASE_STORAGE_BUCKET:"findparkinglot-2519e.firebasestorage.app",VITE_FIREBASE_AUTH_DOMAIN:"findparkinglot-2519e.firebaseapp.com",VITE_MAPBOX_TOKEN:"pk.eyJ1IjoiamFtZXN0aW05MjE1IiwiYSI6ImNrdmo2Y2I4aDVmejEzMm1zbThsdGdoajAifQ.UfBJAI7fFsv2wcAEBo6WUA",VITE_FIREBASE_PROJECT_ID:"findparkinglot-2519e",VITE_FIREBASE_APP_ID:"1:976769533420:web:f3108318b3def30017acc9",VITE_FIREBASE_API_KEY:"AIzaSyBoxwl4suSMEJu78PJBz51DsX3Tbd_wuqs",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ic="community_user_id",sc="community_user_nickname",Fm="community_is_admin",Hm=String(Lm.VITE_ADMIN_USER_IDS||"").split(",").map(n=>n.trim()).filter(Boolean);function zm(){const n=e=>Array.from(crypto.getRandomValues(new Uint8Array(e))).map(t=>t.toString(16).padStart(2,"0")).join("");return`${n(2)}-${n(2)}`}let po=sn.get(ic);po||(po=zm(),sn.set(ic,po));const Gi=po,Ki=E(sn.get(sc)||""),Vm=Hm.includes(Gi)||sn.get(Fm)==="1";Y(Ki,n=>sn.set(sc,n||""));function Wm(){return{userId:Gi,nickname:Ki,displayName:()=>{var e;return((e=Ki.value)==null?void 0:e.trim())||`匿名#${Gi}`},isAdmin:Vm}}const jm=()=>typeof window!="undefined"&&typeof window.gtag=="function",ge=(n,e={})=>{if(jm())try{window.gtag("event",n,e)}catch(t){}},S=n=>(Nn("data-v-8c02e793"),n=n(),Mn(),n),Gm={class:"app-title"},Km=["aria-label","aria-expanded"],Qm={class:"material-icons-outlined"},Ym={key:1,class:"title-logo",src:Yi,alt:"重機能停哪"},Xm=S(()=>c("h1",null,"重機能停哪?",-1)),Jm=S(()=>c("span",{class:"material-icons-outlined"},"emoji_events",-1)),qm=[Jm],$m=S(()=>c("pre",{id:"coordinates",class:"coordinates"},null,-1)),Zm=S(()=>c("h4",{class:"modal-section-title"},"圖案代表甚麼格位",-1)),ep={class:"legend-list"},np={class:"legend-row"},tp=["src"],op={class:"legend-row"},ip=["src"],sp={class:"legend-row"},rp=["src"],lp={class:"legend-row"},ap=["src"],cp={class:"legend-row"},dp=["src"],hp={class:"legend-row"},up=["src"],mp={class:"legend-row"},pp=["src"],fp={class:"legend-row"},yp=["src"],bp={class:"legend-row"},gp=["src"],Ap={class:"legend-row"},_p=["src"],vp={class:"legend-row"},Pp=["src"],Cp=S(()=>c("h4",{class:"modal-section-title"},"顏色代表入場方式",-1)),Up={class:"legend-list"},Ep={class:"legend-row"},Bp=["src"],wp=["src"],Sp=["src"],Ip={class:"legend-row"},kp=["src"],Dp=["src"],Tp=["src"],Np={class:"legend-row"},Mp=["src"],Rp=["src"],Op=["src"],xp={class:"legend-row"},Lp=["src"],Fp=["src"],Hp=["src"],zp=S(()=>c("h4",{class:"modal-section-title"},"名稱前有價錢",-1)),Vp={class:"legend-list"},Wp={class:"legend-row"},jp=["src"],Gp=S(()=>c("div",{class:"legend-row"},[c("div",{class:"legend-text"},[k(" ・數字:金額,時段費率複雜會以最高收費標示"),c("br"),k(" ・d/h:d 為計次,h 為計時"),c("br"),k(" ・Free 代表免費 ")])],-1)),Kp={class:"share-grid"},Qp=S(()=>c("img",{src:fl,alt:""},null,-1)),Yp=S(()=>c("span",null,"Facebook",-1)),Xp=[Qp,Yp],Jp=S(()=>c("img",{src:yl,alt:""},null,-1)),qp=S(()=>c("span",null,"LINE",-1)),$p=[Jp,qp],Zp=S(()=>c("img",{src:bl,alt:""},null,-1)),ef=S(()=>c("span",null,"Twitter",-1)),nf=[Zp,ef],tf=S(()=>c("img",{src:gl,alt:""},null,-1)),of=S(()=>c("span",null,"複製連結",-1)),sf=[tf,of],rf={class:"modal-hint",style:{"word-break":"break-all"}},lf={class:"share-grid"},af=S(()=>c("img",{src:fl,alt:""},null,-1)),cf=S(()=>c("span",null,"Facebook",-1)),df=[af,cf],hf=S(()=>c("img",{src:yl,alt:""},null,-1)),uf=S(()=>c("span",null,"LINE",-1)),mf=[hf,uf],pf=S(()=>c("img",{src:bl,alt:""},null,-1)),ff=S(()=>c("span",null,"Twitter",-1)),yf=[pf,ff],bf=S(()=>c("img",{src:gl,alt:""},null,-1)),gf=S(()=>c("span",null,"複製連結",-1)),Af=[bf,gf],_f=S(()=>c("p",{class:"modal-hint"}," 若覺得本站有幫助，歡迎透過以下連結請我喝一杯咖啡，讓我有動力繼續維護更新！ ",-1)),vf={class:"support-list"},Pf=["onClick"],Cf={class:"material-icons-outlined support-btn-icon"},Uf={class:"support-btn-body"},Ef={class:"support-btn-label"},Bf={key:0,class:"support-btn-badge"},wf={class:"support-btn-desc"},Sf=S(()=>c("span",{class:"material-icons-outlined support-btn-arrow"},"open_in_new",-1)),If={class:"os-tabs",role:"tablist","aria-label":"作業系統"},kf=["aria-selected"],Df=S(()=>c("span",{class:"material-icons-outlined"},"phone_iphone",-1)),Tf=["aria-selected"],Nf=S(()=>c("span",{class:"material-icons-outlined"},"android",-1)),Mf=S(()=>c("p",{class:"modal-hint"},"以下以 iOS Safari 為範例",-1)),Rf=S(()=>c("h4",{class:"modal-section-title"},"1. 使用 Safari 開啟網站並點擊下方分享按鈕",-1)),Of=S(()=>c("img",{class:"full-img",src:zc,alt:""},null,-1)),xf=S(()=>c("h4",{class:"modal-section-title"},"2. 點選「加入主畫面」",-1)),Lf=S(()=>c("img",{class:"full-img",src:Vc,alt:""},null,-1)),Ff=S(()=>c("h4",{class:"modal-section-title"},"3. 確認名稱後按「加入」",-1)),Hf=S(()=>c("img",{class:"full-img",src:Wc,alt:""},null,-1)),zf=S(()=>c("h4",{class:"modal-section-title"},"4. 完成,圖示已加到主畫面",-1)),Vf=S(()=>c("img",{class:"full-img",src:jc,alt:""},null,-1)),Wf=S(()=>c("h4",{class:"modal-section-title"},"5. 點擊即可開啟,享受無瀏覽器網址列的體驗",-1)),jf=S(()=>c("img",{class:"full-img",src:Gc,alt:""},null,-1)),Gf=S(()=>c("p",{class:"modal-hint"},"以下以 Android Chrome 為範例",-1)),Kf=S(()=>c("h4",{class:"modal-section-title"},"1. 使用 Chrome 開啟網站並點擊右上角選單，點選「加到主畫面」",-1)),Qf=S(()=>c("img",{class:"full-img",src:Kc,alt:""},null,-1)),Yf=S(()=>c("h4",{class:"modal-section-title"},"2. 點選「安裝」",-1)),Xf=S(()=>c("img",{class:"full-img",src:Qc,alt:""},null,-1)),Jf=S(()=>c("h4",{class:"modal-section-title"},"3. 完成,圖示已加到主畫面",-1)),qf=S(()=>c("img",{class:"full-img",src:Yc,alt:""},null,-1)),$f=S(()=>c("h4",{class:"modal-section-title"},"4. 點擊即可開啟,享受無瀏覽器網址列的體驗",-1)),Zf=S(()=>c("img",{class:"full-img",src:Xc,alt:""},null,-1)),e6=S(()=>c("div",{class:"welcome-logo-wrap"},[c("img",{class:"welcome-logo",src:Yi,alt:"重機能停哪"})],-1)),n6=S(()=>c("div",{class:"welcome-badge"},"✨ 全新介面上線",-1)),t6=S(()=>c("p",{class:"welcome-text"}," 這是一個提供重機停車資訊的地圖，你可以依據「友善程度」「停車格類型」「收費範圍」尋找合適的停車場，並一鍵開啟 Google 或 Apple Map 導航。 ",-1)),o6={class:"whatsnew-card"},i6=S(()=>c("div",{class:"whatsnew-title"},[c("span",{class:"material-icons-outlined"},"auto_awesome"),k(" 本次新功能 ")],-1)),s6={class:"whatsnew-list"},r6=S(()=>c("span",{class:"material-icons-outlined"},"emoji_events",-1)),l6=S(()=>c("strong",null,"貢獻排行榜",-1)),a6=S(()=>c("br",null,null,-1)),c6=S(()=>c("p",{class:"welcome-text"},[k(" 資料取源於: "),c("a",{href:"https://www.google.com/maps/d/viewer?mid=1ORD5DnL6yqrCrtQJYB9TeTgOOlvo-Yc&g_ep=CAESBjI2LjguNRgAIN1iKpUBLDk0MjY3NzI3LDk0MjkyMTk1LDk0Mjk5NTMyLDEwMDc5NjQ5OCwxMDA3OTc3NTcsMTAwNzk2NTMxLDk0MjgwNTc2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE4NjUzLDk0MjI5ODM5LDk0Mjc1MTY4LDk0Mjc5NjE5LDEwMDc5MjU3MiwxMDA3OTE0ODNCAlRX&skid=9984dc32-0eac-4e02-b7a8-241e8910f915&shorturl=1&ll=25.078951126084913%2C121.45397636318671&z=11",target:"_blank",rel:"noopener",class:"link"},"Alan大重停車記事"),k("，感謝Alan的辛苦整理與分享！如有停車場相關問題請至該頁面填寫回報表單。 ")],-1)),d6=S(()=>c("p",{class:"welcome-text"},[k(" 本站僅提供資料整合服務，地圖免費提供車友使用，資料每週三自動同步更新；若發生無法使用情況，請至 "),c("a",{href:"https://forms.gle/iJCyfqVtpL35WtZM7",target:"_blank",rel:"noopener",class:"link"},"錯誤資訊回報"),k("，也歡迎贊助讓我有動力繼續更新。 ")],-1)),h6=S(()=>c("p",{class:"welcome-text right"},"— by 爽爽",-1)),u6={key:0,class:"pick-crosshair","aria-hidden":"true"},m6=S(()=>c("span",{class:"material-icons-outlined dot"},"gps_fixed",-1)),p6=[m6],f6={key:1,class:"pick-banner"},y6=S(()=>c("span",{class:"pick-banner-text"},[c("span",{class:"material-icons-outlined"},"touch_app"),k(" 拖動地圖，將十字線對準目標位置 ")],-1)),b6=S(()=>c("span",{class:"material-icons-outlined"},"check",-1)),g6=S(()=>c("p",{class:"welcome-text"},[c("strong",{style:{color:"var(--primary)"}},"這是一個公開共享的「共筆停車點」區。"),k(" 除了官方收錄的「大重停車記事」資料外,任何人都可以新增、修改、補充停車位置——不需要註冊、不需要審核。 ")],-1)),A6=S(()=>c("h4",{class:"modal-section-title"},"如何新增停車位置",-1)),_6=S(()=>c("ol",{class:"welcome-text",style:{"padding-left":"22px","line-height":"1.9"}},[c("li",null,"點左下角的「共筆停車點」按鈕,再點「新增停車位置」"),c("li",null,"畫面中心會出現青色十字游標,拖動地圖將游標對準目標位置"),c("li",null,"按頂部「使用此位置」,填寫名稱、類別、友善程度、收費等資料"),c("li",null,"按「新增」即完成(座標已自動記錄,圖示會依類別自動套用)")],-1)),v6=S(()=>c("h4",{class:"modal-section-title"},"如何編輯他人新增的位置",-1)),P6=S(()=>c("ol",{class:"welcome-text",style:{"padding-left":"22px","line-height":"1.9"}},[c("li",null,"地圖上「薰衣草紫色底」的標記即為使用者新增的「共筆停車點」"),c("li",null,"點擊該標記,在資訊面板按「編輯」"),c("li",null,"修改後按「儲存修改」")],-1)),C6=S(()=>c("h4",{class:"modal-section-title"},"注意事項",-1)),U6=S(()=>c("ul",{class:"welcome-text",style:{"padding-left":"22px","line-height":"1.9"}},[c("li",null,"請確認資訊正確,避免造成他人困擾"),c("li",null,"不要新增不雅、惡意或無關內容"),c("li",null,"暱稱可選填,留空將顯示為「匿名#xxx-xxx」"),c("li",null,"站方保留必要時清空所有「共筆停車點」資料的權利")],-1)),E6=S(()=>c("p",{class:"welcome-text"}," 感謝每一位車友的共筆與修改! ",-1)),B6={key:0,class:"leaderboard-list"},w6={class:"leaderboard-medal"},S6={class:"leaderboard-body"},I6={class:"leaderboard-name"},k6={class:"leaderboard-detail"},D6={class:"leaderboard-total"},T6=S(()=>c("small",null,"次",-1)),N6={key:1,class:"leaderboard-empty"},Zr="onboarding_tour_v1",el="filters_v1",M6="https://findparkinglot.github.io/",R6={__name:"App",setup(n){var Ks,Qs,Ys;const e=navigator.userAgent,t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e),o=/iPhone|iPad|iPod/i.test(e),i=/Android/i.test(e),s=E([]),r=()=>{var h;return!!((h=window.matchMedia)!=null&&h.call(window,"(prefers-color-scheme: light)").matches)},l=h=>{var p;if(h==="system"){const y=r()?"light":"dark";return(p=tt.find(se=>se.theme===y))==null?void 0:p.value}return h},a=tt.find(h=>h.name===sn.get("mapStyles")),d=(a==null?void 0:a.value)||((Ks=tt.find(h=>h.theme==="dark"))==null?void 0:Ks.value),m=E(d),u=E({getLngLat:!1,mapStylesSelected:l(d)}),f=h=>{const p=l(h);u.value.mapStylesSelected=p;const y=tt.find(J=>J.value===p),se=(y==null?void 0:y.theme)==="light";document.body.classList.toggle("light-theme",se),document.body.classList.toggle("dark-theme",!se);const T=tt.find(J=>J.value===h);T&&sn.set("mapStyles",T.name)};f(m.value),Y(m,f);const b=(Qs=window.matchMedia)==null?void 0:Qs.call(window,"(prefers-color-scheme: light)");(Ys=b==null?void 0:b.addEventListener)==null||Ys.call(b,"change",()=>{m.value==="system"&&f("system")});const g=E(!0),w=E(!1),D=E(i?"android":"ios"),U=E(!1),j=E(!1),N=E(!1),Q=E(!1),_e=E(!1),oe=E(!1),Re=[{selector:".mapboxgl-ctrl-geolocate",icon:"my_location",title:"定位你的位置",description:"點右上角的定位按鈕,地圖會自動移到你目前位置,並追蹤方向。"},{selector:".fab-placement-right > .fab-main",icon:"help_outline",title:"功能與教學",description:"右下角的圓形按鈕展開後,可看到「地圖怎麼看」、「加到手機桌面」、「分享」等功能。"},{selector:".search-toggle",icon:"search",title:"搜尋停車點",description:"右下角的搜尋按鈕可依名稱快速找到想去的停車場,點選結果會自動飛到該位置並開啟資訊。"},{selector:".app-title .title-toggle",icon:"menu",title:"篩選與我的最愛",description:"左上角選單可以調整停車類型、友善程度、收費範圍,以及只顯示我的最愛、切換主題。"},{selector:".fab-placement-left > .fab-main",icon:"add_location_alt",title:"共筆停車點",description:"左下角按鈕可新增/編輯共筆停車點,大家一起分享真實的停車資訊。"}],De=()=>{oe.value=!0,ge("onboarding_tour_start")},$e=()=>{try{localStorage.setItem(Zr,"1")}catch(h){}ge("onboarding_tour_finish")},dn=()=>{g.value=!1},Te=E(!1),ce=E(!1),He=E(!1),P=h=>{h!=="menu"&&(Te.value=!1),h!=="info"&&(ce.value=!1),h!=="message"&&(g.value=!1),h!=="mobileFAQ"&&(w.value=!1),h!=="faq"&&(U.value=!1),h!=="share"&&(j.value=!1),h!=="communityHelp"&&(N.value=!1),h!=="support"&&(Q.value=!1),h!=="leaderboard"&&(_e.value=!1),ge("panel_open",{panel:h})};Y(Te,h=>h&&P("menu")),Y(ce,h=>h&&P("info")),Y(g,h=>h&&P("message")),Y(w,h=>h&&P("mobileFAQ")),Y(w,h=>{h&&(i?D.value="android":o&&(D.value="ios"))}),Y(U,h=>h&&P("faq")),Y(j,h=>h&&P("share")),Y(N,h=>h&&P("communityHelp")),Y(Q,h=>h&&P("support")),Y(_e,h=>h&&P("leaderboard"));const O=[{key:"buymeacoffee",url:"https://buymeacoffee.com/jamestim923",label:"Buy Me a Coffee",description:"請我喝杯咖啡 ☕️ (美金贊助)",icon:"local_cafe",primary:!1}],$=()=>{Q.value=!0,ge("support_open")},pe=h=>{ge("support_click",{provider:h.key}),window.open(h.url,"_blank","noopener,noreferrer")},G=sn.getJSON(el,{})||{},de=E(typeof G.parkingType=="string"?G.parkingType:""),Ne=E(typeof G.degreeOfFriendliness=="string"?G.degreeOfFriendliness:""),fe=E(typeof G.parkingPriceType=="string"?G.parkingPriceType:""),ze=E(typeof G.priceRangeMin=="number"?G.priceRangeMin:0),Ve=E(typeof G.priceRangeMax=="number"?G.priceRangeMax:100),A=E(G.showOfficial!==!1),R=E(G.showOverridden!==!1),I=E(G.showCommunity!==!1),{favorites:ve,favoriteIdSet:Ke,isFavorite:We,toggleFavorite:An}=Nd(),V=E(G.onlyFavorites===!0);Y([de,Ne,fe,ze,Ve,V,A,R,I],([h,p,y,se,T,J,te,Se,so])=>{sn.setJSON(el,{parkingType:h,degreeOfFriendliness:p,parkingPriceType:y,priceRangeMin:se,priceRangeMax:T,onlyFavorites:J,showOfficial:te,showOverridden:Se,showCommunity:so})});const x=E("driving"),{items:K,addParking:me,updateParking:Me,deleteParking:ye}=xm(),{userId:Ze,nickname:be,isAdmin:gt}=Wm(),At=E(null),{overrides:_t,getOverride:to,getOverrideHistory:rc,upsertOverride:lc,resetOverride:ac}=Fu(),Os=X(()=>new Set(Object.keys(_t.value||{}))),cc=X(()=>(s.value||[]).reduce((h,p)=>{var y;return h+(((y=p==null?void 0:p.features)==null?void 0:y.length)||0)},0)),dc=X(()=>Os.value.size),hc=X(()=>(K.value||[]).length),uc=X(()=>{var y,se;const h=new Map,p=(T,J,te=0)=>{if(!(T!=null&&T.id))return;let Se=h.get(T.id);Se||(Se={id:T.id,nickname:"",community:0,override:0,lastAt:0},h.set(T.id,Se)),Se[J]+=1,T.nickname&&te>=Se.lastAt&&(Se.nickname=T.nickname),te>Se.lastAt&&(Se.lastAt=te)};for(const T of K.value||[]){const J=T.history||[];if(J.length)for(const te of J)((te==null?void 0:te.action)==="create"||(te==null?void 0:te.action)==="update")&&p(te.by,"community",te.at||0);else p(T.createdBy,"community",T.createdAt||0),(y=T.updatedBy)!=null&&y.id&&T.updatedBy.id!==((se=T.createdBy)==null?void 0:se.id)&&p(T.updatedBy,"community",T.updatedAt||0)}for(const T of Object.values(_t.value||{})){const J=T!=null&&T.history&&typeof T.history=="object"?Object.values(T.history):[];if(J.length)for(const te of J)(te==null?void 0:te.action)==="override"&&p(te.by,"override",te.at||0);else p(T==null?void 0:T.updatedBy,"override",(T==null?void 0:T.updatedAt)||0)}return[...h.values()].map(T=>({...T,total:T.community+T.override})).sort((T,J)=>J.total-T.total||J.lastAt-T.lastAt)}),xs=X(()=>uc.value.slice(0,5)),mc=h=>h.nickname||(h.id?`匿名#${h.id}`:"匿名"),Ls=()=>{_e.value=!0,ge("leaderboard_open")},en=E(!1),_n=E("add"),vn=E(null),mn=E(!1),vt=E([121.5173399,25.0475613]),Fs=E(!1),nn=E(!1),Xo=E(!1),Hs=X(()=>!ce.value&&!He.value&&!nn.value&&!en.value),zs=()=>{Xo.value&&Hs.value&&(Xo.value=!1,De())};Y(g,(h,p)=>{if(p&&!h)try{localStorage.getItem(Zr)||(Xo.value=!0,setTimeout(zs,350))}catch(y){}}),Y(Hs,h=>{h&&setTimeout(zs,200)});const pc=X(()=>{var h;if(!en.value)return[];if(_n.value==="override")return Qe.value?rc(Qe.value.name,Qe.value.geometry):[];if(_n.value==="edit"&&((h=vn.value)!=null&&h.id)){const p=(K.value||[]).find(y=>y.id===vn.value.id);return(p==null?void 0:p.history)||[]}return[]}),je=E(null),fc=()=>{if(!hn){alert("「共筆停車點」功能尚未設定。請讓站方設定 Firebase 後再試。");return}nn.value=!0,ge("community_add_start")},yc=()=>{var p,y;const h=((y=(p=At.value)==null?void 0:p.getCenter)==null?void 0:y.call(p))||[121.5173399,25.0475613];vt.value=h,_n.value="add",vn.value=null,nn.value=!1,en.value=!0},bc=()=>{nn.value=!1},gc=h=>{var p,y;vt.value=h.coordinates?[...h.coordinates]:((y=(p=At.value)==null?void 0:p.getCenter)==null?void 0:y.call(p))||[121.5173399,25.0475613],_n.value="edit",vn.value=h,en.value=!0},Jo=h=>{je.value=h,$n({name:"共筆停車點",properties:{name:h.name,description:h.description,icon:h.iconKey,priceInfo:h.priceInfo,priceArray:[]},geometry:h.coordinates,address:""})},Ac=()=>{je.value&&(ce.value=!1,gc(je.value))},_c=()=>{if(!hn){alert("「修改官方停車點」功能尚未設定。請讓站方設定 Firebase 後再試。");return}if(!Qe.value)return;const h=Qe.value,p=oo.value,y={id:null,name:h.name,description:(p==null?void 0:p.description)||h.description,iconKey:(p==null?void 0:p.iconKey)||h.iconKey,category:(p==null?void 0:p.category)||vc(h.iconKey),friendliness:(p==null?void 0:p.friendliness)||Pc(h.iconKey),priceInfo:(p==null?void 0:p.priceInfo)||h.priceInfo,coordinates:h.geometry?[...h.geometry]:[...vt.value]};vt.value=y.coordinates,_n.value="override",vn.value=y,Fs.value=!!p,ce.value=!1,en.value=!0,ge("override_edit_start",{name:h.name})};function vc(h){if(!h)return"motorcycle";const p=ut.find(y=>y.value&&y.key.includes(h));return(p==null?void 0:p.value)||"motorcycle"}function Pc(h){if(!h)return"friendly";const p=Xt.find(y=>y.value&&y.key.includes(h));return(p==null?void 0:p.value)||"friendly"}const Cc=async h=>{if(Qe.value){mn.value=!0;try{const p={id:Ze,nickname:be.value};await lc(Qe.value,h,p),ge("override_submit",{name:Qe.value.name});const y=Qe.value;en.value=!1,$n({name:y.parkingType,properties:{name:y.name,description:y.description,icon:y.iconKey,priceInfo:y.priceInfo,priceArray:[]},geometry:y.geometry,address:ie.value.address})}catch(p){alert("儲存失敗:"+((p==null?void 0:p.message)||p))}finally{mn.value=!1}}},Uc=async()=>{if(Qe.value){mn.value=!0;try{const h=Qe.value,p={id:Ze,nickname:be.value};await ac(h.name,h.geometry,p),ge("override_reset",{name:h.name}),en.value=!1,$n({name:h.parkingType,properties:{name:h.name,description:h.description,icon:h.iconKey,priceInfo:h.priceInfo,priceArray:[]},geometry:h.geometry,address:ie.value.address})}catch(h){alert("重設失敗:"+((h==null?void 0:h.message)||h))}finally{mn.value=!1}}},Ec=async h=>{var p;mn.value=!0;try{const y={id:Ze,nickname:be.value};_n.value==="edit"&&((p=vn.value)!=null&&p.id)?(await Me(vn.value.id,h,y),ge("community_edit_submit",{name:h==null?void 0:h.name})):(await me(h,y),ge("community_add_submit",{name:h==null?void 0:h.name})),en.value=!1,je.value=null}catch(y){alert("儲存失敗:"+((y==null?void 0:y.message)||y))}finally{mn.value=!1}},Bc=async h=>{mn.value=!0;try{const p={id:Ze,nickname:be.value};await ye(h,p),ge("community_delete",{id:h}),en.value=!1,je.value=null}catch(p){alert("刪除失敗:"+((p==null?void 0:p.message)||p))}finally{mn.value=!1}},qo=X(()=>{var p,y;if(!je.value||!ie.value.parkingName)return!1;const h=je.value;return h.name===ie.value.parkingName&&Array.isArray(ie.value.geometry)&&((p=h.coordinates)==null?void 0:p[0])===ie.value.geometry[0]&&((y=h.coordinates)==null?void 0:y[1])===ie.value.geometry[1]});Y(ce,h=>{h||(je.value=null)});const Pt=E(null),wc=X(()=>{var h;return((h=ut.find(p=>p.value===de.value))==null?void 0:h.key)||[]}),Sc=X(()=>{var h;return((h=Xt.find(p=>p.value===Ne.value))==null?void 0:h.key)||[]}),ie=E({parkingName:"",parkingNameDes:"",parkingType:"",parkingIcon:"",parkingIconKey:"",iconCategory:"",priceInfo:"",geometry:[null,null],address:"",sourceLabel:""}),Qe=E(null),oo=E(null),Vs=X(()=>bi(ie.value.parkingName,ie.value.geometry)),Ws=X(()=>We(Vs.value)),$n=h=>{var te,Se,so,Xs,Js;const p=h.properties.icon,y={name:h.properties.name,description:h.properties.description,iconKey:p,priceInfo:h.properties.priceInfo||"",geometry:h.geometry,parkingType:h.name},se=!!(je.value&&je.value.name===h.properties.name&&Array.isArray(h.geometry)&&((te=je.value.coordinates)==null?void 0:te[0])===h.geometry[0]&&((Se=je.value.coordinates)==null?void 0:Se[1])===h.geometry[1]);let T=null,J=y;se||(T=to(y.name,y.geometry),T&&(J=nc(y,T))),Qe.value=se?null:y,oo.value=T,ie.value={parkingName:J.name,parkingNameDes:J.description,parkingType:y.parkingType,iconCategory:i3(J.iconKey),parkingIcon:ne(J.iconKey),parkingIconKey:J.iconKey,priceInfo:J.priceInfo||"",geometry:h.geometry,address:h.address,sourceLabel:se?"":Pd((so=h.properties)==null?void 0:so.sourceFolderIndex)},ce.value=!0,ge("parking_view",{parking_name:(Xs=h.properties)==null?void 0:Xs.name,parking_type:h.name,icon:(Js=h.properties)==null?void 0:Js.icon,overridden:!!T})},Ic=()=>{if(!ie.value.parkingName)return;const h=!Ws.value;An({id:Vs.value,name:ie.value.parkingName,parkingType:ie.value.parkingType,geometry:ie.value.geometry,address:ie.value.address,icon:ie.value.parkingIconKey}),ge(h?"favorite_add":"favorite_remove",{parking_name:ie.value.parkingName,parking_type:ie.value.parkingType})},kc=h=>"",Dc=h=>{var p;h.isCommunity&&h.community?Jo(h.community):$n({name:h.groupName,properties:h.properties,geometry:h.geometry,address:kc(h.geometry)}),Pt.value=[...h.geometry],ge("search_select",{parking_name:(p=h.properties)==null?void 0:p.name,group:h.groupName,community:!!h.isCommunity})},Ct=E(null),Ut=E(null),Tc=h=>{x.value="driving",Ct.value=h,ce.value=!1,Ut.value=null,ge("route_start",{parking_name:ie.value.parkingName,profile:"driving"})},Nc=()=>{Ct.value=null,He.value=!1};Y(Ut,h=>{He.value=h!==null});const Mc=h=>{const p=ie.value.geometry;let y="";h==="apple"?y=`https://maps.apple.com/?daddr=${p[1]},${p[0]}&dirflg=d&t=m`:h==="google"&&(y=`https://www.google.com/maps/dir/?api=1&destination=${p[1]},${p[0]}&travelmode=driving`),y&&(ge("open_external_map",{provider:h,parking_name:ie.value.parkingName}),window.open(y,"_blank","noopener,noreferrer"))},Pn=(h,p=null)=>{const y=p||"https://findparkinglot.github.io/";let se="";h==="facebook"?se=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(y)}`:h==="line"?se=`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(y)}`:h==="twitter"&&(se=`https://twitter.com/share?url=${encodeURIComponent(y)}`),ge("share",{method:h,scope:p?"spot":"site"}),h==="link"?navigator.clipboard.writeText(y).then(()=>alert("已複製連結"),()=>alert("複製失敗")):window.open(se,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")},js=()=>{const h=ie.value.geometry;if(!Array.isArray(h)||h[0]==null||h[1]==null)return"";const p=new URLSearchParams({lng:Number(h[0]).toFixed(6),lat:Number(h[1]).toFixed(6)});return`${M6}?${p.toString()}`},Rc=()=>{const h=js();h&&(Zn.value=h,Zo.value=ie.value.parkingName||"停車點",$o.value=!0,ge("share_spot_open",{name:Zo.value}))},$o=E(!1),Zn=E(""),Zo=E("");Y([ce,ie],()=>{try{if(!ce.value){window.location.search&&window.history.replaceState({},"",window.location.pathname);return}const h=js();if(!h)return;const p=h.slice(h.indexOf("?"));window.history.replaceState({},"",window.location.pathname+p)}catch(h){}},{deep:!0});const Et=E(null),io=(h,p)=>Math.abs(Number(h)-Number(p))<1e-5,ei=()=>{var T;const h=Et.value;if(!h)return;const p=Number(h.lng),y=Number(h.lat);if(!isFinite(p)||!isFinite(y)){Et.value=null;return}const se=(K.value||[]).find(J=>J.coordinates&&io(J.coordinates[0],p)&&io(J.coordinates[1],y));if(se){Jo(se),Pt.value=[p,y],Et.value=null;return}for(const J of s.value||[])for(const te of J.features||[]){const Se=(T=te.geometry)==null?void 0:T.coordinates;if(Se&&io(Se[0],p)&&io(Se[1],y)){$n({name:J.name,properties:te.properties,geometry:te.geometry.coordinates,address:""}),Pt.value=[p,y],Et.value=null;return}}Array.isArray(s.value)&&s.value.length>0&&(Pt.value=[p,y])},Gs=()=>{try{const h=new URLSearchParams(window.location.search),p=h.get("lng"),y=h.get("lat");if(!p||!y)return;Et.value={lng:p,lat:y},ei()}catch(h){}};Y(K,ei,{deep:!1}),Y(s,ei,{deep:!1}),Yn(()=>{s.value=kd(_d()),g.value||Gs()}),Y(g,(h,p)=>{p&&!h&&Gs()});const Oc=X(()=>[{key:"share",icon:"share",label:"分享",highlight:!0,onClick:()=>j.value=!0},{key:"howto",icon:"help_outline",label:"怎麼用",onClick:De},{key:"faq",icon:"map",label:"地圖怎麼看",onClick:()=>U.value=!0},{key:"mobile",icon:"add_to_home_screen",label:"加到手機桌面",onClick:()=>w.value=!0}]),xc=X(()=>[{key:"add",icon:"add_location_alt",label:"新增停車位置",highlight:!0,onClick:fc},{key:"help",icon:"menu_book",label:"編輯教學",onClick:()=>N.value=!0}]);return(h,p)=>(_(),C(Ae,null,[c("div",Gm,[nn.value?(_(),C("img",Ym)):(_(),C("button",{key:0,class:"title-toggle",onClick:p[0]||(p[0]=y=>Te.value=!Te.value),"aria-label":Te.value?"收合設定":"開啟設定","aria-expanded":Te.value},[c("span",Qm,B(Te.value?"close":"menu"),1)],8,Km)),Xm]),Ge(Pe(qr,{items:Oc.value},null,8,["items"]),[[nt,!He.value&&!ce.value&&!nn.value]]),Ge(Pe(qr,{items:xc.value,placement:"left","main-icon":"add_location_alt","main-label":"共筆停車點"},null,8,["items"]),[[nt,!He.value&&!ce.value&&!nn.value]]),Ge(c("button",{class:"leaderboard-fab",onClick:Ls,"aria-label":"貢獻排行榜",title:"貢獻排行榜"},qm,512),[[nt,!He.value&&!ce.value&&!nn.value]]),Ge(Pe(E4,{"map-data-list":s.value,"community-parkings":L(K),onSelect:Dc},null,8,["map-data-list","community-parkings"]),[[nt,!He.value&&!ce.value&&!nn.value]]),$m,Pe(ju,{ref_key:"mapBoxRef",ref:At,parkingTypeKeyArray:wc.value,degreeOfFriendlinessKeyArray:Sc.value,mapDataList:s.value,getLngLat:u.value.getLngLat,mapStylesSelected:u.value.mapStylesSelected,parkingPriceType:fe.value,priceRangeMin:ze.value,priceRangeMax:Ve.value,"favorite-ids":L(Ke),"override-keys":Os.value,overrides:L(_t),"only-favorites":V.value,"show-official":A.value,"show-overridden":R.value,"show-community":I.value,"focus-coord":Pt.value,"route-profile":x.value,"community-parkings":L(K),goToParkingPlaceData:Ct.value,"onUpdate:goToParkingPlaceData":p[1]||(p[1]=y=>Ct.value=y),routeData:Ut.value,"onUpdate:routeData":p[2]||(p[2]=y=>Ut.value=y),onParkingInfo:$n,onCommunityParkingClick:Jo},null,8,["parkingTypeKeyArray","degreeOfFriendlinessKeyArray","mapDataList","getLngLat","mapStylesSelected","parkingPriceType","priceRangeMin","priceRangeMax","favorite-ids","override-keys","overrides","only-favorites","show-official","show-overridden","show-community","focus-coord","route-profile","community-parkings","goToParkingPlaceData","routeData"]),Pe(c4,{"route-data":Ut.value,active:He.value,profile:x.value,"onUpdate:profile":p[3]||(p[3]=y=>x.value=y),onCancel:Nc},null,8,["route-data","active","profile"]),Pe(h5,{parkingType:de.value,"onUpdate:parkingType":p[4]||(p[4]=y=>de.value=y),degreeOfFriendliness:Ne.value,"onUpdate:degreeOfFriendliness":p[5]||(p[5]=y=>Ne.value=y),parkingPriceType:fe.value,"onUpdate:parkingPriceType":p[6]||(p[6]=y=>fe.value=y),priceRangeMin:ze.value,"onUpdate:priceRangeMin":p[7]||(p[7]=y=>ze.value=y),priceRangeMax:Ve.value,"onUpdate:priceRangeMax":p[8]||(p[8]=y=>Ve.value=y),mapStyle:m.value,"onUpdate:mapStyle":p[9]||(p[9]=y=>m.value=y),active:Te.value,"onUpdate:active":p[10]||(p[10]=y=>Te.value=y),onlyFavorites:V.value,"onUpdate:onlyFavorites":p[11]||(p[11]=y=>V.value=y),showOfficial:A.value,"onUpdate:showOfficial":p[12]||(p[12]=y=>A.value=y),showOverridden:R.value,"onUpdate:showOverridden":p[13]||(p[13]=y=>R.value=y),showCommunity:I.value,"onUpdate:showCommunity":p[14]||(p[14]=y=>I.value=y),"favorites-count":L(ve).length,"official-count":cc.value,"overridden-count":dc.value,"community-count":hc.value,onOpenSupport:$},null,8,["parkingType","degreeOfFriendliness","parkingPriceType","priceRangeMin","priceRangeMax","mapStyle","active","onlyFavorites","showOfficial","showOverridden","showCommunity","favorites-count","official-count","overridden-count","community-count"]),Ge(Pe(Q5,{info:ie.value,active:ce.value,"is-mobile":L(t),"is-apple":L(o),"is-android":L(i),"has-route":Ct.value!==null,"is-favorite":Ws.value,"is-community":qo.value,"community-meta":qo.value?je.value:null,"is-overridden":!qo.value&&!!oo.value,"override-meta":oo.value,onClose:p[15]||(p[15]=y=>ce.value=!1),onRoute:p[16]||(p[16]=y=>Tc(ie.value.geometry)),onOpenMap:Mc,onToggleFavorite:Ic,onEditCommunity:Ac,onEditOverride:_c,onShare:Rc},null,8,["info","active","is-mobile","is-apple","is-android","has-route","is-favorite","is-community","community-meta","is-overridden","override-meta"]),[[nt,!He.value]]),Pe(pn,{modelValue:U.value,"onUpdate:modelValue":p[17]||(p[17]=y=>U.value=y),title:"地圖怎麼看?","close-text":"知道了",size:"lg"},{default:Ye(()=>[Zm,c("div",ep,[c("div",np,[c("img",{src:L(ne)("icon-3.png"),alt:""},null,8,tp),k(" 汽車：汽車格(含未確認是否有重機格) ")]),c("div",op,[c("img",{src:L(ne)("icon-8.png"),alt:""},null,8,ip),k(" 重機(有人):有設重機專用格 ")]),c("div",sp,[c("img",{src:L(ne)("icon-10.png"),alt:""},null,8,rp),k(" 機車(沒人):機車格 ")]),c("div",lp,[c("img",{src:L(ne)("icon-14.png"),alt:""},null,8,ap),k(" 綠星:路邊友善車格 ")]),c("div",cp,[c("img",{src:L(ne)("icon-4.png"),alt:""},null,8,dp),k(" 重機友善店家:用餐/消費時可停重機的店家 ")]),c("div",hp,[c("img",{src:L(ne)("icon-15.png"),alt:""},null,8,up),k(" 綠P:重機專用路邊停車格 ")]),c("div",mp,[c("img",{src:L(ne)("icon-16.png"),alt:""},null,8,pp),k(" 灰P:重機專用路邊停車格(未確認精準座標,歡迎回報) ")]),c("div",fp,[c("img",{src:L(ne)("icon-17.png"),alt:""},null,8,yp),k(" 藍P:普通大型共用機車格(台北市試辦) ")]),c("div",bp,[c("img",{src:L(ne)("icon-18.png"),alt:""},null,8,gp),k(" 紫P:時段性汽機車共用停車格 ")]),c("div",Ap,[c("img",{src:L(ne)("icon-19.png"),alt:""},null,8,_p),k(" 紅X:停都不給停 ")]),c("div",vp,[c("img",{src:L(ne)("icon-20.png"),alt:""},null,8,Pp),k(" ?:類型未確認,歡迎透過共筆回報 ")])]),Cp,c("div",Up,[c("div",Ep,[c("img",{src:L(ne)("icon-2.png"),alt:""},null,8,Bp),c("img",{src:L(ne)("icon-6.png"),alt:""},null,8,wp),c("img",{src:L(ne)("icon-9.png"),alt:""},null,8,Sp),k(" 綠色最友善:有後牌辨析 ")]),c("div",Ip,[c("img",{src:L(ne)("icon-5.png"),alt:""},null,8,kp),c("img",{src:L(ne)("icon-12.png"),alt:""},null,8,Dp),c("img",{src:L(ne)("icon-11.png"),alt:""},null,8,Tp),k(" 藍色最傳統:悠遊卡 / 按鈕取票 ")]),c("div",Np,[c("img",{src:L(ne)("icon-1.png"),alt:""},null,8,Mp),c("img",{src:L(ne)("icon-13.png"),alt:""},null,8,Rp),c("img",{src:L(ne)("icon-7.png"),alt:""},null,8,Op),k(" 紅色最靠北:請管理員協助 / 倒退嚕前牌辨析 ")]),c("div",xp,[c("img",{src:L(ne)("icon-3.png"),alt:""},null,8,Lp),c("img",{src:L(ne)("icon-8.png"),alt:""},null,8,Fp),c("img",{src:L(ne)("icon-10.png"),alt:""},null,8,Hp),k(" 灰色未確定:有可能是上述任何情況,停到請回報 ")])]),zp,c("div",Vp,[c("div",Wp,[c("img",{src:L(ne)("icon-3.png"),alt:""},null,8,jp),k(" (30/h)三張里地下停車場 ")]),Gp])]),_:1},8,["modelValue"]),Pe(pn,{modelValue:j.value,"onUpdate:modelValue":p[22]||(p[22]=y=>j.value=y),title:"分享給朋友",size:"sm"},{default:Ye(()=>[c("div",Kp,[c("button",{class:"share-btn",onClick:p[18]||(p[18]=y=>Pn("facebook")),"aria-label":"Facebook"},Xp),c("button",{class:"share-btn",onClick:p[19]||(p[19]=y=>Pn("line")),"aria-label":"LINE"},$p),c("button",{class:"share-btn",onClick:p[20]||(p[20]=y=>Pn("twitter")),"aria-label":"Twitter"},nf),c("button",{class:"share-btn",onClick:p[21]||(p[21]=y=>Pn("link")),"aria-label":"複製連結"},sf)])]),_:1},8,["modelValue"]),Pe(pn,{modelValue:$o.value,"onUpdate:modelValue":p[27]||(p[27]=y=>$o.value=y),title:`分享：${Zo.value}`,size:"sm"},{default:Ye(()=>[c("p",rf,B(Zn.value),1),c("div",lf,[c("button",{class:"share-btn",onClick:p[23]||(p[23]=y=>Pn("facebook",Zn.value)),"aria-label":"Facebook"},df),c("button",{class:"share-btn",onClick:p[24]||(p[24]=y=>Pn("line",Zn.value)),"aria-label":"LINE"},mf),c("button",{class:"share-btn",onClick:p[25]||(p[25]=y=>Pn("twitter",Zn.value)),"aria-label":"Twitter"},yf),c("button",{class:"share-btn",onClick:p[26]||(p[26]=y=>Pn("link",Zn.value)),"aria-label":"複製連結"},Af)])]),_:1},8,["modelValue","title"]),Pe(pn,{modelValue:Q.value,"onUpdate:modelValue":p[28]||(p[28]=y=>Q.value=y),title:"支持「重機能停哪?」","close-text":"關閉",size:"sm"},{default:Ye(()=>[_f,c("div",vf,[(_(),C(Ae,null,xe(O,y=>c("button",{key:y.key,type:"button",class:Z(["support-btn",{"is-primary":y.primary}]),onClick:se=>pe(y)},[c("span",Cf,B(y.icon),1),c("span",Uf,[c("span",Ef,[k(B(y.label)+" ",1),y.primary?(_(),C("span",Bf,"推薦")):W("",!0)]),c("span",wf,B(y.description),1)]),Sf],10,Pf)),64))])]),_:1},8,["modelValue"]),Pe(pn,{modelValue:w.value,"onUpdate:modelValue":p[31]||(p[31]=y=>w.value=y),title:"如何加入手機桌面?","close-text":"知道了",size:"lg"},{default:Ye(()=>[c("div",If,[c("button",{type:"button",role:"tab","aria-selected":D.value==="ios",class:Z(["os-tab",{"is-active":D.value==="ios"}]),onClick:p[29]||(p[29]=y=>D.value="ios")},[Df,k(" iOS ")],10,kf),c("button",{type:"button",role:"tab","aria-selected":D.value==="android",class:Z(["os-tab",{"is-active":D.value==="android"}]),onClick:p[30]||(p[30]=y=>D.value="android")},[Nf,k(" Android ")],10,Tf)]),D.value==="ios"?(_(),C(Ae,{key:0},[Mf,Rf,Of,xf,Lf,Ff,Hf,zf,Vf,Wf,jf],64)):(_(),C(Ae,{key:1},[Gf,Kf,Qf,Yf,Xf,Jf,qf,$f,Zf],64))]),_:1},8,["modelValue"]),Pe(pn,{modelValue:g.value,"onUpdate:modelValue":p[32]||(p[32]=y=>g.value=y),title:"嗨！歡迎使用 重機能停哪?","close-text":"開始使用"},{footer:Ye(()=>[c("button",{class:"btn btn-primary",onClick:dn},"開始使用")]),default:Ye(()=>[e6,n6,t6,c("div",o6,[i6,c("ul",s6,[c("li",null,[r6,c("span",null,[l6,a6,k(" 看看哪些車友貢獻最多停車資訊!點左下角的 🏆 按鈕,或 "),c("a",{href:"#",class:"link",onClick:Mo(Ls,["prevent"])},"點此立即查看")])])])]),c6,d6,c("div",{class:"welcome-support-wrap"},[c("button",{type:"button",class:"btn btn-coffee btn-sm",onClick:$}," ❤️ 贊助支持，讓我有動力繼續更新 ")]),h6]),_:1},8,["modelValue"]),Pe(Pm,{open:en.value,"onUpdate:open":p[33]||(p[33]=y=>en.value=y),mode:_n.value,initial:vn.value,"default-coord":vt.value,nickname:L(be),"is-owner":!0,"is-admin":L(gt),submitting:mn.value,"has-existing-override":Fs.value,history:pc.value,"onUpdate:nickname":p[34]||(p[34]=y=>be.value=y),onSubmit:p[35]||(p[35]=y=>_n.value==="override"?Cc(y):Ec(y)),onDelete:Bc,onReset:Uc},null,8,["open","mode","initial","default-coord","nickname","is-admin","submitting","has-existing-override","history"]),nn.value?(_(),C("div",u6,p6)):W("",!0),nn.value?(_(),C("div",f6,[y6,c("div",{class:"pick-banner-actions"},[c("button",{class:"btn btn-outline btn-sm",onClick:bc},"取消"),c("button",{class:"btn btn-primary btn-sm",onClick:yc},[b6,k(" 使用此位置 ")])])])):W("",!0),Pe(pn,{modelValue:N.value,"onUpdate:modelValue":p[36]||(p[36]=y=>N.value=y),title:"共筆停車點說明","close-text":"我知道了",size:"lg"},{default:Ye(()=>[g6,A6,_6,v6,P6,C6,U6]),_:1},8,["modelValue"]),Pe(pn,{modelValue:_e.value,"onUpdate:modelValue":p[37]||(p[37]=y=>_e.value=y),title:"貢獻排行榜","close-text":"關閉"},{default:Ye(()=>[E6,xs.value.length?(_(),C("div",B6,[(_(!0),C(Ae,null,xe(xs.value,(y,se)=>(_(),C("div",{key:y.id,class:Z(["leaderboard-item",`rank-${se+1}`])},[c("span",w6,B(["🥇","🥈","🥉"][se]||`#${se+1}`),1),c("div",S6,[c("span",I6,B(mc(y)),1),c("span",k6," 共筆 "+B(y.community)+" 次 · 修改官方點 "+B(y.override)+" 次 ",1)]),c("span",D6,[k(B(y.total),1),T6])],2))),128))])):(_(),C("p",N6," 目前還沒有任何貢獻紀錄,快來成為第一位上榜的車友吧! "))]),_:1},8,["modelValue"]),Pe(Nm,{active:oe.value,"onUpdate:active":p[38]||(p[38]=y=>oe.value=y),steps:Re,onFinish:$e},null,8,["active"])],64))}},O6=cn(R6,[["__scopeId","data-v-8c02e793"]]);Hc(O6).mount("#app");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./serviceWorker.js").catch(()=>{})});
