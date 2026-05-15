---
layout: page
title: FAQ
permalink: /faq/
nav: false
---
<h1 class="pb-4">Frequently Asked Questions</h1>
<div class="section">
  <p>Have a question?</p>
  <p>You’re in the right place. We’ve gathered answers to the most common questions about our Alumni community, events, resources, and ways to get involved.</p>

  <p>Can’t find an answer?</p>
  <p>We’d be happy to help. Email us at <a href="mailto:{{ site.email }}" aria-label="Email">
  alumni.efw@gmail.com</a> or connect with us through [ WhatsApp ]  or  [ LinkedIn ] </p>
</div>

<!-- Full FAQ -->
<div id="full-faq-section">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
  <div class="accordion" id="accordionExample">
    <!-- FAQ section1 -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {{ site.data.faq.talktime.title }}
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          {% include faq-list.html data=site.data.faq.talktime.items %}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          {{ site.data.faq.getinvolved.title }}
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          {% include faq-list.html data=site.data.faq.getinvolved.items %}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          General
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          TBD
        </div>
      </div>
    </div>
  </div>
</div>
