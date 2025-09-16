const landmarks = [
  {
    id: "garapan",
    name: "Garapan",
    tagline: "Saipan's seaside cultural heart",
    summary:
      "Evenings in Garapan glow with music, night markets, and waterfront promenades lined with flame trees and lanterns.",
    description:
      "Garapan is the pulse of Saipan—home to the American Memorial Park, museums that tell stories of resilience, and a waterfront dotted with cafés and boutique shops. Grab a latte, rent a paddleboard, or join a sunset cruise before the stars appear over the Philippine Sea.",
    image: "img/Saipan_Garapan.jpg",
    alt: "Garapan boardwalk at sunset with the Saipan skyline in the distance",
    mapPosition: { x: 52, y: 48 },
    accent: "#ff7043",
    accentInk: "#541b02",
    highlights: [
      "American Memorial Park",
      "Night markets & cafés",
      "Sunset boardwalks",
    ],
  },
  {
    id: "beach-road",
    name: "Beach Road",
    tagline: "Flame tree-lined sunsets and coastal cycling",
    summary:
      "A breezy boulevard hugging the lagoon, perfect for joggers, cyclists, and slow sunsets framed by brilliant flame trees.",
    description:
      "Beach Road connects villages with seaside parks and the island’s celebrated Flame Tree Festival. Bike beneath crimson blossoms, sample street food from the mobile kiosks, and watch the sky ignite with color as the sun sinks over the lagoon.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    alt: "Waves rolling across turquoise water at golden hour",
    mapPosition: { x: 49, y: 58 },
    accent: "#ec407a",
    accentInk: "#490822",
    highlights: [
      "Flame Tree Festival views",
      "Jogging & cycling paths",
      "Seaside food stalls",
    ],
  },
  {
    id: "marpi",
    name: "Marpi Ridge",
    tagline: "Clifftop memorials with sweeping ocean vistas",
    summary:
      "The dramatic northern tip of Saipan pairs solemn memorials with panoramic overlooks of endless cobalt water.",
    description:
      "Journey north to Marpi Ridge to stand at the Banzai and Suicide Cliffs, where sheer limestone drops meet an endless horizon. The breeze carries a hush over peace memorials, while the lookout toward Bird Island reveals turquoise reefs and soaring seabirds.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Cliffs overlooking the Pacific Ocean with dramatic clouds",
    mapPosition: { x: 58, y: 20 },
    accent: "#42a5f5",
    accentInk: "#06264b",
    highlights: [
      "Banzai & Suicide Cliffs",
      "Peace memorials",
      "Bird Island lookouts",
    ],
  },
  {
    id: "managaha",
    name: "Managaha Island",
    tagline: "Snorkeling paradise in a turquoise lagoon",
    summary:
      "Just a short boat ride from Garapan, Managaha is a protected sand island alive with coral gardens and lazy hammocks.",
    description:
      "Spend the day on powder-soft sand, drift with reef fish in crystalline water, and let gentle trade winds rock you in the shade of palms. Managaha’s shallow reefs make it a favorite for families and first-time snorkelers alike.",
    image:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80",
    alt: "A tiny tropical island surrounded by vivid turquoise water",
    mapPosition: { x: 32, y: 46 },
    accent: "#26c6da",
    accentInk: "#003942",
    highlights: [
      "Glass-bottom boat rides",
      "Coral reef snorkeling",
      "Lagoon picnics",
    ],
  },
  {
    id: "bird-island",
    name: "Bird Island Sanctuary",
    tagline: "Protected wildlife haven wrapped in jade water",
    summary:
      "A limestone islet embraced by the Mariana Trench Marine National Monument, celebrated for nesting seabirds and radiant reefs.",
    description:
      "Follow the interpretive trail to the overlook and witness teal water swirling around Bird Island’s limestone crown. At low tide, tide pools shimmer with tiny creatures while frigatebirds trace the wind above the sanctuary.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
    alt: "A small limestone island surrounded by turquoise water and surf",
    mapPosition: { x: 68, y: 28 },
    accent: "#7e57c2",
    accentInk: "#2a0f4f",
    highlights: [
      "Seabird sanctuary",
      "Tide pool discoveries",
      "Interpretive trail",
    ],
  },
  {
    id: "ladder-beach",
    name: "Ladder Beach",
    tagline: "Secret cove framed by limestone caves",
    summary:
      "Descend wooden steps into a natural amphitheater of stone arches, soft sand, and gentle surf on the island’s south coast.",
    description:
      "Carved by waves, Ladder Beach reveals a sheltered cove perfect for quiet swims and photo-worthy limestone caves. Arrive early to watch sunlight pour through the archways and illuminate the emerald water.",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    alt: "Hidden beach with limestone cliffs and clear aqua water",
    mapPosition: { x: 54, y: 78 },
    accent: "#ab47bc",
    accentInk: "#3b094d",
    highlights: [
      "Limestone caves",
      "Calm snorkeling cove",
      "Golden hour photography",
    ],
  },
];

const mapWrapper = document.querySelector(".map-wrapper");
const mapCard = document.querySelector(".map-card");
const infoCard = document.querySelector(".map-info-card");
const infoTitle = document.getElementById("landmark-title");
const infoSubtitle = document.getElementById("landmark-subtitle");
const infoDescription = document.getElementById("landmark-description");
const infoImage = document.getElementById("landmark-image");
const factChips = document.getElementById("landmark-facts");
const nextButton = document.getElementById("next-landmark");
const chipsContainer = document.getElementById("landmark-chips");
const cardGrid = document.getElementById("landmark-grid");
const backToTopFab = document.getElementById("back-to-top");

