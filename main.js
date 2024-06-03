// main.js

document.addEventListener("DOMContentLoaded", () => {
  const {
    heroSection,
    servicesSection,
    whyChooseUsSection,
    projectsSection,
    growthSection,
    clientFeedbackSection,
    clientLogosSection,
  } = content;

  // Hero Section
  document.querySelector(".contact_text-container h1").textContent =
    heroSection.heading1;
  document.querySelector(".contact_text-container h2").textContent =
    heroSection.heading2;
  document.querySelector(".contact_text-container p").textContent =
    heroSection.paragraph;
  document.querySelector(".contact_button").textContent =
    heroSection.buttonText;
  document.querySelector(".child2_img_container img").src = heroSection.imgSrc;
  document.querySelector(".child2_img_container img").alt = heroSection.imgAlt;

  // Services Section
  document.querySelector(".service_heading").textContent =
    servicesSection.heading;
  document.querySelector(".service_subheading").textContent =
    servicesSection.subHeading;
  document.querySelector(".servie_subHead_descp").textContent =
    servicesSection.description;

  const carouselTrack = document.querySelector(".carousel-track");
  servicesSection.carouselImages.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    carouselItem.appendChild(imgElement);
    carouselTrack.appendChild(carouselItem);
  });

  const dots = document.querySelectorAll(".carousel-dot");

  // Carousel Logic
  let currentIndex = 0;

  function updateCarousel(index) {
    dotArray.forEach((dot) => dot.classList.remove("active"));
    dotArray[index].classList.add("active");
  }

  dots.forEach((dot, index) => {
    dot.dataset.slide = index;
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.dataset.slide);
      updateCarousel(currentIndex);
    });
  });

  const dotArray = Array.from(dots);

  // Why Choose Us Section
  document.querySelector(".chooseUs .heading").textContent =
    whyChooseUsSection.heading;
  document.querySelector(".chooseUs .subHeading").textContent =
    whyChooseUsSection.subHeading;

  const featuresContainer = document.querySelector(".chooseUs .container");
  whyChooseUsSection.features.forEach((feature) => {
    const featureDiv = document.createElement("div");
    featureDiv.classList.add("square");

    const iconDiv = document.createElement("div");
    iconDiv.classList.add("icon");
    const iconImg = document.createElement("img");
    iconImg.src = feature.imgSrc;
    iconImg.alt = feature.imgAlt;
    iconDiv.appendChild(iconImg);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = feature.title;

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.textContent = feature.description;

    featureDiv.appendChild(iconDiv);
    featureDiv.appendChild(titleDiv);
    featureDiv.appendChild(descriptionDiv);

    featuresContainer.appendChild(featureDiv);
  });

  // Projects Section
  document.querySelector(".weAreBest h1").textContent = projectsSection.heading;
  document.querySelector(".weAreBest h2").textContent =
    projectsSection.subHeading;

  const projectsContainer = document.querySelector(
    ".description_box_we_are_best"
  );
  projectsSection.projects.forEach((project, index) => {
    const projectBox = document.createElement("div");
    projectBox.classList.add(`box${index + 1}_we_are_best`);

    const projectTitle = document.createElement("h1");
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement("h2");
    projectDescription.textContent = project.description;

    projectBox.appendChild(projectTitle);
    projectBox.appendChild(projectDescription);
    projectsContainer.appendChild(projectBox);
  });

  const projectImg = document.createElement("img");
  projectImg.src = projectsSection.projects[0].imgSrc;
  projectImg.alt = projectsSection.projects[0].imgAlt;
  document.querySelector(".Image_We_are_best").appendChild(projectImg);

  // Growth Section
  document.querySelector(".growth-heading").textContent = growthSection.heading;
  document.querySelector(".growth-subheading").textContent =
    growthSection.subHeading;

  const growthContainer = document.querySelector(".growth-container");
  growthSection.growthStats.forEach((stat) => {
    const growthBox = document.createElement("div");
    growthBox.classList.add("growth-box");

    const imgElement = document.createElement("img");
    imgElement.src = stat.imgSrc;
    imgElement.alt = stat.imgAlt;

    const numberDiv = document.createElement("div");
    numberDiv.classList.add("growth-number");
    numberDiv.textContent = stat.number;

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("growth-description");
    descriptionDiv.textContent = stat.description;

    growthBox.appendChild(imgElement);
    growthBox.appendChild(numberDiv);
    growthBox.appendChild(descriptionDiv);

    growthContainer.appendChild(growthBox);
  });

  // Client Feedback Section
  document.querySelector(".client-feedback h1").textContent =
    clientFeedbackSection.heading;
  document.querySelector(".client-feedback h2").textContent =
    clientFeedbackSection.subHeading;

  const testimonial = document.querySelector(".testimonial p");
  testimonial.textContent = clientFeedbackSection.feedbacks[0].quote;
  const quoteImg = document.createElement("img");
  quoteImg.src = clientFeedbackSection.feedbacks[0].imgSrc;
  quoteImg.alt = clientFeedbackSection.feedbacks[0].imgAlt;
  testimonial.prepend(quoteImg);

  document.querySelector(".client-name").textContent =
    clientFeedbackSection.feedbacks[0].name;
  document.querySelector(".client-position").textContent =
    clientFeedbackSection.feedbacks[0].position;

  // Client Logos Section
  const logosContainer = document.querySelector(".client-logs");
  clientLogosSection.logos.forEach((logo) => {
    const logoImg = document.createElement("img");
    logoImg.src = logo.src;
    logoImg.alt = logo.alt;
    logosContainer.appendChild(logoImg);
  });
});
