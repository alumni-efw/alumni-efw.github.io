---
layout: page
title: Talk Time
permalink: /talk-time/
order: 2
nav: true
---

<h1>Keep practicing English with your Alumni community</h1>

<div id="talkTime-section1">
  <div class="container-md mt-4">
    <p>You finished English for Work, but you do not have to continue your journey alone. Talk Time is a friendly online meeting where Alumni members practice English, share experiences, and support each other.</p>
    <p>Each week, we talk about one topic together. You can speak, listen, ask questions, learn from others, and meet people who may be going through a similar job search or adaptation experience.</p>
    <p>You do not need perfect English or special preparation. You can join when you have time and participate at your own pace.</p>
    <p>Talk Time is not a class, a test, or an interview. It is a safe place to practice real conversation, make mistakes, build confidence, and stay connected with the Alumni community.</p>
  </div>
</div>

<div id="talkTime-section2" class="mt-4 pt-4 border-top">
  <div class="row talk-time-section">
    <div class="col-md-8">
      <p class="fs-3 fw-semibold">How Talk Time works</p>
      <div class="container-md">
        <p>Each session starts with a short introduction to the topic. The facilitator shares discussion questions, examples, and useful vocabulary to help everyone get ready for the conversation.</p>
        <p>After that, we move into small Zoom breakout rooms. This gives you more time to speak, listen, and practice English in a group of 2-3 people. You can respond to the questions, share a short example from your life, or simply join the conversation in the way that feels comfortable for you.</p>
        <p>At the end of the session, everyone comes back to the main room for a short closing. Participants may share one thought, question, or takeaway from the discussion.</p>
      </div>
    </div>
    <div class="col-md-4">
      <p class="fw-medium">Choose the time that works for you</p>
      <table class="table">
        <tbody>
          <tr>
            <td><i class="fa-regular {{ site.talktime-icon1 }}"></i></td>
            <td>{{ site.talktime-date1 }}</td>
            <td class="text-end">{{ site.talktime-time1 }}</td>
          </tr>
          {% if site.talktime-date2 %}
          <tr>
            <td><i class="fa-regular {{ site.talktime-icon2 }}"></i></td>
            <td>{{ site.talktime-date2 }}</td>
            <td class="text-end">{{ site.talktime-time2 }}</td>
          </tr>
          {% endif %}
        </tbody>
      </table>
      <div class="text-center font-weight-light">Find the link and the topic of the week in our community channels.</div>
      <div class="social-icons row justify-content-center">
        <a class="social-btn"
          href=" {{ site.whatsapp_link }}"
          target="_blank"
          aria-label="WhatsApp">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  </div>
</div>

<div id="talkTime-section3" class="mt-4 pt-4 border-top">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
    <!-- FAQ: talk time-->
  <p class="fs-3 fw-semibold">Frequently Asked Questions</p>
  <p class="font-weight-light">
    Visit our full <a class="page-content-link" href="/faq/">FAQ page</a> for more helpful information about our Alumni Community, events, and resources.
  </p>

  {% assign highlighted_items=site.data.faq.talktime.items | where: "highlighted", true %}
  {% include faq-list.html data=highlighted_items %}

</div>
