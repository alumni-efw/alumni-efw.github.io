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
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Who can join Talk Time?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Talk Time is for members of the English for Work Alumni Network. If you are an English for Work graduate and want to join Alumni, please start with the New Members page.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Do I need to attend every week?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            No. You can join when you have time. Talk Time is a resource you can return to whenever it is useful for you.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Do I need perfect English?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            No. Talk Time is a place to practice, not a place to be perfect. Mistakes are a normal part of learning and speaking.
          </div>
        </div>
      </div>
    </div>
</div>
