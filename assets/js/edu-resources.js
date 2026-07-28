document.addEventListener("DOMContentLoaded", () => {
  const resourceSections = document.querySelectorAll("[data-resource-section]");

  resourceSections.forEach((section) => {
    const triggers = Array.from(
      section.querySelectorAll("[data-resource-trigger]")
    );
    const cards = Array.from(section.querySelectorAll("[data-resource-card]"));
    const select = section.querySelector("[data-resource-select]");

    if (!triggers.length || !cards.length) return;

    const showResource = (cardId) => {
      const activeCard = cards.find((card) => card.id === cardId);

      if (!activeCard) return;

      cards.forEach((card) => {
        const isActive = card === activeCard;

        card.hidden = !isActive;
        card.classList.toggle("is-active", isActive);
      });

      triggers.forEach((trigger) => {
        const isActive = trigger.dataset.resourceTrigger === cardId;

        trigger.classList.toggle("is-active", isActive);
        trigger.setAttribute("aria-selected", String(isActive));
      });

      if (select && select.value !== cardId) {
        select.value = cardId;
      }
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        showResource(trigger.dataset.resourceTrigger);
      });
    });

    select?.addEventListener("change", (event) => {
      showResource(event.target.value);
    });

    const initialCardId =
      triggers.find((trigger) => trigger.classList.contains("is-active"))
        ?.dataset.resourceTrigger || cards[0].id;

    showResource(initialCardId);
  });
});
