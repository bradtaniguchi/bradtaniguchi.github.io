---
title: My re-attempt at learning clojure
description: '(learn "clojure")'
published: true
date: 2021-08-20T00:00:00.000Z
slug: re-learning-clojure
tags:
  - clojure
---

# My re-attempt at learning Clojure.

I tried to learn clojure a few years ago after reading this [article from circleci](https://circleci.com/blog/how-circleci-processes-4-5-million-builds-per-month/). I was impressed with the language, and finally found a reason to really dive into functional programming, because it seemed like something that could be useful for high performance and highly scalable code.

I bought the popular book ["Clojure For the Brave and True" by Daniel Higginbotham.](https://www.braveclojure.com/) (who amazingly provides the book to read for free online, but recommends you pay) and just couldn't wait to get started.

However after a few days of struggling, I started to "lose sight" of whatever perceived advantages I thought Clojure could offer. Reality started to set in once I ran into the following code snippet in chapter 3 of the book, which was where one of the first real examples is given.

```clojure
(def asym-hobbit-body-parts [{:name "head" :size 3}
                             {:name "left-eye" :size 1}
                             {:name "left-ear" :size 1}
                             {:name "mouth" :size 1}
                             {:name "nose" :size 1}
                             {:name "neck" :size 2}
                             {:name "left-shoulder" :size 3}
                             {:name "left-upper-arm" :size 3}
                             {:name "chest" :size 10}
                             {:name "back" :size 10}
                             {:name "left-forearm" :size 3}
                             {:name "abdomen" :size 6}
                             {:name "left-kidney" :size 1}
                             {:name "left-hand" :size 2}
                             {:name "left-knee" :size 2}
                             {:name "left-thigh" :size 4}
                             {:name "left-lower-leg" :size 3}
                             {:name "left-achilles" :size 1}
                             {:name "left-foot" :size 2}])
(defn matching-part
  [part]
  {:name (clojure.string/replace (:name part) #"^left-" "right-")
   :size (:size part)})

(defn symmetrize-body-parts
  "Expects a seq of maps that have a :name and :size"
  [asym-body-parts]
  (loop [remaining-asym-parts asym-body-parts
         final-body-parts []]
    (if (empty? remaining-asym-parts)
      final-body-parts
      (let [[part & remaining] remaining-asym-parts]
        (recur remaining
               (into final-body-parts
                     (set [part (matching-part part)])))))))

```

**example call and output**

```clojure
(symmetrize-body-parts asym-hobbit-body-parts)
; => [{:name "head", :size 3}
      {:name "left-eye", :size 1}
      {:name "right-eye", :size 1}
      {:name "left-ear", :size 1}
      {:name "right-ear", :size 1}
      {:name "mouth", :size 1}
      {:name "nose", :size 1}
      {:name "neck", :size 2}
      {:name "left-shoulder", :size 3}
      {:name "right-shoulder", :size 3}
      {:name "left-upper-arm", :size 3}
      {:name "right-upper-arm", :size 3}
      {:name "chest", :size 10}
      {:name "back", :size 10}
      {:name "left-forearm", :size 3}
      {:name "right-forearm", :size 3}
      {:name "abdomen", :size 6}
      {:name "left-kidney", :size 1}
      {:name "right-kidney", :size 1}
      {:name "left-hand", :size 2}
      {:name "right-hand", :size 2}
      {:name "left-knee", :size 2}
      {:name "right-knee", :size 2}
      {:name "left-thigh", :size 4}
      {:name "right-thigh", :size 4}
      {:name "left-lower-leg", :size 3}
      {:name "right-lower-leg", :size 3}
      {:name "left-achilles", :size 1}
      {:name "right-achilles", :size 1}
      {:name "left-foot", :size 2}
      {:name "right-foot", :size 2}]
```

[ref](https://www.braveclojure.com/do-things/#The_Shire_s_Next_Top_Model)

I'm not sure what originally tripped me up from this code. Maybe it was me going to fast, or getting overwhelmed by all the variables. I spent a few hour or so trying to digest the code, understand it, and ultimatly gave up on learning the language shortly after.

---

## Whats changing this time around

I believe I have gained a good amount of experience the last few years since my last attempt, and might be able to grind it out longer than before. I also believe my new approach will help.

This time I plan on **not** only relying on the book, instead I will use a multitude of sources to "attack" the problem from multiple angles. Furthermore, I also plan on leveraging a more "active" approach where I play around with the basic language syntax much more before moving on.

Finally, I have a specific goal of creating a basic API in Clojure using in-memory. This goal might take a while to get to, but in the mean time I'll see how far I can get with basic Clojure.

I'll try to post about my progress, or at a bare minimum post about my failures and if I give up in the end!

happy coding!
