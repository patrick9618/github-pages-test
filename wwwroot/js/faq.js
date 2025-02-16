window.faqUtils = {
    toggleHeight: function (element, isVisible) {
        if (!element) return;

        if (isVisible) {
            // Measure the actual height of the content
            const scrollHeight = element.scrollHeight;
            element.style.maxHeight = scrollHeight + "px";
        } else {
            // Reset max-height to collapse the element
            element.style.maxHeight = "0px";
        }
    }
};