const markersLayer = document.createElement("div");
markersLayer.className = "map-markers";
mapCard.appendChild(markersLayer);

const markerElements = [];
const chipElements = [];

landmarks.forEach((landmark, index) => {
  const marker = document.createElement("button");
  marker.type = "button";
  marker.className = "map-marker";
  marker.style.setProperty("--x", `${landmark.mapPosition.x}%`);
  marker.style.setProperty("--y", `${landmark.mapPosition.y}%`);
  marker.style.setProperty("--accent-color", landmark.accent);
  marker.style.setProperty("--accent-ink", landmark.accentInk);
  marker.dataset.landmarkId = landmark.id;
  marker.setAttribute("aria-label", `Show highlights for ${landmark.name}`);
  marker.setAttribute("aria-pressed", "false");
  marker.innerHTML = `
    <span class="material-icons-round" aria-hidden="true">location_on</span>
    <span class="marker-label">${landmark.name}</span>
  `;
  marker.addEventListener("click", () => showLandmark(index, true));
  markerElements.push(marker);
  markersLayer.appendChild(marker);

  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "assist-chip";
  chip.textContent = landmark.name;
  chip.dataset.landmarkId = landmark.id;
  chip.setAttribute("role", "tab");
  chip.setAttribute("aria-selected", "false");
  chip.addEventListener("click", () => showLandmark(index, true));
  chipElements.push(chip);
  chipsContainer.appendChild(chip);

  const card = document.createElement("article");
  card.className = "experience-card";
  card.style.setProperty("--accent-color", landmark.accent);
  card.innerHTML = `
    <h3>${landmark.name}</h3>
    <p class="tagline">${landmark.tagline}</p>
    <div class="card-media">
      <img src="${landmark.image}" alt="${landmark.alt}" loading="lazy">
    </div>
    <p>${landmark.summary}</p>
    <div class="card-facts">
      ${landmark.highlights.map((fact) => `<span>${fact}</span>`).join("")}
    </div>
  `;
  cardGrid.appendChild(card);
});

let activeIndex = 0;

function showLandmark(index, focusMarker = false) {
  const landmark = landmarks[index];
  activeIndex = index;

  infoTitle.textContent = landmark.name;
  infoSubtitle.textContent = landmark.tagline;
  infoDescription.textContent = landmark.description;
  infoCard.style.setProperty("--accent-color", landmark.accent);
  infoCard.style.setProperty("--accent-ink", landmark.accentInk);

  if (landmark.image) {
    infoImage.src = landmark.image;
    infoImage.alt = landmark.alt || landmark.name;
    infoImage.removeAttribute("hidden");
  } else {
    infoImage.setAttribute("hidden", "");
  }

  factChips.innerHTML = "";
  landmark.highlights.forEach((fact) => {
    const span = document.createElement("span");
    span.textContent = fact;
    factChips.appendChild(span);
  });

  markerElements.forEach((marker, markerIndex) => {
    const isActive = markerIndex === index;
    marker.classList.toggle("active", isActive);
    marker.setAttribute("aria-pressed", String(isActive));
    if (isActive && focusMarker) {
      marker.focus({ preventScroll: true });
    }
  });

  chipElements.forEach((chip, chipIndex) => {
    const isActive = chipIndex === index;
    chip.classList.toggle("active", isActive);
    chip.setAttribute("aria-selected", String(isActive));
  });
}

showLandmark(0);

if (nextButton) {
  nextButton.addEventListener("click", () => {
    const nextIndex = (activeIndex + 1) % landmarks.length;
    showLandmark(nextIndex, true);
  });
}

if (mapWrapper && window.matchMedia("(pointer: fine)").matches) {
  const maxTilt = 6;
  mapWrapper.addEventListener("pointermove", (event) => {
    const rect = mapWrapper.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;
    const tiltX = ((0.5 - relativeY) * maxTilt).toFixed(2);
    const tiltZ = ((relativeX - 0.5) * maxTilt).toFixed(2);
    mapCard.style.setProperty("--dynamic-x", `${tiltX}deg`);
    mapCard.style.setProperty("--dynamic-z", `${tiltZ}deg`);
  });

  mapWrapper.addEventListener("pointerleave", () => {
    mapCard.style.setProperty("--dynamic-x", "0deg");
    mapCard.style.setProperty("--dynamic-z", "0deg");
  });
}

if (backToTopFab) {
  window.addEventListener("scroll", () => {
    backToTopFab.classList.toggle("visible", window.scrollY > 360);
  });

  backToTopFab.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey) {
    return;
  }

  if (event.key === "ArrowRight") {
    const nextIndex = (activeIndex + 1) % landmarks.length;
    showLandmark(nextIndex, true);
    event.preventDefault();
  } else if (event.key === "ArrowLeft") {
    const prevIndex = (activeIndex - 1 + landmarks.length) % landmarks.length;
    showLandmark(prevIndex, true);
    event.preventDefault();
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

document
  .querySelectorAll(".experience-card, .visual-card")
  .forEach((element) => {
    revealObserver.observe(element);
  });
